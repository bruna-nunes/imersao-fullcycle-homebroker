import { AssetShow } from "@/components/AssetShow";
import { OrderStatusBadge } from "@/components/OrderStatusBadge";
import { OrderTypeBadge } from "@/components/OrderTypeBadge";
import { WalletList } from "@/components/WalletList";
import { getMyWallet, getOrders } from "@/queries/queries";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

export default async function OrdersListPage({
  searchParams
}: {
  searchParams: Promise<{ wallet_id: string}>;
}) {
  // como nao temos autenticacao, passaremos o walletIs via query param
  const { wallet_id } = await searchParams;

  if(!wallet_id) {
    return <WalletList />;
  }
  
  const wallet = await getMyWallet(wallet_id)
  
  if(!wallet) {
    return <WalletList />
  }

  const orders = await getOrders(wallet_id);

  return (
    <div className="flex flex-col space-y-5 flex-grow">
      <article className="format">
        <h1>Minhas ordens</h1>
      </article>
      <div className="overflow-x-auto w-full">
        <Table className="w-full max-w-full table-fixed">
          <TableHead>
            <TableHeadCell>Ativo</TableHeadCell>
            <TableHeadCell>Preço</TableHeadCell>
            <TableHeadCell>Quantidde</TableHeadCell>
            <TableHeadCell>Tipo</TableHeadCell>
            <TableHeadCell>Status</TableHeadCell>
          </TableHead>
          <TableBody>
            {orders.map((order, key) => (
              <TableRow key={key}>
              <TableCell>
                <AssetShow asset={order.asset}/>
              </TableCell>
              <TableCell>R$ {order.price}</TableCell>
              <TableCell>{order.shares}</TableCell>
              <TableCell>
                <OrderTypeBadge type={order.type}/>
              </TableCell>
              <TableCell>
                <OrderStatusBadge status={order.status}/>
              </TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

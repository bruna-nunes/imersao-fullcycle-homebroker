import { Wallet } from "@/models";
import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

export async function getMyWallet(walletId: string): Promise<Wallet> {
  const response = fetch(`http://localhost:3000/wallets/${walletId}`)
  return (await response).json();
}

export default async function MyWalleList({
  searchParams
}: {
  searchParams: Promise<{ wallet_id: string}>;
}) {
  // como nao temos autenticacao, passaremos o walletIs via query param
  const { wallet_id } = await searchParams;
  const wallet = await getMyWallet(wallet_id)

  return (
    <div className="flex flex-col space-y-5 flex-grow">
      <article className="format">
        <h1>Minha carteira</h1>
      </article>
      <div className="overflow-x-auto w-full">
        <Table className="w-full max-w-full table-fixed">
          <TableHead>
            <TableHeadCell>Ativo</TableHeadCell>
            <TableHeadCell>Cotação</TableHeadCell>
            <TableHeadCell>Quantidade</TableHeadCell>
            <TableHeadCell>Comprar/vender</TableHeadCell>
          </TableHead>
          <TableBody>
            {wallet.assets.map((walletAsset, key) => (
              <TableRow key={key}>
              <TableCell>{walletAsset.asset.name}</TableCell>
              <TableCell>R$ {walletAsset.asset.price}</TableCell>
              <TableCell>{walletAsset.shares}</TableCell>
              <TableCell>
                <Button color="light">Comprar/vender</Button>
              </TableCell>
            </TableRow>
            ))}

          </TableBody>
        </Table>
      </div>
    </div>
  );
}

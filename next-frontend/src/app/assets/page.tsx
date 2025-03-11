import { AssetShow } from "@/components/AssetShow";
import { WalletList } from "@/components/WalletList";
import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { getAssets, getMyWallet } from "@/queries/queries";
import Link from "next/link";

export default async function AssetsListPage({
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

  const assets = await getAssets();

  return (
    <div className="flex flex-col space-y-5 flex-grow">
      <article className="format">
        <h1>Ativos</h1>
      </article>
      <div className="overflow-x-auto w-full">
        <Table className="w-full max-w-full table-fixed">
          <TableHead>
            <TableHeadCell>Ativo</TableHeadCell>
            <TableHeadCell>Cotação</TableHeadCell>
            <TableHeadCell>Comprar/vender</TableHeadCell>
          </TableHead>
          <TableBody>
            {assets.map((asset, key) => (
              <TableRow key={key}>
              <TableCell>
                <AssetShow asset={asset}/>
              </TableCell>
              <TableCell>R$ {asset.price}</TableCell>
              <TableCell>
                <Button color="light" as={Link} href={`/assets/${asset.symbol}?wallet_id=${wallet_id}`}>Comprar/vender</Button>
              </TableCell>
            </TableRow>
            ))}

          </TableBody>
        </Table>
      </div>
    </div>
  );
}

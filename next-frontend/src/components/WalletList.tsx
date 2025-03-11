import {
    Alert,
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeadCell,
    TableRow,
  } from "flowbite-react";
import Link from "next/link";
import { Wallet } from "@/models";
  
  export async function getWallets(): Promise<Wallet[]> {
    const response = await fetch(`http://localhost:3000/wallets`);
  
    return response.json();
  }
  
  export async function WalletList() {
    const wallets = await getWallets();
  
    return (
      <div className="flex flex-col space-y-5 flex-grow">
        <Alert color="failure">Escolha uma carteira!</Alert>
        <article className="format">
          <h1>Carteiras existentes</h1>
        </article>
        <div className="overflow-x-auto w-full">
          <Table className="w-full max-w-full table-fixed">
            <TableHead>
              <TableHeadCell>ID</TableHeadCell>
              <TableHeadCell>Acessar</TableHeadCell>
            </TableHead>
            <TableBody>
              {wallets.map((wallet, key) => (
                <TableRow key={key}>
                  <TableCell>{wallet._id}</TableCell>
                  <TableCell>
                    <Button
                      color="light"
                      as={Link}
                      href={`/?wallet_id=${wallet._id}`}
                      className="w-fit"
                    >
                      Acessar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
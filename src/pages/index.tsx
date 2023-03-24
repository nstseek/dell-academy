import { Typography } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dell Academy</title>
        <meta name="description" content="Transport calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Typography variant="h6">
          Por favor, selecione uma opção no menu lateral
        </Typography>
      </main>
    </>
  );
}

import { DellLogo } from "@/components/DellLogo";
import { Sidebar } from "@/components/Sidebar";
import { dellTheme } from "@/theme";
import { ThemeProvider } from "@emotion/react";
import { Html, Head, Main, NextScript } from "next/document";
import { RootGrid, SidebarGrid, ContentGrid } from "./App.styles";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Dell Academy</title>
        <meta name="description" content="Transport calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <ThemeProvider theme={dellTheme}>
          <RootGrid container>
            <SidebarGrid item xs={3}>
              <DellLogo />
              <Sidebar />
            </SidebarGrid>
            <ContentGrid item xs={9}>
              <Main />
            </ContentGrid>
          </RootGrid>
        </ThemeProvider>
        <NextScript />
      </body>
    </Html>
  );
}

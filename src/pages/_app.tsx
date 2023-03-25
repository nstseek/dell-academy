import { DellLogo } from "@/components/DellLogo";
import { Sidebar } from "@/components/Sidebar";
import { dellTheme } from "@/theme";
import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { RootGrid, SidebarGrid, ContentGrid } from "./App.styles";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={dellTheme}>
      <QueryClientProvider client={queryClient}>
        <RootGrid container>
          <SidebarGrid item xs={3}>
            <DellLogo />
            <Sidebar />
          </SidebarGrid>
          <ContentGrid item xs={9}>
            <Component {...pageProps} />
          </ContentGrid>
        </RootGrid>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

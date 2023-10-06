import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useUser from "@/hooks/useUser";
import Header from "@/components/Layout/Header";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { user } = useUser();

  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} user={user} />
      </SWRConfig>
    </>
  );
}

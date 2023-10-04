import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useUser from "@/hooks/useUser";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { user } = useUser();

  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <h1>Hotel Tishjama</h1>
        <Component {...pageProps} user={user} />
      </SWRConfig>
    </>
  );
}

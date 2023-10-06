import { createGlobalStyle } from "styled-components";
import { Syne } from "@next/font/google";

const syne = Syne({ subsets: ["latin"] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root{
    --dark-green:#0D3B2E;
    --white: #FFFFFF;
    --off-white :#F7FAF8;
    --gold: #FFBA00;
    --light-green: #6D9773;
    --light-brown: #D09D6C;
  }
  
  body {
    margin: 0.3rem;
    background-color: #F7FAF8;
    font-family: ${syne.style.fontFamily};
  }
`;

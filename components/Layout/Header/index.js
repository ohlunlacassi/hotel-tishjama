import styled from "styled-components";
import { Croissant_One } from "@next/font/google";

export const croissantOne = Croissant_One({
  subsets: ["latin"],
  weight: "400",
});

const StyledHeader = styled.h1`
  text-align: center;
  margin: 0.1rem;
  border-radius: 1rem;
  background-color: var(--dark-green);
  color: var(--gold);
  padding: 0.5rem;
  font-family: ${croissantOne.style.fontFamily};
`;

export default function Header() {
  return <StyledHeader>Hotel Tishjama</StyledHeader>;
}

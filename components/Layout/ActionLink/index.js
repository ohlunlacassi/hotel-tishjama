import Link from "next/link";
import styled from "styled-components";

export default styled(Link)`
  background-color: var(--dark-green);
  border: 1px solid black;
  border-radius: 1rem;
  padding: 0.5rem;
  min-width: 4rem;
  font-size: 0.8rem;
  color: var(--gold);
  text-decoration: none;
`;

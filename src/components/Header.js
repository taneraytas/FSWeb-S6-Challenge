import styled from "styled-components";

const ScHeader = styled.header`
  h1 {
    margin: 1rem;
    font-size: 5rem;
    font-style: bold;
  }
`;

export default function Header({ karakterler }) {
  return (
    <ScHeader>
      {karakterler.length === 0 ? <h1>Loading</h1> : <h1>STAR WARS</h1>}
    </ScHeader>
  );
}

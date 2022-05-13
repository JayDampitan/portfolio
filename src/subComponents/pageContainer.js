import styled from "styled-components";

export const PageContainer = styled.div`
  color: ${(props) => props.theme.text};
  width: 100vw;
  height: 75vh;
  user-select: none;
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: repeat(12, 1fr);

  @media (max-width: 810px) {
    width: 100vw;
  }

  @media (max-width: 420px) {
    width: 100vw;
    height: 74vh;
  }
`;

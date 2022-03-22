import styled from "styled-components";

export const PageContainer = styled.div`
  
  color: ${(props) => props.theme.text};
  width: 100%;
  height: 65vh;
  user-select: none;
  display: grid;
  grid-template-columns: repeat(10, 1fr );
  grid-template-rows: repeat(10, 1fr);
`;
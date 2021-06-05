import styled from "styled-components";

export const ImageWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 50%;
  padding-bottom: 150px;
  max-width: 450px;

  @media (max-width: 1200px) {
    padding-left: 5px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

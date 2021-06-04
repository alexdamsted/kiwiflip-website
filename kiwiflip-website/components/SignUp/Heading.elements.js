import styled from "styled-components";

export const HeadingContainer = styled.div`
  display: flex;
  flex: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0 100px 0;
`;

export const HeadingWrap = styled.h1`
  color: #191919;
  font-weight: 600;
  padding: 30px;
`;

export const SubHeadingWrap = styled.p`
  color: #191919;
`;

export const LinkWrap = styled.a`
  text-decoration: none;
  color: #74c947;

  &:hover {
    text-decoration: underline;
  }
`;

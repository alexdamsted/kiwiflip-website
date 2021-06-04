import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 50%;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;
  width: 600px;

  @media (max-width: 768px) {
    border: none;
  }
`;

export const FormGroup = styled.div`
  display: block;
  margin: 20px 20px 20px 20px;
  float: left;

  @media (max-width: 768px) {
    width: 250px;
  }
`;

export const InputControl = styled.input`
  flex: 1 1 auto;
  display: flex;
  width: 600px;
  padding: 10px 25px;
  border-radius: 2px;
  margin: 10px 0 10px 0;
  font-size: 16px;
  border: 2px solid #ededed;
  outline: none;

  &::placeholder {
    color: grey;
  }
  @media (max-width: 768px) {
    width: 250px;
  }
`;

export const Button = styled.button`
  border-radius: 30px;
  background: #74c947;
  white-space: nowrap;
  padding: 15px;
  width: 600px;
  color: white;
  font-size: 20px;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-in;
    background: #66b83b;
  }

  @media (max-width: 768px) {
    width: 250px;
  }
`;

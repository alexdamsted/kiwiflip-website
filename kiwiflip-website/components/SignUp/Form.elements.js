import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 50%;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  margin-bottom: 150px;
  @media (max-width: 1200px) {
    padding-right: 5px;
  }
  @media (max-width: 768px) {
    flex: 100%;
  }
`;

export const FormGroup = styled.form`
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const InputControl = styled.input`
  width: 100%;
  padding: 10px 25px;
  border-radius: 2px;
  margin: 0px 0 20px 0;
  font-size: 20px;
  border: 2px solid #ededed;
  outline: none;

  &::placeholder {
    color: grey;
  }
  @media (max-width: 768px) {
    width: 100%;
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
  white-space: nowrap;

  &:hover {
    transition: all 0.3s ease-in;
    background: #66b83b;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ToS = styled.p`
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 20px;
`;

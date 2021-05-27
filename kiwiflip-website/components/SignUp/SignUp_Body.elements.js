import styled from "styled-components";

export const Container = styled.div`
  background: #f9f9f9;
  display: flex;
`;

export const Title = styled.h2`
  font-weight: 600;
  padding: 20px;

  @media (max-width: 768px) {
  }

  @media (max-width: 480px) {
    width: 300px;
  }
`;

export const SubLabel = styled.label`
  flex: none;
  display: block;
  font-weight: 500;
  font-size: 0.6em;

  @media (max-width: 768px) {
    width: 300px;
  }
`;

export const FormContainer = styled.div`
  background: #f9f9f9;
  border: 2px solid #ededed;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin: auto;
  margin-bottom: 50px;
  margin-top: 50px;
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

export const Label = styled.label`
  flex: none;
  display: block;
  width: 125px;
  font-weight: 600;
  font-size: 1em;
`;

export const InputControl = styled.input`
  flex: 1 1 auto;
  display: flex;
  width: 500px;
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
  border-radius: 3px;
  background: #74c947;
  white-space: nowrap;
  padding: 10px 30px;
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

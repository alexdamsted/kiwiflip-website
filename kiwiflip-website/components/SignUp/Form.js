import React from "react";
import {
  Button,
  FormContainer,
  FormGroup,
  InputControl,
  Container,
  ToS,
} from "./Form.elements";

const Form = ({ items }) => {
  const {
    placeholderFullName,
    placeholderEmail,
    placeholderPassword,
    buttonText,
    termsOfServiceText,
  } = items.fields;

  return (
    <>
      <Container>
        <FormContainer>
          <FormGroup>
            <InputControl placeholder={placeholderFullName} />
          </FormGroup>
          <FormGroup>
            <InputControl placeholder={placeholderEmail} />
          </FormGroup>
          <FormGroup>
            <InputControl placeholder={placeholderPassword} />
          </FormGroup>
          <FormGroup>
            <Button>{buttonText}</Button>
          </FormGroup>
          <ToS>{termsOfServiceText}</ToS>
        </FormContainer>
      </Container>
    </>
  );
};

export default Form;

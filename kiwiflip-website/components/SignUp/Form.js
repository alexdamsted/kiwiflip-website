import React from "react";
import {
  Button,
  FormContainer,
  FormGroup,
  InputControl,
  Container,
} from "./Form.elements";

const Form = ({ items }) => {
  const {
    placeholderFullName,
    placeholderEmail,
    placeholderPassword,
    buttonText,
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
        </FormContainer>
      </Container>
    </>
  );
};

export default Form;

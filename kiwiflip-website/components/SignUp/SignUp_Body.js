import React from "react";
import {
  Button,
  FormContainer,
  FormGroup,
  InputControl,
  Label,
  Container,
  Title,
  SubLabel,
} from "./SignUp_Body.elements";

const SignUp_Body = () => {
  return (
    <>
      <Container>
        <FormContainer>
          <Title>Sign Up to Kiwiflip</Title>
          <FormGroup>
            <Label>First Name</Label>
            <SubLabel>Enter your first name</SubLabel>
            <InputControl />
            <Label>Last Name</Label>
            <SubLabel>Now, your last name</SubLabel>
            <InputControl />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <SubLabel>
              Consider using a password with numbers and uppercase letters
            </SubLabel>
            <InputControl />
          </FormGroup>
          <FormGroup>
            <Label>Username</Label>
            <SubLabel>
              This is your unique username that other people will see you as
            </SubLabel>
            <InputControl />
          </FormGroup>
          <FormGroup>
            <Button>Register Account</Button>
          </FormGroup>
        </FormContainer>
      </Container>
    </>
  );
};

export default SignUp_Body;

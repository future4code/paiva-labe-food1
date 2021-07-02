import React from 'react';
import { useHistory } from 'react-router-dom'
import { InputsContainer, Form, SignUpText, Input, Button, PasswordImg, LabelEmail, LabelSenha } from '../../pages/LoginPage/styled';
import useForm from '../../hooks/useForm';
import { goToSignUp } from '../../routes/coordinator';
import { login } from '../../services/user';
import senha from '../../assets/inputIcons/senha.png';

const LoginForm = () => {
  const {form, onChange, cleanFields} = useForm({ email: "", password: "" });

  const onSubmit = (event) => {
    event.preventDefault()
    login(form, cleanFields)
  }

  const history = useHistory()

  return (
      <InputsContainer>
        <LabelEmail>E-mail*</LabelEmail>
        <LabelSenha>Senha*</LabelSenha>
        <Form onSubmit={onSubmit}>
          <Input
            type={"email"}
            name={"email"}
            placeholder={"email@email.com"}
            value={form.email}
            onChange={onChange}
            required
          >
          </Input>

          <Input
            type={"password"}
            name={"password"}
            placeholder={"Mínimo 6 caracteres"}
            value={form.password}
            onChange={onChange}
            required
          >
          </Input>
          <PasswordImg src={senha}/>
          <Button type={"submit"}>Entrar</Button>
        </Form>
        <SignUpText onClick={() => goToSignUp(history)}>Não possui Cadastro? Clique aqui.</SignUpText>
      </InputsContainer>
  );
}

export default LoginForm;
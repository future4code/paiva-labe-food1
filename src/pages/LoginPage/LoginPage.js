import React from 'react';
import { ScreenContainer, LogoImage, H1, InputsContainer, Form, SignUpText } from './styled';
import logo from '../../assets/logo.svg';
import useForm from '../../hooks/useForm';

const LoginPage = () => {
  const [form, onChange, cleanFields] = useForm({ email: "", passssword: "" });

  const onSubmit = () => {

  }

  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <H1>Entrar</H1>
      <InputsContainer>
        <Form onSubmit={onSubmit}>
          <input
            type={"email"}
            name={"email"}
            placeholder={"email@email.com"}
            value={form.email}
            onChange={onChange}
            required
          >
          </input>

          <input
            type={"password"}
            name={"passsword"}
            placeholder={"Mínimo 6 caracteres"}
            value={form.password}
            onChange={onChange}
            required
          >
          </input>
          <button>Entrar</button>
          <SignUpText>Não possui Cadastro? Clique aqui.</SignUpText>
        </Form>
      </InputsContainer>
    </ScreenContainer>
  );
}

export default LoginPage;
import React from 'react';
import { useHistory } from 'react-router-dom'
import { InputsContainer, Form, Input, Button, LabelSenha, LabelSenha2, LabelNome, LabelCpf, LabelEmail } from '../../pages/SignUpPage/styled';
import useForm from '../../hooks/useForm';
import { signUp } from '../../services/user';

const SignUpForm = () => {
    const { form, onChange, cleanFields } = useForm({ name: "", email: "", cpf: "", password: "" });
    const history = useHistory();

    const onSubmit = (event) => {
        event.preventDefault()
        signUp(form, cleanFields, history)
    }


    return (
        <InputsContainer>
            <LabelSenha>Senha*</LabelSenha>
            <LabelSenha2>Confirmar*</LabelSenha2>
            <LabelCpf>CPF*</LabelCpf>
            <LabelEmail>E-mail*</LabelEmail>
            <LabelNome>Nome*</LabelNome>
            <Form onSubmit={onSubmit}>
                <Input
                    type={"text"}
                    name={"name"}
                    placeholder={"Nome e sobrenome"}
                    value={form.name}
                    onChange={onChange}
                    required
                >
                </Input>

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
                    type={"text"}
                    name={"cpf"}
                    placeholder={"000.000.000-00"}
                    value={form.cpf}
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
                <Input
                    type={"password"}
                    name={"password"}
                    placeholder={"Confirme a senha anterior"}
                    value={form.password}
                    onChange={onChange}
                    required
                >
                </Input>
                <Button type={"submit"}>Criar</Button>
            </Form>
        </InputsContainer>
    );
}

export default SignUpForm;
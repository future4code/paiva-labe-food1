import React from 'react';
import { useHistory } from 'react-router-dom'
import { InputsContainer, Form, Input, Button, LabelBairro, LabelCidade, LabelComplemento, LabelNumero, LabelLogradouro, LabelEstado } from '../../pages/AddressScreenPage/styled';
import useForm from '../../hooks/useForm';
import { addAddress } from '../../services/user';

const NewAddressForm = () => {
    const { form, onChange, cleanFields } = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: "" });
    const history = useHistory();

    const onSubmit = (event) => {
        event.preventDefault()
        addAddress(form, cleanFields, history)
    }


    return (
        <InputsContainer>
            <LabelLogradouro>Logradouro*</LabelLogradouro>
            <LabelNumero>Número*</LabelNumero>
            <LabelComplemento>Complemento*</LabelComplemento>
            <LabelBairro>Bairro*</LabelBairro>
            <LabelCidade>Cidade*</LabelCidade>
            <LabelEstado>Estado*</LabelEstado>

            <Form onSubmit={onSubmit}>
                <Input
                    type={"text"}
                    name={"street"}
                    placeholder={"Rua / Av"}
                    value={form.street}
                    onChange={onChange}
                    required
                >
                </Input>

                <Input
                    type={"text"}
                    name={"number"}
                    placeholder={"Número"}
                    value={form.number}
                    onChange={onChange}
                    required
                >
                </Input>
                <Input
                    type={"text"}
                    name={"complement"}
                    placeholder={"Apto. / Bloco"}
                    value={form.complement}
                    onChange={onChange}
                >
                </Input>
                <Input
                    type={"text"}
                    name={"neighbourhood"}
                    placeholder={"Bairro"}
                    value={form.neighbourhood}
                    onChange={onChange}
                    required
                >
                </Input>
                <Input
                    type={"text"}
                    name={"city"}
                    placeholder={"Cidade"}
                    value={form.city}
                    onChange={onChange}
                    required
                >
                </Input>
                <Input
                    type={"text"}
                    name={"state"}
                    placeholder={"Estado"}
                    value={form.state}
                    onChange={onChange}
                    required
                >
                </Input>
                <Button>Criar</Button>
            </Form>
        </InputsContainer>
    );
}

export default NewAddressForm;
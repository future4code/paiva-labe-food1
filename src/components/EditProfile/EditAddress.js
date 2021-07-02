import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import {goToProfile} from '../../routes/coordinator';
import useForm from '../../hooks/useForm';
import {updateProfile} from '../../services/user';
import { Container, EditAddressContainer, StyledInput, StyledButton, Header } from './styled';
import GlobalStateContext from '../../global/GlobalStateContext';

const EditAddress = () => {

    const history = useHistory()
    const {form, onChange, cleanFields} = useForm({street: "", number: "", neighbourhood: "", city: "", state: "", complement: ""})
    const {address} = useContext(GlobalStateContext)
    const street = address.address && address.address.street 
    const number = address.address && address.address.number
    const neighbourhood = address.address && address.address.neighbourhood 
    const city = address.address && address.address.city 
    const state = address.address && address.address.state
    const complement = address.address && address.address.complement
    
    const onSubmitAddress = (e) => {
        e.preventDefault()
        updateProfile("address", form, cleanFields)
    }
    return (
        <Container>
            <Header>
                <button onClick={() => goToProfile(history)}>Voltar</button>
            </Header>
            <form onSubmit={onSubmitAddress}>
                <EditAddressContainer>
                    <StyledInput 
                        placeholder={street}
                        name="street"
                        value={form.street}
                        onChange={onChange}
                        required
                    />
                    <StyledInput
                        placeholder={number}
                        name="number"
                        value={form.number}
                        onChange={onChange}
                        required
                    />
                    <StyledInput
                        placeholder={neighbourhood}
                        name="neighbourhood"
                        value={form.neighbourhood}
                        onChange={onChange}
                        required
                    />
                    <StyledInput
                        placeholder={city}
                        name="city"
                        value={form.city}
                        onChange={onChange}
                        required
                    />
                    <StyledInput
                        placeholder={state}
                        name="state"
                        value={form.state}
                        onChange={onChange}
                        required
                    />
                    <StyledInput
                        placeholder={complement}
                        name="complement"
                        value={form.complement}
                        onChange={onChange}
                        required
                    />
                    <StyledButton type="submit">Salvar</StyledButton>
                </EditAddressContainer>
            </form>
        </Container>
    )
}

export default EditAddress
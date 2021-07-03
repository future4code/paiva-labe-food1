import React, { useContext } from 'react';
import useForm from '../../hooks/useForm';
import { updateProfile } from '../../services/user';
import { useHistory } from 'react-router-dom'
import GlobalStateContext from '../../global/GlobalStateContext';
import {Container, EditUserContainer, StyledInput, StyledButton} from './styled'

const EditUser = () => {

    const history = useHistory()
    const {form, onChange, cleanFields} = useForm({name: "", email: "", cpf: ""})
    const {profile} = useContext(GlobalStateContext)
    const profileName = profile.user && profile.user.name
    const profileEmail =  profile.user && profile.user.email
    const profileCPF = profile.user && profile.user.cpf

    const onSubmitProfile = (e) => {
        e.preventDefault()
        updateProfile("profile", form, cleanFields)
    }
    return (
        <Container>
            <form onSubmit={onSubmitProfile}>
                <EditUserContainer>
                    <StyledInput 
                        placeholder={profileName}
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        required
                    />
                    <StyledInput 
                        placeholder={profileEmail}
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        required
                    />
                    <StyledInput 
                        placeholder={profileCPF}
                        name="cpf"
                        value={form.cpf}
                        onChange={onChange}
                        required
                    />
                    <StyledButton type="submit">Salvar</StyledButton>
                </EditUserContainer>
            </form>
        </Container>
    )
}

export default EditUser
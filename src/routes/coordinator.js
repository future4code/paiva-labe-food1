export const goToSplashScreen = (history) => {
    history.push("/")
}

export const goToLogin = (history) => {
    history.push("/login")
}

export const goToSignUp = (history) => {
    history.push("/cadastro")
}

export const goToAddressScreen = (history) => {
    history.push("/cadastro/endereco")
}

export const goToFeed = (history) => {
    history.push("/menu")
}

export const goToDetail = (history, id) => {
    history.push(`/detalhes/${id}`)
}

export const goToProfile = (history) => {
    history.push("/perfil")
}

export const goToCart = (history) => {
    history.push("/carrinho")
}

export const goToEditUser = (history) => {
    history.push("/perfil/editar/endereco")
}

export const goToSearch = (history) => {
    history.push("/feed/buscar")
}
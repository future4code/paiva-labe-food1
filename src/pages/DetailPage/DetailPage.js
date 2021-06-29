import React, {useContext} from 'react'
import GlobalStateContext from '../../global/GlobalStateContext';


const DetailPage = () => {
  const {teste}= useContext(GlobalStateContext)

  return (
    <div>
      <h1>Tela de Detalhe do Restaurante</h1>
      <h3>{teste}</h3>
    </div>
  );
}

export default DetailPage;
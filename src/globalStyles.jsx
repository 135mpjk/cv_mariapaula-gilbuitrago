import {createGlobalStyle} from 'styled-components'
const GlobalStyle = createGlobalStyle`
.ContainerText{
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 10px;
    font-family:cursive;
    font-size: 20px;
}
.Container_Cincuenta{
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.Container_Porcentaje{
    display: flex;
    width: 50%;
    justify-content: space-between;
    align-items:center; 
}


`;

export default GlobalStyle
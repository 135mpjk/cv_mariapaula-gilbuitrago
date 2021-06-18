import {createGlobalStyle} from 'styled-components'
import PrimaryFont from './utils/fonts/poppins.woff'
import TitlesFont from './utils/fonts/Brushter.woff'
const GlobalStyle = createGlobalStyle`
.letra_texto p{
    font-family:'Poppins';
}
.titulos{
    color:#fdafbfff;
    font-family:'Poppins';
    padding:1% 0;
    font-weight:400;
}

.Container_Cincuenta{
    display: flex;
    width: 100%;
    justify-content: space-between;

}

.Container_Porcentaje{
    display: flex;
    width: 50%;
    align-items:center; 
    margin-right:7%;
    margin-left:8%;
    justify-content: space-between;
}
.Container_Porcentaje img{
    display: flex;
    width:auto;
    height: auto;
}
.nombres{
    color:#000E4F;
    font-family: Poppins;
    font-size:22px;
    font-weight:600;
    text-align:left;
}
body::-webkit-scrollbar{
    width:15px;
    background-color:white ;
    

}
body::-webkit-scrollbar-thumb{
    background-color:#edebe2ff;
    border-radius:10px;
}

@font-face{
    font-family: Poppins;
    src: local('Poppins'),url(${PrimaryFont}) format('woff');
    font-style: normal;
}
@font-face{
    font-family: 'Brushter';
    src: local('Brushter'), url(${TitlesFont}) format('woff');
    font-style: normal;
}

@media only screen and (max-width:900px){
    .nombres{
        font-size:19px;
    }
    .tamaño{
       padding-right:40%;
    }
}
`;

export default GlobalStyle
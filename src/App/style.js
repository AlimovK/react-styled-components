import styled from 'styled-components'

 
export const Main = styled.div`
display:flex;
flex-direction: column;
`

export const Wrapper = styled.div`
width:300px;
height:300px;
background-color:${({light})=>light?'red':`green`};
`
const getFontSize=({size})=>{
switch(size){
case 'desktop':return '30px';
case 'tablet':return '25px';
case 'mobile':return '20px';
default:return '15px'
}
}
const getColor =({status})=>{
switch(status){
    case 'error': return 'red';
    case 'warning': return 'yellow'
    case 'success': return 'green'
    default:return 'black'
}
}
export const Title =styled.h1`
font-size: ${getFontSize};
color: ${getColor};
`
export const Button = styled.button`
color: var(--rootColor);
width: 100px;
`
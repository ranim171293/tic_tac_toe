import styled from 'styled-components';
const BlocksStyle = styled.span`
button {
  width: 70px;
  height: 70px;
  outline: none;
  cursor: Pointer;
  background: #ffffff;
}
.middleBox{ 
border: 2px solid #efeaea;
border-top: none;
}
.firstBox{
border: none;
border-bottom: 2px solid #efeaea;
}
.thirdBox{
border: none;
border-right: 2px solid #efeaea;
border-left: 2px solid #efeaea;
}
.forthBox{
border: none;
}
`;

export default BlocksStyle;
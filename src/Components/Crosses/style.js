import styled from 'styled-components';

const CrossesStyle = styled.div`
.close {
  position: relative;
  width: 32px;
  height: 49px;
  opacity: 1;
}
.close:before, .close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 48px;
  width: 18px;
   background: linear-gradient(to bottom, rgba(72,201,234,1) 0%, rgba(21,184,239,1) 34%, rgba(31,179,229,1) 49%, rgba(32,124,229,1) 100%);
  box-shadow: 0px 15px 16px 0px rgba(76,196,212,1);
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}
`;

export default CrossesStyle;
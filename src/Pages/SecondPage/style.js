import styled from 'styled-components';
const SecondPageStyle = styled.div`
  .radioBlocks {
    display: flex;
    justify-content: space-between;
    padding: 70px 0;
  }
  input[type="radio"] {
    visibility: hidden;
  }
  label {
    position: relative;
  }
  .customeRadio {
    display: block;
    position: absolute;
    border: 2px solid #AAAAAA;
    border-radius: 100%;
    height: 12px;
    width: 12px;
    top: 70px;
    left: 17px;
    z-index: 5;
    -webkit-transition: border .25s linear;
    transition: border .25s linear;
    -webkit-transition: border .25s linear;

    &::before {
      display: block;
      position: absolute;
      content: '';
      border-radius: 100%;
      height: 8px;
      width: 8px;
      top: 2px;
      left: 2px;
      margin: auto;
      transition: background 0.25s linear;
      -webkit-transition: background 0.25s linear;
    }
  }
  input[type=radio]:checked ~ .customeRadio {
    border: 2px solid rgba(76,196,212,1);
  }
  
  input[type=radio]:checked ~ .customeRadio::before{
    background: linear-gradient(to bottom, rgba(72,201,234,1) 0%, rgba(21,184,239,1) 34%, rgba(31,179,229,1) 49%, rgba(32,124,229,1) 100%);
  }

`;

export default SecondPageStyle;
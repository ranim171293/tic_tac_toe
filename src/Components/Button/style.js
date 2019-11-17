import styled from 'styled-components';

const ButtonStyle = styled.span`
 padding: 10px;
  button {
    padding: 8px;
    border-radius: 20px;
    width: 125px;
    font-size: 14px;
    box-shadow: 0px 5px 64px 0px rgba(87,87,87,0.75);
    outline: none;
    cursor: pointer;
  }
  .primary{
    background: #1e68c5;
    border: 1px solid #1e68c5;
    color: #fff;
  }
  .secondary{
    background: #ffffff;
    border: 1px solid #ffffff;
  }
`;

export default ButtonStyle;
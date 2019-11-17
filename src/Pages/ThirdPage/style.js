import styled from 'styled-components';
const ThirdPageStyle = styled.div`
  .gameArea{
    background: #fff;
    box-shadow: 0px 14px 64px 0px rgba(87,87,87,0.75);
  }
  .playersBoard{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 20px 0 30px;
  }
  .score{
    border: 1px solid;
    border-radius: 20px;
    font-weight: 500;
  }
`;

export default ThirdPageStyle
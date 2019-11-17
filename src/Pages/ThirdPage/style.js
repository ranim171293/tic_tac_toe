import styled from 'styled-components';
const ThirdPageStyle = styled.div`
  .gameArea{
    background: #fff;
    box-shadow: 0px 14px 64px 0px rgba(87,87,87,0.75);
    padding: 10px;
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
  .winner {
    padding: 50px 0;
    font-size: 20px;
    color: darkcyan;
    font-weight: 500;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    line-height: 45px;
  }
`;

export default ThirdPageStyle
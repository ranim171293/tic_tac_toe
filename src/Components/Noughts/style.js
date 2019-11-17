import styled from 'styled-components';
const NoughtsStyle = styled.div`
.circle {
	border: 15px solid #ff920a;
	border-radius: 50%;
	width: 20px;
	height: 20px;
  box-shadow: 0px 8px 16px 0px rgba(255,146,10,1);
}

.circle.filled {
  background-color: linear-gradient(to bottom, rgba(255,175,75,1) 0%, rgba(255,159,41,1) 50%, rgba(255,146,10,1) 100%);
}
`;

export default NoughtsStyle;
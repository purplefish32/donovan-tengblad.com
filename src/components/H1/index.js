import styled, { css } from 'styled-components';
import theme from 'theme' // from Step #3

const H1 = styled.h1`
  font-weight: 700;
  color: ${theme.dark};
  float: left;
  width: auto;
  margin: 0;
  padding: 0;
  font-size: 24px;
  opacity: .9;

  ${props => props.primary && css`
		font-size: 80px;
	`}
`;

export default H1;

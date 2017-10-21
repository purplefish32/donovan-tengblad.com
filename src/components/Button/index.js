import styled, { css } from 'styled-components';
import theme from 'theme' // from Step #3
import shadows from 'shadows' // from Step #3

const Button = styled.button`
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #fff;
  border-radius: 5px;
  transition: all .1s ease;

  &:hover {
    transform: scale(1.2);
  }

  ${props => props.raised && css`
    ${shadows.raised}
	`}

  ${props => props.disabled && css`
    cursor: not-allowed;
    &:hover {
      transform: none;
    }
    opacity .65;
  `}



  ${props => props.primary && css`
    background: ${theme.primary};
    border-color: ${theme.primary};
	`}

  ${props => props.success && css`
    background: ${theme.success};
    border-color: ${theme.success};
	`}

  ${props => props.info && css`
    background: ${theme.info};
    border-color: ${theme.info};
	`}

  ${props => props.warning && css`
    background: ${theme.warning};
    border-color: ${theme.warning};
	`}

  ${props => props.danger && css`
    background: ${theme.danger};
    border-color: ${theme.danger};
	`}

  ${props => props.default && css`
    background-color: rgba(0, 0, 0, 0);
    border-width: 1px;
    border-color: #fff;
	`}
`;

export default Button;

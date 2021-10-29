import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * cta버튼 여부
   * @default false
   */
  primary?: Boolean;
  /**
   * 풀 사이즈 버튼
   * @default false
   */
  fullWidth?: Boolean;

  /**
   * button ref
   */
  ref?: any;
}

const Button = styled.button<ButtonProps>`
  height: 44px;
  line-height: 44px; // single-line button 임을 가정.
  text-align: center;

  border-radius: 3px;
  border: 1px solid #dfe5eb;
  cursor: pointer;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  color: #282a2c;
  background: #ffffff;

  &:active {
    background: #f6f9fb;
  }

  &:disabled {
    cursor: not-allowed;
    color: #bcc4cc;
  }

  ${props =>
    props.fullWidth &&
    css`
      width: 100% !important;
    `}

  ${props =>
    props.primary &&
    css`
      color: #ffffff;
      border-color: #0082e5;
      background-color: #0082e5;

      &:active {
        background-color: #1470cc;
      }

      &:disabled {
        color: hsla(210, 14%, 77%, 1);
        border: none;
        background-color: hsla(209, 67%, 36%, 0.06);
      }
    `}
`;

export default Button;

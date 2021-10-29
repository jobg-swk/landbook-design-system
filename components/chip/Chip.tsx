import React, { ForwardRefRenderFunction, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import uniqueKey from '../utils/uniqueKey';

const Label = styled.label`
  display: inline-block;

  background-color: #fff;
  border: 1px solid #dfe5eb;
  border-radius: 30px;
  padding: 10px 14px;

  color: #363b40;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  cursor: pointer;

  &:hover {
    border: 1px solid #1a8cff;
    background: #1a8cff;
    color: #ffffff;
  }

  &:focus {
    border: 1px solid #dfe5eb;
  }

  input:checked + & {
    border: 1px solid #1a8cff;
    background: #1a8cff;
    color: #ffffff;
  }

  input:disabled + & {
    cursor: not-allowed;
    color: #bcc4cc;
    background: #f2f5f9;
    border: 1px solid #dfe5eb;
  }
`;

export interface ChipProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = styled.input<ChipProps>``;

const Chip: ForwardRefRenderFunction<HTMLInputElement, ChipProps> = (
  { children, className, style, ...props },
  ref
) => {
  const inputId = uniqueKey();

  return (
    <div>
      <Input
        id={inputId}
        ref={ref}
        type="checkbox"
        readOnly
        hidden
        {...props}
      />
      <Label htmlFor={inputId} className={className} style={style}>
        {children}
      </Label>
    </div>
  );
};

export default React.forwardRef(Chip);

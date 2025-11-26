import type { ButtonHTMLAttributes, ReactNode } from 'react';

//import type { ButtonProps } from '../types/Button';   in corso di fix

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  btnColor?: 'primary' | 'secondary' | 'outline-primary' | 'outline-secondary';
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({
  className = '',
  btnColor = 'primary',
  children,
  type = 'button',
  onClick,
  ...props
}: ButtonProps) => {
  const btnClass = ['btn', btnColor ? `btn-${btnColor}` : '', className]
    .filter(Boolean)
    .join(' ');
  return (
    <button className={btnClass} type={type} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
export default Button;

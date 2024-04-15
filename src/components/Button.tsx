// import { ReactNode } from 'react';
import { Alert } from './Alert';

interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'danger';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, onClick, color = 'primary' }: Props) => {
  return (
    <button
      className={'btn btn-' + color}
      onClick={onClick}
      // data-bs-dismiss='alert'
    >
      {children}
    </button>
  );
};

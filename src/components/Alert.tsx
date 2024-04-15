import { ReactNode, useState, MouseEvent } from 'react';

interface Props {
  children: ReactNode;
  onClose: () => void;
  color: 'primary' | 'success' | 'danger' | 'warning';
}

export const Alert = ({ children, onClose, color }: Props) => {
  return (
    <div
      className={`alert alert-${color} alert-dismissible fade show`}
      role='alert'
    >
      {children}
      <button
        type='button'
        className='btn-close'
        data-bs-dismiss='alert'
        aria-label='Close'
        onClick={onClose}
      ></button>
    </div>
  );
};

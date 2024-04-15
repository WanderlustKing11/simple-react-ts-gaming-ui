import { ReactNode, useState, MouseEvent } from 'react';

interface Props {
  children: ReactNode;
  onClose: () => void;
}

export const Alert = ({ children, onClose }: Props) => {
  return (
    <div
      className={'alert alert-success alert-dismissible fade show'}
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

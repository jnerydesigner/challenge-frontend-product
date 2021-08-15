import React, { useEffect } from 'react';
import { FiAlertCircle, FiXCircle, FiCheckCircle, FiSlash } from 'react-icons/fi';
import { ToastMessageInterface, useToast } from '../../../hooks/ToastContext';

import { ToastComponent } from './styles';


interface ToastContainerProps {
  toast: ToastMessageInterface;
}

const icons = {
  info: <FiAlertCircle />,
  success: <FiCheckCircle />,
  danger: <FiSlash />
}


export const Toast: React.FC<ToastContainerProps> = ({ toast }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(toast.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [toast.id, removeToast]);


  return (
    <ToastComponent type={toast.type}>
      {icons[toast.type]}
      <div>
        <strong>{toast.title}</strong>
        <p>{toast.description}</p>
      </div>

      <button type="button" onClick={() => removeToast(toast.id)}>
        <FiXCircle size="18" />
      </button>
    </ToastComponent>
  );
};

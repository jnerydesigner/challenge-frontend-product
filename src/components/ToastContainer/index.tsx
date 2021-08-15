import React from 'react';
import { Container } from './styles';
import { ToastMessageInterface } from '../../hooks/ToastContext';
import { Toast } from './Toast';


interface ToastContainerProps {
  messages: ToastMessageInterface[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {

  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} toast={message} />
      ))}
    </Container>
  );
};


export default ToastContainer;

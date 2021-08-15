import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';
import ToastContainer from '../components/ToastContainer'


interface ToastContextData {
  addToast(message: Omit<ToastMessageInterface, "id">): void;
  removeToast(id: string): void;
}

export interface ToastMessageInterface {
  id: string;
  type: "info" | "success" | "danger",
  title: string;
  description: string;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessageInterface[]>([]);
  const addToast = useCallback(({ description, title, type }: Omit<ToastMessageInterface, "id">) => {
    const id = uuid();

    const toast = {
      id,
      type,
      description,
      title
    };

    setMessages(oldMessages => [...oldMessages, toast]);

  }, []);
  const removeToast = useCallback((id: string) => {
    setMessages(oldMessages => oldMessages.filter(message => message.id !== id));
  }, []);
  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  )
}

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("UseToast do not be used within in ToastProvider");
  }

  return context;
}

export {
  ToastProvider,
  useToast
}
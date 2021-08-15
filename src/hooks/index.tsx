import React from 'react';

import { ChakraProvider } from "@chakra-ui/react";
import { ToastProvider } from '../hooks/ToastContext';
import { theme } from '../styles/theme'

export const AppProvider: React.FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <ToastProvider>
        {children}
      </ToastProvider>
    </ChakraProvider>
  )
}
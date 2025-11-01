import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react";
import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

// const darkTheme = {
//   baseTheme: 'dark',
//   variables: {
//     colorPrimary: '#6C47FF',
//     colorBackground: '#1a202c',
//     colorText: 'white',
//     colorInputBackground: '#2d3748',
//     colorInputText: 'white',
//   },
// };
const darkTheme = {
  baseTheme: 'dark',
  variables: {
    colorPrimary: '#6C47FF',
    colorBackground: '#FFFFFF',
    colorText: 'black',
    colorInputBackground: '#FFFFFF',
    colorInputText: 'white',
  },
  elements: {
    userButtonPopoverCard: {
      backgroundColor: '#8CA1CF',
      border: '1px solid rgba(255,255,255,0.1)',
    },
    userButtonPopoverActionButtonText: {
      color: '#E2E8F0',
    },
    userPreviewMainIdentifier: {
      color: '#A78BFA',
    },
    userButtonPopoverFooter: {
      color: '#718096',
    },
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ClerkProvider 
      publishableKey={clerkPubKey}
      appearance={darkTheme}
      
    >
      <Router>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Router>
    </ClerkProvider>
  </React.StrictMode>
);

export const server = `https://api.coingecko.com/api/v3`;
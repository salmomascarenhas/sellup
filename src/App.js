import React from 'react';
import Routes from './routes';
import { ThemeProvider, CSSReset } from '@chakra-ui/core'


const App = ({ children }) => {
    return (
        <ThemeProvider >
            <CSSReset />
            <Routes />
            {children}
        </ThemeProvider>
    );
}

export default App;
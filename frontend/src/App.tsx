import React, {useEffect} from 'react';
import {KeyboardEvent} from "react"
import logo from './logo.svg';
import './App.css';

import {ThemeProvider, createTheme} from '@mui/material/styles';
import {Box, Stack, TextField} from '@mui/material';

const languages = {
    'RU': {
        'money_input': 'Деньги',
        'name_input': 'Продукт',
    },
    'ENG': {
        'money_input': 'Money amount',
        'name_input': 'Product'
    },
};

const language = 'ENG';

class App extends React.Component {
    constructor(props: any)
    {
        super(props);
        this.escFunction = this.escFunction.bind(this);
    }
    escFunction(event: KeyboardEvent)
    {
        if (event.key === "Escape") {
            //Do whatever when esc is pressed
        }
    }

    componentDidMount()
    {
        document.addEventListener("keydown", this.escFunction, false);
    }
    componentWillUnmount()
    {
        document.removeEventListener("keydown", this.escFunction, false);
    }

    render() {
        return (
            // <>
            <Box sx={{width: '100%', height: '100%', background: '#29b6f6', overflow: "hidden"}}>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    sx={{height: '100vh', overflowY: "hidden", overflowX: "hidden"}}
                >
                    <TextField
                        id="outlined-basic"
                        label={languages['ENG']['money_input']}
                        variant="outlined"
                        sx={{width: '60vh'}}
                    />
                </Stack>
                <div className="bubbles">
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>

                </div>
            </Box>
            // </>
            // <div className="App">
            //     <header className="App-header">
            //         <img src={logo} className="App-logo" alt="logo"/>
            //         <p>
            //             Edit <code>src/App.tsx</code> and save to reload.
            //         </p>
            //         <a
            //             className="App-link"
            //             href="https://reactjs.org"
            //             target="_blank"
            //             rel="noopener noreferrer"
            //         >
            //             Learn React
            //         </a>
            //     </header>
            // </div>
        );
    }
}

export default App;

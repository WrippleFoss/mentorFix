import React from "react";
import { Provider } from "react-redux";
import {BrowserRouter} from "react-router-dom";

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";

import AppRoutes from "./AppRoutes";

import theme from "./theme";
import configureStore from "./store";

function App() {
    return (
        <CssBaseline>
            <Provider store={configureStore(window.__INITIAL_STATE__)}>
                <BrowserRouter>
                    <MuiThemeProvider theme={theme}>
                        <AppRoutes />
                    </MuiThemeProvider>
                </BrowserRouter>
            </Provider>
        </CssBaseline>
    );
}

export default App;

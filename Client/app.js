import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Search from './components/Search'
import SearchLayout from "./components/SearchLayout";

import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import {SnackbarProvider, useSnackbar} from 'notistack';
import 'bootstrap/dist/css/bootstrap.min.css'




const Router = props => {


    return (
        <Switch>
            <Route exact path="/">
                <SearchLayout>
                    <Search {...props}/>
                </SearchLayout>
            </Route>
        </Switch>
    )
}

const LoadApp = () =>
{
    const {enqueueSnackbar} = useSnackbar();
    const produceSnackBar = (message, variant = "error") => enqueueSnackbar(message, {variant: variant});

    return (
        <BrowserRouter>
            <Router produceSnackBar={produceSnackBar}/>
        </BrowserRouter>
    );
};

const App = () =>
{
    const theme = createMuiTheme({ palette: { primary: { main: '#0B8AAD' }}});

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <SnackbarProvider maxSnack={3} preventDuplicate>
                <LoadApp/>
            </SnackbarProvider>
        </ThemeProvider>
    );
};

export default App;
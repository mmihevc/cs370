import React, {useState} from "react";
import {Table} from 'reactstrap'
import {TextField, IconButton, Typography, Button, Grid} from "@material-ui/core";
import {sendServerRequest} from "./restfulAPI";
import BackupIcon from '@material-ui/icons/Backup';
import {sendGetRequest} from "../hooks/API";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


function App(props) {

    const [searchTerm, setSearchTerm] = useState();
    const [file, setFile] = useState();
    const [form, setForm] = useState(true);
    const [wordRequestLines, setWordRequestLines] = useState([]);
    const [displayWord, setDisplayWord] = useState(false);


    return (
        <>
            {form ? <Form file={file} setFile={setFile} form={form} setForm={setForm}
                          searchTerm={searchTerm} setSearchTerm={setSearchTerm} {...props}
                          setDisplayWord={setDisplayWord} displayWord={displayWord}
                          setWordRequestLines={setWordRequestLines}
            /> : null}
            {displayWord ? <FileWord wordRequestLines={wordRequestLines}  {...props} setForm={setForm}
                                     setDisplayWord={setDisplayWord} form={form} displayWord={displayWord}
            /> : null}
        </>
    );
}

function FileWord(props) {

    if (JSON.stringify(props.wordRequestLines) !== '{}') {
        return (
            <div>
                <Typography style={{fontSize: 10}}>
                    {props.wordRequestLines}
                </Typography>
                <IconButton onClick={() => {props.setForm(!props.form); props.setDisplayWord(!props.displayWord)}}>
                    <ExitToAppIcon/>
                </IconButton>
            </div>

        )
    }
    else {
        return (
            <div>
                <Typography>
                    Word does not exist
                </Typography>
                <IconButton onClick={() => {props.setForm(!props.form); props.setDisplayWord(!props.displayWord)}}>
                    <ExitToAppIcon/>
                </IconButton>
            </div>
        )
    }

}

function Form(props) {

    function sendSearchRequest(event) {
        event.preventDefault();

            sendGetRequest('scriptLines/'+props.searchTerm)
                .then(
                    r => {
                        console.log(r.data);
                        props.setWordRequestLines(r.data)
                        props.setForm(!props.form);
                        props.setDisplayWord(!props.displayWord);
                        /*if (r.data.valid) {
                            props.setWordRequestLines(r.data)
                            props.setForm(!props.form);
                            props.setDisplayWord(!props.displayWord);
                        }
                        else {
                            console.log('hey');
                            props.produceSnackBar('Request failed', 'error');
                        }*/

                    }
                )
    }

    return (
        <form>
            <Typography variant={'h5'}>What word would you like to search for?</Typography>
            <div >
                <TextField
                    id='outlined-basic'
                    label='Search'
                    varient='outlined'
                    id='search'
                    onChange={()=> {props.setSearchTerm(document.getElementById('search').value)}}
                />
                <Button
                    variant="outlined"
                    style={{float: 'right'}}
                    onClick={(event) => sendSearchRequest(event)}>Submit
                </Button>
            </div>
        </form>
    )

}



export default App;



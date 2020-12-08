import React, {useState} from "react";

import {TextField, IconButton, Typography, Button, Grid} from "@material-ui/core";
import {sendServerRequest} from "./restfulAPI";
import BackupIcon from '@material-ui/icons/Backup';
import {sendGetRequest} from "../hooks/API";


function App(props) {

    const [searchTerm, setSearchTerm] = useState();
    const [file, setFile] = useState();
    const [form, setForm] = useState(true);
    const [wordRequestLines, setWordRequestLines] = useState([]);
    const [fileRequestLines, setFileRequestLines] = useState([]);
    const [displayWord, setDisplayWord] = useState(false);
    const [displayLines, setDisplayLines] = useState(false);


    return (
        <>
            {form ? <Form file={file} setFile={setFile} form={form} setForm={setForm}
                          searchTerm={searchTerm} setSearchTerm={setSearchTerm} {...props}
                          setDisplayWord={setDisplayWord} setDisplayLines={setDisplayLines}
                          displayWord={displayWord} displayLines={displayLines}
                          setWordRequestLines={setWordRequestLines}
                          setFileRequestLines={setFileRequestLines}
            /> : null}
            {displayWord ? <FileWord /> : null}
            {displayLines ? <FileLines/> : null}
        </>
    );
}

function FileWord() {

    return (
        <p>hey</p>
    )

}

function FileLines() {

}

function Form(props) {

    function sendSearchRequest(event) {
        event.preventDefault();

        if (props.file == null) {
            sendGetRequest({'word': props.searchTerm})
                .then(
                    r => {
                        console.log(r.data);
                        if (r.data.valid) {
                            props.setWordRequestLines(r.data)
                            props.setForm(!props.form);
                            props.setDisplayWord(!props.displayWord);
                        }
                        else {
                            console.log('hey');
                            props.produceSnackBar('Request failed', 'error');
                        }

                    }
                )
        }
    }

    function processFile(event) {
        let file = event.target.files[0];
        props.setFile(file);

        if (file.type === 'text/plain') {
            props.produceSnackBar('File uploaded!', 'info');
        }
        else {
            props.produceSnackBar('Incompatiable file type', 'error');
        }
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
                <IconButton variant="contained"
                            component="label">
                    <BackupIcon/>
                    <input
                        type="file"
                        hidden
                        onChange={(event) => processFile(event)}
                    />
                </IconButton>
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



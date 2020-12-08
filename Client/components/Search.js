import React, {useState} from "react";

import {TextField, IconButton, Typography, Button, Grid} from "@material-ui/core";
import {sendServerRequest} from "./restfulAPI";
import BackupIcon from '@material-ui/icons/Backup';


function App(props) {

    const [searchTerm, setSearchTerm] = useState();
    const [file, setFile] = useState();

    function sendSearchRequest() {
        if (file == null) {
            sendServerRequest('word', {'word': searchTerm})
                .then()
        }
        else {
            sendServerRequest('', {})
                .then()
        }

    }

    function processFile(event) {
        setFile(event.target.files[0]);

        if (file.type == 'text') {
            props.produceSnackBar('File uploaded!', 'info');
        }
        else {
            props.produceSnackBar('Incompatiable file type', 'error');
        }
    }

    return (
        <>
            <form>
                <Typography variant={'h5'}>What word would you like to search for?</Typography>
                <div >
                    <TextField
                        id='outlined-basic'
                        label='Search'
                        varient='outlined'
                        id='search'
                        onChange={()=> {setSearchTerm(document.getElementById('search').value)}}
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
                    <Button onClick={() => sendSearchRequest()}>Submit</Button>
                </div>
            </form>
        </>
    );


    function handleChange(event) {
        event.preventDefault();
        sendServerRequest(searchTerm).then(query => {
            alert(query.body);
        });
    }


}

export default App;


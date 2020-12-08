

export function sendServerRequest(query){
    const restfulAPI=`localhost:3000/script/${query}`;
    //const restfulAPI=`localhost:3000/script/the`;
    const requestOptions = {method: "GET"};
    return processRestfulAPI(restfulAPI, requestOptions);
}

async function processRestfulAPI(restfulAPI, requestOptions) {
    try {
        let response = await fetch(restfulAPI, requestOptions);
        return {
            statusCode: response.status,
            statusText: response.statusText,
            body: await response.json()
        };
    }
    catch(err) {
        console.log("Request failed: ", "Status Code: ", err.status, " ", err );
        return { statusCode: 0, statusText: 'Client failure', body: null };
    }
}

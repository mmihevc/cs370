

export function sendServerRequest(query){
    const restfulAPI=`localhost:3000/script/${query}`;
    //const restfulAPI=`localhost:3000`;
    const requestOptions = {method: "GET"};
    console.log(requestOptions)
    console.log(query)
    return processRestfulAPI(requestOptions);
}

async function processRestfulAPI(requestOptions) {
    try {
        let response = await fetch( requestOptions);
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

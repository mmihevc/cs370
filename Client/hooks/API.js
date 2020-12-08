import axios from 'axios';

export async function sendGetRequest(location)
{
    try { return await axios.get("/api/"+location) }
    catch(error) { return null; }
}
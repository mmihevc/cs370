import axios from 'axios';

export async function sendGetRequest(location)
{
    try { return await axios.get(location) }
    catch(error) { return null; }
}
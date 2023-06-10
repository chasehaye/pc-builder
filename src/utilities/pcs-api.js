import sendRequest from "./send-request";
const BASE_URL = '/api/pcs';

export async function pcsIndexRequest(){
    return sendRequest(BASE_URL);
}

export async function createPcRequest(pcData){
    return sendRequest(BASE_URL, "POST", pcData)
}

export async function getPcRequest(pcId){
    return sendRequest(`${BASE_URL}/${pcId}`) 
}

export async function deletePcRequest(pcId){
    return sendRequest(`${BASE_URL}/${pcId}`, "DELETE")
}

export async function updatePcRequest(pcId, pcData){
    return sendRequest(`${BASE_URL}/${pcId}`, "PUT", pcData)
}
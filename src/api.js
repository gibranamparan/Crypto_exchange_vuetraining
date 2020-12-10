const apiUri = 'https://api.coincap.io/v2';

export default {
    getCryptos(limit = 20){
        return fetch(apiUri + "/assets"+ (limit ? "?limit=" + limit : ""))
            .then(response => response.json())
            .then(response => response.data);
    }    
}
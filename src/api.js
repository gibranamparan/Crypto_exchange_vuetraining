const apiUri = 'https://api.coincap.io/v2/assets/';

export default {
    getCryptos(limit = 20){
        let limitStr = (limit ? "?limit=" + limit : "");
        return fetch(apiUri + limitStr)
            .then(response => response.json())
            .then(response => response.data);
    },
    getCoinDetails(id){
        return fetch(apiUri + id)
            .then(response => response.json())
            .then(response => response.data);
    } ,
    getCoinHistory(id, endDate = new Date(), startDate){
        if(!startDate)
        {
            startDate = new Date();
            startDate.setDate(endDate.getDate() - 1);
        }

        let paramsQryStr = `?interval=h1&start=${startDate.getTime()}&end=${endDate.getTime()}`;
        return fetch(apiUri + id + "/history" + paramsQryStr)
            .then(response => response.json())
            .then(response => response.data);
    }    
}
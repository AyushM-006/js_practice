function fetchDetails(response) {
    return new Promise((resolve, reject) => {
        if(response){
            resolve("Fetched data from the server")
        }else{
            reject("Can't fetch data")
        }
    });
}

fetchDetails(1).then((result) => {
    console.log(result);
    
}).catch((err) => {
    console.log(err);
    
});

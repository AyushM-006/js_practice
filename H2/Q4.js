function fetchOrderHistory(resp){
    return new Promise((resolve, reject) => {
        if(resp){
            resolve("Fetched history successfully")
        }else{
            reject("Can't fetch history")
        }
    });
}

async function customerHistory(){
    try {
        const data = await fetchOrderHistory(1)
        if(data){
            console.log(data);
        }
    }   catch (error) {
            console.log(error);
        
    }
}
customerHistory()
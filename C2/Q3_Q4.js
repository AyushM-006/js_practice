function payment(status) {
  return new Promise((resolve, reject) => {
    if (status) {
      resolve("Payment successful !");
    } else {
      reject("Payment Failed!");
    }
  });
}

//then catch
payment()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

  //async await
async function test() {
  try {
    const data = await payment(true);
    if (data) {
      console.log(data);
    }
  } catch (error) {
    console.log(error);
    
  }
}
test();

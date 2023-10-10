function fetchProductsList(){
    axios({
        url: "https://65184b26582f58d62d358ffe.mockapi.io/Clothing", method: "GET",
    }).then(function(res){
        console.log("res", res.data);
    }).catch(function(err){
        console.log("err", err);
    });
}

fetchProductsList();
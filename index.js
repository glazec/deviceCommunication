var instance = axios.create({
        baseURL: 'https://pastebinnn.azurewebsites.net/api/',
        timeout: 1000,
        headers: {'X-Custom-Header': 'foobar','Access-Control-Allow-Origin':'*'}
      });


function queryFornotes(){
    
    let username=document.getElementById('username').value
    // console.log(username)
    axios.get('https://pastebinnn.azurewebsites.net/api/ReadFromUserName?name=cruz',instance)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

}
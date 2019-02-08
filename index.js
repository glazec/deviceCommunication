var notesCard = document.createElement("div.mdui-card.mdui-hoverable")
var notesContainer = document.createElement("p")


function queryFornotes(){
    
    let username=document.getElementById('username').value
    // console.log(username)
    // let url="http://localhost:7071/api/ReadFromUserName?name=cruz"
    let url="https://pastebinnn.azurewebsites.net/api/ReadFromUserName?name=cruz"
    axios.get(url)
  .then(function (response) {
    console.log(response)
    let swap=JSON.parse(response.data)
   let notes=swap
   console.log(notes)
    notes.forEach(element => {
      let notesCard = document.createElement("div.mdui-card.mdui-hoverable")
      let notesContainer = document.createElement("p")
      let notesText= document.createTextNode(element.Notes)
      notesContainer.appendChild(notesText)
      notesCard.appendChild(notesContainer)
      let el=Document.getElementById('notsPosition')
      el.appendChild(notesCard)
    });
  })
  .catch(function (error) {
    console.log(error);
  });

}
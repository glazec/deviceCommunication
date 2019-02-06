var notesCard = document.createElement("div.mdui-card.mdui-hoverable")
var notesContainer = document.createElement("p")


function queryFornotes(){
    
    let username=document.getElementById('username').value
    // console.log(username)
    axios.get('https://pastebinnn.azurewebsites.net/api/ReadFromUserName?name=cruz')
  .then(function (response) {
   let notes=JSON.parse(response.data)
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
function queryFornotes(){
    clearNotesCard();
    let username=document.getElementById('username').value
    let url="https://pastebinnn.azurewebsites.net/api/ReadFromUserName?name="+username
    axios.get(url)
  .then(function (response) {
    try {

      response.data.forEach(element => {
      notesDisplayCard(element.Notes)
    });

    } catch (error) {
      notesDisplayCard(response.data.Notes)
    }
    
  })
  .catch(function (error) {
    console.log(error);
  });

}

function notesDisplayCard(notes){
  let notesCard = document.createElement("div")
  notesCard.className='mdui-card mdui-hoverable mdui-m-b-2'
  let notesContainer = document.createElement("p")
  let notesText= document.createTextNode(notes)
  notesContainer.appendChild(notesText)
  notesCard.appendChild(notesContainer)
  let el=document.getElementById('notsPosition')
  el.appendChild(notesCard)
}

function clearNotesCard(){
 let base=document.getElementById('notsPosition')
 while (base.firstElementChild){
   base.remove(base.firstElementChild)
 }
}
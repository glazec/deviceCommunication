function queryFornotes(){
    clearNotesCard();
    let username=document.getElementById('username').value
    let url="https://pastebinnn.azurewebsites.net/api/ReadFromUserName?name="+username
    axios.get(url)
  .then(function (response) {
    try {

      response.data.forEach(element => {
        if (element.Notes){
      notesDisplayCard(element.Notes)}
      else{
        notesDisplayCard('No Records Found')
      }
    });

    } catch (error) {
      if(response.data.Notes){
      notesDisplayCard(response.data.Notes)}
      else{
        notesDisplayCard('No Records Found')
      }
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
   base.removeChild(base.firstElementChild)
 }
}

function NotesInputConfirm(){
  mdui.prompt('Username',
    function (value) {
      saveGist(value)
    },
    function (value) {
    }
  );
}


function  saveGist(username){
  let notes=document.getElementById('notes').value
  let url="https://pastebinnn.azurewebsites.net/api/saveGist?name="+username+"&notes="+notes
    axios.get(url)
  .then(function (response) {
      console.log(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });

}
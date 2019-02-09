function upload(value){
  let username=value
  let file=document.getElementById("inputFile")
  let notes=document.getElementById('notes').value
  var instance = axios.create({
    timeout: 1000,
    headers: {'Content-Type': 'application/json'},
    method: 'post',
    params:{
      file: file,
      model: 1,
      action: upload
    }
  });
  
  if (file){
    axios.post('http://tmp.link/openapi/v1', instance)
    .then(function (response) {
      console.log(response);
      saveGist(username,response.data.ukey)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  if(notes){
    saveGist(username,notes)
  }

}

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
      upload(value)
    },
    function (value) {
    }
  );
}


function  saveGist(username,data){
  let url="https://pastebinnn.azurewebsites.net/api/saveGist?name="+username+"&notes="+data
    axios.get(url)
  .then(function (response) {
      console.log(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });

}
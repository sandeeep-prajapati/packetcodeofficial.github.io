console.log("Welcome to Notes Taking Website");
showNotes();

// If user adds a note, add it to the local Storage

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function(e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    // console.log(notesObj);
    showNotes();

})
function showNotes(){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index){
        html += `
    <div class="noteCard card col-md-4">
      <div class="card-body">
        <h5 class="card-title">note ${index + 1}</h5>
        <p class="card-text">${element}</p>
        <a id = "${index}" onclick = "deleteNote(this.id)" class="btn btn-primary">DELETE NOTES</a>
      </div>
    </div>
    
  </div>`;
        
    });
    let notesToShow = document.getElementById('notes')
    if(notesObj.length !=0){
        notesToShow.innerHTML = html;
    }
    else{
        `you have to add note first then you can use it`
    }

}
function deleteNote(index){
    console.log('i am deleting', index);
    let notes = localStorage.getItem("notes");
    
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
           
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
let searchTxt = document.getElementById('searchTxt');
searchTxt.addEventListener("input", function(){
    let inputValue =searchTxt.value.toLowerCase();
    let noteCard = document.getElementsByClassName('noteCard');
    console.log('input event faired', inputValue);
    Array.from(noteCard).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        // console.log(cardTxt);
        if(cardTxt.includes(inputValue)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }

    })

    
})

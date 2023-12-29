const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// This is used for the after closed the browser then data again store
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();


let notes = document.querySelectorAll(".input-box");
// This code is used for the store the data in the local Storage
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

// This code is used for the multiple notes tab
createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});

// This is the code for delete the notes
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

// Add line break in your notes then write this code
document.addEventListener("keydown",event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
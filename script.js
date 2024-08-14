var addpopupbutton=document.getElementById("add-popup-button")
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
 
addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelbutton=document.getElementById("cancel")
cancelbutton.addEventListener("click",function(event){
     event.preventDefault()
     popupoverlay.style.display="none"
     popupbox.style.display="none"

})

var container=document.querySelector(".container")
var addbook=document.getElementById("add")
var titleinput=document.getElementById("book-title-input")
var titleauthor=document.getElementById("book-author-input")
var titledescription=document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${titleinput.value}</h2>
    <h5>${titleauthor.value}</h5>
    <p>${titledescription.value}</p>
   <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletebook(event)
{
    event.target.parentElement.remove()
}
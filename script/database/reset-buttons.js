let allButtons = document.querySelectorAll("button")
for (let i = 0; i < allButtons.length; i++){
    allButtons[i].addEventListener("click", function(event){
        event.preventDefault()
    })
}
function createModalListener(){
    let body = document.querySelector("body")

    let buttonsOpenPost = document.querySelectorAll("[data-control-post]")

    for (let i = 0; i < buttonsOpenPost.length; i++){
        let button = buttonsOpenPost[i]
    
        button.addEventListener("click", function(){
            
            body.appendChild(createModal(button))
        })
    }
}


function createModal(btn){
    let idBtn = btn.getAttribute("id")
    let dataValue = btn.getAttribute("data-control-post")

    let modalWrapper = document.createElement("div")
    modalWrapper.classList.add("modal-wrapper")

    let modal = document.createElement("div")
    modal.classList.add("modal")

    let modalHeader = document.createElement("div")
    modalHeader.classList.add("modal-header")

    modalHeader.innerHTML = `
            <div class="user-card">
                <div class="img-wrapper">
                    <img src=${users[parseInt(idBtn)-1].img} alt=${users[parseInt(idBtn)-1].user}>
                </div>
                <div>
                    <h3>${users[parseInt(idBtn)-1].user}</h3>
                    <span>${users[parseInt(idBtn)-1].stack}</span>
                </div>
            </div>
    `
    let buttonCloseModal = document.createElement("button")
    buttonCloseModal.innerText = "X"
    buttonCloseModal.addEventListener("click", function(event){
        event.composedPath()[3].remove()
    })

    modalHeader.appendChild(buttonCloseModal)

    modal.appendChild(modalHeader)

    let titleModal = document.createElement("h2")
    titleModal.innerHTML = `${posts[parseInt(dataValue) - 1].title}`

    let textModal = document.createElement("p")
    textModal.innerHTML = `${posts[parseInt(dataValue) - 1].text}`

    modal.appendChild(titleModal)
    modal.appendChild(textModal)

    modalWrapper.appendChild(modal)
    
    return modalWrapper    
}


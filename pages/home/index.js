const sugestUsersWrapper = document.querySelector(".follow-suggestions")

for (let i = 0; i < sugestUsers.length; i++){
    idUser = sugestUsers[i]

    let li = document.createElement("li")
    li.classList.add("flex", "items-center", "justify-between")
    
    li.innerHTML = `
            <div class="user-card">
              <div class="img-wrapper">
                <img src=${users[idUser-1].img} alt=${users[idUser-1].user}>
              </div>
              <div>
                <h3>${users[idUser-1].user}</h3>
                <span>${users[idUser-1].stack}</span>          
              </div>
            </div>
    `
    let buttonFollow = document.createElement("button")
    buttonFollow.classList.add("button-follow", "flex", "items-center")
    buttonFollow.innerText = "Seguir"

    buttonFollow.addEventListener("click", function(){
        let following = buttonFollow.classList.toggle("button-following")
        if (following){
            this.innerText = "Seguindo"
        }else {
            this.innerText = "Seguir"
        }
    })

    li.appendChild(buttonFollow)

    sugestUsersWrapper.appendChild(li)
}

const postWrapper = document.querySelector(".posts-wrapper")

function createPost(item){

    let post = document.createElement("li")
    post.classList.add ("flex", "flex-col", "gap-2")

    let contLikes = 0

    let buttonLikeImg = "../../assets/img/Vector(1).png"
    let buttonLikeImgColor = "../../assets/img/Vector.png"

    post.innerHTML = `
            <div class="user-card">
              <div class="img-wrapper">
                <img src=${users[item.user-1].img} alt=${users[item.user-1].user}>
              </div>
                <div>
                <h3>${users[item.user-1].user}</h3>
                <span>${users[item.user-1].stack}</span>
                </div>
             </div>
            <h2 class="title-1">${item.title}</h2>
            <p class="text-1">
                ${(item.text).substring(0, 150)}...
            </p>
    `

    let buttonsPostsWrapper = document.createElement("div")
    buttonsPostsWrapper.classList.add("flex", "gap-1", "items-center")

    buttonPost = document.createElement("button")
    buttonPost.setAttribute("data-control-post", `${item.id_post}`)
    buttonPost.classList.add("button-open-post")
    buttonPost.setAttribute("id", `${item.user}`)
    buttonPost.innerText = "Abrir Post"
    

    let buttonLikeWrapper = document.createElement("div")
    buttonLikeWrapper.classList.add("flex", "items-center")

    let buttonLike = document.createElement("button")
    buttonLike.classList.add("button-like", "flex", "items-center")
    buttonLike.innerHTML = `<img src=${buttonLikeImg} alt="Button Like">`

    buttonLike.addEventListener("click", function(){       
        let likeTrue = buttonLike.classList.toggle("bg-none")
        if (likeTrue){
            buttonLike.innerHTML = `<img src=${buttonLikeImgColor} alt="Button Like">`
            contLikeSpan.innerHTML = "1"
        } else {
            buttonLike.innerHTML = `<img src=${buttonLikeImg} alt="Button Like">`
            contLikeSpan.innerHTML = ""
        }
    })
    
    let contLikeSpan = document.createElement("span")
    contLikeSpan.classList.add("text-2")  
       
    buttonLikeWrapper.appendChild(buttonLike)
    buttonLikeWrapper.appendChild(contLikeSpan)

    buttonsPostsWrapper.appendChild(buttonPost)
    buttonsPostsWrapper.appendChild(buttonLikeWrapper)

    post.appendChild(buttonsPostsWrapper)               
    
    return post
}

function listPosts(){
    postWrapper.innerHTML = ""

    for (let i = 0; i < posts.length; i++){
        let item = posts[i]
        let post = createPost(item)
        postWrapper.appendChild(post)
    }
    createModalListener()
}

listPosts()


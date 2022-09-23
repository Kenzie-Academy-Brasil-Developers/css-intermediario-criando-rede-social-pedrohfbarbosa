let postTitle = document.getElementById("post-title")
let postDescription = document.getElementById("post-description")
let postButton = document.querySelector(".post-button")

postButton.addEventListener("click", function(){
    if (postTitle.value.length > 0 && postDescription.value.length > 0){
        let newPost = {}
        newPost.id_post = posts.length + 1
        newPost.user = 1
        newPost.title = postTitle.value
        newPost.text = postDescription.value
        posts.push(newPost)
        postTitle.value = ""
        postDescription.value = ""
        listPosts()        
    }
})

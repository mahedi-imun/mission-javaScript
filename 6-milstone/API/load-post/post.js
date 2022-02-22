function getPost() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => allPost(data));
}
getPost();
function allPost(posts) {
    const postSection = document.querySelector(".posts");
    for (const post of posts) {
        const div = document.createElement("div");
        div.classList.add("post")
        div.innerHTML = `
        <h4>user id:${post.userId}</h4> 
          <h3>id:${post.id}</h3>
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        
        `;
        postSection.appendChild(div);
    }
}


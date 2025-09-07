const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        displayPost(data);
    });
};
const displayPost = (posts) => {
    // 1. get the container from HTML and empty the container

    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = "";

    posts.forEach((post) => {
        // 2. create element

        const postCard = document.createElement("div");
        postCard.innerHTML = `
            <div class="post-card">
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </div>
        `;

        // add to the container

        postContainer.append(postCard)
    });
};

loadPost();

// {
//     "userId": 8,
//     "id": 78,
//     "title": "quam voluptatibus rerum veritatis",
//     "body": "nobis facilis odit tempore cupiditate quia\nassumenda doloribus rerum qui ea\nillum et qui totam\naut veniam repellendus"
// }


// const loadPost = () => {
//     const url = "https://jsonplaceholder.typicode.com/posts";

//     fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//         displayPosts(data);
//     });
// };
// const displayPosts = (posts) => {
    
//     // 1. get the container and empty the container
//     const postContainer = document.getElementById("post-container");
//     postContainer.innerHTML = "";
    
    
//     posts.forEach((post) => {
//         // 2. create element
//         const postCard = document.createElement("div");
//         postCard.innerHTML = `
//             <div class="post-card">
//                 <h2>${post.title}</h2>
//                 <p>${post.body}</p>
//             </div>
//         `;
//         postContainer.appendChild(postCard);
//     })
// }

// loadPost();
// // const loadData = () => {
// //     const result = fetch("https://jsonplaceholder.typicode.com/todos/1")
// //     // promise of response
// //     .then((res) => res.json())
// //     // promise of json data
// //     .then((data) => console.log(data));
// // };

// const loadPosts = () => {
//     const url = ("https://jsonplaceholder.typicode.com/posts");
//     fetch(url)
//     .then((response) => response.json())
//     .then((json) => {
//         console.log(json);
//         displayPost(json);
//     });
// }
// const displayPost = (posts) => {
//     // console.log(posts);
//     posts.forEach((post) => {
//         console.log(post);
//     });
// }


// const loadData = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// };


// const loadPost = () => {
//     const url = "https://jsonplaceholder.typicode.com/posts";

//     fetch(url)
//     .then((res) => res.json())
//     .then((json) => {
//         console.log(json);
//         disPlayPosts(json);
//     })
// };
// const disPlayPosts = (posts) => {
//     posts.forEach(post => {
//         console.log(post);
//     })
// };

const loadData = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        displayPost(data)
    });
};
const displayPost = (posts) => {
    const postContainer = document.getElementById("post-container");
    
    posts.forEach((post) => {
        const li = document.createElement("li");
        li.innerText = post.title;
        console.log(li);
    
        postContainer.appendChild(li);
    })
}
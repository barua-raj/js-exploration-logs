// document.getElementById('btn-update').addEventListener('click', function(){
//     const pageTitleElement = document.getElementById('page-title');
//     console.log(pageTitleElement);
//     pageTitleElement.innerText = 'Page Title Updated!';
// })


document.getElementById('btn-login').addEventListener('click', function(){
    const userInfo = document.getElementById('user-info');
    userInfo.innerText = 'User Logged In!';
})

// 1. set event listener

    document.getElementById('btn-update').addEventListener('click', function () {
    
    // 2. get text from input field
    const nameInput = document.getElementById('input-name');
    const name = nameInput.value;

    // 3. set the name
    const namePara = document.getElementById('name');
    namePara.innerText = name;
})
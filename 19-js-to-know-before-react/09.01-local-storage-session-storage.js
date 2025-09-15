const handleAddToStorage = () => {
    const name = document.getElementById("name").value;
    const id = document.getElementById("id").value;
    // console.log(name);
    // localStorage.setItem(email, name);

    const data = {id, name};
    // localStorage.setItem(id, data);
    localStorage.setItem(id,JSON.stringify(data));
    // console.log(data);  
};

const storedItem = localStorage.getItem("231");
console.log(JSON.parse(storedItem));

const handleClear = () => {
    localStorage.clear();
}
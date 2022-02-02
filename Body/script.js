document.querySelector("#myinput").addEventListener("keyup", () => {
    const inputValue = document.querySelector("#myinput").value.toUpperCase();
    const userList = Array.from(document.getElementsByClassName("names"));
    userList.map(user => {
        user.parentNode.parentNode.style.display = 'none';
    })
    const matchedUsers = userList.filter(user => user.innerText.toUpperCase().includes(inputValue));
    matchedUsers.map(user => {
        user.parentNode.parentNode.style.display = '';
    })
})
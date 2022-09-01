function greeting() {
    let username = "Oscar";

    function displayUserName() {
        return `Helo ${username}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());

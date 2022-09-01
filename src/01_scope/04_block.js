const fruits = () => {
    if (true) {
        var fruits1 = "apple"; //function scope
        let fruits2 = "banana"; // block scope
        const fruits3 = "kiwi"; //block scope
        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits2);
    console.log(fruits3);
    console.log(fruits1);
};

fruits();

const coding = ["JS","Ruby","Java","Python","C++"];

// ForEach loop not return anything...
coding.forEach((num,idx) => {
    console.log(idx,'->',num);
})

const arrOfObject = [
    {
        lang : "Javascript",
        short : "JS"
    },
    {
        lang : "C++",
        short : "cpp"
    },
    {
        lang : "Python",
        short : "py"
    }
];

arrOfObject.forEach((obj) => {
    const currObj = obj;
    console.log(`${currObj.lang} : ${currObj.short}`);
})
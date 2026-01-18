// Immediately Invoked Function Expressions (IIFE)
// Syntex : (for function definition)(for function call);

(function greeting(name) {
    console.log(`Good Morning...${name}`);
})("Kishan");


(() => {
    console.log("This is Arrow Function...");
})();
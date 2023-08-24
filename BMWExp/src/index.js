import Example from "./scripts/example"; // from relative path

document.addEventListener("DOMContentLoaded", function(){
    console.log("Hellow World"); // start application AFTER loading everything in document

    const main = document.getElementById("main");
    new Example(main);
});
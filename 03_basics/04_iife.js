//***************************** Immediately Invoked Function Expressions (IIFE) **************************************/


//named IIFE
(function firstChai () {
    console.log(`First DB connected`)
})();


//unnamed IIFE
( (name) => {
    console.log(`Second DB connected : ${name}`)
} )("Sohail")

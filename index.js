// NUMBER 10

function multiply(num2, num4){
    let y = num2*num4
    console.log(y);


}
multiply(4, 5);


// NUMBER 8
document.getElementById("btn").addEventListener("click", function(){


    alert("Hello World")
})



// NUMBER 7
document.getElementById("nav").addEventListener('mouseover', ()=> {
    document.getElementById("nav").style.backgroundColor = "blue";
});
document.getElementById("nav").addEventListener('mouseout', () => {
    document.getElementById("nav").style.backgroundColor = "green";
});



// NUMBER 9
let array = [1,3,5,7,9];
let sum = 0;
array.forEach(item => {
    sum += item;
})
console.log(sum)


// NUMBER 11

for (i = 0; i < 10; i++){
    console.log("Hello world")
}

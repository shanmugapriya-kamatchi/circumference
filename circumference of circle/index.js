//console.log('hii');
//console.log(`hello`);

//window.alert("hii iam shanmugapriya");
//window.alert("do you want to continue")

//document.getElementById("a").textContent="Hello"
//document.getElementById("b").textContent="Iam shanmugapriya kamatchi"

//let x=100;
//console.log(x);
//console.log(`you are ${x} years old`);
//console.log(typeof x)

//let name="SHANMUAPRIYA KAMATCHI";
//let dept="Master of Computer Applications";
//document.getElementById("a").textContent=name;
//document.getElementById("b").textContent=dept;

//let username;
//username=window.prompt("what is your name");
//document.getElementById("c").textContent=`hello ${username}`

const PI=3.14159;
let r;
let c;
document.getElementById("submit").onclick=function(){
    r=document.getElementById("c").value;
    c=2*PI*Number(r);
    document.getElementById("b").textContent = `the circumference of the circle is ${c} cm`;
}

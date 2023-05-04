const body = document.querySelector("body");
const input1 = document.getElementById("colour1");
const input2 = document.getElementById("colour2");
const copy = document.getElementById("copy");
let css = document.getElementById("css");

function colourchange ()
{
    body.style.background=`linear-gradient(to right, ${input1.value}, ${input2.value})`;
    css.innerText=(`CSS: linear-gradient(to right, ${input1.value}, ${input2.value})`);
}

input1.addEventListener("input", colourchange);
input2.addEventListener("input", colourchange);

copy.addEventListener("click", ()=>{
    let select =css.innerHTML;
    navigator.clipboard.writeText(select.slice(5));
});












//add dropdown for 2 or 3 gradients select
//add copy css button
//customise color-stop's position (the point where transition to 2nd color begins)
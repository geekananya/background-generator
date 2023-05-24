const body = document.querySelector("body");
const input1 = document.getElementById("colour1");
const input2 = document.getElementById("colour2");
const copy = document.getElementById("copy");
let css = document.getElementById("css");
let tooltip = document.querySelector(".tooltip");
let tooltiptext = document.querySelector(".tooltiptext");
const random = document.querySelector(".randomise");


//background-colour-change-on-input
function bgColChange ()
{
    body.style.background=`linear-gradient(to right, ${input1.value}, ${input2.value})`;
    css.innerText=(`CSS: linear-gradient(to right, ${input1.value}, ${input2.value})`);
    console.log("input1", input1.value);
}

input1.addEventListener("input", bgColChange);
input2.addEventListener("input", bgColChange);
input1.addEventListener("change", bgColChange);
input2.addEventListener("change", bgColChange);


//Copy-CSS
//focusin , focusout
//click used instead of focus(works the same for mouse) to avoid tab key event meddling
copy.addEventListener("click", ()=>{
    let select =css.innerHTML;
    navigator.clipboard.writeText(select.slice(5));       //copy content inside select
    copy.children[0].setAttribute("src", "copy-fill.svg");      //change copy icon to copied
    tooltiptext.innerHTML = "Copied!";
})

copy.addEventListener("focusout", ()=>{
    copy.children[0].setAttribute("src", "copy.svg");      //change copied icon to copy
    tooltiptext.innerHTML = "Copy CSS!";
});

copy.addEventListener("mouseenter", ()=>{
    tooltip.style.visibility = "visible";
})
copy.addEventListener("mouseleave", ()=>{
    tooltip.style.visibility = "hidden";
})



//random colour generate
function toHex(n){
    //decimal to hex
    switch(n){
        case 10: return 'a';
        case 11: return 'b';
        case 12: return 'c';
        case 13: return 'd';
        case 14: return 'e';
        case 15: return 'f';
        default: return n;
    }
}
function randomise()
{
    //generate random hex code
    let s1="#", s2="#";
    for(let i=0; i<6; i++)
    {
        //generate random number from 0 to 15
        let n = Math.floor(Math.random()*16);
        s1 += toHex(n);
    }
    for(let i=0; i<6; i++)
    {
        //generate random number from 0 to 15
        let n = Math.floor(Math.random()*16);
        s2 += toHex(n);
    }
    input1.value=s1;
    input2.value=s2;
    bgColChange();
}

random.addEventListener("click", randomise);





//add Randomise button
//add dropdown for 2 or 3 gradients select
//add copy css button   --done, works
//customise color-stop's position (the point where transition to 2nd color begins)
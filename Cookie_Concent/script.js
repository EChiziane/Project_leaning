const cookieBox = document.querySelector(".wrapper"),
buttons = document.querySelectorAll(".wrapper");

const executeCodes= ()=>{
    if(document.cookie.includes("Ednilsonlab")) return;
    cookieBox.classList.add("show");
}

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        cookieBox.classList.remove("show");

        if(button.id=="accepBtn"){
            document.cookie="cookieBy= Ednilsonlab; max-age="+60 * 60 * 24 * 30;
        }
    });
});

window.addEventListener("load", executeCodes)
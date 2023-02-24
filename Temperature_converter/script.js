// Get References to the Celsius and Fahrenheit input fields 
const celsius= document.querySelector("#celsius"),
fahrenheit = document.querySelector("#fahrenheit");

// Set focus to the Celsius input when the page loads
window.addEventListener("load", ()=>celsius.focus());

//Convert Celsius To Fahrenheit when Celsius value changes 
celsius.addEventListener("input", ()=>{
    fahrenheit.value =((celsius.value*9)/5+32).toFixed(2);

    // Clear fahrenheit input when celsius input is empty 
    if(!celsius.value) fahrenheit.value="";
})

//Convert Fahrenheit to Celsius  when Fahrenheit value changes 
celsius.addEventListener("input", ()=>{
   celsius.value =((fahrenheit.value-32)*5).toFixed(2);

    // Clear  celsius  input when Fahrenheit input is empty 
    if(!fahrenheit.value) celsius.value="";
})
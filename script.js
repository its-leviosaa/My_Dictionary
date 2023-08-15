// searchinput
// searchbtn
const dictionary = (word) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b1eb33ab92msh6ac630bccdef5afp1db369jsn7e2d5dadbde0',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+word,options)
    .then(response=>response.json())
    .then((response)=>{
        //console.log(response)-> without writing this also everything is working properly
        wordheading.innerHTML = "Meaning of "+ response.word + " is explained below.";
        definition.innerHTML = response.definition.replace("2.","<br>2.").replace("3.","<br>3.").replace("4.","<br>4.").replace("5.","<br>5.").replace("6.","<br>6.");
    })
}

searchbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    dictionary(searchinput.value);
})
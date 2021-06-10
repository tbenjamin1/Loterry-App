let generatednum = [];
const generatednumList = document.getElementById("generated");
const  start = ()=>{
    if (generatednum.length == 20) {
        generatednum = [];
      
        generatednumList.innerHTML = ''; 
    }

    while (generatednum.length < 20) {
      
        const num= Math.floor(Math.random() * 9999);
      
        const winningNumber = winning(num);
      
  document.getElementById("checkWin").disabled=false;  
      
        if (winningNumber < 3) {
                   
            generatednum.push(num);
           
           generatednumList.innerHTML += `<span>${num}, </span>`;
        }
        else if (!winningNumber < 17) {
            generatednum.push(num);
            
            generatednumList.innerHTML += `<span>${num},</span>`;
            
          
        }
    }

};
const winning = (random) => {
    let sqr, mod;
    let duplicatednum= [];
    while (random != 1 && duplicatednum[random] !== true) {
        duplicatednum[random] = true;
        sqr = 0;
        while (random > 0) {
            mod = random % 10;
            sqr+= mod* mod;
            random = (random- mod) / 10;
        }
        random = sqr;
    }
    return (random == 1);
};
const Input = document.getElementById("inputNum");
const checker= () => { 
    if (generatednum.includes(parseInt(Input.value))) {
           if (winning(Input.value)) {
            const showMe = document.getElementById("result");
            showMe.style.color = "green"
             
            document.getElementById("result").textContent = "yes!! u win";
             
           } else {
             
            document.getElementById("result").textContent = "noo! u LOST";
            const showMe = document.getElementById("result");
            showMe.style.color = "red"
             
           }
       }
       else {
         
        document.getElementById("result").textContent = "plz choose from genereted";
        const showMe = document.getElementById("result");
        showMe.style.color = "blue"
         
       }
   }

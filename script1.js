const contents = document.querySelectorAll(".invis");
const selectors = document.querySelectorAll(".selector");

contents[0].style.opacity=1;

// incrementing opacity

function unfade(element) {
    let op = 0.1;
    element.style.display="block";

    let timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
            element.style.opacity = 1;
            return;
        }
        element.style.opacity = op;
        op += op * 0.1;
    }, 50);
}

// decrementing opacity
function fade(element) {
    let op = 1;  // initial opacity
    let timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.opacity = 0;
            element.style.display="none";
            return;            
        }
        element.style.opacity = op;
        op -= op * 0.1;
    }, 20);
}


selectors.forEach ((item)=>{
    item.addEventListener("click",()=>{  
        if(!item.classList.contains("active")){
            selectors.forEach((it)=>{
                if(it.classList.contains("active")){
                    contents.forEach((content)=>{
                        if(content.classList.contains(it.dataset.content)){
                            fade(content);                
                        }
                    })                       
                }
    
            })        
            contents.forEach((content)=>{           
                if(content.classList.contains(item.dataset.content)){
                    unfade(content);
                }
            });
        selectors.forEach((i)=>{
            i.classList.remove("active");
        });
        item.classList.add("active");
        console.log(item.dataset.content);

        }
    })
})


// Menu  button switch
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".js-dialog-button");
const closeButton = document.querySelector("dialog span");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
  document.body.style.overflow = "hidden";
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
  document.body.style.overflow = "auto";
});


const menuItem = document.querySelectorAll(".js-dialog-menu-item");
Array.from(menuItem).map(element => {
    element.addEventListener("click",()=> {
     dialog.close();
     document.body.style.overflow = "auto";
    })

})

const menuBar = document.querySelector(".menu-bar");
const canvasMenu = document.querySelector(".canvas-menu");
const xmarkMenu = document.querySelector(".iconx");

// map
const path = document.querySelectorAll('path');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
// 
//  menubar
const topToBottom =()=>{
    canvasMenu.style.transform = "translate(0,0)"
    canvasMenu.style.transition = ".4s"
}

menuBar.onclick = topToBottom;

const bottomToTop =()=>{
    canvasMenu.style.transform = "translate(0,-500px)"
    canvasMenu.style.transition = ".4s"
}

xmarkMenu.onclick = bottomToTop;

// .....map
    const cardLoad = () => {
        for (let i = 0; i < path.length; i++) {
            
        path[i].addEventListener("click" , ()=>{
          name.innerText = path[i].getAttribute("name");  
          email.innerText = `${path[i].getAttribute("name").toLowerCase()}@agro.gov.az`;  
        })
            
        } }


    cardLoad();



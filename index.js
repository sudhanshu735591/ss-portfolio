let slider_Box = document.getElementById("slider_Box");

let next = document.getElementById("next");
let prev = document.getElementById("prev");

const arr = ["https://snacknation.com/wp-content/uploads/2020/12/Best-Task-Management-Software-Platforms.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbzEnu5dlONOmSgTtByQOZyE4JQAHNjwiNow&usqp=CAU.png"];

const link = ["https://sudhanshu735591.github.io/Task-Manager-App---Javascript-Project---ma50o6beiti5/", "https://sudhanshu735591.github.io/Tic-Tac-Toe-Game/"];

let flag = 0;
let img = document.createElement("img");
img.src = arr[flag];
img.alt = "ticTacToe"

img.className = "carousel_image";
slider_Box.appendChild(img);  


next.addEventListener("click", ()=>{
    slider_Box.innerHTML = "";
    flag++;
    if(flag===arr.length){
        flag = 0;
    }

    let a = document.createElement("a");
    a.href = link[flag];

    let img = document.createElement("img");
    img.src = arr[flag];
    img.className = "carousel_image";
    a.appendChild(img);
    slider_Box.appendChild(a);    
})


prev.addEventListener("click", ()=>{
    slider_Box.innerHTML = "";
    if(flag===-1){
        flag=arr.length-1;
    }
    console.log(flag);
    let a = document.createElement("a");
    a.href = link[flag];


    let img = document.createElement("img");
    img.src = arr[flag];
    img.className = "carousel_image";
    
    a.appendChild(img);
    slider_Box.appendChild(a);    
    flag--;
})



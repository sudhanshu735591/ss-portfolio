let slider_Box = document.getElementById("slider_Box");

let next = document.getElementById("next");
let prev = document.getElementById("prev");

const arr = ["https://plus.unsplash.com/premium_photo-1673735396428-d51dc2a7a62d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80.png",
    "https://snacknation.com/wp-content/uploads/2020/12/Best-Task-Management-Software-Platforms.png"];

const link = ["https://sudhanshu735591.github.io/Tic-Tac-Toe-Game/",
    "https://sudhanshu735591.github.io/Task-Manager-App---Javascript-Project---ma50o6beiti5/",
    "https://booking-com-clone-react-project-2-qbzssudndd81-poia.vercel.app/",
    "https://beyoung-clone-seven.vercel.app/",
];


let flag = 0;

function nextLoader() {
    slider_Box.innerHTML = "";
    flag++;
    if (flag === arr.length) {
        flag = 0;
    }

    let a = document.createElement("a");
    a.href = link[flag];

    let img = document.createElement("img");
    img.src = arr[flag];
    img.className = "carousel_image";
    a.appendChild(img);
    slider_Box.appendChild(a);
}

nextLoader();


next.addEventListener("click", nextLoader)
console.log(flag);


prev.addEventListener("click", () => {
    slider_Box.innerHTML = "";
    flag--;

    if (flag === -1) {
        flag = arr.length - 1;
    }

    let a = document.createElement("a");
    a.href = link[flag];


    let img = document.createElement("img");
    img.src = arr[flag];
    img.className = "carousel_image";

    a.appendChild(img);
    slider_Box.appendChild(a);
})



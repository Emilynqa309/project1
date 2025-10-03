
const carousel = document.querySelector(".carousel-container");
const boxes = document.querySelectorAll(".carousel-container .box");

let i = 1
let startingPosition = (window.innerWidth / 2) - (boxes[0].offsetWidth / 2)
console.log(startingPosition)

let currentaudio


function scrollRight() {
    currentaudio[0].pause()
    if (i < boxes.length - 2) {
        i = i + 1
    }
    boxes[i].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
    });
}

function playAudio() {
    currentaudio = boxes[i].getElementsByTagName("audio")
    if (currentaudio[0]) {
        currentaudio[0].play()
    }

}
function scrollBack() {
    currentaudio[0].pause()
    if (i > 1) {
        i = i - 1
    }
    boxes[i].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
    });

}
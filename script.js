const speedUp = document.querySelector("#SpeedUp");
const speedDown = document.querySelector("#SpeedDown");
const volumeUp = document.querySelector("#VolumeUp");
const volumeDown = document.querySelector("#VoulueDown");
const videoBtn = document.querySelector("#videoBtn");
const videoInput = document.querySelector("#videoInput");
const videoPlayer = document.querySelector("#main");
const toast = document.querySelector(".toast");


const speedUpHandler = () => {
    const videoElement = document.querySelector("video");
    if(videoElement == null){
        return;
    }
    if(videoElement.playbackRate > 3){
        return;
    }
    const increaseSpeed = videoElement.playbackRate + 0.5;
    videoElement.playbackRate = increaseSpeed;
    // toast.textContent = increaseSpeed+"X";
    // toast.style.display = "block";
    // setTimeout(() =>{
    //     toast.style.display = "none";
    // },1000);

    const message = (increaseSpeed*100)+"%";
    showToast(message);

}

const speedDownHandler = () => {
    const videoElement = document.querySelector("video");
    if(videoElement == null){
        return;
    }

    const decreaseSpeed = videoElement.playbackRate - 0.5;
    videoElement.playbackRate = decreaseSpeed;
    // toast.textContent = decreaseSpeed+"X";
    // toast.style.display = "block";
    // setTimeout(() =>{
    //     toast.style.display = "none";
    // },1000);
    const message = (decreaseSpeed*100)+"%";
    showToast(message);
}

const volumeUpHandler = () => {
    const videoElement = document.querySelector("video");
    if(videoElement == null){
        return;
    }
    if(videoElement.volume >= 0.99){
        console.log("return");
        return;
    }

    videoElement.volume = videoElement.volume + 0.1;
    console.log(videoElement.volume);
}

function showToast(message){
    toast.textContent = message;
    toast.style.display = "block";
    setTimeout(() =>{
        toast.style.display = "none";
    },1000);
}

const volumeDownHandler = () => {
    const videoElement = document.querySelector("video");
    if(videoElement == null){
        return;
    }
    if(videoElement.volume <= 0){
        console.log("return");
        return;
    }

    videoElement.volume = videoElement.volume - 0.1;
    console.log(videoElement.volume);
}


const handleInput = () => {
    videoInput.click();
}

const acceptInputHandler = (obj) =>{
    const selectedVideo = obj.target.files[0];
    const link = URL.createObjectURL(selectedVideo);

    const videoElement = document.createElement("video");
    videoElement.src = link;
    videoPlayer.appendChild(videoElement);
    videoElement.play();
    videoElement.controls = "true";
}

speedUp.addEventListener("click",speedUpHandler);
speedDown.addEventListener("click",speedDownHandler);
volumeUp.addEventListener("click",volumeUpHandler);
volumeDown.addEventListener("click",volumeDownHandler);

videoBtn.addEventListener("click",handleInput);

videoInput.addEventListener("change",acceptInputHandler);

const handleFullScreen = () =>{
    videoPlayer.requestFullscreen();
}

const fullScreenElem = document.querySelector("#fullScreen");
fullScreenElem.addEventListener("click",handleFullScreen);
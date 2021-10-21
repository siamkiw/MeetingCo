let createMeetingButton = document.querySelector("#createMeeting");
let defaultContainer = document.querySelector("#defaultContainer");
let createMeetingContainer = document.querySelector("#createMeetingContainer");
let createRoomButton = document.querySelector("#createRoomButton")

// inner element 
let createMeetingInner = document.querySelector("#createMeetingInner")
let prepareMeetingInner = document.querySelector("#prepareMeetingInner")

// toggle between defaultContainer and createMeetingContainer
let isDisplayDefaultContainer = true;
createMeetingButton.addEventListener("click", () => {
  if (isDisplayDefaultContainer) {
    defaultContainer.classList.add("d-none");
    createMeetingContainer.classList.remove("d-none");
    createMeetingContainer.classList.add("d-block");
  }else {
    defaultContainer.classList.remove("d-none");
    defaultContainer.classList.add("d-flex");
    createMeetingContainer.classList.remove("d-block");
    createMeetingContainer.classList.add("d-none");
  }
  isDisplayDefaultContainer = !isDisplayDefaultContainer
});

let isDisplayCreateMeetingRoom = true
createRoomButton.addEventListener("click", () => {
    if(isDisplayCreateMeetingRoom){
        createMeetingInner.classList.add("d-none")
        prepareMeetingInner.classList.remove("d-none")
        prepareMeetingInner.classList.add("d-flex");
    }else {
        createMeetingInner.classList.remove("d-none");
        createMeetingInner.classList.add("d-flex");
        prepareMeetingInner.classList.remove("d-flex");
        prepareMeetingInner.classList.add("d-none");
    }
    isDisplayCreateMeetingRoom = !isDisplayCreateMeetingRoom
})


let emailContainer = document.querySelector('#email-container')
let emailAddInput = document.querySelector('#email-add-Input')
let emailButton = document.querySelector('#email-button')

let boxCount = 3
emailButton.addEventListener("click", () => {
  boxCount++
  emailContainer.innerHTML += `
  <div id="box-${boxCount}"  class="d-flex justify-content-between align-items-center email-box mt-2">
    <p onclick="changeColor('box-${boxCount}')" class="m-0">${emailAddInput.value}</p>
    <div id="box-close-${boxCount}" onclick="closeEmail('box-${boxCount}')" class="close-x">X</div>
  </div>`
  emailAddInput.value = ""
})

function changeColor(id){
  document.querySelector(`#${id}`).style.background = "#B2F7B2"
}

function closeEmail(id){
  document.querySelector(`#${id}`).remove();
}

let startButton = document.querySelector('#start-button')
let isStartNow = false

startButton.addEventListener("click", () => {
  if(!isStartNow){
    startButton.innerHTML = "Go to Lobby"
  }else {
    console.log("else")
    window.location.href = "/src/view/lobby.html";
  }
  isStartNow = true
})

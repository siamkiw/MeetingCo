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

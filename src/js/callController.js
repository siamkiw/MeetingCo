let createMeetingButton = document.querySelector("#createMeeting");
let defaultContainer = document.querySelector("#defaultContainer");
let createMeetingContainer = document.querySelector("#createMeetingContainer");

// toggle between defaultContainer and createMeetingContainer
let isDisplayDefaultContainer = true;
createMeetingButton.addEventListener("click", () => {
  if (isDisplayDefaultContainer) {
    defaultContainer.classList.add("d-none");
    createMeetingContainer.classList.remove("d-none");
    createMeetingContainer.classList.add("d-block");
    console.log("isDefaultContainer : ", isDisplayDefaultContainer);
  }else {
    defaultContainer.classList.remove("d-none");
    defaultContainer.classList.add("d-flex");
    createMeetingContainer.classList.remove("d-block");
    createMeetingContainer.classList.add("d-none");
    console.log("isDefaultContainer : ", isDisplayDefaultContainer);
  }
  isDisplayDefaultContainer = !isDisplayDefaultContainer
});

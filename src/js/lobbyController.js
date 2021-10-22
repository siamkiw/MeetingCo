var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {
    keyboard: false
  })

myModal.show()

let userContainer = document.querySelector("#user-container")
let registerButton = document.querySelector("#register-button")
let isDisplayUser = false
registerButton.addEventListener('click', () => {
    if(!isDisplayUser){
    userContainer.style.display = "block"
    }else{
    userContainer.style.display = "none"
    }
    isDisplayUser = !isDisplayUser
})
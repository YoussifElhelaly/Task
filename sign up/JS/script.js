$(".main .box").slideDown(function () {
    $(".main .text").slideDown()
    $(".main .img").slideDown()
    $(".main form").slideDown()
})

let userName = document.getElementById("userName")
let email = document.getElementById("email")
let password = document.getElementById("password")
let confirmPassword = document.getElementById("confirmPassword")
let form = document.getElementById("form")


$("#create").click(function (e) {

    if(!isNaN(userName.value[0]) === true ||
     !isNaN(userName.value[userName.value.length - 1]) === true
     ) {
        e.preventDefault()
        document.querySelector("form .error").innerHTML = `<div class="alert alert-danger d-flex align-items-center" role="alert">
        <div>
            Your user name contain number please remove it
        </div>
      </div>`
    } else if (userName.value.includes("@") || 
                userName.value.includes("!") || 
                userName.value.includes("$") || 
                userName.value.includes("-") || 
                userName.value.includes("_") || 
                userName.value.includes("#")) {
        e.preventDefault()
        document.querySelector("form .error").innerHTML = `<div class="alert alert-danger d-flex align-items-center" role="alert">
        <div>
            Your user name Contain Special chracter please remove it
        </div>
      </div>`
    } else if (userName.value.length < 5 || userName.value.length > 15) {
        e.preventDefault()   
            document.querySelector("form .error").innerHTML = `<div class="alert alert-danger d-flex align-items-center" role="alert">
            <div>
                your user name must be between 5 to 15 charcter
            </div>
            </div>`   
        } else if (password.value.length < 8) {
            e.preventDefault()   
                document.querySelector("form .error").innerHTML = `<div class="alert alert-danger d-flex align-items-center" role="alert">
                <div>
                    your password must be more than 8 charcter
                </div>
                </div>`   
            
    }
     else if(confirmPassword.value !== password.value) {
         e.preventDefault()   
         document.querySelector("form .error").innerHTML = `<div class="alert alert-danger d-flex align-items-center" role="alert">
         <div>
         Your Password not equal
         </div>
         </div>` 
        } else if (!email.value.includes("@")) {
            e.preventDefault()   
            document.querySelector("form .error").innerHTML = `<div class="alert alert-danger d-flex align-items-center" role="alert">
            <div>
            write your email correctly
            </div>
            </div>`   
        }  else {
            e.preventDefault()   
         fetch('https://goldblv.com/api/hiring/tasks/register', {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },
            body: JSON.stringify({ userName : userName.value , email : email.value , password : password.value })
          });
        localStorage.setItem("email" , email.value)
        location.pathname = "Task/success/success.html"
    }
})

 

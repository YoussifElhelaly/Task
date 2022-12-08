$(".main .box").slideDown(function () {
    $(".main .text").slideDown()
    $(".main .img").slideDown()
})

document.querySelector(".main .right .text a").innerHTML = localStorage.getItem("email")
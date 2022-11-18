let mod = document.querySelector(".modal")
let mod_bg = document.querySelector(".modal__background")
let mod_btn = document.querySelector("#modal")

mod_btn.addEventListener('click', function () {
    mod.style.display = 'flex'
})

mod_bg.addEventListener('click', function () {
    mod.style.display = 'none'
})

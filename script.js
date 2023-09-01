const mario = document.querySelector(".mario")
const goomba = document.querySelector(".goomba")

const jump = () => {
  mario.classList.add("jump")

  setTimeout(() => {
    mario.classList.remove("jump")
  }, 500)
}

const loop = setInterval(() => {
  const goombaPosition = goomba.offsetLeft
  const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "")

  if (goombaPosition <= 775 && goombaPosition > 700 && marioPosition < 90) {
    goomba.style.animation = "none"
    goomba.style.left = `${goombaPosition}px`

    mario.style.animation = "none"
    mario.style.bottom = `${marioPosition}px`

    mario.src = "./assets/mariomoito.png"
    mario.style.width = '120px'
    mario.style.marginLeft = "-25px"

    clearInterval(loop);
  }
}, 10)

document.addEventListener("keydown", jump)
document.addEventListener("touchstart", jump)

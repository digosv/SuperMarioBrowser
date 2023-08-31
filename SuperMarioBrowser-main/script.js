const mario = document.querySelector(".mario")
const goomba = document.querySelector(".goomba")

const jump = () => {
  mario.classList.add("jump")

  setTimeout(() => {
    mario.classList.remove("jump")
  }, 500)
}

document.addEventListener("keydown", jump)
document.addEventListener('Touch', jump)

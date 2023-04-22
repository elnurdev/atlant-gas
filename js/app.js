const btns = document.querySelectorAll('.products__btn')
const carousel = document.querySelector('.carousel__body')
const slide = document.querySelector('.carousel__blog')
const prevButton = document.querySelector('#left')
const nextButton = document.querySelector('#right')
const btn = document.querySelectorAll('.popup__btn')
const popup__close = document.querySelector('.popup__close')
const body = document.querySelector('body')
const faqs = document.querySelectorAll('.faq__item')

// products

for (const btn of btns) {
  btn.addEventListener('click', () => {
    clearActiveClasses()
    btn.classList.add('btn_ative')
  })
}

function clearActiveClasses() {
  btns.forEach((btn) => {
    btn.classList.remove('btn_ative')
  })
}

function changeImage(fileName) {
  let img = document.querySelector('#bannerImage')
  img.setAttribute('src', fileName)
}

// corousel

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  carousel.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  carousel.scrollLeft -= slideWidth;
});

// popup

// btn.addEventListener('click', ()=> {
//   const popup = document.querySelector('.popup')
//   popup.classList.add('popup__open')
//   body.style.overflow = "hidden"
// })

btn.forEach(buttons => buttons.addEventListener('click', popupOpen))

function popupOpen() {
  const popup = document.querySelector('.popup')
  popup.classList.add('popup__open')
  body.style.overflow = "hidden"
}

popup__close.addEventListener('click', ()=> {
  const popup = document.querySelector('.popup')
  popup.classList.remove('popup__open')
  body.style.overflow = "auto"
})

for (const faq of faqs) {
  faq.addEventListener('click', ()=> {
    faqEnd()
    faq.classList.add('faq__active')
  })
}

function faqEnd() {
  faqs.forEach((faq) => {
    faq.classList.remove('faq__active')
  })
}
const sliders = document.querySelectorAll('.roomcard__slider');
sliders.forEach((slider) => {
  const buttons = slider.querySelectorAll('.roomcard__paginationButton')
  const slides = slider.querySelector('.roomcard__images')
  buttons[0].classList.add('roomcard__paginationButton_active')
  buttons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
      const activeButton = slider.querySelector('.roomcard__paginationButton_active')
      activeButton.classList.remove('roomcard__paginationButton_active')
      event.target.classList.add('roomcard__paginationButton_active')
      slides.style.right = `${index * 100}%`
    })
  })
  let timeout = null;
  slides.addEventListener('mouseover', (event) => {
    const positionNow = slides.style.right.slice(0, -1)
    const activeIndex = positionNow / 100
    timeout = setTimeout(() => {
      if (activeIndex < buttons.length - 1) {
        buttons[activeIndex + 1].click()
      } else {
        buttons[0].click();
      }
    }, 1000);
  })
  slides.addEventListener('mouseout', () => {
    clearTimeout(timeout)
  })

  slides.ondragstart = () => {
    return false;
  };

  slides.addEventListener('mousedown', (mousedownEvent) => {
    const downX = mousedownEvent.clientX;
    const { right } = slides.style;
    const swipe = (event) => {
      event.target.onclick = (e) => {
        e.preventDefault()
      }
      const shiftX = downX - event.clientX;
      const positionNow = slides.style.right.slice(0, -1)
      const activeIndex = positionNow / 100
      if (shiftX < 0) {
        if (activeIndex > 0) {
          buttons[activeIndex - 1].click()
        }
      } else {
        if (activeIndex < buttons.length - 1) {
          buttons[activeIndex + 1].click()
        }
      }
    }
    mousedownEvent.target.addEventListener('mousemove', swipe)
    document.addEventListener('mouseup', (e) => {
      mousedownEvent.target.removeEventListener('mousemove', swipe)
    })
  })

})
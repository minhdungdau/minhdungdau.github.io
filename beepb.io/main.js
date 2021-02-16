$(document).ready(function () {
  $('.carousel').slick({
    prevArrow: `<button type="button" class="arrow prev-arrow"><img src="images/arrow-previous.png" alt="previous"/></button>`,
    nextArrow: `<button type="button" class="arrow next-arrow"><img src="images/arrow-next.png" alt="next"/></button>`
  });
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// Hamburger
const menu = document.querySelector('.menu')
const hamburger = document.querySelector('.hamburger')
function drop_menu() {
  menu.classList.toggle("d-on")
}

window.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    // Clicked outside the menu or hamburger
    menu.classList.remove("d-on")
  }
})

//Details select
const details = [
  {
    iconUnactived: './images/buy-icon.png',
    iconActived: './images/buy-icon-2.jpg',
    image: 'images/iPhone_X_2.png'
  },
  {
    iconUnactived: './images/user-icon.png',
    iconActived: './images/user-icon-2.png',
    image: 'images/iPhone_X_test-1.png'
  },
  {
    iconUnactived: './images/analytic-icon.png',
    iconActived: './images/analytic-icon-2.png',
    image: 'images/iPhone_X_test-2.png'
  },
  {
    iconUnactived: './images/brain-icon.png',
    iconActived: './images/brain-icon-2.png',
    image: 'images/iPhone_X.png'
  }
]

const detailSelect = Array.from(document.querySelectorAll('.detail'))
const sample = document.querySelector('.sample img')
console.log(sample);
detailSelect.forEach((ele, index) => {
  ele.onclick = () => {
    detailSelect.forEach((e,i) => {
      e.childNodes[1].src = details[i].iconUnactived
      e.classList.remove('detail-actived')
    })
    ele.classList.add('detail-actived')
    ele.childNodes[1].src = details[index].iconActived
    sample.src = `${details[index].image}`
    sample.insertAdjacentElement('beforebegin', sample)
    $('html,body').animate({
      scrollTop: $(".sample").offset().top},
      'slow');
  }
});

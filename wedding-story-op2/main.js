const celebrateDate = "2025-05-03 11:00:00";

// Handle viewport height on mobile devices
document.documentElement.style.setProperty(
  "--vh",
  window.innerHeight * 0.01 + "px",
  "important"
);
// Start countdown from a specific date (YYYY-MM-DD HH:MM:SS)
updateCountdown(celebrateDate);

// Handle animated scroll
document.addEventListener("DOMContentLoaded", function () {
  let target = document.getElementById("thank-you");

  let observer = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = document.querySelector(".fadeInUp");
          element.classList.add("animate__animated", "animate__fadeInUp");
          observer.unobserve(target); // Chỉ chạy 1 lần, bỏ dòng này nếu muốn lặp lại
        }
      });
    },
    { threshold: 0.5 } // Khi 50% của div xuất hiện trên màn hình thì kích hoạt
  );

  observer.observe(target);
});

// Swiper
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 3500,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});

// Light Gallery
// $(document).ready(function () {
//   $("#gallery")
//     .justifiedGallery({
//       captions: false,
//       // lastRow: "hide",
//       rowHeight: 150,
//       maxRowHeight: 200,
//       maxRowCount: 4,
//       margins: 10,
//       lastRow: "justify",
//     })
//     .on("jg.complete", function () {
//       // lightGallery(document.getElementById("lightgallery"), {
//       //   speed: 500,
//       //   download: false,
//       //   plugins: [lgZoom, lgThumbnail],
//       //   thumbnail: true,
//       // });
//     });
//   });
  lightGallery(document.getElementById("gallery"), {
    selector: ".swiper-slide a", // Chỉ mở ảnh khi nhấn vào slide
    plugins: [lgThumbnail, lgZoom],
    mode: "lg-fade",
    download: false,
    thumbnail: true,
  });
  lightGallery(document.getElementById("timeline-container"), {
    selector: ".text-component a", // Chỉ mở ảnh khi nhấn vào slide
    plugins: [lgThumbnail, lgZoom],
    mode: "lg-fade",
    download: false,
    thumbnail: true,
  });

function updateCountdown(targetDate) {
  const now = new Date().getTime(); // Current timestamp
  const targetTime = new Date(targetDate).getTime(); // Target timestamp

  let diff = targetTime - now; // Difference in milliseconds

  // Convert to days, hours, minutes, seconds
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
  document.getElementById("hours").innerHTML = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").innerHTML = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").innerHTML = seconds
    .toString()
    .padStart(2, "0");

  // Update every second
  setTimeout(() => updateCountdown(targetDate), 1000);
}

function shareOnFacebook() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
}

function shareOnZalo() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://zalo.me/share?url=${url}`, "_blank");
}

function shareOnViber() {
  const url = encodeURIComponent(window.location.href);
  window.open(`viber://forward?text=${url}`, "_blank");
}

(function () {
  // Vertical Timeline - by CodyHouse.co
  function VerticalTimeline(element) {
    this.element = element;
    this.blocks = this.element.getElementsByClassName("cd-timeline__block");
    this.images = this.element.getElementsByClassName("cd-timeline__img");
    this.contents = this.element.getElementsByClassName("cd-timeline__content");
    this.offset = 0.8;
    this.hideBlocks();
  }

  VerticalTimeline.prototype.hideBlocks = function () {
    if (!"classList" in document.documentElement) {
      return; // no animation on older browsers
    }
    //hide timeline blocks which are outside the viewport
    var self = this;
    for (var i = 0; i < this.blocks.length; i++) {
      (function (i) {
        if (
          self.blocks[i].getBoundingClientRect().top >
          window.innerHeight * self.offset
        ) {
          self.images[i].classList.add("cd-timeline__img--hidden");
          self.contents[i].classList.add("cd-timeline__content--hidden");
        }
      })(i);
    }
  };

  VerticalTimeline.prototype.showBlocks = function () {
    if (!"classList" in document.documentElement) {
      return;
    }
    var self = this;
    for (var i = 0; i < this.blocks.length; i++) {
      (function (i) {
        if (
          self.contents[i].classList.contains("cd-timeline__content--hidden") &&
          self.blocks[i].getBoundingClientRect().top <=
            window.innerHeight * self.offset
        ) {
          // add bounce-in animation
          self.images[i].classList.add("cd-timeline__img--bounce-in");
          self.contents[i].classList.add("cd-timeline__content--bounce-in");
          self.images[i].classList.remove("cd-timeline__img--hidden");
          self.contents[i].classList.remove("cd-timeline__content--hidden");
          if (
            self.blocks[i].getBoundingClientRect().top >
            window.innerHeight * self.offset
          ) {
            self.images[i].classList.add(
              "animate__animated",
              "animate__fadeInUp"
            );
            self.contents[i].classList.add(
              "animate__animated",
              "animate__fadeInUp"
            );
          }
        }
      })(i);
    }
  };

  var verticalTimelines = document.getElementsByClassName("js-cd-timeline"),
    verticalTimelinesArray = [],
    scrolling = false;
  if (verticalTimelines.length > 0) {
    for (var i = 0; i < verticalTimelines.length; i++) {
      (function (i) {
        verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
      })(i);
    }

    //show timeline blocks on scrolling
    window.addEventListener("scroll", function (event) {
      if (!scrolling) {
        scrolling = true;
        !window.requestAnimationFrame
          ? setTimeout(checkTimelineScroll, 250)
          : window.requestAnimationFrame(checkTimelineScroll);
      }
    });
  }

  function checkTimelineScroll() {
    verticalTimelinesArray.forEach(function (timeline) {
      timeline.showBlocks();
    });
    scrolling = false;
  }
})();

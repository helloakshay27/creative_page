    // Function to toggle between "Read More" and "Read Less"



    $('.read-m1, .read-img').click(function() {
        $('.additional-content').slideToggle();
    
        if ($('.read-m1').text() === "Read less") {
            $('.read-m1').text("Read more");
            $(".read-img").css("transform", "rotate(179deg)");
    
        } else {
            $('.read-m1').text("Read less");
            $(".read-img").css("transform", "rotate(0deg)"); // Reset rotation
        }
    });
    
    

     








var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 7,
        spaceBetween: 50,
      },
    },

  });



  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },

    autoplay: {
        delay: 2000, // Set the autoplay delay in milliseconds
        disableOnInteraction: false, // Allow interaction to stop autoplay
      },

  });


// gasp animation








const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})






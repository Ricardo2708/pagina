new Glider(document.querySelector('.carousel__lista'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    breakpoints: {
      800: {
        perView: 2
      },
      480: {
        perView: 1
      }
    },
    arrows: {
      prev: '.carousel__anterior',
      next: '.carousel__siguiente'
    },
    dots: '.carousel__indicadores',
    responsive:[
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }

        },{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        }
    ]
  })

const glider = new Glider(document.getElementById('glider'));


  
sliderAuto(glider, 10000)


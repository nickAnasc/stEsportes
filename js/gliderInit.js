document.addEventListener("DOMContentLoaded", function(){
    // CARROSSEL DE PRODUTOS
    if(document.querySelector('.product-carrossel')) {
        document.querySelectorAll('.product-carrossel').forEach(element => {
            new Glider(element, {
                slidesToShow: 1,
                slidesToScroll: 1,
                draggable: false,
                arrows: {
                    prev: element.closest('.controls').querySelector('.slider-prev'),
                    next: element.closest('.controls').querySelector('.slider-next')
                },
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            duration: 3
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            duration: 3
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            duration: 3
                        }
                    },
                    {
                        breakpoint: 320,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            duration: 3
                        }
                    }
                ]
            });
        });
    }

    // CARROSSEL VEJA TAMBÉM
    if(document.querySelector('.related-content')) {
        new Glider(document.querySelector('.related-content'), {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: false,
            arrows: {
                prev: document.querySelector('.products-related .control .slider-prev'),
                next: document.querySelector('.products-related .control .slider-next')
            },
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        duration: 3
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        duration: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        duration: 3
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        duration: 3
                    }
                }
            ]
        });
    }

    // RÉGUA CARROSSEL
    if(document.querySelector('.scale')) {
        new Glider(document.querySelector('.scale'), {
            slidesToShow: 4,
            slidesToScroll: 1,
            draggable: true,
            arrows: {
                prev: document.querySelector('.bannerRegua .controls').querySelector('.slider-prev'),
                next: document.querySelector('.bannerRegua .controls').querySelector('.slider-next')
            },
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        duration: 3,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        duration: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2.1,
                        slidesToScroll: 1,
                        duration: 3,
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1.1,
                        slidesToScroll: 1,
                        duration: 3,
                    }
                }
            ]
        });
    }

    // TRIPLE BANNER
    if(document.querySelector('.responsive-banner')) {
        document.querySelectorAll('.responsive-banner').forEach(element => {
            new Glider(element, {
                slidesToShow: 3,
                slidesToScroll: 1,
                draggable: false,
                arrows: {
                    prev: element.closest('.tripleBanner-carrossel.controls').querySelector('.slider-prev'),
                    next: element.closest('.tripleBanner-carrossel.controls').querySelector('.slider-next')
                },
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            duration: 3,
                            dots: false
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            duration: 3,
                            dots: false
                        }
                    },
                    {
                        breakpoint: 320,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            duration: 3,
                            dots: false
                        }
                    }
                ]
            });
        });
    }

    // BRAND CARROSSEL
    if(document.querySelector('.brand .brand__list')) {
        new Glider(document.querySelector('.brand .brand__list'), {
            slidesToShow: 4,
            slidesToScroll: 1,
            draggable: true,
            arrows: {
                prev: document.querySelector('.brand.controls').querySelector('.slider-prev'),
                next: document.querySelector('.brand.controls').querySelector('.slider-next')
            },
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        duration: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        duration: 3,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        duration: 3,
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        duration: 3,
                    }
                },
            ]
        });
    }

    // DEPOIMENTOS CARROSSEL
    if(document.querySelector('.dep_lista')) {
        new Glider(document.querySelector('.dep_lista'), {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            arrows: {
                prev: '.dep-prev',
                next: '.dep-next'
            },
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        duration: 3,
                    }
                }
            ]
        });
    }
});
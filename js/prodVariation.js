(function ($) {
    if (document.querySelector('.page-product')) {
        var productId = document.querySelector('.hidden-id-product');
        if (productId) {
            var productId = document.querySelector('.hidden-id-product').value;
            var variation = [];

            $.ajax({
                method: "GET",
                url: "/web_api/products/" + productId
            }).done(function (response, textStatus, jqXHR) {
                response.Product.Variant.forEach(element => {
                    variation.push(element.id);
                });
            }).fail(function (jqXHR, status, errorThrown) {
                var response = $.parseJSON(jqXHR.responseText);
            });

            setTimeout(function () {
                variation.forEach(el => {
                    $.ajax({
                        method: "GET",
                        url: "/web_api/variants/" + el
                    }).done(function (response, textStatus, jqXHR) {
                        var colorVariation = document.querySelectorAll('.lista_cor_variacao li');
                        var selectVariation = document.querySelector('#variation_first_select');
                        var autoSelect = document.querySelector('.cor_selecionada');

                        if (autoSelect) {
                            autoSelect.click();
                        }

                        if (colorVariation) {
                            colorVariation.forEach(element => {
                                element.addEventListener('click', function () {
                                    getVariation(this.dataset.id, response)

                                    setTimeout(function () {
                                        if (document.querySelector('#second_dropdown')) {
                                            secondSelectVariation()
                                        }
                                    }, 1000);


                                    setTimeout(function () {
                                        if (document.querySelectorAll('.lista_cor_variacao')[1]) {
                                            var secondColorVariation = document.querySelectorAll('.lista_cor_variacao')[1].childElements();
                                            secondColorVariation.forEach(element => {
                                                element.addEventListener('click', function () {
                                                    getVariation(this.dataset.id, response)
                                                })
                                            });
                                        }
                                    }, 1000);
                                })
                            });

                            function secondSelectVariation() {
                                setTimeout(function () {
                                    var secondVariation = document.querySelector('#second_dropdown');

                                    if (secondVariation) {
                                        getVariation(secondVariation.value, response)
                                    }

                                    secondVariation.addEventListener('change', function () {
                                        getVariation(this.value, response)
                                    })
                                }, 1000);
                            }
                        }

                        if (selectVariation) {
                            if (selectVariation.value) {
                                getVariation(selectVariation.value, response)
                            }
                            selectVariation.addEventListener('change', function () {
                                getVariation(this.value, response)

                                setTimeout(function () {
                                    var secondDropVariation = document.querySelector('#second_dropdown');
                                    if (secondDropVariation) {
                                        secondDropVariation.addEventListener('change', function () {
                                            getVariation(this.value, response)
                                        })
                                    }
                                }, 1000);
                            })
                        }
                    }).fail(function (jqXHR, status, errorThrown) {
                        var response = $.parseJSON(jqXHR.responseText);
                    });
                });
            }, 1000);
        }
    }
})(jQuery)

function getVariation(idVar, response) {
    if (idVar == response.Variant.id) {
        var changeContentColor = document.querySelector('.main-photo-content');
        var parent = document.querySelector('.photo-carrossel');
        changeContentColor.setAttribute('src', response.Variant.VariantImage[0].https)
        magnify(".main-photo-content", 2);

        document.querySelector('.photo-carrossel').classList.remove('slick-initialized', 'slick-slider')

        if (document.querySelector('.photo-carrossel .slick-list')) {
            document.querySelector('.photo-carrossel .slick-list').remove();
        }

        parent.innerHTML = ''
        response.Variant.VariantImage.forEach(element => {
            var imgContent = document.createElement('img');
            imgContent.setAttribute('src', element.thumbs[180].https);
            imgContent.setAttribute('data-full', element.https);
            imgContent.classList.add('change-photo', 'slick-slide');
            parent.append(imgContent)
        });

        setTimeout(function () {
            var photos = document.querySelectorAll('.change-photo.slick-slide');
            var contentPhoto = document.querySelector('.main-photo-content')
            photos.forEach(photo => {
                photo.addEventListener('click', function () {

                    var zoom = document.querySelector('.img-magnifier-glass');
                    var changeUrl = this.getAttribute('data-full')
                    contentPhoto.setAttribute('src', changeUrl)

                    if (zoom) {
                        document.querySelector('.img-magnifier-glass').remove();
                    }
                    magnify(".main-photo-content", 2);
                })
            });
        }, 1000);

        jQuery('.photo-carrossel').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            adaptiveHeight: true,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            },
            ]
        });
    }
}
setTimeout(function () {
    if(document.querySelector('.page-home')) {
        jQuery(document).ready(function () {
            document.getElementsByTagName("html")[0].getAttribute("data-store");
            var s = "busca_noticias.php?loja=" + document.getElementsByTagName("html")[0].getAttribute("data-store"),
                e = jQuery(".noticias-content");
            jQuery.ajax({
                url: s,
                type: "GET",
                async: !0,
                success: function (s) {
                    var t = s.replace(/src/g, 'class="lazy-notices" src');
                    e.html('<div class="noticias">' + jQuery(t).find(".noticias").html() + "</div>"),
                        e.find("li").wrapInner('<div class="box-noticia"></div>'),
                        e.find(".noticias li:nth-child(n+4)").remove()
                        if(document.querySelector('.noticias').textContent == "undefined") {
                            document.querySelector('.notices').style.display = 'none';
                        }
                },
            });
        });
    }
}, 100);
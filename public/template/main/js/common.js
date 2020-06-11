$(document).ready(function() {
    function formatPrice (number, decimals = 0, decPoint = '.', separator = ' ') {
          number = (number + '').replace(/[^0-9+\-Ee.]/g, '')
          let n = !isFinite(+number) ? 0 : +number
          let prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
          let sep = (typeof separator === 'undefined') ? ',' : separator
          let dec = (typeof decPoint === 'undefined') ? '.' : decPoint
          let s = ''
          let toFixedFix = function (n, prec) {
            let k = Math.pow(10, prec)
            return '' + (Math.round(n * k) / k)
              .toFixed(prec)
          }
          // Фиксим баг в IE parseFloat(0.55).toFixed(0) = 0;
          s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
            .split('.')
          if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
          }
          if ((s[1] || '')
            .length < prec) {
            s[1] = s[1] || ''
            s[1] += new Array(prec - s[1].length + 1)
              .join('0')
          }
          return s.join(dec)
    }
    
    $('.block-stem .stem-radio').eq(0).prop('checked', true);
    $('.flower-item .stem-radio').eq(0).prop('checked', true);
    var price = Number($('.block-stem .stem-radio').eq(0).parents('.item-inner__bottom').find('.pr').text());
    $('.price-write').find('span.bl').text(price);
    var kol = Number(35);
    var sum = Number(price*kol);
    $('.sum-0').find('span.price-sum').text(sum);
    $('.all-sum').find('.all-sum-price').text(sum);
    
    $('.block-pack .packaging-radio').eq(0).prop('checked', true);
    $('.stem-length-list input[type=radio]').eq(0).prop('checked', true);
    
    if (typeof $.fn.fancybox !== 'undefined') {
        $(".fancybox").fancybox();
    }

    if (typeof $.fn.waypoint !== 'undefined') {
        $(".block").waypoint(function(direction) {
            if (direction === "down") {
                $(".class").addClass("active");
            } else if (direction === "up") {
                $(".class").removeClass("deactive");
            };
        }, {offset: 100});
    }

    $("a.scroll").click(function() {
        $.scrollTo($(".div"), 800, {
            offset: -90
        });
    });

    $("#top").click(function () {
        $("body, html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    
    $("form#addToCart").submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "/ajax/addToCart.php",
            data: $("form#addToCart").serialize()
        }).done(function() {
            //alert("Спасибо");
            document.location = '/cart.html';
        });
        return false;
    }); 
    
    $("input[name='stemLength']").change(function() {
        var stem = $(this).val();
        $.ajax({
            type: "POST",
            url: "/ajax/changeList.php",
            data: { 
                stemId: stem, 
            },
        }).done(function(msg) {
            $('.block-stem .row').html(msg);
            $('.block-stem .stem-radio').eq(0).prop('checked', true);
            var price = Number($('.block-stem .stem-radio').eq(0).parents('.item-inner__bottom').find('.pr').text());
            $('.price-write').find('span.bl').text(price);
            var kol = Number(35);
            var sum = Number(price*kol);
            $('.sum-0').find('span.price-sum').text(sum);
            $('.all-sum').find('.all-sum-price').text(sum);
            
            $('.stem-radio').change(function() {
                var price = Number($(this).parents('.item-inner__bottom').find('.pr').text());
                $('.price-write').find('span.bl').text(price);
                var kol = Number($('#kol').val());
                var sum = Number(price*kol);
                $('.sum-0').find('span.price-sum').text(sum);
                $('.all-sum').find('.all-sum-price').text(sum);
                
                $('.block-pack-big .packaging-radio').each(function(i,elem) {
                    if ($(this).is(':checked')) {
                        var packPrice = Number($(this).parents('.block-pack').find('.pr').text());
                        var price = Number($('.price-sum').text());
                        var summAll = Number(packPrice + price);
                        $('.all-sum').find('.all-sum-price').text(summAll);
                    } 
                });
            });
        });
    });
    
    $('.icon-menu').on('click', function(){
        $('nav.menu-top').toggleClass('menu-open');
    });

    $( "#polzunok" ).slider({
        animate: "slow",
        range: "min",    
        value: 35,
        min: 1,
        max: 1001,
        step: 1,
        slide : function(event, ui) {    
            //$("#result-polzunok").text(ui.value); 
            $( "#kol" ).val(ui.value);
            $('.block-stem .stem-radio').each(function(i,elem) {
                if ($(this).is(':checked')) {
                    var priceL = Number($(this).parents('.item-inner__bottom').find('.pr').text());
                    var kolL = Number($('#kol').val());
                    var sumL = Number(priceL*kolL);
                    $('.sum-0').find('span.price-sum').text(sumL);
                    $('.all-sum').find('.all-sum-price').text(sumL);
                } 
            });
            $('.block-pack-big .packaging-radio').each(function(i,elem) {
                if ($(this).is(':checked')) {
                    var packPrice = Number($(this).parents('.block-pack').find('.pr').text());
                    var price = Number($('.price-sum').text());
                    var summAll = Number(packPrice + price);
                    $('.all-sum').find('.all-sum-price').text(summAll);
                } 
            });
            
        }
    });
    
    $( "#kol" ).val($( "#polzunok" ).slider( "value" )); 
    
    $('#kol').change(function() {
        $("#polzunok").slider("value", $('#kol').val());
        $('.block-stem .stem-radio').each(function(i,elem) {
            if ($(this).is(':checked')) {
                var priceL = Number($(this).parents('.item-inner__bottom').find('.pr').text());
                var kolL = Number($('#kol').val());
                var sumL = Number(priceL*kolL);
                $('.sum-0').find('span.price-sum').text(sumL);
                $('.all-sum').find('.all-sum-price').text(sumL);
            } 
        });
        $('.block-pack-big .packaging-radio').each(function(i,elem) {
            if ($(this).is(':checked')) {
                var packPrice = Number($(this).parents('.block-pack').find('.pr').text());
                var price = Number($('.price-sum').text());
                var summAll = Number(packPrice + price);
                $('.all-sum').find('.all-sum-price').text(summAll);
            } 
        });
    });
    
    $('.stem-radio').change(function() {
        var price = Number($(this).parents('.item-inner__bottom').find('.pr').text());
        $('.price-write').find('span.bl').text(price);
        var kol = Number($('#kol').val());
        var sum = Number(price*kol);
        $('.sum-0').find('span.price-sum').text(sum);
        $('.all-sum').find('.all-sum-price').text(sum);
        
        $('.block-pack-big .packaging-radio').each(function(i,elem) {
            if ($(this).is(':checked')) {
                var packPrice = Number($(this).parents('.block-pack').find('.pr').text());
                var price = Number($('.price-sum').text());
                var summAll = Number(packPrice + price);
                $('.all-sum').find('.all-sum-price').text(summAll);
            } 
        });
    });
    
    $('.item-inner').click(function() {
        //$('.stem-radio').prop('checked', false);
        $(this).parents('.item-big').siblings(".item-inner__bottom").find('.stem-radio').prop('checked', true);
    });

    $('.block-stem .item-inner').click(function() {    
        var price = Number($(this).parents('.item-big').siblings('.item-inner__bottom').find('.pr').text());
        $('.price-write').find('span.bl').text(price);
        var kol = Number($('#kol').val());
        var sum = Number(price*kol);
        $('.sum-0').find('span.price-sum').text(sum);
        $('.all-sum').find('.all-sum-price').text(sum);
        
        $('.block-pack .packaging-radio').each(function(i,elem) {
            if ($(this).is(':checked')) {
                var packPrice = Number($(this).parents('.block-pack').find('.pr').text());
                var price = Number($('.price-sum').text());
                var summAll = Number(packPrice + price);
                $('.all-sum').find('.all-sum-price').text(summAll);
            } 
        });
    });
    
    $('.id-s').find('.item').last().addClass('last-child');
    
    $('.item').click(function() {
        $(this).find('.class-pack-dop').prop('checked', true);
        $(this).parents('.shop_in').siblings('.item-inner__bottom').find('.packaging-radio').prop('checked', true);
    });
    
    $('.block-pack').hover(
        function() {
            $('.block-pack').find('.id-s').removeClass('open');
            $(this).find('.id-s').addClass('open');
        }, function() {
            $(this).find('.id-s').removeClass('open');
        }
    );
    
    $('.id-s .item').click(function() {
        $('.id-s .item').find('.wrap').removeClass('select');
        $('p.option').empty();
        $(this).find('.wrap').addClass('select');
        var titleOption = $(this).find('.wrap .field-content').text();
        $(this).parents('.block-pack').find('.item-inner__bottom .option').text(titleOption);
        $(this).parents('.id-s').removeClass('open');
        
        var packPrice = Number($(this).parents('.block-pack').find('.pr').text());
        var price = Number($('.price-sum').text());
        var summAll = Number(packPrice + price);
        $('.all-sum').find('.all-sum-price').text(summAll);
    });
    
    $('.block-pack-big').find('.id-s').eq(0).parents('.shop_in').remove();
    $('.block-pack-big').find('.block-pack').eq(0).find('.item-big').click(function() {
        $(this).siblings('.item-inner__bottom').find('.packaging-radio').prop('checked', true);
        $('.option').empty();
        
        var packPrice = Number($(this).parents('.block-pack').find('.pr').text());
        var price = Number($('.price-sum').text());
        var summAll = Number(packPrice + price);
        $('.all-sum').find('.all-sum-price').text(summAll);
    });
    
    $('.popup-content').magnificPopup({
        type: 'inline'

    });
    
    $('.popup-cart').magnificPopup({
        type: 'inline'

    });
    
    $('.popup-with-form').magnificPopup({
       type: 'inline',
       focus: '#name'
    });
    $('.popup-cart').magnificPopup({
           type: 'inline',
           focus: '#name'
        });
    $('.order-bouquet').magnificPopup({
        type: 'inline',
        focus: '#name'
    }); 
    
    miniShop2.Callbacks.Cart.add.response.success = function(response) {
        document.location = '/cart.html';
    }
        
    $('form#header-form').find('.input-text').change(function(){
        var vopros = $(this).val();
        $('form#form-vopros').find('#mess').val(vopros);
    });
        
    $('form#header-form').submit(function(e){
        e.preventDefault();
        $( '.popup-with-form').trigger('click');
        
        /*
        $.ajax({
            type: "POST",
            url: "/ajax/addToCart.php",
            data: $("form#addToCart").serialize()
        }).done(function() {
            alert("Спасибо");
            
        });*/
        return false;
    });
    
    $('form#form-order-bouquet').submit(function(e) {
        e.preventDefault();
        $('.msg-order').removeClass('success error').text();
        $.ajax({
            type: "POST",
            url: "/ajax/formOrderBouquet.php",
            data: $("form#form-order-bouquet").serialize(),
            dataType: 'json',
        }).done(function(msg) {
            console.log(msg);
            if(msg.OK) {
                $('.msg-order').addClass('success').text("Спасибо, Ваше сообщение отправлено!");
                $(':input','#form-order-bouquet')
                    .not(':button, :submit, :reset, :hidden')
                    .val('')
                    .removeAttr('checked')
                    .removeAttr('selected');
            }
            else {
                $('.msg-order').addClass('error').text(msg.ERROR);
            }
        });
    });
        
    $('form#form-vopros').submit(function(e){
        e.preventDefault();
        $('.msg').removeClass('success error').text();
        $.ajax({
            type: "POST",
            url: "/ajax/formQuestion.php",
            data: $("form#form-vopros").serialize(),
            dataType: 'json',
        }).done(function(msg) {
            console.log(msg);
            if(msg.OK) {
                $('.msg').addClass('success').text("Спасибо, Ваше сообщение отправлено!");
                $(':input','#form-vopros')
                    .not(':button, :submit, :reset, :hidden')
                    .val('')
                    .removeAttr('checked')
                    .removeAttr('selected');
            }
            else {
                $('.msg').addClass('error').text(msg.ERROR);
            }
        });
    });
        
    $('.btn-close').click(function(e) {
        e.preventDefault();
        var idItem = $(this).parents('.block-cart__item').attr('id');            
        $('form#msCartDelete').find('input[type="hidden"]').val(idItem);
        $('form#msCartDelete').trigger('submit');
    });
        
    $('#more-byket').click(function(e) {
        e.preventDefault();
        $(this).hide();
        $('.catalog-block').show();
    });
    
    // ---    
    // add postcard
    var $fullPrice = $('[data-full-price]');
    var startSum = parseInt($fullPrice.attr('data-full-price'), 10);
    
    function changeSum () {
        var sum = startSum;
        var $list = $('.product-full form [data-add-price]:checked');
        for (var i = 0; i < $list.length; i++) {
            var $item = $($list[i]);
            sum += parseInt($item.attr('data-add-price'), 10);
        }
        $fullPrice.text(formatPrice(sum));
    }
    
    $('[name="options[postcard][add]"]').on('change', function () {
        $('.postcards').slideToggle();
        changeSum();
    });
    // end add postcard
    // ---    
    
    // ---    
    // toggle
    $('[data-toggle="toggle"]').on('click', function (e) {
        var $target = $($(this).attr('data-target'));
        $target.slideToggle();
    });
    // end toggle
    // ---    
    
    // ---    
    // dropzone
    var $drop = $('.dropzone');
    $('body').on('drag', function (e) {
        e.preventDefault();
        return false;
    });
    if (typeof window.FileReader === 'undefined') {
        $drop.prepend($('<p />').css({
            color: 'red'
        }).text('Drag and Drop не поддерживается вашим браузером!'));
    } else {
        if ($drop.length) {
            var $input = $drop.find('[type="file"]');
            var addDragMask = function () {
                if (!$drop.hasClass('js-dragged')) {
                    $drop.attr({
                        'data-text': 'Отпустите файл в этой области'
                    }).addClass('js-dragged');
                }
                return false;
            };
            var removeDragMask = function () {
                if ($drop.hasClass('js-dragged')) {
                    $drop.attr({
                        'data-text': ''
                    }).removeClass('js-dragged');
                }
                return false;
            };
            var showInsertedImage = function (files) {
                for (var i = 0, file; file = files[i]; i++) {
                    var reader = new FileReader();
                    reader.onload = e => {
                        $drop.css({
                            backgroundImage: 'url('+ e.target.result +')'
                        });
                    };
                    reader.readAsDataURL(file);
                }
            }
            
            function handleFileSelect (evt) {
                evt.stopPropagation();
                evt.preventDefault();
                
                var files = evt.dataTransfer.files; // FileList object.
                
                showInsertedImage(files);
                
                $input[0].files = files;
                removeDragMask();
            }
            
            function handleDragOver (evt) {
                evt.stopPropagation();
                evt.preventDefault();
                evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
            }
            
            function handleDragEnter (evt) {
                addDragMask();
            }
            
            function handleDragLeave (evt) {
                removeDragMask();
            }
            
            // Setup the dnd listeners.
            $drop[0].addEventListener('dragover', handleDragOver, false);
            $drop[0].addEventListener('dragenter', handleDragEnter, false);
            $drop[0].addEventListener('dragleave', handleDragLeave, false);
            $drop[0].addEventListener('drop', handleFileSelect, false);
            
            $input.on('change', function (evt) {
                var files = evt.target.files;
                
                showInsertedImage(files);
            });
            
            $drop.closest('form').on('reset', function () {
                $drop.css({
                    backgroundImage: ''
                });
            })
        }
    }
    // end dropzone
    // ---    
    
    if (typeof $.fn.AjaxFeed !== 'undefined') {
        $('body').AjaxFeed({
            submitSelector: '[data-action] [type="submit"]',
            successMessage: false,
            success: function (response, $form) {
                if (typeof $.fn.magnificPopup !== 'undefined') {
                    $.magnificPopup.open({
                        items: {
                          src: '#modal-success'
                        },
                        type: 'inline'
                    });
                }
                
                // var action = $form.attr('data-action');
                // switch (action) {
                //     case 'af_add-buket':
                //         break;

                //     default:
                // }
            }
        });
    }
    
    if (typeof $.fn.countdown !== 'undefined') {
        $('[data-countdown]').countdown();
    }
});

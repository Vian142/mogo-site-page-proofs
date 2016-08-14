$(document).ready(function () {

    $('a').click(function (e) {
        e.preventDefault();
    });

    (function () {
        if ($('#accordeon1')) {
            console.log('найден');
            acordeonMain();
        } else {
            console.log('не найден')
        }

    })();



    function acordeonMain() {
        var accordeonList = $('#accordeon1').find('.accordeon-list'),
            accordeonItem = $(accordeonList).find('.accordeon-item'),
            accordeonTrigger = $(accordeonItem).find('.accordeon-trigger'),
            accordeonInner = $(accordeonList).find('.accordeon__inner');


        $(accordeonTrigger).click(function () {
            var $this = this;
            if ( $(this).hasClass('active') !==true ){
                $(this).siblings('.accordeon__inner').slideUp('300');
                $(this).toggleClass('active');
            } else {
                $(this).siblings('.accordeon__inner').slideDown('300');
                $(this).toggleClass('active');
            }
        });
    }
});
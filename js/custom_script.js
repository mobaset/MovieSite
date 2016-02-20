/**
 * Created by Mo on 2/20/2016.
 */

$(document).ready(function () {
    $('.hidden_div').hide();
    $('#overview').show();
    $('ul#div_selector > li').click(function () {
        $('li').each(function() {
            $(this).removeClass('active')
        });
        $(this).addClass('active');
        $('.hidden_div').hide();
        $($(this).find('a').attr('href')).slideDown('slow')
    })
});
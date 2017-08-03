$(function () {


$('#btn').click(function() {
    $('#video, #overlay').fadeIn('slow');
    $('#video').html('<iframe width=560 height=315 src=https://www.youtube.com/embed/OMOga8x6aLk frameborder=0 allowfullscreen></iframe>');
});

$(document).mouseup(function (e)
{
    if (!$('#video').is(e.target))
    {
        $('#video, #overlay').fadeOut('slow');
        $('#video').html('');
    }
});

$('#btn2').click(function() {
    alert('video is not visible');
});
});

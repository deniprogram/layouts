
$('.pgwMenu').pgwMenu();
$('a[data-goto]').click(function() { pgwjs.goTo($(this).attr('data-goto')); });


var pgwSlideshow = $('.pgwSlideshow').pgwSlideshow();

function reloadSlideshow() {
    var newConfig = {};

    var style = $('input[name="style"]:checked').val();
    if (style == 'light') { newConfig.mainClassName = 'pgwSlideshowLight'; }

    var listPosition = $('input[name="listPosition"]:checked').val();
    if (listPosition == 'none') { newConfig.displayList = false; } else { newConfig.listPosition = listPosition; }

    newConfig.transitionEffect = $('input[name="transitionEffect"]:checked').val();

    if ($('#displayList:checked').val() == 'true') {
                newConfig.displayList = true;
        } else {
        newConfig.displayList = false;
    }

    if ($('#displayControls:checked').val() == 'true') {
        newConfig.displayControls = true;
    } else {
        newConfig.displayControls = false;
    }

    if ($('#maxHeight:checked').val() == 'true') {
                newConfig.maxHeight = 450;
        }

    pgwSlideshow.reload(newConfig);
}

$('.slideshowConfig input').bind('change', function() {
    reloadSlideshow()
});


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-3998345-8', 'pgwjs.com');
ga('send', 'pageview');
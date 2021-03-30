$(document).ready(function() {
    $(".loading").slideUp('slow',function () {
        $(".loading").remove()
    });
    $(".project").mouseenter(function () {
        $(this).children(".overlay").show('slow')
    })
    $(".project").mouseleave(function () {
        $(this).children(".overlay").hide('slow')
    })


});
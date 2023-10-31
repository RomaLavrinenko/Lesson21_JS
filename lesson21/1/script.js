$('.black-block').animate({
    height : '338px',

},60000).fadeIn(1000,function(){
    $('.tt').text('1');
}).animate({
    height : 0,

},60000).fadeIn(1000,function(){
    $('.tt').text('0');
})

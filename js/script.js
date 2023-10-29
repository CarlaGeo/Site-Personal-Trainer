
function clickMenu(){
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    }else
    itens.style.display = 'block'
}

function mudouTamanho(){
    if(window.innerWidth >=768){
        itens.style.display = 'block'

        
    }else{
        itens.style.display = 'none'
       
    }
}

$('.carousel-item', '.carousel-multiple').each(function(){
    var next = $(this).next();
    if (! next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
}).each(function(){
    var prev = $(this).prev();
    if (! prev.length) {
        prev = $(this).siblings(':last');
    }
    prev.children(':nth-last-child(2)').clone().prependTo($(this));
});

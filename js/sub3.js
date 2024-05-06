const tab = $('.tab-list li');
let tabCont = $('.tab-cont>div');

tab.click(function(e){
    e.preventDefault();
    let tg = $(this);
    let i = tg.index();

    tab.removeClass('active');
    tg.addClass('active');

    // tabCont.css('display','none');
    // tabCont.eq(i).css('display','block');
});
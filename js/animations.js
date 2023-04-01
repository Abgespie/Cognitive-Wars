function hideItem(item) {
    if(item.style['transition'] != 'all 0.6s ease')
        item.style['transition'] = 'all 0.6s ease';
    item.classList.add('block-hidden');
    setTimeout(() => {  item.classList.add('block-disabled'); }, 600);
}
function showItem(item) {
    setTimeout(() => { 
        if(item.style['transition'] != 'all 0.6s ease')
        item.style['transition'] = 'all 0.6s ease';
        item.classList.remove('block-disabled');
        setTimeout(() => {  item.classList.remove('block-hidden'); }, 100);
    }, 600);
}
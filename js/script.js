function startg() {
    hideItem(document.getElementsByClassName('start')[0]);
    showItem(document.getElementsByClassName('main')[0]);
}
function tovideos() {
    if(document.getElementsByClassName('main')[0].classList.contains('block-hidden')) {
        hideItem(document.getElementsByClassName('test')[0]);
        showItem(document.getElementsByClassName('videos')[0]);
    }
    else {
        hideItem(document.getElementsByClassName('main')[0]);
        showItem(document.getElementsByClassName('videos')[0]);
    }
    
}
function totest() {
    if(document.getElementsByClassName('main')[0].classList.contains('block-hidden')) {
        hideItem(document.getElementsByClassName('videos')[0]);
        showItem(document.getElementsByClassName('test')[0]);
    }
    else {
        hideItem(document.getElementsByClassName('main')[0]);
        showItem(document.getElementsByClassName('test')[0]);
    }
}
function tomain() {
    if(document.getElementsByClassName('test')[0].classList.contains('block-hidden')) {
        hideItem(document.getElementsByClassName('videos')[0]);
        showItem(document.getElementsByClassName('main')[0]);
        console.log(document.getElementsByClassName('test')[0].classList.contains('block-hidden'));
    }
    else {
        hideItem(document.getElementsByClassName('test')[0]);
        showItem(document.getElementsByClassName('main')[0]);
        console.log(document.getElementsByClassName('test')[0].classList.contains('block-hidden'));
    }
}
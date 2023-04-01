//toggle functions

var prev = 1;

function start() {
    console.log(prev);
    switch(prev) {
        case 1:
            hideItem(document.getElementsByClassName('start')[0]);
            showItem(document.getElementsByClassName('main')[0]);
            showItem(document.getElementsByClassName('exit')[0]);
            break;
        case 2:
            hideItem(document.getElementsByClassName('start')[0]);
            showItem(document.getElementsByClassName('videos')[0]);
            showItem(document.getElementsByClassName('exit')[0]);
            break;
        case 3:
            hideItem(document.getElementsByClassName('start')[0]);
            showItem(document.getElementsByClassName('test')[0]);
            showItem(document.getElementsByClassName('exit')[0]);
            break;
    }
    
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
    }
    else {
        hideItem(document.getElementsByClassName('test')[0]);
        showItem(document.getElementsByClassName('main')[0]);
    }
}
function tostart() {
    if(document.getElementsByClassName('videos')[0].classList.contains('block-hidden') && document.getElementsByClassName('main')[0].classList.contains('block-hidden')) {
        hideItem(document.getElementsByClassName('test')[0]);
        hideItem(document.getElementsByClassName('exit')[0]);
        showItem(document.getElementsByClassName('start')[0]);
        prev = 3;
    }
    else {
        if(document.getElementsByClassName('test')[0].classList.contains('block-hidden') && document.getElementsByClassName('videos')[0].classList.contains('block-hidden')) {
            hideItem(document.getElementsByClassName('main')[0]);
            hideItem(document.getElementsByClassName('exit')[0]);
            showItem(document.getElementsByClassName('start')[0]);
            prev = 1;
        }
        else {
            hideItem(document.getElementsByClassName('videos')[0]);
            hideItem(document.getElementsByClassName('exit')[0]);
            showItem(document.getElementsByClassName('start')[0]);
            prev = 2;
        }
    }
}
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
    setTimeout(() => {  
        if(ob1.classList.contains('block-disabled')) {
        ob1.classList.remove('block-disabled');
        ob2.classList.remove('block-disabled');
        ob3.classList.remove('block-disabled');
        ob4.classList.remove('block-disabled');
        ob5.classList.remove('block-disabled');
        ob6.classList.remove('block-disabled');
        ob7.classList.remove('block-disabled');
        ob8.classList.remove('block-disabled');
        ob9.classList.remove('block-disabled');
        }
    }, 750);
    
}
function tovideos() {
    ob1.classList.add('block-disabled');
    ob2.classList.add('block-disabled');
    ob3.classList.add('block-disabled');
    ob4.classList.add('block-disabled');
    ob5.classList.add('block-disabled');
    ob6.classList.add('block-disabled');
    ob7.classList.add('block-disabled');
    ob8.classList.add('block-disabled');
    ob9.classList.add('block-disabled');
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
    ob1.classList.add('block-disabled');
    ob2.classList.add('block-disabled');
    ob3.classList.add('block-disabled');
    ob4.classList.add('block-disabled');
    ob5.classList.add('block-disabled');
    ob6.classList.add('block-disabled');
    ob7.classList.add('block-disabled');
    ob8.classList.add('block-disabled');
    ob9.classList.add('block-disabled');
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
    setTimeout(() => {  
        if(ob1.classList.contains('block-disabled')) {
        ob1.classList.remove('block-disabled');
        ob2.classList.remove('block-disabled');
        ob3.classList.remove('block-disabled');
        ob4.classList.remove('block-disabled');
        ob5.classList.remove('block-disabled');
        ob6.classList.remove('block-disabled');
        ob7.classList.remove('block-disabled');
        ob8.classList.remove('block-disabled');
        ob9.classList.remove('block-disabled');
        }
    }, 750);
}
function tostart() {
    ob1.classList.add('block-disabled');
    ob2.classList.add('block-disabled');
    ob3.classList.add('block-disabled');
    ob4.classList.add('block-disabled');
    ob5.classList.add('block-disabled');
    ob6.classList.add('block-disabled');
    ob7.classList.add('block-disabled');
    ob8.classList.add('block-disabled');
    ob9.classList.add('block-disabled');
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

//game

function togame() {
    hideItem(document.getElementsByClassName('main-game')[0]);
    showItem(document.getElementsByClassName('main-inter')[0]);
    setTimeout(() => {  
        if(ob1.classList.contains('block-disabled')) {
        ob1.classList.remove('block-disabled');
        ob2.classList.remove('block-disabled');
        ob3.classList.remove('block-disabled');
        ob4.classList.remove('block-disabled');
        ob5.classList.remove('block-disabled');
        ob6.classList.remove('block-disabled');
        ob7.classList.remove('block-disabled');
        ob8.classList.remove('block-disabled');
        ob9.classList.remove('block-disabled');
        }
    }, 750);
}
function todesc() {
    ob1.classList.add('block-disabled');
    ob2.classList.add('block-disabled');
    ob3.classList.add('block-disabled');
    ob4.classList.add('block-disabled');
    ob5.classList.add('block-disabled');
    ob6.classList.add('block-disabled');
    ob7.classList.add('block-disabled');
    ob8.classList.add('block-disabled');
    ob9.classList.add('block-disabled');
    hideItem(document.getElementsByClassName('main-inter')[0]);
    showItem(document.getElementsByClassName('main-game')[0]);
    
}
function togame2() {
    hideItem(document.getElementsByClassName('main-game--2')[0]);
    showItem(document.getElementsByClassName('main-inter--2')[0]);
}
function todesc2() {
    hideItem(document.getElementsByClassName('main-inter--2')[0]);
    showItem(document.getElementsByClassName('main-game--2')[0]);
    
}
function togame3() {
    hideItem(document.getElementsByClassName('main-game--3')[0]);
    showItem(document.getElementsByClassName('main-inter--3')[0]);
}
function todesc3() {
    hideItem(document.getElementsByClassName('main-inter--3')[0]);
    showItem(document.getElementsByClassName('main-game--3')[0]);
    
}

// var ob1 = document.getElementById
var ob1 = document.getElementById('object--1');
var ob2 = document.getElementById('object--2');
var ob3 = document.getElementById('object--3');
var ob4 = document.getElementById('object--4');
var ob5 = document.getElementById('object--5');
var ob6 = document.getElementById('object--6');
var ob7 = document.getElementById('object--7');
var ob8 = document.getElementById('object--8');
var ob9 = document.getElementById('object--9');
var box1 = document.getElementsByClassName('can--1')[0];
var box2 = document.getElementsByClassName('can--2')[0];
var box3 = document.getElementsByClassName('can--3')[0];
var cmpl = 9;
doright = function(el1, el2) {
    el1.offsetBottom = el1.offsetTop + el1.offsetHeight;
    el1.offsetRight = el1.offsetLeft + el1.offsetWidth;
    el2.offsetBottom = el2.offsetTop + el2.offsetHeight;
    el2.offsetRight = el2.offsetLeft + el2.offsetWidth;

    return !((el1.offsetBottom < el2.offsetTop) ||
            (el1.offsetTop > el2.offsetBottom) ||
            (el1.offsetRight < el2.offsetLeft) ||
            (el1.offsetLeft > el2.offsetRight))
};


ob1.onmousedown = function(e) {

    var coords = getCoords(ob1);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;
    var sx = 0;
    var sy = 0;
    
    ob1.style.position = 'absolute';
    document.body.appendChild(ob1);
    moveAt(e);
    
    ob1.style.zIndex = 1000; // над другими элементами
    
    function moveAt(e) {
        sx += shiftX;
        sy += shiftY;
        ob1.style.left = e.pageX - shiftX + 'px';
        ob1.style.top = e.pageY - shiftY + 'px';
    }
    
    document.onmousemove = function(e) {
        moveAt(e);
    };
    
    ob1.onmouseup = function() {
        document.onmousemove = null;
        ob1.onmouseup = null;
        if(doright(ob1, box2)) {
            ob1.classList.add('block-hidden');
            box2.classList.add('can--right');
            setTimeout(() => {  ob1.remove(); box2.classList.remove('can--right');}, 600);
            cmpl++;
        }
    };
    
    }
    
ob1.ondragstart = function() {
    return false;
};
ob2.onmousedown = function(e) {

    var coords = getCoords(ob2);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;
    
    ob2.style.position = 'absolute';
    document.body.appendChild(ob2);
    moveAt(e);
    
    ob2.style.zIndex = 1000; // над другими элементами
    
    function moveAt(e) {
        ob2.style.left = e.pageX - shiftX + 'px';
        ob2.style.top = e.pageY - shiftY + 'px';
    }
    
    document.onmousemove = function(e) {
        moveAt(e);
    };
    
    ob2.onmouseup = function() {
        document.onmousemove = null;
        ob2.onmouseup = null;
        if(doright(ob2, box1)) {
            ob2.classList.add('block-hidden');
            box1.classList.add('can--right');
            setTimeout(() => {  ob2.remove(); box1.classList.remove('can--right');}, 600);
            cmpl++;
        }
    };
    
    }
    
ob2.ondragstart = function() {
    return false;
};
ob3.onmousedown = function(e) {

    var coords = getCoords(ob3);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;
    
    ob3.style.position = 'absolute';
    document.body.appendChild(ob3);
    moveAt(e);
    
    ob3.style.zIndex = 1000; // над другими элементами
    
    function moveAt(e) {
        ob3.style.left = e.pageX - shiftX + 'px';
        ob3.style.top = e.pageY - shiftY + 'px';
    }
    
    document.onmousemove = function(e) {
        moveAt(e);
    };
    
    ob3.onmouseup = function() {
        document.onmousemove = null;
        ob3.onmouseup = null;
        if(doright(ob3, box1)) {
            ob3.classList.add('block-hidden');
            box1.classList.add('can--right');
            setTimeout(() => {  ob3.remove(); box1.classList.remove('can--right');}, 600);
            cmpl++
        }
    };
    
    }
    
ob3.ondragstart = function() {
    return false;
};
ob4.onmousedown = function(e) {

    var coords = getCoords(ob4);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;
    
    ob4.style.position = 'absolute';
    document.body.appendChild(ob4);
    moveAt(e);
    
    ob4.style.zIndex = 1000; // над другими элементами
    
    function moveAt(e) {
        ob4.style.left = e.pageX - shiftX + 'px';
        ob4.style.top = e.pageY - shiftY + 'px';
    }
    
    document.onmousemove = function(e) {
        moveAt(e);
    };
    
    ob4.onmouseup = function() {
        document.onmousemove = null;
        ob4.onmouseup = null;
        if(doright(ob4, box1)) {
            ob4.classList.add('block-hidden');
            box1.classList.add('can--right');
            setTimeout(() => {  ob4.remove(); box1.classList.remove('can--right');}, 600);
            cmpl++;
        }
    };
    
    }
    
ob4.ondragstart = function() {
    return false;
};
ob5.onmousedown = function(e) {

    var coords = getCoords(ob5);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;
    
    ob5.style.position = 'absolute';
    document.body.appendChild(ob5);
    moveAt(e);
    
    ob5.style.zIndex = 1000; // над другими элементами
    
    function moveAt(e) {
        ob5.style.left = e.pageX - shiftX + 'px';
        ob5.style.top = e.pageY - shiftY + 'px';
    }
    
    document.onmousemove = function(e) {
        moveAt(e);
    };
    
    ob5.onmouseup = function() {
        document.onmousemove = null;
        ob5.onmouseup = null;
        if(doright(ob5, box2)) {
            ob5.classList.add('block-hidden');
            box2.classList.add('can--right');
            setTimeout(() => {  ob5.remove(); box2.classList.remove('can--right');}, 600);
            cmpl++;
        }
    };
    
    }
    
ob5.ondragstart = function() {
    return false;
};
ob6.onmousedown = function(e) {

    var coords = getCoords(ob6);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;
    
    ob6.style.position = 'absolute';
    document.body.appendChild(ob6);
    moveAt(e);
    
    ob6.style.zIndex = 1000; // над другими элементами
    
    function moveAt(e) {
        ob6.style.left = e.pageX - shiftX + 'px';
        ob6.style.top = e.pageY - shiftY + 'px';
    }
    
    document.onmousemove = function(e) {
        moveAt(e);
    };
    
    ob6.onmouseup = function() {
        document.onmousemove = null;
        ob6.onmouseup = null;
        if(doright(ob6, box2)) {
            ob6.classList.add('block-hidden');
            box2.classList.add('can--right');
            setTimeout(() => {  ob6.remove(); box2.classList.remove('can--right');}, 600);
            cmpl++;
        }
    };
    
    }
    
ob6.ondragstart = function() {
    return false;
};
ob7.onmousedown = function(e) {

    var coords = getCoords(ob7);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;
    
    ob7.style.position = 'absolute';
    document.body.appendChild(ob7);
    moveAt(e);
    
    ob7.style.zIndex = 1000; // над другими элементами
    
    function moveAt(e) {
        ob7.style.left = e.pageX - shiftX + 'px';
        ob7.style.top = e.pageY - shiftY + 'px';
    }
    
    document.onmousemove = function(e) {
        moveAt(e);
    };
    
    ob7.onmouseup = function() {
        document.onmousemove = null;
        ob7.onmouseup = null;
        if(doright(ob7, box3)) {
            ob7.classList.add('block-hidden');
            box3.classList.add('can--right');
            setTimeout(() => {  ob7.remove(); box3.classList.remove('can--right');}, 600);
            cmpl++;
        }
    };
    
    }
    
ob7.ondragstart = function() {
    return false;
};
ob9.onmousedown = function(e) {

    var coords = getCoords(ob9);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;
    
    ob9.style.position = 'absolute';
    document.body.appendChild(ob9);
    moveAt(e);
    
    ob9.style.zIndex = 1000; // над другими элементами
    
    function moveAt(e) {
        ob9.style.left = e.pageX - shiftX + 'px';
        ob9.style.top = e.pageY - shiftY + 'px';
    }
    
    document.onmousemove = function(e) {
        moveAt(e);
    };
    
    ob9.onmouseup = function() {
        document.onmousemove = null;
        ob9.onmouseup = null;
        if(doright(ob9, box3)) {
            ob9.classList.add('block-hidden');
            box3.classList.add('can--right');
            setTimeout(() => {  ob9.remove(); box3.classList.remove('can--right');}, 600);
            cmpl++;
        }
    };
    
    }
    
ob9.ondragstart = function() {
    return false;
};
ob8.onmousedown = function(e) {

    var coords = getCoords(ob8);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;
    
    ob8.style.position = 'absolute';
    document.body.appendChild(ob8);
    moveAt(e);
    
    ob8.style.zIndex = 1000; // над другими элементами
    
    function moveAt(e) {
        ob8.style.left = e.pageX - shiftX + 'px';
        ob8.style.top = e.pageY - shiftY + 'px';
    }
    
    document.onmousemove = function(e) {
        moveAt(e);
    };
    
    ob8.onmouseup = function() {
        document.onmousemove = null;
        ob8.onmouseup = null;
        if(doright(ob8, box3)) {
            ob8.classList.add('block-hidden');
            box3.classList.add('can--right');
            setTimeout(() => {  ob8.remove(); box3.classList.remove('can--right');}, 600);
            cmpl++;
        }
    };
    
    }
    
ob8.ondragstart = function() {
    return false;
};

function getCoords(elem) {   // кроме IE8-
    var box = elem.getBoundingClientRect();
    return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
    };
}
var main1 = setInterval(() => {  
    if(cmpl == 9) {
        hideItem(document.getElementsByClassName('main--1')[0]);
        showItem(document.getElementsByClassName('main--2')[0]);
        clearInterval(main1);
    }
}, 1000);

// inter 2

var cntint2 = 7;
var int2but1 = document.getElementsByClassName('2--button--1')[0];
var int2but2 = document.getElementsByClassName('2--button--2')[0];
var curit = document.getElementsByClassName('main-inter--2-objects--object');

function intb2_1() {
    if(cntint2 % 2 == 0) {
        int2but1.classList.add('main-inter--2-button--right');
        hideItem(curit[cntint2 - 1]);
        showItem(curit[cntint2]);
        cntint2++;
        setTimeout(() => {  
            int2but1.classList.remove('main-inter--2-button--right');
        }, 1000);
    }
    else {
        int2but1.classList.add('main-inter--2-button--wrong');
        setTimeout(() => {  
            int2but1.classList.remove('main-inter--2-button--wrong');
        }, 2000);
    }
}
function intb2_2() {
    if(cntint2 % 2 != 0) {
        int2but2.classList.add('main-inter--2-button--right');
        hideItem(curit[cntint2 - 1]);
        showItem(curit[cntint2]);
        cntint2++;
        setTimeout(() => {  
            int2but2.classList.remove('main-inter--2-button--right');
        }, 1000);
    }
    else {
        int2but2.classList.add('main-inter--2-button--wrong');
        setTimeout(() => {  
            int2but2.classList.remove('main-inter--2-button--wrong');
        }, 2000);
    }
}

var main2 = setInterval(() => {  
    if(cntint2 == 7) {
        hideItem(document.getElementsByClassName('main--2')[0]);
        showItem(document.getElementsByClassName('main--3')[0]);
        clearInterval(main2);
    }
}, 1000);

//inter 3

var cntint3 = 7;
var int3but1 = document.getElementsByClassName('3--button--1')[0];
var int3but2 = document.getElementsByClassName('3--button--2')[0];
var curit = document.getElementsByClassName('main-inter--3-objects--object');

function intb3_1() {
    if(cntint3 % 2 != 0) {
        int3but1.classList.add('main-inter--2-button--right');
        hideItem(curit[cntint3 - 1]);
        showItem(curit[cntint3]);
        cntint3++;
        setTimeout(() => {  
            int3but1.classList.remove('main-inter--2-button--right');
        }, 1000);
    }
    else {
        int3but1.classList.add('main-inter--2-button--wrong');
        setTimeout(() => {  
            int3but1.classList.remove('main-inter--2-button--wrong');
        }, 2000);
    }
}
function intb3_2() {
    if(cntint3 % 2 == 0) {
        int3but2.classList.add('main-inter--2-button--right');
        hideItem(curit[cntint3 - 1]);
        showItem(curit[cntint3]);
        cntint3++;
        setTimeout(() => {  
            int3but2.classList.remove('main-inter--2-button--right');
        }, 1000);
    }
    else {
        int3but2.classList.add('main-inter--2-button--wrong');
        setTimeout(() => {  
            int3but2.classList.remove('main-inter--2-button--wrong');
        }, 2000);
    }
}

var main3 = setInterval(() => {  
    if(cntint3 == 7) {
        hideItem(document.getElementsByClassName('main--3')[0]);
        showItem(document.getElementsByClassName('main--4')[0]);
        clearInterval(main3);
    }
}, 1000);
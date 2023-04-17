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

//game

function togame() {
    hideItem(document.getElementsByClassName('main-game')[0]);
    showItem(document.getElementsByClassName('main-inter')[0]);
}
function todesc() {
    hideItem(document.getElementsByClassName('main-inter')[0]);
    showItem(document.getElementsByClassName('main-game')[0]);
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

ob1.onmousedown = function(e) {

    var coords = getCoords(ob1);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;
    
    ob1.style.position = 'absolute';
    document.body.appendChild(ob1);
    moveAt(e);
    
    ob1.style.zIndex = 1000; // над другими элементами
    
    function moveAt(e) {
        ob1.style.left = e.pageX - shiftX + 'px';
        ob1.style.top = e.pageY - shiftY + 'px';
    }
    
    document.onmousemove = function(e) {
        moveAt(e);
    };
    
    ob1.onmouseup = function() {
        document.onmousemove = null;
        ob1.onmouseup = null;
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
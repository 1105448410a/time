var arrowTop = document.getElementById("arrowTop");
var arrowBottom = document.getElementById("arrowBottom");
var content = document.getElementById("content");
var center = document.getElementById("center")
var timeTop;
var timeBottom;

arrowTop.onmousemove = function(){
    clearInterval(timeTop);
    timeTop=setInterval(function(){
        content.style.top=content.offsetTop-17+"px";
    },10);
}
arrowTop.onmouseleave = function(){
    clearInterval(timeTop);
}
arrowBottom.onmouseenter = function(){
    clearInterval(timeBottom);
    timeBottom=setInterval(function(){
            content.style.top=content.offsetTop-23+"px";
    },10);
}
arrowBottom.onmouseleave = function(){
    clearInterval(timeBottom);
}
setInterval(function(){
    if(content.offsetTop>0){
        clearInterval(timeTop);
    }
    if(content.offsetTop<-10200){
        clearInterval(timeBottom);
    }
},10);

center.onmousewheel = function(event){
    event = event || window.event;
    
    if(event.wheelDelta>0){
        if(content.offsetTop<20){
            content.style.top=content.offsetTop+80+"px";
        }
    }else{
        if(content.offsetTop>-10200){
            content.style.top=content.offsetTop-80+"px";
        }
    }

    //当滚轮滚动时，当浏览器有滚动条时，浏览器会随之滚动，这是可取消的默认行为
    return false;
}
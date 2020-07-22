window.addEventListener("DOMContentLoaded",function(){
    var middleBox=document.querySelector(".middel-box");
    var smallBox=document.querySelector(".small-box");
    var bigBox=document.querySelector(".big-box");
    var smallList=smallBox.children;
    var middelImg=middleBox.firstElementChild;
    var bigImg=bigBox.firstElementChild;
    console.log(smallList);

    for(let i=0;i<smallList.length;i++){
        smallList[i].onmouseover=function(){
            for(var j=0;j<smallList.length;j++){
                smallList[j].style.border="2px solid #fff";
                
            }
            this.style.border="2px solid #000";
            middelImg.src="img/m"+(i+1)+".png";
            bigImg.src="img/b"+(i+1)+".png";
        }
    }

    middleBox.onmouseover=function(){
        bigBox.style.display="block";
    }
    middleBox.onmouseout=function(){
        bigBox.style.display="none";
    }
    middleBox.onmousemove=function(ev){
        var ox=ev.offsetX;
        var oy=ev.offsetY;
        var bilix=(bigImg.offsetWidth-bigBox.offsetWidth)/middelImg.offsetWidth;
        var biliy=(bigImg.offsetHeight-bigBox.offsetHeight)/middelImg.offsetHeight;
        bigImg.style.marginLeft=-ox*bilix+"px";
        bigImg.style.marginTop=-oy*biliy+"px";
    }
})
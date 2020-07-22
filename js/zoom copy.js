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

    var mask=document.querySelector(".mask");
    var copy=document.querySelector(".copy");
    copy.onmouseover=function(){
        bigBox.style.display="block";
        mask.style.display="block"
    }
    copy.onmouseout=function(){
        bigBox.style.display="none";
        mask.style.display="none";
    }
    copy.onmousemove=function(ev){
        var ox=ev.offsetX;
        var oy=ev.offsetY;

        var x=ox-mask.offsetWidth/2;
        var y=oy-mask.offsetHeight/2;

        if(x<0){
            x=0;
        }
        if(y<0){
            y=0;
        }
        if(x>middleBox.offsetWidth-mask.offsetWidth){
            x=middleBox.offsetWidth-mask.offsetWidth;
        }
        if(y>middleBox.offsetHeight-mask.offsetHeight){
            y=middleBox.offsetHeight-mask.offsetHeight;
        }

        mask.style.left=x+"px";
        mask.style.top=y+"px";
        bigImg.style.marginLeft=-x*2+"px";
        bigImg.style.marginTop=-y*2+"px";
    }


    //解决事件流问题，自己写函数
    // var mask=document.querySelector(".mask");
    // hover(middleBox,function(){
    //     bigBox.style.display="block";
    //      mask.style.display="block";
    //      console.log("over");
    // },function(){
    //     bigBox.style.display="none";
    //     mask.style.display="none";
    //     console.log("out");
    // })
    function hover(obj,overfn,outfn){
        obj.onmouseover=function(ev){
            if(check(ev,obj)){
                if(overfn){
                    overfn();
                }
            }
        }
        obj.onmouseout=function(ev){
            if(check(ev,obj)){
                if(outfn){
                    outfn();
                }
            }
        }

    }
    function check(ev,obj){
        if(ev.type=="mouseover"){
            return (!obj.contains(ev.fromElement));
        }else if(ev.type=="mouseout"){
            return  (!obj.contains(ev.toElement));
        }
    }
})
window.onload = function(){
   
    (
        function(){
            setTimeout(function(){
               document.body.style.visibility = "visible"
            },1);
        }
    )();
        
    

    var zhang = document.getElementById("zhang")
    var cui = document.getElementById("cui")
    zhang.onclick = function(){
        alert("QQ:1105448410，微信:a151378429315")
    }
    cui.onclick = function(){
        alert("你在想屁吃，我才不告诉你")    
    }
    var audio = document.getElementById('music1');
    var a = document.body.clientWidth;
    var load=document.getElementById("load")
    var love=document.getElementById("love")

    var bottom =document.getElementById("bottom")
    //首次载入网页定制布局
    bottom.style.width = document.body.clientWidth + "px";
    load.style.width = document.body.clientWidth + "px";
    love.style.marginLeft = ((a-550)/2 +"px");

    let timer1 = setInterval(() => {
        //时刻监控页面整体是否缩放，进行重新布局
        bottom.style.width = document.body.clientWidth + "px";
        load.style.width = document.body.clientWidth + "px";
        load.style.height = 1800 + "px"; 
    }, 1);


    //页面载入 点击之后进入网页 同时播放背景音乐
    (
        function(){
            setTimeout(function(){
                love.style.animationPlayState="paused"
                load.style.animationPlayState="paused"
            },1500);

            load.onclick = function(){
                love.style.animationPlayState="running"
                load.style.animationPlayState="running"
                setTimeout(function(){
                    love.style.display="none";
                    load.style.display="none";
                },700)
                audio.play();
                bottom.style.display="block"
            }
           
        }
    )();
    
    


    window.onclick = function(e){
        //定义一个数组存储需要的颜色
        let arr = ["red", "yellow", "green", "pink", "blue", "purple", "orangered"];

        //在数组中随机产生一个颜色
        let heartNum = Math.floor(Math.random()*arr.length);

        //定义鼠标单击产生的div
        let div = document.createElement("div");

        //调用矢量库中的CSS，将div变成爱心形状，并为其染色
        div.setAttribute("class","iconfont iconzan div-box");
        div.style.color = arr[heartNum];
        document.body.appendChild(div);

        //获取鼠标的xy轴位置
        //剪去自身宽高一半原因是控制爱心从鼠标中心飞出
        let x =e.pageX - div.offsetLeft / 2;
        let y =e.pageY - div.offsetHeight /2;
        div.style.left = x+"px";
        div.style.top = y +"px";

        //获得0-1的整数
        let num = Math.round(Math.random());
        let timer = setInterval(() => {
            y -= 10;
            if (num === 0) x -= 10;
            else x += 10;
            div.style.left = x + "px";
            div.style.top = y + "px";
            //如果超出屏幕可视范围，则删除此节点
            if (y < -document.body.offsetHeight) {
            clearInterval(timer);
            div.remove();
            }
            if (x > document.body.offsetWidth-40) {
            clearInterval(timer);
            div.remove();
            }
        }, 100);
    }

  
   

}
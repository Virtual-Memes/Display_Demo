        var Width=new Array();
        var Url=new Array();
        var ExchangeT=10000;
        var count=1;
        var Max=8;
        Width[0]="1920px";
        Url[0]="url(ex1.gif)"

        Width[1]="1856px";
        Url[1]="url(ex2.gif)"

        Width[2]="1800px";
        Url[2]="url(ex3.gif)"

        Width[3]="1875px";
        Url[3]="url(ex4.gif)"

        Width[4]="1800px";
        Url[4]="url(ex5.gif)";

        Width[5]="1920px";
        Url[5]="url(ex6.gif)"

        Width[6]="1875px";
        Url[6]="url(ex7.gif)";

        Width[7]="1920px";
        Url[7]="url(ex8.gif)";
        $(document).ready(function(){
            setInterval(Time,ExchangeT);
            time();
            setInterval(time,1000);
        })
        function Time(){
            $("#Cover").animate({opacity:"1"},1500,function(){
                $("#bg").css("background-image",Url[count]);
                $("#bg").css("backgroundSize",Width[count]);
            });
            $("#Cover").animate({opacity:"0"},1500);
            count++;
            if(count>=Max){
                count=0;
            }
        }
        function time() {
            var mydate = new Date();
            var year=mydate.getFullYear();
            var month=mydate.getMonth();
            var date=mydate.getDate();
            var day=mydate.getDay();
            var hour=mydate.getHours();
            var minute=mydate.getMinutes();
            var second=mydate.getSeconds();
            var Week = ['日','一','二','三','四','五','六'];
            if(second<10){
                second="0"+second;
            }
            if(hour<10){
                hour="0"+hour;
            }
            if(minute<10){
                minute="0"+minute;
            }
            var FullT=year+"年"+month+"月"+date+"日"+"     "+"星期"+Week[day]+"     "+hour+":"+minute+":"+second;
            $("#Time").text(FullT);
        }
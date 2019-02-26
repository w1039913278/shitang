function ntx(ny){
    let a1=0;
    let a2=0;
    let a3=0;
    let a4=0;
    let a5 = 5;
    let pic = [];
    let pic1 = [];
    // console.log(ny);
    for(let j=0;j<json_movie_prices.years[0].mouths.length;j++){
                if(ny == json_movie_prices.years[0].mouths[j].mouth){
                for(let k=0;k<json_movie_prices.years[0].mouths[j].weeks.length;k++){
                    for(let l=0;l<json_movie_prices.years[0].mouths[j].weeks[k].days.length;l++){
                        a1=json_movie_prices.years[0].mouths[j].weeks[k].days[l].sell[0].meuns[0].sell_money;
                        a2=json_movie_prices.years[0].mouths[j].weeks[k].days[l].sell[0].meuns[1].sell_money;
                        a3=json_movie_prices.years[0].mouths[j].weeks[k].days[l].sell[0].meuns[2].sell_money;
                        a4=json_movie_prices.years[0].mouths[j].weeks[k].days[l].sell[0].meuns[3].sell_money;
                        a5 = a1+a2+a3+a4;
                        pic.push(a5);
                    }
                }
            }
        }
    for (let i = 0;i<pic.length;i++){
        pic1.push(pic[i]-Math.floor(Math.random()*12))
    }
    echarts.init(document.getElementById('mon_form')).setOption({
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            right:'50',
            top:'10',
            data:['月度总收入','月度总支出']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            show:true,
            type: 'category',
            boundaryGap: false,
            data: ["1号","2号","3号","4号","5号","6号","7号","8号","9号","10号","11号","12号","13号","14号","15号",],
            axisLine:{
                show:false,
            }
        },

        yAxis: {
            show:true,
            type: 'value',
            min: 0,
            max: 50,
            axisLabel:{
                formatter:function(value){
                    let texts = [];
                    if(value == 0){
                        texts.push("0");
                    }else if(value <= 10){
                        texts.push("10k");
                    }else if(value <= 20){
                        texts.push("200k");
                    }else if(value <= 30){
                        texts.push("30k");
                    }else if(value <= 40){
                        texts.push("40k");
                    }else if(value <= 50){
                        texts.push("50k");
                    }
                    return texts;
                }
            },
            axisLine:{
                show:false,
            }
        },
        series: [
            {
                name:'月度总收入',
                type:'line',
                color:'#fe1f6d',
                data:[pic[0],pic[1],pic[2],pic[3],pic[4],pic[5],pic[6],pic[7],pic[8],pic[9],pic[10],pic[11],pic[12],pic[13],pic[14]]
            },
            {
                name:'月度总支出',
                type:'line',
                color:'#fec100',
                data:[pic1[0],pic1[1],pic1[2],pic1[3],pic1[4],pic1[5],pic1[6],pic1[7],pic1[8],pic1[9],pic1[10],pic1[11],pic1[12],pic1[13],pic1[14]]
            }
        ]
    });
}
$("#mouths").change(function(){
    // console.log($(this).val());
    if($(this).val()=="四月份"){
        ntx(4);
    }else if($(this).val()=="三月份"){
        ntx(3);
    }else if($(this).val()=="二月份"){
        ntx(2);
    }else if($(this).val()=="一月份"){
        ntx(1);
    }
});
ntx(3);


function ytx(ye){
    let b1=0;
    let b2=0;
    let b3=0;
    let b4=0;
    let b5 =0;
    let arr = [];
    let arrnew = [];
    for(let i=0;i<json_movie_prices.years.length;i++) {
        if (ye == json_movie_prices.years[i].year) {
            for (let j = 0; j < json_movie_prices.years[i].mouths.length; j++) {
                for (let k = 0; k < json_movie_prices.years[i].mouths[j].weeks.length; k++) {
                    for (let l = 0; l < json_movie_prices.years[i].mouths[j].weeks[k].days.length; l++) {
                        b1 += json_movie_prices.years[i].mouths[j].weeks[k].days[l].sell[0].meuns[0].sell_money;
                        b2 += json_movie_prices.years[i].mouths[j].weeks[k].days[l].sell[0].meuns[1].sell_money;
                        b3 += json_movie_prices.years[i].mouths[j].weeks[k].days[l].sell[0].meuns[2].sell_money;
                        b4 += json_movie_prices.years[i].mouths[j].weeks[k].days[l].sell[0].meuns[3].sell_money;
                    }
                }
                b5 = b1 + b2 + b3 + b4;
                arr.push(b5);
                b1=0;
                b2=0;
                b3=0;
                b4=0;
            }
        }
    }
    for (let i = 0;i<arr.length;i++){
        arrnew.push(arr[i]-Math.floor(Math.random()*150+20))
    }
    echarts.init(document.getElementById('year_form')).setOption({
        tooltip: {
            trigger: 'none',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            right:'50',
            top:'10',
            data:['年度总收入','年度总支出']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 800,
            splitLine:{
                show:false,
            },
            axisLabel:{
                formatter:function(value){
                    let texts = [];
                    if(value == 0){
                        texts.push("0");
                    }else if(value <= 200){
                        texts.push("200k");
                    }else if(value <= 400){
                        texts.push("400k");
                    }else if(value <= 600){
                        texts.push("600k");
                    }else if(value <= 800){
                        texts.push("800k");
                    }
                    return texts;
                }
            },
        },
        series: [
            {
                name:'年度总收入',
                type:'line',
                color:'#fe1f6d',
                smooth: true,
                areaStyle: {},
                data:[arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9],arr[10],arr[11]]
            },
            {
                name:'年度总支出',
                type:'line',
                color:'#fec100',
                smooth: true,
                areaStyle: {},
                data:[arrnew[0],arrnew[1],arrnew[2],arrnew[3],arrnew[4],arrnew[5],arrnew[6],arrnew[7],arrnew[8],arrnew[9],arrnew[10],arrnew[11]]
            }
        ]

    });

}

$("#years").change(function(){
    ytx($(this).val());
});
ytx(2019);






















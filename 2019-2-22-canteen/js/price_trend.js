let olYears=document.getElementsByClassName('years')[0];
let olMouths=document.getElementsByClassName('mouths')[0];
let olWeeks=document.getElementsByClassName('weeks')[0];
let olMeuns=document.getElementsByClassName('meuns')[0];
let babox_div1_div3_se=document.getElementsByClassName('babox_div1_div3_se')[0];
let dbbox=document.getElementsByClassName('dbbox')[0];
let dbbox_p=dbbox.getElementsByTagName('p');
function scjg(){
for(let i=json_movie_prices.years.length-1;i>=0;i--){
        olYears.innerHTML+=`
        <option value="${json_movie_prices.years[i].year}">${json_movie_prices.years[i].year}</option>
        `;
        babox_div1_div3_se.innerHTML+=`
        <option value="${json_movie_prices.years[i].year}">${json_movie_prices.years[i].year}</option> 
        `;
        if(olYears.value==json_movie_prices.years[i].year){
            for(let j=0;j<json_movie_prices.years[i].mouths.length;j++){
                olMouths.innerHTML+=`
                    <option value="${json_movie_prices.years[i].mouths[j].mouth}">${json_movie_prices.years[i].mouths[j].mouth}</option>
                `;
                if(olMouths.value==json_movie_prices.years[i].mouths[j].mouth){
                    for(let k=0;k<json_movie_prices.years[i].mouths[j].weeks.length;k++){
                        olWeeks.innerHTML+=`
                            <option value="${json_movie_prices.years[i].mouths[j].weeks[k].week}">${json_movie_prices.years[i].mouths[j].weeks[k].week}</option>
                        `;
                        if(olWeeks.value==json_movie_prices.years[i].mouths[j].weeks[k].week){
                            for(let l=0;l<json_movie_prices.years[i].mouths[j].weeks[k].days[0].sell[0].meuns.length;l++){
                                olMeuns.innerHTML+=`
                                    <option value="${json_movie_prices.years[i].mouths[j].weeks[k].days[0].sell[0].meuns[l].meat}">${json_movie_prices.years[i].mouths[j].weeks[k].days[0].sell[0].meuns[l].meat}</option>
                                `;
                            }
                        }
                    }
                }
            }
        }   
    }
}
function oneb(){
    let a=[];
    for(let i=0;i<json_movie_prices.years.length;i++){
        if(olYears.value==json_movie_prices.years[i].year){
            for(let j=0;j<json_movie_prices.years[i].mouths.length;j++){
                if(olMouths.value==json_movie_prices.years[i].mouths[j].mouth){
                    for(let k=0;k<json_movie_prices.years[i].mouths[j].weeks.length;k++){
                        if(olWeeks.value==json_movie_prices.years[i].mouths[j].weeks[k].week){
                            for(let l=0;l<json_movie_prices.years[i].mouths[j].weeks[k].days.length;l++){
                                for(let y=0;y<json_movie_prices.years[i].mouths[j].weeks[k].days[l].sell[0].meuns.length;y++){
                                    if(olMeuns.value==json_movie_prices.years[i].mouths[j].weeks[k].days[l].sell[0].meuns[y].meat){
                                       a.push(json_movie_prices.years[i].mouths[j].weeks[k].days[l].sell[0].meuns[y].sell_money); 
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    let a1=a[0];
    let a2=a[1];
    let a3=a[2];
    let a4=a[3];
    let a5=a[4];
    let a6=a[5];
    let a7=a[6];
     // 指定图表的配置项和数据
     var myChart = echarts.init(document.getElementById('main'));
     var option = {
        tooltip: {
            trigger: 'axis',
            formatter: "Temperature : <br/>{b}k : {c}"
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisLine: {onZero: false},
            axisLabel: {
                formatter: '{value}'
            },
            boundaryGap: true,
            data: ["1st", "2nd", "3rd", "4td", "5th", "6th", "7th"]
        },
        yAxis: {
            type: 'category',
            axisLine: {onZero: false},
            axisLabel: {
                formatter: '{value} k'
            },
            boundaryGap: false,
            data: ['0', '1', '2', '3','4','5','6','7','8','9',"10"]
        },
        series: [{
            name: '高度(km)与气温(°C)变化关系',
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(0,0,0,0.4)',
                    shadowBlur: 10,
                    shadowOffsetY: 10
                }
            },
            data:[a1, a2, a3, a4, a5, a6, a7]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
scjg();
oneb();
olYears.onchange=function(){
    oneb(); 
    ytx();
    bzdbsz();
}
olMouths.onchange=function(){
    oneb(); 
    ytx();
    bzdbsz();
}
olWeeks.onchange=function(){
    oneb(); 
    ytx();
    bzdbsz();
};
olMeuns.onchange=function(){
    oneb(); 
    ytx();
    bzdbsz();
};
function ytx(){
    let b1=0;
    let b2=0;
    let b3=0;
    let b4=0;
    for(let i=0;i<json_movie_prices.years.length;i++){
        if(olYears.value==json_movie_prices.years[i].year){
            for(let j=0;j<json_movie_prices.years[i].mouths.length;j++){
                if(olMouths.value==json_movie_prices.years[i].mouths[j].mouth){
                    for(let k=0;k<json_movie_prices.years[i].mouths[j].weeks.length;k++){
                        if(olWeeks.value==json_movie_prices.years[i].mouths[j].weeks[k].week){
                            for(let l=0;l<json_movie_prices.years[i].mouths[j].weeks[k].days.length;l++){
                                b1+=json_movie_prices.years[i].mouths[j].weeks[k].days[l].sell[0].meuns[0].sell_money; 
                                b2+=json_movie_prices.years[i].mouths[j].weeks[k].days[l].sell[0].meuns[1].sell_money; 
                                b3+=json_movie_prices.years[i].mouths[j].weeks[k].days[l].sell[0].meuns[2].sell_money; 
                                b4+=json_movie_prices.years[i].mouths[j].weeks[k].days[l].sell[0].meuns[3].sell_money;
                            }
                        }
                    }
                }
            }
        }
    }
    var myChart = echarts.init(document.getElementById('yztdiv'));
    // app.title = '环形图';
    var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        y:'200px',
        data:['肉禽','蔬菜','米面豆乳','蛋奶']
    },
    series: [
        {
            name:'蔬菜种类',
            type:'pie',
            radius: ['40%', '60%'],
            avoidLabelOverlap: true,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true,
                }
            },
            data:[
                {value:b1, name:'肉禽'},
                {value:b2, name:'蔬菜'},
                {value:b3, name:'米面豆乳'},
                {value:b4, name:'蛋奶'}
            ]
        }
    ]
};
//    使用刚指定的配置项和数据显示图表。
   myChart.setOption(option);
}
ytx();
function zxtol(){
    let s1=0;
    let s2=0;
    let s3=0;
    let s4=0;
    let s5=0;
    let s6=0;
    let s7=0;
    let s8=0;
    let s9=0;
    let s10=0;
    let s11=0;
    let s12=0;
    // console.log(json_movie_prices.years);
    for(let i=0;i<json_movie_prices.years.length;i++){
        if(json_movie_prices.years[i].year==babox_div1_div3_se.value){
            for(let j=0;j<json_movie_prices.years[i].mouths.length;j++){
                if(j==0){
                    for(let k=0;k<json_movie_prices.years[i].mouths[0].weeks.length;k++){
                        for(let o=0;o<json_movie_prices.years[i].mouths[j].weeks[k].days.length;o++){
                            for(let l=0;l<json_movie_prices.years[i].mouths[j].weeks[k].days[o].sell[0].meuns.length;l++){
                                s1+=json_movie_prices.years[i].mouths[j].weeks[k].days[o].sell[0].meuns[l].sell_money;
                            }
                        }
                    }
                }
                if(j==1){
                    for(let k=0;k<json_movie_prices.years[i].mouths[0].weeks.length;k++){
                        for(let o=0;o<json_movie_prices.years[i].mouths[j].weeks[k].days.length;o++){
                            for(let l=0;l<json_movie_prices.years[i].mouths[j].weeks[k].days[o].sell[0].meuns.length;l++){
                                s2+=json_movie_prices.years[i].mouths[j].weeks[k].days[o].sell[0].meuns[l].sell_money;
                            }
                        }
                    }
                }
                if(j==2){
                    for(let k=0;k<json_movie_prices.years[i].mouths[0].weeks.length;k++){
                        for(let o=0;o<json_movie_prices.years[i].mouths[j].weeks[k].days.length;o++){
                            for(let l=0;l<json_movie_prices.years[i].mouths[j].weeks[k].days[o].sell[0].meuns.length;l++){
                                s3+=json_movie_prices.years[i].mouths[j].weeks[k].days[o].sell[0].meuns[l].sell_money;
                            }
                        }
                    }
                }
                if(j==3){
                    for(let k=0;k<json_movie_prices.years[i].mouths[0].weeks.length;k++){
                        for(let o=0;o<json_movie_prices.years[i].mouths[j].weeks[k].days.length;o++){
                            for(let l=0;l<json_movie_prices.years[i].mouths[j].weeks[k].days[o].sell[0].meuns.length;l++){
                                s4+=json_movie_prices.years[i].mouths[j].weeks[k].days[o].sell[0].meuns[l].sell_money;
                            }
                        }
                    }
                }
                if(j==4){
                    for(let k=0;k<json_movie_prices.years[i].mouths[0].weeks.length;k++){
                        for(let o=0;o<json_movie_prices.years[i].mouths[j].weeks[k].days.length;o++){
                            for(let l=0;l<json_movie_prices.years[i].mouths[j].weeks[k].days[o].sell[0].meuns.length;l++){
                                s5+=json_movie_prices.years[i].mouths[j].weeks[k].days[o].sell[0].meuns[l].sell_money;
                            }
                        }
                    }
                }
                if(j==5){
                    for(let k=0;k<json_movie_prices.years[i].mouths[0].weeks.length;k++){
                        for(let o=0;o<json_movie_prices.years[i].mouths[j].weeks[k].days.length;o++){
                            for(let l=0;l<json_movie_prices.years[i].mouths[j].weeks[k].days[o].sell[0].meuns.length;l++){
                                s6+=json_movie_prices.years[i].mouths[j].weeks[k].days[o].sell[0].meuns[l].sell_money;
                            }
                        }
                    }
                }
                if(j==6){
                    for(let k=0;k<json_movie_prices.years[i].mouths[0].weeks.length;k++){
                        for(let o=0;o<json_movie_prices.years[i].mouths[j].weeks[k].days.length;o++){
                            for(let l=0;l<json_movie_prices.years[i].mouths[j].weeks[k].days[o].sell[0].meuns.length;l++){
                                s7+=json_movie_prices.years[i].mouths[j].weeks[k].days[o].sell[0].meuns[l].sell_money;
                            }
                        }
                    }
                }
                if(j==7){
                    for(let k=0;k<json_movie_prices.years[i].mouths[0].weeks.length;k++){
                        for(let o=0;o<json_movie_prices.years[i].mouths[j].weeks[k].days.length;o++){
                            for(let l=0;l<json_movie_prices.years[i].mouths[j].weeks[k].days[o].sell[0].meuns.length;l++){
                                s8+=json_movie_prices.years[i].mouths[j].weeks[k].days[o].sell[0].meuns[l].sell_money;
                            }
                        }
                    }
                }
                if(j==8){
                    for(let k=0;k<json_movie_prices.years[i].mouths[0].weeks.length;k++){
                        for(let o=0;o<json_movie_prices.years[i].mouths[j].weeks[k].days.length;o++){
                            for(let l=0;l<json_movie_prices.years[i].mouths[j].weeks[k].days[o].sell[0].meuns.length;l++){
                                s9+=json_movie_prices.years[i].mouths[j].weeks[k].days[o].sell[0].meuns[l].sell_money;
                            }
                        }
                    }
                }
                if(j==9){
                    for(let k=0;k<json_movie_prices.years[i].mouths[0].weeks.length;k++){
                        for(let o=0;o<json_movie_prices.years[i].mouths[j].weeks[k].days.length;o++){
                            for(let l=0;l<json_movie_prices.years[i].mouths[j].weeks[k].days[o].sell[0].meuns.length;l++){
                                s10+=json_movie_prices.years[i].mouths[j].weeks[k].days[o].sell[0].meuns[l].sell_money;
                            }
                        }
                    }
                }
                if(j==10){
                    for(let k=0;k<json_movie_prices.years[i].mouths[0].weeks.length;k++){
                        for(let o=0;o<json_movie_prices.years[i].mouths[j].weeks[k].days.length;o++){
                            for(let l=0;l<json_movie_prices.years[i].mouths[j].weeks[k].days[o].sell[0].meuns.length;l++){
                                s11+=json_movie_prices.years[i].mouths[j].weeks[k].days[o].sell[0].meuns[l].sell_money;
                            }
                        }
                    }
                }
                if(j==11){
                    for(let k=0;k<json_movie_prices.years[i].mouths[0].weeks.length;k++){
                        for(let o=0;o<json_movie_prices.years[i].mouths[j].weeks[k].days.length;o++){
                            for(let l=0;l<json_movie_prices.years[i].mouths[j].weeks[k].days[o].sell[0].meuns.length;l++){
                                s12+=json_movie_prices.years[i].mouths[j].weeks[k].days[o].sell[0].meuns[l].sell_money;
                            }
                        }
                    }
                }
            }
        }
    }
    // console.log(s1)
    var myChart = echarts.init(document.getElementById('zxtbox'));
    // app.title = '环形图';
    var option = {
        color: ['#FF9C5B'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'category',
                data : [],
            }
        ],
        series : [
            {
                name:'当月销售额/单位k',
                type:'bar',
                barWidth: '40%',
                data:[s1, s2, s3, s4, s5, s6, s7,s8,s9,s10,s11,s12]
            }
        ]
    };
//    使用刚指定的配置项和数据显示图表。
   myChart.setOption(option);
}
zxtol();
babox_div1_div3_se.onchange=function(){
    zxtol();
}
function bzdbsz(){
    let s1=0;
    let s2=0;
    let ss1=0;
    let ss2=0;
    for(let i=0;i<json_movie_prices.years.length;i++){
        if(olYears.value==json_movie_prices.years[i].year){
            for(let j=0;j<json_movie_prices.years[i].mouths.length;j++){
                if(olMouths.value==json_movie_prices.years[i].mouths[j].mouth){
                    for(let l=0;l<json_movie_prices.years[i].mouths[j].weeks.length;l++){
                        if(olWeeks.value==json_movie_prices.years[i].mouths[j].weeks[l].week){
                            for(let o=0;o<json_movie_prices.years[i].mouths[j].weeks[l].days.length;o++){
                                for(let l1=0;l1<json_movie_prices.years[i].mouths[j].weeks[l].days[o].sell[0].meuns.length;l1++){
                                    if(j==0){
                                        s2+=json_movie_prices.years[i-1].mouths[j].weeks[l].days[o].sell[0].meuns[l1].sell_money;
                                    }else{
                                        s2+=json_movie_prices.years[i].mouths[j].weeks[l].days[o].sell[0].meuns[l1].sell_money;
                                    }
                                    s1+=json_movie_prices.years[i].mouths[j].weeks[l].days[o].sell[0].meuns[l1].sell_money;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    for(let i=0;i<json_movie_prices.years.length;i++){
        if(olYears.value==json_movie_prices.years[i].year){
            for(let j=0;j<json_movie_prices.years[i].mouths.length;j++){
                if(olMouths.value==json_movie_prices.years[i].mouths[j].mouth){
                    for(let l=0;l<json_movie_prices.years[i].mouths[j].weeks.length;l++){
                        if(olWeeks.value==json_movie_prices.years[i].mouths[j].weeks[l].week){
                            for(let o=0;o<json_movie_prices.years[i].mouths[j].weeks[l].days.length;o++){
                                for(let l1=0;l1<json_movie_prices.years[i].mouths[j].weeks[l].days[o].stock[0].meuns.length;l1++){
                                    for(let l2=0;l2<json_movie_prices.years[i].mouths[j].weeks[l].days[o].stock[0].meuns[l1].classify.length;l2++){
                                        if(j==0){
                                            ss2+=json_movie_prices.years[i-1].mouths[j].weeks[l].days[o].stock[0].meuns[l1].classify[l2].unit_price*json_movie_prices.years[i].mouths[j].weeks[l].days[o].stock[0].meuns[l1].classify[l2].stock;
                                        }else{
                                           ss2+=json_movie_prices.years[i].mouths[j].weeks[l-1].days[o].stock[0].meuns[l1].classify[l2].unit_price*json_movie_prices.years[i].mouths[j].weeks[l].days[o].stock[0].meuns[l1].classify[l2].stock
                                        }
                                        ss1+=json_movie_prices.years[i].mouths[j].weeks[l].days[o].stock[0].meuns[l1].classify[l2].unit_price*json_movie_prices.years[i].mouths[j].weeks[l].days[o].stock[0].meuns[l1].classify[l2].stock; 
                                    }
                                   
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    dbbox_p[0].innerText=`+${(s1/s2).toFixed(2)*100}%`
    if(ss1-ss2>0){
        dbbox_p[1].innerText=`+${(ss1-ss2).toFixed(0)}`
    }else{
        dbbox_p[1].innerText=`${(ss1-ss2).toFixed(0)}`
    }
    if(ss1/ss2>1){
        dbbox_p[2].innerText=`+${(ss1/ss2).toFixed(2)*100}%`
    }else{
       dbbox_p[2].innerText=`-${(ss1/ss2).toFixed(2)*100}%` 
    }
    if((ss1-s1)>0){
       dbbox_p[3].innerText=`+${(ss1-s1).toFixed(0)}`  
    }else{
        dbbox_p[3].innerText=`${(ss1-s1).toFixed(0)}` 
    }
    
}
bzdbsz();
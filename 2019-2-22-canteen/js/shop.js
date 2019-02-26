var number=$(".numberline>p");
var oPe=$(".operator>span");
var a=0,b=0,c=0,d=0,e=0,res=0;
for(let i=0;i<9;i++){
	number[i].onclick=function(){
		let j=i+1+""
		if(a==0){
			a=j;
		}else{
			a=a+j;
		}
		$(".listfive>h3").html(a);
	}
}
number[9].onclick=function(){
		a=a+".";
		$(".listfive>h3").html(a);

}
number[10].onclick=function(){
		a=a+"0";
		$(".listfive>h3").html(a);
}
oPe[0].onclick=function(){
	b=parseFloat(a);
	a=0;
}
oPe[1].onclick=function(){
	c=parseFloat(a);
	a=0;
}
oPe[2].onclick=function(){
	d=parseFloat(a);
	a=0;
}
oPe[3].onclick=function(){
	e=parseFloat(a);
	a=0;
}
oPe[4].onclick=function(){
	$(".listfive>h3").html("");
	a=0;
}
number[11].onclick=function(){
	if(b!=0){
		res=b+parseFloat(a);
		a=0;
		b=0;
	}else if(c!=0){
		res=c-parseFloat(a);
		a=0;
		c=0;
	}else if(d!=0){
		res=d*parseFloat(a);
		a=0;
		d=0;
	}else if(e!=0){
		res=(e/parseFloat(a)).toFixed(4);
		a=0;
		e=0;
	}
	$(".listfive>h3").html(res);
}
var x=[]
for(let i=0;i<10;i++){
	x[i]=1000+parseInt(Math.random()*500);
}
optionone = {
    xAxis: {
		show:false,
        type: 'category',
		data: [1,2,3,4,5,6,7,8,9]
    },
    yAxis: {
		show: false,
    },
    series: [{
        data: [x[0], x[1], x[2], x[3], x[4], x[5], x[6],x[7]],
        type: 'line',
		smooth: true,
		lineStyle: {
		    normal: {
		        width: 3,
		        shadowColor: 'rgba(0,0,0,0.4)',
		        shadowBlur: 10,
		        shadowOffsetY: 10
		    }
		}
    }]
};
optiontwoone = {
    xAxis: {
		show:false,
        type: 'category',
		data: [1,2,3,4,5,6,7,8,9]
    },
    yAxis: {
		show: false,
    },
    series: [{
        data: [x[5], x[7], x[3], x[1], x[4], x[5], x[9],x[8]],
        type: 'line',
		smooth: true,
		lineStyle: {
		    normal: {
		        width: 3,
		        shadowColor: 'rgba(0,0,0,0.4)',
		        shadowBlur: 10,
		        shadowOffsetY: 10
		    }
		}
    }]
};
optiontwofour = {
    xAxis: {
		show:false,
        type: 'category',
		data: [1,2,3,4,5,6,7,8,9]
    },
    yAxis: {
		show: false,
    },
    series: [{
        data: [x[7], x[1], x[4], x[2], x[8], x[5], x[0],x[9]],
        type: 'line',
		smooth: true,
		lineStyle: {
		    normal: {
		        width: 3,
		        shadowColor: 'rgba(0,0,0,0.4)',
		        shadowBlur: 10,
		        shadowOffsetY: 10
		    }
		}
    }]
};
optiontwotwo = {
    xAxis: {
		show:false,
        type: 'category',
		data: [1,2,3,4,5,6,7,8,9]
    },
    yAxis: {
		show: false,
    },
    series: [{
        data: [x[4], x[2], x[8], x[5], x[7], x[1], x[9],x[0]],
        type: 'line',
		smooth: true,
		lineStyle: {
		    normal: {
		        width: 3,
		        shadowColor: 'rgba(0,0,0,0.4)',
		        shadowBlur: 10,
		        shadowOffsetY: 10
		    }
		}
    }]
};
optiontwothree = {
    xAxis: {
		show:false,
        type: 'category',
		data: [1,2,3,4,5,6,7,8,9]
    },
    yAxis: {
		show: false,
    },
    series: [{
        data: [x[2], x[8], x[5], x[7], x[1], x[4], x[0],x[8]],
        type: 'line',
		smooth: true,
		lineStyle: {
		    normal: {
		        width: 3,
		        shadowColor: 'rgba(0,0,0,0.4)',
		        shadowBlur: 10,
		        shadowOffsetY: 10
		    }
		}
    }]
};
optiontwo = {
    tooltip : {
        trigger: 'item',
        formatter: "{c} ({d}%)"
    },
    legend: {
    	y:"175px",
        bottom: 10,
        left: 'center',
        data: ['蔬菜类', '肉禽类','米面类','果品类','调味品']
    },
    series : [
        {
            type: 'pie',
            // radius : '65%',
            center: ['50%', '50%'],
			radius:'45px',
            selectedMode: 'single',
            data:[
                {value:1548,name: '蔬菜类'},
                {value:535, name: '肉禽类'},
                {value:510, name: '米面类'},
                {value:634, name: '果品类'},
                {value:735, name: '调味品'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

var myChartone = echarts.init(document.getElementById('mychatone'));
var myChartwoone = echarts.init(document.getElementById('twolistone'));
var myChartwotwo = echarts.init(document.getElementById('twolisttwo'));
var myChartwothree = echarts.init(document.getElementById('twolistthree'));
var myChartwofour = echarts.init(document.getElementById('twolistfour'));
myChartone.setOption(optionone);
myChartwoone.setOption(optiontwoone);
myChartwotwo.setOption(optiontwotwo);
myChartwothree.setOption(optiontwothree);
myChartwofour.setOption(optiontwofour);

var myCharthreeone = echarts.init(document.getElementById('threefig'));
myCharthreeone.setOption(optiontwo);
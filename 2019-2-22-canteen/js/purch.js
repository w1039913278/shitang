layui.use('laydate', function () {
    var laydate = layui.laydate;
    laydate.render({
        elem: '#kal',
        position: 'static',
        showBottom: false,
        change: function (value, date) {
            lay('#testView').html(value);
        }
    });
});

echarts.init(document.getElementById('section1')).setOption({
    graphic: {
        type: 'text',
        style: {
            text: "45%",
            x: 35,
            y: 55,
            fontSize: 16
        }
    },
    series: [
        {
            type:'pie',
            radius: ['55%', '65%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center '
                },
            },
            data:[
                {value:45, name:'蔬菜类'},
                {value:55, name:'其他'},
            ],
            graphic: {
                type: 'text',
                style: {
                    text:'25%',
                    x: 40,
                    y: 45,
                    fontSize: 55
                }
            },
            color: ['#fb5339', '#d2d2d2'],
        }
    ]
});
echarts.init(document.getElementById('section2')).setOption({
    graphic: {
        type: 'text',
        style: {
            text: "25%",
            x: 35,
            y: 55,
            fontSize: 16
        }
    },
    series: [
        {
            type:'pie',
            radius: ['55%', '65%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center '
                },

            },
            data:[
                {value:25, name:'蔬菜类'},
                {value:75, name:'其他'},

            ],
            graphic: {
                type: 'text',
                style: {
                    text:'25%',
                    x: 40,
                    y: 45,
                    fontSize: 22
                }
            },
            color: ['#31c187', '#d2d2d2'],
        }
    ]
});
echarts.init(document.getElementById('section3')).setOption({
    graphic: {
        type: 'text',
        style: {
            text: "30%",
            x: 35,
            y: 55,
            fontSize: 16
        }
    },
    series: [
        {
            type:'pie',
            radius: ['55%', '65%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center '
                },

            },
            data:[
                {value:30, name:'蔬菜类'},
                {value:70, name:'其他'},

            ],
            graphic: {
                type: 'text',
                style: {
                    text:'25%',
                    x: 40,
                    y: 45,
                    fontSize: 55
                }
            },
            color: ['#f45684', '#d2d2d2'],
        }
    ]
});

layui.use('slider', function(){
    var $ = layui.$,
        slider = layui.slider;
    slider.render({
        elem: '#vermin',
        input: true,
        theme: '#d5eff9',
        value:33,
    });
});
layui.use('slider', function(){
    var $ = layui.$,
        slider = layui.slider;
    slider.render({
        elem: '#die',
        input: true,
        theme: '#fae380',
        value:18,
    });
});
layui.use('slider', function(){
    var $ = layui.$,
        slider = layui.slider;
    slider.render({
        elem: '#fresh',
        input: true,
        theme: '#f7311d',
        value:45
    });
});


$(".month").change(function(){
    if($(this).val()=="2019.10"){
        veg()
    }else if($(this).val()=="2019.9"){
        ve()
    }else if($(this).val()=="2019.8"){
        vg()
    }
});

function veg(){
    $("#box").html(`
                    <tr>
                        <td>韭菜</td>
                        <td>￥70.60</td>
                        <td>32.4kg</td>
                        <td>农机蔬菜厂</td>
                    </tr>
                    <tr>
                        <td>白菜</td>
                        <td>￥94.40</td>
                        <td>57.1kg</td>
                        <td>农机蔬菜厂</td>
                    </tr>
                    <tr>
                        <td>土豆</td>
                        <td>￥121.30</td>
                        <td>153.2kg</td>
                        <td>农贸菜市场</td>
                    </tr>
                    <tr>
                        <td>茄子</td>
                        <td>￥66.40</td>
                        <td>44.6kg</td>
                        <td>农机蔬菜厂</td>
                    </tr>
                    <tr>
                        <td>豆角</td>
                        <td>￥56.30</td>
                        <td>36.4kg</td>
                        <td>农贸菜市场</td>
                    </tr>
                    <tr>
                        <td>菜花</td>
                        <td>￥183.40</td>
                        <td>124.9kg</td>
                        <td>农机蔬菜厂</td>
                    </tr>
    `);
}veg();
function ve(){
    $("#box").html(`
                    <tr>
                        <td>土豆</td>
                        <td>￥56.60</td>
                        <td>42.6kg</td>
                        <td>农贸菜市场</td>
                    </tr>
                    <tr>
                        <td>豆角</td>
                        <td>￥34.40</td>
                        <td>51.1kg</td>
                        <td>农机蔬菜厂</td>
                    </tr>
                    <tr>
                        <td>韭菜</td>
                        <td>￥87.10</td>
                        <td>123.2kg</td>
                        <td>农贸菜市场</td>
                    </tr>
                    <tr>
                        <td>花菜</td>
                        <td>￥89.30</td>
                        <td>53.8kg</td>
                        <td>农机蔬菜厂</td>
                    </tr>
                    <tr>
                        <td>白菜</td>
                        <td>￥56.30</td>
                        <td>41.8kg</td>
                        <td>农贸菜市场</td>
                    </tr>
                    <tr>
                        <td>茄子</td>
                        <td>￥141.20</td>
                        <td>214.4kg</td>
                        <td>农机蔬菜厂</td>
                    </tr>
    `);
}
function vg(){
    $("#box").html(`
                    <tr>
                        <td>土豆</td>
                        <td>￥67.50</td>
                        <td>32.6kg</td>
                        <td>农机蔬菜厂</td>
                    </tr>
                    <tr>
                        <td>豆角</td>
                        <td>￥58.10</td>
                        <td>43.7kg</td>
                        <td>农机蔬菜厂</td>
                    </tr>
                    <tr>
                        <td>花菜</td>
                        <td>￥74.6</td>
                        <td>165.7kg</td>
                        <td>农贸菜市场</td>
                    </tr>
                    <tr>
                        <td>韭菜</td>
                        <td>￥64.9</td>
                        <td>37.5kg</td>
                        <td>农贸菜市场</td>
                    </tr>
                    <tr>
                        <td>豆角</td>
                        <td>￥63.80</td>
                        <td>51.2kg</td>
                        <td>农贸菜市场</td>
                    </tr>
                    <tr>
                        <td>白菜</td>
                        <td>￥210.70</td>
                        <td>353.20kg</td>
                        <td>农机蔬菜厂</td>
                    </tr>
    `);
}





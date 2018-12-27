var myChart3;

function south(arr3,date,str) {
    if (myChart3 != null && myChart3 != "" && myChart3 != undefined) {
        myChart3.dispose();
    } 
    var y = (new Date).getFullYear(),
        m = (new Date).getMonth(),
        d = (new Date).getDate();
    m = m > 12 ? m-12 : m;
    var ymd = y + '-' + m + '-' + d;
    myChart3 = echarts.init(document.querySelector("#myChart3"));
    
    option = {
        title: {
            text: ymd + str
        },
        xAxis: {
            type: 'category',
            data: date
        },
        yAxis: {
            type: 'value'
        },
        legend: {
            data:['南部地区']
        },
        series: [{
            name: '南部地区',
            data: arr3,
            type: 'line'
        }]
    };
    // option.series[0].data[i] = num;

    // console.log(option.series[0].data[0])
    myChart3.setOption(option);
}
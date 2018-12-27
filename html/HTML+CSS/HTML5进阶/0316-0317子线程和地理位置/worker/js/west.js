var myChart2;

function west(arr2,date,str) {
    if (myChart2 != null && myChart2 != "" && myChart2 != undefined) {
        myChart2.dispose();
    } 
    var y = (new Date).getFullYear(),
        m = (new Date).getMonth(),
        d = (new Date).getDate();
    m = m > 12 ? m-12 : m;
    var ymd = y + '-' + m + '-' + d;
    
    myChart2 = echarts.init(document.querySelector("#myChart2"));
    
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
            data:['西部地区']
        },
        series: [{
            name: '西部地区',
            data: arr2,
            type: 'line'
        }]
    };
    // option.series[0].data[i] = num;

    // console.log(option.series[0].data[0])
    myChart2.setOption(option);
}
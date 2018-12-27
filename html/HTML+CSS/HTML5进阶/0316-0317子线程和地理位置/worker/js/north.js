var myChart4;

function north(arr4,date,str) {
    if (myChart4 != null && myChart4 != "" && myChart4 != undefined) {
        myChart4.dispose();
    } 
    var y = (new Date).getFullYear(),
        m = (new Date).getMonth(),
        d = (new Date).getDate();
    m = m > 12 ? m-12 : m;
    var ymd = y + '-' + m + '-' + d;
    myChart4 = echarts.init(document.querySelector("#myChart4"));
    
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
            data:['北部地区']
        },
        series: [{
            name: '北部地区',
            data: arr4,
            type: 'line'
        }]
    };
    // option.series[0].data[i] = num;

    // console.log(option.series[0].data[0])
    myChart4.setOption(option);
}
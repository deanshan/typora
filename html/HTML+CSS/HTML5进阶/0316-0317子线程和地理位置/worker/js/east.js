var myChart1;

function east(arr1,date,str) {
    if (myChart1 != null && myChart1 != "" && myChart1 != undefined) {
        myChart1.dispose();
    } 
    var y = (new Date).getFullYear(),
        m = (new Date).getMonth(),
        d = (new Date).getDate();
    m = m > 12 ? m-12 : m;
    var ymd = y + '-' + m + '-' + d;
    myChart1 = echarts.init(document.querySelector("#myChart1"));

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
            data:['东部地区']
        },
        series: [{
            name:'东部地区',
            data: arr1,
            type: 'line'
        }]
    };
    // option.series[0].data[i] = num;

    // console.log(option.series[0].data[0])
    myChart1.setOption(option);
}
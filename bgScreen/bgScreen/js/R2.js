pchartR2_1();
pchartR2_2();
pchartR2_3();
pchartR2_4();
linechartR2();

function pchartR2_1() {
	var dom = document.getElementById("piechartDomR2_1");
	var myChart = echarts.init(dom);

	var option = {
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: ['65%', '70%'],
			labelLine: {
				normal: {
					show: false
				}
			},

			data: [{
					value: 5,
					itemStyle: {
						color: '#F6BB42'
					}
				},
				{
					value: 95,
					itemStyle: {
						color: 'transparent'
					}
				},
			],
		}],
	};
	if(option && typeof option === "object") {
		myChart.setOption(option, true);
	};
};

function pchartR2_2() {
	var dom = document.getElementById("piechartDomR2_2");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	app.title = '环形图';

	option = {
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: ['65%', '70%'],
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
					value: 70,
					itemStyle: {
						color: '#F6BB42'
					}
				},
				{
					value: 30,
					itemStyle: {
						color: 'transparent'
					}
				},
			],
		}],
	};
	if(option && typeof option === "object") {
		myChart.setOption(option, true);
	};
};

function pchartR2_3() {
	var dom = document.getElementById("piechartDomR2_3");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	app.title = '环形图';

	option = {
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: ['65%', '70%'],
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
					value: 7,
					itemStyle: {
						color: '#F6BB42'
					}
				},
				{
					value: 93,
					itemStyle: {
						color: 'transparent'
					}
				},
			],
		}],
	};
	if(option && typeof option === "object") {
		myChart.setOption(option, true);
	};
};

function pchartR2_4() {
	var dom = document.getElementById("piechartDomR2_4");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	app.title = '环形图';

	option = {
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: ['65%', '70%'],
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
					value: 8,
					itemStyle: {
						color: '#F6BB42'
					}
				},
				{
					value: 92,
					itemStyle: {
						color: 'transparent'
					}
				},
			],
		}],
	};
	if(option && typeof option === "object") {
		myChart.setOption(option, true);
	};
};

//	<<!--linechart-- >
function linechartR2() {
	var dom = document.getElementById("linechartDomR2");
	var myChart = echarts.init(dom);
	option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross'
			},
			position: 'top',
			padding: 10,
			borderColor: '#4FC1E9',
			borderWidth: '2',
			textStyle: {
				color: '#4FC1E9',
				fontSize: 30,
			},

		},
		grid: {
			left: '100',
			width: '1580',
		},

		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: ['', '信息收集', '获取权限', '远程控制', '数据盗取', '系统破坏', '有害程序', ''],
			axisLabel: {
				backgroundColor: 'transparent',
				color: '#4fc1e9',
				fontFamily: 'RTWSYueGoTrial-Regular',
				fontWeight: 'bold',
				fontSize: 30,
				margin:20

			},
			axisLine: {
				lineStyle: {
					color: '#4FC1E9',
					width: '4'
				}
			},
			axisTick: {
				show: false,
				alignWithLabel: true
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#4FC1E9',
					width: '2',
					opacity: 0.2,
				}
			},
		},
		yAxis: {
			type: 'value',
			boundaryGap: true,
			axisLabel: {
				color: '#4FC1E9',
				fontFamily: 'RTWSYueGoTrial-Regular',
				fontWeight: 'bold',
				fontSize: '30',
				margin:20
			},
			axisLine: {
				lineStyle: {
					color: '#4FC1E9',
					width: '4'
				}
			},
			axisTick: {
				show: false,
				alignWithLabel: true
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#4FC1E9',
					width: '2',
					opacity: 0.2,
				}
			}

		},
		series: [{
			type: 'line',
			smooth: true,
			data: [, 102, 75, 50, 65, 35, 20, , ],
			symbolSize: 2, //拐点大小
			itemStyle: {
				normal: {
					color: '#4FC1E9',
					lineStyle: {
						width: 6 //折线宽度
					}
				}
			},

		}]
	};
	if(option && typeof option === "object") {
		myChart.setOption(option, true);
	}
}
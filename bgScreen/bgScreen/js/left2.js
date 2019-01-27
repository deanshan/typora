linechartL2();
scatterchartL2();

function linechartL2() {

	var dom = document.getElementById("linechartDomL2");
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
				fontSize: 20,
			},

		},
		legend: {
			orient: 'vertical',
			width: '300',
			right: '1%',
			top: 'middle',
			textStyle: {
				color: '#4FC1E9',
				fontSize: '30',
				fontFamily: 'RTWSYueGoTrial-Regular',
				fontWeight: 'bold',
				padding: [10, 0, 10, 20],
			},
			itemWidth: 60,
			itemHeight: 20,
			data: ['CPU资源池', '内存资源池', '存储资源池', '带宽资源池', ]
		},
		grid: {
			width: '1260',
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: ['1/2', '1/3', '1/3', '1/4', '1/5', '1/6', '1/7'],
			axisLine: {
				lineStyle: {
					color: '#4FC1E9',
					width: 4,
				}
			},
			axisLabel: {
				color: '#4FC1E9',
				fontSize: 24,
				fontFamily: 'RTWSYueGoTrial-Regular',
				margin: 20,
			},

		},
		yAxis: {
			min: '0',
			max: '100',
			splitLine: {
				show: true,
				lineStyle: {
					color: '#4FC1E9',
					width: '4',
					opacity: 0.2,
				}
			},
			axisLine: {
				lineStyle: {
					color: '#4FC1E9',
					width: '4',
				},
			},
			axisLabel: {
				color: '#4FC1E9',
				fontSize: 24,
				fontFamily: 'RTWSYueGoTrial-Regular',
				margin: 20,
			},

		},
		textStyle: {
			color: '#4FC1E9'
		},

		series: [{
				name: 'CPU资源池',
				type: 'line',
				smooth: true,
				data: [45, 50, 45, 55, 45, 45, 45],
				itemStyle: {
					normal: {
						color: '#4FC1E9',
						lineStyle: {
							width: 4
						}
					}
				},
			},
			{
				name: '内存资源池',
				type: 'line',
				smooth: true,
				data: [41, 41, 45, 41, 51, 41, 61],
				itemStyle: {
					normal: {
						color: '#EC87C0',
						lineStyle: {
							width: 4
						}
					}
				},
			},
			{
				name: '存储资源池',
				type: 'line',
				smooth: true,
				data: [37, 42, 37, 37, 51, 37, 37],
				itemStyle: {
					normal: {
						color: '#F6BB42',
						lineStyle: {
							width: 4
						}
					}
				},
			},
			{
				name: '带宽资源池',
				type: 'line',
				smooth: true,
				data: [62, 47, 62, 62, 45, 62, 62],
				itemStyle: {
					normal: {
						color: '#A0D468',
						lineStyle: {
							width: 4
						}
					}
				},
			}
		]
	};
	myChart.setOption(option, true);
};

//scatterchartL2

function scatterchartL2() {
	var dom = document.getElementById("scatterchartDomL2");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;

	var hours = [
		'R01', 'R02', 'R03', 'R04', 'R05', 'R06', 'R07', 'R08',
		'R09', 'R10', 'R11', 'R12', 'R13', 'R14', 'R15', 'R16',
		'R17', 'R18', 'R19', 'R20', 'R21', 'R22', 'R23', 'R24', 'R25'
	];
	var days = ['01', '02', '03', '04', '05', '06', '07', '08'];

	var data = [
		[0, 0, 4],
		[0, 1, 15],
		[0, 2, 10],
		[0, 3, 15],
		[0, 4, 4],
		[0, 5, 15],
		[0, 6, 4],
		[0, 7, 15],
		[0, 8, 15],
		[0, 9, 10],
		[0, 10, 15],
		[0, 11, 10],
		[0, 12, 10],
		[0, 13, 10],
		[0, 14, 10],
		[0, 15, 10],
		[0, 16, 10],
		[0, 17, 15],
		[0, 18, 15],
		[0, 19, 4],
		[0, 20, 10],
		[0, 21, 15],
		[0, 22, 10],
		[0, 23, 10],
		[0, 24, 4],

		[1, 0, 10],
		[1, 1, 4],
		[1, 2, 15],
		[1, 3, 10],
		[1, 4, 10],
		[1, 5, 15],
		[1, 6, 15],
		[1, 7, 10],
		[1, 8, 15],
		[1, 9, 10],
		[1, 10, 10],
		[1, 11, 15],
		[1, 12, 10],
		[1, 13, 10],
		[1, 14, 10],
		[1, 15, 15],
		[1, 16, 4],
		[1, 17, 15],
		[1, 18, 10],
		[1, 19, 15],
		[1, 20, 10],
		[1, 21, 15],
		[1, 22, 15],
		[1, 23, 4],
		[1, 24, 15],

		[2, 0, 15],
		[2, 1, 10],
		[2, 2, 4],
		[2, 3, 10],
		[2, 4, 4],
		[2, 5, 10],
		[2, 6, 10],
		[2, 7, 15],
		[2, 8, 10],
		[2, 9, 10],
		[2, 10, 15],
		[2, 11, 10],
		[2, 12, 10],
		[2, 13, 15],
		[2, 14, 15],
		[2, 15, 4],
		[2, 16, 10],
		[2, 17, 4],
		[2, 18, 10],
		[2, 19, 15],
		[2, 20, 15],
		[2, 21, 10],
		[2, 22, 10],
		[2, 23, 10],
		[2, 24, 15],

		[3, 0, 10],
		[3, 1, 10],
		[3, 2, 15],
		[3, 3, 15],
		[3, 4, 10],
		[3, 5, 4],
		[3, 6, 4],
		[3, 7, 10],
		[3, 8, 10],
		[3, 9, 15],
		[3, 10, 4],
		[3, 11, 10],
		[3, 12, 15],
		[3, 13, 10],
		[3, 14, 15],
		[3, 15, 10],
		[3, 16, 4],
		[3, 17, 10],
		[3, 18, 15],
		[3, 19, 10],
		[3, 20, 15],
		[3, 21, 10],
		[3, 22, 10],
		[3, 23, 15],
		[3, 24, 4],

		[4, 0, 10],
		[4, 1, 4],
		[4, 2, 10],
		[4, 3, 4],
		[4, 4, 4],
		[4, 5, 15],
		[4, 6, 10],
		[4, 7, 10],
		[4, 8, 15],
		[4, 9, 10],
		[4, 10, 10],
		[4, 11, 15],
		[4, 12, 10],
		[4, 13, 15],
		[4, 14, 15],
		[4, 15, 10],
		[4, 16, 15],
		[4, 17, 10],
		[4, 18, 10],
		[4, 19, 10],
		[4, 20, 15],
		[4, 21, 10],
		[4, 22, 10],
		[4, 23, 15],
		[4, 24, 10],

		[5, 0, 4],
		[5, 1, 10],
		[5, 2, 10],
		[5, 3, 15],
		[5, 4, 15],
		[5, 5, 10],
		[5, 6, 15],
		[5, 7, 10],
		[5, 8, 10],
		[5, 9, 15],
		[5, 10, 10],
		[5, 11, 15],
		[5, 12, 10],
		[5, 13, 15],
		[5, 14, 4],
		[5, 15, 15],
		[5, 16, 10],
		[5, 17, 15],
		[5, 18, 10],
		[5, 19, 15],
		[5, 20, 10],
		[5, 21, 4],
		[5, 22, 15],
		[5, 23, 15],
		[5, 24, 10],

		[6, 0, 10],
		[6, 1, 15],
		[6, 2, 10],
		[6, 3, 15],
		[6, 4, 10],
		[6, 5, 10],
		[6, 6, 15],
		[6, 7, 10],
		[6, 8, 10],
		[6, 9, 15],
		[6, 10, 10],
		[6, 11, 15],
		[6, 12, 10],
		[6, 13, 15],
		[6, 14, 10],
		[6, 15, 10],
		[6, 16, 4],
		[6, 17, 4],
		[6, 18, 15],
		[6, 19, 15],
		[6, 20, 10],
		[6, 21, 10],
		[6, 22, 15],
		[6, 23, 15],
		[6, 24, 10],

		[7, 0, 4],
		[7, 1, 10],
		[7, 2, 10],
		[7, 3, 10],
		[7, 4, 15],
		[7, 5, 10],
		[7, 6, 15],
		[7, 7, 10],
		[7, 8, 15],
		[7, 9, 10],
		[7, 10, 10],
		[7, 11, 4],
		[7, 12, 15],
		[7, 13, 10],
		[7, 14, 10],
		[7, 15, 15],
		[7, 16, 10],
		[7, 17, 10],
		[7, 18, 10],
		[7, 19, 15],
		[7, 20, 15],
		[7, 21, 4],
		[7, 22, 15],
		[7, 23, 10],
		[7, 24, 10],

	];
	data = data.map(function(item) {
		return [item[1], item[0], item[2]];
	});

	option = {
		tooltip: {
			position: 'top',
			formatter: function(params) {	//	params为data数据集
				return '<' + params.value[2] * 5 + '%' + '&nbsp&nbsp' + '[' + hours[params.value[0]] + '-' + days[params.value[1]] + ']';
			},
			padding: 20,
			borderColor: '#4FC1E9',
			borderWidth: '2',
			textStyle: {
				color: '#4FC1E9',
				fontSize: 40,
			},
		},

		grid: {
			left: 1,
			right: 300,
			width: 1300,
			containLabel: true
		},
		xAxis: {
			type: 'category',
			data: hours,
			boundaryGap: false,
			splitLine: {
				show: false,
			},
			axisLine: {
				show: false
			},
			axisLabel: {
				margin: 20,
				color: '#4FC1E9',
				fontSize: 24,
			},
			axisTick: {
				show: false
			}
		},
		yAxis: {
			type: 'category',
			data: days,
			axisLine: {
				show: false
			},
			axisLabel: {
				margin: 40,
				color: '#4FC1E9',
				fontSize: 24,
			},
			axisTick: {
				show: false
			}
		},
		series: [{
			type: 'scatter',
			symbolSize: function(val) {
				return val[2] * 2;
			},
			itemStyle: {
				color: ['#4FC1E9', '#A0D468'],
			},
			data: data,
			animationDelay: function(idx) {
				return idx * 5;
			}
		}]
	};;
	if(option && typeof option === "object") {
		myChart.setOption(option, true);
	}
};
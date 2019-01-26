linechartL2();
scatterchartL2();

function linechartL2() {
	var myChart = echarts.init(document.getElementById("linechartDomL2"));
	var option = {
		//		dataset:{
		//			source:[['resource_name','resource_name','resource_rate'],
		//			['resource_name','1/2','57'],
		//			['resource_name','1/2','56'],
		//			['resource_name','1/2','56'],
		//			['resource_name','1/2','57'],
		//			]
		//		}
		dataset: {
			source: [
				['CPU222', '内存', '存储', '带宽', 'date'],
				[55, 52, 57, 62, '1/8'],
				[56, 51, 58, 61, '1/8'],
				[55, 52, 57, 62, '1/8'],
				[55, 52, 57, 62, '1/8'],
				[55, 52, 57, 62, '1/8'],
				[55, 52, 57, 62, '1/8'],

			]
		},

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
			data: ['CPU333', '内存', '存储', '带宽', ]
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
				name: 'CPU22211',
				type: 'line',
				smooth: true,
				data: [55, 56, 55, 55, 55, 55, 55],
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
				name: '内存',
				type: 'line',
				smooth: true,
				data: [52, 51, 52, 51, 51, 51, 51],
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
				name: '存储',
				type: 'line',
				smooth: true,
				data: [57, 58, 57, 57, 57, 57, 57],
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
				name: '带宽',
				type: 'line',
				smooth: true,
				data: [62, 61, 62, 62, 62, 62, 62],
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

	var hours = ['R01', 'R02', 'R03', 'R04', 'R05', 'R06', 'R07',
		'R08', 'R09', 'R10', 'R11', 'R12',
		'R13', 'R14', 'R15', 'R16', 'R17', 'R18',
		'R19', 'R20'
	];
	var days = ['01', '02', '03',
		'04', '05', '06', '07', '08', '09', '10'
	];

	var data = [
		[0, 0, 10],
		[0, 1, 2],
		[0, 2, 16],
		[0, 3, 13],
		[0, 4, 4],
		[0, 5, 10],
		[0, 6, 4],
		[0, 7, 16],
		[0, 8, 15],
		[0, 9, 15],
		[0, 10, 16],
		[0, 11, 13],
		[0, 12, 13],
		[0, 13, 18],
		[0, 14, 17],
		[0, 15, 10],
		[0, 16, 18],
		[0, 17, 18],
		[0, 18, 17],
		[0, 19, 14],
		[1, 0, 10],
		[1, 1, 18],
		[1, 2, 12],
		[1, 3, 11],
		[1, 4, 3],
		[1, 5, 18],
		[1, 6, 18],
		[1, 7, 15],
		[1, 8, 16],
		[1, 9, 13],
		[1, 10, 18],
		[1, 11, 17],
		[1, 12, 12],
		[1, 13, 10],
		[1, 14, 15],
		[1, 15, 14],
		[1, 16, 15],
		[1, 17, 2],
		[1, 18, 13],
		[1, 19, 18],
		[2, 0, 18],
		[2, 1, 16],
		[2, 2, 17],
		[2, 3, 16],
		[2, 4, 18],
		[2, 5, 15],
		[2, 6, 1],
		[2, 7, 17],
		[2, 8, 13],
		[2, 9, 11],
		[2, 10, 18],
		[2, 11, 15],
		[2, 12, 15],
		[2, 13, 10],
		[2, 14, 18],
		[2, 15, 16],
		[2, 16, 16],
		[2, 17, 15],
		[2, 18, 16],
		[2, 19, 13],
		[3, 0, 16],
		[3, 1, 12],
		[3, 2, 15],
		[3, 3, 18],
		[3, 4, 11],
		[3, 5, 5],
		[3, 6, 13],
		[3, 7, 10],
		[3, 8, 18],
		[3, 9, 11],
		[3, 10, 15],
		[3, 11, 18],
		[3, 12, 16],
		[3, 13, 11],
		[3, 14, 16],
		[3, 15, 18],
		[3, 16, 18],
		[3, 17, 18],
		[3, 18, 15],
		[3, 19, 16],
		[4, 0, 17],
		[4, 1, 3],
		[4, 2, 17],
		[4, 3, 18],
		[4, 4, 3],
		[4, 5, 15],
		[4, 6, 13],
		[4, 7, 12],
		[4, 8, 18],
		[4, 9, 1],
		[4, 10, 18],
		[4, 11, 18],
		[4, 12, 16],
		[4, 13, 3],
		[4, 14, 18],
		[4, 15, 17],
		[4, 16, 4],
		[4, 17, 15],
		[4, 18, 17],
		[4, 19, 18],
		[5, 0, 14],
		[5, 1, 18],
		[5, 2, 2],
		[5, 3, 2],
		[5, 4, 18],
		[5, 5, 2],
		[5, 6, 16],
		[5, 7, 16],
		[5, 8, 18],
		[5, 9, 17],
		[5, 10, 17],
		[5, 11, 14],
		[5, 12, 15],
		[5, 13, 13],
		[5, 14, 18],
		[5, 15, 18],
		[5, 16, 13],
		[5, 17, 15],
		[5, 18, 1],
		[5, 19, 18],
		[6, 0, 16],
		[6, 1, 16],
		[6, 2, 11],
		[6, 3, 18],
		[6, 4, 15],
		[6, 5, 11],
		[6, 6, 17],
		[6, 7, 5],
		[6, 8, 13],
		[6, 9, 10],
		[6, 10, 13],
		[6, 11, 13],
		[6, 12, 4],
		[6, 13, 1],
		[6, 14, 17],
		[6, 15, 3],
		[6, 16, 10],
		[6, 17, 18],
		[6, 18, 4],
		[6, 19, 18],
		[7, 0, 15],
		[7, 1, 3],
		[7, 2, 15],
		[7, 3, 11],
		[7, 4, 15],
		[7, 5, 18],
		[7, 6, 17],
		[7, 7, 5],
		[7, 8, 17],
		[7, 9, 16],
		[7, 10, 18],
		[7, 11, 17],
		[7, 12, 2],
		[7, 13, 18],
		[7, 14, 17],
		[7, 15, 14],
		[7, 16, 15],
		[7, 17, 15],
		[7, 18, 18],
		[7, 19, 17],
		[8, 0, 17],
		[8, 1, 16],
		[8, 2, 4],
		[8, 3, 10],
		[8, 4, 11],
		[8, 5, 17],
		[8, 6, 14],
		[8, 7, 15],
		[8, 8, 14],
		[8, 9, 15],
		[8, 10, 2],
		[8, 11, 2],
		[8, 12, 14],
		[8, 13, 16],
		[8, 14, 4],
		[8, 15, 17],
		[8, 16, 17],
		[8, 17, 11],
		[8, 18, 17],
		[8, 19, 17],
		[9, 0, 15],
		[9, 1, 4],
		[9, 2, 17],
		[9, 3, 12],
		[9, 4, 18],
		[9, 5, 18],
		[9, 6, 18],
		[9, 7, 15],
		[9, 8, 18],
		[9, 9, 15],
		[9, 10, 18],
		[9, 11, 2],
		[9, 12, 16],
		[9, 13, 10],
		[9, 14, 10],
		[9, 15, 17],
		[9, 16, 17],
		[9, 17, 11],
		[9, 18, 16],
		[9, 19, 17],

	];
	data = data.map(function(item) {
		return [item[1], item[0], item[2]];
	});

	option = {
		tooltip: {
			position: 'top',
			formatter: function(params) {
				return '<' + params.value[2] * 4 + '%' + '&nbsp&nbsp' + '[' + hours[params.value[0]] + '-' + days[params.value[1]] + ']';
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
				return idx * 4;
			}
		}]
	};;
	if(option && typeof option === "object") {
		myChart.setOption(option, true);
	}
}
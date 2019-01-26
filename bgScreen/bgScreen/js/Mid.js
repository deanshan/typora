piechartLMid();
piechartRMid();
radarchartMid();
circlechartMid();

//<<!--piechartL-- >
function piechartLMid() {

	var dom = document.getElementById("piechartDomMidL");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;

	option = {
		grid: {
			left: '0',
		},
		series: [{
			type: 'pie',
			radius: ['50%', '60%'],
			labelLine: {
				normal: {
					show: false
				}
			},

			data: [{
					value: 52,
					itemStyle: {
						color: '#4FC1E9'
					}
				},
				{
					value: 48,
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
// <<!--piechartR-- >
function piechartRMid() {
	var dom = document.getElementById("piechartDomMidR");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	option = {
		visualMap: {
			show: false,
			min: 80,
			max: 600,
			inRange: {
				colorLightness: [0, 1]
			}
		},
		grid: {
			width: 200,
		},
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: '85%',
			data: [
				{ value: 235, name: '视频广告' },
				{ value: 274, name: '联盟广告' },
				{ value: 310, name: '邮件营销' },
				{ value: 335, name: '直接访问' },
				{ value: 400, name: '搜索引擎' }
			],
			roseType: 'angle',
			label: {
				show: false
			},

			itemStyle: {
				normal: {
					color: '#4FC1E9',
					shadowBlur: 200,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		}]
	};;
	if(option && typeof option === "object") {
		myChart.setOption(option, true);
	}
};
//<<!--radarchart-- >
function radarchartMid() {
	var dom = document.getElementById("radarchartDomMid");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	option = {
		radar: {
			// shape: 'circle',
			name: {
				//				textStyle: {
				color: '#fff',
				borderRadius: 3,
				padding: [3, 5],
				fontFamily: 'RTWSYueGoTrial-Regular',
				fontSize: 32,
				color: '#4FC0E9',
				fontWeight:'bold',
				//				},

			},
			indicator: [
				{ name: 'IT服务', max: 100 },
				{ name: '应用软件', max: 100 },
				{ name: '人工智能', max: 100 },
				{ name: '云计算', max: 100 },
				{ name: '大数据', max: 100 },
				{ name: '系统集成', max: 100 }
			],
			axisLine: {
				lineStyle: {
					width: 1,
					color: '#4FC0E9',
					//                      opacity:0.5,
				},

			},
			splitLine: {
				lineStyle: {
					color: '#4FC0E9',
					opacity: 0.2,
					width: 4
				}
			},
			splitArea: {
				show: false
			}
		},
		series: [{
			type: 'radar',
			// areaStyle: {normal: {}},
			data: [{
					value: [97, 97, 67, 93, 87, 99],
					symbol: 'circle',
					symbolSize: 20,
					itemStyle: {
						normal: {
							color: '#4FC0E9',
						}
					},
					//					label: {
					//						show: true,
					//						textStyle: {
					//							fontSize: 30,
					//						}
					//					},
					lineStyle: {
						width: 6,
					},
					areaStyle: {
						normal: {
							opacity: 0.1,
							color: '#4FC0E9',
						}
					}
				},
				//				{
				//					value: [61, 70, 52, 64, 73,60],
				//					symbol: 'circle',
				//					symbolSize: 20,
				//					itemStyle: {
				//						normal: {
				//							color: '#BDE8FF',
				//						}
				//					},
				//					lineStyle: {
				//						width: 6,
				//					},
				//					areaStyle: {
				//						normal: {
				//							opacity: 0.1,
				//							color: '#4FC0E9',
				//						}
				//					}
				//				}

			]
		}]
	};
	if(option && typeof option === "object") {
		myChart.setOption(option, true);
	}
};

// <!--circlechart-- >
function circlechartMid() {

	var dom = document.getElementById("circlechartDomMid");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	option = {
		angleAxis: {
			max: 10000,
			axisLabel: {
				show: true,
				fontSize: 20
			},
			axisLine: {
				lineStyle: {
					color: '#4FC1E9',
					width: 6,
					opacity: 0.2
				}
			},
			splitLine: {
				lineStyle: {
					color: '#4FC1E9',
					width: 2,
					opacity: 0.2
				}
			},
		},

		radiusAxis: {
			type: 'category',
			data: ['其他', '教育', '金融', '数据', '医疗', '政务'],
			axisLine: {
				show: false,
			},
			splitLine: {
				show: false
			},
			axisLabel: {
				color: '#4FC1E9',
				fontSize: 20,
				fontFamily: 'RTWSYueGoTrial-Regular',
			},

		},
		polar: {},
		series: [{
			type: 'bar',
			barWidth: 10,
			itemStyle: {
				color: '#4FC1E9',
			},
			data: [2855, 3532, 4998, 5782, 6553, 7315, ],
			coordinateSystem: 'polar',
			name: 'A',
			stack: 'a',

		}],
	};
	if(option && typeof option === "object") {
		myChart.setOption(option, true);
	}
}
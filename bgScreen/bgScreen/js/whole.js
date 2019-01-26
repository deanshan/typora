//-------------------------
//---------PAGE L1---------
//-------------------------

//<< <!--piechart-- >
function piechartL1() {

	var dom = document.getElementById("piechartDomL1");
	var myChart = echarts.init(dom);

	option = {
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: ['60%', '70%'],
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
	}
};

//<!--barchart-->
function barchartL1() {

	var dom = document.getElementById("barchartDomL1");
	var myChart = echarts.init(dom);

	option = {
		tooltip: {
			trigger: 'axis',
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
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: {
			type: 'value',
			boundaryGap: [0, 0.01],
			max: 100,
			axisLine: {
				show: false,
			},
			splitLine: {
				show: false,
			},
			axisTick: {
				show: false,
			},
			axisLabel: {
				color: '#4FC1E9',
				fontFamily: 'RTWSYueGoTrial-Regular',
				fontWeight: 'bold',
				fontSize: '20',
			}
		},
		yAxis: {
			type: 'category',
			data: ['SH1_R04-01-7', 'SH1_R01-04-3', 'SH1_R02-01-2', 'SH1_R04-05-11', 'SH1_R03-03-6', ],
			axisLine: {
				show: false,
			},
			splitLine: {
				show: false,
			},
			axisTick: {
				show: false,
			},
			axisLabel: {
				color: '#4FC1E9',
				fontFamily: 'RTWSYueGoTrial-Regular',
				fontWeight: 'bold',
				fontSize: '20',
			}

		},
		series: [{
			type: 'bar',
			barCategoryGap: 46,
			data: [57, 60, 60, 65, 69, ],
			itemStyle: {
				color: '#4FC1E9'
			}
		}, ]
	};
	if(option && typeof option === "object") {
		myChart.setOption(option, true);
	}
};
//<<!--wave -->
function piechartWave() {
	var wave = (function() {
		var ctx;
		var waveImage;
		var canvasWidth;
		var canvasHeight;
		var needAnimate = false;

		function init(callback) {
			var wave = document.getElementById('wave');
			var canvas = document.createElement('canvas');
			if(!canvas.getContext) return;
			ctx = canvas.getContext('2d');
			canvasWidth = wave.offsetWidth;
			canvasHeight = wave.offsetHeight;
			canvas.setAttribute('width', canvasWidth);
			canvas.setAttribute('height', canvasHeight);
			wave.appendChild(canvas);
			waveImage = new Image();
			waveImage.onload = function() {
				waveImage.onload = null;
				callback();
			}
			waveImage.src = 'img/wave.png';
		}

		function animate() {
			var waveX = 0;
			var waveY = 0;
			var waveX_min = -203;
			var waveY_max = canvasHeight * 0.52;
			var requestAnimationFrame =
				window.requestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function(callback) { window.setTimeout(callback, 1000 / 60); };

			function loop() {
				ctx.clearRect(0, 0, canvasWidth, canvasHeight);
				if(!needAnimate) return;
				if(waveY < waveY_max) waveY += 1.5;
				if(waveX < waveX_min) waveX = 0;
				else waveX -= 3;

				ctx.globalCompositeOperation = 'source-over';
				ctx.beginPath();
				ctx.arc(canvasWidth / 2, canvasHeight / 2, canvasHeight / 2, 0, Math.PI * 2, true);
				ctx.closePath();
				ctx.fill();

				ctx.globalCompositeOperation = 'source-in';
				ctx.drawImage(waveImage, waveX, canvasHeight - waveY);

				requestAnimationFrame(loop);
			}
			loop();
		}

		function start() {
			if(!ctx) return init(start);
			needAnimate = true;
			setTimeout(function() {
				if(needAnimate) animate();
			}, 500);
		}

		function stop() {
			needAnimate = false;
		}
		return { start: start, stop: stop };
	}());
	wave.start();
};

//-------------------------
//---------PAGE L2---------
//-------------------------

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

//-------------------------
//---------PAGE MID---------
//-------------------------

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
					value: 96,
					itemStyle: {
						color: '#4FC1E9'
					}
				},
				{
					value: 4,
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
				textStyle: {
					color: '#fff',
					borderRadius: 3,
					padding: [3, 5],
					fontFamily: 'RTWSYueGoTrial-Regular',
					fontSize: 30,
					color: '#4FC0E9',
				}
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
					value: [95, 93, 67, 83, 85, 99],
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
//
//// <!--circlechart-- >
function circlechartMid() {

	var dom = document.getElementById("circlechartDomMid");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	option = {
		tooltip: {
			show: true,
		},
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
};

function midMap() {

	var dom = document.getElementById("mapchartDomMid");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	var geoCoordMap = {
		'上海': [121.4648, 31.2891],
		//	'上海': [0, 0],
		'泰安': [117.0264, 36.0516],
		'南宁': [108.479, 23.1152],
		'柳州': [109.3799, 24.9774],
		'扬州': [119.4653, 32.8162],
		'金华': [120.0037, 29.1028],
		'江阴': [120.2915, 31.9260],

		'北京': [116.4551, 40.2539],
		'成都': [103.9526, 30.7617],
		'襄阳': [112.1273, 32.0170],
		'无锡': [120.3442, 31.5527],
		'温州': [120.498, 27.8119],
		'宁波': [121.5967, 29.6466],
		'杭州': [119.5313, 29.8773],
		'东阳': [120.2426, 29.2940],
		'嘉兴': [120.9155, 30.6354],
		'镇江': [119.4763, 31.9702],
		'高安': [115.3848, 28.4236],

		'广州': [113.5107, 23.2196],
		'武汉': [114.3896, 30.6628],
		'丰城': [115.7780, 28.1663],
		'嵊州': [120.8374, 29.5690],
		'张家口': [115.1477, 40.8527],
		'霍尔果斯': [80.4202, 44.2367],
		'湖州': [119.8608, 30.7782],
		'深圳': [114.5435, 22.5439],
		'佛山': [112.8955, 23.1097],
		'台州': [121.1353, 28.6688],
		'苏州': [120.6519, 31.3989],
		'湘潭': [112.5439, 27.7075],
		'铜陵': [117.8196, 30.9514],
		'宜昌': [111.2931, 30.6976],
		'福州': [119.4543, 25.9222],
		'济南': [117.1582, 36.8701],
		'东营': [118.7073, 37.5513],
		'西安': [109.1162, 34.2004],
		'廊坊': [116.521, 39.0509],
		'海口': [110.3893, 19.8516],
		'泸州': [105.4485, 28.8779],
		'日照': [119.2786, 35.5023],
		'滨州': [117.8174, 37.4963],
		'昆明': [102.9199, 25.4663],
		'随州': [113.3882, 31.6962],
		'济宁': [116.8286, 35.3375],
		'烟台': [120.7397, 37.5128],
		'潍坊': [119.0918, 36.524],
		'菏泽': [115.6201, 35.2057],
		'淄博': [118.0371, 36.6064],
		'威海': [121.9482, 37.1393],
		'枣庄': [117.323, 34.8926],
		'临沂': [118.3118, 35.2936],
		'青岛': [120.4651, 36.3373],
		'莱芜': [117.6526, 36.2714],
		'德州': [116.6858, 37.2107],
		'南京': [118.8062, 31.9208],
		'贵阳': [106.6992, 26.7682],
		'广安': [106.6372, 30.4629],
		'宜春': [114.4195, 27.8231],
		'浏阳': [113.6511, 28.1721],
		'德阳': [104.4061, 31.1358],
		'达州': [107.4717, 31.2145],
		'什邡': [104.1732, 31.1351],
		'樟树': [115.5506, 28.0629],
		'珠海': [113.7305, 22.1155],
		'眉山': [103.8588, 30.0842],
		'呼和浩特': [111.4124, 40.4901],
		'宜兴': [119.82931, 31.343204],
		'绍兴': [120.564, 29.7565],
		'江门': [112.6318, 22.1484],
		'重庆': [107.7539, 30.1904],
		'衢州': [118.6853, 28.8666],
		'泉州': [118.3228, 25.1147],
		'银川': [106.3586, 38.1775],
		'舟山': [122.2559, 30.2234],
		'鄂尔多斯': [108.9734, 39.2487],
		'中卫': [105.2035, 37.5063],
		'长沙': [113.0823, 28.2568],

		'东莞': [113.8953, 22.901],
		'中山': [113.4229, 22.478],
		'临汾': [111.4783, 36.1615],
		'丹东': [124.541, 40.4242],
		'丽水': [119.5642, 28.1854],
		'乌鲁木齐': [87.9236, 43.5883],
		'保定': [115.0488, 39.0948],
		'兰州': [103.5901, 36.3043],
		'包头': [110.3467, 41.4899],
		'北海': [109.314, 21.6211],
		'南昌': [116.0046, 28.6633],
		'南通': [121.1023, 32.1625],
		'厦门': [118.1689, 24.6478],
		'合肥': [117.29, 32.0581],
		'咸阳': [108.4131, 34.8706],
		'哈尔滨': [127.9688, 45.368],
		'唐山': [118.4766, 39.6826],
		'大同': [113.7854, 39.8035],
		'大连': [122.2229, 39.4409],
		'天津': [117.4219, 39.4189],
		'太原': [112.3352, 37.9413],
		'宝鸡': [107.1826, 34.3433],
		'宿迁': [118.5535, 33.7775],
		'常州': [119.4543, 31.5582],
		'延安': [109.1052, 36.4252],
		'徐州': [117.5208, 34.3268],
		'惠州': [114.6204, 23.1647],
		'承德': [117.5757, 41.4075],
		'拉萨': [91.1865, 30.1465],
		'株洲': [113.5327, 27.0319],
		'汕头': [117.1692, 23.3405],
		'沈阳': [123.1238, 42.1216],
		'沧州': [116.8286, 38.2104],
		'河源': [114.917, 23.9722],
		'泰州': [120.0586, 32.5525],
		'淮安': [118.927, 33.4039],
		'清远': [112.9175, 24.3292],
		'渭南': [109.7864, 35.0299],
		'玉溪': [101.9312, 23.8898],
		'盐城': [120.2234, 33.5577],
		'盘锦': [121.9482, 41.0449],
		'石家庄': [114.4995, 38.1006],
		'秦皇岛': [119.2126, 40.0232],
		'聊城': [115.9167, 36.4032],
		'肇庆': [112.1265, 23.5822],
		'营口': [122.4316, 40.4297],
		'葫芦岛': [120.1575, 40.578],
		'衡水': [115.8838, 37.7161],
		'西宁': [101.4038, 36.8207],
		'连云港': [119.1248, 34.552],
		'邢台': [114.8071, 37.2821],
		'邯郸': [114.4775, 36.535],
		'郑州': [113.4668, 34.6234],
		'铜川': [109.0393, 35.1947],
		'长春': [125.8154, 44.2584],
		'长沙': [113.0823, 28.2568],
		'长治': [112.8625, 36.4746],
		'阳泉': [113.4778, 38.0951],
		'韶关': [113.7964, 24.7028]

	};

	var combineCloudData = [
		[{ name: '上海' }, { name: '上海', value: 400 }],
		[{ name: '上海' }, { name: '中卫', value: 300 }],
		[{ name: '上海' }, { name: '北京', value: 300 }],
	];

	var publicCloudData = [
		[{ name: '泰安' }, { name: '泰安', value: 50 }],
		[{ name: '南宁' }, { name: '南宁', value: 50 }],
		[{ name: '扬州' }, { name: '扬州', value: 50 }],
		[{ name: '金华' }, { name: '金华', value: 50 }],
		[{ name: '江阴' }, { name: '江阴', value: 50 }],
		[{ name: '襄阳' }, { name: '襄阳', value: 50 }],
		[{ name: '无锡' }, { name: '无锡', value: 50 }],
		[{ name: '宁波' }, { name: '宁波', value: 50 }],
		[{ name: '东阳' }, { name: '东阳', value: 50 }],
		[{ name: '嘉兴' }, { name: '嘉兴', value: 50 }],
		[{ name: '镇江' }, { name: '镇江', value: 50 }],
		[{ name: '高安' }, { name: '高安', value: 50 }],
		[{ name: '武汉' }, { name: '武汉', value: 50 }],
		[{ name: '丰城' }, { name: '丰城', value: 50 }],
		[{ name: '嵊州' }, { name: '嵊州', value: 50 }],
		[{ name: '张家口' }, { name: '张家口', value: 50 }],
		[{ name: '霍尔果斯' }, { name: '霍尔果斯', value: 50 }],
		[{ name: '湖州' }, { name: '湖州', value: 50 }],
		[{ name: '佛山' }, { name: '佛山', value: 50 }],
		[{ name: '台州' }, { name: '台州', value: 50 }],
		[{ name: '苏州' }, { name: '苏州', value: 50 }],
		[{ name: '铜陵' }, { name: '铜陵', value: 50 }],
		[{ name: '福州' }, { name: '福州', value: 50 }],
		[{ name: '济南' }, { name: '济南', value: 50 }],
		[{ name: '东营' }, { name: '东营', value: 50 }],
		[{ name: '廊坊' }, { name: '廊坊', value: 50 }],
		[{ name: '泸州' }, { name: '泸州', value: 50 }],
		[{ name: '日照' }, { name: '日照', value: 50 }],
		[{ name: '滨州' }, { name: '滨州', value: 50 }],
		[{ name: '昆明' }, { name: '昆明', value: 50 }],
		[{ name: '随州' }, { name: '随州', value: 50 }],
		[{ name: '济宁' }, { name: '济宁', value: 50 }],
		[{ name: '潍坊' }, { name: '潍坊', value: 50 }],
		[{ name: '烟台' }, { name: '烟台', value: 50 }],
		[{ name: '菏泽' }, { name: '菏泽', value: 50 }],
		[{ name: '淄博' }, { name: '淄博', value: 50 }],
		[{ name: '威海' }, { name: '威海', value: 50 }],
		[{ name: '枣庄' }, { name: '枣庄', value: 50 }],
		[{ name: '临沂' }, { name: '临沂', value: 50 }],
		[{ name: '青岛' }, { name: '青岛', value: 50 }],
		[{ name: '莱芜' }, { name: '莱芜', value: 50 }],
		[{ name: '德州' }, { name: '德州', value: 50 }],
		[{ name: '南京' }, { name: '南京', value: 50 }],
		[{ name: '贵阳' }, { name: '贵阳', value: 50 }],
		[{ name: '广安' }, { name: '广安', value: 50 }],
		[{ name: '宜春' }, { name: '宜春', value: 50 }],
		[{ name: '浏阳' }, { name: '浏阳', value: 50 }],
		[{ name: '德阳' }, { name: '德阳', value: 50 }],
		[{ name: '达州' }, { name: '达州', value: 50 }],
		[{ name: '什邡' }, { name: '什邡', value: 50 }],
		[{ name: '樟树' }, { name: '樟树', value: 50 }],
		[{ name: '珠海' }, { name: '珠海', value: 50 }],
		[{ name: '眉山' }, { name: '眉山', value: 50 }],
		[{ name: '呼和浩特' }, { name: '呼和浩特', value: 50 }],
		[{ name: '宜兴' }, { name: '宜兴', value: 50 }],
		[{ name: '绍兴' }, { name: '绍兴', value: 50 }],
		[{ name: '江门' }, { name: '江门', value: 50 }],
		[{ name: '重庆' }, { name: '重庆', value: 50 }],
		[{ name: '衢州' }, { name: '衢州', value: 50 }],
		[{ name: '泉州' }, { name: '泉州', value: 50 }],
		[{ name: '银川' }, { name: '银川', value: 50 }],
		[{ name: '舟山' }, { name: '舟山', value: 50 }],
		[{ name: '鄂尔多斯' }, { name: '鄂尔多斯', value: 50 }],
		[{ name: '长沙' }, { name: '长沙', value: 50 }],
	];

	var privateCloudData = [
		[{ name: '上海' }, { name: '柳州', value: 200 }],
		[{ name: '上海' }, { name: '扬州', value: 200 }],
		[{ name: '上海' }, { name: '成都', value: 200 }],
		[{ name: '上海' }, { name: '广州', value: 200 }],
		[{ name: '上海' }, { name: '深圳', value: 200 }],
		[{ name: '上海' }, { name: '湘潭', value: 200 }],
		[{ name: '上海' }, { name: '西安', value: 200 }],
		[{ name: '上海' }, { name: '海口', value: 200 }],

	];

	var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

	var convertData = function(data) {
		var res = [];
		for(var i = 0; i < data.length; i++) {
			var dataItem = data[i];
			var fromCoord = geoCoordMap[dataItem[0].name];
			var toCoord = geoCoordMap[dataItem[1].name];
			if(fromCoord && toCoord) {
				res.push({
					fromName: dataItem[0].name,
					toName: dataItem[1].name,
					coords: [fromCoord, toCoord]
				});
			}
		}
		return res;
	};

	var color = ['#BDE8FF', '#4fc1e9', '#FFCE54'];
	var series = [];
	[
		['私有云', privateCloudData],
		['公有云', publicCloudData],
		['混合云', combineCloudData],

	].forEach(function(item, i) {
		series.push({
			name: item[0],
			type: 'lines',
			zlevel: 1,
			effect: {
				show: true,
				period: 2,
				trailLength: 0.6,
				color: '#BDE8FF',
				symbolSize: 14
			},
			lineStyle: {
				normal: {
					color: color[i],
					width: 0,
					curveness: 0.2
				}
			},
			data: convertData(item[1])
		}, {
			name: item[0],
			type: 'lines',
			zlevel: 2,

			lineStyle: {
				normal: {
					color: color[i],
					width: 2,
					opacity: 0.2,
					curveness: 0.2
				}
			},
			data: convertData(item[1])
		}, {
			name: item[0],
			type: 'effectScatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			rippleEffect: {
				brushType: 'stroke'
			},
			label: {
				normal: {
					show: false,
					position: 'right',
					formatter: '{b}',
					fontSize: 24,
					color: 'rgba(101,109,120,0.8)',
				},
			},
			symbolSize: function(val) {
				return val[2] / 8;
			},
			itemStyle: {
				normal: {
					color: color[i]
				}
			},
			data: item[1].map(function(dataItem) {
				return {
					name: dataItem[1].name,
					value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
				};
			})
		});
	});

	option = {
		backgroundColor: 'transparent',

		tooltip: {
			trigger: 'item',
			padding: 20,
			borderColor: '#4FC1E9',
			borderWidth: '2',
			textStyle: {
				color: '#4FC1E9',
				fontSize: 40,
			},
			formatter: function(params) {
				return params.seriesName + '  ' + params.name;
			}
		},

		geo: {
			map: 'china',
			label: {
				emphasis: {
					show: false
				}
			},
			roam: true,
			itemStyle: {
				normal: {
					areaColor: 'rgba(79,193,233,0.15)',
					borderColor: '#4FC1E9',
					borderWidth: 2
				},
				emphasis: {
					areaColor: '#4FC1E9'
				}
			}
		},
		series: series
	};;
	if(option && typeof option === "object") {
		myChart.setOption(option, true);
	}
};
//
//-------------------------
//---------PAGE R2---------
//-------------------------
//
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
				margin: 20

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
				margin: 20
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

//-------------------------
//---------MID MAP---------
//-------------------------
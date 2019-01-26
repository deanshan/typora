piechartL1();
barchartL1();
piechartWave();

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
		dataset: {
			source: [
				['machineNo.', 'machineUsage'],
				['SH1_R04-01-07', '57'],
				['SH1_R02-01-02', '60'],
				['SH1_R01-04-03', '60'],
				['SH1_R04-05-11', '65'],
				['SH1_R03-03-06', '69'],
			]
		},
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
		itemStyle: {
			color: '#4FC1E9'
		},
		xAxis: {
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
			encode: {
				x: 'machineUsage',
				y: 'machineNo.'
			},
			barCategoryGap: 46,
		}, ]
	};;
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
				function(callback) {
					window.setTimeout(callback, 1000 / 60);
				};

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
		return {
			start: start,
			stop: stop
		};
	}());
	wave.start();
};
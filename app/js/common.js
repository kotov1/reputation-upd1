$(function() {

	$(".js-tab").click(function(e) {

		e.preventDefault;

		$(".js-tab").removeClass("js-tab--active").eq($(this).index()).addClass("js-tab--active");

		$(".js-box").hide().eq($(this).index()).fadeIn("normal");
	}).eq(0).addClass("js-tab--active");

	$(".upd-ui-header").click(function(){
		if( $(this).hasClass('ui-state-active') ) {
			$(this).next('.upd-ui-content').slideUp();
			$(this).removeClass('ui-state-active');
		} else {
			$('.upd-ui-content').slideUp();
			$(this).next('.upd-ui-content').slideDown();
			$(this).addClass('ui-state-active');
		}
	});

});

// функция генерации случайных чисел для построения графиков
function randomScalingFactor(min, max) {
	var rand = min + Math.random() * (max + 1 - min);
	rand = Math.floor(rand);
	return rand;
}
// генерирую массивы случайных чисел
var dataArray1 = [],
dataArray2 = [],
dataArray3 = [],
dataArray4 = [];
for(let i = 0; i < 12; ++i) {
	dataArray1.push(randomScalingFactor(-60, 200));
}
for(let i = 0; i < 12; ++i) {
	dataArray2.push(randomScalingFactor(-60, 200));
}
for(let i = 0; i < 12; ++i) {
	dataArray3.push(randomScalingFactor(-60, 200));
}
for(let i = 0; i < 12; ++i) {
	dataArray4.push(randomScalingFactor(-60, 200));
}


var lineChartData = {
	labels: [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
	datasets: [{
		borderColor: "rgb(74,144,226)",
		borderWidth: 2,
		pointRadius: 0,
		fill: false,
		data: dataArray1
	}, {
		borderColor: "rgb(45,131,232)",
		borderWidth: 2,
		pointRadius: 0,
		fill: false,
		data: dataArray2
	}, {
		borderColor: "rgb(126,211,33)",
		borderWidth: 2,
		pointRadius: 0,
		fill: false,
		data: dataArray3
	}, {
		borderColor: "rgb(208,2,27)",
		borderWidth: 2,
		pointRadius: 0,
		fill: false,
		data: dataArray4
	}]
};

window.onload = function() {
	var ctx1 = document.getElementById('js-chart1').getContext('2d');

	window.myLine = Chart.Line(ctx1, {
		data: lineChartData,
		options: {
			responsive: true,
			maintainAspectRatio: false,
			hoverMode: 'index',
			stacked: true,
			legend: {
				display: false
			},
			title: {
				display: false
			},
			scales: {
				yAxes: [{
					type: 'linear',
					display: true,
					position: 'left',
					ticks: {
						beginAtZero: true
				},
					id: 'y-axis-1',
				}, {
					type: 'linear',
					display: false,
					position: 'right',
					id: 'y-axis-2',
				}],
			}
		}
	});

	Chart.defaults.global.defaultFontSize = 12;
	Chart.defaults.global.defaultFontFamily = "'Roboto', sans-serif";
	Chart.defaults.global.defaultFontColor = 'rgb(102, 102, 102)';

};
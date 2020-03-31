(function($){

	"use strict";

	$(document).ready(function() {

		$('.core-chart').each(function() {
			$(this).appear(function() {

				var ctx = $(this);
				var myChart = new Chart(ctx, {
					type: 'bar',
					data: {
						labels: ["January", "February", "March", "April", "May", "June"],
						datasets: [{
							data: [12, 19, 3, 5, 2, 3],
							backgroundColor: [
								'rgba(74, 144, 226, 0.2)',
								'rgba(74, 144, 226, 0.2)',
								'rgba(74, 144, 226, 0.2)',
								'rgba(74, 144, 226, 0.2)',
								'rgba(74, 144, 226, 0.2)',
								'rgba(74, 144, 226, 0.2)',
							],
							borderWidth: 1
						}]
					},
					options: {
						legend: {
							display: false
						},
						scales: {
							yAxes: [{
								ticks: {
									beginAtZero: true
								}
							}]
						},
					}
				});
			});
		});

		$('.core-chart-line').each(function() {
			$(this).appear(function() {

				var ctx = $(this);
				var myChart = new Chart(ctx, {
					type: 'line',
					data: {
						labels: ["January", "February", "March", "April", "May", "June"],
						datasets: [{
							data: [12, 19, 3, 5, 2, 3],
							backgroundColor: [
								'rgba(74, 144, 226, 0.2)',
								'rgba(74, 144, 226, 0.2)',
								'rgba(74, 144, 226, 0.2)',
								'rgba(74, 144, 226, 0.2)',
								'rgba(74, 144, 226, 0.2)',
								'rgba(74, 144, 226, 0.2)',
							],
							borderWidth: 1
						}]
					},
					options: {
						legend: {
							display: false
						},
						scales: {
							yAxes: [{
								ticks: {
									beginAtZero: true
								}
							}]
						},
					}
				});
			});
		});

	});

})(jQuery);
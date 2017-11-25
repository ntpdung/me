$(document).ready(function() {
	$('#fullpage').fullpage({
		controlArrows: false,
		verticalCentered: false
	});
	function init() {
		$('#page-wrap').hide();
		setTimeout(function () {
			// debugger;
			$('#page-load').hide();
			$('#page-wrap').show();
		}, 6000);
	}
	init();
});
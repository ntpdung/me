$(document).ready(function() {
	$('#fullpage').fullpage({
		controlArrows: false,
		verticalCentered: false
	});
	function init() {
		$('#page-wrap').hide();
		setTimeout(function () {
			$('#page-load').hide();
			$('#page-wrap').show();
		}, 3000);
	}
	init();
});
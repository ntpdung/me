$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
		navigationPosition: 'left',
		menu: '#side-bar',
	});
	function init() {
		$('#page-wrap').hide();
		setTimeout(function () {
			// debugger;
			// $('#page-load').hide();
			// $('#page-wrap').show();
		}, 6000);
		$('#scroll-down').click(function(){
			$(this).hide();
			$('#page-load').hide();
			$('#page-wrap').show(500);
		});
	}
	init();
});
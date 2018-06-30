$(document).ready(function() {
    $('#sizePicker').submit(function makeGrid(grid){
	    $('table tr').remove();
		let rows = $('#inputHeight').val();
		let cols = $('#inputWeight').val();
		
		for(let i = 1; i <= rows; i++) {
		    $('#pixelCanvas').append('<tr id="class"'+ i + '></tr>');
			
			for(let j = 1; j <= cols; j++) {
		        $('tr:last').append('<td></td>');
				$('td').attr('class', 'cells');
		    }
		}
		grid.preventDefault();
		
		$('.cells').click(function(event) {
		    var paint = $('#colorPicker').val();
			if($(this).attr('style')){
			    $(this).removeAttr('style');
			} else {
			    //$(event.target).css('background-color', paint);
				$(event.target).attr('style', 'background-color: ' + paint);
			}
			
		});
	});
});

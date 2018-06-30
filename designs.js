// Select color input
// Select size input
const height, width, color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event) {
    event.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWeight').val();
	
	makeGrid(height, width);
	
	//console.log(height);
});
function makeGrid(a, b) {
    $('tr').remove();

// Your code goes here!
    for(let i = 1; i <= a; i++){
	    $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
		for(let j = 1; j <= b; j++){
		    $('#table' + i).append('<td></td>');
		}
	}
	
	//add color to the cell
	$('td').click(function addColor(){
	    color = $('#colorPicker').val();
		
		if($(this).attr('style')) {
		    $(this).removeAttr('style');
		} else {
		    $(this).attr('style', 'background-color:' + color);
		}
	});
}

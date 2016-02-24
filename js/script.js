/* Script.js */

$(function () {

	//Draggable
	
	$('.box').draggable();

	$('#box1').draggable({ scroll: true, revert: "invalid" });
	
	$('#box2').draggable({ axis: 'x' });
	
	$('#box3').draggable({ axis: 'y' });
	
	$('#box4').draggable({ containment: '.container', revert: "valid" });
	
	//Droppable

	$('#droppable').droppable({
		accept: '#box1',
		drop: function() {
			$(this).text("when a box got attitude, drop it like it's hot");
		}
	
	});
	
	//Sortable
	$('#sortable').sortable({ connectWith: "#sortableToo", placeholder: "placeholderBox" });		
	$('#sortableToo').sortable({ connectWith: "#sortable", placeholder: "placeholderBox"});
	
	//Accordion
	$('#accordion').accordion({ collapsible: true, heightStyle: "content" });
	
	//Datepicker
	$('.date').datepicker({ showOtherMonths: true, 
							selectOtherMonths: true,
							showButtonPanel: true,
							changeYear: true,
							changeMonth: false,
							numberOfMonths: 2,
							minDate: -1,
							maxDate: "+1W"
	});
	
	//Todolist
	
	$('#todoList ul').sortable({
		items: "li:not('.listTitle, .addItem')",
		connectWith: "ul",
		dropOnEmpty: true,
		placeholder: "emptySpace"
	
	});
	
	$('input').keydown(function (e){
		if(e.keyCode == 13) {
			var item = $(this).val();
			
			$(this).parent().parent().append('<li>'+ item + '</li>');
			$(this).val("");
		}
	
	});
	
	$('#trash').droppable({
		drop: function(event, ui) {
			ui.draggable.remove();
		}
	});
	
});    
   
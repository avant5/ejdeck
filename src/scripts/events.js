var fs = require('fs');

$(document).ready(function(){

	$('#nav-tabs').on('click','a',function(e){
		e.preventDefault();
		let tab = $(this).data('tab');
		$("#tabs > div, #nav-tabs li").removeClass('active-tab');
		$("#tabs").find("#" + tab).addClass('active-tab');
		$(this).parent('li').addClass('active-tab');
		$('title').text( "enjqDeck - " + $(this).text() );
	});

	$('.commlist > li').on('click',function(){
		$('.commlist > li .meta').slideUp();
		if ( $(this).hasClass('open') ) { 
			$(this).removeClass('open');
			return;
		} else {
			$('.commlist > li').removeClass('open');
			$(this).addClass('open');
			$(this).find('.meta').slideDown();
		}
	});

	$("#notify-button").on('click',function(e){
		e.preventDefault();
		var note = {
			title:'Notification title',
			body:'This is the notification information'
		};
		var notification = new window.Notification(note.title,note);
	});

	$('body').on('click','#actions-cancel',function(){
		$('#action-controls').slideUp().html('');
	});

	$('body').on('click','#add-quandl-key',function(){
		$("#action-notices").slideUp().html('');
		$("#action-controls").html('Quandl API Key: <input type="text" id="action-input" /> <button data-target="quandl" id="action-submit">Update</button> <a style="float:right; margin-top:4px;" href="#" id="actions-cancel">cancel</a>').slideDown();
	});
	
});
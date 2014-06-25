$(function() {

	$('.edit').on('click', function(){
		$('p').toggleClass('editable');
		$('.addmore').toggle();
		var addMore = '<button class="addmore">+</button>';
		$('.fav-list li:last-child').after(addMore);

		$('.editable').off('click').on('click', function(){
			var customFit = {
				width : $(this).css('width'),
				height : $(this).css('height'),
				'font-size' : $(this).css('font-size')
			};
			var text = $(this).text();
			var textBox = '<textarea class=\'edit-box\'>'+text+'</textarea>';
			$(this).toggle();
			if ($(this).next().attr('class') !== 'edit-box'){	
				$(textBox).insertAfter(this).css(customFit);
			}

			$('.edit-box').keyup(function(e) {
				if(e.keyCode === 13) {
					var editedText = $(this).val();
					$(this).prev().text(editedText);
					$(this).prev().toggle();
					$(this).remove();
				}
			});

			console.log('Completed');
		});

		$('.addmore').on('click', function(){
			var textBox = '<textarea class=\'edit-box\'></textarea>';
			console.log($(this).prev().attr('class'));
			if ($(this).prev().attr('class') !== 'edit-box'){
				$(textBox).insertBefore(this);
			}
			$('.edit-box').keyup(function(e) {
				if(e.keyCode === 13) {
					var editedText = $(this).val();
					var newListItem = '<li><p class="favorite-item">'+editedText+'</p></li>';
					$(this).before(newListItem);
					$(this).remove();
				}
			});
		});
		$('.editing').toggle();
		$(this).toggle()
	});

	$('.editing').on('click', function(){
		$('.editable').off('click');
		$('.addmore').toggle();
		var addMore = '<button class="addmore">+</button>';
		$('p').toggleClass('editable');
		$('.edit').toggle();
		$(this).toggle();
	});

});
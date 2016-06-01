Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place Your Javascript Below This Line*/

	var jq = jQuery.noConflict();
	var slider = jq("#scale_slider");


	var dims = {}
	jq(".object_image").each(function(){
		dims[this.id] = {
			'height': this.height,
			'width': this.width
		}
	});



	slider.on('input', function(){
		var scalar = slider.val() / 50;
		jq(".object_image").each(function(){
			jq("#"+this.id).height(dims[this.id]['height']*scalar);
			jq("#"+this.id).width(dims[this.id]['width']*scalar);
		});

	});

	slider.on('change', function() {
		var dpi = jq("#credit_card").width / 3.37;
		this.setEmbeddedData("dpi", dpi);
	});
});

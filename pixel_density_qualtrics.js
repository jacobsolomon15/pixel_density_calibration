Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place Your Javascript Below This Line*/

	var slider = document.getElementById("scale_slider");
	var credit_card_img = document.getElementById("credit_card");
	var dollar_img = document.getElementById("dollar");
	var ruler_img = document.getElementById("ruler");
	var start_height = credit_card_img.height;
	var start_width = credit_card_img.width;

	var dims = {
		"credit_card" : {
			"width" : credit_card_img.width,
			"height" : credit_card_img.height
		},
		"dollar" : {
			"width": dollar_img.width,
			"height": dollar_img.height
		},
		"ruler": {
			"width": ruler_img.width,
			"height": ruler_img.height
		}
	}

	slider.oninput = function(){
		var scalar = slider.value / 50;
		for (img in [credit_card_img, dollar_img, ruler_img]){
			img.height = dims[img.id]['height'] * scalar;
			img.width = dims[img.id]['width'] * scalar;
		}
	}

	slider.onchange = function() {
		var dpi = credit_card_img.width / 3.37;

		// Or if you are only using a different image:
		// var dpi = dollar_img.width / 6.14;
		// var dpi = ruler_img.width / 3;
		this.setEmbeddedData("dpi", dpi);
	}
});

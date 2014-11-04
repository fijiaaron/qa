(function() {

	console.log("loading renderer spec")
	describe('Renderer', function() {

		it('should exist', function() {
		   var renderer = new Renderer();
		   renderer.should.be.an.instanceof(Renderer);
		});

		it('should render handlebars template', function(){
			var renderer = new Renderer("#test-template");
			var testValue = "TeStVaLuE";
			renderer.render({name: testValue}).should.equal('<div id="test-template">TeStVaLuE</div>');
		});
	});

}).call(this);
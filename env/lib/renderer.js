function Renderer(template_selector){
	var source = $(template_selector);
	this.template = Handlebars.compile(source.html());
}

Renderer.prototype.render = function(params){
	return this.template(params);
};

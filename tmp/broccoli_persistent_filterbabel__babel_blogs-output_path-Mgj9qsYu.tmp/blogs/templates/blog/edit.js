define("blogs/templates/blog/edit", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "B69/bgwv", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"userCanEdit\"]]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\tУ вас нет прав.\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"blog-editing\"],null,[[\"blog\",\"name\",\"editing\",\"toEdit\"],[[\"get\",[\"model\"]],[\"get\",[\"model\",\"name\"]],true,[\"helper\",[\"action\"],[[\"get\",[null]],\"editBlog\"],null]]]],false],[\"text\",\"\\n\\t\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "blogs/templates/blog/edit.hbs" } });
});
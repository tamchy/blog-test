define("blogs/templates/post/edit", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "3LieN7DK", "block": "{\"statements\":[[\"append\",[\"helper\",[\"top-menu\"],null,[[\"mainPage\",\"blogId\"],[false,[\"get\",[\"blogId\"]]]]],false],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"static-attr\",\"style\",\"margin-top:5%;\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"userCanEdit\"]]],null,1,0],[\"text\",\"\\t\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\t\\tУ вас нет прав.\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\\t\"],[\"append\",[\"helper\",[\"post-editing\"],null,[[\"toEdit\",\"editing\",\"post\",\"published\",\"title\",\"text\",\"isPublished\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"editPost\"],null],true,[\"get\",[\"model\"]],[\"get\",[\"model\",\"published\"]],[\"get\",[\"model\",\"title\"]],[\"get\",[\"model\",\"text\"]],[\"get\",[\"model\",\"isPublished\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "blogs/templates/post/edit.hbs" } });
});
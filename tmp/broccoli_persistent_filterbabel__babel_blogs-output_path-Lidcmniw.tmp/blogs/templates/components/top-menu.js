define("blogs/templates/components/top-menu", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Er1UDDs+", "block": "{\"statements\":[[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"navbar-toggler navbar-toggler-right\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"data-toggle\",\"collapse\"],[\"static-attr\",\"data-target\",\"#navbarsExampleDefault\"],[\"static-attr\",\"aria-controls\",\"navbarsExampleDefault\"],[\"static-attr\",\"aria-expanded\",\"false\"],[\"static-attr\",\"aria-label\",\"Toggle navigation\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"navbar-toggler-icon\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"navbar-brand\"],[\"static-attr\",\"href\",\"/\"],[\"flush-element\"],[\"text\",\"Блоги\"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"collapse navbar-collapse\"],[\"static-attr\",\"id\",\"navbarsExampleDefault\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"navbar-nav mr-auto\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"mainPage\"]]],null,4,2],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Создать пост\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Список постов\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \\t  \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"nav-item active\"],[\"flush-element\"],[\"text\",\"\\n    \\t  \\t\"],[\"block\",[\"link-to\"],[\"blog\",[\"get\",[\"blogId\"]]],[[\"class\",\"replace\"],[\"nav-link\",true]],1],[\"text\",\"\\n    \\t  \"],[\"close-element\"],[\"text\",\"\\n    \\t  \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"nav-item active\"],[\"flush-element\"],[\"text\",\"\\n    \\t  \\t\"],[\"block\",[\"link-to\"],[\"post.create\",[\"helper\",[\"query-params\"],null,[[\"blogId\"],[[\"get\",[\"blogId\"]]]]]],[[\"class\"],[\"nav-link\"]],0],[\"text\",\"\\n    \\t  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Создать блог\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"nav-item active\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"block\",[\"link-to\"],[\"blog.create\"],[[\"class\"],[\"nav-link\"]],3],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "blogs/templates/components/top-menu.hbs" } });
});
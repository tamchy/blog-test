export default Ember.HTMLBars.template({"id":"vJzktnX1","block":"{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row justify-content-md-center\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-12 col-md-auto\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Записи в блоге\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-12\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"postSet\"]]],null,3],[\"text\",\"\\t\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Удалить\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Редактировать\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Читать дальше\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\\t\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card\"],[\"flush-element\"],[\"text\",\"\\n  \\t\\t\\t\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-block\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t    \\t\"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"card-title\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"post\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t  \\t  \\t\"],[\"open-element\",\"h6\",[]],[\"static-attr\",\"class\",\"card-subtitle mb-2 text-muted\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t  \\t  \\t\"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"card-text\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t  \\t  \\t\"],[\"block\",[\"link-to\"],[\"post\",[\"get\",[\"post\",\"id\"]]],[[\"class\"],[\"card-link\"]],2],[\"text\",\"\\n\\t\\t\\t  \\t  \\t\"],[\"block\",[\"link-to\"],[\"post.edit\",[\"get\",[\"post\"]]],[[\"class\"],[\"card-link\"]],1],[\"text\",\"\\n\\t\\t\\t  \\t  \\t\"],[\"block\",[\"link-to\"],[\"post.delete\",[\"get\",[\"post\"]]],[[\"class\"],[\"card-link\"]],0],[\"text\",\"\\n\\t\\t\\t  \\t\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"post\"]}],\"hasPartials\":false}","meta":{"moduleName":"blogs/templates/blog/index.hbs"}});
define('blogs/tests/transforms/post-set.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | transforms/post-set.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/post-set.js should pass jshint.');
  });
});
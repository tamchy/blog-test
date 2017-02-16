define('blogs/tests/test-helper', ['exports', 'blogs/tests/helpers/resolver', 'ember-qunit'], function (exports, _blogsTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_blogsTestsHelpersResolver['default']);
});
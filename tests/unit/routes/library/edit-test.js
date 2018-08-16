import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | library/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:library/edit');
    assert.ok(route);
  });
});

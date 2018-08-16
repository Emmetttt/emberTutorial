// ember g model author name:string books:hasMany
import DS from 'ember-data';
import Faker from 'faker';
import { empty } from '@ember/object/computed';

export default DS.Model.extend({
  name: DS.attr('string'),
  books: DS.hasMany('book', { inverse: 'author', async: true }),
  isNotValid: empty('name'),
  isEditing: DS.attr('boolean'),

  randomize() {
    this.set('name', Faker.name.findName());

    // With returning the author instance, the function can be chainable,
    // for example `this.store.createRecord('author').randomize().save()`,
    // check in Seeder Controller.
    return this;
  }
});

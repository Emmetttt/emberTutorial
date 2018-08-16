import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        return this.store.findRecord('library', params.library_id);
    },

    setupController(controller, model) {
        this._super(controller, model); // Sets the model of the controller to "model"

        controller.set('title', 'Edit Library');
        controller.set('buttonLabel', 'Save Changes');
    },

    renderTemplate() {
        this.render('libraries/form') // Don't use the generic libraries/edit
    },

    actions: {
        saveLibrary(library) {
            library.save().then(() => this.transitionTo('libraries'));
        },

        willTransition(transition) {
            let model = this.controller.get('model');

            if (model.get('hasDirtyAttributes')) {
                let confirmation = confirm('Your changes haven\'t been saved yet. Would you like to leave this form?');

                if (confirmation) {
                    model.rollbackAttributes();
                } else {
                    transition.abort();
                }
            }
        }
    }
});

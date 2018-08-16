import Route from '@ember/routing/route';

export default Route.extend({
    actions: {
        saveInvitation(email) { 
            const newInvitation = this.store.createRecord('invitation', { email });
            newInvitation.save().then(response => {
                this.controller.set('responseMessage', `Thank you! We've just saved your email address
                    with the following id: ${response.get('id')}`);
                this.controller.set('emailAddress', '');
            });
        }
    }
});

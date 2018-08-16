import Controller from '@ember/controller';
import { match, gte, not, and } from '@ember/object/computed';
import { computed } from '@ember/object';

export default Controller.extend({
    responseMessage: '',
    headerMessage: 'Contact us!',
    emailAddress: '',
    message: '',
    emailIsValid: match('emailAddress', /^.+@.+\..+$/),
    emailStatus: computed('emailIsValid', function(){
        if (this.get('emailAddress') === '') return '';
        else if (this.get('emailIsValid')) return 'has-success';
        else return 'has-error';
    }),
    messageIsValid: gte('message.length', 5),
    messageStatus: computed('messageIsValid', function(){
        if (this.get('message') === '') return '';
        else if (this.get('messageIsValid')) return 'has-success';
        else return 'has-error';
    }),
    isValid: and('emailIsValid', 'messageIsValid'),
    isDisabled: not('isValid'),

    actions: {
        saveMessage(){
            const email = this.get('emailAddress');
            const message = this.get('message');

            const newContact = this.store.createRecord('contact', {
                email,
                message
            });

            newContact.save().then(() => {
                this.set('responseMessage', `Thank you for the message. An email confirmation will be sent to ${this.get('emailAddress')}.`);
                this.set('emailAddress', '');
                this.set('message', '');
            })
        }
    }
});

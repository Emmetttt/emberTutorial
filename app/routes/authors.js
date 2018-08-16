import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('author')
            .then(function(authors) {
                return authors.filter(author => author.books.length > 0);
            });
    },

    actions: {
        editAuthor(author){
            author.set('isEditing', true);
        },

        cancelAuthorEdit(author){
            author.rollbackAttributes();
            author.set('isEditing', false);
        },

        saveAuthor(author){

            if (author.get('isNotValid')){
                return;
            }

            author.set('isEditing', false);
            author.save();
        }
    }
});

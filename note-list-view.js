(function(exports) {

    function NoteListView(noteList) {
        this.noteList = noteList;
    }

    NoteListView.prototype.toHTML = function() {
        let notesArray = this.noteList.getAllNotes();
        let notesArrayHTML = notesArray
            .map(elem => `<li><a href='#notes/${elem.getID()}'><div>${elem.getText().slice(0, 20)}</div></a></li>`)
            .join('');
        let notesHTML = `<ul>${notesArrayHTML}</ul>`
        return notesHTML
    }


    exports.NoteListView = NoteListView;
})(this)
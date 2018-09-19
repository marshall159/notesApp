(function(exports) {

    function NoteListView(noteList) {
        this.noteList = noteList;
    }

    NoteListView.prototype.toHTML = function() {
        let notesArray = this.noteList.getAllNotes();
        let notesArrayHTML = notesArray.map(elem => `<li><div>${elem.getText()}</div></li>`)
            .join('');
        let notesHTML = `<ul>${notesArrayHTML}</ul>`
        return notesHTML
    }


    exports.NoteListView = NoteListView;
})(this)
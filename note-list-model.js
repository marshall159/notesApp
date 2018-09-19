(function (exports) {


    function NoteList() {
        this.notes = [];
    }

    NoteList.prototype.getAllNotes = function() {
        return this.notes
    }

    NoteList.prototype.createNote = function(string) {
        this.notes.push(new Note(string));
    }

    exports.NoteList = NoteList;
})(this)
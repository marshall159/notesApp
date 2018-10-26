(function (exports) {

    function NoteList() {
        this.notes = [];
        this.noteID = 0;
    }

    NoteList.prototype.getAllNotes = function() {
        return this.notes
    }

    NoteList.prototype.getNote = function(id) {
        return this.notes[id];
    }

    NoteList.prototype.createNote = function(string) {
        this.notes.push(new Note(string, this.noteID));
        this.noteID++;
    }

    exports.NoteList = NoteList;
})(this)
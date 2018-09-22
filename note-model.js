

(function (exports) {
    let noteID = 0;

    function Note(string) {
        this.text = string;
        this._ID = noteID++;
    }

    Note.prototype.getText = function() {
        return this.text
    }

    Note.prototype.getID = function() {
        return this._ID
    }


    exports.Note = Note;
})(this)


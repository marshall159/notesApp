(function(exports) {
    function SingleNoteView(note) {
        this.note = note
    }

    SingleNoteView.prototype.toHTML = function() {
        let text = this.note.getText()
        return `<div>${text}</div>`
    }

    exports.SingleNoteView = SingleNoteView
})(this)
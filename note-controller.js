
(function (exports) {

    function NoteController(noteList, listView = NoteListView) {
        noteList.createNote('Favourite drink: seltzer');
        this.noteListView = new listView(noteList);
    }

    // NoteController.prototype.getHTML = function() {
    //     let html = this.noteListView.toHTML()
    //     return html;
    // }

    NoteController.prototype.insertHTML = function(elem) {
        let html = this.noteListView.toHTML()
        // let app = document.getElementById('app');
        elem.innerHTML = html;

        // viewElem = document.getElementById(`${viewElem}`);
        // viewElem.innerHTML = html;
    }

    exports.NoteController = NoteController;
})(this)


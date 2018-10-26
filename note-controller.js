
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

    NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function() {
        window.addEventListener('hashchange', showNoteForCurrentPage);

        function showNoteForCurrentPage() {
            showNote(getNoteFromUrl(window.location));
        }

        function getNoteFromUrl(location) {
            let noteID = location.hash;
            console.log(noteID);
            return noteList.getNote(noteID);
        }

        function showNote(note) {
            let singleNoteView = new SingleNoteView(note);
            document.getElementById('app')
                .innerHTML = singleNoteView.toHTML();
        }

    }

    exports.NoteController = NoteController;
})(this)


function allTests() {

    function noteTest() {
        let note = new Note('My favourite language is JavaScript');
        assert.isEqual(note.getText(), 'My favourite language is JavaScript');
    }
    noteTest();

    function noteList() {
        let noteList = new NoteList()
        noteList.createNote('My favourite language is JavaScript');
        let notesArray = noteList.getAllNotes()
        assert.isIncluded(notesArray[0].getText(), 'My favourite language is JavaScript');

    }
    noteList()

    function noteListView() {
        let noteList = new NoteList();
        noteList.createNote('Favourite food: pesto');
        noteList.createNote('Favourite drink: seltzer');
        let noteListView = new NoteListView(noteList);
        assert.isEqual(noteListView.toHTML(),
        "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>")
    }
    noteListView()

    function noteController() {

        function NoteListDouble() {}

        NoteListDouble.prototype.createNote = function(string) {
        }

        function NoteListViewDouble() {}

        NoteListViewDouble.prototype.toHTML = function() {
            return '<ul><li><div>Favourite drink: seltzer</div></li></ul>'
        }

        let noteList = new NoteListDouble();

        let controller = new NoteController(noteList, NoteListViewDouble);
        //
        assert.isEqual(controller.constructor, NoteController);
        //

        let elem = {
            innerHTML: ''
        };

        controller.insertHTML(elem);
        assert.isEqual(elem.innerHTML,
            '<ul><li><div>Favourite drink: seltzer</div></li></ul>')

    }
    noteController()


    function singleNoteView() {
        function NoteDouble() {
        }
        NoteDouble.prototype.getText = function() {
            return 'Favourite drink: seltzer'
        }

        let note = new NoteDouble()
        let singleNoteView = new SingleNoteView(note)
        let html = singleNoteView.toHTML()
        assert.isEqual(html, '<div>Favourite drink: seltzer</div>')
    }
    singleNoteView();



    assert.showLog()

}

allTests();
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
        "<ul><li><a href='#notes/0'><div>Favourite food: pest</div></a></li>" +
            "<li><a href='#notes/1'><div>Favourite drink: sel</div></a></li></ul>")
    }
    noteListView()

    function noteController() {

        function NoteListDouble() {}

        NoteListDouble.prototype.createNote = function(string) {
        }

        function NoteListViewDouble() {}

        NoteListViewDouble.prototype.toHTML = function() {
            return '<ul><li><a href="#notes/1"><div>Favourite drink: seltzer</div></a></li></ul>'
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
            '<ul><li><a href="#notes/1"><div>Favourite drink: seltzer</div></a></li></ul>')

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


    function loadSingleNote() {
        // listen for hash change
        // change content of app
        // app content should now correspong to hash id value
    }
    loadSingleNote();

    function noteID() {
        let note1 = new Note('My favourite language is JavaScript')
        // note1._ID = 0;

        let note2 = new Note('My second favourite language is Python')
        // note2._ID = 1;

        // correct way to stub the ID? Mocking behaviour I want to test
        // assert.isEqual(note1.getID(), 0);
        // assert.isEqual(note2.getID(), 1);
        assert.isNotEqual(note1, note2);
    }
    noteID()




    assert.showLog()

}

allTests();
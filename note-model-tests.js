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


    assert.showLog()


}

allTests();
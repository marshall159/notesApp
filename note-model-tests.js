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

    // assert.isEqual(1 + 1, 3);
    // assert.isEqual(1 + 1, 2);
    // assert.isEqual(1 + 1, 3);
    // assert.isEqual(1 + 1, 2);
    // assert.isEqual(1 + 1, 5);
    // assert.isTruthy('');
    // assert.isTruthy('hi');
    // assert.isIncluded([1,2,3], 5);
    // assert.isIncluded([1,2,3], 2);
    // assert.isIncluded('hello', 'el');
    // assert.isIncluded('hello', 'zzz');
    // assert.isEqual(1 + 1, 5);


    assert.showLog()


}

allTests();
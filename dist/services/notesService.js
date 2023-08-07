"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notesService = void 0;
const validateNote_1 = require("../helpers/validateNote");
const mockData_1 = require("../repositories/mockData");
class NotesService {
    constructor() {
        this.notes = [...mockData_1.mockData];
    }
    getAllNotes() {
        return this.notes;
    }
    getNoteById(id) {
        return this.notes.find(note => note.id === id);
    }
    createNote(newNote) {
        (0, validateNote_1.validateNote)(newNote); // Validate using Yup schema here
        const id = (this.notes.length + 1).toString();
        const noteWithId = Object.assign(Object.assign({}, newNote), { id });
        this.notes.push(noteWithId);
        return noteWithId;
    }
    updateNote(id, updatedData) {
        const noteIndex = this.notes.findIndex(note => note.id === id);
        if (noteIndex !== -1) {
            const updatedNote = Object.assign(Object.assign({}, this.notes[noteIndex]), updatedData);
            this.notes[noteIndex] = updatedNote;
            return updatedNote;
        }
        return undefined;
    }
    deleteNote(id) {
        this.notes = this.notes.filter(note => note.id !== id);
    }
}
exports.notesService = new NotesService();
//# sourceMappingURL=notesService.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notesService_1 = require("../services/notesService");
const router = express_1.default.Router();
router.get('/', (req, res) => {
    const notes = notesService_1.notesService.getAllNotes();
    res.json(notes);
});
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const note = notesService_1.notesService.getNoteById(id);
    res.json(note);
});
router.post('/', (req, res) => {
    const newNote = req.body;
    const createdNote = notesService_1.notesService.createNote(newNote);
    res.status(201).json(createdNote);
});
router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const updatedNoteData = req.body;
    const updatedNote = notesService_1.notesService.updateNote(id, updatedNoteData);
    res.json(updatedNote);
});
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    notesService_1.notesService.deleteNote(id);
    res.sendStatus(204);
});
exports.default = router;
//# sourceMappingURL=notes.routes.js.map
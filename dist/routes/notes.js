"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/notes.ts
const express_1 = __importDefault(require("express"));
const noteValidator_1 = __importDefault(require("../helpers/noteValidator"));
const data_1 = require("../repositories/data");
const getStats_1 = require("../services/getStats");
const getAllNotes_1 = require("../services/getAllNotes");
const router = express_1.default.Router();
router.post('/notes', (req, res) => {
    try {
        const newNote = req.body;
        noteValidator_1.default.validateSync(newNote, { abortEarly: false });
        data_1.notes.push(newNote);
        res.status(201).json(newNote);
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
});
router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const index = data_1.notes.findIndex(note => note.id === id);
    if (index !== -1) {
        data_1.notes.splice(index, 1);
        res.status(204).end();
    }
    else {
        res.status(404).json({ message: 'Note not found' });
    }
});
router.patch('/notes/:id', (req, res) => {
    const id = req.params.id;
    const updatedNote = req.body;
    const index = data_1.notes.findIndex(note => note.id === id);
    if (index !== -1) {
        try {
            noteValidator_1.default.validateSync(updatedNote, { abortEarly: false });
            data_1.notes[index] = Object.assign(Object.assign({}, data_1.notes[index]), updatedNote);
            res.json(data_1.notes[index]);
        }
        catch (error) {
            res.status(400).json({ error: error });
        }
    }
    else {
        res.status(404).json({ message: 'Note not found' });
    }
});
router.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    const note = data_1.notes.find(note => note.id === id);
    if (note) {
        res.json(note);
    }
    else {
        res.status(404).json({ message: 'Note not found' });
    }
});
router.get('/notes', (req, res) => {
    const allNotes = (0, getAllNotes_1.getAllNotes)(data_1.notes);
    res.json(allNotes);
});
router.get('/notes/stats', (req, res) => {
    const stats = (0, getStats_1.getStats)(data_1.notes);
    res.json(stats);
});
exports.default = router;

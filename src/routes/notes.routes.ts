import express from 'express';
import { notesService } from '../services/notesService';
import Note from '../repositories/Notes';



const router = express.Router();

router.get('/', (req, res) => {
  const notes = notesService.getAllNotes();
  res.json(notes);
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const note = notesService.getNoteById(id);
  res.json(note);
});

router.post('/', (req, res) => {
  const newNote: Note = req.body;
  const createdNote = notesService.createNote(newNote);
  res.status(201).json(createdNote);
});

router.patch('/:id', (req, res) => {
  const id = req.params.id;
  const updatedNoteData: Partial<Note> = req.body;
  const updatedNote = notesService.updateNote(id, updatedNoteData);
  res.json(updatedNote);
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  notesService.deleteNote(id);
  res.sendStatus(204);
});

export default router;
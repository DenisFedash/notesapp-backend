import { validateNote } from "../helpers/validateNote";
import Note from "../repositories/Notes";
import { mockData } from "../repositories/mockData";


class NotesService {
  private notes: Note[] = [...mockData];

  getAllNotes(): Note[] {
    return this.notes;
  }

  getNoteById(id: string): Note | undefined {
    return this.notes.find(note => note.id === id);
  }

  createNote(newNote: Note): Note {
    validateNote(newNote); // Validate using Yup schema here
    const id = (this.notes.length + 1).toString();
    const noteWithId = { ...newNote, id };
    this.notes.push(noteWithId);
    return noteWithId;
  }

  updateNote(id: string, updatedData: Partial<Note>): Note | undefined {
    const noteIndex = this.notes.findIndex(note => note.id === id);
    if (noteIndex !== -1) {
      const updatedNote = { ...this.notes[noteIndex], ...updatedData };
      this.notes[noteIndex] = updatedNote;
      return updatedNote;
    }
    return undefined;
  }

  deleteNote(id: string): void {
    this.notes = this.notes.filter(note => note.id !== id);
  }
}


export const notesService = new NotesService();
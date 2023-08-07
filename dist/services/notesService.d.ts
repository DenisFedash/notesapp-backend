import Note from "../repositories/Notes";
declare class NotesService {
    private notes;
    getAllNotes(): Note[];
    getNoteById(id: string): Note | undefined;
    createNote(newNote: Note): Note;
    updateNote(id: string, updatedData: Partial<Note>): Note | undefined;
    deleteNote(id: string): void;
}
export declare const notesService: NotesService;
export {};
//# sourceMappingURL=notesService.d.ts.map
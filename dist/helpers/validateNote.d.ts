import * as yup from 'yup';
import Note from '../repositories/Notes';
export declare const noteSchema: yup.ObjectSchema<{
    name: string;
    date: string;
    category: string;
    content: string;
}, Note, {
    name: undefined;
    date: undefined;
    category: undefined;
    content: undefined;
}, "">;
export declare const validateNote: (note: Note) => void;
//# sourceMappingURL=validateNote.d.ts.map
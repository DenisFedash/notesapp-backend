import * as yup from 'yup';
import Note from '../repositories/Notes';


export const noteSchema = yup.object<Note>().shape({
  name: yup.string().required(),
  date: yup.string().required(),
  category: yup.string().required(),
  content: yup.string().required(),
});

export const validateNote = (note: Note): void => {
  noteSchema.validateSync(note, { abortEarly: false });
};
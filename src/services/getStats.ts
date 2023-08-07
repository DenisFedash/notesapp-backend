import Note from "../repositories/Notes";


export const getStats = (notes: Note[]): Record<string, any> => {
  const totalNotes = notes.length;
  const totalArchived = notes.filter(note => note.archived).length;
  const totalNotArchived = totalNotes - totalArchived;



  const stats = {
    totalNotes,
    totalArchived,
    totalNotArchived,
   
  };

  return stats;
};
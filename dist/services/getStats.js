"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStats = void 0;
const getStats = (notes) => {
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
exports.getStats = getStats;
//# sourceMappingURL=getStats.js.map
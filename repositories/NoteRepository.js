import { notes } from "../data/notes.js";
import { Note } from "../models/Note.js";

export class NoteRepository {
  add(note) {
    const {ownerUsername, text } = note;
    const newNote = new Note(ownerUsername, text);
    notes.push(newNote);
    return notes[notes.length -1]
  }

  listByOwner(username) {
    return notes.filter(note => note.ownerUsername === username)
  }

  deleteById(ownerUsername, noteId) {
    const index = notes.findIndex(note => note.ownerUsername === ownerUsername && note.noteId === noteId);
    const isDeleted = notes.splice(index, 1);
    return (isDeleted.length > 0 || index !== -1) ? "Deleted successfully" : "Error deleting"
  }
}
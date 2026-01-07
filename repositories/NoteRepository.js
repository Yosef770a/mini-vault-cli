import { notes } from "../data/notes.js";
import { Note } from "../models/Note.js";

export class NoteRepository {
  add(note) {
    const {ownerUsername, text } = note;
    const objNote = new Note(id, ownerUsername, text);
    notes.push(objNote);
  }

  listByOwner(username) {
    return notes.filter(note => note.ownerUsername === username)
  }

  deleteById(ownerUsername, noteId) {
    const index = notes.findIndex(note => note.ownerUsername === ownerUsername && note.noteId === noteId);
    notes.splice(index, 1);
  }
}
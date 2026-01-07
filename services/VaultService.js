import { NoteRepository } from "../repositories/NoteRepository.js";
import { Note } from "../models/Note.js";

export class VaultService {
  constructor(noteRepository) {
    this.noteRepository = noteRepository;
  }

  addNote(ownerUsername, text) {

  }

  listNotes(ownerUsername) {

  }

  deleteNote(ownerUsername, noteId) {
    
  }
}
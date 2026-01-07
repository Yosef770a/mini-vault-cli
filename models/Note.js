import { v4 as uuidv4 } from 'uuid';

export class Note {
     constructor(ownerUsername, text) {
        this.id =  uuidv4()
        this.ownerUsername = ownerUsername
        this.text = text
        this.createdAt =  new Date()
     } 
    }


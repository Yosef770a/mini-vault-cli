import { v4 as uuidv4 } from 'uuid';

export class User { 
    constructor(id, username, password) {
        this.id = uuidv4()
        this.username = username
        this.password = password
        this.createdAt =  new Date()
    } 
}

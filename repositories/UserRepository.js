import { users } from "../data/users.js";
import { User } from "../models/User.js";

export class UserRepository {
  findByUsername(username) {
    const user = users.find(obj => obj.username === username)
    if (user) {
      return user
    }
    else {
      throw new Error("Username not found")

    }
  }

  
  exists(username) {
    const user = users.find(user => user.username === username)
    if (user) {
      return true
    } else {
      return false
    }
  }


  add(user) {
    const ifItExists = exists(user.username)
    if (!ifItExists) {
      const newUser = new User(user.id, user.username, user.password, user.createdAt)
      users.push(newUser)
    }
    else{
      throw new Error("Username already exists")
    }
  }

}
import { UserRepository } from "../repositories/UserRepository.js";
import { User } from "../models/User.js";

export class AuthService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  register(username, password) {
    try {
      if (!username || !password) {
        return "Missing details"
      } else {
        const user = { username, password }
        return this.userRepository.add(user)
      }
    } catch (err) {
      return err.message

    }
  }

  login(username, password) {
    try {
      const approval = this.userRepository.findByUsername(username)
      if (approval.username !== username && approval.password !== password) {
        return "Connection failed."
      } else {
        return "logged-in user"
      }
    } catch (err) {
      return err.message
    }
  }
}
import { UserRepository } from "../repositories/UserRepository.js";
import { User } from "../models/User.js";

export class AuthService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  register(username, password) {

  }

  login(username, password) {
    
  }
}
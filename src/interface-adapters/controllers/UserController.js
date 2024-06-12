
const CreateUser = require('../../application/use-cases/CreateUser');
const FindAllUsers = require('../../application/use-cases/FindAllUsers');
const UserRepository = require('../../infrastructure/repositories/UserRepository');

class UserController {
  constructor() {
    this.userRepository = new UserRepository();
    this.createUser = new CreateUser(this.userRepository);
    this.findAllUsers = new FindAllUsers(this.userRepository);
  }

  async create(req, res) {
    const user = req.body;
    const result = await this.createUser.execute(user);
    res.status(201).json(result);
  }

  async findAll(req, res) {
    const users = await this.findAllUsers.execute();
    res.status(200).json(users);
  }
}

module.exports = UserController;

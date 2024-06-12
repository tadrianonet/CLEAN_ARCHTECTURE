
class UserRepository {
  constructor() {
    this.users = [];
  }

  async save(user) {
    this.users.push(user);
    return user;
  }

  async findAll() {
    return this.users;
  }

  async findById(id) {
    return this.users.find(user => user.id === id);
  }
}

module.exports = UserRepository;

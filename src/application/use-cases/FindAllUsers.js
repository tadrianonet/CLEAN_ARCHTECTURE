
class FindAllUsers {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }
  
    execute() {
      return this.userRepository.findAll();
    }
  }
  
  module.exports = FindAllUsers;
  
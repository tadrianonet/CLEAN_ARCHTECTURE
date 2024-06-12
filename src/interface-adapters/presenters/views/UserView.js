
class UserView {
    static render(user) {
      return {
        id: user.id,
        name: user.name,
        email: user.email
      };
    }
  
    static renderMany(users) {
      return users.map(user => this.render(user));
    }
  }
  
  module.exports = UserView;
  
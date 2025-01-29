export class UserDTO {
  constructor(user) {
    this.id = user._id;
    this.email = user.email;
    this.createdAt = user.createdAt;
  }

  toResource() {
    return {
      id: this.id,
      email: this.email,
      createdAt: this.createdAt,
    };
  }
}

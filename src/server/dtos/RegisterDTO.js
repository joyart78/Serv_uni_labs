export class RegisterDTO {
  constructor({ email, password }) {
    this.email = email;
    this.password = password;
  }

  toResource() {
    return {
      email: this.email,
    };
  }
}

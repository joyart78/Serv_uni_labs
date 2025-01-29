export class AuthDTO {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  toResource() {
    return {
      email: this.email,
      // Другие поля при необходимости
    };
  }
}

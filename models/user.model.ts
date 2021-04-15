export interface IUserLogin {
  email: string;
  password: string;
}

export class User {
  name = "";
  email = "";
  phone = "";
  city = "";
  center = "";
  password = "";

  static isUserValid(user: User) {
    if (
      !user.email ||
      !user.password ||
      !user.name ||
      !user.phone ||
      !user.city ||
      !user.center
    ) {
      return false;
    } else {
      return true;
    }
  }
}

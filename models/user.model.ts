export interface IUserLogin {
  email: string;
  password: string;
}

export class User {
  name = "";
  email = "";
  phone = "";
  city: string = "";
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
export class  Attendance {
  employees = "" ;
  nonEmployees ="";
  newEmployees = "";
  city = "Multan" ;
  center = "Double Phatak";
  date = new Date()

  static isAttendanceValid (attendance: Attendance) {

  if (
    !attendance.employees ||
    !attendance.nonEmployees ||
    !attendance.newEmployees ||
    !attendance.date 

   ) {
    return false;
  } 
  else {
    return true;
  }
}
}

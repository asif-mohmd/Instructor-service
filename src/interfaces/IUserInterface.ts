import { Instructor } from "../model/instructor.entities";

export interface IInstructorService {
    userRegister(userData: {
      name: string;
      email: string;
      password?: string;
      avatar?: string;
    }): any;
    activateUser(userData: { name: string; email: string; password: string ; }): any;
    getUser(id: string): Promise<Instructor | any>;
    userLogin(email: string, password: string): any;
    updateUserInfo(id: string, name: string): any;
    updateAvatar(
      data: Buffer,
      fieldName: string,
      mimeType: string,
      id: string
    ): any;
    updatePassword(oldPassword: string, newPassword: string, userId: string): any;
  }
import { IInstructorRepository } from "../interfaces/IInstructorRepository";
import { Instructor } from "../entities/instructor.entities";
import { IInstructor } from "../model/schemas/instructor.schema";
import { IInstructorInteractor } from "../interfaces/IInstructorInteractor";
import { generateToken } from "../utils/generateToken";
import { sendMail } from "../utils/nodeMailer";
import { loginToken } from "../utils/loginToken";

export class InstructorInteractor implements IInstructorInteractor {
  private repository: IInstructorRepository;

  constructor(repository: IInstructorRepository) {
    this.repository = repository;
  }
  async instructorRegister(instructorData: Instructor) {
    try {
      console.log("interactor")
      const isEmailExist = await this.repository.findOne(instructorData.email);

      if (isEmailExist) {
        let registerStatus = false;
        return registerStatus;
      }
      let activationToken = generateToken(instructorData);
      let registerStatus = true;
      let options = {
        email: instructorData.email,
        otp: activationToken.activationCode,
      };
      sendMail(options); 
      return { registerStatus, activationToken };
    } catch (err) {
      console.log(err, "errrr user regisssssss");
    }
  }

  async activateInstructor(instructorData: { name: string; email: string; password: string }): Promise<any> {
    const instructorDataWithVerification = {
        ...instructorData,
        isVerified: true,
    };

    const response = await this.repository.register(instructorDataWithVerification);

    if (response) {
        return true;
    }
}

    async instructorLogin(email: string, password: string) {
      try {
        const instructor: IInstructor | null = await this.repository.findOne(email);
        if (!instructor) {
          return { msg: "Login failed", status: 401 };
        }
  
        const isPasswordValid = await instructor.comparePassword(password);
  
        if (!isPasswordValid) {
          throw new Error("Invalid password");
        }
  
        const activationToken = loginToken(instructor.id);
        let loginStatus: boolean = true;
        console.log(activationToken,"]]]]]]]]]]]]]]]]]]]]]]")
        const response = { msg: "Login successful", status: 201, activationToken , loginStatus };
  
        return response;
      } catch (err: any) {
        let loginStatus: boolean = false;
        const response = { msg: "Login Failed", status: 201, loginStatus };
        return response;
      }
    }
 

  findOne(email: string): Promise<IInstructor | null> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<IInstructor | null> {
    throw new Error("Method not implemented.");
  }
  findByIdAndUpdate(id: string, name: string): Promise<IInstructor | null> {
    throw new Error("Method not implemented.");
  }
  avatarUpdate(id: string, avatar: string): Promise<IInstructor | null> {
    throw new Error("Method not implemented.");
  }
  updatePassword(id: string, password: string): Promise<IInstructor | null> {
    throw new Error("Method not implemented.");
  }

  userRegister(input: any): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  updateUser(input: any): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

}

import { IInstructorRepository } from "../interfaces/IUserRepository";
import { Instructor } from "../model/instructor.entities";

export class InstructorRepository implements IInstructorRepository{
    register(userData: Instructor): Promise<any> {
        throw new Error("Method not implemented.");
    }
    findOne(email: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    findByIdAndUpdate(id: string, name: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    avatarUpdate(id: string, avatar: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    updatePassword(id: string, password: string): Promise<any> {
        throw new Error("Method not implemented.");
    }

}
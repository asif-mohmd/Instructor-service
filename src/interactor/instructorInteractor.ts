import { IInstructorInteractor } from "../interfaces/IUserInteractor";

export class InstructorInteractor implements IInstructorInteractor{
    userRegister(input: any): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    updateUser(input: any): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    loginUser(input: any): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
}
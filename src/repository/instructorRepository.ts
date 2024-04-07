import { IInstructorRepository } from "../interfaces/IInstructorRepository";
import { Instructor } from "../entities/instructor.entities";
import InstructorModel, { IInstructor } from "../model/schemas/instructor.schema";

export class InstructorRepository implements IInstructorRepository{
    register(instructorData: Instructor): Promise<IInstructor | null> {
        console.log(instructorData,"repository........................")
        try {
          return InstructorModel.create(instructorData);
        } catch (e: any) {
          throw new Error("db error");
        }
      }
      
    async findOne(email: string): Promise<any> {
       try{
        const instructor = await InstructorModel.findOne({email})
        if(instructor){
            return instructor
        }
        return false
       }catch(err){

       }
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
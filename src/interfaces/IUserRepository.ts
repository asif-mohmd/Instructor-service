import { IInstructor } from "../model/schemas/instructor.schema";
import { Instructor } from "../model/instructor.entities";

export interface IInstructorRepository {
  register(instructorData: Instructor): Promise<IInstructor | null>;
  findOne(email: string): Promise<IInstructor | null>;
  findById(id: string): Promise<IInstructor | null>;
  findByIdAndUpdate(id: string, name: string): Promise<IInstructor | null>;
  avatarUpdate(id: string, avatar: string): Promise<IInstructor | null>;
  updatePassword(id: string, password: string): Promise<IInstructor | null>;
}
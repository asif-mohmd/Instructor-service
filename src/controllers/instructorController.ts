import { IInstructorInteractor } from "../interfaces/IUserInteractor";

export class InstructorController {

    private interactor: IInstructorInteractor;

    constructor(interactor: IInstructorInteractor){
        this.interactor = interactor
    }

}
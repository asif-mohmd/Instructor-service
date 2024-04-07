export interface IInstructorInteractor {
    instructorRegister(instructorData: {
        name: string;
        email: string;
        password?: string;
        avatar?: string;
    }): any;
    updateUser(input:any): Promise<boolean>;
    instructorLogin(email:string,password:string):any;
    activateInstructor(instructorData: { name: string; email: string; password: string }): any;
    
}

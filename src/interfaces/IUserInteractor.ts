export interface IInstructorInteractor {
    userRegister(input: any): Promise<boolean>;
    updateUser(input:any): Promise<boolean>;
    loginUser(input:any):Promise<boolean>
    
}

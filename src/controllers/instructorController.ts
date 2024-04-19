import { IInstructorInteractor } from "../interfaces/IInstructorInteractor";

export class InstructorController {
  private interactor: IInstructorInteractor;

  constructor(interactor: IInstructorInteractor) {
    this.interactor = interactor;
  }

  onRegister: any = async (call: any, callback: any) => {
    try {
      const request = call.request as {
        name: string;
        email: string;
        password: string;
      };
      const response = await this.interactor.instructorRegister(request);
      if (response.registerStatus) {
        callback(null, {
          msg: "OTP send",
          registerStatus: true,
          instructorData: response.activationToken,
        });
      } else {
        callback(null, {
          msg: "User Already exists",
          registerStatus: false,
        });
      }
    } catch (error) {
      callback(error);
    }
  };

  onActivateInstructor: any = async (call: any, callback: any) => {
    try {
      console.log("otp");
      const request = call.request as {
        name: string;
        email: string;
        password: string;
      };
      const response = await this.interactor.activateInstructor(request);
      if (response) {
        callback(null, {
          status: true,
        });
      } else {
        callback(null, {
          status: false,
        });
      }
    } catch (err) {
      callback(err);
    }
  };

  onLogin: any = async (call: any, callback: any) => {
    try {
      console.log("hereeeeeeeeeeeeeeeeeeeeeeee");
      const { email, password } = call.request as {
        email: string;
        password: string;
      };
      console.log(email,password,"kkkkk")
      const response = await this.interactor.instructorLogin(email, password);
      console.log(response, "resssssssssssssssssssssssss");
      callback(null, {
        msg: response.msg,
        status: response.status,
        activationToken: response.activationToken,
        loginStatus: response.loginStatus,
      });
    } catch (error) {
      callback(error);
    }
  };

  onGetAllInstructors: any = async (call: any, callback: any) => {
    try {
      const response = await this.interactor.getAllInstructors();
      console.log(response, "contr resssssssssssssssssssss");
    
      if (response && response.length > 0) {
        const instructors = response
    
        callback(null, { instructors: instructors });
      } else {
        callback(null, { instructors: [] }); // Sending an empty array if there are no users
      }
    } catch (error) {
      callback(error);
    }
    
  }

  onBlockUnblock: any = async (call: any, callback: any) => {
    try {
      const {id,isVerified} = call.request 
      console.log(call.request, "0000000000000000000000",isVerified)
      const response = await this.interactor.blockUnblockInstructor(id,isVerified);
      console.log(response, "contr ressssssssssssssssssss");
    
      if (response) {
        
        callback(null, 
          {instructorStatus : true}
        );
      } else {
        callback(null, {instructorStatus : false}); // Sending an empty array if there are no users
      }
    } catch (error) {
      callback(error);
    }
    
  }


}

import { EMPTY } from "../app/constants/string.constants";

export class LoginModel {
    username : string;
    password : string;
    constructor(userLoginDetails: LoginModel) {
        {
          this.username = userLoginDetails.username || EMPTY;
          this.password = userLoginDetails.password || EMPTY;

        }
    }
}

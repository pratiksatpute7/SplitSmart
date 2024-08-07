import { EMPTY } from "../app/constants/string.constants";

export class FriendModel {
    firstName : string;
    lastName : string;
    constructor(friendDetails: FriendModel) {
        {
          this.firstName = friendDetails.firstName || EMPTY;
          this.lastName = friendDetails.lastName || EMPTY;
        }
    }
}
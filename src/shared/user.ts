import { Submission } from "./submission";
import { Tapout } from "./tapout";

export class User {
  userID: number;
  firstName: string;
  lastName: string;
  userName: string;
  userPass: string;
  userSubs: Submission[];
  userTaps: Tapout[];

  public constructor(
    userID: number,
    firstName: string,
    lastName: string,
    userName: string,
    userPass: string,
    userSubs: Submission[],
    userTaps: Tapout[]
  ) {
    this.userID = userID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.userPass = userPass;
    this.userSubs = userSubs;
    this.userTaps = userTaps;
  }

  public getFavoriteSub(): string {
    if (this.userSubs.length < 1) {
      return "";
    }
    let tracker = {},
      maxCount = 1;
    let favoriteSub = this.userSubs[0].subName;
    this.userSubs.forEach(element => {
      let subName = element.subName;
      if (subName in tracker) {
        tracker[subName] += 1;
      } else {
        tracker[subName] = 1;
      }
      if (tracker[subName] > maxCount) {
        maxCount = tracker[subName];
        favoriteSub = subName;
      }
    });
    return favoriteSub;
  }
}

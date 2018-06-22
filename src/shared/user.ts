import { Submission } from "./submission"
import { Tapout } from "./tapout"

export class User {
    userID: number;
    firstName: string;
    lastName: string;
    userName: string;
    userPass: string;
    userSubs: Submission[];
    userTaps: Tapout[];

    public getFavoriteSub(): string {
        if (this.userSubs.length < 1) {
            return '';
        }
        let tracker = {}, maxCount = 1;
        let favoriteSub = this.userSubs[0].submission;
        this.userSubs.forEach(element => {
            let subName = element.submission;
            if (subName in tracker) {
                tracker[subName] += 1;
            }
            else {
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

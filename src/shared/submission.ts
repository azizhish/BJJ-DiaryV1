export interface Submission{
    subname: string;
    date: Date | string;
 }

 export class SubmissionGroup {
    static subs = [
      {value: 'Triangle', viewValue: 'Triangle'},
      {value: 'Armbar', viewValue: 'Armbar'},
      {value: 'Kimora', viewValue: 'Kimora'}
    ];
  }
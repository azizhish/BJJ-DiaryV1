export interface Tapout {
  tapout: string
  date: Date | string
}

export class TapGroups {
  static taps = [
    { value: 'Triangle', viewValue: 'Triangle' },
    { value: 'Armbar', viewValue: 'Armbar' },
    { value: 'Kimora', viewValue: 'Kimora' },
  ]
}

export class GetAnimal {
  static readonly type = '[Zoo] Get Animal';
  // constructor(public name: string) {}
}

export class AddAnimal {
  static readonly type = '[Zoo] Add Animal';
    constructor(public name: string) {}
}

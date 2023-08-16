import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AddAnimal, GetAnimal } from '../store/animal.actions';
import { ZooState } from '../store/animal.state';
import { Observable } from 'rxjs';
import { AnimalAddInterface } from '../model/AnimalAdd.model';
import { AnimalGetInterface } from '../model/AnimalGet.model';
@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css'],
})
export class ZooComponent implements OnInit {
  constructor(private store: Store) {}

  // obj = {
  //   fname: '',
  // }
  ngOnInit(): void {
    this.getAnimal();
  }

  @Select(ZooState.getAnimalSelector) getAnimalOb$:
    | Observable<AnimalGetInterface[]>
    | undefined;

  @Select(ZooState.addAnimalSelector) AddAnimalOb$:
    | Observable<AnimalGetInterface[]>
    | undefined;

  getAnimal() {
    this.store.dispatch(new GetAnimal());
    this.getAnimalOb$?.subscribe((res: any) => console.log(res));
  }

  addAnimal(name: string) {
    this.store.dispatch(new AddAnimal(name));
    this.AddAnimalOb$?.subscribe((res: any) => console.log('name',res));
  }
}

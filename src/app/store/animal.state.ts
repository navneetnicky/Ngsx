import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AnimalGetInterface } from '../model/AnimalGet.model';
import { AnimalAddInterface } from '../model/AnimalAdd.model';
import { Injectable } from '@angular/core';
import { AddAnimal, GetAnimal } from './animal.actions';
import { ApiService } from '../apiService/api.service';
import { tap } from 'rxjs';
export interface ZooStateModel {
  GetAnimal: AnimalGetInterface[];
  AddAnimal: AnimalAddInterface[];
}

@State<ZooStateModel>({
  name: 'Zoo',
  defaults: {
    GetAnimal: [],
    AddAnimal: [],
  },
} )
  
@Injectable()
export class ZooState {
  constructor(private apiService: ApiService) {}

  @Selector()
  static getAnimalSelector(state: ZooStateModel) {
    return state.GetAnimal;
  }

  @Action(GetAnimal)
  getAnimalStateAction(ctx: StateContext<ZooStateModel>) {
    return this.apiService.getAnimalService().pipe(
      tap((res: any) => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          GetAnimal: res,
        });
      })
    );
  }

    @Selector()
  static addAnimalSelector(state: ZooStateModel) {
    return state.AddAnimal;
  }

  @Action(AddAnimal)
  addAnimalStateAction(ctx: StateContext<ZooStateModel>, action: any) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      AddAnimal: action.name,
    });
  }
}

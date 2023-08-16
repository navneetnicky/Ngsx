import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin'
import { NgxsDevelopmentModule, NgxsModule } from '@ngxs/store';
import { ZooComponent } from './zoo/zoo.component';
import { ZooState } from './store/animal.state';

const routes: Routes = [
  {
      path:'zoo', component:ZooComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),NgxsLoggerPluginModule.forRoot(),NgxsReduxDevtoolsPluginModule.forRoot(),NgxsModule.forRoot([ZooState])],
  exports: [ RouterModule ],

})
export class AppRoutingModule { }

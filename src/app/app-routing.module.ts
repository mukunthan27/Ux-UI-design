import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"", component:RegisterComponent},
  {path:"submit", component:ListComponent},
  {path:"update", component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

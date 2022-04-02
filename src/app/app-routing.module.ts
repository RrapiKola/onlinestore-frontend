import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ProductComponent } from './product/product.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'products',component:  ProductComponent},
  {path:'users',component: UserComponent},
  {path:'add-user',component:AddUserComponent},
  {path:'',redirectTo:'users',pathMatch:'full'},
  {path:'update-user/:id',component:UpdateUserComponent},
  {path:'user-details/:id',component:UserDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

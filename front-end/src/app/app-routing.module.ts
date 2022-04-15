import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

//import { AuthGuard } from './guards/auth.guard';

// ROUTE TABLE for the components which will be rendered in <router-outlet></router-outlet>
const routes: Routes = [ // the order of the routes MATTER! (top->down)
  { path: 'home', component: HomeComponent },
  //{ path: 'tests', component: TestsComponent },
  //{ path: 'login', component: LoginComponent },  

  { path: '**', redirectTo: '/home' } // else/erros (wildcard) - "route safety"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//-------------------------------
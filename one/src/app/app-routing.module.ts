import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AllocComponent } from './alloc/alloc.component';

const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent,
    data: { title: 'User' }
  },
  {
    path: 'Task',
    component: AboutComponent,
    data: { title: 'Task' }
  },
  {
    path: 'Allocation',
    component: AllocComponent,
    data: { title: 'Allocation' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

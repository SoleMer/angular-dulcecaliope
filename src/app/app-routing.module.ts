import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DulceCaliopeAboutComponent } from './dulce-caliope-about/dulce-caliope-about.component';
import { DulceCaliopeInfoComponent } from './dulce-caliope-info/dulce-caliope-info.component';
import { DulceCaliopePrendasComponent } from './dulce-caliope-prendas/dulce-caliope-prendas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'prendas',
    pathMatch: 'full',
  },
  {
    path: 'prendas',
    component: DulceCaliopePrendasComponent,
  },
  {
    path: 'about',
    component: DulceCaliopeAboutComponent,
  },
  {
    path: 'info',
    component: DulceCaliopeInfoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

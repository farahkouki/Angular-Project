import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { DetailResidenceComponent } from './detail-residence/detail-residence.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  
  {path: 'residence', component : ResidencesComponentComponent},
  {path: 'add-residence', component : AddResidenceComponent},
  {path: 'detailR', component : DetailResidenceComponent},
  {path: 'add-residence', component : AddResidenceComponent},
  {path : 'updateRes/:id', component : AddResidenceComponent},
  {path : '**' , component : NotFoundComponent}

  
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

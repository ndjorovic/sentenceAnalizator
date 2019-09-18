import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculationComponent } from './components/calculation/calculation.component';
import { LexiconComponent } from './components/lexicon/lexicon.component';

const routes: Routes = [
  
  {
    path: 'lexicon',
    component: LexiconComponent
  },
  {
    path: 'calculation',
    component: CalculationComponent
  },
  { path: '',
    redirectTo: '/lexicon',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

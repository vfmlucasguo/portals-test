import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpPage } from './help.page';

const routes: Routes = [
  {
    path: '',
    component: HelpPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpPageRoutingModule {}

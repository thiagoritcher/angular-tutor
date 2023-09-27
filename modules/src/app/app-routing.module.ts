import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeralModule } from './geral/geral.module';
import { PessoaComponent } from './geral/pessoa/pessoa.component';

const routes: Routes = [
{ path: '/', component: PessoaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

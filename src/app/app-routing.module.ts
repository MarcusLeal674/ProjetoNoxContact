import { RegisterContactsModule } from './register-contacts/register-contacts.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    // otherwise redirect to home
    { path: '', pathMatch: 'full', redirectTo: 'contacts' },
    {
      path: 'contacts',
      loadChildren: () => import('./register-contacts/register-contacts.module').then(m => m.RegisterContactsModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

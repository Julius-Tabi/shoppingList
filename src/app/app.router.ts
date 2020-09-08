import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


export const router: Routes = [

    {path: '', component: ShoppingListComponent},
   
   
];

export const routes: ModuleWithProviders<any> = RouterModule.forRoot(router)
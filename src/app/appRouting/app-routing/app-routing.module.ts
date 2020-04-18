import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"

import { RecipesComponent } from 'src/app/recipes/recipes.component';
import { ShoppingListComponent } from 'src/app/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from 'src/app/shopping-list/shopping-edit/shopping-edit.component';
import { RecipeStartComponent } from 'src/app/recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from 'src/app/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from 'src/app/recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  {path:'', redirectTo: '/recipes', pathMatch: 'full'},
  {path:'["/"]', component: RecipesComponent},
  {path:'recipes', component: RecipesComponent, children: [
   {path: '', component: RecipeStartComponent},
   {path: 'new', component: RecipeEditComponent},
   {path:':id', component: RecipeDetailComponent},
   {path: ':id/edit', component: RecipeEditComponent}
  ]},
  {path:'shopping', component: ShoppingListComponent, children: [
    {path: 'edit', component: ShoppingEditComponent}
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

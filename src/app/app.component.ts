import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'RecipeBook';

  currentPage = 'recipe';

  onPageSelected(selectFeature: string) {
    console.log(selectFeature);
    this.currentPage = selectFeature;
  }
}

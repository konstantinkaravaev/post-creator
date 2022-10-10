import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import { CreateSapcesPipe } from './shared/create-spaces.pipe';
import { FormsModule } from '@angular/forms';
import { RandomColorDirective } from './shared/directives/random-color.directive';
import { BorderAppearDirective } from './shared/directives/border-appear.directive';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostComponent,
    CreateSapcesPipe,
    RandomColorDirective,
    BorderAppearDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

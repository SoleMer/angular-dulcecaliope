import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClothesListComponent } from './clothes-list/clothes-list.component';
import { FormsModule } from '@angular/forms';
import { DulceCaliopeAboutComponent } from './dulce-caliope-about/dulce-caliope-about.component';
import { DulceCaliopePrendasComponent } from './dulce-caliope-prendas/dulce-caliope-prendas.component';
import { CartComponent } from './cart/cart.component';
import { DulceCaliopeInfoComponent } from './dulce-caliope-info/dulce-caliope-info.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    ClothesListComponent,
    DulceCaliopeAboutComponent,
    DulceCaliopePrendasComponent,
    CartComponent,
    DulceCaliopeInfoComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

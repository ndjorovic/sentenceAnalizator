import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LexiconComponent } from './components/lexicon/lexicon.component';
import { CalculationComponent } from './components/calculation/calculation.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { EditLexiconComponent } from './components/dialog/edit-lexicon/edit-lexicon.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonToggleModule} from '@angular/material/button-toggle';



@NgModule({
  declarations: [
    AppComponent,
    LexiconComponent,
    CalculationComponent,
    SidenavComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    EditLexiconComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatButtonToggleModule
  ],
  entryComponents: [LexiconComponent, EditLexiconComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

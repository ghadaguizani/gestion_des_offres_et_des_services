import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialog, MatDialogConfig, MatDialogModule} from '@angular/material/dialog';
import { matDialogAnimations } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AlertComponent } from './alert/alert.component';
import { UserComponent } from './user/user.component';
import { DialogComponent } from './dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateUserComponent } from './update-user/update-user.component';
import { matFormFieldAnimations, MatFormFieldModule} from '@angular/material/form-field';
import { ConnexionComponent } from './connexion/connexion.component';
import { ImageComponent } from './image/image.component';
import { DialogUpdateComponent } from './dialog-update/dialog-update.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {matSnackBarAnimations, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDialogRef } from '@angular/material/dialog';
import { UpdateDialogPwdComponent } from './update-dialog-pwd/update-dialog-pwd.component';
//import { UpdatePaswwordComponent } from './update-paswword/update-paswword.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { Accueil2Component } from './accueil2/accueil2.component';
import { JardinageComponent } from './jardinage/jardinage.component';
import { ServicesExistantsComponent } from './services-existants/services-existants.component';
import { ServicesBricolageComponent } from './services-bricolage/services-bricolage.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { TestComponent } from './test/test.component';
import { NgsRevealModule} from 'ngx-scrollreveal';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { ServiceComponent } from './service/service.component';
import { FilterPipe } from './pipes/filter.pipe';
import { Test2Component } from './test2/test2.component';
import { RegisterComponent } from './register/register.component';
import { AjoutServiceComponent } from './ajout-service/ajout-service.component';
import { MatSelectModule } from '@angular/material/select';
import { DetailsComponent } from './details/details.component';
import { AjoutAnnonceComponent } from './ajout-annonce/ajout-annonce.component';
import { ProfilComponent } from './profil/profil.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { Test3Component } from './test3/test3.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { UpdateAnnonceComponent } from './update-annonce/update-annonce.component';
import { AjoutReclamationComponent } from './ajout-reclamation/ajout-reclamation.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { SidenavComponent } from './admin/sidenav/sidenav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DragDropComponent } from './admin/drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatRadioModule } from '@angular/material/radio';
import { MatTreeModule } from '@angular/material/tree';
import { ServicesEnAttenteComponent } from './services-en-attente/services-en-attente.component';
import { EnabledServiceComponent } from './admin/enabled-service/enabled-service.component';
import { DisabledServicesComponent } from './admin/disabled-services/disabled-services.component';
import { EnabledAnnoncesComponent } from './admin/enabled-annonces/enabled-annonces.component';
import { DisabledAnnoncesComponent } from './admin/disabled-annonces/disabled-annonces.component';
import { ServiceByUserComponent } from './service-by-user/service-by-user.component';
import { AnnoncesByUserComponent } from './annonces-by-user/annonces-by-user.component';
import { ChartsModule } from 'ng2-charts';
import { AdminModule } from './admin/admin.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    HeaderComponent,
    AlertComponent,
    UserComponent,
    DialogComponent,
    UpdateUserComponent,
    ConnexionComponent,
    ImageComponent,
    DialogUpdateComponent,
    UpdateDialogPwdComponent,
    UpdatePasswordComponent,
    
    Accueil2Component,
    JardinageComponent,
    ServicesExistantsComponent,
    ServicesBricolageComponent,
    AnnoncesComponent,
    TestComponent,
    NavbarComponent,
    SliderComponent,
    ServiceComponent,
    FilterPipe,
    Test2Component,
    RegisterComponent,
    AjoutServiceComponent,
    DetailsComponent,
    AjoutAnnonceComponent,
    ProfilComponent,
    Test3Component,
    UpdateServiceComponent,
    UpdateAnnonceComponent,
    AjoutReclamationComponent,
    MessagesComponent,
    DashboardComponent,
    SidenavComponent,
    TableComponent,
    DragDropComponent,
    ServicesEnAttenteComponent,
    EnabledServiceComponent,
    DisabledServicesComponent,
    EnabledAnnoncesComponent,
    DisabledAnnoncesComponent,
    ServiceByUserComponent,
    AnnoncesByUserComponent,
    
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,MatInputModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatTabsModule,
    NgsRevealModule,  
    FormsModule,
    MatSelectModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    DragDropModule,
    MatRadioModule,
    MatTreeModule    
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
  entryComponents:[InscriptionComponent]
})
export class AppModule { }

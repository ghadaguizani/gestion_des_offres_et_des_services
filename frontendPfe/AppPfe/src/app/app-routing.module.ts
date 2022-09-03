import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { AlertComponent } from './alert/alert.component';
import { UserComponent } from './user/user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ImageComponent } from './image/image.component';
import { DialogUpdateComponent } from './dialog-update/dialog-update.component';
import { UpdateDialogPwdComponent } from './update-dialog-pwd/update-dialog-pwd.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { Accueil2Component } from './accueil2/accueil2.component';
import { JardinageComponent } from './jardinage/jardinage.component';
import { ServicesExistantsComponent } from './services-existants/services-existants.component';
import { ServicesBricolageComponent } from './services-bricolage/services-bricolage.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { TestComponent } from './test/test.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { ServiceComponent } from './service/service.component';
import { Test2Component } from './test2/test2.component';
import { RegisterComponent } from './register/register.component';
import { AjoutServiceComponent } from './ajout-service/ajout-service.component';
import { AjoutServiceGuard } from './guard/ajout-service.guard';
import { AjoutAnnonceComponent } from './ajout-annonce/ajout-annonce.component';
import { AjoutAnnonceGuard } from './guard/ajout-annonce.guard';
import { ProfilComponent } from './profil/profil.component';
import { Test3Component } from './test3/test3.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { UpdateAnnonceComponent } from './update-annonce/update-annonce.component';
import { AjoutReclamationComponent } from './ajout-reclamation/ajout-reclamation.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SidenavComponent } from './admin/sidenav/sidenav.component';
import { TableComponent } from './table/table.component';
import { DragDropComponent } from './admin/drag-drop/drag-drop.component';
import { ServicesEnAttenteComponent } from './services-en-attente/services-en-attente.component';
import { EnabledServiceComponent } from './admin/enabled-service/enabled-service.component';
import { DisabledServicesComponent } from './admin/disabled-services/disabled-services.component';
import { EnabledAnnoncesComponent } from './admin/enabled-annonces/enabled-annonces.component';
import { DisabledAnnoncesComponent } from './admin/disabled-annonces/disabled-annonces.component';
import { ServiceByUserComponent } from './service-by-user/service-by-user.component';
import { AnnoncesByUserComponent } from './annonces-by-user/annonces-by-user.component';
import { ChartsComponent } from './admin/charts/charts.component';

const routes: Routes = [  
  {path:"inscription",component:InscriptionComponent},
  {path:"alert",component:AlertComponent},
  {path:"update/:id",component:UpdateUserComponent},
  {path:"login",component:ConnexionComponent},
  {path:"image",component:ImageComponent},
  {path:"update",component:DialogUpdateComponent},
  {path:"updatepwd/:id",component:UpdatePasswordComponent},
  {path:"",component:Accueil2Component},
  {path:"jardinage",component:JardinageComponent},
  {path:"servicesExistants/:category",component:ServicesExistantsComponent},
  {path:"servicesBricolage/:subCategory",component:ServicesBricolageComponent},
  {path:"annonces",component:AnnoncesComponent},
  {path:"test",component:TestComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"slider",component:SliderComponent},
  {path:"service/:id",component:ServiceComponent},
  {path:"test2",component:Test2Component},
  {path:"register",component:RegisterComponent},
  {path:"ajoutService",component:AjoutServiceComponent, canActivate:[AjoutServiceGuard]},
  {path:"ajoutAnnonce", component:AjoutAnnonceComponent , canActivate:[AjoutAnnonceGuard]},
  {path:"profil/:id", component:ProfilComponent,
  children:[
    {path:"services", component:ServiceByUserComponent},
    {path:"annonces", component:AnnoncesByUserComponent}
  ]
  },
  
  {path:"test3", component:Test3Component},
  {path:"updateService/:id", component:UpdateServiceComponent},
  {path:"updateAnnonce/:id", component:UpdateAnnonceComponent},
  {path:"ajoutReclamation", component:AjoutReclamationComponent},
  {path:"sidenav", component:SidenavComponent,
  children: [
  {path:"table", component:TableComponent},
  {path:"drag-drop", component:DragDropComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"messages", component:MessagesComponent},
  {path:"servicesEnAttente", component:ServicesEnAttenteComponent},
  {path:"enabledServices", component:EnabledServiceComponent},
  {path:"disabledServices", component:DisabledServicesComponent},
  {path:"enabledAnnonces", component:EnabledAnnoncesComponent},
  {path:"disabledAnnonces", component:DisabledAnnoncesComponent},
  {path:"charts", component:ChartsComponent}
]
}


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

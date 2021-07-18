import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './pages/team/team.component';
import { RoutingRedirectGuard } from './core/routing-redirect.guard';
import { ProductsComponent } from './pages/products/products.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

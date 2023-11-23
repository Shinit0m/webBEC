import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full'},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, 
  { path: 'categorias', loadChildren: () => import('./pages/games/categorias/categorias.module').then(m => m.CategoriasModule) },
  { path: 'consolas', loadChildren: () => import('./pages/games/consolas/consolas.module').then(m => m.ConsolasModule) },
  { path: 'categorias/arcade', loadChildren: () => import('./pages/games/list-games/list-games.module').then(m => m.ListGamesModule) },
  { path: 'categorias/plataforma', loadChildren: () => import('./pages/games/list-games/list-games.module').then(m => m.ListGamesModule) },
  { path: 'categorias/disparos', loadChildren: () => import('./pages/games/list-games/list-games.module').then(m => m.ListGamesModule) },
  { path: 'categorias/peleas', loadChildren: () => import('./pages/games/list-games/list-games.module').then(m => m.ListGamesModule) },
  { path: 'categorias/aventura', loadChildren: () => import('./pages/games/list-games/list-games.module').then(m => m.ListGamesModule) },
  { path: 'categorias/rpg', loadChildren: () => import('./pages/games/list-games/list-games.module').then(m => m.ListGamesModule) },
  { path: 'categorias/puzzle', loadChildren: () => import('./pages/games/list-games/list-games.module').then(m => m.ListGamesModule) },
  { path: 'categorias/moba', loadChildren: () => import('./pages/games/list-games/list-games.module').then(m => m.ListGamesModule) },
  { path: 'categorias/preguntas', loadChildren: () => import('./pages/games/list-games/list-games.module').then(m => m.ListGamesModule) },
  { path: 'categorias/musical', loadChildren: () => import('./pages/games/list-games/list-games.module').then(m => m.ListGamesModule) },
  { path: 'categorias/ejercicio', loadChildren: () => import('./pages/games/list-games/list-games.module').then(m => m.ListGamesModule) },
  { path: 'categorias/estrategia', loadChildren: () => import('./pages/games/list-games/list-games.module').then(m => m.ListGamesModule) },
  { path: 'categorias/simulacion', loadChildren: () => import('./pages/games/list-games/list-games.module').then(m => m.ListGamesModule) },
  { path: 'categorias/deportes', loadChildren: () => import('./pages/games/list-games/list-games.module').then(m => m.ListGamesModule) },
  { path: 'categorias/carreras', loadChildren: () => import('./pages/games/list-games/list-games.module').then(m => m.ListGamesModule) },
  { path: 'categorias/juegos-de-mesa', loadChildren: () => import('./pages/games/list-games/list-games.module').then(m => m.ListGamesModule) },
  { path: 'categorias/juegos-de-miedo', loadChildren: () => import('./pages/games/list-games/list-games.module').then(m => m.ListGamesModule) },
  { path: 'categorias/battle-royal', loadChildren: () => import('./pages/games/list-games/list-games.module').then(m => m.ListGamesModule) },
  { path: 'categorias/mmo', loadChildren: () => import('./pages/games/list-games/list-games.module').then(m => m.ListGamesModule) },
  { path: 'categorias/realidad-virtual', loadChildren: () => import('./pages/games/list-games/list-games.module').then(m => m.ListGamesModule) },
  { path: 'consolas/play-station', loadChildren: () => import('./pages/games/list-games/list-games.module').then(m => m.ListGamesModule) },
  { path: 'consolas/xbox', loadChildren: () => import('./pages/games/list-games/list-games.module').then(m => m.ListGamesModule) },
  { path: 'consolas/nintendo', loadChildren: () => import('./pages/games/list-games/list-games.module').then(m => m.ListGamesModule) },
  { path: 'consolas/movil', loadChildren: () => import('./pages/games/list-games/list-games.module').then(m => m.ListGamesModule) },
  { path: 'consolas/pc', loadChildren: () => import('./pages/games/list-games/list-games.module').then(m => m.ListGamesModule) },
  { path: 'juegos/:nombre', loadChildren: () => import('./pages/games/gameview/gameview.module').then(m => m.GameviewModule) },
  { path: 'sign-up', loadChildren: () => import('./pages/auth/sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: 'login', loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule) },
  { path: 'comments', loadChildren: () => import('./pages/comments/comments.module').then(m => m.CommentsModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '**', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

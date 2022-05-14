import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { CreatorsComponent } from './creators/creators.component';
import { DetailComponent } from './detail/detail.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SeriesComponent } from './series/series.component';


const routes: Routes = [
    {
        path: 'characters',
        component: CharactersComponent,
    },
    {
        path: 'comics',
        component: ComicsComponent,
    },
    {
        path: 'events',
        component: EventsComponent,
    },
    {
        path: 'series',
        component: SeriesComponent,
    },
    {
        path: 'creators',
        component: CreatorsComponent,
    },
    {
        path: 'characters/:id',
        component: DetailComponent,
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '**',
        component: NotfoundComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
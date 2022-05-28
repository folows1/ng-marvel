import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { ImagePipePipe } from './image-pipe.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailComponent } from './detail/detail.component';
import { ComicsComponent } from './comics/comics.component';
import { EventsComponent } from './events/events.component';
import { SeriesComponent } from './series/series.component';
import { CreatorsComponent } from './creators/creators.component';
import { LoadingComponent } from './loading/loading.component';
import { EndyearPipe } from './endyear.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    ImagePipePipe,
    HeaderComponent,
    HomeComponent,
    NotfoundComponent,
    DetailComponent,
    ComicsComponent,
    EventsComponent,
    SeriesComponent,
    CreatorsComponent,
    LoadingComponent,
    EndyearPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { InlineMessageComponent } from './components/inline-message/inline-message.component';
import { BlockMessageComponent } from './components/block-message/block-message.component';
import { SplashscreenComponent } from './components/splashscreen/splashscreen.component';
import { SimpleHeaderComponent } from './components/simple-header/simple-header.component';
import { NavBottomComponent } from './components/nav-bottom/nav-bottom.component';
import { HeaderComponent } from './components/header/header.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { FooterComponent } from './components/footer/footer.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { LoactionMapperComponent } from './components/loaction-mapper/loaction-mapper.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { TagsInputComponent } from './components/tags-input/tags-input.component';

@NgModule({
  declarations: [NavigationComponent, InlineMessageComponent, BlockMessageComponent,
    SplashscreenComponent,
    SimpleHeaderComponent,
    NavBottomComponent,
    HeaderComponent,
    EmptyStateComponent,
    FooterComponent,
    TabsComponent,
    LoactionMapperComponent,
    DataTableComponent,
    TagsInputComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    NavigationComponent,
    RouterOutlet,
    ReactiveFormsModule,
    FormsModule,
    InlineMessageComponent,
    BlockMessageComponent,
    SplashscreenComponent,
    SimpleHeaderComponent,
    NavBottomComponent,
    HeaderComponent,
    EmptyStateComponent,
    FooterComponent,
    TabsComponent,
    LoactionMapperComponent,
    DataTableComponent,
    TagsInputComponent,
  ],
  providers: [
    provideHttpClient(withFetch())
  ]
})
export class SharedModule { }

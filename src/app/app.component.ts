import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DataFetcherComponent } from './data-fetcher/data-fetcher.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PostListComponent,
    CommonModule,
    DataFetcherComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular18-http';
  private http = inject(HttpClient);
  data: any;

  fetchData() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((response) => {
        this.data = response;
      });
  }
}

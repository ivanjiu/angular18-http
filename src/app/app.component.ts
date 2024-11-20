import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DataFetcherComponent } from './data-fetcher/data-fetcher.component';
import { CustomHttpParameterCodec } from './services/CustomHttpParameterCodec';

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

  ngOnInit() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    let httpParams = new HttpParams({
      encoder: new CustomHttpParameterCodec(),
    });
    httpParams = httpParams.set('id', 1);
    httpParams = httpParams.set('user Id', 1);

    this.http.get(url, { params: httpParams }).subscribe((response) => {
      this.data = response;
    });

    let decodeUrl = '/api/config?filter=ALL_POSTS&details=enabled_features';
    const params = new HttpParams({
      fromString: decodeUrl.split('?')[1],
      encoder: new CustomHttpParameterCodec(),
    });

    console.log(params.get('filter'));
    console.log(params.get('details'));
  }
}

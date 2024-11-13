import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-data-fetcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-fetcher.component.html',
  styleUrl: './data-fetcher.component.css',
})
export class DataFetcherComponent {
  private http = inject(HttpClient);
  jsonData$: any;
  textData: any;
  imageData: any;

  fetchJsonData() {
    this.jsonData$ = this.http.get(
      `https://jsonplaceholder.typicode.com/posts/1`
    );
  }

  fetchTextData() {
    this.http.get('test.txt', { responseType: 'text' }).subscribe((data) => {
      this.textData = data;
    });
  }

  fetchImageData() {
    this.http
      .get('images.png', { responseType: 'arraybuffer' })
      .subscribe((data) => {
        this.imageData = data;
      });
  }
}

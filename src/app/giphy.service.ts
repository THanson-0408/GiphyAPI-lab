import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  baseUrl: string = 'https://api.giphy.com/v1/gifs/search';
  key: string = 'ntPedybRbnFt2Ps5msyRAVXcUkFi4c9e';

  constructor(private giphy: HttpClient) {}

  getData = (searchTerm: string): any => {
    return this.giphy.get(this.baseUrl, {
      params: {
        api_key: this.key,
        q: searchTerm,
      },
    });
  };
}

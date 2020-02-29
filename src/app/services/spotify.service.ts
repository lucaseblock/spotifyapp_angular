import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

getNewReleases() {

  const headers = new HttpHeaders({
    'Authorization': 'Bearer BQAP_ZAHpUMJvtE2IENGdcqdNbr6eS4a8uNBzsiwsVQw90zNepZTHfrv0vJkodnc8Sixt5OZB6sgNSB9gEQ'
  });

 return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });

}

getArtista( termino: string ) {

  const headers = new HttpHeaders({
    'Authorization': 'Bearer BQAP_ZAHpUMJvtE2IENGdcqdNbr6eS4a8uNBzsiwsVQw90zNepZTHfrv0vJkodnc8Sixt5OZB6sgNSB9gEQ'
  });

  return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers });

  }

}

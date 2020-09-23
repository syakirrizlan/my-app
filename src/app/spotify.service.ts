import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  getHeader(query:string){
    const url ='https://api.spotify.com/v1/' + query;
    let headers = new HttpHeaders();

    headers = headers.append(
    'Authorization',    // tslint:disable-next-line: max-line-length
    "bearer BQCFMHAp1ObNLIcGh4W0pr_kiRteQrHlm907-4xNDSKHum_Y3DQZ_2YfeBrYn_GseHNV1JxD9Z3-4m1mSXzoYNz5XBvsenckJdhxLNxpWw2rDPrD4DyADmo9OzV9EW4DB1352VFNFXuRkT0lD7YYZqwD5uMiXT0"
    );
    return this._http.get(url,{headers});
  }
    
  //tslint:disable-next-line: variable-name
  constructor(private _http:HttpClient) {}

  searchMusic(str: string,type = 'artist'){
    const param = '&offset=0' + '&limit=20' + '&type=' + type + '&market=CA';
    const query = 'search?query=' + str + param;
    return this.getHeader(query);
  }
getArtist(id:string){
  const query = `artist/${id}`;
  return this.getArtist(query);
  }
}

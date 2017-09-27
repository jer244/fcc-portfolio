import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';

@Injectable()
export class WikiService {

  constructor(private http: Http) { }

  wikiSearch(topic: string) {
    return this.http.get(`https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&generator=search&prop=extracts|info&inprop=url&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=` + topic)
      .map((res: Response) => res.json())
  }
}

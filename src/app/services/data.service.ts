import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, filter, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl: string = 'https://www.scorebat.com/video-api/v1/';

  constructor(private http: HttpClient) { }

//   getContacts(): Observable<Array<Person>> {
//       return this.http.get<Array<Person>>(this.baseUrl + 'actors');
//   }

//   searchContacts(query: string): Observable<Array<Person>> {
//     return this.http.get<Array<Person>>(this.baseUrl + 'actors?lastName_like='+query);
// }

//   getContactsFiltered(): Observable<Array<Person>> {
//     return this.http.get(this.baseUrl + 'actors')
//     .pipe(
//         delay(2000),
//         map( (array: Array<object>) => {
//             return array.map( (obj: object) => {
//                 return new Person(obj['id'], obj['firstName'], obj['lastName'], obj['email'], obj['gender'])
//             })
//             .filter((person: Person)=> person.gender === 'Femme')
//         })
//     );
// }

//   addContact(person: Person): void {
//       this.http.post(this.baseUrl + 'actors/', person).subscribe();
//   }

//   deleteContact(id: number): void {
//       this.http.delete(this.baseUrl + 'actors/' + id).subscribe();
//   }

//   getToken(): string {
//       return "0123456789";
//   }

}

import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from'@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private baseUrl = "http://localhost:8080/api/users";

  constructor(private http : HttpClient) {

   }

  getUsers(): Observable<User[]>{
    debugger;
    let headers = new HttpHeaders();
    //headers = headers.append('Authorization', 'Basic cnJhcGlrb2xhQGFvbC5jb206cGFzc3dvcmQ=');
    return this.http.get<User[]>(`${this.baseUrl}`)
  }

  addUser(user:User):Observable<Object>{

    return this.http.post(`${this.baseUrl}`,user);
  }

  getUserById(id:number):Observable<User>{

    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }


  updateUser(id:number,user:User):Observable<Object>{

   return this.http.put(`${this.baseUrl}/${id}`,user)
  }
  deleteUser(id: number): Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}

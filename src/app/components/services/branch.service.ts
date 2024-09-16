import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  private apiUrl = 'http://localhost:5298/api/Branch'; // رابط الـ API

  constructor(private http: HttpClient) {}

  // وظيفة إضافة فرع جديد
  addBranch(branchName: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { name: branchName };

    return this.http.post<any>(this.apiUrl, body, { headers });
  }

  // وظيفة جلب جميع الفروع
  getBranches(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

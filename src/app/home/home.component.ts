import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router:Router,public http:HttpClient) { }
  subjectList_Manumits;
  ngOnInit() {
  }

  abc(){
    this.router.navigate(['/careers']);
  }

  loadSubjectsUsingHttpModule(){
    var url = `https://api.mlab.com/api/1/databases/manumits/collections/subjects?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz`
     
    this.http.get(url).subscribe((res)=>{
      this.subjectList_Manumits=res;
    })
  }


  loadSubjects(){
    var url = `https://api.mlab.com/api/1/databases/manumits/collections/subjects?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz`
      fetch(url)
      .then(function(res){return res.json()})
      .then((data)=>{       
        this.subjectList_Manumits=data;
      })
  }

}

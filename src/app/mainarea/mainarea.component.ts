import { Component} from '@angular/core';

@Component({
  selector: 'app-mainarea',
  templateUrl: './mainarea.component.html',
  styleUrls: ['./mainarea.component.css']
})
export class MainareaComponent 
{

  title = 'secondapp';
  flag;
  students = ['praveen','gubbala','srikanth','rahul']
}

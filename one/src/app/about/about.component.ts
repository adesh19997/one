import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  btnText: string="Add Task";
  Tasks: string;
  Status: string="Not Allocated";
  User: string="None";
  disp = [];
  submitted1 = false;
  submitted2 = false;
  RmTask: string;
  msg1: string;
  public Ydata = [{
    TText: '',
    S1Text: '',
    UsText: ''
  }];
  constructor() { }

  ngOnInit() {
    this.Ydata=JSON.parse(localStorage.getItem('key1'));
    //this.Ydata.splice(1,this.Ydata.length);
    //localStorage.setItem('key1', JSON.stringify(this.Ydata));
  }
  addTask(){
    this.Ydata.push({'TText': this.Tasks, 'S1Text':this.Status, 'UsText':this.User });
    
    this.Tasks='';
    
    localStorage.setItem('key1', JSON.stringify(this.Ydata));
  }

  onSubmit() { this.submitted1 = true; }

  removeT(){
    for (let i = 1; i < this.Ydata.length; i++) {
      if(this.Ydata[i].TText==this.RmTask){
        if(this.Ydata[i].S1Text!=="Allocated"){
        
          this.msg1="Task Removed";
          this.Ydata.splice(i,1);
          localStorage.setItem('key1', JSON.stringify(this.Ydata));
        }
        else{
          this.msg1="Task is Allocated to a User, Deallocate first";
        }
      }
      
    }
  }
  onSubmit1() { this.submitted2 = true; }
}

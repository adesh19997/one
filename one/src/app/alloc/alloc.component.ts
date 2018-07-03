import { Component, OnInit } from '@angular/core';
import { RadioControlValueAccessor } from '@angular/forms';
import { equal } from 'assert';
@Component({
  selector: 'app-alloc',
  templateUrl: './alloc.component.html',
  styleUrls: ['./alloc.component.scss']
})
export class AllocComponent implements OnInit {
 
  selected: string= 'Tasks';
  selected1: string= 'Users';
  selected3: string= 'Task';
  selected4: string= 'User';
  public Udata = [{
    UText: '',
    DText: '',
    SText: '',
    EText: '',
    StText: ''
  }];
  public Ydata = [{
    TText: '',
    S1Text: '',
    UsText: ''
  }];
  unTasks = [];
  unUsers = [];
  Tasks = [];
  Users = [];
  constructor() { }
  Stask: string;
  SUser: string;
  Check: string="start";
  ngOnInit() {
    this.Udata=JSON.parse(localStorage.getItem('key2'));
    this.Ydata=JSON.parse(localStorage.getItem('key1'));
    for (let i = 1; i < this.Udata.length; i++) {
      if(this.Udata[i].StText=="Not Allocated"){
        this.unUsers.push(this.Udata[i].UText);
      }
      else{
        this.Users.push(this.Udata[i].UText);
      }
    }
    for (let i = 1; i < this.Ydata.length; i++) {
      if(this.Ydata[i].S1Text=="Not Allocated"){
        this.unTasks.push(this.Ydata[i].TText);
      }
      else{
        if(this.Ydata[i].S1Text!=="Not Allocated" && this.Ydata[i].S1Text!=="Completed"){
          this.Tasks.push(this.Ydata[i].TText);
        }
      }
    }
      
  }

  select(){
      
      for (let i = 0; i < this.Udata.length; i++) {
        
        if(this.Udata[i].UText==this.selected1){
          this.Users.push(this.Udata[i].UText);
          this.Udata[i].StText=this.selected;
        }
      }
      for (let i = 0; i < this.Ydata.length; i++) {
        
        if(this.Ydata[i].TText==this.selected){
          this.Ydata[i].S1Text="Allocated";
          this.Ydata[i].UsText=this.selected1;
          this.Tasks.push(this.Ydata[i].TText);
        }
        
      }
      localStorage.setItem('key2', JSON.stringify(this.Udata));
      localStorage.setItem('key1', JSON.stringify(this.Ydata));

       
  }

  complete(){
    
    for (let i = 0; i < this.Ydata.length; i++) {
      
      if(this.Ydata[i].TText==this.selected3){
        
        this.Ydata[i].S1Text="Completed";
        const index: number = this.Tasks.indexOf(this.selected3);
        if (index !== -1) {
          this.Tasks.splice(index, 1);
          
        }
        else{
          this.Tasks.pop();
          
        } 
        
        for (let j = 0; j < this.Udata.length; j++) {
        
          if(this.Udata[j].UText==this.Ydata[i].UsText){
            this.unUsers.push(this.Udata[j].UText);
            this.Udata[i].StText="Not Allocated";
          }
        }
        
      }
    }
    localStorage.setItem('key2', JSON.stringify(this.Udata));
    localStorage.setItem('key1', JSON.stringify(this.Ydata));
  }

  dealloc(){
    
    for (let i = 0; i < this.Ydata.length; i++) {
      
      if(this.Ydata[i].TText==this.selected3){
        
        this.Ydata[i].S1Text="Not Allocated";
        this.Ydata[i].UsText="None";
        
        for (let j = 0; j < this.Udata.length; j++) {
        
          if(this.Udata[j].UText==this.Ydata[i].UsText){
            this.unUsers.push(this.Udata[j].UText);
            this.Udata[i].StText="Not Allocated";
          }
        }
        
      }
    }
    localStorage.setItem('key2', JSON.stringify(this.Udata));
    localStorage.setItem('key1', JSON.stringify(this.Ydata));
  }

  Abort(){
    
    for (let i = 0; i < this.Ydata.length; i++) {
      
      if(this.Ydata[i].TText==this.selected3){
        
        this.Ydata[i].S1Text="Aborted";
        this.Ydata[i].UsText="None";
        const index: number = this.Tasks.indexOf(this.selected3);
        if (index !== -1) {
          this.Tasks.splice(index, 1);
          
        }
        else{
          this.Tasks.pop();
          
        } 
        
        for (let j = 0; j < this.Udata.length; j++) {
        
          if(this.Udata[j].UText==this.Ydata[i].UsText){
            this.unUsers.push(this.Udata[j].UText);
            this.Udata[i].StText="Not Allocated";
          }
        }
        
      }
    }
    localStorage.setItem('key2', JSON.stringify(this.Udata));
    localStorage.setItem('key1', JSON.stringify(this.Ydata));
  }

  
    
  

}

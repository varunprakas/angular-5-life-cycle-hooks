import {Component, Injectable, OnInit, DoCheck, OnChanges,AfterViewChecked, AfterViewInit, AfterContentInit, AfterContentChecked, OnDestroy } from '@angular/core'


@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnChanges, DoCheck, AfterViewChecked, AfterViewInit, AfterContentInit, AfterContentChecked, OnDestroy{
  name:string = 'Angular';
  prefix:string = ''; 
  password: string = '';
  constructor(){
   this.name = 'Angular 2';
  }
  
  onGeneratePassword(pwd: string){
    this.password = pwd;
  }
  
  ngOnInit(){
    this.name = 'Angular 5';
    console.log('Parent ngOnInit() called');
  }
  
  ngOnChanges(){
    console.log('Parent ngOnChanges() called');
  }
  
  ngDoCheck(){
    console.log('Parent ngDoCheck() called')
  }
  
  ngAfterViewChecked(){
    console.log('Parent AfterViewChecked() called');
  } 
  
  ngAfterViewInit(){
    console.log('Parent ngAfterViewInit() called');
  }
  
  ngAfterContentInit(){
    console.log('Parent ngAfterContentInit() called');
  }
  
  ngAfterContentChecked(){
    console.log('Parent ngAfterContentChecked() called');
  }
  
  ngOnDestroy(){
    console.log('Parent ngOnDestroy() called');
  }
}
import {Component, Injectable, Input, Output, EventEmitter, AfterViewChecked, OnInit, OnChanges, DoCheck, AfterViewInit, AfterContentInit, AfterContentChecked, OnDestroy} from '@angular/core'

@Component({
  selector: 'random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit, OnChanges, DoCheck, AfterViewChecked, AfterViewInit, AfterContentInit, AfterContentChecked, OnDestroy{
  @Input() salt:string;
  @Output() generatePassword: EventEmitter<string> = new EventEmitter<string>();
  constructor(){
   this.salt = '';
  }
  
  random(){
    var t = new Date().getTime();
    this.generatePassword.emit(this.salt + t.toString());
  }
  
  ngOnInit(){
    console.log('Child ngOnInit() called');
  }
  
  ngOnChanges(){
    console.log('Child ngOnChanges() called');
  }
  
  ngDoCheck(){
    console.log('Child ngDoCheck() called');
  }
  
  ngAfterViewChecked(){
    console.log('Child AfterViewChecked() called');
  } 
  
  ngAfterViewInit(){
    console.log('Child ngAfterViewInit() called');
  }
  
  ngAfterContentInit(){
    console.log('Child ngAfterContentInit() called');
  }
  
  ngAfterContentChecked(){
    console.log('Child ngAfterContentChecked() called');
  }
  
  ngOnDestroy(){
    console.log('Child ngOnDestroy() called');
  } 
}
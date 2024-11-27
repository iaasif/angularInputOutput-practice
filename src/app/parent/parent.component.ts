import { Test1Service } from './../service/test-1.service';
import { Idata } from './../model/testModel';
import { Component, Inject } from '@angular/core';
import { Child1Component } from '../child-1/child-1.component';
import { Child2Component } from '../child-2/child-2.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [Child1Component, Child2Component],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  parentDataFromService: Test1Service = Inject(Test1Service);
  DemoDataFromParentDataService: Idata[] = [];

  testParentText: string = 'hello  ';
  aTestVar: string = 'bg-yellow-400 rounded-lg p-2';
  testMethod() {
    console.log('hi bro form test method');
  }

  ngOnInit(): void {
    this.testMethod();
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.DemoDataFromParentDataService =
      this.parentDataFromService.getDemoData();
    console.log('this is form parent data--> ', this.parentDataFromService);
    console.log('hi bro');
  }
}

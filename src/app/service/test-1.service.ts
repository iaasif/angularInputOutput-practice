import { Iquetion, Idata } from './../model/testModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Test1Service {
  constructor() {}

  protected demoQuestions: Iquetion[] = [
    {
      queId: 1,
      que: 'What is Angular?',
      queAns:
        'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.',
    },
    {
      queId: 2,
      que: 'What is TypeScript?',
      queAns:
        'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
    },
    {
      queId: 3,
      que: 'What is Dependency Injection?',
      queAns:
        'Dependency Injection is a design pattern used to implement IoC, allowing a class to request dependencies from an external source.',
    },
    {
      queId: 4,
      que: 'What is RxJS?',
      queAns:
        'RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.',
    },
    {
      queId: 5,
      que: 'What is a Component in Angular?',
      queAns:
        'A component controls a patch of the screen called a view and is defined with an HTML template and a class that contains logic.',
    },
  ];

  protected demoData: Idata[] = [
    {
      id: 1,
      name: 'Item One',
      description: 'This is the description for Item One.',
    },
    {
      id: 2,
      name: 'Item Two',
      description: 'This is the description for Item Two.',
    },
    {
      id: 3,
      name: 'Item Three',
      description: 'This is the description for Item Three.',
    },
    {
      id: 4,
      name: 'Item Four',
      description: 'This is the description for Item Four.',
    },
    {
      id: 5,
      name: 'Item Five',
      description: 'This is the description for Item Five.',
    },
  ];
}

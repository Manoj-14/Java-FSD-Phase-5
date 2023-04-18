import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  templateUrl: './lifecycle-demo.component.html',
  styleUrls: ['./lifecycle-demo.component.css'],
})
export class LifecycleDemoComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  change: string;
  text: string;

  constructor() {
    console.log('Component Life Cycle constructor');
  }

  ngOnInit(): void {
    console.log('LifeCycle:ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('LifeCycle:ngOnChanges');
    console.log(changes);
  }
  ngDoCheck(): void {
    console.log('LifeCycle:ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('LifeCycle:ngAfterContentinit');
  }
  ngAfterContentChecked(): void {
    console.log('LifeCycle:ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('LifeCycle:ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('LifeCycle:ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('LifeCycle:ngOnDestroy');
  }

  onChangeProduct() {
    this.text = this.change;
    console.log(this.text);
  }
}

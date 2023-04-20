import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css'],
})
export class ObservableDemoComponent implements OnInit, OnDestroy {
  count: number = 0;

  private intervalSubcription: Subscription;
  private customObservableSubcription: Subscription;

  ngOnInit(): void {
    this.intervalSubcription = interval(1000).subscribe((count) => {
      console.log(count);
    });

    const customObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next('A' + count);
        count++;
        if (count == 6) {
          observer.complete();
        }
        if (count > 10) {
          observer.error('Greater thsn 10');
        }
      }, 1000);
    });

    this.customObservableSubcription = customObservable.subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        alert(err.message);
      },
      () => {
        //parameter my empty
        console.log('Completed');
      }
    );
  }

  ngOnDestroy(): void {
    this.intervalSubcription.unsubscribe();
    this.customObservableSubcription.unsubscribe();
  }
}

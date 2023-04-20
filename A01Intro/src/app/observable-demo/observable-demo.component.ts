import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, filter, interval, map } from 'rxjs';

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
    // this.intervalSubcription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    const customObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
        if (count == 21) {
          observer.complete();
        }
        // if (count > 10) {
        //   observer.error('Greater thsn 10');
        // }
      }, 500);
    });

    this.customObservableSubcription = customObservable
      .pipe(
        filter((data: number) => {
          return data % 2 == 0;
        }),
        map((inpData: number) => {
          return 'A ' + inpData;
        })
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {
          alert(err.message);
        },
        () => {
          //parameter may empty
          console.log('Completed');
        }
      );
  }

  ngOnDestroy(): void {
    // this.intervalSubcription.unsubscribe();
    this.customObservableSubcription.unsubscribe();
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today = new Date();
    let todayWithNoTime: any = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      today.getDate()
    );
    let dateDiff = Math.ceil(todayWithNoTime - value);
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDiff * 0.001;
    var dateCounter = dateDifferenceSeconds / secondsInDay;
    if (dateCounter<= 0) {
      return 0;
    } else {
      return dateCounter;
    }
  }

}

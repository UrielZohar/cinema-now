import { Pipe, PipeTransform } from '@angular/core';

const TIMES_MAP: any = {
  '1': '10:00',
  '2': '14:00',
  '3': '21:00',
};

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(timeId: string): unknown {
    return TIMES_MAP[timeId];
  }

}

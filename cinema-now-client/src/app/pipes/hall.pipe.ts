import { Pipe, PipeTransform } from '@angular/core';


const HALLS_MAP: any = {
  '1': 'Hall 100',
  '2': 'Hall 200',
  '3': 'Hall 300',
};
@Pipe({
  name: 'hall'
})
export class HallPipe implements PipeTransform {

  transform(hallId: string): unknown {
    return HALLS_MAP[hallId];
  }

}

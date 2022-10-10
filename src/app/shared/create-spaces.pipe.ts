import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createSpaces',
})
export class CreateSapcesPipe implements PipeTransform {
  transform(value: string, character: string): string {
    return value.split('-').join(' ');
  }
}

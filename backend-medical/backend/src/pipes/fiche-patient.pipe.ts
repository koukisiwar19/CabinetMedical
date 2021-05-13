import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
//transformer les données de patients sur un fichier excel ou csv
@Injectable()
export class FichePatientPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return value;
  }
}

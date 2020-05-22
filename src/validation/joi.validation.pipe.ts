import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ObjectSchema } from '@hapi/joi';

export class JoiValidationPipe implements PipeTransform {
  constructor(private _schema: ObjectSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = this._schema.validate(value);
    
    if (error) {
      throw new BadRequestException('Validation failed');
    }

    return value;
  }
  
}

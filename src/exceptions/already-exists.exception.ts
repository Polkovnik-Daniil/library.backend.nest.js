import { HttpException, HttpStatus } from '@nestjs/common';

export class AlreadyExistsException extends HttpException {
  constructor(public message: string) {
    super(message, HttpStatus.BAD_REQUEST);
  }
}
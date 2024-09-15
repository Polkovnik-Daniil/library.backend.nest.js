import { HttpException, HttpStatus } from '@nestjs/common';

export class AlreadyDeletedException extends HttpException {
  constructor(public message: string) {
    super(message, HttpStatus.BAD_REQUEST);
  }
}
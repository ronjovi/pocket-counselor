import {  IsString } from 'class-validator';

/**
 * Data structure for archiving a record
 */
export class LoginDto {
  @IsString()
  public token: string;
}

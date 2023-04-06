import { ApiProperty } from '@nestjs/swagger';

export const DATES_FORMAT = {
  DB: 'YYYY-MM-DD',
  ANO_MES: 'YYYY-MM',
  BRL: {
    DEFAULT: 'DD/MM/YYYY',
    ANO_MES: 'MM/YYYY',
  },
};

export enum Role {
  ADMIN = 'admin',
  USER = 'user',
}

export class UserLogin {
  @ApiProperty()
  username: string;
  @ApiProperty()
  googleUid: string;
}

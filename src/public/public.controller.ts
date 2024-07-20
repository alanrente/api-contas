import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('public')
export class PublicController {
  @Get('pagueseguro')
  getPublicKeyPagueSeguro(@Res() res: Response){
    return res.send({
      "public_key": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAymEwdREwpI86axMTFPgfS86KiClK96AOeRBZvBvivJ1WmMyCDxulkQmDcVY2rtKUqP3mIIcezUNiL/gLP/FFzkMok4CsTRylpmz/KCHlcwnBwQKYrDQCxGEiVqmxxDnTv4h/680c5Tia5Cm6h4aJGHT5Qt8UNf1fOUK6lrjieCfJaVZzs2Vin1UwNqBSBAKXKpvl8cbtrTNrPObuPu/inyr96ztF05mfS/onD07+L5sqY7CIG0IV5dwwzczCoxhSYQlS2qfyJaw3H6Y80txy4TZCDZ0i+gLjm3S1sY9Wfmeu6TVpb/9lWbf14eoqEq8XuGpWmLnJ7p2K0Y6ovqYAOwIDAQAB",
      "created_at": 1721506148783
    }); 
  }
};
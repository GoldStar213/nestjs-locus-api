import { Body, Controller, Get, Post, Query, Request, UseGuards } from '@nestjs/common';
import { LocusService } from './locus.service';
import { Roles } from '../auth/roles.decorator';

@Controller('locus')
export class LocusController {
    constructor(private readonly locusService: LocusService) { }

    @Post()
    @Roles('admin', 'normal', 'limited')
    async getLocus(
        @Body() req: any
    ) {
        return this.locusService.getLocusData(req);
    }
}
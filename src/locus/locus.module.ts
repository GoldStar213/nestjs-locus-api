import { Module } from '@nestjs/common';
import { LocusController } from './locus.controller';
import { LocusService } from './locus.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { LocusEntity } from './locus.entity';

@Module({
    imports: [],
    controllers: [LocusController],
    providers: [LocusService],
})
export class LocusModule { }
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { LocusModule } from './locus/locus.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'hh-pgsql-public.ebi.ac.uk',
      port: parseInt(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'reader',
      password: process.env.DB_PASSWORD || 'NWDMCE5xdipIjRrp',
      database: process.env.DB_NAME || 'pfmegrnargs',
      autoLoadEntities: true,
      synchronize: true,
    }),
    LocusModule,
    AuthModule
  ],
})

export class AppModule { }
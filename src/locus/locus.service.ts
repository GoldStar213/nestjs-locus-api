import { Injectable, UnauthorizedException } from '@nestjs/common';
import { USERS } from '../constants';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pool } from 'pg';

@Injectable()
export class LocusService {

  // constructor(
  //     @InjectRepository(LocusEntity)
  //     private readonly locusRepository: Repository<LocusEntity>,
  // ) { }

  private readonly pool: Pool;

  constructor() {
    // Initialize the PostgreSQL connection pool
    this.pool = new Pool({
      user: 'reader',
      host: 'hh-pgsql-public.ebi.ac.uk',
      database: 'pfmegrnargs',
      password: 'NWDMCE5xdipIjRrp',
      port: 5432,
    });
  }

  async getLocusData(userData: any): Promise<any> {
    console.log(userData.email);

    let userRole = 'undefined';

    // Assume USERS is a predefined array of users
    USERS.map((item) => {
      if (item.email === userData.email && item.password === userData.password) {
        userRole = item.role;
      }
    });

    if (userRole === 'undefined') {
      throw new UnauthorizedException('Invalid user');
    }

    // Implement the logic to fetch and return locus data based on the provided parameters
    // Ensure to respect user roles and apply necessary restrictions

    let query = '';

    if (userRole === 'admin') {
      query = 'SELECT * FROM rnc_locus LEFT JOIN rnc_locus_members ON rnc_locus.id = rnc_locus_members.locus_id';
    } else if (userRole === 'normal') {
      query = 'SELECT * FROM rnc_locus';
    } else if (userRole === 'limited') {
      query =
        'SELECT * FROM rnc_locus LEFT JOIN rnc_locus_members ON rnc_locus.id = rnc_locus_members.locus_id WHERE rnc_locus.region_id IN (86118093, 86696489, 88186467)';
    }

    const result = await this.pool.query(query);

    console.log(result);

    return result;
  }
}
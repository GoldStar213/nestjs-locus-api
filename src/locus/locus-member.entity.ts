// import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
// import { LocusEntity } from './locus.entity';

// @Entity('rnc_locus_members')
// export class LocusMemberEntity {
//     @PrimaryGeneratedColumn()
//     id: number;

//     @Column({ name: 'urs_taxid' })
//     ursTaxid: string;

//     @Column({ name: 'region_id' })
//     regionId: number;

//     @Column({ name: 'locus_id' })
//     locusId: number;

//     @Column({ name: 'membership_status' })
//     membershipStatus: string;

//     @ManyToOne(() => LocusEntity, (locus) => locus.locusMembers)
//     locus: LocusEntity;
// }
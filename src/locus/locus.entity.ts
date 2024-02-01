// import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
// import { LocusMemberEntity } from './locus-member.entity';

// @Entity('rnc_locus')
// export class LocusEntity {
//     @PrimaryGeneratedColumn()
//     id: number;

//     @Column({ name: 'assembly_id' })
//     assemblyId: string;

//     @Column({ name: 'locus_name' })
//     locusName: string;

//     @Column({ name: 'public_locus_name' })
//     publicLocusName: string;

//     @Column({ name: 'chromosome' })
//     chromosome: string;

//     @Column({ name: 'strand' })
//     strand: string;

//     @Column({ name: 'locus_start' })
//     locusStart: number;

//     @Column({ name: 'locus_stop' })
//     locusStop: number;

//     @Column({ name: 'member_count' })
//     memberCount: number;

//     @OneToMany(() => LocusMemberEntity, (locusMember) => locusMember.locus)
//     locusMembers: LocusMemberEntity[];
// }
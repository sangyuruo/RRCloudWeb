import { BaseEntity } from './../../shared';

export class Compointstatus implements BaseEntity {
    constructor(
        public id?: number,
        public comPointCode?: string,
        public communicationStatus?: number,
        public recordTime?: any,
    ) {
    }
}

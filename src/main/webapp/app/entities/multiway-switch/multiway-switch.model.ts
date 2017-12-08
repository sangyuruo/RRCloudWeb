import { BaseEntity } from './../../shared';

export class MultiwaySwitch implements BaseEntity {
    constructor(
        public id?: number,
        public meterCode?: string,
        public switchCode?: number,
        public switchStatus?: number,
        public recordTime?: any,
    ) {
    }
}

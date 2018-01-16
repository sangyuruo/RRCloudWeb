import { BaseEntity } from './../../shared';

export class MeterStatus implements BaseEntity {
    constructor(
        public id?: number,
        public meterCode?: string,
        public trafficStatus?: number,
        public switchStatus?: number,
        public recordTime?: any,
    ) {
    }
}

import { BaseEntity } from './../../shared';

export class MeterCategoryRule implements BaseEntity {
    constructor(
        public id?: number,
        public meterCategoryCode?: number,
        public meterCategoryName?: string,
        public ruleCode?: string,
        public ruleName?: string,
        public analysis?: string,
        public createdBy?: string,
        public createTime?: any,
        public updatedBy?: string,
        public updateTime?: any,
    ) {
    }
}

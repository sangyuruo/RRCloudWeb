import { BaseEntity } from './../../shared';

export class AnalysisEngine implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public analysis?: string,
        public enable?: boolean,
        public createdBy?: string,
        public createTime?: any,
        public updatedBy?: string,
        public updateTime?: any,
        public meterCategoryRule?: BaseEntity,
    ) {
        this.enable = false;
    }
}

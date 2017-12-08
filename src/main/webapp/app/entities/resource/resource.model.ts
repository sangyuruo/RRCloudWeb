import { BaseEntity } from './../../shared';

export class Resource implements BaseEntity {
    constructor(
        public id?: number,
        public resourceCode?: string,
        public resourceName?: string,
        public resourceType?: string,
        public resourceUrl?: string,
        public enable?: boolean,
        public createdBy?: string,
        public createTime?: any,
        public updatedBy?: string,
        public updateTime?: any,
    ) {
        this.enable = false;
    }
}

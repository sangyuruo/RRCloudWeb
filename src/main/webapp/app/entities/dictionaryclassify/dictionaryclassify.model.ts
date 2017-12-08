import { BaseEntity } from './../../shared';

export class Dictionaryclassify implements BaseEntity {
    constructor(
        public id?: number,
        public dictCode?: string,
        public dictClassifyCode?: number,
        public dictClassifyValue?: string,
        public parentClassifyCode?: number,
        public seqNo?: number,
        public enable?: boolean,
        public remark?: string,
        public dictionary?: BaseEntity,
    ) {
        this.enable = false;
    }
}

import { ITask } from './task.interface';

export class Task implements ITask{
    constructor(
        public id: number,
        public name: string,
        public process: boolean,
    ){}
}
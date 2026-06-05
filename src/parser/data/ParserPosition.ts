export default class ParserPosition {
    end: number | undefined;
    start: number | undefined;

    constructor(start?: number, end?: number) {
        this.start = start;
        this.end = end === undefined ? start : end;
    }
};

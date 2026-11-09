export default class Validator
{
    public isNumber = (value: string) => !!value && !Number.isNaN(Number(value));
    public isInteger = (value: string) => !!value && Number.isInteger(Number(value));
};

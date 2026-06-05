export default class LengthError extends Error
{
    constructor(message?: string, options?: ErrorOptions) {
        super(message, options);
    }
};

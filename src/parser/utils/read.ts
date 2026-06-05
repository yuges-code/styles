import skipfn from './skip';
import LengthError from '../errors/LengthError';

export default function read(
    content = '',
    position = 0,
    callbackfn?: (content: string, position: number) => number | false | undefined,
    skip = true as boolean | RegExp
): number
{
    while (true) {
        if (skip) {
            position = skipfn(
                content,
                position,
                skip instanceof RegExp ? skip : undefined
            );
        }

        if (position >= content.length) {
            break;
            // throw new LengthError();
        }

        if (! callbackfn) {
            break;
        }

        const result = callbackfn(content, position);

        if (result === false) {
            break;
        }

        if (result != undefined) {
            position = result;

            continue;
        }

        position++;
    }

    return position;
};

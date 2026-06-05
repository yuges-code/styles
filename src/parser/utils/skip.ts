export default function skip(
    content = '',
    position = 0,
    regexp = /\s/
): number
{
    while (true) {
        if (position >= content.length) {
            break;
        }

        if (! regexp.test(content[position])) {
            break;
        }

        position++;
    }

    return position;
};

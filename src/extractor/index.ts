import parser from "../parser";

function extract(content: string, type: string) {
    const classes = new Set();

    const parsed = parser.parse(content, type as any)

    if (parsed.length) {
        console.log(parsed);
    }

    return classes;
}

const extractor = {
    extract: extract,
};

export default extractor;
#!/usr/bin/env node

import Reader from '../src/utils/Reader';
import Writer from "../src/utils/Writer";
import Config from "../src/config/Config";
import Scanner from "../src/utils/Scanner";
import Matcher from "../src/utils/Matcher";
import Extractor from '../src/utils/Extractor';
import Converter from "../src/utils/Converter";
import Generator from "../src/utils/Generator";

function scan() {
    const config = new Config();
    const reader = new Reader(config);
    const writer = new Writer(config);
    const scanner = new Scanner(config);
    const matcher = new Matcher(config);
    const extractor = new Extractor(config);
    const converter = new Converter(config);
    const generator = new Generator(config);

    const files = scanner.scan();

    reader
        .setExtractor(extractor)
        .read(files);

    const converted = converter.convert(
        reader.getLexemes()
    );
    const matched = matcher.match(converted);

    writer.write(generator.generate(matched));
}

scan();

import AbstractParserPatternCollection from "../../../../../../abstracts/AbstractParserPatternCollection";
import JSModuleImportIdentifierPattern from "../../../../patterns/module/import/identifier/JSModuleImportIdentifierPattern";

export default class JSModuleImportIdentifierCollection extends AbstractParserPatternCollection
{
    pattern = () => JSModuleImportIdentifierPattern;
};

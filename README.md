# textlint-rule-numeral-systems [![Actions Status: test](https://github.com/aborazmeh/textlint-rule-numeral-systems/workflows/test/badge.svg)](https://github.com/aborazmeh/textlint-rule-numeral-systems/actions?query=workflow%3A"test") [![textlint rule](https://img.shields.io/badge/textlint-fixable-green.svg?style=social)](https://textlint.github.io/)

Unify the usage of Arabic, Arabic-Indic and Farsi numbers in a single text

## Fixable

[![textlint rule](https://img.shields.io/badge/textlint-fixable-green.svg?style=social)](https://textlint.github.io/) 

```
textlint --rule numeral-systems --fix README.md
```
## Example

> In ١٧٩٩, during Napoleon's campaign in Egypt, a French soldier discovered the Rosetta Stone near the town of Rosetta (modern-day Rashid). The number ۱۹۶ comes into play as it was the year 196 BCE when the decree inscribed on the Rosetta Stone was written. This decree was issued by Ptolemy V, and its purpose was to establish the divine cult of the king.

> In 1799, during Napoleon's campaign in Egypt, a French soldier discovered the Rosetta Stone near the town of Rosetta (modern-day Rashid). The number 196 comes into play as it was the year 196 BCE when the decree inscribed on the Rosetta Stone was written. This decree was issued by Ptolemy V, and its purpose was to establish the divine cult of the king.

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-numeral-systems

## Usage

Via `.textlintrc.json`(Recommended)

```json
{
    "rules": {
        "numeral-systems": {
          "default_numbers" : "arabic"  // can be: 'arabic', 'indic' or 'persian
        }
    }
}
```

Via CLI

```
textlint --rule numeral-systems README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

    npm test

## License

MIT © aborazmeh

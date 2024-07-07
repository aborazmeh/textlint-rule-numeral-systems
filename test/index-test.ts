import TextLintTester from "textlint-tester";
import rule from "../src/index";

const tester = new TextLintTester();
// ruleName, rule, { valid, invalid }
tester.run("rule", rule, {
    valid: [
        "This is my phone number 555-431",
        {
            text: "Call me on ٥٥٥-٤٣١",
            options: {
                default_numbers: "indic"
            }
        },
        {
            text: "My number in Persian numbers is ۵۵۵-۴۳۲",
            options: {
                default_numbers: "persian"
            }
        }
    ],
    invalid: [
        {
            text: "I got ٣١ apples",
            output: "I got 31 apples",
            errors: [
                {
                    message: "Found indic numbers.",
                    range: [6, 7]
                },
                {
                    message: "Found indic numbers.",
                    range: [7, 8]
                },
            ]
        },
        {
            text: "Call ۴۴۶ for more information",
            output: "Call 446 for more information",
            errors: [
                {
                    message: "Found persian numbers.",
                    range: [5, 6]
                },
                {
                    message: "Found persian numbers.",
                    range: [6, 7]
                },
                {
                    message: "Found persian numbers.",
                    range: [7, 8]
                },
            ]
        },
        {
            text: "binaries are 1s and 0s",
            output: "binaries are ١s and ٠s",
            options: {
                default_numbers: "indic"
            },
            errors: [
                {
                    message: "Found arabic numbers.",
                    range: [13, 14]
                },
                {
                    message: "Found arabic numbers.",
                    range: [20, 21]
                },
            ]
        },
        {
            text: "binaries are 1s and 0s",
            output: "binaries are ۱s and ۰s",
            options: {
                default_numbers: "persian"
            },
            errors: [
                {
                    message: "Found arabic numbers.",
                    range: [13, 14]
                },
                {
                    message: "Found arabic numbers.",
                    range: [20, 21]
                },
            ]
        },
    ]
});

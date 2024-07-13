import type { TextlintRuleModule } from "@textlint/types";

export interface Options {
    default_numbers?: "arabic" | "indic" | "persian";
}

const numbers = [
    {
        arabic: "0",
        indic: "٠",
        persian: "۰",
    },
    {
        arabic: "1",
        indic: "١",
        persian: "۱",
    },
    {
        arabic: "2",
        indic: "٢",
        persian: "۲",
    },
    {
        arabic: "3",
        indic: "٣",
        persian: "۳",
    },
    {
        arabic: "4",
        indic: "٤",
        persian: "۴",
    },
    {
        arabic: "5",
        indic: "٥",
        persian: "۵",
    },
    {
        arabic: "6",
        indic: "٦",
        persian: "۶",
    },
    {
        arabic: "7",
        indic: "٧",
        persian: "۷",
    },
    {
        arabic: "8",
        indic: "٨",
        persian: "۸",
    },
    {
        arabic: "9",
        indic: "٩",
        persian: "۹",
    },
];

const report: TextlintRuleModule<Options> = (context, options = {}) => {
    const replaceTo = options.default_numbers ?? "arabic";
    const toReplace = ["indic", "arabic", "persian"].filter((o) => o !== replaceTo);

    const { Syntax, RuleError, fixer, report, getSource, locator } = context;
    return {
        [Syntax.Str](node) {
            // "Str" node
            const text = getSource(node); // Get text

            numbers.forEach((n) => {
                toReplace.forEach((numeric_system: string) => {
                    const matches = text.matchAll(new RegExp(n[numeric_system as keyof typeof n], "g"));
                    for (const match of matches) {
                        const index = match.index ?? 0;
                        const matchRange = [index, index + match[0].length] as const;
                        const replace = fixer.replaceTextRange(matchRange, n[replaceTo]);
                        const ruleError = new RuleError(`Found ${numeric_system} numbers.`, {
                            padding: locator.range(matchRange),
                            fix: replace,
                        });
                        report(node, ruleError);
                    }
                });
            });
        },
    };
};

export default {
    linter: report,
    fixer: report,
};

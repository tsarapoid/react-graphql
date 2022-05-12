module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-idiomatic-order",
    "stylelint-config-prettier",
  ],
  plugins: ["stylelint-order"],
  rules: {
    // rules from the project
    // indentation: ["tab"],
    "color-hex-case": "upper",
    "selector-class-pattern": "^.*$",

    "declaration-block-no-redundant-longhand-properties": [
      true,
      { ignoreShorthands: ["/grid/"] },
    ],

    //
    /*
    // font possible rules to avoid errors
    "font-family-no-missing-generic-family-keyword": [true],
    "value-list-comma-newline-after": "never-multi-line",
    "font-family-name-quotes": "always-unless-keyword",
    */
    //
    /*
    // example configuration
    // https://github.com/hudochenkov/stylelint-order#usage
    "order/order": ["custom-properties", "declarations"],
    "order/properties-order": ["width", "height"],
    */
  },
}

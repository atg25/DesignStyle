// Stylelint configuration for CSS quality control
module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    // MCM Design Hub specific rules
    'selector-class-pattern': null, // Allow BEM naming convention
    'custom-property-pattern': null, // Allow our CSS variable naming
    'no-descending-specificity': null, // Complex MCM styles require flexibility
    'selector-no-vendor-prefix': null, // Allow vendor prefixes for compatibility
    'property-no-vendor-prefix': null,
    'value-no-vendor-prefix': null,
    'at-rule-no-vendor-prefix': null,
    'alpha-value-notation': 'number', // Prefer rgba(0, 0, 0, 0.5) over rgb(0 0 0 / 0.5)
    'color-function-notation': 'legacy', // Prefer rgba() over rgb()
    'color-function-alias-notation': null, // Allow rgba() and rgb() interchangeably
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'], // Allow :global if needed
      },
    ],
  },
  ignoreFiles: ['node_modules/**', '_site/**', 'dist/**', '**/*.min.css'],
};

export default {
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-no-deprecated': null,
    'custom-property-pattern': null,
    'no-empty-source': null,
    'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['ng-deep'] }],
  },
};

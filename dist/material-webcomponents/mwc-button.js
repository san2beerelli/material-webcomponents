/*! Built with http://stenciljs.com */

window['material-webcomponents'].loadStyles("mwc-button","\nmwc-button.hydrated{visibility:inherit}","mwc-card","\nmwc-card.hydrated{visibility:inherit}","mwc-card-actions","/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct CSS rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n * If $color has an alpha channel, it will be ignored and overridden. To increase the opacity of the shadow, use\n * $opacity-boost.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n.mdc-card {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  box-sizing: border-box;\n  padding: 0;\n  border-radius: 2px;\n  overflow: hidden;\n}\n\n.mdc-card__primary {\n  padding: 16px;\n}\n\n.mdc-card__primary .mdc-card__title--large {\n  padding-top: 8px;\n}\n\n.mdc-card__primary:last-child {\n  padding-bottom: 24px;\n}\n\n.mdc-card__supporting-text {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.25rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n  box-sizing: border-box;\n  padding: 8px 16px;\n}\n\n.mdc-card--theme-dark .mdc-card__supporting-text,\n.mdc-theme--dark .mdc-card__supporting-text {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-card__primary + .mdc-card__supporting-text {\n  margin-top: -8px;\n  padding-top: 0;\n}\n\n.mdc-card__supporting-text:last-child {\n  padding-bottom: 24px;\n}\n\n.mdc-card__actions {\n  display: flex;\n  box-sizing: border-box;\n  padding: 8px;\n}\n\n.mdc-card--theme-dark .mdc-card__actions,\n.mdc-theme--dark .mdc-card__actions {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-card__actions .mdc-card__action {\n  margin: 0 8px 0 0;\n}\n\n[dir=\"rtl\"] .mdc-card__actions .mdc-card__action, .mdc-card__actions .mdc-card__action[dir=\"rtl\"] {\n  margin: 0 0 0 8px;\n}\n\n.mdc-card__actions .mdc-card__action:last-child {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n[dir=\"rtl\"] .mdc-card__actions .mdc-card__action:last-child, .mdc-card__actions .mdc-card__action:last-child[dir=\"rtl\"] {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.mdc-card__actions--vertical {\n  flex-flow: column;\n  align-items: flex-start;\n}\n\n.mdc-card__actions--vertical .mdc-card__action {\n  margin: 0 0 4px;\n}\n\n.mdc-card__actions--vertical .mdc-card__action:last-child {\n  margin-bottom: 0;\n}\n\n.mdc-card__media {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  box-sizing: border-box;\n  padding: 16px;\n}\n\n.mdc-card__media-item {\n  display: inline-block;\n  width: auto;\n  height: 80px;\n  margin: 16px 0 0;\n  padding: 0;\n}\n\n.mdc-card__media-item--1dot5x {\n  width: auto;\n  height: 120px;\n}\n\n.mdc-card__media-item--2x {\n  width: auto;\n  height: 160px;\n}\n\n.mdc-card__media-item--3x {\n  width: auto;\n  height: 240px;\n}\n\n.mdc-card__title {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  line-height: 1.5rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n  margin: -.063rem 0;\n}\n\n.mdc-card--theme-dark .mdc-card__title,\n.mdc-theme--dark .mdc-card__title {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-card__title--large {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1.5rem;\n  font-weight: 400;\n  letter-spacing: normal;\n  line-height: 2rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  margin: 0;\n}\n\n.mdc-card__subtitle {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.25rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n  margin: -.063rem 0;\n}\n\n.mdc-card--theme-dark .mdc-card__subtitle,\n.mdc-theme--dark .mdc-card__subtitle {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-card__horizontal-block {\n  padding-left: 0;\n  padding-right: 16px;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n  box-sizing: border-box;\n}\n\n[dir=\"rtl\"] .mdc-card__horizontal-block, .mdc-card__horizontal-block[dir=\"rtl\"] {\n  padding-left: 16px;\n  padding-right: 0;\n}\n\n.mdc-card__horizontal-block .mdc-card__actions--vertical {\n  margin: 16px;\n}\n\n.mdc-card__horizontal-block .mdc-card__media-item {\n  margin-left: 16px;\n  margin-right: 0;\n}\n\n[dir=\"rtl\"] .mdc-card__horizontal-block .mdc-card__media-item, .mdc-card__horizontal-block .mdc-card__media-item[dir=\"rtl\"] {\n  margin-left: 0;\n  margin-right: 16px;\n}\n\n.mdc-card__horizontal-block .mdc-card__media-item--3x {\n  margin-bottom: 16px;\n}\nmwc-card-actions.hydrated{visibility:inherit}","mwc-card-content","\nmwc-card-content.hydrated{visibility:inherit}","mwc-card-header","/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct CSS rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n * If $color has an alpha channel, it will be ignored and overridden. To increase the opacity of the shadow, use\n * $opacity-boost.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n.mdc-card {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  box-sizing: border-box;\n  padding: 0;\n  border-radius: 2px;\n  overflow: hidden;\n}\n\n.mdc-card__primary {\n  padding: 16px;\n}\n\n.mdc-card__primary .mdc-card__title--large {\n  padding-top: 8px;\n}\n\n.mdc-card__primary:last-child {\n  padding-bottom: 24px;\n}\n\n.mdc-card__supporting-text {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.25rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n  box-sizing: border-box;\n  padding: 8px 16px;\n}\n\n.mdc-card--theme-dark .mdc-card__supporting-text,\n.mdc-theme--dark .mdc-card__supporting-text {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-card__primary + .mdc-card__supporting-text {\n  margin-top: -8px;\n  padding-top: 0;\n}\n\n.mdc-card__supporting-text:last-child {\n  padding-bottom: 24px;\n}\n\n.mdc-card__actions {\n  display: flex;\n  box-sizing: border-box;\n  padding: 8px;\n}\n\n.mdc-card--theme-dark .mdc-card__actions,\n.mdc-theme--dark .mdc-card__actions {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-card__actions .mdc-card__action {\n  margin: 0 8px 0 0;\n}\n\n[dir=\"rtl\"] .mdc-card__actions .mdc-card__action, .mdc-card__actions .mdc-card__action[dir=\"rtl\"] {\n  margin: 0 0 0 8px;\n}\n\n.mdc-card__actions .mdc-card__action:last-child {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n[dir=\"rtl\"] .mdc-card__actions .mdc-card__action:last-child, .mdc-card__actions .mdc-card__action:last-child[dir=\"rtl\"] {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.mdc-card__actions--vertical {\n  flex-flow: column;\n  align-items: flex-start;\n}\n\n.mdc-card__actions--vertical .mdc-card__action {\n  margin: 0 0 4px;\n}\n\n.mdc-card__actions--vertical .mdc-card__action:last-child {\n  margin-bottom: 0;\n}\n\n.mdc-card__media {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  box-sizing: border-box;\n  padding: 16px;\n}\n\n.mdc-card__media-item {\n  display: inline-block;\n  width: auto;\n  height: 80px;\n  margin: 16px 0 0;\n  padding: 0;\n}\n\n.mdc-card__media-item--1dot5x {\n  width: auto;\n  height: 120px;\n}\n\n.mdc-card__media-item--2x {\n  width: auto;\n  height: 160px;\n}\n\n.mdc-card__media-item--3x {\n  width: auto;\n  height: 240px;\n}\n\n.mdc-card__title {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  line-height: 1.5rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n  margin: -.063rem 0;\n}\n\n.mdc-card--theme-dark .mdc-card__title,\n.mdc-theme--dark .mdc-card__title {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-card__title--large {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1.5rem;\n  font-weight: 400;\n  letter-spacing: normal;\n  line-height: 2rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  margin: 0;\n}\n\n.mdc-card__subtitle {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.25rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n  margin: -.063rem 0;\n}\n\n.mdc-card--theme-dark .mdc-card__subtitle,\n.mdc-theme--dark .mdc-card__subtitle {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-card__horizontal-block {\n  padding-left: 0;\n  padding-right: 16px;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n  box-sizing: border-box;\n}\n\n[dir=\"rtl\"] .mdc-card__horizontal-block, .mdc-card__horizontal-block[dir=\"rtl\"] {\n  padding-left: 16px;\n  padding-right: 0;\n}\n\n.mdc-card__horizontal-block .mdc-card__actions--vertical {\n  margin: 16px;\n}\n\n.mdc-card__horizontal-block .mdc-card__media-item {\n  margin-left: 16px;\n  margin-right: 0;\n}\n\n[dir=\"rtl\"] .mdc-card__horizontal-block .mdc-card__media-item, .mdc-card__horizontal-block .mdc-card__media-item[dir=\"rtl\"] {\n  margin-left: 0;\n  margin-right: 16px;\n}\n\n.mdc-card__horizontal-block .mdc-card__media-item--3x {\n  margin-bottom: 16px;\n}\nmwc-card-header.hydrated{visibility:inherit}","mwc-card-media","\nmwc-card-media.hydrated{visibility:inherit}","mwc-checkbox","\@keyframes mdc-ripple-fg-radius-in {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n\n\@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0.16);\n  }\n}\n\n\@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0.16);\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.mdc-ripple-surface--test-edge-var-bug {\n  --mdc-ripple-surface-test-edge-var: 1px solid #000;\n  visibility: hidden;\n}\n\n.mdc-ripple-surface--test-edge-var-bug::before {\n  border: var(--mdc-ripple-surface-test-edge-var);\n}\n\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n\@keyframes mdc-checkbox-unchecked-checked-checkmark-path {\n  0%,\n  50% {\n    stroke-dashoffset: 29.78334;\n  }\n  50% {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n\n\@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {\n  0%,\n  68.2% {\n    transform: scaleX(0);\n  }\n  68.2% {\n    animation-timing-function: cubic-bezier(0, 0, 0, 1);\n  }\n  100% {\n    transform: scaleX(1);\n  }\n}\n\n\@keyframes mdc-checkbox-checked-unchecked-checkmark-path {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);\n    opacity: 1;\n    stroke-dashoffset: 0;\n  }\n  to {\n    opacity: 0;\n    stroke-dashoffset: -29.78334;\n  }\n}\n\n\@keyframes mdc-checkbox-checked-indeterminate-checkmark {\n  from {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n  to {\n    transform: rotate(45deg);\n    opacity: 0;\n  }\n}\n\n\@keyframes mdc-checkbox-indeterminate-checked-checkmark {\n  from {\n    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n    transform: rotate(45deg);\n    opacity: 0;\n  }\n  to {\n    transform: rotate(360deg);\n    opacity: 1;\n  }\n}\n\n\@keyframes mdc-checkbox-checked-indeterminate-mixedmark {\n  from {\n    animation-timing-function: mdc-animation-deceleration-curve-timing-function;\n    transform: rotate(-45deg);\n    opacity: 0;\n  }\n  to {\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n}\n\n\@keyframes mdc-checkbox-indeterminate-checked-mixedmark {\n  from {\n    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n  to {\n    transform: rotate(315deg);\n    opacity: 0;\n  }\n}\n\n\@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {\n  0% {\n    animation-timing-function: linear;\n    transform: scaleX(1);\n    opacity: 1;\n  }\n  32.8%,\n  100% {\n    transform: scaleX(0);\n    opacity: 0;\n  }\n}\n\n.mdc-checkbox {\n  display: inline-block;\n  position: relative;\n  flex: 0 0 18px;\n  box-sizing: content-box;\n  width: 18px;\n  height: 18px;\n  padding: 11px;\n  line-height: 0;\n  white-space: nowrap;\n  cursor: pointer;\n  vertical-align: bottom;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.mdc-checkbox .mdc-checkbox__native-control:disabled:not(:checked):not(:indeterminate) ~ .mdc-checkbox__background {\n  border-color: rgba(0, 0, 0, 0.26);\n}\n\n.mdc-checkbox .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,\n.mdc-checkbox .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {\n  border-color: transparent;\n  background-color: rgba(0, 0, 0, 0.26);\n}\n\n.mdc-checkbox--theme-dark .mdc-checkbox__native-control:disabled:not(:checked):not(:indeterminate) ~ .mdc-checkbox__background,\n.mdc-theme--dark .mdc-checkbox .mdc-checkbox__native-control:disabled:not(:checked):not(:indeterminate) ~ .mdc-checkbox__background {\n  border-color: rgba(255, 255, 255, 0.3);\n}\n\n.mdc-checkbox--theme-dark .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,\n.mdc-checkbox--theme-dark .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background,\n.mdc-theme--dark .mdc-checkbox .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,\n.mdc-theme--dark .mdc-checkbox .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n\n.mdc-checkbox .mdc-checkbox__checkmark__path {\n  stroke: white !important;\n}\n\n.mdc-checkbox .mdc-checkbox__mixedmark {\n  background-color: white;\n}\n\n.mdc-checkbox .mdc-checkbox__background::before {\n  /* \@alternate */\n  background-color: #ff4081;\n}\n\n\@supports not (-ms-ime-align: auto) {\n  .mdc-checkbox .mdc-checkbox__background::before {\n    background-color: var(--mdc-theme-secondary, #ff4081);\n  }\n}\n\n.mdc-checkbox::before, .mdc-checkbox::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n  will-change: transform, opacity;\n}\n\n.mdc-checkbox::before {\n  transition: opacity 15ms linear;\n}\n\n.mdc-checkbox.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-checkbox.mdc-ripple-upgraded--unbounded::after {\n  top: var(--mdc-ripple-top, 0);\n  left: var(--mdc-ripple-left, 0);\n}\n\n.mdc-checkbox.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 225ms mdc-ripple-fg-radius-in forwards, 75ms mdc-ripple-fg-opacity-in forwards;\n}\n\n.mdc-checkbox.mdc-ripple-upgraded--foreground-deactivation::after {\n  animation: 150ms mdc-ripple-fg-opacity-out;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n\n.mdc-checkbox::before, .mdc-checkbox::after {\n  /* \@alternate */\n  background-color: #ff4081;\n}\n\n\@supports not (-ms-ime-align: auto) {\n  .mdc-checkbox::before, .mdc-checkbox::after {\n    background-color: var(--mdc-theme-secondary, #ff4081);\n  }\n}\n\n.mdc-checkbox:hover::before {\n  opacity: 0.04;\n}\n\n.mdc-checkbox:not(.mdc-ripple-upgraded):focus::before, .mdc-checkbox.mdc-ripple-upgraded--background-focused::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n\n.mdc-checkbox:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n\n.mdc-checkbox:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.16;\n}\n\n.mdc-checkbox.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.16;\n}\n\n.mdc-checkbox::before, .mdc-checkbox::after {\n  top: calc(50% - 50%);\n  left: calc(50% - 50%);\n  width: 100%;\n  height: 100%;\n}\n\n.mdc-checkbox.mdc-ripple-upgraded::before {\n  top: calc(50% - 50%);\n  left: calc(50% - 50%);\n  width: 100%;\n  height: 100%;\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-checkbox.mdc-ripple-upgraded--unbounded::before {\n  top: var(--mdc-ripple-top, calc(50% - 25%));\n  left: var(--mdc-ripple-left, calc(50% - 25%));\n  width: var(--mdc-ripple-fg-size, 50%);\n  height: var(--mdc-ripple-fg-size, 50%);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-checkbox.mdc-ripple-upgraded::after {\n  width: var(--mdc-ripple-fg-size, 50%);\n  height: var(--mdc-ripple-fg-size, 50%);\n}\n\n.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate) ~ .mdc-checkbox__background {\n  border-color: rgba(0, 0, 0, 0.54);\n  background-color: transparent;\n}\n\n.mdc-checkbox .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,\n.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {\n  /* \@alternate */\n  border-color: #ff4081;\n  border-color: var(--mdc-theme-secondary, #ff4081);\n  /* \@alternate */\n  background-color: #ff4081;\n  background-color: var(--mdc-theme-secondary, #ff4081);\n}\n\n\@keyframes mdc-checkbox-fade-in-background-0 {\n  0% {\n    border-color: rgba(0, 0, 0, 0.54);\n    background-color: transparent;\n  }\n  50% {\n    /* \@alternate */\n    border-color: #ff4081;\n    border-color: var(--mdc-theme-secondary, #ff4081);\n    /* \@alternate */\n    background-color: #ff4081;\n    background-color: var(--mdc-theme-secondary, #ff4081);\n  }\n}\n\n\@keyframes mdc-checkbox-fade-out-background-0 {\n  0%,\n  80% {\n    /* \@alternate */\n    border-color: #ff4081;\n    border-color: var(--mdc-theme-secondary, #ff4081);\n    /* \@alternate */\n    background-color: #ff4081;\n    background-color: var(--mdc-theme-secondary, #ff4081);\n  }\n  100% {\n    border-color: rgba(0, 0, 0, 0.54);\n    background-color: transparent;\n  }\n}\n\n.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background, .mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background {\n  animation-name: mdc-checkbox-fade-in-background-0;\n}\n\n.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background, .mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background {\n  animation-name: mdc-checkbox-fade-out-background-0;\n}\n\n.mdc-checkbox--theme-dark .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate) ~ .mdc-checkbox__background,\n.mdc-theme--dark .mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate) ~ .mdc-checkbox__background {\n  border-color: white;\n  background-color: transparent;\n}\n\n.mdc-checkbox--theme-dark .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,\n.mdc-checkbox--theme-dark .mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background,\n.mdc-theme--dark .mdc-checkbox .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,\n.mdc-theme--dark .mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {\n  /* \@alternate */\n  border-color: #ff4081;\n  border-color: var(--mdc-theme-secondary, #ff4081);\n  /* \@alternate */\n  background-color: #ff4081;\n  background-color: var(--mdc-theme-secondary, #ff4081);\n}\n\n\@keyframes mdc-checkbox-fade-in-background-1 {\n  0% {\n    border-color: white;\n    background-color: transparent;\n  }\n  50% {\n    /* \@alternate */\n    border-color: #ff4081;\n    border-color: var(--mdc-theme-secondary, #ff4081);\n    /* \@alternate */\n    background-color: #ff4081;\n    background-color: var(--mdc-theme-secondary, #ff4081);\n  }\n}\n\n\@keyframes mdc-checkbox-fade-out-background-1 {\n  0%,\n  80% {\n    /* \@alternate */\n    border-color: #ff4081;\n    border-color: var(--mdc-theme-secondary, #ff4081);\n    /* \@alternate */\n    background-color: #ff4081;\n    background-color: var(--mdc-theme-secondary, #ff4081);\n  }\n  100% {\n    border-color: white;\n    background-color: transparent;\n  }\n}\n\n.mdc-checkbox--theme-dark.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background, .mdc-checkbox--theme-dark.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background,\n.mdc-theme--dark .mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background,\n.mdc-theme--dark .mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background {\n  animation-name: mdc-checkbox-fade-in-background-1;\n}\n\n.mdc-checkbox--theme-dark.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background, .mdc-checkbox--theme-dark.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background,\n.mdc-theme--dark .mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background,\n.mdc-theme--dark .mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background {\n  animation-name: mdc-checkbox-fade-out-background-1;\n}\n\n.mdc-checkbox--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n\n.mdc-checkbox--upgraded .mdc-checkbox__background,\n.mdc-checkbox--upgraded .mdc-checkbox__checkmark,\n.mdc-checkbox--upgraded .mdc-checkbox__checkmark__path,\n.mdc-checkbox--upgraded .mdc-checkbox__mixedmark {\n  transition: none !important;\n}\n\n.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background, .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background, .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background, .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {\n  animation-duration: 180ms;\n  animation-timing-function: linear;\n}\n\n.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark__path {\n  animation: 180ms linear 0s mdc-checkbox-unchecked-checked-checkmark-path;\n  transition: none;\n}\n\n.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {\n  animation: 90ms linear 0s mdc-checkbox-unchecked-indeterminate-mixedmark;\n  transition: none;\n}\n\n.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark__path {\n  animation: 90ms linear 0s mdc-checkbox-checked-unchecked-checkmark-path;\n  transition: none;\n}\n\n.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {\n  animation: 90ms linear 0s mdc-checkbox-checked-indeterminate-checkmark;\n  transition: none;\n}\n\n.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {\n  animation: 90ms linear 0s mdc-checkbox-checked-indeterminate-mixedmark;\n  transition: none;\n}\n\n.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {\n  animation: 500ms linear 0s mdc-checkbox-indeterminate-checked-checkmark;\n  transition: none;\n}\n\n.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {\n  animation: 500ms linear 0s mdc-checkbox-indeterminate-checked-mixedmark;\n  transition: none;\n}\n\n.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {\n  animation: 300ms linear 0s mdc-checkbox-indeterminate-unchecked-mixedmark;\n  transition: none;\n}\n\n.mdc-checkbox__background {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  left: 11px;\n  right: initial;\n  display: inline-flex;\n  top: 11px;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 45%;\n  height: 45%;\n  transition: background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  border: 2px solid currentColor;\n  border-radius: 2px;\n  background-color: transparent;\n  pointer-events: none;\n  will-change: background-color, border-color;\n}\n\n[dir=\"rtl\"] .mdc-checkbox .mdc-checkbox__background,\n.mdc-checkbox[dir=\"rtl\"] .mdc-checkbox__background {\n  left: initial;\n  right: 11px;\n}\n\n.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {\n  transition: border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-checkbox__background::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0, 0);\n  transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n  will-change: opacity, transform;\n}\n\n.mdc-checkbox__native-control:focus ~ .mdc-checkbox__background::before {\n  transform: scale(2.75, 2.75);\n  transition: opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: 0.26;\n}\n\n.mdc-ripple-upgraded--unbounded .mdc-checkbox__background::before {\n  content: none;\n}\n\n.mdc-checkbox__native-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  cursor: inherit;\n}\n\n.mdc-checkbox__native-control:disabled {\n  cursor: default;\n  pointer-events: none;\n}\n\n.mdc-checkbox__checkmark {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  transition: opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  opacity: 0;\n}\n\n.mdc-checkbox--upgraded .mdc-checkbox__checkmark {\n  opacity: 1;\n}\n\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__checkmark {\n  transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: 1;\n}\n\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__checkmark {\n  transform: rotate(45deg);\n  transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  opacity: 0;\n}\n\n.mdc-checkbox__checkmark__path {\n  transition: stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  stroke-width: 3.12px;\n  stroke-dashoffset: 29.78334;\n  stroke-dasharray: 29.78334;\n}\n\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__checkmark__path,\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__checkmark__path {\n  stroke-dashoffset: 0;\n}\n\n.mdc-checkbox__mixedmark {\n  width: 100%;\n  height: 2px;\n  transform: scaleX(0) rotate(0deg);\n  transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  opacity: 0;\n}\n\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__mixedmark {\n  transform: scaleX(1) rotate(-45deg);\n}\n\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__mixedmark {\n  transform: scaleX(1) rotate(0deg);\n  opacity: 1;\n}\n\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/* stylelint-disable selector-max-type */\n.mdc-form-field {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.25rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n}\n\n.mdc-form-field--theme-dark,\n.mdc-theme--dark .mdc-form-field {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-form-field > label {\n  order: 0;\n  margin-right: auto;\n  padding-left: 4px;\n}\n\n[dir=\"rtl\"] .mdc-form-field > label, .mdc-form-field[dir=\"rtl\"] > label {\n  margin-left: auto;\n  padding-right: 4px;\n}\n\n.mdc-form-field--align-end > label {\n  order: -1;\n  margin-left: auto;\n  padding-right: 4px;\n}\n\n[dir=\"rtl\"] .mdc-form-field--align-end > label, .mdc-form-field--align-end[dir=\"rtl\"] > label {\n  margin-right: auto;\n  padding-left: 4px;\n}\n\n/* stylelint-enable selector-max-type */\nmwc-checkbox.hydrated{visibility:inherit}","mwc-container","\nmwc-container.hydrated{visibility:inherit}","mwc-content-for-toolbar","\nmwc-content-for-toolbar.hydrated{visibility:inherit}","mwc-dialog","/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct CSS rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n * If $color has an alpha channel, it will be ignored and overridden. To increase the opacity of the shadow, use\n * $opacity-boost.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n:root {\n  --mdc-dialog-dark-theme-bg-color: #303030;\n}\n\n.mdc-dialog {\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n  z-index: 5;\n}\n\n.mdc-dialog__backdrop {\n  /* \@alternate */\n  background-color: rgba(0, 0, 0, 0.87);\n  background-color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n  position: fixed;\n  top: 0;\n  left: 0;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  z-index: -1;\n}\n\n.mdc-dialog__surface {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n  /* \@alternate */\n  background-color: #fff;\n  background-color: var(--mdc-theme-background, #fff);\n  display: inline-flex;\n  flex-direction: column;\n  width: calc(100% - 30px);\n  min-width: 640px;\n  max-width: 865px;\n  transform: translateY(150px) scale(0.8);\n  border-radius: 2px;\n  opacity: 0;\n}\n\n.mdc-dialog--theme-dark .mdc-dialog__surface,\n.mdc-theme--dark .mdc-dialog__surface {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n  background-color: #303030;\n  background-color: var(--mdc-dialog-dark-theme-bg-color, #303030);\n}\n\n[dir=\"rtl\"] .mdc-dialog .mdc-dialog__surface,\n.mdc-dialog[dir=\"rtl\"] .mdc-dialog__surface {\n  text-align: right;\n}\n\n.mdc-dialog__header {\n  display: flex;\n  align-items: center;\n  padding: 24px 24px 0;\n}\n\n.mdc-dialog__header__empty {\n  padding: 0;\n}\n\n[dir=\"rtl\"] .mdc-dialog .mdc-dialog__header,\n.mdc-dialog[dir=\"rtl\"] .mdc-dialog__header {\n  text-align: right;\n}\n\n.mdc-dialog__header__title {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1.25rem;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n  line-height: 2rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  flex: 1;\n  margin: 0;\n}\n\n.mdc-dialog__body {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54));\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.25rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  margin-top: 20px;\n  padding: 0 24px 24px;\n}\n\n.mdc-dialog--theme-dark .mdc-dialog__body,\n.mdc-theme--dark .mdc-dialog__body {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.7);\n  color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7));\n}\n\n.mdc-dialog__body--scrollable {\n  max-height: 195px;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  overflow-x: auto;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n}\n\n.mdc-dialog__footer {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 8px;\n}\n\n.mdc-dialog__footer__button {\n  margin-left: 0;\n  margin-right: 8px;\n}\n\n[dir=\"rtl\"] .mdc-dialog__footer__button, .mdc-dialog__footer__button[dir=\"rtl\"] {\n  margin-left: 8px;\n  margin-right: 0;\n}\n\n.mdc-dialog__footer__button:last-child {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n[dir=\"rtl\"] .mdc-dialog__footer__button:last-child, .mdc-dialog__footer__button:last-child[dir=\"rtl\"] {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.mdc-dialog__action {\n  /* \@alternate */\n  color: #ff4081;\n  color: var(--mdc-theme-secondary, #ff4081);\n}\n\n\@media (max-width: 640px) {\n  .mdc-dialog {\n    min-width: 280px;\n  }\n  .mdc-dialog__surface {\n    min-width: 280px;\n  }\n  .mdc-dialog__body {\n    line-height: 24px;\n  }\n}\n\n.mdc-dialog--animating {\n  visibility: visible;\n}\n\n.mdc-dialog--animating .mdc-dialog__backdrop {\n  transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-dialog--animating .mdc-dialog--open .mdc-dialog__surface {\n  transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-dialog--animating .mdc-dialog__surface {\n  transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-dialog--open {\n  visibility: visible;\n}\n\n.mdc-dialog--open .mdc-dialog__backdrop {\n  opacity: .3;\n}\n\n.mdc-dialog--open .mdc-dialog__surface {\n  transform: translateY(0) scale(1);\n  opacity: 1;\n}\n\n.mdc-dialog-scroll-lock {\n  overflow: hidden;\n}\nmwc-dialog.hydrated{visibility:inherit}","mwc-dialog-body","/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct CSS rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n * If $color has an alpha channel, it will be ignored and overridden. To increase the opacity of the shadow, use\n * $opacity-boost.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n:root {\n  --mdc-dialog-dark-theme-bg-color: #303030;\n}\n\n.mdc-dialog {\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n  z-index: 5;\n}\n\n.mdc-dialog__backdrop {\n  /* \@alternate */\n  background-color: rgba(0, 0, 0, 0.87);\n  background-color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n  position: fixed;\n  top: 0;\n  left: 0;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  z-index: -1;\n}\n\n.mdc-dialog__surface {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n  /* \@alternate */\n  background-color: #fff;\n  background-color: var(--mdc-theme-background, #fff);\n  display: inline-flex;\n  flex-direction: column;\n  width: calc(100% - 30px);\n  min-width: 640px;\n  max-width: 865px;\n  transform: translateY(150px) scale(0.8);\n  border-radius: 2px;\n  opacity: 0;\n}\n\n.mdc-dialog--theme-dark .mdc-dialog__surface,\n.mdc-theme--dark .mdc-dialog__surface {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n  background-color: #303030;\n  background-color: var(--mdc-dialog-dark-theme-bg-color, #303030);\n}\n\n[dir=\"rtl\"] .mdc-dialog .mdc-dialog__surface,\n.mdc-dialog[dir=\"rtl\"] .mdc-dialog__surface {\n  text-align: right;\n}\n\n.mdc-dialog__header {\n  display: flex;\n  align-items: center;\n  padding: 24px 24px 0;\n}\n\n.mdc-dialog__header__empty {\n  padding: 0;\n}\n\n[dir=\"rtl\"] .mdc-dialog .mdc-dialog__header,\n.mdc-dialog[dir=\"rtl\"] .mdc-dialog__header {\n  text-align: right;\n}\n\n.mdc-dialog__header__title {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1.25rem;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n  line-height: 2rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  flex: 1;\n  margin: 0;\n}\n\n.mdc-dialog__body {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54));\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.25rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  margin-top: 20px;\n  padding: 0 24px 24px;\n}\n\n.mdc-dialog--theme-dark .mdc-dialog__body,\n.mdc-theme--dark .mdc-dialog__body {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.7);\n  color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7));\n}\n\n.mdc-dialog__body--scrollable {\n  max-height: 195px;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  overflow-x: auto;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n}\n\n.mdc-dialog__footer {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 8px;\n}\n\n.mdc-dialog__footer__button {\n  margin-left: 0;\n  margin-right: 8px;\n}\n\n[dir=\"rtl\"] .mdc-dialog__footer__button, .mdc-dialog__footer__button[dir=\"rtl\"] {\n  margin-left: 8px;\n  margin-right: 0;\n}\n\n.mdc-dialog__footer__button:last-child {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n[dir=\"rtl\"] .mdc-dialog__footer__button:last-child, .mdc-dialog__footer__button:last-child[dir=\"rtl\"] {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.mdc-dialog__action {\n  /* \@alternate */\n  color: #ff4081;\n  color: var(--mdc-theme-secondary, #ff4081);\n}\n\n\@media (max-width: 640px) {\n  .mdc-dialog {\n    min-width: 280px;\n  }\n  .mdc-dialog__surface {\n    min-width: 280px;\n  }\n  .mdc-dialog__body {\n    line-height: 24px;\n  }\n}\n\n.mdc-dialog--animating {\n  visibility: visible;\n}\n\n.mdc-dialog--animating .mdc-dialog__backdrop {\n  transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-dialog--animating .mdc-dialog--open .mdc-dialog__surface {\n  transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-dialog--animating .mdc-dialog__surface {\n  transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-dialog--open {\n  visibility: visible;\n}\n\n.mdc-dialog--open .mdc-dialog__backdrop {\n  opacity: .3;\n}\n\n.mdc-dialog--open .mdc-dialog__surface {\n  transform: translateY(0) scale(1);\n  opacity: 1;\n}\n\n.mdc-dialog-scroll-lock {\n  overflow: hidden;\n}\nmwc-dialog-body.hydrated{visibility:inherit}","mwc-dialog-footer","/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct CSS rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n * If $color has an alpha channel, it will be ignored and overridden. To increase the opacity of the shadow, use\n * $opacity-boost.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n:root {\n  --mdc-dialog-dark-theme-bg-color: #303030;\n}\n\n.mdc-dialog {\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n  z-index: 5;\n}\n\n.mdc-dialog__backdrop {\n  /* \@alternate */\n  background-color: rgba(0, 0, 0, 0.87);\n  background-color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n  position: fixed;\n  top: 0;\n  left: 0;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  z-index: -1;\n}\n\n.mdc-dialog__surface {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n  /* \@alternate */\n  background-color: #fff;\n  background-color: var(--mdc-theme-background, #fff);\n  display: inline-flex;\n  flex-direction: column;\n  width: calc(100% - 30px);\n  min-width: 640px;\n  max-width: 865px;\n  transform: translateY(150px) scale(0.8);\n  border-radius: 2px;\n  opacity: 0;\n}\n\n.mdc-dialog--theme-dark .mdc-dialog__surface,\n.mdc-theme--dark .mdc-dialog__surface {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n  background-color: #303030;\n  background-color: var(--mdc-dialog-dark-theme-bg-color, #303030);\n}\n\n[dir=\"rtl\"] .mdc-dialog .mdc-dialog__surface,\n.mdc-dialog[dir=\"rtl\"] .mdc-dialog__surface {\n  text-align: right;\n}\n\n.mdc-dialog__header {\n  display: flex;\n  align-items: center;\n  padding: 24px 24px 0;\n}\n\n.mdc-dialog__header__empty {\n  padding: 0;\n}\n\n[dir=\"rtl\"] .mdc-dialog .mdc-dialog__header,\n.mdc-dialog[dir=\"rtl\"] .mdc-dialog__header {\n  text-align: right;\n}\n\n.mdc-dialog__header__title {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1.25rem;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n  line-height: 2rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  flex: 1;\n  margin: 0;\n}\n\n.mdc-dialog__body {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54));\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.25rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  margin-top: 20px;\n  padding: 0 24px 24px;\n}\n\n.mdc-dialog--theme-dark .mdc-dialog__body,\n.mdc-theme--dark .mdc-dialog__body {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.7);\n  color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7));\n}\n\n.mdc-dialog__body--scrollable {\n  max-height: 195px;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  overflow-x: auto;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n}\n\n.mdc-dialog__footer {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 8px;\n}\n\n.mdc-dialog__footer__button {\n  margin-left: 0;\n  margin-right: 8px;\n}\n\n[dir=\"rtl\"] .mdc-dialog__footer__button, .mdc-dialog__footer__button[dir=\"rtl\"] {\n  margin-left: 8px;\n  margin-right: 0;\n}\n\n.mdc-dialog__footer__button:last-child {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n[dir=\"rtl\"] .mdc-dialog__footer__button:last-child, .mdc-dialog__footer__button:last-child[dir=\"rtl\"] {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.mdc-dialog__action {\n  /* \@alternate */\n  color: #ff4081;\n  color: var(--mdc-theme-secondary, #ff4081);\n}\n\n\@media (max-width: 640px) {\n  .mdc-dialog {\n    min-width: 280px;\n  }\n  .mdc-dialog__surface {\n    min-width: 280px;\n  }\n  .mdc-dialog__body {\n    line-height: 24px;\n  }\n}\n\n.mdc-dialog--animating {\n  visibility: visible;\n}\n\n.mdc-dialog--animating .mdc-dialog__backdrop {\n  transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-dialog--animating .mdc-dialog--open .mdc-dialog__surface {\n  transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-dialog--animating .mdc-dialog__surface {\n  transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-dialog--open {\n  visibility: visible;\n}\n\n.mdc-dialog--open .mdc-dialog__backdrop {\n  opacity: .3;\n}\n\n.mdc-dialog--open .mdc-dialog__surface {\n  transform: translateY(0) scale(1);\n  opacity: 1;\n}\n\n.mdc-dialog-scroll-lock {\n  overflow: hidden;\n}\nmwc-dialog-footer.hydrated{visibility:inherit}","mwc-dialog-header","/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct CSS rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n * If $color has an alpha channel, it will be ignored and overridden. To increase the opacity of the shadow, use\n * $opacity-boost.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n:root {\n  --mdc-dialog-dark-theme-bg-color: #303030;\n}\n\n.mdc-dialog {\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n  z-index: 5;\n}\n\n.mdc-dialog__backdrop {\n  /* \@alternate */\n  background-color: rgba(0, 0, 0, 0.87);\n  background-color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n  position: fixed;\n  top: 0;\n  left: 0;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  z-index: -1;\n}\n\n.mdc-dialog__surface {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n  /* \@alternate */\n  background-color: #fff;\n  background-color: var(--mdc-theme-background, #fff);\n  display: inline-flex;\n  flex-direction: column;\n  width: calc(100% - 30px);\n  min-width: 640px;\n  max-width: 865px;\n  transform: translateY(150px) scale(0.8);\n  border-radius: 2px;\n  opacity: 0;\n}\n\n.mdc-dialog--theme-dark .mdc-dialog__surface,\n.mdc-theme--dark .mdc-dialog__surface {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n  background-color: #303030;\n  background-color: var(--mdc-dialog-dark-theme-bg-color, #303030);\n}\n\n[dir=\"rtl\"] .mdc-dialog .mdc-dialog__surface,\n.mdc-dialog[dir=\"rtl\"] .mdc-dialog__surface {\n  text-align: right;\n}\n\n.mdc-dialog__header {\n  display: flex;\n  align-items: center;\n  padding: 24px 24px 0;\n}\n\n.mdc-dialog__header__empty {\n  padding: 0;\n}\n\n[dir=\"rtl\"] .mdc-dialog .mdc-dialog__header,\n.mdc-dialog[dir=\"rtl\"] .mdc-dialog__header {\n  text-align: right;\n}\n\n.mdc-dialog__header__title {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1.25rem;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n  line-height: 2rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  flex: 1;\n  margin: 0;\n}\n\n.mdc-dialog__body {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54));\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.25rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  margin-top: 20px;\n  padding: 0 24px 24px;\n}\n\n.mdc-dialog--theme-dark .mdc-dialog__body,\n.mdc-theme--dark .mdc-dialog__body {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.7);\n  color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7));\n}\n\n.mdc-dialog__body--scrollable {\n  max-height: 195px;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  overflow-x: auto;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n}\n\n.mdc-dialog__footer {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 8px;\n}\n\n.mdc-dialog__footer__button {\n  margin-left: 0;\n  margin-right: 8px;\n}\n\n[dir=\"rtl\"] .mdc-dialog__footer__button, .mdc-dialog__footer__button[dir=\"rtl\"] {\n  margin-left: 8px;\n  margin-right: 0;\n}\n\n.mdc-dialog__footer__button:last-child {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n[dir=\"rtl\"] .mdc-dialog__footer__button:last-child, .mdc-dialog__footer__button:last-child[dir=\"rtl\"] {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.mdc-dialog__action {\n  /* \@alternate */\n  color: #ff4081;\n  color: var(--mdc-theme-secondary, #ff4081);\n}\n\n\@media (max-width: 640px) {\n  .mdc-dialog {\n    min-width: 280px;\n  }\n  .mdc-dialog__surface {\n    min-width: 280px;\n  }\n  .mdc-dialog__body {\n    line-height: 24px;\n  }\n}\n\n.mdc-dialog--animating {\n  visibility: visible;\n}\n\n.mdc-dialog--animating .mdc-dialog__backdrop {\n  transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-dialog--animating .mdc-dialog--open .mdc-dialog__surface {\n  transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-dialog--animating .mdc-dialog__surface {\n  transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-dialog--open {\n  visibility: visible;\n}\n\n.mdc-dialog--open .mdc-dialog__backdrop {\n  opacity: .3;\n}\n\n.mdc-dialog--open .mdc-dialog__surface {\n  transform: translateY(0) scale(1);\n  opacity: 1;\n}\n\n.mdc-dialog-scroll-lock {\n  overflow: hidden;\n}\nmwc-dialog-header.hydrated{visibility:inherit}","mwc-drawer","/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n:root {\n  --mdc-persistent-drawer-dark-theme-bg-color: #212121;\n}\n\n.mdc-persistent-drawer {\n  /* Use aspect ratio trick to maintain 16:9 aspect ratio on the header */\n  /* TODO(sgomes): Revisit when we have interactive lists. */\n  width: 0;\n}\n\n.mdc-persistent-drawer__toolbar-spacer {\n  display: flex;\n  position: relative;\n  flex-direction: row;\n  flex-shrink: 0;\n  align-items: center;\n  box-sizing: border-box;\n  height: 56px;\n  padding: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  /* TODO(sgomes): replace with global breakpoints when we have them */\n}\n\n.mdc-persistent-drawer__toolbar-spacer--theme-dark .mdc-persistent-drawer__toolbar-spacer,\n.mdc-theme--dark .mdc-persistent-drawer__toolbar-spacer {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n}\n\n\@media (min-width: 600px) {\n  .mdc-persistent-drawer__toolbar-spacer {\n    height: 64px;\n  }\n}\n\n.mdc-persistent-drawer__header {\n  position: relative;\n}\n\n.mdc-persistent-drawer__header::before {\n  display: block;\n  padding-top: 56.25%;\n  content: \"\";\n}\n\n.mdc-persistent-drawer__header-content {\n  display: flex;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  align-items: flex-end;\n  box-sizing: border-box;\n  padding: 16px;\n}\n\n.mdc-persistent-drawer .mdc-list-group,\n.mdc-persistent-drawer .mdc-list {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.mdc-persistent-drawer .mdc-list-item {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  line-height: 1.5rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  position: relative;\n  padding: 0 16px;\n  outline: none;\n  color: inherit;\n  text-decoration: none;\n}\n\n.mdc-persistent-drawer .mdc-list-item.mdc-ripple-upgraded {\n  left: 0;\n}\n\n.mdc-persistent-drawer .mdc-list-item__start-detail {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mdc-persistent-drawer .mdc-list-item__start-detail--theme-dark .mdc-persistent-drawer .mdc-list-item__start-detail,\n.mdc-theme--dark .mdc-persistent-drawer .mdc-list-item__start-detail {\n  color: rgba(255, 255, 255, 0.54);\n}\n\n.mdc-persistent-drawer--selected.mdc-list-item,\n.mdc-persistent-drawer--selected.mdc-list-item .mdc-list-item__start-detail {\n  /* \@alternate */\n  color: #3f51b5;\n  color: var(--mdc-theme-primary, #3f51b5);\n}\n\n.mdc-persistent-drawer .mdc-list-item::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  border-radius: inherit;\n  background: currentColor;\n  opacity: 0;\n  content: \"\";\n}\n\n.mdc-persistent-drawer .mdc-list-item:focus::before {\n  transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: .12;\n}\n\n.mdc-persistent-drawer .mdc-list-item:active::before {\n  /*\n      Slightly darker value for visual distinction.\n      This allows a full base that has distinct modes.\n      Progressive enhancement with ripples will provide complete button spec alignment.\n    */\n  transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: .18;\n}\n\n.mdc-persistent-drawer .mdc-list-item:active:focus::before {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdc-persistent-drawer__drawer {\n  /* \@alternate */\n  background: #fff;\n  background: var(--mdc-theme-background, #fff);\n  border-left: 0;\n  border-right: 1px solid #e4e4e4;\n  left: 0;\n  right: initial;\n  height: 100%;\n  transform: translateX(-107%);\n  transform: translateX(calc(-100% - 20px));\n  will-change: transform;\n  display: inline-flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  width: 240px;\n  overflow: hidden;\n  touch-action: none;\n}\n\n[dir=\"rtl\"] .mdc-persistent-drawer__drawer, .mdc-persistent-drawer__drawer[dir=\"rtl\"] {\n  border-left: 1px solid #e4e4e4;\n  border-right: 0;\n}\n\n[dir=\"rtl\"] .mdc-persistent-drawer__drawer, .mdc-persistent-drawer__drawer[dir=\"rtl\"] {\n  left: initial;\n  right: 0;\n}\n\n.mdc-persistent-drawer__drawer--theme-dark,\n.mdc-theme--dark .mdc-persistent-drawer__drawer {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n  border-left: 0;\n  border-right: 1px solid rgba(255, 255, 255, 0.12);\n  background-color: #212121;\n  background-color: var(--mdc-persistent-drawer-dark-theme-bg-color, #212121);\n}\n\n[dir=\"rtl\"] .mdc-persistent-drawer__drawer--theme-dark, .mdc-persistent-drawer__drawer--theme-dark[dir=\"rtl\"], [dir=\"rtl\"]\n.mdc-theme--dark .mdc-persistent-drawer__drawer,\n.mdc-theme--dark .mdc-persistent-drawer__drawer[dir=\"rtl\"] {\n  border-left: 1px solid rgba(255, 255, 255, 0.12);\n  border-right: 0;\n}\n\n[dir=\"rtl\"] .mdc-persistent-drawer .mdc-persistent-drawer__drawer,\n.mdc-persistent-drawer[dir=\"rtl\"] .mdc-persistent-drawer__drawer {\n  transform: translateX(107%);\n  transform: translateX(calc(100% + 20px));\n}\n\n.mdc-persistent-drawer--animating .mdc-persistent-drawer__drawer {\n  transition: transform 0.195s 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n\n.mdc-persistent-drawer--animating.mdc-persistent-drawer--open .mdc-persistent-drawer__drawer {\n  transition: transform 0.225s 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-persistent-drawer--open {\n  width: 240px;\n  pointer-events: auto;\n}\n\n.mdc-persistent-drawer--open .mdc-persistent-drawer__drawer {\n  transform: none;\n}\n\n[dir=\"rtl\"] .mdc-persistent-drawer--open .mdc-persistent-drawer__drawer, .mdc-persistent-drawer--open[dir=\"rtl\"] .mdc-persistent-drawer__drawer {\n  transform: none;\n}\n\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n:root {\n  --mdc-permanent-drawer-dark-theme-bg-color: #212121;\n}\n\n.mdc-permanent-drawer {\n  /* Use aspect ratio trick to maintain 16:9 aspect ratio on the header */\n  /* TODO(sgomes): Revisit when we have interactive lists. */\n  /* \@alternate */\n  background: #fff;\n  background: var(--mdc-theme-background, #fff);\n  border-left: 0;\n  border-right: 1px solid #e4e4e4;\n  left: 0;\n  right: initial;\n  display: inline-flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n  box-sizing: border-box;\n  width: 240px;\n  overflow: hidden;\n}\n\n.mdc-permanent-drawer__toolbar-spacer {\n  display: flex;\n  position: relative;\n  flex-direction: row;\n  flex-shrink: 0;\n  align-items: center;\n  box-sizing: border-box;\n  height: 56px;\n  padding: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  /* TODO(sgomes): replace with global breakpoints when we have them */\n}\n\n.mdc-permanent-drawer__toolbar-spacer--theme-dark .mdc-permanent-drawer__toolbar-spacer,\n.mdc-theme--dark .mdc-permanent-drawer__toolbar-spacer {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n}\n\n\@media (min-width: 600px) {\n  .mdc-permanent-drawer__toolbar-spacer {\n    height: 64px;\n  }\n}\n\n.mdc-permanent-drawer__header {\n  position: relative;\n}\n\n.mdc-permanent-drawer__header::before {\n  display: block;\n  padding-top: 56.25%;\n  content: \"\";\n}\n\n.mdc-permanent-drawer__header-content {\n  display: flex;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  align-items: flex-end;\n  box-sizing: border-box;\n  padding: 16px;\n}\n\n.mdc-permanent-drawer .mdc-list-group,\n.mdc-permanent-drawer .mdc-list {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.mdc-permanent-drawer .mdc-list-item {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  line-height: 1.5rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  position: relative;\n  padding: 0 16px;\n  outline: none;\n  color: inherit;\n  text-decoration: none;\n}\n\n.mdc-permanent-drawer .mdc-list-item.mdc-ripple-upgraded {\n  left: 0;\n}\n\n.mdc-permanent-drawer .mdc-list-item__start-detail {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mdc-permanent-drawer .mdc-list-item__start-detail--theme-dark .mdc-permanent-drawer .mdc-list-item__start-detail,\n.mdc-theme--dark .mdc-permanent-drawer .mdc-list-item__start-detail {\n  color: rgba(255, 255, 255, 0.54);\n}\n\n.mdc-permanent-drawer--selected.mdc-list-item,\n.mdc-permanent-drawer--selected.mdc-list-item .mdc-list-item__start-detail {\n  /* \@alternate */\n  color: #3f51b5;\n  color: var(--mdc-theme-primary, #3f51b5);\n}\n\n.mdc-permanent-drawer .mdc-list-item::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  border-radius: inherit;\n  background: currentColor;\n  opacity: 0;\n  content: \"\";\n}\n\n.mdc-permanent-drawer .mdc-list-item:focus::before {\n  transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: .12;\n}\n\n.mdc-permanent-drawer .mdc-list-item:active::before {\n  /*\n      Slightly darker value for visual distinction.\n      This allows a full base that has distinct modes.\n      Progressive enhancement with ripples will provide complete button spec alignment.\n    */\n  transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: .18;\n}\n\n.mdc-permanent-drawer .mdc-list-item:active:focus::before {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[dir=\"rtl\"] .mdc-permanent-drawer, .mdc-permanent-drawer[dir=\"rtl\"] {\n  border-left: 1px solid #e4e4e4;\n  border-right: 0;\n}\n\n[dir=\"rtl\"] .mdc-permanent-drawer, .mdc-permanent-drawer[dir=\"rtl\"] {\n  left: initial;\n  right: 0;\n}\n\n.mdc-permanent-drawer--theme-dark,\n.mdc-theme--dark .mdc-permanent-drawer {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n  border-left: 0;\n  border-right: 1px solid rgba(255, 255, 255, 0.12);\n  background-color: #212121;\n  background-color: var(--mdc-permanent-drawer-dark-theme-bg-color, #212121);\n}\n\n[dir=\"rtl\"] .mdc-permanent-drawer--theme-dark, .mdc-permanent-drawer--theme-dark[dir=\"rtl\"], [dir=\"rtl\"]\n.mdc-theme--dark .mdc-permanent-drawer,\n.mdc-theme--dark .mdc-permanent-drawer[dir=\"rtl\"] {\n  border-left: 1px solid rgba(255, 255, 255, 0.12);\n  border-right: 0;\n}\n\n.mdc-permanent-drawer--floating {\n  border-left: 0;\n  border-right: none;\n  background: none;\n}\n\n[dir=\"rtl\"] .mdc-permanent-drawer--floating, .mdc-permanent-drawer--floating[dir=\"rtl\"] {\n  border-left: none;\n  border-right: 0;\n}\n\n.mdc-permanent-drawer--floating--theme-dark,\n.mdc-theme--dark .mdc-permanent-drawer--floating {\n  border-left: 0;\n  border-right: none;\n  background: none;\n}\n\n[dir=\"rtl\"] .mdc-permanent-drawer--floating--theme-dark, .mdc-permanent-drawer--floating--theme-dark[dir=\"rtl\"], [dir=\"rtl\"]\n.mdc-theme--dark .mdc-permanent-drawer--floating,\n.mdc-theme--dark .mdc-permanent-drawer--floating[dir=\"rtl\"] {\n  border-left: none;\n  border-right: 0;\n}\n\n/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct CSS rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n * If $color has an alpha channel, it will be ignored and overridden. To increase the opacity of the shadow, use\n * $opacity-boost.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n.mdc-temporary-drawer {\n  /* Use aspect ratio trick to maintain 16:9 aspect ratio on the header */\n  /* TODO(sgomes): Revisit when we have interactive lists. */\n  position: fixed;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  overflow: hidden;\n  contain: strict;\n  z-index: 5;\n  /* Shaded background */\n}\n\n.mdc-temporary-drawer__toolbar-spacer {\n  display: flex;\n  position: relative;\n  flex-direction: row;\n  flex-shrink: 0;\n  align-items: center;\n  box-sizing: border-box;\n  height: 56px;\n  padding: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  /* TODO(sgomes): replace with global breakpoints when we have them */\n}\n\n.mdc-temporary-drawer__toolbar-spacer--theme-dark .mdc-temporary-drawer__toolbar-spacer,\n.mdc-theme--dark .mdc-temporary-drawer__toolbar-spacer {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n}\n\n\@media (min-width: 600px) {\n  .mdc-temporary-drawer__toolbar-spacer {\n    height: 64px;\n  }\n}\n\n.mdc-temporary-drawer__header {\n  position: relative;\n}\n\n.mdc-temporary-drawer__header::before {\n  display: block;\n  padding-top: 56.25%;\n  content: \"\";\n}\n\n.mdc-temporary-drawer__header-content {\n  display: flex;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  align-items: flex-end;\n  box-sizing: border-box;\n  padding: 16px;\n}\n\n.mdc-temporary-drawer .mdc-list-group,\n.mdc-temporary-drawer .mdc-list {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.mdc-temporary-drawer .mdc-list-item {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  line-height: 1.5rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  position: relative;\n  padding: 0 16px;\n  outline: none;\n  color: inherit;\n  text-decoration: none;\n}\n\n.mdc-temporary-drawer .mdc-list-item.mdc-ripple-upgraded {\n  left: 0;\n}\n\n.mdc-temporary-drawer .mdc-list-item__start-detail {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mdc-temporary-drawer .mdc-list-item__start-detail--theme-dark .mdc-temporary-drawer .mdc-list-item__start-detail,\n.mdc-theme--dark .mdc-temporary-drawer .mdc-list-item__start-detail {\n  color: rgba(255, 255, 255, 0.54);\n}\n\n.mdc-temporary-drawer--selected.mdc-list-item,\n.mdc-temporary-drawer--selected.mdc-list-item .mdc-list-item__start-detail {\n  /* \@alternate */\n  color: #3f51b5;\n  color: var(--mdc-theme-primary, #3f51b5);\n}\n\n.mdc-temporary-drawer .mdc-list-item::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  border-radius: inherit;\n  background: currentColor;\n  opacity: 0;\n  content: \"\";\n}\n\n.mdc-temporary-drawer .mdc-list-item:focus::before {\n  transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: .12;\n}\n\n.mdc-temporary-drawer .mdc-list-item:active::before {\n  /*\n      Slightly darker value for visual distinction.\n      This allows a full base that has distinct modes.\n      Progressive enhancement with ripples will provide complete button spec alignment.\n    */\n  transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: .18;\n}\n\n.mdc-temporary-drawer .mdc-list-item:active:focus::before {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdc-temporary-drawer::before {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  opacity: 0;\n  opacity: var(--mdc-temporary-drawer-opacity, 0);\n  content: \"\";\n  will-change: opacity;\n}\n\n.mdc-temporary-drawer__drawer {\n  /* \@alternate */\n  background: #fff;\n  background: var(--mdc-theme-background, #fff);\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n  left: 0;\n  right: initial;\n  height: 100%;\n  transform: translateX(-107%);\n  transform: translateX(calc(-100% - 20px));\n  will-change: transform;\n  display: flex;\n  position: absolute;\n  flex-direction: column;\n  box-sizing: border-box;\n  width: calc(100% - 56px);\n  max-width: 280px;\n  overflow: hidden;\n  touch-action: none;\n  /* TODO(sgomes): replace with global breakpoints when we have them */\n}\n\n[dir=\"rtl\"] .mdc-temporary-drawer__drawer, .mdc-temporary-drawer__drawer[dir=\"rtl\"] {\n  left: initial;\n  right: 0;\n}\n\n.mdc-temporary-drawer--theme-dark .mdc-temporary-drawer__drawer,\n.mdc-theme--dark .mdc-temporary-drawer__drawer {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n  background: #303030;\n}\n\n[dir=\"rtl\"] .mdc-temporary-drawer .mdc-temporary-drawer__drawer,\n.mdc-temporary-drawer[dir=\"rtl\"] .mdc-temporary-drawer__drawer {\n  transform: translateX(107%);\n  transform: translateX(calc(100% + 20px));\n}\n\n\@media (min-width: 600px) {\n  .mdc-temporary-drawer__drawer {\n    width: calc(100% - 64px);\n    max-width: 320px;\n  }\n}\n\n.mdc-temporary-drawer__content {\n  flex-grow: 1;\n  box-sizing: border-box;\n  margin: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  touch-action: pan-y;\n}\n\n.mdc-temporary-drawer__footer {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  flex-shrink: 0;\n}\n\n.mdc-temporary-drawer--animating::before {\n  transition: opacity 0.3s 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-temporary-drawer--animating.mdc-temporary-drawer--open .mdc-temporary-drawer__drawer {\n  transition: transform 0.225s 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-temporary-drawer--animating .mdc-temporary-drawer__drawer {\n  transition: transform 0.195s 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n\n.mdc-temporary-drawer--open {\n  pointer-events: auto;\n}\n\n.mdc-temporary-drawer--open::before {\n  opacity: 1;\n  opacity: var(--mdc-temporary-drawer-opacity, 1);\n}\n\n.mdc-temporary-drawer--open .mdc-temporary-drawer__drawer {\n  transform: none;\n}\n\n[dir=\"rtl\"] .mdc-temporary-drawer--open .mdc-temporary-drawer__drawer, .mdc-temporary-drawer--open[dir=\"rtl\"] .mdc-temporary-drawer__drawer {\n  transform: none;\n}\n\n.mdc-drawer-scroll-lock {\n  overflow: hidden;\n}\n\n.drawer-body {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  height: 100%;\n  overflow-y: auto;\n}\nmwc-drawer.hydrated{visibility:inherit}","mwc-fab","\@keyframes mdc-ripple-fg-radius-in {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n\n\@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0.16);\n  }\n}\n\n\@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0.16);\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.mdc-ripple-surface--test-edge-var-bug {\n  --mdc-ripple-surface-test-edge-var: 1px solid #000;\n  visibility: hidden;\n}\n\n.mdc-ripple-surface--test-edge-var-bug::before {\n  border: var(--mdc-ripple-surface-test-edge-var);\n}\n\n/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct CSS rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n * If $color has an alpha channel, it will be ignored and overridden. To increase the opacity of the shadow, use\n * $opacity-boost.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n.mdc-fab {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: transparent;\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n  display: inline-flex;\n  position: relative;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 56px;\n  height: 56px;\n  padding: 0;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  border: none;\n  border-radius: 50%;\n  fill: currentColor;\n  cursor: pointer;\n  user-select: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  overflow: hidden;\n  /* \@alternate */\n  background-color: #ff4081;\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-secondary, white);\n}\n\n.mdc-fab::before, .mdc-fab::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n  will-change: transform, opacity;\n}\n\n.mdc-fab::before {\n  transition: opacity 15ms linear;\n}\n\n.mdc-fab.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-fab.mdc-ripple-upgraded--unbounded::after {\n  top: var(--mdc-ripple-top, 0);\n  left: var(--mdc-ripple-left, 0);\n}\n\n.mdc-fab.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 225ms mdc-ripple-fg-radius-in forwards, 75ms mdc-ripple-fg-opacity-in forwards;\n}\n\n.mdc-fab.mdc-ripple-upgraded--foreground-deactivation::after {\n  animation: 150ms mdc-ripple-fg-opacity-out;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n\n.mdc-fab::before, .mdc-fab::after {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n\n.mdc-fab.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-fab.mdc-ripple-upgraded--unbounded::before {\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-fab.mdc-ripple-upgraded::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n\n.mdc-fab:hover, .mdc-fab:focus {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-fab:active {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-fab:active, .mdc-fab:focus {\n  outline: none;\n}\n\n.mdc-fab:hover {\n  cursor: pointer;\n}\n\n.mdc-fab::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\n.mdc-fab > svg {\n  width: 100%;\n}\n\n\@supports not (-ms-ime-align: auto) {\n  .mdc-fab {\n    background-color: var(--mdc-theme-secondary, #ff4081);\n  }\n}\n\n.mdc-fab::before, .mdc-fab::after {\n  /* \@alternate */\n  background-color: white;\n}\n\n\@supports not (-ms-ime-align: auto) {\n  .mdc-fab::before, .mdc-fab::after {\n    background-color: var(--mdc-theme-text-primary-on-secondary, white);\n  }\n}\n\n.mdc-fab:hover::before {\n  opacity: 0.08;\n}\n\n.mdc-fab:not(.mdc-ripple-upgraded):focus::before, .mdc-fab.mdc-ripple-upgraded--background-focused::before {\n  transition-duration: 75ms;\n  opacity: 0.24;\n}\n\n.mdc-fab:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n\n.mdc-fab:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.32;\n}\n\n.mdc-fab.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.32;\n}\n\n.mdc-fab--mini {\n  width: 40px;\n  height: 40px;\n}\n\n.mdc-fab__icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);\n  will-change: transform;\n}\n\n.mdc-fab--exited {\n  transform: scale(0);\n  transition: opacity 15ms linear 150ms, transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1);\n  opacity: 0;\n}\n\n.mdc-fab--exited .mdc-fab__icon {\n  transform: scale(0);\n  transition: transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1);\n}\nmwc-fab.hydrated{visibility:inherit}","mwc-grid-list","/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n.mdc-grid-list .mdc-grid-tile__primary {\n  padding-bottom: calc(100% / 1);\n}\n\n.mdc-grid-list .mdc-grid-tile {\n  margin: 2px 0;\n  padding: 0 2px;\n}\n\n.mdc-grid-list .mdc-grid-tile__secondary {\n  left: 2px;\n  width: calc(100% - 4px);\n}\n\n.mdc-grid-list .mdc-grid-list__tiles {\n  margin: 2px auto;\n}\n\n.mdc-grid-list__tiles {\n  display: flex;\n  flex-flow: row wrap;\n  margin: 0;\n  padding: 0;\n}\n\n.mdc-grid-list--tile-gutter-1 .mdc-grid-tile {\n  margin: 0.5px 0;\n  padding: 0 0.5px;\n}\n\n.mdc-grid-list--tile-gutter-1 .mdc-grid-tile__secondary {\n  left: 0.5px;\n  width: calc(100% - 1px);\n}\n\n.mdc-grid-list--tile-gutter-1 .mdc-grid-list__tiles {\n  margin: 0.5px auto;\n}\n\n.mdc-grid-list--tile-aspect-16x9 .mdc-grid-tile__primary {\n  padding-bottom: calc(100% / 1.77778);\n}\n\n.mdc-grid-list--tile-aspect-3x2 .mdc-grid-tile__primary {\n  padding-bottom: calc(100% / 1.5);\n}\n\n.mdc-grid-list--tile-aspect-2x3 .mdc-grid-tile__primary {\n  padding-bottom: calc(100% / 0.66667);\n}\n\n.mdc-grid-list--tile-aspect-4x3 .mdc-grid-tile__primary {\n  padding-bottom: calc(100% / 1.33333);\n}\n\n.mdc-grid-list--tile-aspect-3x4 .mdc-grid-tile__primary {\n  padding-bottom: calc(100% / 0.75);\n}\n\n.mdc-grid-list--twoline-caption .mdc-grid-tile__secondary {\n  height: 68px;\n}\n\n.mdc-grid-list--header-caption .mdc-grid-tile__secondary {\n  top: 0;\n  bottom: auto;\n}\n\n.mdc-grid-list--with-icon-align-start .mdc-grid-tile__secondary {\n  padding-left: 56px;\n  padding-right: 8px;\n}\n\n[dir=\"rtl\"] .mdc-grid-list .mdc-grid-list--with-icon-align-start .mdc-grid-tile__secondary,\n.mdc-grid-list[dir=\"rtl\"] .mdc-grid-list--with-icon-align-start .mdc-grid-tile__secondary {\n  padding-left: 8px;\n  padding-right: 56px;\n}\n\n.mdc-grid-list--with-icon-align-start .mdc-grid-tile__icon {\n  left: 16px;\n  right: initial;\n  font-size: 24px;\n}\n\n[dir=\"rtl\"] .mdc-grid-list .mdc-grid-list--with-icon-align-start .mdc-grid-tile__icon,\n.mdc-grid-list[dir=\"rtl\"] .mdc-grid-list--with-icon-align-start .mdc-grid-tile__icon {\n  left: initial;\n  right: 16px;\n}\n\n.mdc-grid-list--with-icon-align-end .mdc-grid-tile__secondary {\n  padding-left: 16px;\n  padding-right: 56px;\n}\n\n[dir=\"rtl\"] .mdc-grid-list .mdc-grid-list--with-icon-align-end .mdc-grid-tile__secondary,\n.mdc-grid-list[dir=\"rtl\"] .mdc-grid-list--with-icon-align-end .mdc-grid-tile__secondary {\n  padding-left: 56px;\n  padding-right: 16px;\n}\n\n.mdc-grid-list--with-icon-align-end .mdc-grid-tile__icon {\n  left: initial;\n  right: 16px;\n  font-size: 24px;\n}\n\n[dir=\"rtl\"] .mdc-grid-list .mdc-grid-list--with-icon-align-end .mdc-grid-tile__icon,\n.mdc-grid-list[dir=\"rtl\"] .mdc-grid-list--with-icon-align-end .mdc-grid-tile__icon {\n  left: 16px;\n  right: initial;\n}\n\n.mdc-grid-tile {\n  display: block;\n  position: relative;\n  /* \@alternate */\n  width: 200px;\n  width: var(--mdc-grid-list-tile-width, 200px);\n}\n\n.mdc-grid-tile__primary {\n  /* \@alternate */\n  background-color: #fff;\n  background-color: var(--mdc-theme-background, #fff);\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n  position: relative;\n  height: 0;\n}\n\n.mdc-grid-tile__primary-content {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n.mdc-grid-tile__secondary {\n  /* \@alternate */\n  background-color: #3f51b5;\n  background-color: var(--mdc-theme-primary, #3f51b5);\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-primary, white);\n  position: absolute;\n  bottom: 0;\n  box-sizing: border-box;\n  height: 48px;\n  padding: 16px;\n}\n\n.mdc-grid-tile__title {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: block;\n  margin: 0;\n  padding: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  line-height: 1rem;\n}\n\n.mdc-grid-tile__support-text {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.25rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: block;\n  margin: 0;\n  margin-top: 4px;\n  padding: 0;\n}\n\n.mdc-grid-tile__icon {\n  position: absolute;\n  top: calc(50% - 24px / 2);\n  font-size: 0;\n}\nmwc-grid-list.hydrated{visibility:inherit}","mwc-grid-list-tile","/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n.mdc-grid-list .mdc-grid-tile__primary {\n  padding-bottom: calc(100% / 1);\n}\n\n.mdc-grid-list .mdc-grid-tile {\n  margin: 2px 0;\n  padding: 0 2px;\n}\n\n.mdc-grid-list .mdc-grid-tile__secondary {\n  left: 2px;\n  width: calc(100% - 4px);\n}\n\n.mdc-grid-list .mdc-grid-list__tiles {\n  margin: 2px auto;\n}\n\n.mdc-grid-list__tiles {\n  display: flex;\n  flex-flow: row wrap;\n  margin: 0;\n  padding: 0;\n}\n\n.mdc-grid-list--tile-gutter-1 .mdc-grid-tile {\n  margin: 0.5px 0;\n  padding: 0 0.5px;\n}\n\n.mdc-grid-list--tile-gutter-1 .mdc-grid-tile__secondary {\n  left: 0.5px;\n  width: calc(100% - 1px);\n}\n\n.mdc-grid-list--tile-gutter-1 .mdc-grid-list__tiles {\n  margin: 0.5px auto;\n}\n\n.mdc-grid-list--tile-aspect-16x9 .mdc-grid-tile__primary {\n  padding-bottom: calc(100% / 1.77778);\n}\n\n.mdc-grid-list--tile-aspect-3x2 .mdc-grid-tile__primary {\n  padding-bottom: calc(100% / 1.5);\n}\n\n.mdc-grid-list--tile-aspect-2x3 .mdc-grid-tile__primary {\n  padding-bottom: calc(100% / 0.66667);\n}\n\n.mdc-grid-list--tile-aspect-4x3 .mdc-grid-tile__primary {\n  padding-bottom: calc(100% / 1.33333);\n}\n\n.mdc-grid-list--tile-aspect-3x4 .mdc-grid-tile__primary {\n  padding-bottom: calc(100% / 0.75);\n}\n\n.mdc-grid-list--twoline-caption .mdc-grid-tile__secondary {\n  height: 68px;\n}\n\n.mdc-grid-list--header-caption .mdc-grid-tile__secondary {\n  top: 0;\n  bottom: auto;\n}\n\n.mdc-grid-list--with-icon-align-start .mdc-grid-tile__secondary {\n  padding-left: 56px;\n  padding-right: 8px;\n}\n\n[dir=\"rtl\"] .mdc-grid-list .mdc-grid-list--with-icon-align-start .mdc-grid-tile__secondary,\n.mdc-grid-list[dir=\"rtl\"] .mdc-grid-list--with-icon-align-start .mdc-grid-tile__secondary {\n  padding-left: 8px;\n  padding-right: 56px;\n}\n\n.mdc-grid-list--with-icon-align-start .mdc-grid-tile__icon {\n  left: 16px;\n  right: initial;\n  font-size: 24px;\n}\n\n[dir=\"rtl\"] .mdc-grid-list .mdc-grid-list--with-icon-align-start .mdc-grid-tile__icon,\n.mdc-grid-list[dir=\"rtl\"] .mdc-grid-list--with-icon-align-start .mdc-grid-tile__icon {\n  left: initial;\n  right: 16px;\n}\n\n.mdc-grid-list--with-icon-align-end .mdc-grid-tile__secondary {\n  padding-left: 16px;\n  padding-right: 56px;\n}\n\n[dir=\"rtl\"] .mdc-grid-list .mdc-grid-list--with-icon-align-end .mdc-grid-tile__secondary,\n.mdc-grid-list[dir=\"rtl\"] .mdc-grid-list--with-icon-align-end .mdc-grid-tile__secondary {\n  padding-left: 56px;\n  padding-right: 16px;\n}\n\n.mdc-grid-list--with-icon-align-end .mdc-grid-tile__icon {\n  left: initial;\n  right: 16px;\n  font-size: 24px;\n}\n\n[dir=\"rtl\"] .mdc-grid-list .mdc-grid-list--with-icon-align-end .mdc-grid-tile__icon,\n.mdc-grid-list[dir=\"rtl\"] .mdc-grid-list--with-icon-align-end .mdc-grid-tile__icon {\n  left: 16px;\n  right: initial;\n}\n\n.mdc-grid-tile {\n  display: block;\n  position: relative;\n  /* \@alternate */\n  width: 200px;\n  width: var(--mdc-grid-list-tile-width, 200px);\n}\n\n.mdc-grid-tile__primary {\n  /* \@alternate */\n  background-color: #fff;\n  background-color: var(--mdc-theme-background, #fff);\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n  position: relative;\n  height: 0;\n}\n\n.mdc-grid-tile__primary-content {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n.mdc-grid-tile__secondary {\n  /* \@alternate */\n  background-color: #3f51b5;\n  background-color: var(--mdc-theme-primary, #3f51b5);\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-primary, white);\n  position: absolute;\n  bottom: 0;\n  box-sizing: border-box;\n  height: 48px;\n  padding: 16px;\n}\n\n.mdc-grid-tile__title {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: block;\n  margin: 0;\n  padding: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  line-height: 1rem;\n}\n\n.mdc-grid-tile__support-text {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.25rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: block;\n  margin: 0;\n  margin-top: 4px;\n  padding: 0;\n}\n\n.mdc-grid-tile__icon {\n  position: absolute;\n  top: calc(50% - 24px / 2);\n  font-size: 0;\n}\nmwc-grid-list-tile.hydrated{visibility:inherit}","mwc-icon-toggle","/** postcss-bem-linter: define icon-toggle */\n\@keyframes mdc-ripple-fg-radius-in {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n\n\@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0.16);\n  }\n}\n\n\@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0.16);\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.mdc-ripple-surface--test-edge-var-bug {\n  --mdc-ripple-surface-test-edge-var: 1px solid #000;\n  visibility: hidden;\n}\n\n.mdc-ripple-surface--test-edge-var-bug::before {\n  border: var(--mdc-ripple-surface-test-edge-var);\n}\n\n.mdc-icon-toggle {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54));\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: transparent;\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 48px;\n  height: 48px;\n  padding: 12px;\n  outline: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  user-select: none;\n  will-change: initial;\n}\n\n.mdc-icon-toggle::before, .mdc-icon-toggle::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n  will-change: transform, opacity;\n}\n\n.mdc-icon-toggle::before {\n  transition: opacity 15ms linear;\n}\n\n.mdc-icon-toggle.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-icon-toggle.mdc-ripple-upgraded--unbounded::after {\n  top: var(--mdc-ripple-top, 0);\n  left: var(--mdc-ripple-left, 0);\n}\n\n.mdc-icon-toggle.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 225ms mdc-ripple-fg-radius-in forwards, 75ms mdc-ripple-fg-opacity-in forwards;\n}\n\n.mdc-icon-toggle.mdc-ripple-upgraded--foreground-deactivation::after {\n  animation: 150ms mdc-ripple-fg-opacity-out;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n\n.mdc-icon-toggle::before, .mdc-icon-toggle::after {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n\n.mdc-icon-toggle.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-icon-toggle.mdc-ripple-upgraded--unbounded::before {\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-icon-toggle.mdc-ripple-upgraded::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n\n.mdc-icon-toggle::before, .mdc-icon-toggle::after {\n  background-color: black;\n}\n\n.mdc-icon-toggle:hover::before {\n  opacity: 0.04;\n}\n\n.mdc-icon-toggle:not(.mdc-ripple-upgraded):focus::before, .mdc-icon-toggle.mdc-ripple-upgraded--background-focused::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n\n.mdc-icon-toggle:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n\n.mdc-icon-toggle:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.16;\n}\n\n.mdc-icon-toggle.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.16;\n}\n\n.mdc-icon-toggle--theme-dark.mdc-icon-toggle::before, .mdc-icon-toggle--theme-dark.mdc-icon-toggle::after,\n.mdc-theme--dark .mdc-icon-toggle::before,\n.mdc-theme--dark .mdc-icon-toggle::after {\n  background-color: white;\n}\n\n.mdc-icon-toggle--theme-dark.mdc-icon-toggle:hover::before,\n.mdc-theme--dark .mdc-icon-toggle:hover::before {\n  opacity: 0.08;\n}\n\n.mdc-icon-toggle--theme-dark.mdc-icon-toggle:not(.mdc-ripple-upgraded):focus::before, .mdc-icon-toggle--theme-dark.mdc-icon-toggle.mdc-ripple-upgraded--background-focused::before,\n.mdc-theme--dark .mdc-icon-toggle:not(.mdc-ripple-upgraded):focus::before,\n.mdc-theme--dark .mdc-icon-toggle.mdc-ripple-upgraded--background-focused::before {\n  transition-duration: 75ms;\n  opacity: 0.24;\n}\n\n.mdc-icon-toggle--theme-dark.mdc-icon-toggle:not(.mdc-ripple-upgraded)::after,\n.mdc-theme--dark .mdc-icon-toggle:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n\n.mdc-icon-toggle--theme-dark.mdc-icon-toggle:not(.mdc-ripple-upgraded):active::after,\n.mdc-theme--dark .mdc-icon-toggle:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.32;\n}\n\n.mdc-icon-toggle--theme-dark.mdc-icon-toggle.mdc-ripple-upgraded,\n.mdc-theme--dark .mdc-icon-toggle.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.32;\n}\n\n.mdc-icon-toggle::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-icon-toggle--theme-dark,\n.mdc-theme--dark .mdc-icon-toggle {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-icon-toggle--primary {\n  /* \@alternate */\n  color: #3f51b5;\n  color: var(--mdc-theme-primary, #3f51b5);\n}\n\n.mdc-icon-toggle--primary::before, .mdc-icon-toggle--primary::after {\n  /* \@alternate */\n  background-color: #3f51b5;\n}\n\n\@supports not (-ms-ime-align: auto) {\n  .mdc-icon-toggle--primary::before, .mdc-icon-toggle--primary::after {\n    background-color: var(--mdc-theme-primary, #3f51b5);\n  }\n}\n\n.mdc-icon-toggle--primary:hover::before {\n  opacity: 0.04;\n}\n\n.mdc-icon-toggle--primary:not(.mdc-ripple-upgraded):focus::before, .mdc-icon-toggle--primary.mdc-ripple-upgraded--background-focused::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n\n.mdc-icon-toggle--primary:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n\n.mdc-icon-toggle--primary:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.16;\n}\n\n.mdc-icon-toggle--primary.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.16;\n}\n\n.mdc-icon-toggle--accent {\n  /* \@alternate */\n  color: #ff4081;\n  color: var(--mdc-theme-secondary, #ff4081);\n}\n\n.mdc-icon-toggle--accent::before, .mdc-icon-toggle--accent::after {\n  /* \@alternate */\n  background-color: #ff4081;\n}\n\n\@supports not (-ms-ime-align: auto) {\n  .mdc-icon-toggle--accent::before, .mdc-icon-toggle--accent::after {\n    background-color: var(--mdc-theme-secondary, #ff4081);\n  }\n}\n\n.mdc-icon-toggle--accent:hover::before {\n  opacity: 0.04;\n}\n\n.mdc-icon-toggle--accent:not(.mdc-ripple-upgraded):focus::before, .mdc-icon-toggle--accent.mdc-ripple-upgraded--background-focused::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n\n.mdc-icon-toggle--accent:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n\n.mdc-icon-toggle--accent:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.16;\n}\n\n.mdc-icon-toggle--accent.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.16;\n}\n\n.mdc-icon-toggle--disabled {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));\n  pointer-events: none;\n}\n\n.mdc-icon-toggle--theme-dark.mdc-icon-toggle--disabled,\n.mdc-theme--dark .mdc-icon-toggle--disabled {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n/** postcss-bem-linter: end */\nmwc-icon-toggle.hydrated{visibility:inherit}","mwc-list","\nmwc-list.hydrated{visibility:inherit}","mwc-list-item","\@keyframes mdc-ripple-fg-radius-in {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n\n\@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0.16);\n  }\n}\n\n\@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0.16);\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.mdc-ripple-surface--test-edge-var-bug {\n  --mdc-ripple-surface-test-edge-var: 1px solid #000;\n  visibility: hidden;\n}\n\n.mdc-ripple-surface--test-edge-var-bug::before {\n  border: var(--mdc-ripple-surface-test-edge-var);\n}\n\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n.mdc-list .mdc-list-divider,\n.mdc-list-group .mdc-list-divider {\n  border-bottom-color: rgba(0, 0, 0, 0.12);\n}\n\n.mdc-list--theme-dark .mdc-list-divider,\n.mdc-theme--dark .mdc-list .mdc-list-divider,\n.mdc-list-group--theme-dark .mdc-list-divider,\n.mdc-theme--dark\n.mdc-list-group .mdc-list-divider {\n  border-bottom-color: rgba(255, 255, 255, 0.2);\n}\n\n.mdc-list {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.75rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n  margin: 0;\n  padding: 8px 16px;\n  line-height: 1.5rem;\n  list-style-type: none;\n}\n\n.mdc-list .mdc-list-item__secondary-text {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54));\n}\n\n.mdc-list .mdc-list-item__start-detail {\n  background-color: transparent;\n}\n\n.mdc-list .mdc-list-item__start-detail {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38));\n}\n\n.mdc-list .mdc-list-item__end-detail {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38));\n}\n\n.mdc-list--theme-dark,\n.mdc-theme--dark .mdc-list {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-list--theme-dark .mdc-list-item__secondary-text,\n.mdc-theme--dark .mdc-list .mdc-list-item__secondary-text {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.7);\n  color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7));\n}\n\n.mdc-list--theme-dark .mdc-list-item__start-detail,\n.mdc-theme--dark .mdc-list .mdc-list-item__start-detail {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-icon-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-list--theme-dark .mdc-list-item__end-detail,\n.mdc-theme--dark .mdc-list .mdc-list-item__end-detail {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-list--dense {\n  padding-top: 4px;\n  padding-bottom: 4px;\n  font-size: .812rem;\n}\n\n.mdc-list-item {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  height: 48px;\n}\n\n.mdc-list-item--selected, .mdc-list-item--activated {\n  /* \@alternate */\n  color: #3f51b5;\n  color: var(--mdc-theme-primary, #3f51b5);\n}\n\n.mdc-list-item--selected .mdc-list-item__start-detail, .mdc-list-item--activated .mdc-list-item__start-detail {\n  /* \@alternate */\n  color: #3f51b5;\n  color: var(--mdc-theme-primary, #3f51b5);\n}\n\n.mdc-list-item__start-detail {\n  width: 24px;\n  height: 24px;\n  margin-left: 0;\n  margin-right: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n[dir=\"rtl\"] .mdc-list-item .mdc-list-item__start-detail,\n.mdc-list-item[dir=\"rtl\"] .mdc-list-item__start-detail {\n  margin-left: 32px;\n  margin-right: 0;\n}\n\n.mdc-list-item__end-detail {\n  width: 24px;\n  height: 24px;\n  margin-left: auto;\n  margin-right: 0;\n}\n\n[dir=\"rtl\"] .mdc-list-item .mdc-list-item__end-detail,\n.mdc-list-item[dir=\"rtl\"] .mdc-list-item__end-detail {\n  margin-left: 0;\n  margin-right: auto;\n}\n\n.mdc-list-item__text {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.mdc-list-item__secondary-text {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.25rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-list--dense .mdc-list-item__secondary-text {\n  font-size: inherit;\n}\n\n.mdc-list--dense .mdc-list-item {\n  height: 40px;\n}\n\n.mdc-list--dense .mdc-list-item__start-detail {\n  width: 20px;\n  height: 20px;\n  margin-left: 0;\n  margin-right: 36px;\n}\n\n[dir=\"rtl\"] .mdc-list-item .mdc-list--dense .mdc-list-item__start-detail,\n.mdc-list-item[dir=\"rtl\"] .mdc-list--dense .mdc-list-item__start-detail {\n  margin-left: 36px;\n  margin-right: 0;\n}\n\n.mdc-list--dense .mdc-list-item__end-detail {\n  width: 20px;\n  height: 20px;\n}\n\n.mdc-list--avatar-list .mdc-list-item {\n  height: 56px;\n}\n\n.mdc-list--avatar-list .mdc-list-item__start-detail {\n  width: 40px;\n  height: 40px;\n  margin-left: 0;\n  margin-right: 16px;\n  border-radius: 50%;\n}\n\n[dir=\"rtl\"] .mdc-list-item .mdc-list--avatar-list .mdc-list-item__start-detail,\n.mdc-list-item[dir=\"rtl\"] .mdc-list--avatar-list .mdc-list-item__start-detail {\n  margin-left: 16px;\n  margin-right: 0;\n}\n\n.mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list__item {\n  height: 48px;\n}\n\n.mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list__item__start-detail {\n  width: 36px;\n  height: 36px;\n  margin-left: 0;\n  margin-right: 20px;\n}\n\n[dir=\"rtl\"] .mdc-list-item .mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list__item__start-detail,\n.mdc-list-item[dir=\"rtl\"] .mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list__item__start-detail {\n  margin-left: 20px;\n  margin-right: 0;\n}\n\n.mdc-list--two-line .mdc-list-item {\n  height: 72px;\n}\n\n.mdc-list--two-line.mdc-list--dense .mdc-list-item {\n  height: 60px;\n}\n\na.mdc-list-item {\n  color: inherit;\n  text-decoration: none;\n}\n\n.mdc-list-item.mdc-ripple-upgraded {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: transparent;\n  left: -16px;\n  right: initial;\n  position: relative;\n  width: 100%;\n  padding: 0 16px;\n  overflow: hidden;\n}\n\n.mdc-list-item.mdc-ripple-upgraded::before, .mdc-list-item.mdc-ripple-upgraded::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n  will-change: transform, opacity;\n}\n\n.mdc-list-item.mdc-ripple-upgraded::before {\n  transition: opacity 15ms linear;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded::after {\n  top: var(--mdc-ripple-top, 0);\n  left: var(--mdc-ripple-left, 0);\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 225ms mdc-ripple-fg-radius-in forwards, 75ms mdc-ripple-fg-opacity-in forwards;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-deactivation::after {\n  animation: 150ms mdc-ripple-fg-opacity-out;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n\n.mdc-list-item.mdc-ripple-upgraded::before, .mdc-list-item.mdc-ripple-upgraded::after {\n  background-color: rgba(0, 0, 0, 0.06);\n  opacity: 0;\n}\n\n.mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):hover::before, .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):focus::before, .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 85ms;\n  opacity: .6;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::after {\n  --mdc-ripple-fg-opacity: 1;\n}\n\n.mdc-list-item.mdc-ripple-upgraded::before, .mdc-list-item.mdc-ripple-upgraded::after {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded::before {\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n\n[dir=\"rtl\"] .mdc-list-item.mdc-ripple-upgraded, .mdc-list-item.mdc-ripple-upgraded[dir=\"rtl\"] {\n  left: initial;\n  right: -16px;\n}\n\n.mdc-list-item.mdc-ripple-upgraded:focus {\n  outline: none;\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded::before, .mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded::after,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded::before,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded::after {\n  background-color: rgba(255, 255, 255, 0.12);\n  opacity: 0;\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):hover::before, .mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):focus::before, .mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):active::after,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):hover::before,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):focus::before,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 85ms;\n  opacity: .6;\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-focused::before,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-active-fill::before,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::after,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::after {\n  --mdc-ripple-fg-opacity: 1;\n}\n\n.mdc-list-divider {\n  height: 0;\n  margin: 0;\n  border: none;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n}\n\n.mdc-list-divider--inset {\n  margin-left: 56px;\n  margin-right: 0;\n  width: calc(100% - 56px);\n}\n\n[dir=\"rtl\"] .mdc-list-group .mdc-list-divider--inset,\n.mdc-list-group[dir=\"rtl\"] .mdc-list-divider--inset {\n  margin-left: 0;\n  margin-right: 56px;\n}\n\n.mdc-list-group {\n  padding: 0 16px;\n}\n\n.mdc-list-group .mdc-list-group__subheader {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n}\n\n.mdc-list-group--theme-dark .mdc-list-group__subheader,\n.mdc-theme--dark .mdc-list-group .mdc-list-group__subheader {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-list-group__subheader {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  line-height: 1.5rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  margin: 0.75rem 0;\n}\n\n.mdc-list-group .mdc-list {\n  padding: 0;\n}\n\n.mdc-ripple-surface {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: transparent;\n  position: relative;\n  outline: none;\n  overflow: hidden;\n}\n\n.mdc-ripple-surface::before, .mdc-ripple-surface::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n  will-change: transform, opacity;\n}\n\n.mdc-ripple-surface::before {\n  transition: opacity 15ms linear;\n}\n\n.mdc-ripple-surface.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after {\n  top: var(--mdc-ripple-top, 0);\n  left: var(--mdc-ripple-left, 0);\n}\n\n.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 225ms mdc-ripple-fg-radius-in forwards, 75ms mdc-ripple-fg-opacity-in forwards;\n}\n\n.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after {\n  animation: 150ms mdc-ripple-fg-opacity-out;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n\n.mdc-ripple-surface::before, .mdc-ripple-surface::after {\n  background-color: black;\n}\n\n.mdc-ripple-surface:hover::before {\n  opacity: 0.04;\n}\n\n.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before, .mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n\n.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n\n.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.16;\n}\n\n.mdc-ripple-surface.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.16;\n}\n\n.mdc-ripple-surface::before, .mdc-ripple-surface::after {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n\n.mdc-ripple-surface.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::before {\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-ripple-surface.mdc-ripple-upgraded::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n\n.mdc-ripple-surface[data-mdc-ripple-is-unbounded] {\n  overflow: visible;\n}\n\n.mdc-ripple-surface--primary::before, .mdc-ripple-surface--primary::after {\n  /* \@alternate */\n  background-color: #3f51b5;\n}\n\n\@supports not (-ms-ime-align: auto) {\n  .mdc-ripple-surface--primary::before, .mdc-ripple-surface--primary::after {\n    background-color: var(--mdc-theme-primary, #3f51b5);\n  }\n}\n\n.mdc-ripple-surface--primary:hover::before {\n  opacity: 0.04;\n}\n\n.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before, .mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n\n.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n\n.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.16;\n}\n\n.mdc-ripple-surface--primary.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.16;\n}\n\n.mdc-ripple-surface--accent::before, .mdc-ripple-surface--accent::after {\n  /* \@alternate */\n  background-color: #ff4081;\n}\n\n\@supports not (-ms-ime-align: auto) {\n  .mdc-ripple-surface--accent::before, .mdc-ripple-surface--accent::after {\n    background-color: var(--mdc-theme-secondary, #ff4081);\n  }\n}\n\n.mdc-ripple-surface--accent:hover::before {\n  opacity: 0.04;\n}\n\n.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before, .mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n\n.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n\n.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.16;\n}\n\n.mdc-ripple-surface--accent.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.16;\n}\n\n.mwc-list-item:hover {\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.08);\n}\n\n.mdc-list-item.mdc-ripple-upgraded {\n  left: auto !important;\n  right: auto !important;\n  width: auto !important;\n}\n\n.mdc-list-item {\n  min-height: 48px;\n  height: auto;\n}\nmwc-list-item.hydrated{visibility:inherit}","mwc-menu","\@keyframes mdc-ripple-fg-radius-in {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n\n\@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0.16);\n  }\n}\n\n\@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0.16);\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.mdc-ripple-surface--test-edge-var-bug {\n  --mdc-ripple-surface-test-edge-var: 1px solid #000;\n  visibility: hidden;\n}\n\n.mdc-ripple-surface--test-edge-var-bug::before {\n  border: var(--mdc-ripple-surface-test-edge-var);\n}\n\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n.mdc-list .mdc-list-divider,\n.mdc-list-group .mdc-list-divider {\n  border-bottom-color: rgba(0, 0, 0, 0.12);\n}\n\n.mdc-list--theme-dark .mdc-list-divider,\n.mdc-theme--dark .mdc-list .mdc-list-divider,\n.mdc-list-group--theme-dark .mdc-list-divider,\n.mdc-theme--dark\n.mdc-list-group .mdc-list-divider {\n  border-bottom-color: rgba(255, 255, 255, 0.2);\n}\n\n.mdc-list {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.75rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n  margin: 0;\n  padding: 8px 16px;\n  line-height: 1.5rem;\n  list-style-type: none;\n}\n\n.mdc-list .mdc-list-item__secondary-text {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54));\n}\n\n.mdc-list .mdc-list-item__start-detail {\n  background-color: transparent;\n}\n\n.mdc-list .mdc-list-item__start-detail {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38));\n}\n\n.mdc-list .mdc-list-item__end-detail {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38));\n}\n\n.mdc-list--theme-dark,\n.mdc-theme--dark .mdc-list {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-list--theme-dark .mdc-list-item__secondary-text,\n.mdc-theme--dark .mdc-list .mdc-list-item__secondary-text {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.7);\n  color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7));\n}\n\n.mdc-list--theme-dark .mdc-list-item__start-detail,\n.mdc-theme--dark .mdc-list .mdc-list-item__start-detail {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-icon-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-list--theme-dark .mdc-list-item__end-detail,\n.mdc-theme--dark .mdc-list .mdc-list-item__end-detail {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-list--dense {\n  padding-top: 4px;\n  padding-bottom: 4px;\n  font-size: .812rem;\n}\n\n.mdc-list-item {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  height: 48px;\n}\n\n.mdc-list-item--selected, .mdc-list-item--activated {\n  /* \@alternate */\n  color: #3f51b5;\n  color: var(--mdc-theme-primary, #3f51b5);\n}\n\n.mdc-list-item--selected .mdc-list-item__start-detail, .mdc-list-item--activated .mdc-list-item__start-detail {\n  /* \@alternate */\n  color: #3f51b5;\n  color: var(--mdc-theme-primary, #3f51b5);\n}\n\n.mdc-list-item__start-detail {\n  width: 24px;\n  height: 24px;\n  margin-left: 0;\n  margin-right: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n[dir=\"rtl\"] .mdc-list-item .mdc-list-item__start-detail,\n.mdc-list-item[dir=\"rtl\"] .mdc-list-item__start-detail {\n  margin-left: 32px;\n  margin-right: 0;\n}\n\n.mdc-list-item__end-detail {\n  width: 24px;\n  height: 24px;\n  margin-left: auto;\n  margin-right: 0;\n}\n\n[dir=\"rtl\"] .mdc-list-item .mdc-list-item__end-detail,\n.mdc-list-item[dir=\"rtl\"] .mdc-list-item__end-detail {\n  margin-left: 0;\n  margin-right: auto;\n}\n\n.mdc-list-item__text {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.mdc-list-item__secondary-text {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.25rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-list--dense .mdc-list-item__secondary-text {\n  font-size: inherit;\n}\n\n.mdc-list--dense .mdc-list-item {\n  height: 40px;\n}\n\n.mdc-list--dense .mdc-list-item__start-detail {\n  width: 20px;\n  height: 20px;\n  margin-left: 0;\n  margin-right: 36px;\n}\n\n[dir=\"rtl\"] .mdc-list-item .mdc-list--dense .mdc-list-item__start-detail,\n.mdc-list-item[dir=\"rtl\"] .mdc-list--dense .mdc-list-item__start-detail {\n  margin-left: 36px;\n  margin-right: 0;\n}\n\n.mdc-list--dense .mdc-list-item__end-detail {\n  width: 20px;\n  height: 20px;\n}\n\n.mdc-list--avatar-list .mdc-list-item {\n  height: 56px;\n}\n\n.mdc-list--avatar-list .mdc-list-item__start-detail {\n  width: 40px;\n  height: 40px;\n  margin-left: 0;\n  margin-right: 16px;\n  border-radius: 50%;\n}\n\n[dir=\"rtl\"] .mdc-list-item .mdc-list--avatar-list .mdc-list-item__start-detail,\n.mdc-list-item[dir=\"rtl\"] .mdc-list--avatar-list .mdc-list-item__start-detail {\n  margin-left: 16px;\n  margin-right: 0;\n}\n\n.mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list__item {\n  height: 48px;\n}\n\n.mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list__item__start-detail {\n  width: 36px;\n  height: 36px;\n  margin-left: 0;\n  margin-right: 20px;\n}\n\n[dir=\"rtl\"] .mdc-list-item .mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list__item__start-detail,\n.mdc-list-item[dir=\"rtl\"] .mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list__item__start-detail {\n  margin-left: 20px;\n  margin-right: 0;\n}\n\n.mdc-list--two-line .mdc-list-item {\n  height: 72px;\n}\n\n.mdc-list--two-line.mdc-list--dense .mdc-list-item {\n  height: 60px;\n}\n\na.mdc-list-item {\n  color: inherit;\n  text-decoration: none;\n}\n\n.mdc-list-item.mdc-ripple-upgraded {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: transparent;\n  left: -16px;\n  right: initial;\n  position: relative;\n  width: 100%;\n  padding: 0 16px;\n  overflow: hidden;\n}\n\n.mdc-list-item.mdc-ripple-upgraded::before, .mdc-list-item.mdc-ripple-upgraded::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n  will-change: transform, opacity;\n}\n\n.mdc-list-item.mdc-ripple-upgraded::before {\n  transition: opacity 15ms linear;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded::after {\n  top: var(--mdc-ripple-top, 0);\n  left: var(--mdc-ripple-left, 0);\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 225ms mdc-ripple-fg-radius-in forwards, 75ms mdc-ripple-fg-opacity-in forwards;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-deactivation::after {\n  animation: 150ms mdc-ripple-fg-opacity-out;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n\n.mdc-list-item.mdc-ripple-upgraded::before, .mdc-list-item.mdc-ripple-upgraded::after {\n  background-color: rgba(0, 0, 0, 0.06);\n  opacity: 0;\n}\n\n.mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):hover::before, .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):focus::before, .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 85ms;\n  opacity: .6;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::after {\n  --mdc-ripple-fg-opacity: 1;\n}\n\n.mdc-list-item.mdc-ripple-upgraded::before, .mdc-list-item.mdc-ripple-upgraded::after {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded::before {\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n\n[dir=\"rtl\"] .mdc-list-item.mdc-ripple-upgraded, .mdc-list-item.mdc-ripple-upgraded[dir=\"rtl\"] {\n  left: initial;\n  right: -16px;\n}\n\n.mdc-list-item.mdc-ripple-upgraded:focus {\n  outline: none;\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded::before, .mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded::after,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded::before,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded::after {\n  background-color: rgba(255, 255, 255, 0.12);\n  opacity: 0;\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):hover::before, .mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):focus::before, .mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):active::after,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):hover::before,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):focus::before,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 85ms;\n  opacity: .6;\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-focused::before,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-active-fill::before,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::after,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::after {\n  --mdc-ripple-fg-opacity: 1;\n}\n\n.mdc-list-divider {\n  height: 0;\n  margin: 0;\n  border: none;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n}\n\n.mdc-list-divider--inset {\n  margin-left: 56px;\n  margin-right: 0;\n  width: calc(100% - 56px);\n}\n\n[dir=\"rtl\"] .mdc-list-group .mdc-list-divider--inset,\n.mdc-list-group[dir=\"rtl\"] .mdc-list-divider--inset {\n  margin-left: 0;\n  margin-right: 56px;\n}\n\n.mdc-list-group {\n  padding: 0 16px;\n}\n\n.mdc-list-group .mdc-list-group__subheader {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n}\n\n.mdc-list-group--theme-dark .mdc-list-group__subheader,\n.mdc-theme--dark .mdc-list-group .mdc-list-group__subheader {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-list-group__subheader {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  line-height: 1.5rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  margin: 0.75rem 0;\n}\n\n.mdc-list-group .mdc-list {\n  padding: 0;\n}\n\n/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct CSS rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n * If $color has an alpha channel, it will be ignored and overridden. To increase the opacity of the shadow, use\n * $opacity-boost.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n.mdc-simple-menu {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  display: none;\n  position: absolute;\n  box-sizing: border-box;\n  min-width: 170px;\n  max-width: calc(100vw - 32px);\n  max-height: calc(100vh - 32px);\n  margin: 0;\n  padding: 0;\n  transform: scale(0);\n  transform-origin: top left;\n  border-radius: 2px;\n  background-color: white;\n  opacity: 0;\n  white-space: nowrap;\n  overflow-x: hidden;\n  overflow-y: auto;\n  will-change: transform, opacity;\n  z-index: 4;\n}\n\n.mdc-simple-menu--theme-dark,\n.mdc-theme--dark .mdc-simple-menu {\n  background-color: #424242;\n}\n\n.mdc-simple-menu:focus {\n  outline: none;\n}\n\n.mdc-simple-menu--open {\n  display: inline-block;\n  transform: scale(1);\n  opacity: 1;\n}\n\n.mdc-simple-menu--animating {\n  display: inline-block;\n  transition: opacity 0.2s cubic-bezier(0, 0, 0.2, 1);\n  overflow-y: hidden;\n}\n\n.mdc-simple-menu__items {\n  box-sizing: border-box;\n  overflow-x: hidden;\n  overflow-y: auto;\n  will-change: transform;\n}\n\n.mdc-simple-menu__items > * {\n  opacity: 0;\n}\n\n.mdc-simple-menu__items > .mdc-list-item {\n  cursor: pointer;\n}\n\n.mdc-simple-menu--animating .mdc-simple-menu__items {\n  overflow-y: hidden;\n}\n\n.mdc-simple-menu--animating .mdc-simple-menu__items > * {\n  transition-duration: 0.3s;\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-simple-menu--open .mdc-simple-menu__items > * {\n  opacity: 1;\n  will-change: opacity;\n}\n\n[dir=\"rtl\"] .mdc-simple-menu {\n  transform-origin: top right;\n}\n\n.mdc-simple-menu--open-from-top-left {\n  transform-origin: top left !important;\n}\n\n.mdc-simple-menu--open-from-top-right {\n  transform-origin: top right !important;\n}\n\n.mdc-simple-menu--open-from-bottom-left {\n  transform-origin: bottom left !important;\n}\n\n.mdc-simple-menu--open-from-bottom-right {\n  transform-origin: bottom right !important;\n}\n\n.mdc-simple-menu .mdc-list-group,\n.mdc-simple-menu .mdc-list {\n  padding: 8px 0;\n}\n\n.mdc-simple-menu .mdc-list-item {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.75rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  position: relative;\n  padding: 0 16px;\n  outline: none;\n  color: inherit;\n  text-decoration: none;\n  user-select: none;\n}\n\n.mdc-simple-menu--theme-dark.mdc-simple-menu .mdc-list-item,\n.mdc-theme--dark .mdc-simple-menu .mdc-list-item {\n  color: white;\n}\n\n.mdc-simple-menu--theme-dark.mdc-simple-menu .mdc-list-divider,\n.mdc-theme--dark .mdc-simple-menu .mdc-list-divider {\n  border-color: rgba(255, 255, 255, 0.12);\n}\n\n.mdc-simple-menu .mdc-list-item__start-detail {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mdc-simple-menu--theme-dark.mdc-simple-menu .mdc-list-item__start-detail,\n.mdc-theme--dark .mdc-simple-menu .mdc-list-item__start-detail {\n  color: rgba(255, 255, 255, 0.54);\n}\n\n.mdc-simple-menu--selected.mdc-list-item,\n.mdc-simple-menu--selected.mdc-list-item .mdc-list-item__start-detail {\n  /* \@alternate */\n  color: #3f51b5;\n  color: var(--mdc-theme-primary, #3f51b5);\n}\n\n.mdc-simple-menu .mdc-list-item::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: opacity 120ms cubic-bezier(0, 0, 0.2, 1);\n  border-radius: inherit;\n  background: currentColor;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-simple-menu .mdc-list-item:focus::before {\n  opacity: .12;\n}\n\n.mdc-simple-menu .mdc-list-item:active::before {\n  opacity: .18;\n}\n\n.mdc-simple-menu .mdc-list-item[aria-disabled=\"true\"] {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));\n  cursor: default;\n}\n\n.mdc-select--theme-dark .mdc-simple-menu .mdc-list-item[aria-disabled=\"true\"],\n.mdc-theme--dark .mdc-simple-menu .mdc-list-item[aria-disabled=\"true\"] {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-simple-menu .mdc-list-item[aria-disabled=\"true\"]:focus::before, .mdc-simple-menu .mdc-list-item[aria-disabled=\"true\"]:active::before {\n  opacity: 0;\n}\n\n.mdc-menu-anchor {\n  position: relative;\n  overflow: visible;\n}\n\n.menuPos {\n  left: 0;\n  top: 0;\n}\nmwc-menu.hydrated{visibility:inherit}","mwc-menu-item","\@keyframes mdc-ripple-fg-radius-in {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n\n\@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0.16);\n  }\n}\n\n\@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0.16);\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.mdc-ripple-surface--test-edge-var-bug {\n  --mdc-ripple-surface-test-edge-var: 1px solid #000;\n  visibility: hidden;\n}\n\n.mdc-ripple-surface--test-edge-var-bug::before {\n  border: var(--mdc-ripple-surface-test-edge-var);\n}\n\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n.mdc-list .mdc-list-divider,\n.mdc-list-group .mdc-list-divider {\n  border-bottom-color: rgba(0, 0, 0, 0.12);\n}\n\n.mdc-list--theme-dark .mdc-list-divider,\n.mdc-theme--dark .mdc-list .mdc-list-divider,\n.mdc-list-group--theme-dark .mdc-list-divider,\n.mdc-theme--dark\n.mdc-list-group .mdc-list-divider {\n  border-bottom-color: rgba(255, 255, 255, 0.2);\n}\n\n.mdc-list {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.75rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n  margin: 0;\n  padding: 8px 16px;\n  line-height: 1.5rem;\n  list-style-type: none;\n}\n\n.mdc-list .mdc-list-item__secondary-text {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54));\n}\n\n.mdc-list .mdc-list-item__start-detail {\n  background-color: transparent;\n}\n\n.mdc-list .mdc-list-item__start-detail {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38));\n}\n\n.mdc-list .mdc-list-item__end-detail {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38));\n}\n\n.mdc-list--theme-dark,\n.mdc-theme--dark .mdc-list {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-list--theme-dark .mdc-list-item__secondary-text,\n.mdc-theme--dark .mdc-list .mdc-list-item__secondary-text {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.7);\n  color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7));\n}\n\n.mdc-list--theme-dark .mdc-list-item__start-detail,\n.mdc-theme--dark .mdc-list .mdc-list-item__start-detail {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-icon-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-list--theme-dark .mdc-list-item__end-detail,\n.mdc-theme--dark .mdc-list .mdc-list-item__end-detail {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-list--dense {\n  padding-top: 4px;\n  padding-bottom: 4px;\n  font-size: .812rem;\n}\n\n.mdc-list-item {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  height: 48px;\n}\n\n.mdc-list-item--selected, .mdc-list-item--activated {\n  /* \@alternate */\n  color: #3f51b5;\n  color: var(--mdc-theme-primary, #3f51b5);\n}\n\n.mdc-list-item--selected .mdc-list-item__start-detail, .mdc-list-item--activated .mdc-list-item__start-detail {\n  /* \@alternate */\n  color: #3f51b5;\n  color: var(--mdc-theme-primary, #3f51b5);\n}\n\n.mdc-list-item__start-detail {\n  width: 24px;\n  height: 24px;\n  margin-left: 0;\n  margin-right: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n[dir=\"rtl\"] .mdc-list-item .mdc-list-item__start-detail,\n.mdc-list-item[dir=\"rtl\"] .mdc-list-item__start-detail {\n  margin-left: 32px;\n  margin-right: 0;\n}\n\n.mdc-list-item__end-detail {\n  width: 24px;\n  height: 24px;\n  margin-left: auto;\n  margin-right: 0;\n}\n\n[dir=\"rtl\"] .mdc-list-item .mdc-list-item__end-detail,\n.mdc-list-item[dir=\"rtl\"] .mdc-list-item__end-detail {\n  margin-left: 0;\n  margin-right: auto;\n}\n\n.mdc-list-item__text {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.mdc-list-item__secondary-text {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.25rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-list--dense .mdc-list-item__secondary-text {\n  font-size: inherit;\n}\n\n.mdc-list--dense .mdc-list-item {\n  height: 40px;\n}\n\n.mdc-list--dense .mdc-list-item__start-detail {\n  width: 20px;\n  height: 20px;\n  margin-left: 0;\n  margin-right: 36px;\n}\n\n[dir=\"rtl\"] .mdc-list-item .mdc-list--dense .mdc-list-item__start-detail,\n.mdc-list-item[dir=\"rtl\"] .mdc-list--dense .mdc-list-item__start-detail {\n  margin-left: 36px;\n  margin-right: 0;\n}\n\n.mdc-list--dense .mdc-list-item__end-detail {\n  width: 20px;\n  height: 20px;\n}\n\n.mdc-list--avatar-list .mdc-list-item {\n  height: 56px;\n}\n\n.mdc-list--avatar-list .mdc-list-item__start-detail {\n  width: 40px;\n  height: 40px;\n  margin-left: 0;\n  margin-right: 16px;\n  border-radius: 50%;\n}\n\n[dir=\"rtl\"] .mdc-list-item .mdc-list--avatar-list .mdc-list-item__start-detail,\n.mdc-list-item[dir=\"rtl\"] .mdc-list--avatar-list .mdc-list-item__start-detail {\n  margin-left: 16px;\n  margin-right: 0;\n}\n\n.mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list__item {\n  height: 48px;\n}\n\n.mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list__item__start-detail {\n  width: 36px;\n  height: 36px;\n  margin-left: 0;\n  margin-right: 20px;\n}\n\n[dir=\"rtl\"] .mdc-list-item .mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list__item__start-detail,\n.mdc-list-item[dir=\"rtl\"] .mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list__item__start-detail {\n  margin-left: 20px;\n  margin-right: 0;\n}\n\n.mdc-list--two-line .mdc-list-item {\n  height: 72px;\n}\n\n.mdc-list--two-line.mdc-list--dense .mdc-list-item {\n  height: 60px;\n}\n\na.mdc-list-item {\n  color: inherit;\n  text-decoration: none;\n}\n\n.mdc-list-item.mdc-ripple-upgraded {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: transparent;\n  left: -16px;\n  right: initial;\n  position: relative;\n  width: 100%;\n  padding: 0 16px;\n  overflow: hidden;\n}\n\n.mdc-list-item.mdc-ripple-upgraded::before, .mdc-list-item.mdc-ripple-upgraded::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n  will-change: transform, opacity;\n}\n\n.mdc-list-item.mdc-ripple-upgraded::before {\n  transition: opacity 15ms linear;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded::after {\n  top: var(--mdc-ripple-top, 0);\n  left: var(--mdc-ripple-left, 0);\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 225ms mdc-ripple-fg-radius-in forwards, 75ms mdc-ripple-fg-opacity-in forwards;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-deactivation::after {\n  animation: 150ms mdc-ripple-fg-opacity-out;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n\n.mdc-list-item.mdc-ripple-upgraded::before, .mdc-list-item.mdc-ripple-upgraded::after {\n  background-color: rgba(0, 0, 0, 0.06);\n  opacity: 0;\n}\n\n.mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):hover::before, .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):focus::before, .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 85ms;\n  opacity: .6;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::after {\n  --mdc-ripple-fg-opacity: 1;\n}\n\n.mdc-list-item.mdc-ripple-upgraded::before, .mdc-list-item.mdc-ripple-upgraded::after {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded::before {\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n\n[dir=\"rtl\"] .mdc-list-item.mdc-ripple-upgraded, .mdc-list-item.mdc-ripple-upgraded[dir=\"rtl\"] {\n  left: initial;\n  right: -16px;\n}\n\n.mdc-list-item.mdc-ripple-upgraded:focus {\n  outline: none;\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded::before, .mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded::after,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded::before,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded::after {\n  background-color: rgba(255, 255, 255, 0.12);\n  opacity: 0;\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):hover::before, .mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):focus::before, .mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):active::after,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):hover::before,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):focus::before,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 85ms;\n  opacity: .6;\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-focused::before,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-active-fill::before,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::after,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::after {\n  --mdc-ripple-fg-opacity: 1;\n}\n\n.mdc-list-divider {\n  height: 0;\n  margin: 0;\n  border: none;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n}\n\n.mdc-list-divider--inset {\n  margin-left: 56px;\n  margin-right: 0;\n  width: calc(100% - 56px);\n}\n\n[dir=\"rtl\"] .mdc-list-group .mdc-list-divider--inset,\n.mdc-list-group[dir=\"rtl\"] .mdc-list-divider--inset {\n  margin-left: 0;\n  margin-right: 56px;\n}\n\n.mdc-list-group {\n  padding: 0 16px;\n}\n\n.mdc-list-group .mdc-list-group__subheader {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n}\n\n.mdc-list-group--theme-dark .mdc-list-group__subheader,\n.mdc-theme--dark .mdc-list-group .mdc-list-group__subheader {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-list-group__subheader {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  line-height: 1.5rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  margin: 0.75rem 0;\n}\n\n.mdc-list-group .mdc-list {\n  padding: 0;\n}\nmwc-menu-item.hydrated{visibility:inherit}","mwc-paper","\nmwc-paper.hydrated{visibility:inherit}","mwc-progress","\@keyframes primary-indeterminate-translate {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n    transform: translateX(0);\n  }\n  59.15% {\n    animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n    transform: translateX(83.67142%);\n  }\n  100% {\n    transform: translateX(200.61106%);\n  }\n}\n\n\@keyframes primary-indeterminate-scale {\n  0% {\n    transform: scaleX(0.08);\n  }\n  36.65% {\n    animation-timing-function: cubic-bezier(0.33473, 0.12482, 0.78584, 1);\n    transform: scaleX(0.08);\n  }\n  69.15% {\n    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);\n    transform: scaleX(0.66148);\n  }\n  100% {\n    transform: scaleX(0.08);\n  }\n}\n\n\@keyframes secondary-indeterminate-translate {\n  0% {\n    animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40969);\n    transform: translateX(0);\n  }\n  25% {\n    animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73371);\n    transform: translateX(37.65191%);\n  }\n  48.35% {\n    animation-timing-function: cubic-bezier(0.4, 0.62704, 0.6, 0.90203);\n    transform: translateX(84.38617%);\n  }\n  100% {\n    transform: translateX(160.27778%);\n  }\n}\n\n\@keyframes secondary-indeterminate-scale {\n  0% {\n    animation-timing-function: cubic-bezier(0.20503, 0.05705, 0.57661, 0.45397);\n    transform: scaleX(0.08);\n  }\n  19.15% {\n    animation-timing-function: cubic-bezier(0.15231, 0.19643, 0.64837, 1.00432);\n    transform: scaleX(0.4571);\n  }\n  44.15% {\n    animation-timing-function: cubic-bezier(0.25776, -0.00316, 0.21176, 1.38179);\n    transform: scaleX(0.72796);\n  }\n  100% {\n    transform: scaleX(0.08);\n  }\n}\n\n\@keyframes buffering {\n  to {\n    transform: translateX(-10px);\n  }\n}\n\n\@keyframes primary-indeterminate-translate-reverse {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n    transform: translateX(0);\n  }\n  59.15% {\n    animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n    transform: translateX(-83.67142%);\n  }\n  100% {\n    transform: translateX(-200.61106%);\n  }\n}\n\n\@keyframes secondary-indeterminate-translate-reverse {\n  0% {\n    animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40969);\n    transform: translateX(0);\n  }\n  25% {\n    animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73371);\n    transform: translateX(-37.65191%);\n  }\n  48.35% {\n    animation-timing-function: cubic-bezier(0.4, 0.62704, 0.6, 0.90203);\n    transform: translateX(-84.38617%);\n  }\n  100% {\n    transform: translateX(-160.27778%);\n  }\n}\n\n\@keyframes buffering-reverse {\n  to {\n    transform: translateX(10px);\n  }\n}\n\n.mdc-linear-progress {\n  position: relative;\n  width: 100%;\n  height: 4px;\n  transform: translateZ(0);\n  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  overflow: hidden;\n}\n\n.mdc-linear-progress .mdc-linear-progress__bar-inner {\n  /* \@alternate */\n  background-color: #3f51b5;\n  background-color: var(--mdc-theme-primary, #3f51b5);\n}\n\n.mdc-linear-progress .mdc-linear-progress__buffering-dots {\n  background-image: url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E\");\n}\n\n.mdc-linear-progress .mdc-linear-progress__buffer {\n  background-color: #e6e6e6;\n}\n\n.mdc-linear-progress__bar {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  animation: none;\n  transform-origin: top left;\n  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n\n.mdc-linear-progress__bar-inner {\n  display: inline-block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  animation: none;\n}\n\n.mdc-linear-progress__buffering-dots {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  animation: buffering 250ms infinite linear;\n  background-repeat: repeat-x;\n  background-size: 10px 4px;\n}\n\n.mdc-linear-progress__buffer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform-origin: top left;\n  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n\n.mdc-linear-progress__primary-bar {\n  transform: scaleX(0);\n}\n\n.mdc-linear-progress__secondary-bar {\n  visibility: hidden;\n}\n\n.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {\n  transition: none;\n}\n\n.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {\n  left: -145.166611%;\n  animation: primary-indeterminate-translate 2s infinite linear;\n}\n\n.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {\n  animation: primary-indeterminate-scale 2s infinite linear;\n}\n\n.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {\n  left: -54.888891%;\n  animation: secondary-indeterminate-translate 2s infinite linear;\n  visibility: visible;\n}\n\n.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {\n  animation: secondary-indeterminate-scale 2s infinite linear;\n}\n\n.mdc-linear-progress--reversed .mdc-linear-progress__bar,\n.mdc-linear-progress--reversed .mdc-linear-progress__buffer {\n  right: 0;\n  transform-origin: center right;\n}\n\n.mdc-linear-progress--reversed .mdc-linear-progress__primary-bar {\n  animation-name: primary-indeterminate-translate-reverse;\n}\n\n.mdc-linear-progress--reversed .mdc-linear-progress__secondary-bar {\n  animation-name: secondary-indeterminate-translate-reverse;\n}\n\n.mdc-linear-progress--reversed .mdc-linear-progress__buffering-dots {\n  animation: buffering-reverse 250ms infinite linear;\n}\n\n.mdc-linear-progress--closed {\n  opacity: 0;\n}\n\n.mdc-linear-progress--indeterminate.mdc-linear-progress--reversed .mdc-linear-progress__primary-bar {\n  right: -145.166611%;\n  left: auto;\n}\n\n.mdc-linear-progress--indeterminate.mdc-linear-progress--reversed .mdc-linear-progress__secondary-bar {\n  right: -54.888891%;\n  left: auto;\n}\nmwc-progress.hydrated{visibility:inherit}","mwc-radio","\@keyframes mdc-ripple-fg-radius-in {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n\n\@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0.16);\n  }\n}\n\n\@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0.16);\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.mdc-ripple-surface--test-edge-var-bug {\n  --mdc-ripple-surface-test-edge-var: 1px solid #000;\n  visibility: hidden;\n}\n\n.mdc-ripple-surface--test-edge-var-bug::before {\n  border: var(--mdc-ripple-surface-test-edge-var);\n}\n\n.mdc-radio {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: transparent;\n  display: inline-block;\n  position: relative;\n  flex: 0 0 auto;\n  box-sizing: border-box;\n  width: 40px;\n  height: 40px;\n  padding: 10px;\n  cursor: pointer;\n  will-change: opacity, transform, border-color, background-color, color;\n}\n\n.mdc-radio .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background .mdc-radio__outer-circle {\n  /* \@alternate */\n  border-color: rgba(0, 0, 0, 0.54);\n  border-color: var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54));\n}\n\n.mdc-radio--theme-dark .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background .mdc-radio__outer-circle,\n.mdc-theme--dark .mdc-radio .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background .mdc-radio__outer-circle {\n  /* \@alternate */\n  border-color: rgba(255, 255, 255, 0.7);\n  border-color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7));\n}\n\n.mdc-radio .mdc-radio__native-control:enabled:checked + .mdc-radio__background .mdc-radio__outer-circle {\n  /* \@alternate */\n  border-color: #ff4081;\n  border-color: var(--mdc-theme-secondary, #ff4081);\n}\n\n.mdc-radio .mdc-radio__native-control:enabled + .mdc-radio__background .mdc-radio__inner-circle {\n  /* \@alternate */\n  background-color: #ff4081;\n  background-color: var(--mdc-theme-secondary, #ff4081);\n}\n\n.mdc-radio .mdc-radio__background::before {\n  /* \@alternate */\n  background-color: #ff4081;\n}\n\n\@supports not (-ms-ime-align: auto) {\n  .mdc-radio .mdc-radio__background::before {\n    background-color: var(--mdc-theme-secondary, #ff4081);\n  }\n}\n\n.mdc-radio::before, .mdc-radio::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n  will-change: transform, opacity;\n}\n\n.mdc-radio::before {\n  transition: opacity 15ms linear;\n}\n\n.mdc-radio.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-radio.mdc-ripple-upgraded--unbounded::after {\n  top: var(--mdc-ripple-top, 0);\n  left: var(--mdc-ripple-left, 0);\n}\n\n.mdc-radio.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 225ms mdc-ripple-fg-radius-in forwards, 75ms mdc-ripple-fg-opacity-in forwards;\n}\n\n.mdc-radio.mdc-ripple-upgraded--foreground-deactivation::after {\n  animation: 150ms mdc-ripple-fg-opacity-out;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n\n.mdc-radio::before, .mdc-radio::after {\n  top: calc(50% - 50%);\n  left: calc(50% - 50%);\n  width: 100%;\n  height: 100%;\n}\n\n.mdc-radio.mdc-ripple-upgraded::before {\n  top: calc(50% - 50%);\n  left: calc(50% - 50%);\n  width: 100%;\n  height: 100%;\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-radio.mdc-ripple-upgraded--unbounded::before {\n  top: var(--mdc-ripple-top, calc(50% - 25%));\n  left: var(--mdc-ripple-left, calc(50% - 25%));\n  width: var(--mdc-ripple-fg-size, 50%);\n  height: var(--mdc-ripple-fg-size, 50%);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-radio.mdc-ripple-upgraded::after {\n  width: var(--mdc-ripple-fg-size, 50%);\n  height: var(--mdc-ripple-fg-size, 50%);\n}\n\n.mdc-radio::before, .mdc-radio::after {\n  /* \@alternate */\n  background-color: #ff4081;\n}\n\n\@supports not (-ms-ime-align: auto) {\n  .mdc-radio::before, .mdc-radio::after {\n    background-color: var(--mdc-theme-secondary, #ff4081);\n  }\n}\n\n.mdc-radio:hover::before {\n  opacity: 0.04;\n}\n\n.mdc-radio:not(.mdc-ripple-upgraded):focus::before, .mdc-radio.mdc-ripple-upgraded--background-focused::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n\n.mdc-radio:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n\n.mdc-radio:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.16;\n}\n\n.mdc-radio.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.16;\n}\n\n.mdc-radio.mdc-ripple-upgraded .mdc-radio__background::before {\n  content: none;\n}\n\n.mdc-radio__background {\n  display: inline-block;\n  position: absolute;\n  left: 10px;\n  box-sizing: border-box;\n  width: 50%;\n  height: 50%;\n}\n\n.mdc-radio__background::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0, 0);\n  transition: opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-radio__outer-circle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  transition: border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 50%;\n}\n\n.mdc-radio__inner-circle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  transform: scale(0, 0);\n  transition: transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1), background-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  border-radius: 50%;\n}\n\n.mdc-radio__native-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  cursor: inherit;\n  z-index: 1;\n}\n\n.mdc-radio__native-control:checked + .mdc-radio__background,\n.mdc-radio__native-control:disabled + .mdc-radio__background {\n  transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-radio__native-control:checked + .mdc-radio__background .mdc-radio__outer-circle,\n.mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__outer-circle {\n  transition: border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-radio__native-control:checked + .mdc-radio__background .mdc-radio__inner-circle,\n.mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__inner-circle {\n  transition: transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1), background-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-radio--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n\n.mdc-radio__native-control:checked + .mdc-radio__background .mdc-radio__inner-circle {\n  transform: scale(0.5);\n  transition: transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1), background-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-radio__native-control:disabled + .mdc-radio__background,\n[aria-disabled=\"true\"] .mdc-radio__native-control + .mdc-radio__background {\n  cursor: default;\n}\n\n.mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__outer-circle,\n[aria-disabled=\"true\"] .mdc-radio__native-control + .mdc-radio__background .mdc-radio__outer-circle {\n  border-color: rgba(0, 0, 0, 0.26);\n}\n\n.mdc-radio--theme-dark .mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__outer-circle,\n.mdc-theme--dark .mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__outer-circle, .mdc-radio--theme-dark\n[aria-disabled=\"true\"] .mdc-radio__native-control + .mdc-radio__background .mdc-radio__outer-circle,\n.mdc-theme--dark\n[aria-disabled=\"true\"] .mdc-radio__native-control + .mdc-radio__background .mdc-radio__outer-circle {\n  border-color: rgba(255, 255, 255, 0.3);\n}\n\n.mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__inner-circle,\n[aria-disabled=\"true\"] .mdc-radio__native-control + .mdc-radio__background .mdc-radio__inner-circle {\n  background-color: rgba(0, 0, 0, 0.26);\n}\n\n.mdc-radio--theme-dark .mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__inner-circle,\n.mdc-theme--dark .mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__inner-circle, .mdc-radio--theme-dark\n[aria-disabled=\"true\"] .mdc-radio__native-control + .mdc-radio__background .mdc-radio__inner-circle,\n.mdc-theme--dark\n[aria-disabled=\"true\"] .mdc-radio__native-control + .mdc-radio__background .mdc-radio__inner-circle {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n\n.mdc-radio__native-control:focus + .mdc-radio__background::before {\n  transform: scale(2, 2);\n  transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: .26;\n}\nmwc-radio.hydrated{visibility:inherit}","mwc-select","/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n\@keyframes mdc-ripple-fg-radius-in {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n\n\@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0.16);\n  }\n}\n\n\@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0.16);\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.mdc-ripple-surface--test-edge-var-bug {\n  --mdc-ripple-surface-test-edge-var: 1px solid #000;\n  visibility: hidden;\n}\n\n.mdc-ripple-surface--test-edge-var-bug::before {\n  border: var(--mdc-ripple-surface-test-edge-var);\n}\n\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n.mdc-select {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.75rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n  background-image: url(data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%230%22%20fill-rule%3D%22evenodd%22%20opacity%3D%220.54%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E);\n  display: inline-flex;\n  position: relative;\n  align-items: center;\n  justify-content: flex-start;\n  box-sizing: border-box;\n  height: 56px;\n  border: none;\n  border-radius: 4px 4px 0 0;\n  outline: none;\n  background-repeat: no-repeat;\n  background-position: right 10px center;\n  cursor: pointer;\n  overflow: visible;\n}\n\n[dir=\"rtl\"] .mdc-select, .mdc-select[dir=\"rtl\"] {\n  background-position: left 10px center;\n}\n\n.mdc-select:focus .mdc-select__bottom-line {\n  /* \@alternate */\n  background-color: #3f51b5;\n  background-color: var(--mdc-theme-primary, #3f51b5);\n  transform: scaleY(2);\n}\n\n.mdc-select:focus .mdc-select__bottom-line::after {\n  opacity: 1;\n}\n\n.mdc-select--theme-dark .mdc-select,\n.mdc-theme--dark .mdc-select {\n  background-image: url(data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%20opacity%3D%220.54%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E);\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.mdc-select__menu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  max-height: 100%;\n  transform-origin: center center;\n  z-index: 4;\n}\n\n.mdc-select__surface {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.75rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n  padding-left: 16px;\n  padding-right: 26px;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: transparent;\n  display: flex;\n  position: relative;\n  flex-grow: 1;\n  width: 100%;\n  height: 56px;\n  border: none;\n  border-radius: 4px 4px 0 0;\n  outline: none;\n  background-color: rgba(0, 0, 0, 0.04);\n  appearance: none;\n  overflow: hidden;\n}\n\n[dir=\"rtl\"] .mdc-select .mdc-select__surface,\n.mdc-select[dir=\"rtl\"] .mdc-select__surface {\n  padding-left: 26px;\n  padding-right: 16px;\n}\n\n.mdc-select__surface::before, .mdc-select__surface::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n  will-change: transform, opacity;\n}\n\n.mdc-select__surface::before {\n  transition: opacity 15ms linear;\n}\n\n.mdc-select__surface.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-select__surface.mdc-ripple-upgraded--unbounded::after {\n  top: var(--mdc-ripple-top, 0);\n  left: var(--mdc-ripple-left, 0);\n}\n\n.mdc-select__surface.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 225ms mdc-ripple-fg-radius-in forwards, 75ms mdc-ripple-fg-opacity-in forwards;\n}\n\n.mdc-select__surface.mdc-ripple-upgraded--foreground-deactivation::after {\n  animation: 150ms mdc-ripple-fg-opacity-out;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n\n.mdc-select__surface::before, .mdc-select__surface::after {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n\n.mdc-select__surface.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-select__surface.mdc-ripple-upgraded--unbounded::before {\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-select__surface.mdc-ripple-upgraded::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n\n.mdc-select__surface::before, .mdc-select__surface::after {\n  background-color: black;\n}\n\n.mdc-select__surface:hover::before {\n  opacity: 0.04;\n}\n\n.mdc-select__surface:not(.mdc-ripple-upgraded):focus::before, .mdc-select__surface.mdc-ripple-upgraded--background-focused::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n\n.mdc-select__surface:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n\n.mdc-select__surface:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.16;\n}\n\n.mdc-select__surface.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.16;\n}\n\n.mdc-select--theme-dark .mdc-select__surface::before, .mdc-select--theme-dark .mdc-select__surface::after,\n.mdc-theme--dark .mdc-select__surface::before,\n.mdc-theme--dark .mdc-select__surface::after {\n  background-color: white;\n}\n\n.mdc-select--theme-dark .mdc-select__surface:hover::before,\n.mdc-theme--dark .mdc-select__surface:hover::before {\n  opacity: 0.08;\n}\n\n.mdc-select--theme-dark .mdc-select__surface:not(.mdc-ripple-upgraded):focus::before, .mdc-select--theme-dark .mdc-select__surface.mdc-ripple-upgraded--background-focused::before,\n.mdc-theme--dark .mdc-select__surface:not(.mdc-ripple-upgraded):focus::before,\n.mdc-theme--dark .mdc-select__surface.mdc-ripple-upgraded--background-focused::before {\n  transition-duration: 75ms;\n  opacity: 0.24;\n}\n\n.mdc-select--theme-dark .mdc-select__surface:not(.mdc-ripple-upgraded)::after,\n.mdc-theme--dark .mdc-select__surface:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n\n.mdc-select--theme-dark .mdc-select__surface:not(.mdc-ripple-upgraded):active::after,\n.mdc-theme--dark .mdc-select__surface:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.32;\n}\n\n.mdc-select--theme-dark .mdc-select__surface.mdc-ripple-upgraded,\n.mdc-theme--dark .mdc-select__surface.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.32;\n}\n\n.mdc-select__surface::-ms-expand {\n  display: none;\n}\n\n.mdc-select__label {\n  left: 16px;\n  right: initial;\n  position: absolute;\n  bottom: 12px;\n  transform-origin: left top;\n  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1);\n  color: rgba(0, 0, 0, 0.6);\n  pointer-events: none;\n  will-change: transform;\n}\n\n[dir=\"rtl\"] .mdc-select__label, .mdc-select__label[dir=\"rtl\"] {\n  left: initial;\n  right: 16px;\n}\n\n.mdc-select--theme-dark .mdc-select__label,\n.mdc-theme--dark .mdc-select__label {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.7);\n  color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7));\n}\n\n[dir=\"rtl\"] .mdc-select .mdc-select__label,\n.mdc-select[dir=\"rtl\"] .mdc-select__label {\n  transform-origin: right top;\n}\n\n.mdc-select__label--float-above {\n  transform: translateY(-40%) scale(0.75, 0.75);\n}\n\n.mdc-select__selected-text {\n  display: flex;\n  align-items: flex-end;\n  margin-bottom: 6px;\n  transition: opacity 125ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 125ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.mdc-select--theme-dark .mdc-select__selected-text,\n.mdc-theme--dark .mdc-select__selected-text {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.7);\n  color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7));\n}\n\n.mdc-select__bottom-line {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  transform: scaleY(1);\n  transform-origin: bottom;\n  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1);\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.mdc-select__bottom-line::after {\n  /* \@alternate */\n  background-color: #3f51b5;\n  background-color: var(--mdc-theme-primary, #3f51b5);\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  transform: scaleX(0);\n  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 0;\n  content: \"\";\n  z-index: 2;\n}\n\n.mdc-select__bottom-line--active::after {\n  transform: scaleX(1);\n  opacity: 1;\n}\n\n.mdc-select__surface:focus ~ .mdc-select__bottom-line {\n  /* \@alternate */\n  background-color: #3f51b5;\n  background-color: var(--mdc-theme-primary, #3f51b5);\n  transform: scaleY(2);\n}\n\n.mdc-select--open .mdc-select__selected-text {\n  transform: translateY(8px);\n  transition: opacity 125ms 125ms cubic-bezier(0, 0, 0.2, 1), transform 125ms 125ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: 0;\n}\n\n.mdc-select--open .mdc-select__bottom-line {\n  /* \@alternate */\n  background-color: #3f51b5;\n  background-color: var(--mdc-theme-primary, #3f51b5);\n  transform: scaleY(2);\n}\n\n.mdc-select--open .mdc-select__bottom-line::after {\n  opacity: 1;\n}\n\n.mdc-select--disabled,\n.mdc-select[disabled] {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));\n  background-image: url(data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%230%22%20fill-rule%3D%22evenodd%22%20opacity%3D%220.38%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E);\n  border-bottom-width: 1px;\n  border-bottom-style: dotted;\n  opacity: .38;\n  cursor: default;\n  pointer-events: none;\n  user-select: none;\n}\n\n.mdc-select--disabled .mdc-select__bottom-line,\n.mdc-select[disabled] .mdc-select__bottom-line {\n  display: none;\n}\n\n.mdc-select--theme-dark.mdc-select--disabled,\n.mdc-theme--dark .mdc-select--disabled {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5));\n  background-image: url(data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%23ffffff%22%20fill-rule%3D%22evenodd%22%20opacity%3D%220.38%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E);\n  border-bottom: 1px dotted rgba(255, 255, 255, 0.38);\n}\n\n.mdc-select--theme-dark.mdc-select[disabled],\n.mdc-theme--dark .mdc-select[disabled] {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5));\n  background-image: url(data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%23ffffff%22%20fill-rule%3D%22evenodd%22%20opacity%3D%220.38%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E);\n  border-bottom: 1px dotted rgba(255, 255, 255, 0.38);\n}\n\n.mdc-select__menu .mdc-list-item {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.75rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54));\n}\n\n.mdc-select__menu .mdc-list-item[aria-selected=\"true\"] {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n}\n\n.mdc-select--theme-dark .mdc-select__menu .mdc-list-item,\n.mdc-theme--dark .mdc-select__menu .mdc-list-item {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.7);\n  color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7));\n}\n\n.mdc-select--theme-dark .mdc-select__menu .mdc-list-item[aria-selected=\"true\"],\n.mdc-theme--dark .mdc-select__menu .mdc-list-item[aria-selected=\"true\"] {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-select__menu .mdc-list-group,\n.mdc-select__menu .mdc-list-group > .mdc-list-item:first-child {\n  margin-top: 12px;\n}\n\n.mdc-select__menu .mdc-list-group {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38));\n  font-weight: normal;\n}\n\n.mdc-select__menu .mdc-list-group .mdc-list-item {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n}\n\n.mdc-select--theme-dark .mdc-select__menu .mdc-list-group,\n.mdc-theme--dark .mdc-select__menu .mdc-list-group {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-select--theme-dark .mdc-select__menu .mdc-list-group .mdc-list-item,\n.mdc-theme--dark .mdc-select__menu .mdc-list-group .mdc-list-item {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-multi-select {\n  /* \@alternate */\n  border-color: rgba(0, 0, 0, 0.38);\n  border-color: var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38));\n  width: 250px;\n  padding: 0;\n  border-width: 1px;\n  border-style: solid;\n  outline: none;\n  appearance: none;\n}\n\n.mdc-multi-select--theme-dark,\n.mdc-theme--dark .mdc-multi-select {\n  /* \@alternate */\n  border-color: rgba(255, 255, 255, 0.5);\n  border-color: var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-multi-select .mdc-list-group {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38));\n  margin: 16px 0 0;\n  padding: 0 0 0 16px;\n  font-weight: normal;\n}\n\n.mdc-multi-select .mdc-list-group--theme-dark,\n.mdc-theme--dark .mdc-multi-select .mdc-list-group {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-multi-select .mdc-list-group:last-child {\n  margin-bottom: 16px;\n}\n\n.mdc-multi-select .mdc-list-group .mdc-list-divider {\n  margin-left: -16px;\n}\n\n.mdc-multi-select .mdc-list-item {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n  margin: 0 0 0 -16px;\n  padding: 0 16px;\n}\n\n.mdc-multi-select .mdc-list-item--theme-dark,\n.mdc-theme--dark .mdc-multi-select .mdc-list-item {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-multi-select .mdc-list-item:first-child {\n  margin-top: 12px;\n}\n\n.mdc-multi-select .mdc-list-item:last-child {\n  margin-bottom: 8px;\n}\n\n.mdc-multi-select .mdc-list-item:checked {\n  /* \@alternate */\n  background-color: #fff;\n  background-color: var(--mdc-theme-background, #fff);\n}\n\n.mdc-multi-select .mdc-list-item:checked--theme-dark,\n.mdc-theme--dark .mdc-multi-select .mdc-list-item:checked {\n  /* \@alternate */\n  background-color: white;\n  background-color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-multi-select .mdc-list-divider {\n  margin-bottom: 8px;\n  padding-top: 8px;\n  font-size: 0;\n}\n\n.mdc-multi-select:focus .mdc-list-item:checked {\n  /* \@alternate */\n  background-color: #3f51b5;\n  background-color: var(--mdc-theme-primary, #3f51b5);\n}\n\n.mdc-multi-select:focus .mdc-list-item:checked--theme-dark,\n.mdc-theme--dark .mdc-multi-select:focus .mdc-list-item:checked {\n  /* \@alternate */\n  background-color: white;\n  background-color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-select-scroll-lock {\n  overflow: hidden;\n}\n\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n.mdc-list .mdc-list-divider,\n.mdc-list-group .mdc-list-divider {\n  border-bottom-color: rgba(0, 0, 0, 0.12);\n}\n\n.mdc-list--theme-dark .mdc-list-divider,\n.mdc-theme--dark .mdc-list .mdc-list-divider,\n.mdc-list-group--theme-dark .mdc-list-divider,\n.mdc-theme--dark\n.mdc-list-group .mdc-list-divider {\n  border-bottom-color: rgba(255, 255, 255, 0.2);\n}\n\n.mdc-list {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.75rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n  margin: 0;\n  padding: 8px 16px;\n  line-height: 1.5rem;\n  list-style-type: none;\n}\n\n.mdc-list .mdc-list-item__secondary-text {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54));\n}\n\n.mdc-list .mdc-list-item__start-detail {\n  background-color: transparent;\n}\n\n.mdc-list .mdc-list-item__start-detail {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38));\n}\n\n.mdc-list .mdc-list-item__end-detail {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38));\n}\n\n.mdc-list--theme-dark,\n.mdc-theme--dark .mdc-list {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-list--theme-dark .mdc-list-item__secondary-text,\n.mdc-theme--dark .mdc-list .mdc-list-item__secondary-text {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.7);\n  color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7));\n}\n\n.mdc-list--theme-dark .mdc-list-item__start-detail,\n.mdc-theme--dark .mdc-list .mdc-list-item__start-detail {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-icon-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-list--theme-dark .mdc-list-item__end-detail,\n.mdc-theme--dark .mdc-list .mdc-list-item__end-detail {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-list--dense {\n  padding-top: 4px;\n  padding-bottom: 4px;\n  font-size: .812rem;\n}\n\n.mdc-list-item {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  height: 48px;\n}\n\n.mdc-list-item--selected, .mdc-list-item--activated {\n  /* \@alternate */\n  color: #3f51b5;\n  color: var(--mdc-theme-primary, #3f51b5);\n}\n\n.mdc-list-item--selected .mdc-list-item__start-detail, .mdc-list-item--activated .mdc-list-item__start-detail {\n  /* \@alternate */\n  color: #3f51b5;\n  color: var(--mdc-theme-primary, #3f51b5);\n}\n\n.mdc-list-item__start-detail {\n  width: 24px;\n  height: 24px;\n  margin-left: 0;\n  margin-right: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n[dir=\"rtl\"] .mdc-list-item .mdc-list-item__start-detail,\n.mdc-list-item[dir=\"rtl\"] .mdc-list-item__start-detail {\n  margin-left: 32px;\n  margin-right: 0;\n}\n\n.mdc-list-item__end-detail {\n  width: 24px;\n  height: 24px;\n  margin-left: auto;\n  margin-right: 0;\n}\n\n[dir=\"rtl\"] .mdc-list-item .mdc-list-item__end-detail,\n.mdc-list-item[dir=\"rtl\"] .mdc-list-item__end-detail {\n  margin-left: 0;\n  margin-right: auto;\n}\n\n.mdc-list-item__text {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.mdc-list-item__secondary-text {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.25rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-list--dense .mdc-list-item__secondary-text {\n  font-size: inherit;\n}\n\n.mdc-list--dense .mdc-list-item {\n  height: 40px;\n}\n\n.mdc-list--dense .mdc-list-item__start-detail {\n  width: 20px;\n  height: 20px;\n  margin-left: 0;\n  margin-right: 36px;\n}\n\n[dir=\"rtl\"] .mdc-list-item .mdc-list--dense .mdc-list-item__start-detail,\n.mdc-list-item[dir=\"rtl\"] .mdc-list--dense .mdc-list-item__start-detail {\n  margin-left: 36px;\n  margin-right: 0;\n}\n\n.mdc-list--dense .mdc-list-item__end-detail {\n  width: 20px;\n  height: 20px;\n}\n\n.mdc-list--avatar-list .mdc-list-item {\n  height: 56px;\n}\n\n.mdc-list--avatar-list .mdc-list-item__start-detail {\n  width: 40px;\n  height: 40px;\n  margin-left: 0;\n  margin-right: 16px;\n  border-radius: 50%;\n}\n\n[dir=\"rtl\"] .mdc-list-item .mdc-list--avatar-list .mdc-list-item__start-detail,\n.mdc-list-item[dir=\"rtl\"] .mdc-list--avatar-list .mdc-list-item__start-detail {\n  margin-left: 16px;\n  margin-right: 0;\n}\n\n.mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list__item {\n  height: 48px;\n}\n\n.mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list__item__start-detail {\n  width: 36px;\n  height: 36px;\n  margin-left: 0;\n  margin-right: 20px;\n}\n\n[dir=\"rtl\"] .mdc-list-item .mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list__item__start-detail,\n.mdc-list-item[dir=\"rtl\"] .mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list__item__start-detail {\n  margin-left: 20px;\n  margin-right: 0;\n}\n\n.mdc-list--two-line .mdc-list-item {\n  height: 72px;\n}\n\n.mdc-list--two-line.mdc-list--dense .mdc-list-item {\n  height: 60px;\n}\n\na.mdc-list-item {\n  color: inherit;\n  text-decoration: none;\n}\n\n.mdc-list-item.mdc-ripple-upgraded {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: transparent;\n  left: -16px;\n  right: initial;\n  position: relative;\n  width: 100%;\n  padding: 0 16px;\n  overflow: hidden;\n}\n\n.mdc-list-item.mdc-ripple-upgraded::before, .mdc-list-item.mdc-ripple-upgraded::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n  will-change: transform, opacity;\n}\n\n.mdc-list-item.mdc-ripple-upgraded::before {\n  transition: opacity 15ms linear;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded::after {\n  top: var(--mdc-ripple-top, 0);\n  left: var(--mdc-ripple-left, 0);\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 225ms mdc-ripple-fg-radius-in forwards, 75ms mdc-ripple-fg-opacity-in forwards;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-deactivation::after {\n  animation: 150ms mdc-ripple-fg-opacity-out;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n\n.mdc-list-item.mdc-ripple-upgraded::before, .mdc-list-item.mdc-ripple-upgraded::after {\n  background-color: rgba(0, 0, 0, 0.06);\n  opacity: 0;\n}\n\n.mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):hover::before, .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):focus::before, .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 85ms;\n  opacity: .6;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::after {\n  --mdc-ripple-fg-opacity: 1;\n}\n\n.mdc-list-item.mdc-ripple-upgraded::before, .mdc-list-item.mdc-ripple-upgraded::after {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded::before {\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n\n[dir=\"rtl\"] .mdc-list-item.mdc-ripple-upgraded, .mdc-list-item.mdc-ripple-upgraded[dir=\"rtl\"] {\n  left: initial;\n  right: -16px;\n}\n\n.mdc-list-item.mdc-ripple-upgraded:focus {\n  outline: none;\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded::before, .mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded::after,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded::before,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded::after {\n  background-color: rgba(255, 255, 255, 0.12);\n  opacity: 0;\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):hover::before, .mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):focus::before, .mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):active::after,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):hover::before,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):focus::before,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 85ms;\n  opacity: .6;\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-focused::before,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-active-fill::before,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::after,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::after {\n  --mdc-ripple-fg-opacity: 1;\n}\n\n.mdc-list-divider {\n  height: 0;\n  margin: 0;\n  border: none;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n}\n\n.mdc-list-divider--inset {\n  margin-left: 56px;\n  margin-right: 0;\n  width: calc(100% - 56px);\n}\n\n[dir=\"rtl\"] .mdc-list-group .mdc-list-divider--inset,\n.mdc-list-group[dir=\"rtl\"] .mdc-list-divider--inset {\n  margin-left: 0;\n  margin-right: 56px;\n}\n\n.mdc-list-group {\n  padding: 0 16px;\n}\n\n.mdc-list-group .mdc-list-group__subheader {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n}\n\n.mdc-list-group--theme-dark .mdc-list-group__subheader,\n.mdc-theme--dark .mdc-list-group .mdc-list-group__subheader {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-list-group__subheader {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  line-height: 1.5rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  margin: 0.75rem 0;\n}\n\n.mdc-list-group .mdc-list {\n  padding: 0;\n}\n\n/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct CSS rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n * If $color has an alpha channel, it will be ignored and overridden. To increase the opacity of the shadow, use\n * $opacity-boost.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n.mdc-simple-menu {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  display: none;\n  position: absolute;\n  box-sizing: border-box;\n  min-width: 170px;\n  max-width: calc(100vw - 32px);\n  max-height: calc(100vh - 32px);\n  margin: 0;\n  padding: 0;\n  transform: scale(0);\n  transform-origin: top left;\n  border-radius: 2px;\n  background-color: white;\n  opacity: 0;\n  white-space: nowrap;\n  overflow-x: hidden;\n  overflow-y: auto;\n  will-change: transform, opacity;\n  z-index: 4;\n}\n\n.mdc-simple-menu--theme-dark,\n.mdc-theme--dark .mdc-simple-menu {\n  background-color: #424242;\n}\n\n.mdc-simple-menu:focus {\n  outline: none;\n}\n\n.mdc-simple-menu--open {\n  display: inline-block;\n  transform: scale(1);\n  opacity: 1;\n}\n\n.mdc-simple-menu--animating {\n  display: inline-block;\n  transition: opacity 0.2s cubic-bezier(0, 0, 0.2, 1);\n  overflow-y: hidden;\n}\n\n.mdc-simple-menu__items {\n  box-sizing: border-box;\n  overflow-x: hidden;\n  overflow-y: auto;\n  will-change: transform;\n}\n\n.mdc-simple-menu__items > * {\n  opacity: 0;\n}\n\n.mdc-simple-menu__items > .mdc-list-item {\n  cursor: pointer;\n}\n\n.mdc-simple-menu--animating .mdc-simple-menu__items {\n  overflow-y: hidden;\n}\n\n.mdc-simple-menu--animating .mdc-simple-menu__items > * {\n  transition-duration: 0.3s;\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-simple-menu--open .mdc-simple-menu__items > * {\n  opacity: 1;\n  will-change: opacity;\n}\n\n[dir=\"rtl\"] .mdc-simple-menu {\n  transform-origin: top right;\n}\n\n.mdc-simple-menu--open-from-top-left {\n  transform-origin: top left !important;\n}\n\n.mdc-simple-menu--open-from-top-right {\n  transform-origin: top right !important;\n}\n\n.mdc-simple-menu--open-from-bottom-left {\n  transform-origin: bottom left !important;\n}\n\n.mdc-simple-menu--open-from-bottom-right {\n  transform-origin: bottom right !important;\n}\n\n.mdc-simple-menu .mdc-list-group,\n.mdc-simple-menu .mdc-list {\n  padding: 8px 0;\n}\n\n.mdc-simple-menu .mdc-list-item {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.75rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  position: relative;\n  padding: 0 16px;\n  outline: none;\n  color: inherit;\n  text-decoration: none;\n  user-select: none;\n}\n\n.mdc-simple-menu--theme-dark.mdc-simple-menu .mdc-list-item,\n.mdc-theme--dark .mdc-simple-menu .mdc-list-item {\n  color: white;\n}\n\n.mdc-simple-menu--theme-dark.mdc-simple-menu .mdc-list-divider,\n.mdc-theme--dark .mdc-simple-menu .mdc-list-divider {\n  border-color: rgba(255, 255, 255, 0.12);\n}\n\n.mdc-simple-menu .mdc-list-item__start-detail {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mdc-simple-menu--theme-dark.mdc-simple-menu .mdc-list-item__start-detail,\n.mdc-theme--dark .mdc-simple-menu .mdc-list-item__start-detail {\n  color: rgba(255, 255, 255, 0.54);\n}\n\n.mdc-simple-menu--selected.mdc-list-item,\n.mdc-simple-menu--selected.mdc-list-item .mdc-list-item__start-detail {\n  /* \@alternate */\n  color: #3f51b5;\n  color: var(--mdc-theme-primary, #3f51b5);\n}\n\n.mdc-simple-menu .mdc-list-item::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: opacity 120ms cubic-bezier(0, 0, 0.2, 1);\n  border-radius: inherit;\n  background: currentColor;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-simple-menu .mdc-list-item:focus::before {\n  opacity: .12;\n}\n\n.mdc-simple-menu .mdc-list-item:active::before {\n  opacity: .18;\n}\n\n.mdc-simple-menu .mdc-list-item[aria-disabled=\"true\"] {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));\n  cursor: default;\n}\n\n.mdc-select--theme-dark .mdc-simple-menu .mdc-list-item[aria-disabled=\"true\"],\n.mdc-theme--dark .mdc-simple-menu .mdc-list-item[aria-disabled=\"true\"] {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-simple-menu .mdc-list-item[aria-disabled=\"true\"]:focus::before, .mdc-simple-menu .mdc-list-item[aria-disabled=\"true\"]:active::before {\n  opacity: 0;\n}\n\n.mdc-menu-anchor {\n  position: relative;\n  overflow: visible;\n}\n\n.webmd-select {\n  height: auto;\n  width: auto !important;\n}\nmwc-select.hydrated{visibility:inherit}","mwc-slider","/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n\@keyframes mdc-slider-emphasize {\n  0% {\n    animation-timing-function: ease-out;\n  }\n  50% {\n    animation-timing-function: ease-in;\n    transform: scale(0.85);\n  }\n  100% {\n    transform: scale(0.571);\n  }\n}\n\n.mdc-slider {\n  position: relative;\n  width: 100%;\n  height: 48px;\n  cursor: pointer;\n  touch-action: pan-x;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track {\n  /* \@alternate */\n  background-color: #ff4081;\n  background-color: var(--mdc-theme-secondary, #ff4081);\n}\n\n.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-container {\n  background-color: rgba(255, 64, 129, 0.26);\n}\n\n.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker::after,\n.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker-container::after {\n  /* \@alternate */\n  background-color: #ff4081;\n  background-color: var(--mdc-theme-secondary, #ff4081);\n}\n\n.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb {\n  /* \@alternate */\n  fill: #ff4081;\n  fill: var(--mdc-theme-secondary, #ff4081);\n  /* \@alternate */\n  stroke: #ff4081;\n  stroke: var(--mdc-theme-secondary, #ff4081);\n}\n\n.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__focus-ring {\n  /* \@alternate */\n  background-color: #ff4081;\n  background-color: var(--mdc-theme-secondary, #ff4081);\n}\n\n.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin {\n  /* \@alternate */\n  background-color: #ff4081;\n  background-color: var(--mdc-theme-secondary, #ff4081);\n}\n\n.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-slider--disabled .mdc-slider__track {\n  background-color: #9a9a9a;\n}\n\n.mdc-slider--disabled .mdc-slider__track-container {\n  background-color: rgba(154, 154, 154, 0.26);\n}\n\n.mdc-slider--disabled .mdc-slider__track-marker::after,\n.mdc-slider--disabled .mdc-slider__track-marker-container::after {\n  background-color: #9a9a9a;\n}\n\n.mdc-slider--disabled .mdc-slider__thumb {\n  fill: #9a9a9a;\n  stroke: #9a9a9a;\n}\n\n.mdc-slider--disabled .mdc-slider__thumb {\n  /* \@alternate */\n  stroke: white;\n  stroke: var(--mdc-slider-bg-color-behind-component, white);\n}\n\n.mdc-slider--theme-dark.mdc-slider--disabled .mdc-slider__track,\n.mdc-theme--dark .mdc-slider--disabled .mdc-slider__track {\n  background-color: #787878;\n}\n\n.mdc-slider--theme-dark.mdc-slider--disabled .mdc-slider__track-container,\n.mdc-theme--dark .mdc-slider--disabled .mdc-slider__track-container {\n  background-color: rgba(120, 120, 120, 0.26);\n}\n\n.mdc-slider--theme-dark.mdc-slider--disabled .mdc-slider__track-marker::after, .mdc-slider--theme-dark.mdc-slider--disabled .mdc-slider__track-marker-container::after,\n.mdc-theme--dark .mdc-slider--disabled .mdc-slider__track-marker::after,\n.mdc-theme--dark .mdc-slider--disabled .mdc-slider__track-marker-container::after {\n  background-color: #787878;\n}\n\n.mdc-slider--theme-dark.mdc-slider--disabled .mdc-slider__thumb,\n.mdc-theme--dark .mdc-slider--disabled .mdc-slider__thumb {\n  fill: #787878;\n  stroke: #787878;\n}\n\n.mdc-slider--theme-dark.mdc-slider--disabled .mdc-slider__thumb,\n.mdc-theme--dark .mdc-slider--disabled .mdc-slider__thumb {\n  /* \@alternate */\n  stroke: #333;\n  stroke: var(--mdc-slider-bg-color-behind-component, #333);\n}\n\n.mdc-slider:focus {\n  outline: none;\n}\n\n.mdc-slider__track-container {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  height: 2px;\n  overflow: hidden;\n}\n\n.mdc-slider__track {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform-origin: left top;\n  will-change: transform;\n}\n\n[dir=\"rtl\"] .mdc-slider .mdc-slider__track,\n.mdc-slider[dir=\"rtl\"] .mdc-slider__track {\n  transform-origin: right top;\n}\n\n.mdc-slider__track-marker-container {\n  display: flex;\n  margin-right: 0;\n  margin-left: -1px;\n  visibility: hidden;\n}\n\n[dir=\"rtl\"] .mdc-slider .mdc-slider__track-marker-container,\n.mdc-slider[dir=\"rtl\"] .mdc-slider__track-marker-container {\n  margin-right: -1px;\n  margin-left: 0;\n}\n\n.mdc-slider__track-marker-container::after {\n  display: block;\n  width: 2px;\n  height: 2px;\n  content: \"\";\n}\n\n.mdc-slider__track-marker {\n  flex: 1;\n}\n\n.mdc-slider__track-marker::after {\n  display: block;\n  width: 2px;\n  height: 2px;\n  content: \"\";\n}\n\n.mdc-slider__track-marker:first-child::after {\n  width: 3px;\n}\n\n.mdc-slider__thumb-container {\n  position: absolute;\n  top: 15px;\n  left: 0;\n  width: 21px;\n  height: 100%;\n  user-select: none;\n  will-change: transform;\n}\n\n.mdc-slider__thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: scale(0.571);\n  transition: transform 100ms ease-out, fill 100ms ease-out, stroke 100ms ease-out;\n  stroke-width: 3.5;\n}\n\n.mdc-slider__focus-ring {\n  width: 21px;\n  height: 21px;\n  transition: transform 266.67ms ease-out, opacity 266.67ms ease-out, background-color 266.67ms ease-out;\n  border-radius: 50%;\n  opacity: 0;\n}\n\n.mdc-slider__pin {\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  margin-top: -2px;\n  margin-left: -2px;\n  transform: rotate(-45deg) scale(0) translate(0, 0);\n  transition: transform 100ms ease-out;\n  border-radius: 50% 50% 50% 0%;\n  /**\n     * Ensuring that the pin is higher than the thumb in the stacking order\n     * removes some rendering jank observed in Chrome.\n     */\n  z-index: 1;\n}\n\n.mdc-slider__pin-value-marker {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.75rem;\n  font-weight: 400;\n  letter-spacing: 0.08em;\n  line-height: 1.25rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  transform: rotate(45deg);\n}\n\n.mdc-slider--active .mdc-slider__thumb {\n  transform: scale3d(1, 1, 1);\n}\n\n.mdc-slider--focus .mdc-slider__thumb {\n  animation: mdc-slider-emphasize 266.67ms linear;\n}\n\n.mdc-slider--focus .mdc-slider__focus-ring {\n  transform: scale3d(1.55, 1.55, 1.55);\n  opacity: .25;\n}\n\n.mdc-slider--disabled {\n  cursor: auto;\n}\n\n.mdc-slider--in-transit .mdc-slider__thumb {\n  transition-delay: 140ms;\n}\n\n.mdc-slider--in-transit .mdc-slider__thumb-container,\n.mdc-slider--in-transit .mdc-slider__track,\n.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__thumb-container,\n.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__track {\n  transition: transform 80ms ease;\n}\n\n.mdc-slider--discrete.mdc-slider--active .mdc-slider__thumb {\n  transform: scale(calc(12 / 21));\n}\n\n.mdc-slider--discrete.mdc-slider--active .mdc-slider__pin {\n  transform: rotate(-45deg) scale(1) translate(19px, -20px);\n}\n\n.mdc-slider--discrete.mdc-slider--focus .mdc-slider__thumb {\n  animation: none;\n}\n\n.mdc-slider--discrete.mdc-slider--display-markers .mdc-slider__track-marker-container {\n  visibility: visible;\n}\nmwc-slider.hydrated{visibility:inherit}","mwc-snackbar","/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/* postcss-bem-linter: define snackbar */\n.mdc-snackbar {\n  display: flex;\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  align-items: center;\n  justify-content: flex-start;\n  box-sizing: border-box;\n  padding-right: 24px;\n  padding-left: 24px;\n  transform: translate(-50%, 100%);\n  transition: transform 0.25s 0ms cubic-bezier(0.4, 0, 1, 1);\n  background-color: #323232;\n  pointer-events: none;\n  will-change: transform;\n  /* stylelint-disable plugin/selector-bem-pattern */\n  /* stylelint-enable plugin/selector-bem-pattern */\n}\n\n.mdc-snackbar--theme-dark .mdc-snackbar,\n.mdc-theme--dark .mdc-snackbar {\n  background-color: #fafafa;\n}\n\n\@media (max-width: 599px) {\n  .mdc-snackbar {\n    left: 0;\n    width: 100%;\n    transform: translate(0, 100%);\n  }\n}\n\n\@media (min-width: 600px) {\n  .mdc-snackbar {\n    min-width: 288px;\n    max-width: 568px;\n    border-radius: 2px;\n  }\n}\n\n\@media (min-width: 600px) {\n  .mdc-snackbar--align-start {\n    left: 24px;\n    right: initial;\n    bottom: 24px;\n    transform: translate(0, 200%);\n  }\n  [dir=\"rtl\"] .mdc-snackbar--align-start, .mdc-snackbar--align-start[dir=\"rtl\"] {\n    left: initial;\n    right: 24px;\n  }\n}\n\n\@media (max-width: 599px) {\n  .mdc-snackbar--align-start {\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    transform: translate(0, 100%);\n  }\n}\n\n.mdc-snackbar--active {\n  transform: translate(0);\n  transition: transform 0.25s 0ms cubic-bezier(0, 0, 0.2, 1);\n  pointer-events: auto;\n}\n\n.mdc-snackbar--active:not(.mdc-snackbar--align-start) {\n  transform: translate(-50%, 0);\n}\n\n\@media (max-width: 599px) {\n  .mdc-snackbar--active:not(.mdc-snackbar--align-start) {\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    transform: translate(0);\n  }\n}\n\n.mdc-snackbar__action-wrapper {\n  padding-left: 24px;\n  padding-right: 0;\n}\n\n[dir=\"rtl\"] .mdc-snackbar__action-wrapper, .mdc-snackbar__action-wrapper[dir=\"rtl\"] {\n  padding-left: 0;\n  padding-right: 24px;\n}\n\n.mdc-snackbar--action-on-bottom {\n  flex-direction: column;\n}\n\n.mdc-snackbar--action-on-bottom .mdc-snackbar__text {\n  margin-right: inherit;\n}\n\n.mdc-snackbar--action-on-bottom .mdc-snackbar__action-wrapper {\n  margin-left: auto;\n  margin-right: 0;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-top: -12px;\n  margin-bottom: 8px;\n}\n\n[dir=\"rtl\"] .mdc-snackbar--action-on-bottom .mdc-snackbar__action-wrapper, .mdc-snackbar--action-on-bottom .mdc-snackbar__action-wrapper[dir=\"rtl\"] {\n  margin-left: 0;\n  margin-right: auto;\n}\n\n.mdc-snackbar__text {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.25rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  margin-left: 0;\n  margin-right: auto;\n  display: flex;\n  align-items: center;\n  height: 48px;\n  transition: opacity 0.3s 0ms cubic-bezier(0.4, 0, 1, 1);\n  opacity: 0;\n  color: white;\n}\n\n[dir=\"rtl\"] .mdc-snackbar .mdc-snackbar__text,\n.mdc-snackbar[dir=\"rtl\"] .mdc-snackbar__text {\n  margin-left: auto;\n  margin-right: 0;\n}\n\n.mdc-snackbar--theme-dark .mdc-snackbar__text,\n.mdc-theme--dark .mdc-snackbar__text {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n}\n\n\@media (min-width: 600px) {\n  .mdc-snackbar__text {\n    padding-left: 0;\n    padding-right: 24px;\n  }\n  [dir=\"rtl\"] .mdc-snackbar__text, .mdc-snackbar__text[dir=\"rtl\"] {\n    padding-left: 24px;\n    padding-right: 0;\n  }\n}\n\n.mdc-snackbar--multiline .mdc-snackbar__text {\n  height: 80px;\n}\n\n.mdc-snackbar--multiline.mdc-snackbar--action-on-bottom .mdc-snackbar__text {\n  margin: 0;\n}\n\n.mdc-snackbar__action-button {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  line-height: 2.25rem;\n  text-decoration: none;\n  text-transform: uppercase;\n  /* \@alternate */\n  color: #ff4081;\n  color: var(--mdc-theme-secondary, #ff4081);\n  padding: 0;\n  transition: opacity 0.3s 0ms cubic-bezier(0.4, 0, 1, 1);\n  border: none;\n  outline: none;\n  background-color: transparent;\n  opacity: 0;\n  user-select: none;\n  -webkit-appearance: none;\n  visibility: hidden;\n}\n\n.mdc-snackbar--theme-dark .mdc-snackbar__action-button,\n.mdc-theme--dark .mdc-snackbar__action-button {\n  /* \@alternate */\n  color: #3f51b5;\n  color: var(--mdc-theme-primary, #3f51b5);\n}\n\n.mdc-snackbar__action-button:hover {\n  cursor: pointer;\n}\n\n.mdc-snackbar__action-button::-moz-focus-inner {\n  border: 0;\n}\n\n.mdc-snackbar__action-button:not([aria-hidden]) {\n  visibility: inherit;\n}\n\n.mdc-snackbar--active .mdc-snackbar__text,\n.mdc-snackbar--active .mdc-snackbar__action-button:not([aria-hidden]) {\n  transition: opacity 0.3s 0ms cubic-bezier(0.4, 0, 1, 1);\n  opacity: 1;\n}\n\n/* postcss-bem-linter: end */\nmwc-snackbar.hydrated{visibility:inherit}","mwc-switch","/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct CSS rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n * If $color has an alpha channel, it will be ignored and overridden. To increase the opacity of the shadow, use\n * $opacity-boost.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n.mdc-switch {\n  display: inline-block;\n  position: relative;\n}\n\n.mdc-switch .mdc-switch__native-control:enabled:not(:checked) ~ .mdc-switch__background::before {\n  background-color: #000;\n}\n\n.mdc-switch .mdc-switch__native-control:enabled:not(:checked) ~ .mdc-switch__background .mdc-switch__knob {\n  background-color: #fafafa;\n}\n\n.mdc-switch .mdc-switch__native-control:enabled:not(:checked) ~ .mdc-switch__background .mdc-switch__knob::before {\n  background-color: #9e9e9e;\n}\n\n.mdc-switch--theme-dark .mdc-switch__native-control:enabled:not(:checked) ~ .mdc-switch__background::before,\n.mdc-theme--dark .mdc-switch .mdc-switch__native-control:enabled:not(:checked) ~ .mdc-switch__background::before {\n  background-color: #fff;\n}\n\n.mdc-switch--theme-dark .mdc-switch__native-control:enabled:not(:checked) ~ .mdc-switch__background .mdc-switch__knob,\n.mdc-theme--dark .mdc-switch .mdc-switch__native-control:enabled:not(:checked) ~ .mdc-switch__background .mdc-switch__knob {\n  background-color: #bdbdbd;\n}\n\n.mdc-switch--theme-dark .mdc-switch__native-control:enabled:not(:checked) ~ .mdc-switch__background .mdc-switch__knob::before,\n.mdc-theme--dark .mdc-switch .mdc-switch__native-control:enabled:not(:checked) ~ .mdc-switch__background .mdc-switch__knob::before {\n  background-color: #f1f1f1;\n}\n\n.mdc-switch .mdc-switch__native-control:enabled:checked ~ .mdc-switch__background::before {\n  /* \@alternate */\n  background-color: #ff4081;\n  background-color: var(--mdc-theme-secondary, #ff4081);\n}\n\n.mdc-switch .mdc-switch__native-control:enabled:checked ~ .mdc-switch__background .mdc-switch__knob {\n  /* \@alternate */\n  background-color: #ff4081;\n  background-color: var(--mdc-theme-secondary, #ff4081);\n}\n\n.mdc-switch .mdc-switch__native-control:enabled:checked ~ .mdc-switch__background .mdc-switch__knob::before {\n  /* \@alternate */\n  background-color: #ff4081;\n  background-color: var(--mdc-theme-secondary, #ff4081);\n}\n\n.mdc-switch__native-control {\n  position: absolute;\n  top: -14px;\n  left: -14px;\n  width: 48px;\n  height: 48px;\n  display: inline-block;\n  margin-top: -3px;\n  transition: transform 90ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 0;\n  cursor: pointer;\n  z-index: 2;\n}\n\n.mdc-switch__native-control:checked {\n  transform: translateX(14px);\n}\n\n.mdc-switch__background {\n  display: block;\n  position: relative;\n  width: 34px;\n  height: 14px;\n  border-radius: 7px;\n  outline: none;\n  user-select: none;\n}\n\n.mdc-switch__background::before {\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transition: opacity 90ms cubic-bezier(0.4, 0, 0.2, 1), background-color 90ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 7px;\n  opacity: .38;\n  content: \"\";\n}\n\n.mdc-switch--theme-dark .mdc-switch__background::before,\n.mdc-theme--dark .mdc-switch__background::before {\n  opacity: .3;\n}\n\n.mdc-switch__background .mdc-switch__knob {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  display: block;\n  position: absolute;\n  top: -3px;\n  left: 0;\n  width: 20px;\n  height: 20px;\n  transform: translateX(0);\n  transition: transform 90ms cubic-bezier(0.4, 0, 0.2, 1), background-color 90ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 10px;\n  z-index: 1;\n}\n\n.mdc-switch__background .mdc-switch__knob::before {\n  position: absolute;\n  top: -14px;\n  left: -14px;\n  width: 48px;\n  height: 48px;\n  transform: scale(0);\n  transition: transform 90ms cubic-bezier(0.4, 0, 0.2, 1), background-color 90ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 24px;\n  opacity: .2;\n  content: \"\";\n}\n\n.mdc-switch__native-control:focus ~ .mdc-switch__background .mdc-switch__knob::before {\n  position: absolute;\n  width: 48px;\n  height: 48px;\n  transform: scale(1);\n  transition: transform 90ms cubic-bezier(0.4, 0, 0.2, 1), background-color 90ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 24px;\n}\n\n.mdc-switch--theme-dark .mdc-switch__native-control:focus ~ .mdc-switch__background .mdc-switch__knob::before,\n.mdc-theme--dark .mdc-switch__native-control:focus ~ .mdc-switch__background .mdc-switch__knob::before {\n  opacity: .14;\n}\n\n.mdc-switch__native-control:checked ~ .mdc-switch__background::before {\n  opacity: .5;\n}\n\n.mdc-switch__native-control:checked ~ .mdc-switch__background .mdc-switch__knob {\n  transform: translateX(14px);\n  transition: transform 90ms cubic-bezier(0.4, 0, 0.2, 1), background-color 90ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdc-switch__native-control:checked ~ .mdc-switch__background .mdc-switch__knob::before {\n  opacity: .15;\n}\n\n.mdc-switch__native-control:disabled {\n  cursor: initial;\n}\n\n.mdc-switch__native-control:disabled ~ .mdc-switch__background::before {\n  background-color: #000;\n  opacity: .12;\n}\n\n.mdc-switch--theme-dark .mdc-switch__native-control:disabled ~ .mdc-switch__background::before,\n.mdc-theme--dark .mdc-switch__native-control:disabled ~ .mdc-switch__background::before {\n  background-color: #fff;\n  opacity: .1;\n}\n\n.mdc-switch__native-control:disabled ~ .mdc-switch__background .mdc-switch__knob {\n  background-color: #bdbdbd;\n}\n\n.mdc-switch--theme-dark .mdc-switch__native-control:disabled ~ .mdc-switch__background .mdc-switch__knob,\n.mdc-theme--dark .mdc-switch__native-control:disabled ~ .mdc-switch__background .mdc-switch__knob {\n  background-color: #424242;\n}\n\n.mdc-switch {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.mdc-switch-reverse {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n}\n\n.mdc-switch-label {\n  margin: 0px 5px;\n}\nmwc-switch.hydrated{visibility:inherit}","mwc-tabbar","/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n\@keyframes mdc-ripple-fg-radius-in {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n\n\@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0.16);\n  }\n}\n\n\@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0.16);\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.mdc-ripple-surface--test-edge-var-bug {\n  --mdc-ripple-surface-test-edge-var: 1px solid #000;\n  visibility: hidden;\n}\n\n.mdc-ripple-surface--test-edge-var-bug::before {\n  border: var(--mdc-ripple-surface-test-edge-var);\n}\n\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n.mdc-tab {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  line-height: 1.5rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  display: table-cell;\n  position: relative;\n  box-sizing: border-box;\n  min-width: 160px;\n  min-height: 48px;\n  padding: 0 24px;\n  text-align: center;\n  text-decoration: none;\n  white-space: nowrap;\n  cursor: pointer;\n  overflow: hidden;\n  vertical-align: middle;\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54));\n}\n\n.mdc-tab:hover {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n}\n\n.mdc-tab:focus {\n  /* \@alternate */\n  outline-color: rgba(0, 0, 0, 0.54);\n  outline-color: var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54));\n}\n\n.mdc-tab-bar--theme-dark .mdc-tab,\n.mdc-theme--dark .mdc-tab {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.7);\n  color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7));\n}\n\n.mdc-tab-bar--theme-dark .mdc-tab:hover,\n.mdc-theme--dark .mdc-tab:hover {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-tab-bar--theme-dark .mdc-tab:focus,\n.mdc-theme--dark .mdc-tab:focus {\n  /* \@alternate */\n  outline-color: rgba(255, 255, 255, 0.7);\n  outline-color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7));\n}\n\n\@media screen and (max-width: 600px) {\n  .mdc-tab {\n    min-width: 72px;\n    padding: 0 12px;\n  }\n}\n\n.mdc-tab__icon {\n  display: block;\n  margin: 0 auto;\n  width: 24px;\n  height: 24px;\n}\n\n.mdc-tab-bar--icons-with-text .mdc-tab__icon {\n  margin-top: 4px;\n}\n\n.mdc-tab__icon-text {\n  display: block;\n  margin: 0 auto;\n}\n\n.mdc-tab__icon + .mdc-tab__icon-text {\n  padding-top: 6px;\n}\n\n.mdc-tab--active {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n}\n\n.mdc-tab-bar--theme-dark .mdc-tab--active,\n.mdc-theme--dark .mdc-tab--active {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-tab--active::before {\n  bottom: 0;\n}\n\n.mdc-tab-bar:not(.mdc-tab-bar-upgraded) .mdc-tab {\n  position: relative;\n}\n\n.mdc-tab-bar:not(.mdc-tab-bar-upgraded) .mdc-tab::after {\n  display: none;\n  position: absolute;\n  top: 46px;\n  left: 0;\n  width: calc(100% - 4px);\n  height: 2px;\n  content: \"\";\n  pointer-events: none;\n  /* \@alternate */\n  background-color: rgba(0, 0, 0, 0.87);\n  background-color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n}\n\n.mdc-tab-bar--theme-dark.mdc-tab-bar:not(.mdc-tab-bar-upgraded) .mdc-tab::after,\n.mdc-theme--dark .mdc-tab-bar:not(.mdc-tab-bar-upgraded) .mdc-tab::after {\n  /* \@alternate */\n  background-color: white;\n  background-color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-toolbar .mdc-tab-bar:not(.mdc-tab-bar-upgraded) .mdc-tab::after {\n  /* \@alternate */\n  background-color: white;\n  background-color: var(--mdc-theme-text-primary-on-primary, white);\n}\n\n.mdc-tab-bar:not(.mdc-tab-bar-upgraded) .mdc-tab--active::after, .mdc-tab-bar:not(.mdc-tab-bar-upgraded) .mdc-tab:active::after, .mdc-tab-bar:not(.mdc-tab-bar-upgraded) .mdc-tab:hover::after {\n  display: block;\n}\n\n.mdc-tab-bar:not(.mdc-tab-bar-upgraded) .mdc-tab:not(.mdc-tab--active):hover::after {\n  opacity: .38;\n}\n\n.mdc-tab-bar:not(.mdc-tab-bar-upgraded) .mdc-tab--active, .mdc-tab-bar:not(.mdc-tab-bar-upgraded) .mdc-tab:not(.mdc-tab--active):active::after {\n  opacity: .87;\n}\n\n.mdc-tab-bar--icons-with-text:not(.mdc-tab-bar-upgraded) .mdc-tab::after {\n  top: 70px;\n}\n\n.mdc-tab.mdc-ripple-upgraded {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.mdc-tab.mdc-ripple-upgraded::before, .mdc-tab.mdc-ripple-upgraded::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n  will-change: transform, opacity;\n}\n\n.mdc-tab.mdc-ripple-upgraded::before {\n  transition: opacity 15ms linear;\n}\n\n.mdc-tab.mdc-ripple-upgraded.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-tab.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded::after {\n  top: var(--mdc-ripple-top, 0);\n  left: var(--mdc-ripple-left, 0);\n}\n\n.mdc-tab.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 225ms mdc-ripple-fg-radius-in forwards, 75ms mdc-ripple-fg-opacity-in forwards;\n}\n\n.mdc-tab.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-deactivation::after {\n  animation: 150ms mdc-ripple-fg-opacity-out;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n\n.mdc-tab.mdc-ripple-upgraded::before, .mdc-tab.mdc-ripple-upgraded::after {\n  background-color: black;\n}\n\n.mdc-tab.mdc-ripple-upgraded:hover::before {\n  opacity: 0.04;\n}\n\n.mdc-tab.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):focus::before, .mdc-tab.mdc-ripple-upgraded.mdc-ripple-upgraded--background-focused::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n\n.mdc-tab.mdc-ripple-upgraded:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n\n.mdc-tab.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.16;\n}\n\n.mdc-tab.mdc-ripple-upgraded.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.16;\n}\n\n.mdc-tab.mdc-ripple-upgraded::before, .mdc-tab.mdc-ripple-upgraded::after {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n\n.mdc-tab.mdc-ripple-upgraded.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-tab.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded::before {\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-tab.mdc-ripple-upgraded.mdc-ripple-upgraded::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n\n.mdc-tab-bar--theme-dark .mdc-tab.mdc-ripple-upgraded::before, .mdc-tab-bar--theme-dark .mdc-tab.mdc-ripple-upgraded::after,\n.mdc-theme--dark .mdc-tab.mdc-ripple-upgraded::before,\n.mdc-theme--dark .mdc-tab.mdc-ripple-upgraded::after {\n  /* \@alternate */\n  background-color: white;\n}\n\n\@supports not (-ms-ime-align: auto) {\n  .mdc-tab-bar--theme-dark .mdc-tab.mdc-ripple-upgraded::before, .mdc-tab-bar--theme-dark .mdc-tab.mdc-ripple-upgraded::after,\n  .mdc-theme--dark .mdc-tab.mdc-ripple-upgraded::before,\n  .mdc-theme--dark .mdc-tab.mdc-ripple-upgraded::after {\n    background-color: var(--mdc-theme-text-primary-on-dark, white);\n  }\n}\n\n.mdc-tab-bar--theme-dark .mdc-tab.mdc-ripple-upgraded:hover::before,\n.mdc-theme--dark .mdc-tab.mdc-ripple-upgraded:hover::before {\n  opacity: 0.08;\n}\n\n.mdc-tab-bar--theme-dark .mdc-tab.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):focus::before, .mdc-tab-bar--theme-dark .mdc-tab.mdc-ripple-upgraded.mdc-ripple-upgraded--background-focused::before,\n.mdc-theme--dark .mdc-tab.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):focus::before,\n.mdc-theme--dark .mdc-tab.mdc-ripple-upgraded.mdc-ripple-upgraded--background-focused::before {\n  transition-duration: 75ms;\n  opacity: 0.24;\n}\n\n.mdc-tab-bar--theme-dark .mdc-tab.mdc-ripple-upgraded:not(.mdc-ripple-upgraded)::after,\n.mdc-theme--dark .mdc-tab.mdc-ripple-upgraded:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n\n.mdc-tab-bar--theme-dark .mdc-tab.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):active::after,\n.mdc-theme--dark .mdc-tab.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.32;\n}\n\n.mdc-tab-bar--theme-dark .mdc-tab.mdc-ripple-upgraded.mdc-ripple-upgraded,\n.mdc-theme--dark .mdc-tab.mdc-ripple-upgraded.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.32;\n}\n\n.mdc-toolbar .mdc-tab.mdc-ripple-upgraded::before, .mdc-toolbar .mdc-tab.mdc-ripple-upgraded::after {\n  /* \@alternate */\n  background-color: white;\n}\n\n\@supports not (-ms-ime-align: auto) {\n  .mdc-toolbar .mdc-tab.mdc-ripple-upgraded::before, .mdc-toolbar .mdc-tab.mdc-ripple-upgraded::after {\n    background-color: var(--mdc-theme-text-primary-on-primary, white);\n  }\n}\n\n.mdc-toolbar .mdc-tab.mdc-ripple-upgraded:hover::before {\n  opacity: 0.08;\n}\n\n.mdc-toolbar .mdc-tab.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):focus::before, .mdc-toolbar .mdc-tab.mdc-ripple-upgraded.mdc-ripple-upgraded--background-focused::before {\n  transition-duration: 75ms;\n  opacity: 0.24;\n}\n\n.mdc-toolbar .mdc-tab.mdc-ripple-upgraded:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n\n.mdc-toolbar .mdc-tab.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.32;\n}\n\n.mdc-toolbar .mdc-tab.mdc-ripple-upgraded.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.32;\n}\n\n.mdc-tab.mdc-ripple-upgraded:focus {\n  outline: none;\n}\n\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n.mdc-tab-bar {\n  display: table;\n  position: relative;\n  height: 48px;\n  margin: 0 auto;\n  text-transform: uppercase;\n}\n\n.mdc-tab-bar__indicator {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  /* \@alternate */\n  background-color: rgba(0, 0, 0, 0.87);\n  background-color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n  transform-origin: left top;\n  transition: transform 240ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  will-change: transform;\n  visibility: hidden;\n}\n\n.mdc-tab-bar--theme-dark .mdc-tab-bar__indicator,\n.mdc-theme--dark .mdc-tab-bar__indicator {\n  /* \@alternate */\n  background-color: white;\n  background-color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-toolbar .mdc-tab-bar .mdc-tab {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.7);\n  color: var(--mdc-theme-text-secondary-on-primary, rgba(255, 255, 255, 0.7));\n}\n\n.mdc-tab-bar--theme-dark .mdc-toolbar .mdc-tab-bar .mdc-tab,\n.mdc-theme--dark .mdc-toolbar .mdc-tab-bar .mdc-tab {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.7);\n  color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7));\n}\n\n.mdc-toolbar .mdc-tab-bar .mdc-tab--active,\n.mdc-toolbar .mdc-tab-bar .mdc-tab:hover {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-primary, white);\n}\n\n.mdc-tab-bar--theme-dark .mdc-toolbar .mdc-tab-bar .mdc-tab--active,\n.mdc-theme--dark .mdc-toolbar .mdc-tab-bar .mdc-tab--active, .mdc-tab-bar--theme-dark\n.mdc-toolbar .mdc-tab-bar .mdc-tab:hover,\n.mdc-theme--dark\n.mdc-toolbar .mdc-tab-bar .mdc-tab:hover {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-toolbar .mdc-tab-bar .mdc-tab-bar__indicator {\n  /* \@alternate */\n  background-color: white;\n  background-color: var(--mdc-theme-text-primary-on-primary, white);\n}\n\n.mdc-tab-bar--theme-dark .mdc-toolbar .mdc-tab-bar .mdc-tab-bar__indicator,\n.mdc-theme--dark .mdc-toolbar .mdc-tab-bar .mdc-tab-bar__indicator {\n  /* \@alternate */\n  background-color: white;\n  background-color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-tab-bar--icons-with-text {\n  height: 72px;\n}\n\n.mdc-tab-bar--indicator-primary .mdc-tab-bar__indicator,\n.mdc-toolbar .mdc-tab-bar--indicator-primary .mdc-tab-bar__indicator {\n  /* \@alternate */\n  background-color: #3f51b5;\n  background-color: var(--mdc-theme-primary, #3f51b5);\n}\n\n.mdc-tab-bar--theme-dark .mdc-tab-bar--indicator-primary .mdc-tab-bar__indicator,\n.mdc-theme--dark .mdc-tab-bar--indicator-primary .mdc-tab-bar__indicator, .mdc-tab-bar--theme-dark\n.mdc-toolbar .mdc-tab-bar--indicator-primary .mdc-tab-bar__indicator,\n.mdc-theme--dark\n.mdc-toolbar .mdc-tab-bar--indicator-primary .mdc-tab-bar__indicator {\n  /* \@alternate */\n  background-color: #3f51b5;\n  background-color: var(--mdc-theme-primary, #3f51b5);\n}\n\n.mdc-tab-bar--indicator-primary.mdc-tab-bar:not(.mdc-tab-bar-upgraded) .mdc-tab::after,\n.mdc-toolbar .mdc-tab-bar--indicator-primary.mdc-tab-bar:not(.mdc-tab-bar-upgraded) .mdc-tab::after {\n  /* \@alternate */\n  background-color: #3f51b5;\n  background-color: var(--mdc-theme-primary, #3f51b5);\n}\n\n.mdc-tab-bar--indicator-accent .mdc-tab-bar__indicator,\n.mdc-toolbar .mdc-tab-bar--indicator-accent .mdc-tab-bar__indicator {\n  /* \@alternate */\n  background-color: #ff4081;\n  background-color: var(--mdc-theme-secondary, #ff4081);\n}\n\n.mdc-tab-bar--theme-dark .mdc-tab-bar--indicator-accent .mdc-tab-bar__indicator,\n.mdc-theme--dark .mdc-tab-bar--indicator-accent .mdc-tab-bar__indicator, .mdc-tab-bar--theme-dark\n.mdc-toolbar .mdc-tab-bar--indicator-accent .mdc-tab-bar__indicator,\n.mdc-theme--dark\n.mdc-toolbar .mdc-tab-bar--indicator-accent .mdc-tab-bar__indicator {\n  /* \@alternate */\n  background-color: #ff4081;\n  background-color: var(--mdc-theme-secondary, #ff4081);\n}\n\n.mdc-tab-bar--indicator-accent.mdc-tab-bar:not(.mdc-tab-bar-upgraded) .mdc-tab::after,\n.mdc-toolbar .mdc-tab-bar--indicator-accent.mdc-tab-bar:not(.mdc-tab-bar-upgraded) .mdc-tab::after {\n  /* \@alternate */\n  background-color: #ff4081;\n  background-color: var(--mdc-theme-secondary, #ff4081);\n}\n\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n.mdc-tab-bar-scroller {\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n  background-color: inherit;\n  overflow: hidden;\n}\n\n.mdc-tab-bar-scroller__scroll-frame {\n  display: flex;\n  position: relative;\n  flex: 1;\n  justify-content: flex-start;\n  overflow: hidden;\n}\n\n.mdc-tab-bar-scroller__scroll-frame__tabs {\n  transition: transform 240ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  will-change: transform;\n}\n\n.mdc-tab-bar-scroller__indicator {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  cursor: pointer;\n  visibility: hidden;\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54));\n}\n\n.mdc-tab-bar--theme-dark .mdc-tab-bar-scroller__indicator,\n.mdc-theme--dark .mdc-tab-bar-scroller__indicator {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.7);\n  color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7));\n}\n\n.mdc-tab-bar-scroller__indicator:hover {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n}\n\n.mdc-tab-bar--theme-dark .mdc-tab-bar-scroller__indicator:hover,\n.mdc-theme--dark .mdc-tab-bar-scroller__indicator:hover {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-tab-bar-scroller__indicator__inner {\n  color: inherit;\n  text-decoration: inherit;\n  cursor: inherit;\n}\n\n.mdc-tab-bar-scroller__indicator__inner:focus {\n  outline-color: inherit;\n}\n\n[dir=\"rtl\"] .mdc-tab-bar-scroller .mdc-tab-bar-scroller__indicator__inner,\n.mdc-tab-bar-scroller[dir=\"rtl\"] .mdc-tab-bar-scroller__indicator__inner {\n  transform: rotate(180deg);\n}\n\n.mdc-tab-bar-scroller__indicator__inner:hover {\n  color: inherit;\n}\n\n.mdc-tab-bar--theme-dark .mdc-tab-bar-scroller__indicator__inner:hover,\n.mdc-theme--dark .mdc-tab-bar-scroller__indicator__inner:hover {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.7);\n  color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7));\n}\n\n.mdc-tab-bar-scroller__indicator--enabled {\n  visibility: visible;\n}\nmwc-tabbar.hydrated{visibility:inherit}","mwc-textfield","\@keyframes mdc-ripple-fg-radius-in {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n\n\@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0.16);\n  }\n}\n\n\@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0.16);\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.mdc-ripple-surface--test-edge-var-bug {\n  --mdc-ripple-surface-test-edge-var: 1px solid #000;\n  visibility: hidden;\n}\n\n.mdc-ripple-surface--test-edge-var-bug::before {\n  border: var(--mdc-ripple-surface-test-edge-var);\n}\n\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n.mdc-text-field__bottom-line {\n  /* \@alternate */\n  background-color: #3f51b5;\n  background-color: var(--mdc-theme-primary, #3f51b5);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  transform: scaleX(0);\n  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 0;\n  z-index: 2;\n}\n\n.mdc-text-field__bottom-line--active {\n  transform: scaleX(1);\n}\n\n.mdc-text-field .mdc-text-field__input:focus ~ .mdc-text-field__bottom-line {\n  opacity: 1;\n}\n\n.mdc-text-field-helper-text {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38));\n  margin: 0;\n  transition: opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 0;\n  font-size: .75rem;\n  will-change: opacity;\n}\n\n.mdc-text-field-helper-text--theme-dark,\n.mdc-theme--dark .mdc-text-field-helper-text {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-text-field + .mdc-text-field-helper-text {\n  margin-bottom: 8px;\n}\n\n.mdc-text-field-helper-text--persistent {\n  transition: none;\n  opacity: 1;\n  will-change: initial;\n}\n\n\@keyframes invalid-shake-float-above-standard {\n  0% {\n    transform: translateX(0) translateY(-100%) scale(0.75, 0.75);\n  }\n  33% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n    transform: translateX(10px) translateY(-100%) scale(0.75, 0.75);\n  }\n  66% {\n    animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n    transform: translateX(-5px) translateY(-100%) scale(0.75, 0.75);\n  }\n  100% {\n    transform: translateX(0) translateY(-100%) scale(0.75, 0.75);\n  }\n}\n\n\@keyframes invalid-shake-float-above-box {\n  0% {\n    transform: translateX(0) translateY(-50%) scale(0.75, 0.75);\n  }\n  33% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n    transform: translateX(10px) translateY(-50%) scale(0.75, 0.75);\n  }\n  66% {\n    animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n    transform: translateX(-5px) translateY(-50%) scale(0.75, 0.75);\n  }\n  100% {\n    transform: translateX(0) translateY(-50%) scale(0.75, 0.75);\n  }\n}\n\n.mdc-text-field {\n  display: inline-block;\n  position: relative;\n  margin-bottom: 8px;\n  will-change: opacity, transform, color;\n}\n\n.mdc-text-field__input {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  letter-spacing: 0.04em;\n  width: 100%;\n  padding: 0 0 8px;\n  transition: opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n  background: none;\n  font-size: inherit;\n  appearance: none;\n}\n\n.mdc-text-field__input::placeholder {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38));\n  transition: color 180ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 1;\n}\n\n.mdc-text-field__input:hover {\n  border-color: black;\n}\n\n.mdc-text-field__input:focus {\n  outline: none;\n}\n\n.mdc-text-field__input:focus::placeholder {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.mdc-text-field__input:invalid {\n  box-shadow: none;\n}\n\n.mdc-text-field__input--theme-dark,\n.mdc-theme--dark .mdc-text-field__input {\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n}\n\n.mdc-text-field__input--theme-dark:hover,\n.mdc-theme--dark .mdc-text-field__input:hover {\n  border-bottom: 1px solid white;\n}\n\n.mdc-text-field__input--theme-dark::placeholder,\n.mdc-theme--dark .mdc-text-field__input::placeholder {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-text-field__input--theme-dark:focus::placeholder,\n.mdc-theme--dark .mdc-text-field__input:focus::placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.mdc-text-field__label {\n  position: absolute;\n  bottom: 8px;\n  left: 0;\n  transform-origin: left top;\n  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), color 180ms cubic-bezier(0.4, 0, 0.2, 1);\n  color: rgba(0, 0, 0, 0.5);\n  cursor: text;\n}\n\n[dir=\"rtl\"] .mdc-text-field .mdc-text-field__label,\n.mdc-text-field[dir=\"rtl\"] .mdc-text-field__label {\n  right: 0;\n  left: auto;\n  transform-origin: right top;\n}\n\n.mdc-text-field--theme-dark .mdc-text-field__label,\n.mdc-theme--dark .mdc-text-field__label {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.mdc-text-field__label--float-above {\n  transform: translateY(-100%) scale(0.75, 0.75);\n  cursor: auto;\n}\n\n.mdc-text-field__input:-webkit-autofill + .mdc-text-field__label {\n  transform: translateY(-100%) scale(0.75, 0.75);\n  cursor: auto;\n}\n\n.mdc-text-field--box {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: transparent;\n  border-radius: 4px 4px 0 0;\n  display: inline-flex;\n  position: relative;\n  height: 56px;\n  background-color: rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n}\n\n.mdc-text-field--box::before, .mdc-text-field--box::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n  will-change: transform, opacity;\n}\n\n.mdc-text-field--box::before {\n  transition: opacity 15ms linear;\n}\n\n.mdc-text-field--box.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-text-field--box.mdc-ripple-upgraded--unbounded::after {\n  top: var(--mdc-ripple-top, 0);\n  left: var(--mdc-ripple-left, 0);\n}\n\n.mdc-text-field--box.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 225ms mdc-ripple-fg-radius-in forwards, 75ms mdc-ripple-fg-opacity-in forwards;\n}\n\n.mdc-text-field--box.mdc-ripple-upgraded--foreground-deactivation::after {\n  animation: 150ms mdc-ripple-fg-opacity-out;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n\n.mdc-text-field--box::before, .mdc-text-field--box::after {\n  /* \@alternate */\n  background-color: rgba(0, 0, 0, 0.87);\n}\n\n\@supports not (-ms-ime-align: auto) {\n  .mdc-text-field--box::before, .mdc-text-field--box::after {\n    background-color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n  }\n}\n\n.mdc-text-field--box:hover::before {\n  opacity: 0.04;\n}\n\n.mdc-text-field--box:not(.mdc-ripple-upgraded):focus::before, .mdc-text-field--box:not(.mdc-ripple-upgraded):focus-within::before, .mdc-text-field--box.mdc-ripple-upgraded--background-focused::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n\n.mdc-text-field--box:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n\n.mdc-text-field--box:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.16;\n}\n\n.mdc-text-field--box.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.16;\n}\n\n.mdc-text-field--box::before, .mdc-text-field--box::after {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n\n.mdc-text-field--box.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-text-field--box.mdc-ripple-upgraded--unbounded::before {\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-text-field--box.mdc-ripple-upgraded::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n\n.mdc-text-field--theme-dark.mdc-text-field--box,\n.mdc-theme--dark .mdc-text-field--box {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.mdc-text-field--theme-dark.mdc-text-field--box::before, .mdc-text-field--theme-dark.mdc-text-field--box::after,\n.mdc-theme--dark .mdc-text-field--box::before,\n.mdc-theme--dark .mdc-text-field--box::after {\n  /* \@alternate */\n  background-color: white;\n}\n\n\@supports not (-ms-ime-align: auto) {\n  .mdc-text-field--theme-dark.mdc-text-field--box::before, .mdc-text-field--theme-dark.mdc-text-field--box::after,\n  .mdc-theme--dark .mdc-text-field--box::before,\n  .mdc-theme--dark .mdc-text-field--box::after {\n    background-color: var(--mdc-theme-text-primary-on-dark, white);\n  }\n}\n\n.mdc-text-field--theme-dark.mdc-text-field--box:hover::before,\n.mdc-theme--dark .mdc-text-field--box:hover::before {\n  opacity: 0.08;\n}\n\n.mdc-text-field--theme-dark.mdc-text-field--box:not(.mdc-ripple-upgraded):focus::before, .mdc-text-field--theme-dark.mdc-text-field--box:not(.mdc-ripple-upgraded):focus-within::before, .mdc-text-field--theme-dark.mdc-text-field--box.mdc-ripple-upgraded--background-focused::before,\n.mdc-theme--dark .mdc-text-field--box:not(.mdc-ripple-upgraded):focus::before,\n.mdc-theme--dark .mdc-text-field--box:not(.mdc-ripple-upgraded):focus-within::before,\n.mdc-theme--dark .mdc-text-field--box.mdc-ripple-upgraded--background-focused::before {\n  transition-duration: 75ms;\n  opacity: 0.24;\n}\n\n.mdc-text-field--theme-dark.mdc-text-field--box:not(.mdc-ripple-upgraded)::after,\n.mdc-theme--dark .mdc-text-field--box:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n\n.mdc-text-field--theme-dark.mdc-text-field--box:not(.mdc-ripple-upgraded):active::after,\n.mdc-theme--dark .mdc-text-field--box:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.32;\n}\n\n.mdc-text-field--theme-dark.mdc-text-field--box.mdc-ripple-upgraded,\n.mdc-theme--dark .mdc-text-field--box.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.32;\n}\n\n.mdc-text-field--box .mdc-text-field__input {\n  align-self: flex-end;\n  box-sizing: border-box;\n  height: 100%;\n  padding: 20px 16px 0;\n}\n\n.mdc-text-field--box .mdc-text-field__label {\n  left: 16px;\n  right: initial;\n  position: absolute;\n  bottom: 20px;\n  width: calc(100% - 48px);\n  color: rgba(0, 0, 0, 0.6);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  pointer-events: none;\n  overflow: hidden;\n  will-change: transform;\n}\n\n[dir=\"rtl\"] .mdc-text-field--box .mdc-text-field__label, .mdc-text-field--box .mdc-text-field__label[dir=\"rtl\"] {\n  left: initial;\n  right: 16px;\n}\n\n.mdc-text-field--theme-dark .mdc-text-field--box .mdc-text-field__label,\n.mdc-theme--dark .mdc-text-field--box .mdc-text-field__label {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.7);\n  color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7));\n}\n\n.mdc-text-field--box .mdc-text-field__label--float-above {\n  transform: translateY(-50%) scale(0.75, 0.75);\n}\n\n.mdc-text-field--box .mdc-text-field__label--float-above.mdc-text-field__label--shake {\n  animation: invalid-shake-float-above-box 250ms 1;\n}\n\n.mdc-text-field--box.mdc-text-field--disabled {\n  color: rgba(255, 255, 255, 0.3);\n  border-bottom: none;\n  background-color: rgba(0, 0, 0, 0.02);\n}\n\n.mdc-text-field--theme-dark.mdc-text-field--box.mdc-text-field--disabled,\n.mdc-theme--dark .mdc-text-field--box.mdc-text-field--disabled {\n  background-color: #303030;\n  color: rgba(0, 0, 0, 0.38);\n  border-bottom: none;\n}\n\n.mdc-text-field--box.mdc-text-field--disabled .mdc-text-field__label {\n  bottom: 20px;\n}\n\n.mdc-text-field--box.mdc-text-field--disabled .mdc-text-field__icon {\n  color: rgba(0, 0, 0, 0.3);\n}\n\n.mdc-text-field--box.mdc-text-field--disabled .mdc-text-field__icon--theme-dark,\n.mdc-theme--dark .mdc-text-field--box.mdc-text-field--disabled .mdc-text-field__icon {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.mdc-text-field--box.mdc-text-field--dense .mdc-text-field__input {\n  padding: 12px 12px 0;\n}\n\n.mdc-text-field--box.mdc-text-field--dense .mdc-text-field__label {\n  left: 12px;\n  right: initial;\n  bottom: 20px;\n}\n\n[dir=\"rtl\"] .mdc-text-field--box.mdc-text-field--dense .mdc-text-field__label, .mdc-text-field--box.mdc-text-field--dense .mdc-text-field__label[dir=\"rtl\"] {\n  left: initial;\n  right: 12px;\n}\n\n.mdc-text-field--box.mdc-text-field--dense .mdc-text-field__label--float-above {\n  transform: translateY(calc(-75% - 2px)) scale(0.923, 0.923);\n}\n\n.mdc-text-field--with-leading-icon .mdc-text-field__icon,\n.mdc-text-field--with-trailing-icon .mdc-text-field__icon {\n  position: absolute;\n  bottom: 16px;\n  cursor: pointer;\n}\n\n.mdc-text-field--theme-dark .mdc-text-field--with-leading-icon .mdc-text-field__icon,\n.mdc-theme--dark .mdc-text-field--with-leading-icon .mdc-text-field__icon, .mdc-text-field--theme-dark\n.mdc-text-field--with-trailing-icon .mdc-text-field__icon,\n.mdc-theme--dark\n.mdc-text-field--with-trailing-icon .mdc-text-field__icon {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.7);\n  color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7));\n}\n\n.mdc-text-field--with-leading-icon .mdc-text-field__input {\n  padding-left: 48px;\n  padding-right: 15px;\n}\n\n[dir=\"rtl\"] .mdc-text-field--with-leading-icon .mdc-text-field__input, .mdc-text-field--with-leading-icon .mdc-text-field__input[dir=\"rtl\"] {\n  padding-left: 15px;\n  padding-right: 48px;\n}\n\n.mdc-text-field--with-leading-icon .mdc-text-field__icon {\n  left: 15px;\n  right: initial;\n}\n\n[dir=\"rtl\"] .mdc-text-field--with-leading-icon .mdc-text-field__icon, .mdc-text-field--with-leading-icon .mdc-text-field__icon[dir=\"rtl\"] {\n  left: initial;\n  right: 15px;\n}\n\n.mdc-text-field--with-leading-icon .mdc-text-field__label {\n  left: 48px;\n  right: initial;\n}\n\n[dir=\"rtl\"] .mdc-text-field--with-leading-icon .mdc-text-field__label, .mdc-text-field--with-leading-icon .mdc-text-field__label[dir=\"rtl\"] {\n  left: initial;\n  right: 48px;\n}\n\n.mdc-text-field--with-trailing-icon .mdc-text-field__input {\n  padding-left: 15px;\n  padding-right: 48px;\n}\n\n[dir=\"rtl\"] .mdc-text-field--with-trailing-icon .mdc-text-field__input, .mdc-text-field--with-trailing-icon .mdc-text-field__input[dir=\"rtl\"] {\n  padding-left: 48px;\n  padding-right: 15px;\n}\n\n.mdc-text-field--with-trailing-icon .mdc-text-field__icon {\n  left: initial;\n  right: 15px;\n}\n\n[dir=\"rtl\"] .mdc-text-field--with-trailing-icon .mdc-text-field__icon, .mdc-text-field--with-trailing-icon .mdc-text-field__icon[dir=\"rtl\"] {\n  left: 15px;\n  right: initial;\n}\n\n.mdc-text-field__icon:not([tabindex]),\n.mdc-text-field__icon[tabindex=\"-1\"] {\n  cursor: default;\n  pointer-events: none;\n}\n\n.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon,\n.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon {\n  bottom: 16px;\n  transform: scale(0.8);\n}\n\n.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input {\n  padding-left: 38px;\n  padding-right: 12px;\n}\n\n[dir=\"rtl\"] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input, .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input[dir=\"rtl\"] {\n  padding-left: 12px;\n  padding-right: 38px;\n}\n\n.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon {\n  left: 12px;\n  right: initial;\n}\n\n[dir=\"rtl\"] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon, .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon[dir=\"rtl\"] {\n  left: initial;\n  right: 12px;\n}\n\n.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__label {\n  left: 38px;\n  right: initial;\n}\n\n[dir=\"rtl\"] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__label, .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__label[dir=\"rtl\"] {\n  left: initial;\n  right: 38px;\n}\n\n.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input {\n  padding-left: 12px;\n  padding-right: 38px;\n}\n\n[dir=\"rtl\"] .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input, .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input[dir=\"rtl\"] {\n  padding-left: 38px;\n  padding-right: 12px;\n}\n\n.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon {\n  left: initial;\n  right: 12px;\n}\n\n[dir=\"rtl\"] .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon, .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon[dir=\"rtl\"] {\n  left: 12px;\n  right: initial;\n}\n\n.mdc-text-field--upgraded:not(.mdc-text-field--fullwidth):not(.mdc-text-field--box) {\n  display: inline-flex;\n  position: relative;\n  align-items: flex-end;\n  box-sizing: border-box;\n  margin-top: 16px;\n}\n\n.mdc-text-field--upgraded:not(.mdc-text-field--fullwidth):not(.mdc-text-field--box):not(.mdc-text-field--textarea) {\n  height: 48px;\n}\n\n.mdc-text-field--upgraded:not(.mdc-text-field--fullwidth):not(.mdc-text-field--box) .mdc-text-field__label {\n  pointer-events: none;\n}\n\n.mdc-text-field--invalid .mdc-text-field__label {\n  color: #d50000;\n}\n\n.mdc-text-field--invalid .mdc-text-field__input {\n  border-color: #d50000;\n}\n\n.mdc-text-field--invalid .mdc-text-field__bottom-line {\n  background-color: #d50000;\n}\n\n.mdc-text-field--invalid.mdc-text-field--textarea {\n  border-color: #d50000;\n}\n\n.mdc-text-field__label--float-above.mdc-text-field__label--shake {\n  animation: invalid-shake-float-above-standard 250ms 1;\n}\n\n.mdc-text-field--dense {\n  margin-top: 12px;\n  margin-bottom: 4px;\n  font-size: .813rem;\n}\n\n.mdc-text-field--dense .mdc-text-field__label--float-above {\n  transform: translateY(calc(-100% - 2px)) scale(0.923, 0.923);\n}\n\n.mdc-text-field--disabled {\n  pointer-events: none;\n}\n\n.mdc-text-field--disabled .mdc-text-field__input {\n  border-bottom: 1px dotted rgba(35, 31, 32, 0.26);\n}\n\n.mdc-text-field--theme-dark.mdc-text-field--disabled .mdc-text-field__input,\n.mdc-theme--dark .mdc-text-field--disabled .mdc-text-field__input {\n  border-bottom: 1px dotted rgba(255, 255, 255, 0.3);\n}\n\n.mdc-text-field--disabled .mdc-text-field__input,\n.mdc-text-field--disabled .mdc-text-field__label,\n.mdc-text-field--disabled + .mdc-text-field-helper-text {\n  /* \@alternate */\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));\n}\n\n.mdc-text-field--theme-dark .mdc-text-field--disabled .mdc-text-field__input,\n.mdc-theme--dark .mdc-text-field--disabled .mdc-text-field__input, .mdc-text-field--theme-dark\n.mdc-text-field--disabled .mdc-text-field__label,\n.mdc-theme--dark\n.mdc-text-field--disabled .mdc-text-field__label {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-text-field--theme-dark.mdc-text-field--disabled + .mdc-text-field-helper-text,\n.mdc-theme--dark .mdc-text-field--disabled + .mdc-text-field-helper-text {\n  /* \@alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-text-field--disabled .mdc-text-field__label {\n  bottom: 8px;\n  cursor: default;\n}\n\n.mdc-text-field__input:required + .mdc-text-field__label::after {\n  margin-left: 1px;\n  content: \"*\";\n}\n\n.mdc-text-field--focused .mdc-text-field__input:required + .mdc-text-field__label::after {\n  color: #d50000;\n}\n\n.mdc-text-field--theme-dark.mdc-text-field--focused .mdc-text-field__input:required + .mdc-text-field__label::after,\n.mdc-theme--dark .mdc-text-field--focused .mdc-text-field__input:required + .mdc-text-field__label::after {\n  color: #ff6e6e;\n}\n\n.mdc-text-field--textarea {\n  border-radius: 4px;\n  display: flex;\n  height: initial;\n  transition: none;\n  border: 1px solid rgba(0, 0, 0, 0.73);\n  overflow: hidden;\n}\n\n.mdc-text-field--textarea .mdc-text-field__label {\n  border-radius: 4px 4px 0 0;\n}\n\n.mdc-text-field--textarea .mdc-text-field__input {\n  border-radius: 2px;\n}\n\n.mdc-text-field--theme-dark .mdc-text-field--textarea,\n.mdc-theme--dark .mdc-text-field--textarea {\n  border-color: white;\n}\n\n.mdc-text-field--textarea .mdc-text-field__input {\n  padding: 16px;\n  padding-top: 32px;\n  border: 1px solid transparent;\n}\n\n.mdc-text-field--textarea .mdc-text-field__input:focus {\n  /* \@alternate */\n  border-color: #3f51b5;\n  border-color: var(--mdc-theme-primary, #3f51b5);\n}\n\n.mdc-text-field--textarea .mdc-text-field__input:invalid:not(:focus) {\n  border-color: #d50000;\n}\n\n.mdc-text-field--theme-dark .mdc-text-field--textarea .mdc-text-field__input:hover,\n.mdc-theme--dark .mdc-text-field--textarea .mdc-text-field__input:hover {\n  border-bottom-color: transparent;\n}\n\n.mdc-text-field--theme-dark .mdc-text-field--textarea .mdc-text-field__input:focus,\n.mdc-theme--dark .mdc-text-field--textarea .mdc-text-field__input:focus {\n  /* \@alternate */\n  border-color: #ff4081;\n  border-color: var(--mdc-theme-secondary, #ff4081);\n}\n\n.mdc-text-field--theme-dark .mdc-text-field--textarea .mdc-text-field__input:invalid:not(:focus),\n.mdc-theme--dark .mdc-text-field--textarea .mdc-text-field__input:invalid:not(:focus) {\n  border-color: #ff6e6e;\n}\n\n.mdc-text-field--textarea .mdc-text-field__label {\n  left: 1px;\n  right: initial;\n  top: 18px;\n  bottom: auto;\n  padding: 8px 16px;\n  background-color: white;\n}\n\n[dir=\"rtl\"] .mdc-text-field--textarea .mdc-text-field__label, .mdc-text-field--textarea .mdc-text-field__label[dir=\"rtl\"] {\n  left: initial;\n  right: 1px;\n}\n\n.mdc-text-field--theme-dark .mdc-text-field--textarea .mdc-text-field__label,\n.mdc-theme--dark .mdc-text-field--textarea .mdc-text-field__label {\n  background-color: #303030;\n}\n\n.mdc-text-field--textarea .mdc-text-field__label--float-above {\n  transform: translateY(-50%) scale(0.923, 0.923);\n}\n\n.mdc-text-field--textarea.mdc-text-field--disabled {\n  border-style: solid;\n  border-color: rgba(35, 31, 32, 0.26);\n  background-color: #f9f9f9;\n}\n\n.mdc-text-field--theme-dark .mdc-text-field--textarea.mdc-text-field--disabled,\n.mdc-theme--dark .mdc-text-field--textarea.mdc-text-field--disabled {\n  border-color: rgba(255, 255, 255, 0.3);\n  background-color: #2f2f2f;\n}\n\n.mdc-text-field--textarea.mdc-text-field--disabled .mdc-text-field__label {\n  background-color: #f9f9f9;\n}\n\n.mdc-text-field--theme-dark .mdc-text-field--textarea.mdc-text-field--disabled .mdc-text-field__label,\n.mdc-theme--dark .mdc-text-field--textarea.mdc-text-field--disabled .mdc-text-field__label {\n  background-color: #2f2f2f;\n}\n\n.mdc-text-field--textarea:not(.mdc-text-field--upgraded) .mdc-text-field__input {\n  padding-top: 16px;\n}\n\n.mdc-text-field--textarea.mdc-text-field--focused {\n  /* \@alternate */\n  border-color: #3f51b5;\n  border-color: var(--mdc-theme-primary, #3f51b5);\n}\n\n.mdc-text-field--fullwidth {\n  width: 100%;\n}\n\n.mdc-text-field--fullwidth:not(.mdc-text-field--textarea) {\n  display: block;\n  box-sizing: border-box;\n  height: 56px;\n  margin: 0;\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  outline: none;\n}\n\n.mdc-text-field--fullwidth:not(.mdc-text-field--textarea) .mdc-text-field__input {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  resize: none;\n  border: none !important;\n}\n\n.mdc-text-field--fullwidth--theme-dark,\n.mdc-theme--dark .mdc-text-field--fullwidth {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n}\n\n.mdc-text-field:not(.mdc-text-field--upgraded):not(.mdc-text-field--textarea) .mdc-text-field__input {\n  transition: border-bottom-color 180ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\n.mdc-text-field:not(.mdc-text-field--upgraded) .mdc-text-field__input:focus {\n  /* \@alternate */\n  border-color: #3f51b5;\n  border-color: var(--mdc-theme-primary, #3f51b5);\n}\n\n.mdc-text-field:not(.mdc-text-field--upgraded) .mdc-text-field__input:disabled {\n  color: rgba(0, 0, 0, 0.38);\n  border-bottom-style: dotted;\n}\n\n.mdc-text-field:not(.mdc-text-field--upgraded) .mdc-text-field__input:invalid:not(:focus) {\n  border-color: #d50000;\n}\n\n.mdc-text-field--theme-dark:not(.mdc-text-field--upgraded) .mdc-text-field__input:not(:focus),\n.mdc-theme--dark .mdc-text-field:not(.mdc-text-field--upgraded) .mdc-text-field__input:not(:focus) {\n  border-color: rgba(255, 255, 255, 0.12);\n}\n\n.mdc-text-field--theme-dark:not(.mdc-text-field--upgraded) .mdc-text-field__input:disabled,\n.mdc-theme--dark .mdc-text-field:not(.mdc-text-field--upgraded) .mdc-text-field__input:disabled {\n  color: rgba(0, 0, 0, 0.38);\n  border-color: rgba(255, 255, 255, 0.3);\n  background-color: #2f2f2f;\n}\n\n.mdc-text-field--theme-dark:not(.mdc-text-field--upgraded) .mdc-text-field__input:invalid:not(:focus),\n.mdc-theme--dark .mdc-text-field:not(.mdc-text-field--upgraded) .mdc-text-field__input:invalid:not(:focus) {\n  border-color: #ff6e6e;\n}\n\n.mdc-text-field--box:not(.mdc-text-field--upgraded) {\n  height: 56px;\n}\n\n.mdc-text-field--box:not(.mdc-text-field--upgraded)::before, .mdc-text-field--box:not(.mdc-text-field--upgraded)::after {\n  border-radius: 0;\n}\n\n.mdc-text-field--box:not(.mdc-text-field--upgraded) .mdc-text-field__input {\n  padding-top: 0;\n}\n\n.mdc-text-field--dense + .mdc-text-field-helper-text {\n  margin-bottom: 4px;\n}\n\n.mdc-text-field--focused + .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg) {\n  opacity: 1;\n}\n\n.mdc-text-field--box + .mdc-text-field-helper-text {\n  margin-right: 16px;\n  margin-left: 16px;\n}\n\n.mdc-text-field--invalid + .mdc-text-field-helper-text--validation-msg {\n  opacity: 1;\n  color: #d50000;\n}\n\n.mdc-text-field--theme-dark.mdc-text-field--invalid + .mdc-text-field-helper-text--validation-msg,\n.mdc-theme--dark .mdc-text-field--invalid + .mdc-text-field-helper-text--validation-msg {\n  color: #ff6e6e;\n}\n\n.mdc-form-field > .mdc-text-field + label {\n  align-self: flex-start;\n}\nmwc-textfield.hydrated{visibility:inherit}","mwc-theme","\nmwc-theme.hydrated{visibility:inherit}","mwc-toolbar","/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct CSS rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n * If $color has an alpha channel, it will be ignored and overridden. To increase the opacity of the shadow, use\n * $opacity-boost.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   \@include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     \@include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   \@include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   \@include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `\@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   \@include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   \@include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    \@include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/**\n * Applies styles to the different types of icons that can exist in toolbars.\n * Both .mdc-toolbar__icon and .mdc-toolbar__menu-icon share all styles except for\n * horizontal padding.\n */\n.mdc-toolbar {\n  /* \@alternate */\n  background-color: #3f51b5;\n  background-color: var(--mdc-theme-primary, #3f51b5);\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-primary, white);\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  justify-content: space-between;\n  box-sizing: border-box;\n  width: 100%;\n}\n\n.mdc-toolbar__row {\n  display: flex;\n  position: relative;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n  height: auto;\n  min-height: 64px;\n}\n\n\@media (max-width: 959px) and (orientation: landscape) {\n  .mdc-toolbar__row {\n    min-height: 48px;\n  }\n}\n\n\@media (max-width: 599px) {\n  .mdc-toolbar__row {\n    min-height: 56px;\n  }\n}\n\n.mdc-toolbar__section {\n  display: inline-flex;\n  flex: 1;\n  align-items: flex-start;\n  justify-content: center;\n  min-width: 0;\n  height: 100%;\n  z-index: 1;\n}\n\n.mdc-toolbar__section--align-start {\n  justify-content: flex-start;\n  order: -1;\n}\n\n.mdc-toolbar__section--align-end {\n  justify-content: flex-end;\n  order: 1;\n}\n\n.mdc-toolbar__title {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1.25rem;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n  line-height: 2rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  margin-left: 24px;\n  margin-right: 0;\n  align-self: center;\n  padding: 16px 0;\n  line-height: 1.5rem;\n  z-index: 1;\n}\n\n[dir=\"rtl\"] .mdc-toolbar__title, .mdc-toolbar__title[dir=\"rtl\"] {\n  margin-left: 0;\n  margin-right: 24px;\n}\n\n.mdc-toolbar__icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  border: none;\n  background-color: inherit;\n  color: inherit;\n  text-decoration: none;\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-primary, white);\n  padding-right: 12px;\n  padding-left: 12px;\n  cursor: pointer;\n}\n\n.mdc-toolbar__icon:last-of-type {\n  padding-left: 12px;\n  padding-right: 24px;\n}\n\n[dir=\"rtl\"] .mdc-toolbar__icon:last-of-type, .mdc-toolbar__icon:last-of-type[dir=\"rtl\"] {\n  padding-left: 24px;\n  padding-right: 12px;\n}\n\n.mdc-toolbar__menu-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  border: none;\n  background-color: inherit;\n  color: inherit;\n  text-decoration: none;\n  /* \@alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-primary, white);\n  padding-right: 24px;\n  padding-left: 24px;\n  cursor: pointer;\n}\n\n.mdc-toolbar__menu-icon + .mdc-toolbar__title {\n  margin-left: 8px;\n  margin-right: 0;\n}\n\n[dir=\"rtl\"] .mdc-toolbar__menu-icon + .mdc-toolbar__title, .mdc-toolbar__menu-icon + .mdc-toolbar__title[dir=\"rtl\"] {\n  margin-left: 0;\n  margin-right: 8px;\n}\n\n\@media (max-width: 599px) {\n  .mdc-toolbar__title {\n    margin-left: 16px;\n    margin-right: 0;\n  }\n  [dir=\"rtl\"] .mdc-toolbar__title, .mdc-toolbar__title[dir=\"rtl\"] {\n    margin-left: 0;\n    margin-right: 16px;\n  }\n  .mdc-toolbar__icon {\n    padding-right: 8px;\n    padding-left: 8px;\n  }\n  .mdc-toolbar__icon:last-of-type {\n    padding-left: 8px;\n    padding-right: 16px;\n  }\n  [dir=\"rtl\"] .mdc-toolbar__icon:last-of-type, .mdc-toolbar__icon:last-of-type[dir=\"rtl\"] {\n    padding-left: 16px;\n    padding-right: 8px;\n  }\n  .mdc-toolbar__menu-icon {\n    padding-right: 16px;\n    padding-left: 16px;\n  }\n  .mdc-toolbar__menu-icon + .mdc-toolbar__title {\n    margin-left: 16px;\n    margin-right: 0;\n  }\n  [dir=\"rtl\"] .mdc-toolbar__menu-icon + .mdc-toolbar__title, .mdc-toolbar__menu-icon + .mdc-toolbar__title[dir=\"rtl\"] {\n    margin-left: 0;\n    margin-right: 16px;\n  }\n}\n\n.mdc-toolbar--fixed {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 4;\n}\n\n.mdc-toolbar--flexible {\n  --mdc-toolbar-ratio-to-extend-flexible: 4;\n}\n\n.mdc-toolbar--flexible .mdc-toolbar__row:first-child {\n  height: 256px;\n  height: calc(64px * var(--mdc-toolbar-ratio-to-extend-flexible, 4));\n}\n\n\@media (max-width: 599px) {\n  .mdc-toolbar--flexible .mdc-toolbar__row:first-child {\n    height: 224px;\n    height: calc(56px * var(--mdc-toolbar-ratio-to-extend-flexible, 4));\n  }\n}\n\n.mdc-toolbar--flexible .mdc-toolbar__row:first-child::after {\n  position: absolute;\n  content: \"\";\n}\n\n.mdc-toolbar--flexible-default-behavior .mdc-toolbar__title {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 2.125rem;\n  font-weight: 400;\n  letter-spacing: normal;\n  line-height: 2.5rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  align-self: flex-end;\n  line-height: 1.5rem;\n}\n\n.mdc-toolbar--flexible-default-behavior .mdc-toolbar__row:first-child::after {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: opacity .2s ease;\n  opacity: 1;\n}\n\n.mdc-toolbar--flexible-default-behavior.mdc-toolbar--flexible-space-minimized .mdc-toolbar__row:first-child::after {\n  opacity: 0;\n}\n\n.mdc-toolbar--flexible-default-behavior.mdc-toolbar--flexible-space-minimized .mdc-toolbar__title {\n  font-weight: 500;\n}\n\n.mdc-toolbar--waterfall.mdc-toolbar--fixed {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: box-shadow;\n}\n\n.mdc-toolbar--waterfall.mdc-toolbar--fixed.mdc-toolbar--flexible-space-minimized {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-toolbar--waterfall.mdc-toolbar--fixed.mdc-toolbar--fixed-lastrow-only.mdc-toolbar--flexible-space-minimized {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-toolbar--waterfall.mdc-toolbar--fixed.mdc-toolbar--fixed-lastrow-only.mdc-toolbar--fixed-at-last-row {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-toolbar-fixed-adjust {\n  margin-top: 64px;\n}\n\n\@media (max-width: 959px) and (max-height: 599px) {\n  .mdc-toolbar-fixed-adjust {\n    margin-top: 48px;\n  }\n}\n\n\@media (max-width: 599px) {\n  .mdc-toolbar-fixed-adjust {\n    margin-top: 56px;\n  }\n}\n\n.mdc-toolbar__section--shrink-to-fit {\n  flex: none;\n}\nmwc-toolbar.hydrated{visibility:inherit}","mwc-toolbar-icon",".mwc-menu-icon {\n  padding: 20px !important;\n}\nmwc-toolbar-icon.hydrated{visibility:inherit}","mwc-toolbar-section","\nmwc-toolbar-section.hydrated{visibility:inherit}","mwc-toolbar-title","\nmwc-toolbar-title.hydrated{visibility:inherit}","mwc-typography","\nmwc-typography.hydrated{visibility:inherit}","mwc-viewport","\nmwc-viewport.hydrated{visibility:inherit}");
window['material-webcomponents'].loadComponents(

/**** module id (dev mode) ****/
"mwc-button",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
var theme$1 = {
    "direction": "ltr",
    "palette": {
        "common": {
            "black": "#000",
            "white": "#fff",
            "transparent": "rgba(0, 0, 0, 0)",
            "fullBlack": "rgba(0, 0, 0, 1)",
            "darkBlack": "rgba(0, 0, 0, 0.87)",
            "lightBlack": "rgba(0, 0, 0, 0.54)",
            "minBlack": "rgba(0, 0, 0, 0.26)",
            "faintBlack": "rgba(0, 0, 0, 0.12)",
            "fullWhite": "rgba(255, 255, 255, 1)",
            "darkWhite": "rgba(255, 255, 255, 0.87)",
            "lightWhite": "rgba(255, 255, 255, 0.54)"
        },
        "type": "light",
        "primary": {
            "50": "#e3f2fd",
            "100": "#bbdefb",
            "200": "#90caf9",
            "300": "#64b5f6",
            "400": "#42a5f5",
            "500": "#2196f3",
            "600": "#1e88e5",
            "700": "#1976d2",
            "800": "#1565c0",
            "900": "#0d47a1",
            "A100": "#82b1ff",
            "A200": "#448aff",
            "A400": "#2979ff",
            "A700": "#2962ff",
            "contrastDefaultColor": "light"
        },
        "secondary": {
            "50": "#fce4ec",
            "100": "#f8bbd0",
            "200": "#f48fb1",
            "300": "#f06292",
            "400": "#ec407a",
            "500": "#e91e63",
            "600": "#d81b60",
            "700": "#c2185b",
            "800": "#ad1457",
            "900": "#880e4f",
            "A100": "#ff80ab",
            "A200": "#ff4081",
            "A400": "#f50057",
            "A700": "#c51162",
            "contrastDefaultColor": "light"
        },
        "error": {
            "50": "#ffebee",
            "100": "#ffcdd2",
            "200": "#ef9a9a",
            "300": "#e57373",
            "400": "#ef5350",
            "500": "#f44336",
            "600": "#e53935",
            "700": "#d32f2f",
            "800": "#c62828",
            "900": "#b71c1c",
            "A100": "#ff8a80",
            "A200": "#ff5252",
            "A400": "#ff1744",
            "A700": "#d50000",
            "contrastDefaultColor": "light"
        },
        "grey": {
            "50": "#fafafa",
            "100": "#f5f5f5",
            "200": "#eeeeee",
            "300": "#e0e0e0",
            "400": "#bdbdbd",
            "500": "#9e9e9e",
            "600": "#757575",
            "700": "#616161",
            "800": "#424242",
            "900": "#212121",
            "A100": "#d5d5d5",
            "A200": "#aaaaaa",
            "A400": "#303030",
            "A700": "#616161",
            "contrastDefaultColor": "dark"
        },
        "shades": {
            "dark": {
                "text": {
                    "primary": "rgba(255, 255, 255, 1)",
                    "secondary": "rgba(255, 255, 255, 0.7)",
                    "disabled": "rgba(255, 255, 255, 0.5)",
                    "hint": "rgba(255, 255, 255, 0.5)",
                    "icon": "rgba(255, 255, 255, 0.5)",
                    "divider": "rgba(255, 255, 255, 0.12)",
                    "lightDivider": "rgba(255, 255, 255, 0.075)"
                },
                "input": {
                    "bottomLine": "rgba(255, 255, 255, 0.7)",
                    "helperText": "rgba(255, 255, 255, 0.7)",
                    "labelText": "rgba(255, 255, 255, 0.7)",
                    "inputText": "rgba(255, 255, 255, 1)",
                    "disabled": "rgba(255, 255, 255, 0.5)"
                },
                "action": {
                    "active": "rgba(255, 255, 255, 1)",
                    "disabled": "rgba(255, 255, 255, 0.3)"
                },
                "background": {
                    "default": "#303030",
                    "paper": "#424242",
                    "appBar": "#212121",
                    "contentFrame": "#212121",
                    "chip": "#424242"
                },
                "line": {
                    "stepper": "#bdbdbd"
                }
            },
            "light": {
                "text": {
                    "primary": "rgba(0, 0, 0, 0.87)",
                    "secondary": "rgba(0, 0, 0, 0.54)",
                    "disabled": "rgba(0, 0, 0, 0.38)",
                    "hint": "rgba(0, 0, 0, 0.38)",
                    "icon": "rgba(0, 0, 0, 0.38)",
                    "divider": "rgba(0, 0, 0, 0.12)",
                    "lightDivider": "rgba(0, 0, 0, 0.075)"
                },
                "input": {
                    "bottomLine": "rgba(0, 0, 0, 0.42)",
                    "helperText": "rgba(0, 0, 0, 0.54)",
                    "labelText": "rgba(0, 0, 0, 0.54)",
                    "inputText": "rgba(0, 0, 0, 0.87)",
                    "disabled": "rgba(0, 0, 0, 0.42)"
                },
                "action": {
                    "active": "rgba(0, 0, 0, 0.54)",
                    "disabled": "rgba(0, 0, 0, 0.26)"
                },
                "background": {
                    "default": "#fafafa",
                    "paper": "#fff",
                    "appBar": "#f5f5f5",
                    "contentFrame": "#eeeeee",
                    "chip": "#e0e0e0"
                },
                "line": {
                    "stepper": "#bdbdbd"
                }
            }
        },
        "text": {
            "primary": "rgba(0, 0, 0, 0.87)",
            "secondary": "rgba(0, 0, 0, 0.54)",
            "disabled": "rgba(0, 0, 0, 0.38)",
            "hint": "rgba(0, 0, 0, 0.38)",
            "icon": "rgba(0, 0, 0, 0.38)",
            "divider": "rgba(0, 0, 0, 0.12)",
            "lightDivider": "rgba(0, 0, 0, 0.075)"
        },
        "input": {
            "bottomLine": "rgba(0, 0, 0, 0.42)",
            "helperText": "rgba(0, 0, 0, 0.54)",
            "labelText": "rgba(0, 0, 0, 0.54)",
            "inputText": "rgba(0, 0, 0, 0.87)",
            "disabled": "rgba(0, 0, 0, 0.42)"
        },
        "action": {
            "active": "rgba(0, 0, 0, 0.54)",
            "disabled": "rgba(0, 0, 0, 0.26)"
        },
        "background": {
            "default": "#fafafa",
            "paper": "#fff",
            "appBar": "#f5f5f5",
            "contentFrame": "#eeeeee",
            "chip": "#e0e0e0"
        },
        "line": {
            "stepper": "#bdbdbd"
        }
    },
    "typography": {
        "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
        "fontSize": 14,
        "fontWeightThin": 100,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500,
        "fontWeightBold": 700,
        "fontWeightBlack": 900,
        "display4": {
            "fontSize": "7rem",
            "fontWeight": 300,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "letterSpacing": "-.04em",
            "lineHeight": "1.14286em",
            "marginLeft": "-.06em",
            "color": "rgba(0, 0, 0, 0.54)"
        },
        "display3": {
            "fontSize": "3.5rem",
            "fontWeight": 400,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "letterSpacing": "-.02em",
            "lineHeight": "1.30357em",
            "marginLeft": "-.04em",
            "color": "rgba(0, 0, 0, 0.54)"
        },
        "display2": {
            "fontSize": "2.8125rem",
            "fontWeight": 400,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "lineHeight": "1.06667em",
            "marginLeft": "-.04em",
            "color": "rgba(0, 0, 0, 0.54)"
        },
        "display1": {
            "fontSize": "2.125rem",
            "fontWeight": 400,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "lineHeight": "1.20588em",
            "marginLeft": "-.04em",
            "color": "rgba(0, 0, 0, 0.54)"
        },
        "headline": {
            "fontSize": "1.5rem",
            "fontWeight": 400,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "lineHeight": "1.35417em",
            "color": "rgba(0, 0, 0, 0.87)"
        },
        "title": {
            "fontSize": "1.3125rem",
            "fontWeight": 500,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "lineHeight": "1.16667em",
            "color": "rgba(0, 0, 0, 0.87)"
        },
        "subheading": {
            "fontSize": "1rem",
            "fontWeight": 400,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "lineHeight": "1.5em",
            "color": "rgba(0, 0, 0, 0.87)"
        },
        "body2": {
            "fontSize": "0.875rem",
            "fontWeight": 500,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "lineHeight": "1.71429em",
            "color": "rgba(0, 0, 0, 0.87)"
        },
        "body1": {
            "fontSize": "0.875rem",
            "fontWeight": 400,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "lineHeight": "1.46429em",
            "color": "rgba(0, 0, 0, 0.87)"
        },
        "caption": {
            "fontSize": "0.75rem",
            "fontWeight": 400,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "lineHeight": "1.375em",
            "color": "rgba(0, 0, 0, 0.54)"
        },
        "button": {
            "fontSize": "0.875rem",
            "textTransform": "uppercase",
            "fontWeight": 500,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif"
        }
    },
    "mixins": {
        "toolbar": {
            "minHeight": 56,
            "@media (min-width:0px) and (orientation: landscape)": {
                "minHeight": 48
            },
            "@media (min-width:600px)": {
                "minHeight": 64
            }
        }
    },
    "breakpoints": {
        "keys": [
            "xs",
            "sm",
            "md",
            "lg",
            "xl"
        ],
        "values": {
            "xs": 0,
            "sm": 600,
            "md": 960,
            "lg": 1280,
            "xl": 1920
        }
    },
    "shadows": [
        "none",
        "0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)",
        "0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)",
        "0px 1px 8px 0px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 3px 3px -2px rgba(0, 0, 0, 0.12)",
        "0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
        "0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 5px 8px 0px rgba(0, 0, 0, 0.14),0px 1px 14px 0px rgba(0, 0, 0, 0.12)",
        "0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
        "0px 4px 5px -2px rgba(0, 0, 0, 0.2),0px 7px 10px 1px rgba(0, 0, 0, 0.14),0px 2px 16px 1px rgba(0, 0, 0, 0.12)",
        "0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)",
        "0px 5px 6px -3px rgba(0, 0, 0, 0.2),0px 9px 12px 1px rgba(0, 0, 0, 0.14),0px 3px 16px 2px rgba(0, 0, 0, 0.12)",
        "0px 6px 6px -3px rgba(0, 0, 0, 0.2),0px 10px 14px 1px rgba(0, 0, 0, 0.14),0px 4px 18px 3px rgba(0, 0, 0, 0.12)",
        "0px 6px 7px -4px rgba(0, 0, 0, 0.2),0px 11px 15px 1px rgba(0, 0, 0, 0.14),0px 4px 20px 3px rgba(0, 0, 0, 0.12)",
        "0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)",
        "0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 13px 19px 2px rgba(0, 0, 0, 0.14),0px 5px 24px 4px rgba(0, 0, 0, 0.12)",
        "0px 7px 9px -4px rgba(0, 0, 0, 0.2),0px 14px 21px 2px rgba(0, 0, 0, 0.14),0px 5px 26px 4px rgba(0, 0, 0, 0.12)",
        "0px 8px 9px -5px rgba(0, 0, 0, 0.2),0px 15px 22px 2px rgba(0, 0, 0, 0.14),0px 6px 28px 5px rgba(0, 0, 0, 0.12)",
        "0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)",
        "0px 8px 11px -5px rgba(0, 0, 0, 0.2),0px 17px 26px 2px rgba(0, 0, 0, 0.14),0px 6px 32px 5px rgba(0, 0, 0, 0.12)",
        "0px 9px 11px -5px rgba(0, 0, 0, 0.2),0px 18px 28px 2px rgba(0, 0, 0, 0.14),0px 7px 34px 6px rgba(0, 0, 0, 0.12)",
        "0px 9px 12px -6px rgba(0, 0, 0, 0.2),0px 19px 29px 2px rgba(0, 0, 0, 0.14),0px 7px 36px 6px rgba(0, 0, 0, 0.12)",
        "0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 20px 31px 3px rgba(0, 0, 0, 0.14),0px 8px 38px 7px rgba(0, 0, 0, 0.12)",
        "0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 21px 33px 3px rgba(0, 0, 0, 0.14),0px 8px 40px 7px rgba(0, 0, 0, 0.12)",
        "0px 10px 14px -6px rgba(0, 0, 0, 0.2),0px 22px 35px 3px rgba(0, 0, 0, 0.14),0px 8px 42px 7px rgba(0, 0, 0, 0.12)",
        "0px 11px 14px -7px rgba(0, 0, 0, 0.2),0px 23px 36px 3px rgba(0, 0, 0, 0.14),0px 9px 44px 8px rgba(0, 0, 0, 0.12)",
        "0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12)"
    ],
    "transitions": {
        "easing": {
            "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
            "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
            "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
            "sharp": "cubic-bezier(0.4, 0, 0.6, 1)"
        },
        "duration": {
            "shortest": 150,
            "shorter": 200,
            "short": 250,
            "standard": 300,
            "complex": 375,
            "enteringScreen": 225,
            "leavingScreen": 195
        }
    },
    "spacing": {
        "unit": 8
    },
    "zIndex": {
        "mobileStepper": 1000,
        "appBar": 1100,
        "drawer": 1200,
        "modal": 1300,
        "snackbar": 1400,
        "tooltip": 1500
    }
};

function setTheme(data) {
    try {
        localStorage.setItem('theme', JSON.stringify(data));
    }
    catch (err) {
        console.log(err);
    }
}
function getTheme() {
    const themeData = localStorage.getItem('theme');
    if (themeData) {
        return JSON.parse(themeData);
    }
    return theme$1;
}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var getDynamicStyles = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Extracts a styles object with only props that contain function values.
 */
exports['default'] = function (styles) {
  // eslint-disable-next-line no-shadow
  function extract(styles) {
    var to = null;

    for (var key in styles) {
      var value = styles[key];
      var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

      if (type === 'function') {
        if (!to) to = {};
        to[key] = value;
      } else if (type === 'object' && value !== null && !Array.isArray(value)) {
        var extracted = extract(value);
        if (extracted) {
          if (!to) to = {};
          to[key] = extracted;
        }
      }
    }

    return to;
  }

  return extract(styles);
};
});

unwrapExports(getDynamicStyles);

var toCssValue_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = toCssValue;
var join = function join(value, by) {
  var result = '';
  for (var i = 0; i < value.length; i++) {
    // Remove !important from the value, it will be readded later.
    if (value[i] === '!important') break;
    if (result) result += by;
    result += value[i];
  }
  return result;
};

/**
 * Converts array values to string.
 *
 * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
 * `border: ['1px', '2px']` > `border: 1px, 2px;`
 * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
 * `color: ['red', !important]` > `color: red !important;`
 */
function toCssValue(value) {
  var ignoreImportant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!Array.isArray(value)) return value;

  var cssValue = '';

  // Support space separated values via `[['5px', '10px']]`.
  if (Array.isArray(value[0])) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === '!important') break;
      if (cssValue) cssValue += ', ';
      cssValue += join(value[i], ' ');
    }
  } else cssValue = join(value, ', ');

  // Add !important, because it was ignored.
  if (!ignoreImportant && value[value.length - 1] === '!important') {
    cssValue += ' !important';
  }

  return cssValue;
}
});

unwrapExports(toCssValue_1);

var SheetsRegistry_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Sheets registry to access them all at one place.
 */
var SheetsRegistry = function () {
  function SheetsRegistry() {
    _classCallCheck(this, SheetsRegistry);

    this.registry = [];
  }

  _createClass(SheetsRegistry, [{
    key: 'add',


    /**
     * Register a Style Sheet.
     */
    value: function add(sheet) {
      var registry = this.registry;
      var index = sheet.options.index;


      if (registry.indexOf(sheet) !== -1) return;

      if (registry.length === 0 || index >= this.index) {
        registry.push(sheet);
        return;
      }

      // Find a position.
      for (var i = 0; i < registry.length; i++) {
        if (registry[i].options.index > index) {
          registry.splice(i, 0, sheet);
          return;
        }
      }
    }

    /**
     * Reset the registry.
     */

  }, {
    key: 'reset',
    value: function reset() {
      this.registry = [];
    }

    /**
     * Remove a Style Sheet.
     */

  }, {
    key: 'remove',
    value: function remove(sheet) {
      var index = this.registry.indexOf(sheet);
      this.registry.splice(index, 1);
    }

    /**
     * Convert all attached sheets to a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString(options) {
      return this.registry.filter(function (sheet) {
        return sheet.attached;
      }).map(function (sheet) {
        return sheet.toString(options);
      }).join('\n');
    }
  }, {
    key: 'index',


    /**
     * Current highest index number.
     */
    get: function get() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);

  return SheetsRegistry;
}();

exports['default'] = SheetsRegistry;
});

unwrapExports(SheetsRegistry_1);

/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = true;

var warning = function() {};

if (__DEV__) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

var warning_1 = warning;

var SheetsManager_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _warning2 = _interopRequireDefault(warning_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * SheetsManager is like a WeakMap which is designed to count StyleSheet
 * instances and attach/detach automatically.
 */
var SheetsManager = function () {
  function SheetsManager() {
    _classCallCheck(this, SheetsManager);

    this.sheets = [];
    this.refs = [];
    this.keys = [];
  }

  _createClass(SheetsManager, [{
    key: 'get',
    value: function get(key) {
      var index = this.keys.indexOf(key);
      return this.sheets[index];
    }
  }, {
    key: 'add',
    value: function add(key, sheet) {
      var sheets = this.sheets,
          refs = this.refs,
          keys = this.keys;

      var index = sheets.indexOf(sheet);

      if (index !== -1) return index;

      sheets.push(sheet);
      refs.push(0);
      keys.push(key);

      return sheets.length - 1;
    }
  }, {
    key: 'manage',
    value: function manage(key) {
      var index = this.keys.indexOf(key);
      var sheet = this.sheets[index];
      if (this.refs[index] === 0) sheet.attach();
      this.refs[index]++;
      if (!this.keys[index]) this.keys.splice(index, 0, key);
      return sheet;
    }
  }, {
    key: 'unmanage',
    value: function unmanage(key) {
      var index = this.keys.indexOf(key);
      if (index === -1) {
        // eslint-ignore-next-line no-console
        (0, _warning2['default'])(false, 'SheetsManager: can\'t find sheet to unmanage');
        return;
      }
      if (this.refs[index] > 0) {
        this.refs[index]--;
        if (this.refs[index] === 0) this.sheets[index].detach();
      }
    }
  }, {
    key: 'size',
    get: function get() {
      return this.keys.length;
    }
  }]);

  return SheetsManager;
}();

exports['default'] = SheetsManager;
});

unwrapExports(SheetsManager_1);

var toCss_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = toCss;



var _toCssValue2 = _interopRequireDefault(toCssValue_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Indent a string.
 * http://jsperf.com/array-join-vs-for
 */
function indentStr(str, indent) {
  var result = '';
  for (var index = 0; index < indent; index++) {
    result += '  ';
  }return result + str;
}

/**
 * Converts a Rule to CSS string.
 */

function toCss(selector, style) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var result = '';

  if (!style) return result;

  var _options$indent = options.indent,
      indent = _options$indent === undefined ? 0 : _options$indent;
  var fallbacks = style.fallbacks;


  indent++;

  // Apply fallbacks first.
  if (fallbacks) {
    // Array syntax {fallbacks: [{prop: value}]}
    if (Array.isArray(fallbacks)) {
      for (var index = 0; index < fallbacks.length; index++) {
        var fallback = fallbacks[index];
        for (var prop in fallback) {
          var value = fallback[prop];
          if (value != null) {
            result += '\n' + indentStr(prop + ': ' + (0, _toCssValue2['default'])(value) + ';', indent);
          }
        }
      }
    }
    // Object syntax {fallbacks: {prop: value}}
    else {
        for (var _prop in fallbacks) {
          var _value = fallbacks[_prop];
          if (_value != null) {
            result += '\n' + indentStr(_prop + ': ' + (0, _toCssValue2['default'])(_value) + ';', indent);
          }
        }
      }
  }

  for (var _prop2 in style) {
    var _value2 = style[_prop2];
    if (_value2 != null && _prop2 !== 'fallbacks') {
      result += '\n' + indentStr(_prop2 + ': ' + (0, _toCssValue2['default'])(_value2) + ';', indent);
    }
  }

  // Allow empty style in this case, because properties will be added dynamically.
  if (!result && !options.allowEmpty) return result;

  indent--;
  result = indentStr(selector + ' {' + result + '\n', indent) + indentStr('}', indent);

  return result;
}
});

unwrapExports(toCss_1);

var StyleRule_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _warning2 = _interopRequireDefault(warning_1);



var _toCss2 = _interopRequireDefault(toCss_1);



var _toCssValue2 = _interopRequireDefault(toCssValue_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StyleRule = function () {
  function StyleRule(key, style, options) {
    _classCallCheck(this, StyleRule);

    this.type = 'style';
    this.isProcessed = false;
    var sheet = options.sheet,
        Renderer = options.Renderer,
        selector = options.selector;

    this.key = key;
    this.options = options;
    this.style = style;
    if (selector) this.selectorText = selector;
    this.renderer = sheet ? sheet.renderer : new Renderer();
  }

  /**
   * Set selector string.
   * Attention: use this with caution. Most browsers didn't implement
   * selectorText setter, so this may result in rerendering of entire Style Sheet.
   */


  _createClass(StyleRule, [{
    key: 'prop',


    /**
     * Get or set a style property.
     */
    value: function prop(name, nextValue) {
      // It's a setter.
      if (nextValue != null) {
        // Don't do anything if the value has not changed.
        if (this.style[name] !== nextValue) {
          nextValue = this.options.jss.plugins.onChangeValue(nextValue, name, this);
          this.style[name] = nextValue;

          // Renderable is defined if StyleSheet option `link` is true.
          if (this.renderable) this.renderer.setStyle(this.renderable, name, nextValue);else {
            var sheet = this.options.sheet;

            if (sheet && sheet.attached) {
              (0, _warning2['default'])(false, 'Rule is not linked. Missing sheet option "link: true".');
            }
          }
        }
        return this;
      }

      return this.style[name];
    }

    /**
     * Apply rule to an element inline.
     */

  }, {
    key: 'applyTo',
    value: function applyTo(renderable) {
      var json = this.toJSON();
      for (var prop in json) {
        this.renderer.setStyle(renderable, prop, json[prop]);
      }return this;
    }

    /**
     * Returns JSON representation of the rule.
     * Fallbacks are not supported.
     * Useful for inline styles.
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var json = {};
      for (var prop in this.style) {
        var value = this.style[prop];
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = (0, _toCssValue2['default'])(value);
      }
      return json;
    }

    /**
     * Generates a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString(options) {
      var sheet = this.options.sheet;

      var link = sheet ? sheet.options.link : false;
      var opts = link ? _extends({}, options, { allowEmpty: true }) : options;
      return (0, _toCss2['default'])(this.selector, this.style, opts);
    }
  }, {
    key: 'selector',
    set: function set(selector) {
      if (selector === this.selectorText) return;

      this.selectorText = selector;

      if (this.renderable) {
        var hasChanged = this.renderer.setSelector(this.renderable, selector);

        // If selector setter is not implemented, rerender the rule.
        if (!hasChanged && this.renderable) {
          var renderable = this.renderer.replaceRule(this.renderable, this);
          if (renderable) this.renderable = renderable;
        }
      }
    }

    /**
     * Get selector string.
     */
    ,
    get: function get() {
      return this.selectorText;
    }
  }]);

  return StyleRule;
}();

exports['default'] = StyleRule;
});

unwrapExports(StyleRule_1);

function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
}

/* global window */
var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (typeof module !== 'undefined') {
  root = module;
} else {
  root = Function('return this')();
}

var result = symbolObservablePonyfill(root);



var es = Object.freeze({
	default: result
});

var _symbolObservable = ( es && result ) || es;

var isObservable = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (value) {
  return value && value[_symbolObservable2['default']] && value === value[_symbolObservable2['default']]();
};
});

unwrapExports(isObservable);

var cloneStyle_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = cloneStyle;



var _isObservable2 = _interopRequireDefault(isObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var isArray = Array.isArray;
function cloneStyle(style) {
  // Support empty values in case user ends up with them by accident.
  if (style == null) return style;

  // Support string value for SimpleRule.
  var typeOfStyle = typeof style === 'undefined' ? 'undefined' : _typeof(style);

  if (typeOfStyle === 'string' || typeOfStyle === 'number' || typeOfStyle === 'function') {
    return style;
  }

  // Support array for FontFaceRule.
  if (isArray(style)) return style.map(cloneStyle);

  // Support Observable styles.  Observables are immutable, so we don't need to
  // copy them.
  if ((0, _isObservable2['default'])(style)) return style;

  var newStyle = {};
  for (var name in style) {
    var value = style[name];
    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
      newStyle[name] = cloneStyle(value);
      continue;
    }
    newStyle[name] = value;
  }

  return newStyle;
}
});

unwrapExports(cloneStyle_1);

var createRule_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = createRule;



var _warning2 = _interopRequireDefault(warning_1);



var _StyleRule2 = _interopRequireDefault(StyleRule_1);



var _cloneStyle2 = _interopRequireDefault(cloneStyle_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Create a rule instance.
 */
function createRule() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'unnamed';
  var decl = arguments[1];
  var options = arguments[2];
  var jss = options.jss;

  var declCopy = (0, _cloneStyle2['default'])(decl);

  var rule = jss.plugins.onCreateRule(name, declCopy, options);
  if (rule) return rule;

  // It is an at-rule and it has no instance.
  if (name[0] === '@') {
    (0, _warning2['default'])(false, '[JSS] Unknown at-rule %s', name);
  }

  return new _StyleRule2['default'](name, declCopy, options);
}
});

unwrapExports(createRule_1);

var linkRule_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = linkRule;
/**
 * Link rule with CSSStyleRule and nested rules with corresponding nested cssRules if both exists.
 */
function linkRule(rule, cssRule) {
  rule.renderable = cssRule;
  if (rule.rules && cssRule.cssRules) rule.rules.link(cssRule.cssRules);
}
});

unwrapExports(linkRule_1);

var _escape = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CSS = commonjsGlobal.CSS;

var env = process.env.NODE_ENV;

var escapeRegex = /([[\].#*$><+~=|^:(),"'`])/g;

exports['default'] = function (str) {
  // We don't need to escape it in production, because we are not using user's
  // input for selectors, we are generating a valid selector.
  if (env === 'production') return str;

  if (!CSS || !CSS.escape) {
    return str.replace(escapeRegex, '\\$1');
  }

  return CSS.escape(str);
};
});

unwrapExports(_escape);

var RuleList_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _createRule2 = _interopRequireDefault(createRule_1);



var _linkRule2 = _interopRequireDefault(linkRule_1);



var _StyleRule2 = _interopRequireDefault(StyleRule_1);



var _escape2 = _interopRequireDefault(_escape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Contains rules objects and allows adding/removing etc.
 * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
 */
var RuleList = function () {

  // Original styles object.
  function RuleList(options) {
    _classCallCheck(this, RuleList);

    this.map = {};
    this.raw = {};
    this.index = [];

    this.options = options;
    this.classes = options.classes;
  }

  /**
   * Create and register rule.
   *
   * Will not render after Style Sheet was rendered the first time.
   */


  // Used to ensure correct rules order.

  // Rules registry for access by .get() method.
  // It contains the same rule registered by name and by selector.


  _createClass(RuleList, [{
    key: 'add',
    value: function add(name, decl, options) {
      var _options = this.options,
          parent = _options.parent,
          sheet = _options.sheet,
          jss = _options.jss,
          Renderer = _options.Renderer,
          generateClassName = _options.generateClassName;


      options = _extends({
        classes: this.classes,
        parent: parent,
        sheet: sheet,
        jss: jss,
        Renderer: Renderer,
        generateClassName: generateClassName
      }, options);

      if (!options.selector && this.classes[name]) {
        options.selector = '.' + (0, _escape2['default'])(this.classes[name]);
      }

      this.raw[name] = decl;

      var rule = (0, _createRule2['default'])(name, decl, options);

      var className = void 0;

      if (!options.selector && rule instanceof _StyleRule2['default']) {
        className = generateClassName(rule, sheet);
        rule.selector = '.' + (0, _escape2['default'])(className);
      }

      this.register(rule, className);

      var index = options.index === undefined ? this.index.length : options.index;
      this.index.splice(index, 0, rule);

      return rule;
    }

    /**
     * Get a rule.
     */

  }, {
    key: 'get',
    value: function get(name) {
      return this.map[name];
    }

    /**
     * Delete a rule.
     */

  }, {
    key: 'remove',
    value: function remove(rule) {
      this.unregister(rule);
      this.index.splice(this.indexOf(rule), 1);
    }

    /**
     * Get index of a rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.index.indexOf(rule);
    }

    /**
     * Run `onProcessRule()` plugins on every rule.
     */

  }, {
    key: 'process',
    value: function process() {
      var plugins = this.options.jss.plugins;
      // We need to clone array because if we modify the index somewhere else during a loop
      // we end up with very hard-to-track-down side effects.

      this.index.slice(0).forEach(plugins.onProcessRule, plugins);
    }

    /**
     * Register a rule in `.map` and `.classes` maps.
     */

  }, {
    key: 'register',
    value: function register(rule, className) {
      this.map[rule.key] = rule;
      if (rule instanceof _StyleRule2['default']) {
        this.map[rule.selector] = rule;
        if (className) this.classes[rule.key] = className;
      }
    }

    /**
     * Unregister a rule.
     */

  }, {
    key: 'unregister',
    value: function unregister(rule) {
      delete this.map[rule.key];
      if (rule instanceof _StyleRule2['default']) {
        delete this.map[rule.selector];
        delete this.classes[rule.key];
      }
    }

    /**
     * Update the function values with a new data.
     */

  }, {
    key: 'update',
    value: function update(name, data) {
      var _options2 = this.options,
          plugins = _options2.jss.plugins,
          sheet = _options2.sheet;

      if (typeof name === 'string') {
        plugins.onUpdate(data, this.get(name), sheet);
        return;
      }

      for (var index = 0; index < this.index.length; index++) {
        plugins.onUpdate(name, this.index[index], sheet);
      }
    }

    /**
     * Link renderable rules with CSSRuleList.
     */

  }, {
    key: 'link',
    value: function link(cssRules) {
      var map = this.options.sheet.renderer.getUnescapedKeysMap(this.index);

      for (var i = 0; i < cssRules.length; i++) {
        var cssRule = cssRules[i];
        var _key = this.options.sheet.renderer.getKey(cssRule);
        if (map[_key]) _key = map[_key];
        var rule = this.map[_key];
        if (rule) (0, _linkRule2['default'])(rule, cssRule);
      }
    }

    /**
     * Convert rules to a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString(options) {
      var str = '';
      var sheet = this.options.sheet;

      var link = sheet ? sheet.options.link : false;

      for (var index = 0; index < this.index.length; index++) {
        var rule = this.index[index];
        var css = rule.toString(options);

        // No need to render an empty rule.
        if (!css && !link) continue;

        if (str) str += '\n';
        str += css;
      }

      return str;
    }
  }]);

  return RuleList;
}();

exports['default'] = RuleList;
});

unwrapExports(RuleList_1);

var sheets = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _SheetsRegistry2 = _interopRequireDefault(SheetsRegistry_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * This is a global sheets registry. Only DomRenderer will add sheets to it.
 * On the server one should use an own SheetsRegistry instance and add the
 * sheets to it, because you need to make sure to create a new registry for
 * each request in order to not leak sheets across requests.
 */
exports['default'] = new _SheetsRegistry2['default']();
});

unwrapExports(sheets);

var StyleSheet_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _linkRule2 = _interopRequireDefault(linkRule_1);



var _RuleList2 = _interopRequireDefault(RuleList_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StyleSheet = function () {
  function StyleSheet(styles, options) {
    _classCallCheck(this, StyleSheet);

    this.attached = false;
    this.deployed = false;
    this.linked = false;
    this.classes = {};
    this.options = _extends({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes
    });
    this.renderer = new options.Renderer(this);
    this.rules = new _RuleList2['default'](this.options);

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }

  /**
   * Attach renderable to the render tree.
   */


  _createClass(StyleSheet, [{
    key: 'attach',
    value: function attach() {
      if (this.attached) return this;
      if (!this.deployed) this.deploy();
      this.renderer.attach();
      if (!this.linked && this.options.link) this.link();
      this.attached = true;
      return this;
    }

    /**
     * Remove renderable from render tree.
     */

  }, {
    key: 'detach',
    value: function detach() {
      if (!this.attached) return this;
      this.renderer.detach();
      this.attached = false;
      return this;
    }

    /**
     * Add a rule to the current stylesheet.
     * Will insert a rule also after the stylesheet has been rendered first time.
     */

  }, {
    key: 'addRule',
    value: function addRule(name, decl, options) {
      var queue = this.queue;

      // Plugins can create rules.
      // In order to preserve the right order, we need to queue all `.addRule` calls,
      // which happen after the first `rules.add()` call.

      if (this.attached && !queue) this.queue = [];

      var rule = this.rules.add(name, decl, options);
      this.options.jss.plugins.onProcessRule(rule);

      if (this.attached) {
        if (!this.deployed) return rule;
        // Don't insert rule directly if there is no stringified version yet.
        // It will be inserted all together when .attach is called.
        if (queue) queue.push(rule);else {
          this.insertRule(rule);
          if (this.queue) {
            this.queue.forEach(this.insertRule, this);
            this.queue = undefined;
          }
        }
        return rule;
      }

      // We can't add rules to a detached style node.
      // We will redeploy the sheet once user will attach it.
      this.deployed = false;

      return rule;
    }

    /**
     * Insert rule into the StyleSheet
     */

  }, {
    key: 'insertRule',
    value: function insertRule(rule) {
      var renderable = this.renderer.insertRule(rule);
      if (renderable && this.options.link) (0, _linkRule2['default'])(rule, renderable);
    }

    /**
     * Create and add rules.
     * Will render also after Style Sheet was rendered the first time.
     */

  }, {
    key: 'addRules',
    value: function addRules(styles, options) {
      var added = [];
      for (var name in styles) {
        added.push(this.addRule(name, styles[name], options));
      }
      return added;
    }

    /**
     * Get a rule by name.
     */

  }, {
    key: 'getRule',
    value: function getRule(name) {
      return this.rules.get(name);
    }

    /**
     * Delete a rule by name.
     * Returns `true`: if rule has been deleted from the DOM.
     */

  }, {
    key: 'deleteRule',
    value: function deleteRule(name) {
      var rule = this.rules.get(name);

      if (!rule) return false;

      this.rules.remove(rule);

      if (this.attached && rule.renderable) {
        return this.renderer.deleteRule(rule.renderable);
      }

      return true;
    }

    /**
     * Get index of a rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.rules.indexOf(rule);
    }

    /**
     * Deploy pure CSS string to a renderable.
     */

  }, {
    key: 'deploy',
    value: function deploy() {
      this.renderer.deploy();
      this.deployed = true;
      return this;
    }

    /**
     * Link renderable CSS rules from sheet with their corresponding models.
     */

  }, {
    key: 'link',
    value: function link() {
      var cssRules = this.renderer.getRules();

      // Is undefined when VirtualRenderer is used.
      if (cssRules) this.rules.link(cssRules);
      this.linked = true;
      return this;
    }

    /**
     * Update the function values with a new data.
     */

  }, {
    key: 'update',
    value: function update(name, data) {
      this.rules.update(name, data);
      return this;
    }

    /**
     * Convert rules to a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString(options) {
      return this.rules.toString(options);
    }
  }]);

  return StyleSheet;
}();

exports['default'] = StyleSheet;
});

unwrapExports(StyleSheet_1);

var moduleId = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
if (commonjsGlobal[ns] == null) commonjsGlobal[ns] = 0;

// Bundle may contain multiple JSS versions at the same time. In order to identify
// the current version with just one short number and use it for classes generation
// we use a counter. Also it is more accurate, because user can manually reevaluate
// the module.
exports['default'] = commonjsGlobal[ns]++;
});

unwrapExports(moduleId);

var createGenerateClassName = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _warning2 = _interopRequireDefault(warning_1);



var _StyleSheet2 = _interopRequireDefault(StyleSheet_1);



var _moduleId2 = _interopRequireDefault(moduleId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var maxRules = 1e10;


var env = process.env.NODE_ENV;

/**
 * Returns a function which generates unique class names based on counters.
 * When new generator function is created, rule counter is reseted.
 * We need to reset the rule counter for SSR for each request.
 */

exports['default'] = function () {
  var ruleCounter = 0;
  var defaultPrefix = env === 'production' ? 'c' : '';

  return function (rule, sheet) {
    ruleCounter += 1;

    if (ruleCounter > maxRules) {
      (0, _warning2['default'])(false, '[JSS] You might have a memory leak. Rule counter is at %s.', ruleCounter);
    }

    var prefix = defaultPrefix;
    var jssId = '';

    if (sheet) {
      prefix = sheet.options.classNamePrefix || defaultPrefix;
      if (sheet.options.jss.id != null) jssId += sheet.options.jss.id;
    }

    if (env === 'production') {
      return '' + prefix + _moduleId2['default'] + jssId + ruleCounter;
    }

    return prefix + rule.key + '-' + _moduleId2['default'] + (jssId && '-' + jssId) + '-' + ruleCounter;
  };
};
});

unwrapExports(createGenerateClassName);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;




var module$1 = Object.freeze({
	isBrowser: isBrowser,
	default: isBrowser
});

var PluginsRegistry_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _warning2 = _interopRequireDefault(warning_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PluginsRegistry = function () {
  function PluginsRegistry() {
    _classCallCheck(this, PluginsRegistry);

    this.hooks = {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []

      /**
       * Call `onCreateRule` hooks and return an object if returned by a hook.
       */
    };
  }

  _createClass(PluginsRegistry, [{
    key: 'onCreateRule',
    value: function onCreateRule(name, decl, options) {
      for (var i = 0; i < this.hooks.onCreateRule.length; i++) {
        var rule = this.hooks.onCreateRule[i](name, decl, options);
        if (rule) return rule;
      }
      return null;
    }

    /**
     * Call `onProcessRule` hooks.
     */

  }, {
    key: 'onProcessRule',
    value: function onProcessRule(rule) {
      if (rule.isProcessed) return;
      var sheet = rule.options.sheet;

      for (var i = 0; i < this.hooks.onProcessRule.length; i++) {
        this.hooks.onProcessRule[i](rule, sheet);
      }

      // $FlowFixMe
      if (rule.style) this.onProcessStyle(rule.style, rule, sheet);

      rule.isProcessed = true;
    }

    /**
     * Call `onProcessStyle` hooks.
     */

  }, {
    key: 'onProcessStyle',
    value: function onProcessStyle(style, rule, sheet) {
      var nextStyle = style;

      for (var i = 0; i < this.hooks.onProcessStyle.length; i++) {
        nextStyle = this.hooks.onProcessStyle[i](nextStyle, rule, sheet);
        // $FlowFixMe
        rule.style = nextStyle;
      }
    }

    /**
     * Call `onProcessSheet` hooks.
     */

  }, {
    key: 'onProcessSheet',
    value: function onProcessSheet(sheet) {
      for (var i = 0; i < this.hooks.onProcessSheet.length; i++) {
        this.hooks.onProcessSheet[i](sheet);
      }
    }

    /**
     * Call `onUpdate` hooks.
     */

  }, {
    key: 'onUpdate',
    value: function onUpdate(data, rule, sheet) {
      for (var i = 0; i < this.hooks.onUpdate.length; i++) {
        this.hooks.onUpdate[i](data, rule, sheet);
      }
    }

    /**
     * Call `onChangeValue` hooks.
     */

  }, {
    key: 'onChangeValue',
    value: function onChangeValue(value, prop, rule) {
      var processedValue = value;
      for (var i = 0; i < this.hooks.onChangeValue.length; i++) {
        processedValue = this.hooks.onChangeValue[i](processedValue, prop, rule);
      }
      return processedValue;
    }

    /**
     * Register a plugin.
     * If function is passed, it is a shortcut for `{onProcessRule}`.
     */

  }, {
    key: 'use',
    value: function use(plugin) {
      for (var name in plugin) {
        if (this.hooks[name]) this.hooks[name].push(plugin[name]);else (0, _warning2['default'])(false, '[JSS] Unknown hook "%s".', name);
      }
    }
  }]);

  return PluginsRegistry;
}();

exports['default'] = PluginsRegistry;
});

unwrapExports(PluginsRegistry_1);

var SimpleRule_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SimpleRule = function () {
  function SimpleRule(key, value, options) {
    _classCallCheck(this, SimpleRule);

    this.type = 'simple';
    this.isProcessed = false;

    this.key = key;
    this.value = value;
    this.options = options;
  }

  /**
   * Generates a CSS string.
   */
  // eslint-disable-next-line no-unused-vars


  _createClass(SimpleRule, [{
    key: 'toString',
    value: function toString(options) {
      if (Array.isArray(this.value)) {
        var str = '';
        for (var index = 0; index < this.value.length; index++) {
          str += this.key + ' ' + this.value[index] + ';';
          if (this.value[index + 1]) str += '\n';
        }
        return str;
      }

      return this.key + ' ' + this.value + ';';
    }
  }]);

  return SimpleRule;
}();

exports['default'] = SimpleRule;
});

unwrapExports(SimpleRule_1);

var KeyframesRule_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _RuleList2 = _interopRequireDefault(RuleList_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Rule for @keyframes
 */
var KeyframesRule = function () {
  function KeyframesRule(key, frames, options) {
    _classCallCheck(this, KeyframesRule);

    this.type = 'keyframes';
    this.isProcessed = false;

    this.key = key;
    this.options = options;
    this.rules = new _RuleList2['default'](_extends({}, options, { parent: this }));

    for (var name in frames) {
      this.rules.add(name, frames[name], _extends({}, this.options, {
        parent: this,
        selector: name
      }));
    }

    this.rules.process();
  }

  /**
   * Generates a CSS string.
   */


  _createClass(KeyframesRule, [{
    key: 'toString',
    value: function toString() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { indent: 1 };

      var inner = this.rules.toString(options);
      if (inner) inner += '\n';
      return this.key + ' {\n' + inner + '}';
    }
  }]);

  return KeyframesRule;
}();

exports['default'] = KeyframesRule;
});

unwrapExports(KeyframesRule_1);

var ConditionalRule_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _RuleList2 = _interopRequireDefault(RuleList_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Conditional rule for @media, @supports
 */
var ConditionalRule = function () {
  function ConditionalRule(key, styles, options) {
    _classCallCheck(this, ConditionalRule);

    this.type = 'conditional';
    this.isProcessed = false;

    this.key = key;
    this.options = options;
    this.rules = new _RuleList2['default'](_extends({}, options, { parent: this }));

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }

  /**
   * Get a rule.
   */


  _createClass(ConditionalRule, [{
    key: 'getRule',
    value: function getRule(name) {
      return this.rules.get(name);
    }

    /**
     * Get index of a rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.rules.indexOf(rule);
    }

    /**
     * Create and register rule, run plugins.
     */

  }, {
    key: 'addRule',
    value: function addRule(name, style, options) {
      var rule = this.rules.add(name, style, options);
      this.options.jss.plugins.onProcessRule(rule);
      return rule;
    }

    /**
     * Generates a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { indent: 1 };

      var inner = this.rules.toString(options);
      return inner ? this.key + ' {\n' + inner + '\n}' : '';
    }
  }]);

  return ConditionalRule;
}();

exports['default'] = ConditionalRule;
});

unwrapExports(ConditionalRule_1);

var FontFaceRule_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _toCss2 = _interopRequireDefault(toCss_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FontFaceRule = function () {
  function FontFaceRule(key, style, options) {
    _classCallCheck(this, FontFaceRule);

    this.type = 'font-face';
    this.isProcessed = false;

    this.key = key;
    this.style = style;
    this.options = options;
  }

  /**
   * Generates a CSS string.
   */


  _createClass(FontFaceRule, [{
    key: 'toString',
    value: function toString(options) {
      if (Array.isArray(this.style)) {
        var str = '';
        for (var index = 0; index < this.style.length; index++) {
          str += (0, _toCss2['default'])(this.key, this.style[index]);
          if (this.style[index + 1]) str += '\n';
        }
        return str;
      }

      return (0, _toCss2['default'])(this.key, this.style, options);
    }
  }]);

  return FontFaceRule;
}();

exports['default'] = FontFaceRule;
});

unwrapExports(FontFaceRule_1);

var ViewportRule_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _toCss2 = _interopRequireDefault(toCss_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ViewportRule = function () {
  function ViewportRule(key, style, options) {
    _classCallCheck(this, ViewportRule);

    this.type = 'viewport';
    this.isProcessed = false;

    this.key = key;
    this.style = style;
    this.options = options;
  }

  /**
   * Generates a CSS string.
   */


  _createClass(ViewportRule, [{
    key: 'toString',
    value: function toString(options) {
      return (0, _toCss2['default'])(this.key, this.style, options);
    }
  }]);

  return ViewportRule;
}();

exports['default'] = ViewportRule;
});

unwrapExports(ViewportRule_1);

var rules = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _SimpleRule2 = _interopRequireDefault(SimpleRule_1);



var _KeyframesRule2 = _interopRequireDefault(KeyframesRule_1);



var _ConditionalRule2 = _interopRequireDefault(ConditionalRule_1);



var _FontFaceRule2 = _interopRequireDefault(FontFaceRule_1);



var _ViewportRule2 = _interopRequireDefault(ViewportRule_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var classes = {
  '@charset': _SimpleRule2['default'],
  '@import': _SimpleRule2['default'],
  '@namespace': _SimpleRule2['default'],
  '@keyframes': _KeyframesRule2['default'],
  '@media': _ConditionalRule2['default'],
  '@supports': _ConditionalRule2['default'],
  '@font-face': _FontFaceRule2['default'],
  '@viewport': _ViewportRule2['default'],
  '@-ms-viewport': _ViewportRule2['default']

  /**
   * Generate plugins which will register all rules.
   */
};
exports['default'] = Object.keys(classes).map(function (key) {
  // https://jsperf.com/indexof-vs-substr-vs-regex-at-the-beginning-3
  var re = new RegExp('^' + key);
  var onCreateRule = function onCreateRule(name, decl, options) {
    return re.test(name) ? new classes[key](name, decl, options) : null;
  };
  return { onCreateRule: onCreateRule };
});
});

unwrapExports(rules);

var observables = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _StyleRule2 = _interopRequireDefault(StyleRule_1);



var _createRule2 = _interopRequireDefault(createRule_1);



var _isObservable2 = _interopRequireDefault(isObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  onCreateRule: function onCreateRule(name, decl, options) {
    if (!(0, _isObservable2['default'])(decl)) return null;

    // Cast `decl` to `Observable`, since it passed the type guard.
    var style$ = decl;

    var rule = (0, _createRule2['default'])(name, {}, options);

    // TODO
    // Call `stream.subscribe()` returns a subscription, which should be explicitly
    // unsubscribed from when we know this sheet is no longer needed.
    style$.subscribe(function (style) {
      for (var prop in style) {
        rule.prop(prop, style[prop]);
      }
    });

    return rule;
  },
  onProcessRule: function onProcessRule(rule) {
    if (!(rule instanceof _StyleRule2['default'])) return;
    var styleRule = rule;
    var style = styleRule.style;

    var _loop = function _loop(prop) {
      var value = style[prop];
      if (!(0, _isObservable2['default'])(value)) return 'continue';
      delete style[prop];
      value.subscribe({
        next: function next(nextValue) {
          styleRule.prop(prop, nextValue);
        }
      });
    };

    for (var prop in style) {
      var _ret = _loop(prop);

      if (_ret === 'continue') continue;
    }
  }
};
});

unwrapExports(observables);

var kebabCase = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var regExp = /([A-Z])/g;
var replace = function replace(str) {
  return "-" + str.toLowerCase();
};

exports["default"] = function (str) {
  return str.replace(regExp, replace);
};
});

unwrapExports(kebabCase);

var functions = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _RuleList2 = _interopRequireDefault(RuleList_1);



var _StyleRule2 = _interopRequireDefault(StyleRule_1);



var _kebabCase2 = _interopRequireDefault(kebabCase);



var _createRule2 = _interopRequireDefault(createRule_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// A symbol replacement.
var now = Date.now();
var fnValuesNs = 'fnValues' + now;
var fnStyleNs = 'fnStyle' + ++now;

exports['default'] = {
  onCreateRule: function onCreateRule(name, decl, options) {
    if (typeof decl !== 'function') return null;
    var rule = (0, _createRule2['default'])(name, {}, options);
    rule[fnStyleNs] = decl;
    return rule;
  },
  onProcessStyle: function onProcessStyle(style, rule) {
    var fn = {};
    for (var prop in style) {
      var value = style[prop];
      if (typeof value !== 'function') continue;
      delete style[prop];
      fn[(0, _kebabCase2['default'])(prop)] = value;
    }
    rule = rule;
    rule[fnValuesNs] = fn;
    return style;
  },
  onUpdate: function onUpdate(data, rule) {
    // It is a rules container like for e.g. ConditionalRule.
    if (rule.rules instanceof _RuleList2['default']) {
      rule.rules.update(data);
      return;
    }
    if (!(rule instanceof _StyleRule2['default'])) return;

    rule = rule;

    // If we have a fn values map, it is a rule with function values.
    if (rule[fnValuesNs]) {
      for (var prop in rule[fnValuesNs]) {
        rule.prop(prop, rule[fnValuesNs][prop](data));
      }
    }

    rule = rule;

    var fnStyle = rule[fnStyleNs];

    // If we have a style function, the entire rule is dynamic and style object
    // will be returned from that function.
    if (fnStyle) {
      var style = fnStyle(data);
      for (var _prop in style) {
        rule.prop(_prop, style[_prop]);
      }
    }
  }
};
});

unwrapExports(functions);

var DomRenderer_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _warning2 = _interopRequireDefault(warning_1);



var _sheets2 = _interopRequireDefault(sheets);



var _StyleRule2 = _interopRequireDefault(StyleRule_1);



var _toCssValue2 = _interopRequireDefault(toCssValue_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Get a style property.
 */
function getStyle(cssRule, prop) {
  try {
    return cssRule.style.getPropertyValue(prop);
  } catch (err) {
    // IE may throw if property is unknown.
    return '';
  }
}

/**
 * Set a style property.
 */
function setStyle(cssRule, prop, value) {
  try {
    var cssValue = value;

    if (Array.isArray(value)) {
      cssValue = (0, _toCssValue2['default'])(value, true);

      if (value[value.length - 1] === '!important') {
        cssRule.style.setProperty(prop, cssValue, 'important');
        return true;
      }
    }

    cssRule.style.setProperty(prop, cssValue);
  } catch (err) {
    // IE may throw if property is unknown.
    return false;
  }
  return true;
}

var CSSRuleTypes = {
  STYLE_RULE: 1,
  KEYFRAMES_RULE: 7

  /**
   * Get the CSS Rule key.
   */

};var getKey = function () {
  var extractKey = function extractKey(cssText) {
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return cssText.substr(from, cssText.indexOf('{') - 1);
  };

  return function (cssRule) {
    if (cssRule.type === CSSRuleTypes.STYLE_RULE) return cssRule.selectorText;
    if (cssRule.type === CSSRuleTypes.KEYFRAMES_RULE) {
      var name = cssRule.name;

      if (name) return '@keyframes ' + name;

      // There is no rule.name in the following browsers:
      // - IE 9
      // - Safari 7.1.8
      // - Mobile Safari 9.0.0
      var cssText = cssRule.cssText;

      return '@' + extractKey(cssText, cssText.indexOf('keyframes'));
    }

    // Conditionals.
    return extractKey(cssRule.cssText);
  };
}();

/**
 * Set the selector.
 */
function setSelector(cssRule, selectorText) {
  cssRule.selectorText = selectorText;

  // Return false if setter was not successful.
  // Currently works in chrome only.
  return cssRule.selectorText === selectorText;
}

/**
 * Gets the `head` element upon the first call and caches it.
 */
var getHead = function () {
  var head = void 0;
  return function () {
    if (!head) head = document.head || document.getElementsByTagName('head')[0];
    return head;
  };
}();

/**
 * Gets a map of rule keys, where the property is an unescaped key and value
 * is a potentially escaped one.
 * It is used to identify CSS rules and the corresponding JSS rules. As an identifier
 * for CSSStyleRule we normally use `selectorText`. Though if original selector text
 * contains escaped code points e.g. `:not(#\\20)`, CSSOM will compile it to `:not(# )`
 * and so CSS rule's `selectorText` won't match JSS rule selector.
 *
 * https://www.w3.org/International/questions/qa-escapes#cssescapes
 */
var getUnescapedKeysMap = function () {
  var style = void 0;
  var isAttached = false;

  return function (rules) {
    var map = {};
    // https://github.com/facebook/flow/issues/2696
    if (!style) style = document.createElement('style');
    for (var i = 0; i < rules.length; i++) {
      var rule = rules[i];
      if (!(rule instanceof _StyleRule2['default'])) continue;
      var selector = rule.selector;
      // Only unescape selector over CSSOM if it contains a back slash.

      if (selector && selector.indexOf('\\') !== -1) {
        // Lazilly attach when needed.
        if (!isAttached) {
          getHead().appendChild(style);
          isAttached = true;
        }
        style.textContent = selector + ' {}';
        var _style = style,
            sheet = _style.sheet;

        if (sheet) {
          var cssRules = sheet.cssRules;

          if (cssRules) map[cssRules[0].selectorText] = rule.key;
        }
      }
    }
    if (isAttached) {
      getHead().removeChild(style);
      isAttached = false;
    }
    return map;
  };
}();

/**
 * Find attached sheet with an index higher than the passed one.
 */
function findHigherSheet(registry, options) {
  for (var i = 0; i < registry.length; i++) {
    var sheet = registry[i];
    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }
  return null;
}

/**
 * Find attached sheet with the highest index.
 */
function findHighestSheet(registry, options) {
  for (var i = registry.length - 1; i >= 0; i--) {
    var sheet = registry[i];
    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }
  return null;
}

/**
 * Find a comment with "jss" inside.
 */
function findCommentNode(text) {
  var head = getHead();
  for (var i = 0; i < head.childNodes.length; i++) {
    var node = head.childNodes[i];
    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
      return node;
    }
  }
  return null;
}

/**
 * Find a node before which we can insert the sheet.
 */
function findPrevNode(options) {
  var registry = _sheets2['default'].registry;


  if (registry.length > 0) {
    // Try to insert before the next higher sheet.
    var sheet = findHigherSheet(registry, options);
    if (sheet) return sheet.renderer.element;

    // Otherwise insert after the last attached.
    sheet = findHighestSheet(registry, options);
    if (sheet) return sheet.renderer.element.nextElementSibling;
  }

  // Try to find a comment placeholder if registry is empty.
  var insertionPoint = options.insertionPoint;

  if (insertionPoint && typeof insertionPoint === 'string') {
    var comment = findCommentNode(insertionPoint);
    if (comment) return comment.nextSibling;
    // If user specifies an insertion point and it can't be found in the document -
    // bad specificity issues may appear.
    (0, _warning2['default'])(insertionPoint === 'jss', '[JSS] Insertion point "%s" not found.', insertionPoint);
  }

  return null;
}

/**
 * Insert style element into the DOM.
 */
function insertStyle(style, options) {
  var insertionPoint = options.insertionPoint;

  var prevNode = findPrevNode(options);

  if (prevNode) {
    var parentNode = prevNode.parentNode;

    if (parentNode) parentNode.insertBefore(style, prevNode);
    return;
  }

  // Works with iframes and any node types.
  if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
    // https://stackoverflow.com/questions/41328728/force-casting-in-flow
    var insertionPointElement = insertionPoint;
    var _parentNode = insertionPointElement.parentNode;

    if (_parentNode) _parentNode.insertBefore(style, insertionPointElement.nextSibling);else (0, _warning2['default'])(false, '[JSS] Insertion point is not in the DOM.');
    return;
  }

  getHead().insertBefore(style, prevNode);
}

var DomRenderer = function () {
  function DomRenderer(sheet) {
    _classCallCheck(this, DomRenderer);

    this.getStyle = getStyle;
    this.setStyle = setStyle;
    this.setSelector = setSelector;
    this.getKey = getKey;
    this.getUnescapedKeysMap = getUnescapedKeysMap;
    this.hasInsertedRules = false;

    // There is no sheet when the renderer is used from a standalone StyleRule.
    if (sheet) _sheets2['default'].add(sheet);

    this.sheet = sheet;

    var _ref = this.sheet ? this.sheet.options : {},
        media = _ref.media,
        meta = _ref.meta,
        element = _ref.element;

    this.element = element || document.createElement('style');
    this.element.type = 'text/css';
    this.element.setAttribute('data-jss', '');
    if (media) this.element.setAttribute('media', media);
    if (meta) this.element.setAttribute('data-meta', meta);
    // eslint-disable-next-line no-underscore-dangle
    var nonce = commonjsGlobal.__webpack_nonce__;
    if (nonce) this.element.setAttribute('nonce', nonce);
  }

  /**
   * Insert style element into render tree.
   */


  // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696


  _createClass(DomRenderer, [{
    key: 'attach',
    value: function attach() {
      // In the case the element node is external and it is already in the DOM.
      if (this.element.parentNode || !this.sheet) return;

      // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
      // browsers remove those rules.
      // TODO figure out if its a bug and if it is known.
      // Workaround is to redeploy the sheet before attaching as a string.
      if (this.hasInsertedRules) {
        this.deploy();
        this.hasInsertedRules = false;
      }

      insertStyle(this.element, this.sheet.options);
    }

    /**
     * Remove style element from render tree.
     */

  }, {
    key: 'detach',
    value: function detach() {
      this.element.parentNode.removeChild(this.element);
    }

    /**
     * Inject CSS string into element.
     */

  }, {
    key: 'deploy',
    value: function deploy() {
      if (!this.sheet) return;
      this.element.textContent = '\n' + this.sheet.toString() + '\n';
    }

    /**
     * Insert a rule into element.
     */

  }, {
    key: 'insertRule',
    value: function insertRule(rule, index) {
      var sheet = this.element.sheet;
      var cssRules = sheet.cssRules;

      var str = rule.toString();
      if (!index) index = cssRules.length;

      if (!str) return false;

      try {
        sheet.insertRule(str, index);
      } catch (err) {
        (0, _warning2['default'])(false, '[JSS] Can not insert an unsupported rule \n\r%s', rule);
        return false;
      }
      this.hasInsertedRules = true;

      return cssRules[index];
    }

    /**
     * Delete a rule.
     */

  }, {
    key: 'deleteRule',
    value: function deleteRule(cssRule) {
      var sheet = this.element.sheet;

      var index = this.indexOf(cssRule);
      if (index === -1) return false;
      sheet.deleteRule(index);
      return true;
    }

    /**
     * Get index of a CSS Rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(cssRule) {
      var cssRules = this.element.sheet.cssRules;

      for (var _index = 0; _index < cssRules.length; _index++) {
        if (cssRule === cssRules[_index]) return _index;
      }
      return -1;
    }

    /**
     * Generate a new CSS rule and replace the existing one.
     */

  }, {
    key: 'replaceRule',
    value: function replaceRule(cssRule, rule) {
      var index = this.indexOf(cssRule);
      var newCssRule = this.insertRule(rule, index);
      this.element.sheet.deleteRule(index);
      return newCssRule;
    }

    /**
     * Get all rules elements.
     */

  }, {
    key: 'getRules',
    value: function getRules() {
      return this.element.sheet.cssRules;
    }
  }]);

  return DomRenderer;
}();

exports['default'] = DomRenderer;
});

unwrapExports(DomRenderer_1);

var VirtualRenderer_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable class-methods-use-this */

/**
 * Rendering backend to do nothing in nodejs.
 */
var VirtualRenderer = function () {
  function VirtualRenderer() {
    _classCallCheck(this, VirtualRenderer);
  }

  _createClass(VirtualRenderer, [{
    key: 'setStyle',
    value: function setStyle() {
      return true;
    }
  }, {
    key: 'getStyle',
    value: function getStyle() {
      return '';
    }
  }, {
    key: 'setSelector',
    value: function setSelector() {
      return true;
    }
  }, {
    key: 'getKey',
    value: function getKey() {
      return '';
    }
  }, {
    key: 'attach',
    value: function attach() {}
  }, {
    key: 'detach',
    value: function detach() {}
  }, {
    key: 'deploy',
    value: function deploy() {}
  }, {
    key: 'insertRule',
    value: function insertRule() {
      return false;
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule() {
      return true;
    }
  }, {
    key: 'replaceRule',
    value: function replaceRule() {
      return false;
    }
  }, {
    key: 'getRules',
    value: function getRules() {}
  }, {
    key: 'indexOf',
    value: function indexOf() {
      return -1;
    }
  }]);

  return VirtualRenderer;
}();

exports['default'] = VirtualRenderer;
});

unwrapExports(VirtualRenderer_1);

var _isInBrowser = ( module$1 && isBrowser ) || module$1;

var Jss_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _isInBrowser2 = _interopRequireDefault(_isInBrowser);



var _StyleSheet2 = _interopRequireDefault(StyleSheet_1);



var _PluginsRegistry2 = _interopRequireDefault(PluginsRegistry_1);



var _rules2 = _interopRequireDefault(rules);



var _observables2 = _interopRequireDefault(observables);



var _functions2 = _interopRequireDefault(functions);



var _sheets2 = _interopRequireDefault(sheets);



var _StyleRule2 = _interopRequireDefault(StyleRule_1);



var _createGenerateClassName2 = _interopRequireDefault(createGenerateClassName);



var _createRule3 = _interopRequireDefault(createRule_1);



var _DomRenderer2 = _interopRequireDefault(DomRenderer_1);



var _VirtualRenderer2 = _interopRequireDefault(VirtualRenderer_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultPlugins = _rules2['default'].concat([_observables2['default'], _functions2['default']]);

var instanceCounter = 0;

var Jss = function () {
  function Jss(options) {
    _classCallCheck(this, Jss);

    this.id = instanceCounter++;
    this.version = "9.5.0";
    this.plugins = new _PluginsRegistry2['default']();
    this.options = {
      createGenerateClassName: _createGenerateClassName2['default'],
      Renderer: _isInBrowser2['default'] ? _DomRenderer2['default'] : _VirtualRenderer2['default'],
      plugins: []
    };
    this.generateClassName = (0, _createGenerateClassName2['default'])();

    // eslint-disable-next-line prefer-spread
    this.use.apply(this, defaultPlugins);
    this.setup(options);
  }

  _createClass(Jss, [{
    key: 'setup',
    value: function setup() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (options.createGenerateClassName) {
        this.options.createGenerateClassName = options.createGenerateClassName;
        // $FlowFixMe
        this.generateClassName = options.createGenerateClassName();
      }

      if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;
      if (options.virtual || options.Renderer) {
        this.options.Renderer = options.Renderer || (options.virtual ? _VirtualRenderer2['default'] : _DomRenderer2['default']);
      }

      // eslint-disable-next-line prefer-spread
      if (options.plugins) this.use.apply(this, options.plugins);

      return this;
    }

    /**
     * Create a Style Sheet.
     */

  }, {
    key: 'createStyleSheet',
    value: function createStyleSheet(styles) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var index = options.index;
      if (typeof index !== 'number') {
        index = _sheets2['default'].index === 0 ? 0 : _sheets2['default'].index + 1;
      }
      var sheet = new _StyleSheet2['default'](styles, _extends({}, options, {
        jss: this,
        generateClassName: options.generateClassName || this.generateClassName,
        insertionPoint: this.options.insertionPoint,
        Renderer: this.options.Renderer,
        index: index
      }));
      this.plugins.onProcessSheet(sheet);

      return sheet;
    }

    /**
     * Detach the Style Sheet and remove it from the registry.
     */

  }, {
    key: 'removeStyleSheet',
    value: function removeStyleSheet(sheet) {
      sheet.detach();
      _sheets2['default'].remove(sheet);
      return this;
    }

    /**
     * Create a rule without a Style Sheet.
     */

  }, {
    key: 'createRule',
    value: function createRule(name) {
      var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // Enable rule without name for inline styles.
      if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
        options = style;
        style = name;
        name = undefined;
      }

      // Cast from RuleFactoryOptions to RuleOptions
      // https://stackoverflow.com/questions/41328728/force-casting-in-flow
      var ruleOptions = options;

      ruleOptions.jss = this;
      ruleOptions.Renderer = this.options.Renderer;
      if (!ruleOptions.generateClassName) ruleOptions.generateClassName = this.generateClassName;
      if (!ruleOptions.classes) ruleOptions.classes = {};
      var rule = (0, _createRule3['default'])(name, style, ruleOptions);

      if (!ruleOptions.selector && rule instanceof _StyleRule2['default']) {
        rule.selector = '.' + ruleOptions.generateClassName(rule);
      }

      this.plugins.onProcessRule(rule);

      return rule;
    }

    /**
     * Register plugin. Passed function will be invoked with a rule instance.
     */

  }, {
    key: 'use',
    value: function use() {
      var _this = this;

      for (var _len = arguments.length, plugins = Array(_len), _key = 0; _key < _len; _key++) {
        plugins[_key] = arguments[_key];
      }

      plugins.forEach(function (plugin) {
        // Avoids applying same plugin twice, at least based on ref.
        if (_this.options.plugins.indexOf(plugin) === -1) {
          _this.options.plugins.push(plugin);
          _this.plugins.use(plugin);
        }
      });

      return this;
    }
  }]);

  return Jss;
}();

exports['default'] = Jss;
});

unwrapExports(Jss_1);

var lib = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = exports.createGenerateClassName = exports.sheets = exports.RuleList = exports.SheetsManager = exports.SheetsRegistry = exports.toCssValue = exports.getDynamicStyles = undefined;



Object.defineProperty(exports, 'getDynamicStyles', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(getDynamicStyles)['default'];
  }
});



Object.defineProperty(exports, 'toCssValue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(toCssValue_1)['default'];
  }
});



Object.defineProperty(exports, 'SheetsRegistry', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(SheetsRegistry_1)['default'];
  }
});



Object.defineProperty(exports, 'SheetsManager', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(SheetsManager_1)['default'];
  }
});



Object.defineProperty(exports, 'RuleList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(RuleList_1)['default'];
  }
});



Object.defineProperty(exports, 'sheets', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(sheets)['default'];
  }
});



Object.defineProperty(exports, 'createGenerateClassName', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(createGenerateClassName)['default'];
  }
});



var _Jss2 = _interopRequireDefault(Jss_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Creates a new instance of Jss.
 */
var create = exports.create = function create(options) {
  return new _Jss2['default'](options);
};

/**
 * A global Jss instance.
 */
exports['default'] = create();
});

unwrapExports(lib);
var lib_1 = lib.create;

var parse = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _warning2 = _interopRequireDefault(warning_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var semiWithNl = /;\n/;

/**
 * Naive CSS parser.
 * - Supports only rule body (no selectors)
 * - Requires semicolon and new line after the value (except of last line)
 * - No nested rules support
 */

exports['default'] = function (cssText) {
  var style = {};
  var split = cssText.split(semiWithNl);
  for (var i = 0; i < split.length; i++) {
    var decl = split[i];

    if (!decl) continue;
    var colonIndex = decl.indexOf(':');
    if (colonIndex === -1) {
      (0, _warning2['default'])(false, 'Malformed CSS string "%s"', decl);
      continue;
    }
    var prop = decl.substr(0, colonIndex).trim();
    var value = decl.substr(colonIndex + 1).trim();
    style[prop] = value;
  }
  return style;
};
});

unwrapExports(parse);

var lib$2 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _parse2 = _interopRequireDefault(parse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var onProcessRule = function onProcessRule(rule) {
  if (typeof rule.style === 'string') {
    rule.style = (0, _parse2['default'])(rule.style);
  }
};

exports['default'] = function () {
  return { onProcessRule: onProcessRule };
};
});

unwrapExports(lib$2);

var lib$3 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports['default'] = jssGlobal;



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var propKey = '@global';
var prefixKey = '@global ';

var GlobalContainerRule = function () {
  function GlobalContainerRule(key, styles, options) {
    _classCallCheck(this, GlobalContainerRule);

    this.type = 'global';

    this.key = key;
    this.options = options;
    this.rules = new lib.RuleList(_extends({}, options, {
      parent: this
    }));

    for (var selector in styles) {
      this.rules.add(selector, styles[selector], { selector: selector });
    }

    this.rules.process();
  }

  /**
   * Get a rule.
   */


  _createClass(GlobalContainerRule, [{
    key: 'getRule',
    value: function getRule(name) {
      return this.rules.get(name);
    }

    /**
     * Create and register rule, run plugins.
     */

  }, {
    key: 'addRule',
    value: function addRule(name, style, options) {
      var rule = this.rules.add(name, style, options);
      this.options.jss.plugins.onProcessRule(rule);
      return rule;
    }

    /**
     * Get index of a rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.rules.indexOf(rule);
    }

    /**
     * Generates a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this.rules.toString();
    }
  }]);

  return GlobalContainerRule;
}();

var GlobalPrefixedRule = function () {
  function GlobalPrefixedRule(name, style, options) {
    _classCallCheck(this, GlobalPrefixedRule);

    this.name = name;
    this.options = options;
    var selector = name.substr(prefixKey.length);
    this.rule = options.jss.createRule(selector, style, _extends({}, options, {
      parent: this,
      selector: selector
    }));
  }

  _createClass(GlobalPrefixedRule, [{
    key: 'toString',
    value: function toString(options) {
      return this.rule.toString(options);
    }
  }]);

  return GlobalPrefixedRule;
}();

var separatorRegExp = /\s*,\s*/g;

function addScope(selector, scope) {
  var parts = selector.split(separatorRegExp);
  var scoped = '';
  for (var i = 0; i < parts.length; i++) {
    scoped += scope + ' ' + parts[i].trim();
    if (parts[i + 1]) scoped += ', ';
  }
  return scoped;
}

function handleNestedGlobalContainerRule(rule) {
  var options = rule.options,
      style = rule.style;

  var rules = style[propKey];

  if (!rules) return;

  for (var name in rules) {
    options.sheet.addRule(name, rules[name], _extends({}, options, {
      selector: addScope(name, rule.selector)
    }));
  }

  delete style[propKey];
}

function handlePrefixedGlobalRule(rule) {
  var options = rule.options,
      style = rule.style;

  for (var prop in style) {
    if (prop.substr(0, propKey.length) !== propKey) continue;

    var selector = addScope(prop.substr(propKey.length), rule.selector);
    options.sheet.addRule(selector, style[prop], _extends({}, options, {
      selector: selector
    }));
    delete style[prop];
  }
}

/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */
function jssGlobal() {
  function onCreateRule(name, styles, options) {
    if (name === propKey) {
      return new GlobalContainerRule(name, styles, options);
    }

    if (name[0] === '@' && name.substr(0, prefixKey.length) === prefixKey) {
      return new GlobalPrefixedRule(name, styles, options);
    }

    var parent = options.parent;


    if (parent) {
      if (parent.type === 'global' || parent.options.parent.type === 'global') {
        options.global = true;
      }
    }

    if (options.global) options.selector = name;

    return null;
  }

  function onProcessRule(rule) {
    if (rule.type !== 'style') return;

    handleNestedGlobalContainerRule(rule);
    handlePrefixedGlobalRule(rule);
  }

  return { onCreateRule: onCreateRule, onProcessRule: onProcessRule };
}
});

unwrapExports(lib$3);

var lib$4 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = jssExtend;



var _warning2 = _interopRequireDefault(warning_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var isObject = function isObject(obj) {
  return obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && !Array.isArray(obj);
};

/**
 * Recursively extend styles.
 */
function extend(style, rule, sheet) {
  var newStyle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (typeof style.extend === 'string') {
    if (sheet) {
      var refRule = sheet.getRule(style.extend);
      if (refRule) {
        if (refRule === rule) (0, _warning2['default'])(false, '[JSS] A rule tries to extend itself \r\n%s', rule);else if (refRule.options.parent) {
          var originalStyle = refRule.options.parent.rules.raw[style.extend];
          extend(originalStyle, rule, sheet, newStyle);
        }
      }
    }
  } else if (Array.isArray(style.extend)) {
    for (var index = 0; index < style.extend.length; index++) {
      extend(style.extend[index], rule, sheet, newStyle);
    }
  } else {
    for (var prop in style.extend) {
      if (prop === 'extend') {
        extend(style.extend.extend, rule, sheet, newStyle);
      } else if (isObject(style.extend[prop])) {
        if (!newStyle[prop]) newStyle[prop] = {};
        extend(style.extend[prop], rule, sheet, newStyle[prop]);
      } else {
        newStyle[prop] = style.extend[prop];
      }
    }
  }
  // Copy base style.
  for (var _prop in style) {
    if (_prop === 'extend') continue;
    if (isObject(newStyle[_prop]) && isObject(style[_prop])) {
      extend(style[_prop], rule, sheet, newStyle[_prop]);
    } else if (isObject(style[_prop])) {
      newStyle[_prop] = extend(style[_prop], rule, sheet);
    } else {
      newStyle[_prop] = style[_prop];
    }
  }

  return newStyle;
}

/**
 * Handle `extend` property.
 *
 * @param {Rule} rule
 * @api public
 */
function jssExtend() {
  function onProcessStyle(style, rule, sheet) {
    return style.extend ? extend(style, rule, sheet) : style;
  }

  return { onProcessStyle: onProcessStyle };
}
});

unwrapExports(lib$4);

var lib$5 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = jssNested;



var _warning2 = _interopRequireDefault(warning_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var separatorRegExp = /\s*,\s*/g;
var parentRegExp = /&/g;
var refRegExp = /\$([\w-]+)/g;

/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */
function jssNested() {
  // Get a function to be used for $ref replacement.
  function getReplaceRef(container) {
    return function (match, key) {
      var rule = container.getRule(key);
      if (rule) return rule.selector;
      (0, _warning2.default)(false, '[JSS] Could not find the referenced rule %s in %s.', key, container.options.meta || container);
      return key;
    };
  }

  var hasAnd = function hasAnd(str) {
    return str.indexOf('&') !== -1;
  };

  function replaceParentRefs(nestedProp, parentProp) {
    var parentSelectors = parentProp.split(separatorRegExp);
    var nestedSelectors = nestedProp.split(separatorRegExp);

    var result = '';

    for (var i = 0; i < parentSelectors.length; i++) {
      var parent = parentSelectors[i];

      for (var j = 0; j < nestedSelectors.length; j++) {
        var nested = nestedSelectors[j];
        if (result) result += ', ';
        // Replace all & by the parent or prefix & with the parent.
        result += hasAnd(nested) ? nested.replace(parentRegExp, parent) : parent + ' ' + nested;
      }
    }

    return result;
  }

  function getOptions(rule, container, options) {
    // Options has been already created, now we only increase index.
    if (options) return _extends({}, options, { index: options.index + 1 });

    var nestingLevel = rule.options.nestingLevel;

    nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

    return _extends({}, rule.options, {
      nestingLevel: nestingLevel,
      index: container.indexOf(rule) + 1
    });
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;
    var container = rule.options.parent;
    var options = void 0;
    var replaceRef = void 0;
    for (var prop in style) {
      var isNested = hasAnd(prop);
      var isNestedConditional = prop[0] === '@';

      if (!isNested && !isNestedConditional) continue;

      options = getOptions(rule, container, options);

      if (isNested) {
        var selector = replaceParentRefs(prop, rule.selector
        // Lazily create the ref replacer function just once for
        // all nested rules within the sheet.
        );if (!replaceRef) replaceRef = getReplaceRef(container
        // Replace all $refs.
        );selector = selector.replace(refRegExp, replaceRef);

        container.addRule(selector, style[prop], _extends({}, options, { selector: selector }));
      } else if (isNestedConditional) {
        container
        // Place conditional right after the parent rule to ensure right ordering.
        .addRule(prop, null, options).addRule(rule.key, style[prop], { selector: rule.selector });
      }

      delete style[prop];
    }

    return style;
  }

  return { onProcessStyle: onProcessStyle };
}
});

unwrapExports(lib$5);

var lib$6 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = jssCompose;



var _warning2 = _interopRequireDefault(warning_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Set selector.
 *
 * @param {Object} original rule
 * @param {String} className class string
 * @return {Boolean} flag, indicating function was successfull or not
 */
function registerClass(rule, className) {
  // Skip falsy values
  if (!className) return true;

  // Support array of class names `{composes: ['foo', 'bar']}`
  if (Array.isArray(className)) {
    for (var index = 0; index < className.length; index++) {
      var isSetted = registerClass(rule, className[index]);
      if (!isSetted) return false;
    }

    return true;
  }

  // Support space separated class names `{composes: 'foo bar'}`
  if (className.indexOf(' ') > -1) {
    return registerClass(rule, className.split(' '));
  }

  var parent = rule.options.parent;

  // It is a ref to a local rule.

  if (className[0] === '$') {
    var refRule = parent.getRule(className.substr(1));

    if (!refRule) {
      (0, _warning2.default)(false, '[JSS] Referenced rule is not defined. \r\n%s', rule);
      return false;
    }

    if (refRule === rule) {
      (0, _warning2.default)(false, '[JSS] Cyclic composition detected. \r\n%s', rule);
      return false;
    }

    parent.classes[rule.key] += ' ' + parent.classes[refRule.key];

    return true;
  }

  rule.options.parent.classes[rule.key] += ' ' + className;

  return true;
}

/**
 * Convert compose property to additional class, remove property from original styles.
 *
 * @param {Rule} rule
 * @api public
 */
function jssCompose() {
  function onProcessStyle(style, rule) {
    if (!style.composes) return style;
    registerClass(rule, style.composes);
    // Remove composes property to prevent infinite loop.
    delete style.composes;
    return style;
  }
  return { onProcessStyle: onProcessStyle };
}
});

unwrapExports(lib$6);

var lib$7 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = camelCase;
var regExp = /([A-Z])/g;

/**
 * Replace a string passed from String#replace.
 * @param {String} str
 * @return {String}
 */
function replace(str) {
  return "-" + str.toLowerCase();
}

/**
 * Convert camel cased property names to dash separated.
 *
 * @param {Object} style
 * @return {Object}
 */
function convertCase(style) {
  var converted = {};

  for (var prop in style) {
    converted[prop.replace(regExp, replace)] = style[prop];
  }

  if (style.fallbacks) {
    if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
  }

  return converted;
}

/**
 * Allow camel cased property names by converting them back to dasherized.
 *
 * @param {Rule} rule
 */
function camelCase() {
  function onProcessStyle(style) {
    if (Array.isArray(style)) {
      // Handle rules like @font-face, which can have multiple styles in an array
      for (var index = 0; index < style.length; index++) {
        style[index] = convertCase(style[index]);
      }
      return style;
    }

    return convertCase(style);
  }

  return { onProcessStyle: onProcessStyle };
}
});

unwrapExports(lib$7);

var defaultUnits = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Generated jss-default-unit CSS property units
 *
 * @type object
 */
exports['default'] = {
  'animation-delay': 'ms',
  'animation-duration': 'ms',
  'background-position': 'px',
  'background-position-x': 'px',
  'background-position-y': 'px',
  'background-size': 'px',
  border: 'px',
  'border-bottom': 'px',
  'border-bottom-left-radius': 'px',
  'border-bottom-right-radius': 'px',
  'border-bottom-width': 'px',
  'border-left': 'px',
  'border-left-width': 'px',
  'border-radius': 'px',
  'border-right': 'px',
  'border-right-width': 'px',
  'border-spacing': 'px',
  'border-top': 'px',
  'border-top-left-radius': 'px',
  'border-top-right-radius': 'px',
  'border-top-width': 'px',
  'border-width': 'px',
  'border-after-width': 'px',
  'border-before-width': 'px',
  'border-end-width': 'px',
  'border-horizontal-spacing': 'px',
  'border-start-width': 'px',
  'border-vertical-spacing': 'px',
  bottom: 'px',
  'box-shadow': 'px',
  'column-gap': 'px',
  'column-rule': 'px',
  'column-rule-width': 'px',
  'column-width': 'px',
  'flex-basis': 'px',
  'font-size': 'px',
  'font-size-delta': 'px',
  height: 'px',
  left: 'px',
  'letter-spacing': 'px',
  'logical-height': 'px',
  'logical-width': 'px',
  margin: 'px',
  'margin-after': 'px',
  'margin-before': 'px',
  'margin-bottom': 'px',
  'margin-left': 'px',
  'margin-right': 'px',
  'margin-top': 'px',
  'max-height': 'px',
  'max-width': 'px',
  'margin-end': 'px',
  'margin-start': 'px',
  'mask-position-x': 'px',
  'mask-position-y': 'px',
  'mask-size': 'px',
  'max-logical-height': 'px',
  'max-logical-width': 'px',
  'min-height': 'px',
  'min-width': 'px',
  'min-logical-height': 'px',
  'min-logical-width': 'px',
  motion: 'px',
  'motion-offset': 'px',
  outline: 'px',
  'outline-offset': 'px',
  'outline-width': 'px',
  padding: 'px',
  'padding-bottom': 'px',
  'padding-left': 'px',
  'padding-right': 'px',
  'padding-top': 'px',
  'padding-after': 'px',
  'padding-before': 'px',
  'padding-end': 'px',
  'padding-start': 'px',
  'perspective-origin-x': '%',
  'perspective-origin-y': '%',
  perspective: 'px',
  right: 'px',
  'shape-margin': 'px',
  size: 'px',
  'text-indent': 'px',
  'text-stroke': 'px',
  'text-stroke-width': 'px',
  top: 'px',
  'transform-origin': '%',
  'transform-origin-x': '%',
  'transform-origin-y': '%',
  'transform-origin-z': '%',
  'transition-delay': 'ms',
  'transition-duration': 'ms',
  'vertical-align': 'px',
  width: 'px',
  'word-spacing': 'px',
  // Not existing properties.
  // Used to avoid issues with jss-expand intergration.
  'box-shadow-x': 'px',
  'box-shadow-y': 'px',
  'box-shadow-blur': 'px',
  'box-shadow-spread': 'px',
  'font-line-height': 'px',
  'text-shadow-x': 'px',
  'text-shadow-y': 'px',
  'text-shadow-blur': 'px'
};
});

unwrapExports(defaultUnits);

var lib$8 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = defaultUnit;



var _defaultUnits2 = _interopRequireDefault(defaultUnits);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Clones the object and adds a camel cased property version.
 */
function addCamelCasedVersion(obj) {
  var regExp = /(-[a-z])/g;
  var replace = function replace(str) {
    return str[1].toUpperCase();
  };
  var newObj = {};
  for (var key in obj) {
    newObj[key] = obj[key];
    newObj[key.replace(regExp, replace)] = obj[key];
  }
  return newObj;
}

var units = addCamelCasedVersion(_defaultUnits2['default']);

/**
 * Recursive deep style passing function
 *
 * @param {String} current property
 * @param {(Object|Array|Number|String)} property value
 * @param {Object} options
 * @return {(Object|Array|Number|String)} resulting value
 */
function iterate(prop, value, options) {
  if (!value) return value;

  var convertedValue = value;

  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  if (type === 'object' && Array.isArray(value)) type = 'array';

  switch (type) {
    case 'object':
      if (prop === 'fallbacks') {
        for (var innerProp in value) {
          value[innerProp] = iterate(innerProp, value[innerProp], options);
        }
        break;
      }
      for (var _innerProp in value) {
        value[_innerProp] = iterate(prop + '-' + _innerProp, value[_innerProp], options);
      }
      break;
    case 'array':
      for (var i = 0; i < value.length; i++) {
        value[i] = iterate(prop, value[i], options);
      }
      break;
    case 'number':
      if (value !== 0) {
        convertedValue = value + (options[prop] || units[prop] || '');
      }
      break;
    default:
      break;
  }

  return convertedValue;
}

/**
 * Add unit to numeric values.
 */
function defaultUnit() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var camelCasedOptions = addCamelCasedVersion(options);

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      style[prop] = iterate(prop, style[prop], camelCasedOptions);
    }

    return style;
  }

  function onChangeValue(value, prop) {
    return iterate(prop, value, camelCasedOptions);
  }

  return { onProcessStyle: onProcessStyle, onChangeValue: onChangeValue };
}
});

unwrapExports(lib$8);

var props = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * A scheme for converting properties from array to regular style.
 * All properties listed below will be transformed to a string separated by space.
 */
var propArray = exports.propArray = {
  'background-size': true,
  'background-position': true,
  border: true,
  'border-bottom': true,
  'border-left': true,
  'border-top': true,
  'border-right': true,
  'border-radius': true,
  'border-image': true,
  'box-shadow': true,
  flex: true,
  margin: true,
  padding: true,
  outline: true,
  'transform-origin': true,
  transform: true,
  transition: true

  /**
   * A scheme for converting arrays to regular styles inside of objects.
   * For e.g.: "{position: [0, 0]}" => "background-position: 0 0;".
   */
};var propArrayInObj = exports.propArrayInObj = {
  position: true, // background-position
  size: true // background-size


  /**
   * A scheme for parsing and building correct styles from passed objects.
   */
};var propObj = exports.propObj = {
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  margin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  background: {
    attachment: null,
    color: null,
    image: null,
    position: null,
    repeat: null
  },
  border: {
    width: null,
    style: null,
    color: null
  },
  'border-top': {
    width: null,
    style: null,
    color: null
  },
  'border-right': {
    width: null,
    style: null,
    color: null
  },
  'border-bottom': {
    width: null,
    style: null,
    color: null
  },
  'border-left': {
    width: null,
    style: null,
    color: null
  },
  outline: {
    width: null,
    style: null,
    color: null
  },
  'list-style': {
    type: null,
    position: null,
    image: null
  },
  transition: {
    property: null,
    duration: null,
    'timing-function': null,
    timingFunction: null, // Needed for avoiding comilation issues with jss-camel-case
    delay: null
  },
  animation: {
    name: null,
    duration: null,
    'timing-function': null,
    timingFunction: null, // Needed to avoid compilation issues with jss-camel-case
    delay: null,
    'iteration-count': null,
    iterationCount: null, // Needed to avoid compilation issues with jss-camel-case
    direction: null,
    'fill-mode': null,
    fillMode: null, // Needed to avoid compilation issues with jss-camel-case
    'play-state': null,
    playState: null // Needed to avoid compilation issues with jss-camel-case
  },
  'box-shadow': {
    x: 0,
    y: 0,
    blur: 0,
    spread: 0,
    color: null,
    inset: null
  },
  'text-shadow': {
    x: 0,
    y: 0,
    blur: null,
    color: null
  }

  /**
   * A scheme for converting non-standart properties inside object.
   * For e.g.: include 'border-radius' property inside 'border' object.
   */
};var customPropObj = exports.customPropObj = {
  border: {
    radius: 'border-radius',
    image: 'border-image'
  },
  background: {
    size: 'background-size',
    image: 'background-image'
  },
  font: {
    style: 'font-style',
    variant: 'font-variant',
    weight: 'font-weight',
    stretch: 'font-stretch',
    size: 'font-size',
    family: 'font-family',
    lineHeight: 'line-height', // Needed to avoid compilation issues with jss-camel-case
    'line-height': 'line-height'
  },
  flex: {
    grow: 'flex-grow',
    basis: 'flex-basis',
    direction: 'flex-direction',
    wrap: 'flex-wrap',
    flow: 'flex-flow',
    shrink: 'flex-shrink'
  },
  align: {
    self: 'align-self',
    items: 'align-items',
    content: 'align-content'
  }
};
});

unwrapExports(props);

var lib$9 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = jssExpand;



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Map values by given prop.
 *
 * @param {Array} array of values
 * @param {String} original property
 * @param {String} original rule
 * @return {String} mapped values
 */
function mapValuesByProp(value, prop, rule) {
  return value.map(function (item) {
    return objectToString(item, prop, rule);
  });
}

/**
 * Convert array to string.
 *
 * @param {Array} array of values
 * @param {String} original property
 * @param {Object} sheme, for converting arrays in strings
 * @param {Object} original rule
 * @return {String} converted string
 */
function arrayToString(value, prop, scheme, rule) {
  if (scheme[prop] == null) return value.join(',');
  if (value.length === 0) return '';
  if (Array.isArray(value[0])) return arrayToString(value[0], prop, scheme);
  if (_typeof(value[0]) === 'object') {
    return mapValuesByProp(value, prop, rule);
  }
  return value.join(' ');
}

/**
 * Convert object to string.
 *
 * @param {Object} object of values
 * @param {String} original property
 * @param {Object} original rule
 * @param {Boolean} is fallback prop
 * @return {String} converted string
 */
function objectToString(value, prop, rule, isFallback) {
  if (!(props.propObj[prop] || props.customPropObj[prop])) return '';

  var result = [];

  // Check if exists any non-standart property
  if (props.customPropObj[prop]) {
    value = customPropsToStyle(value, rule, props.customPropObj[prop], isFallback);
  }

  // Pass throught all standart props
  if (Object.keys(value).length) {
    for (var baseProp in props.propObj[prop]) {
      if (value[baseProp]) {
        if (Array.isArray(value[baseProp])) {
          result.push(arrayToString(value[baseProp], baseProp, props.propArrayInObj));
        } else result.push(value[baseProp]);
        continue;
      }

      // Add default value from props config.
      if (props.propObj[prop][baseProp] != null) {
        result.push(props.propObj[prop][baseProp]);
      }
    }
  }

  return result.join(' ');
}

/**
 * Convert custom properties values to styles adding them to rule directly
 *
 * @param {Object} object of values
 * @param {Object} original rule
 * @param {String} property, that contain partial custom properties
 * @param {Boolean} is fallback prop
 * @return {Object} value without custom properties, that was already added to rule
 */
function customPropsToStyle(value, rule, customProps, isFallback) {
  for (var prop in customProps) {
    var propName = customProps[prop];

    // If current property doesn't exist already in rule - add new one
    if (typeof value[prop] !== 'undefined' && (isFallback || !rule.prop(propName))) {
      var appendedValue = styleDetector(_defineProperty({}, propName, value[prop]), rule)[propName];

      // Add style directly in rule
      if (isFallback) rule.style.fallbacks[propName] = appendedValue;else rule.style[propName] = appendedValue;
    }
    // Delete converted property to avoid double converting
    delete value[prop];
  }

  return value;
}

/**
 * Detect if a style needs to be converted.
 *
 * @param {Object} style
 * @param {Object} rule
 * @param {Boolean} is fallback prop
 * @return {Object} convertedStyle
 */
function styleDetector(style, rule, isFallback) {
  for (var prop in style) {
    var value = style[prop];

    if (Array.isArray(value)) {
      // Check double arrays to avoid recursion.
      if (!Array.isArray(value[0])) {
        if (prop === 'fallbacks') {
          for (var index = 0; index < style.fallbacks.length; index++) {
            style.fallbacks[index] = styleDetector(style.fallbacks[index], rule, true);
          }
          continue;
        }

        style[prop] = arrayToString(value, prop, props.propArray);
        // Avoid creating properties with empty values
        if (!style[prop]) delete style[prop];
      }
    } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
      if (prop === 'fallbacks') {
        style.fallbacks = styleDetector(style.fallbacks, rule, true);
        continue;
      }

      style[prop] = objectToString(value, prop, rule, isFallback);
      // Avoid creating properties with empty values
      if (!style[prop]) delete style[prop];
    }

    // Maybe a computed value resulting in an empty string
    else if (style[prop] === '') delete style[prop];
  }

  return style;
}

/**
 * Adds possibility to write expanded styles.
 *
 * @param {Rule} rule
 * @api public
 */
function jssExpand() {
  function onProcessStyle(style, rule) {
    if (!style || rule.type !== 'style') return style;

    if (Array.isArray(style)) {
      // Pass rules one by one and reformat them
      for (var index = 0; index < style.length; index++) {
        style[index] = styleDetector(style[index], rule);
      }
      return style;
    }

    return styleDetector(style, rule);
  }

  return { onProcessStyle: onProcessStyle };
}
});

unwrapExports(lib$9);

var prefix = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var js = ''; /**
              * Export javascript style and css style vendor prefixes.
              * Based on "transform" support test.
              */

var css = '';

// We should not do anything if required serverside.
if (_isInBrowser2['default']) {
  // Order matters. We need to check Webkit the last one because
  // other vendors use to add Webkit prefixes to some properties
  var jsCssMap = {
    Moz: '-moz-',
    // IE did it wrong again ...
    ms: '-ms-',
    O: '-o-',
    Webkit: '-webkit-'
  };
  var style = document.createElement('p').style;
  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      js = key;
      css = jsCssMap[key];
      break;
    }
  }
}

/**
 * Vendor prefix string for the current browser.
 *
 * @type {{js: String, css: String}}
 * @api public
 */
exports['default'] = { js: js, css: css };
});

unwrapExports(prefix);

var camelize_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = camelize;
var regExp = /[-\s]+(.)?/g;

/**
 * Convert dash separated strings to camel cased.
 *
 * @param {String} str
 * @return {String}
 */
function camelize(str) {
  return str.replace(regExp, toUpper);
}

function toUpper(match, c) {
  return c ? c.toUpperCase() : '';
}
});

unwrapExports(camelize_1);

var supportedProperty_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = supportedProperty;



var _isInBrowser2 = _interopRequireDefault(_isInBrowser);



var _prefix2 = _interopRequireDefault(prefix);



var _camelize2 = _interopRequireDefault(camelize_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var el = void 0;
var cache = {};

if (_isInBrowser2['default']) {
  el = document.createElement('p');

  /**
   * We test every property on vendor prefix requirement.
   * Once tested, result is cached. It gives us up to 70% perf boost.
   * http://jsperf.com/element-style-object-access-vs-plain-object
   *
   * Prefill cache with known css properties to reduce amount of
   * properties we need to feature test at runtime.
   * http://davidwalsh.name/vendor-prefix
   */
  var computed = window.getComputedStyle(document.documentElement, '');
  for (var key in computed) {
    if (!isNaN(key)) cache[computed[key]] = computed[key];
  }
}

/**
 * Test if a property is supported, returns supported property with vendor
 * prefix if required. Returns `false` if not supported.
 *
 * @param {String} prop dash separated
 * @return {String|Boolean}
 * @api public
 */
function supportedProperty(prop) {
  // For server-side rendering.
  if (!el) return prop;

  // We have not tested this prop yet, lets do the test.
  if (cache[prop] != null) return cache[prop];

  // Camelization is required because we can't test using
  // css syntax for e.g. in FF.
  // Test if property is supported as it is.
  if ((0, _camelize2['default'])(prop) in el.style) {
    cache[prop] = prop;
  }
  // Test if property is supported with vendor prefix.
  else if (_prefix2['default'].js + (0, _camelize2['default'])('-' + prop) in el.style) {
      cache[prop] = _prefix2['default'].css + prop;
    } else {
      cache[prop] = false;
    }

  return cache[prop];
}
});

unwrapExports(supportedProperty_1);

var supportedValue_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = supportedValue;



var _isInBrowser2 = _interopRequireDefault(_isInBrowser);



var _prefix2 = _interopRequireDefault(prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var cache = {};
var el = void 0;

if (_isInBrowser2['default']) el = document.createElement('p');

/**
 * Returns prefixed value if needed. Returns `false` if value is not supported.
 *
 * @param {String} property
 * @param {String} value
 * @return {String|Boolean}
 * @api public
 */
function supportedValue(property, value) {
  // For server-side rendering.
  if (!el) return value;

  // It is a string or a number as a string like '1'.
  // We want only prefixable values here.
  if (typeof value !== 'string' || !isNaN(parseInt(value, 10))) return value;

  var cacheKey = property + value;

  if (cache[cacheKey] != null) return cache[cacheKey];

  // IE can even throw an error in some cases, for e.g. style.content = 'bar'
  try {
    // Test value as it is.
    el.style[property] = value;
  } catch (err) {
    cache[cacheKey] = false;
    return false;
  }

  // Value is supported as it is.
  if (el.style[property] !== '') {
    cache[cacheKey] = value;
  } else {
    // Test value with vendor prefix.
    value = _prefix2['default'].css + value;

    // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.
    if (value === '-ms-flex') value = '-ms-flexbox';

    el.style[property] = value;

    // Value is supported with vendor prefix.
    if (el.style[property] !== '') cache[cacheKey] = value;
  }

  if (!cache[cacheKey]) cache[cacheKey] = false;

  // Reset style value.
  el.style[property] = '';

  return cache[cacheKey];
}
});

unwrapExports(supportedValue_1);

var lib$11 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportedValue = exports.supportedProperty = exports.prefix = undefined;



var _prefix2 = _interopRequireDefault(prefix);



var _supportedProperty2 = _interopRequireDefault(supportedProperty_1);



var _supportedValue2 = _interopRequireDefault(supportedValue_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  prefix: _prefix2['default'],
  supportedProperty: _supportedProperty2['default'],
  supportedValue: _supportedValue2['default']
}; /**
    * CSS Vendor prefix detection and property feature testing.
    *
    * @copyright Oleg Slobodskoi 2015
    * @website https://github.com/jsstyles/css-vendor
    * @license MIT
    */

exports.prefix = _prefix2['default'];
exports.supportedProperty = _supportedProperty2['default'];
exports.supportedValue = _supportedValue2['default'];
});

unwrapExports(lib$11);

var lib$10 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = jssVendorPrefixer;



var vendor = _interopRequireWildcard(lib$11);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

/**
 * Add vendor prefix to a property name when needed.
 *
 * @param {Rule} rule
 * @api public
 */
function jssVendorPrefixer() {
  function onProcessRule(rule) {
    if (rule.type === 'keyframes') {
      rule.key = '@' + vendor.prefix.css + rule.key.substr(1);
    }
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      var value = style[prop];

      var changeProp = false;
      var supportedProp = vendor.supportedProperty(prop);
      if (supportedProp && supportedProp !== prop) changeProp = true;

      var changeValue = false;
      var supportedValue = vendor.supportedValue(supportedProp, value);
      if (supportedValue && supportedValue !== value) changeValue = true;

      if (changeProp || changeValue) {
        if (changeProp) delete style[prop];
        style[supportedProp || prop] = supportedValue || value;
      }
    }

    return style;
  }

  function onChangeValue(value, prop) {
    return vendor.supportedValue(prop, value);
  }

  return { onProcessRule: onProcessRule, onProcessStyle: onProcessStyle, onChangeValue: onChangeValue };
}
});

unwrapExports(lib$10);

var lib$12 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = jssPropsSort;
/**
 * Sort props by length.
 */
function jssPropsSort() {
  function sort(prop0, prop1) {
    return prop0.length - prop1.length;
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    var newStyle = {};
    var props = Object.keys(style).sort(sort);
    for (var prop in props) {
      newStyle[props[prop]] = style[props[prop]];
    }
    return newStyle;
  }

  return { onProcessStyle: onProcessStyle };
}
});

unwrapExports(lib$12);

var lib$1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _jssTemplate2 = _interopRequireDefault(lib$2);



var _jssGlobal2 = _interopRequireDefault(lib$3);



var _jssExtend2 = _interopRequireDefault(lib$4);



var _jssNested2 = _interopRequireDefault(lib$5);



var _jssCompose2 = _interopRequireDefault(lib$6);



var _jssCamelCase2 = _interopRequireDefault(lib$7);



var _jssDefaultUnit2 = _interopRequireDefault(lib$8);



var _jssExpand2 = _interopRequireDefault(lib$9);



var _jssVendorPrefixer2 = _interopRequireDefault(lib$10);



var _jssPropsSort2 = _interopRequireDefault(lib$12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    plugins: [(0, _jssTemplate2.default)(options.template), (0, _jssGlobal2.default)(options.global), (0, _jssExtend2.default)(options.extend), (0, _jssNested2.default)(options.nested), (0, _jssCompose2.default)(options.compose), (0, _jssCamelCase2.default)(options.camelCase), (0, _jssDefaultUnit2.default)(options.defaultUnit), (0, _jssExpand2.default)(options.expand), (0, _jssVendorPrefixer2.default)(options.vendorPrefixer), (0, _jssPropsSort2.default)(options.propsSort)]
  };
};
});

var preset = unwrapExports(lib$1);

class SetupJss {
    constructor() {
        this.jss = lib_1(preset());
    }
    attachStyleSheet(styles) {
        this.sheet = this.jss.createStyleSheet(styles).attach();
    }
    getClassName(style) {
        if (typeof style === 'string') {
            return this.sheet.classes[style];
        }
        let cNames = '';
        style.map((val) => cNames += ` ${this.sheet.classes[val]}`);
        return cNames;
    }
}

var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, optionsArgument) {
	var clone = !optionsArgument || optionsArgument.clone !== false;

	return (clone && isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, optionsArgument)
		: value
}

function defaultArrayMerge(target, source, optionsArgument) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, optionsArgument)
	})
}

function mergeObject(target, source, optionsArgument) {
	var destination = {};
	if (isMergeableObject(target)) {
		Object.keys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], optionsArgument);
		});
	}
	Object.keys(source).forEach(function(key) {
		if (!isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], optionsArgument);
		} else {
			destination[key] = deepmerge(target[key], source[key], optionsArgument);
		}
	});
	return destination
}

function deepmerge(target, source, optionsArgument) {
	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var options = optionsArgument || { arrayMerge: defaultArrayMerge };
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, optionsArgument)
	} else if (sourceIsArray) {
		var arrayMerge = options.arrayMerge || defaultArrayMerge;
		return arrayMerge(target, source, optionsArgument)
	} else {
		return mergeObject(target, source, optionsArgument)
	}
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, optionsArgument)
	}, {})
};

var deepmerge_1 = deepmerge;

var __rest$1 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
function round(value) {
    return Math.round(value * 1e5) / 1e5;
}
function createTypography(palette, typography) {
    const _a = typeof typography === 'function' ? typography(palette) : typography, { fontFamily = '"Roboto", "Helvetica", "Arial", sans-serif', fontSize = 14, // px
    fontWeightLight = 300, fontWeightRegular = 400, fontWeightMedium = 500, htmlFontSize = 16 } = _a, // 16px is the default font-size used by browsers on the html element.
    other = __rest$1(_a, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "htmlFontSize"]);
    function pxToRem(value) {
        return `${value / htmlFontSize}rem`;
    }
    return deepmerge_1({
        pxToRem,
        round,
        fontFamily,
        fontSize,
        fontWeightLight,
        fontWeightRegular,
        fontWeightMedium,
        display4: {
            fontSize: pxToRem(112),
            fontWeight: fontWeightLight,
            fontFamily,
            letterSpacing: '-.04em',
            lineHeight: `${round(128 / 112)}em`,
            marginLeft: '-.06em',
            color: palette.text.secondary,
        },
        display3: {
            fontSize: pxToRem(56),
            fontWeight: fontWeightRegular,
            fontFamily,
            letterSpacing: '-.02em',
            lineHeight: `${round(73 / 56)}em`,
            marginLeft: '-.04em',
            color: palette.text.secondary,
        },
        display2: {
            fontSize: pxToRem(45),
            fontWeight: fontWeightRegular,
            fontFamily,
            lineHeight: `${round(48 / 45)}em`,
            marginLeft: '-.04em',
            color: palette.text.secondary,
        },
        display1: {
            fontSize: pxToRem(34),
            fontWeight: fontWeightRegular,
            fontFamily,
            lineHeight: `${round(41 / 34)}em`,
            marginLeft: '-.04em',
            color: palette.text.secondary,
        },
        headline: {
            fontSize: pxToRem(24),
            fontWeight: fontWeightRegular,
            fontFamily,
            lineHeight: `${round(32.5 / 24)}em`,
            color: palette.text.primary,
        },
        title: {
            fontSize: pxToRem(21),
            fontWeight: fontWeightMedium,
            fontFamily,
            lineHeight: `${round(24.5 / 21)}em`,
            color: palette.text.primary,
        },
        subheading: {
            fontSize: pxToRem(16),
            fontWeight: fontWeightRegular,
            fontFamily,
            lineHeight: `${round(24 / 16)}em`,
            color: palette.text.primary,
        },
        body2: {
            fontSize: pxToRem(14),
            fontWeight: fontWeightMedium,
            fontFamily,
            lineHeight: `${round(24 / 14)}em`,
            color: palette.text.primary,
        },
        body1: {
            fontSize: pxToRem(14),
            fontWeight: fontWeightRegular,
            fontFamily,
            lineHeight: `${round(20.5 / 14)}em`,
            color: palette.text.primary,
        },
        caption: {
            fontSize: pxToRem(12),
            fontWeight: fontWeightRegular,
            fontFamily,
            lineHeight: `${round(16.5 / 12)}em`,
            color: palette.text.secondary,
        },
        button: {
            fontSize: pxToRem(fontSize),
            textTransform: 'uppercase',
            fontWeight: fontWeightMedium,
            fontFamily,
        },
    }, other, {
        clone: false,
    });
}

var __rest$2 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
const keys = ['xs', 'sm', 'md', 'lg', 'xl'];
function createBreakpoints(breakpoints) {
    const { 
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm[.
    values = {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
    }, unit = 'px', step = 5 } = breakpoints, other = __rest$2(breakpoints, ["values", "unit", "step"]);
    function up(key) {
        const value = typeof values[key] === 'number' ? values[key] : key;
        return `@media (min-width:${value}${unit})`;
    }
    function down(key) {
        const endIndex = keys.indexOf(key) + 1;
        const upperbound = values[keys[endIndex]];
        if (endIndex === keys.length) {
            // xl down applies to all sizes
            return up('xs');
        }
        const value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
        return `@media (max-width:${value - step / 100}${unit})`;
    }
    function between(start, end) {
        const endIndex = keys.indexOf(end) + 1;
        if (endIndex === keys.length) {
            return up(start);
        }
        return (`@media (min-width:${values[start]}${unit}) and ` +
            `(max-width:${values[keys[endIndex]] - step / 100}${unit})`);
    }
    function only(key) {
        return between(key, key);
    }
    function width(key) {
        return values[key];
    }
    let bp = Object.assign({ keys,
        values,
        up,
        down,
        between,
        only,
        width }, other);
    return bp;
}

const indigo = {
    50: '#e8eaf6',
    100: '#c5cae9',
    200: '#9fa8da',
    300: '#7986cb',
    400: '#5c6bc0',
    500: '#3f51b5',
    600: '#3949ab',
    700: '#303f9f',
    800: '#283593',
    900: '#1a237e',
    A100: '#8c9eff',
    A200: '#536dfe',
    A400: '#3d5afe',
    A700: '#304ffe',
};

const pink = {
    50: '#fce4ec',
    100: '#f8bbd0',
    200: '#f48fb1',
    300: '#f06292',
    400: '#ec407a',
    500: '#e91e63',
    600: '#d81b60',
    700: '#c2185b',
    800: '#ad1457',
    900: '#880e4f',
    A100: '#ff80ab',
    A200: '#ff4081',
    A400: '#f50057',
    A700: '#c51162',
};

const grey = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#d5d5d5',
    A200: '#aaaaaa',
    A400: '#303030',
    A700: '#616161',
};

const red = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000',
};

const common = {
    black: '#000',
    white: '#fff',
    transparent: 'rgba(0, 0, 0, 0)',
    fullBlack: 'rgba(0, 0, 0, 1)',
    darkBlack: 'rgba(0, 0, 0, 0.87)',
    lightBlack: 'rgba(0, 0, 0, 0.54)',
    minBlack: 'rgba(0, 0, 0, 0.26)',
    faintBlack: 'rgba(0, 0, 0, 0.12)',
    fullWhite: 'rgba(255, 255, 255, 1)',
    darkWhite: 'rgba(255, 255, 255, 0.87)',
    lightWhite: 'rgba(255, 255, 255, 0.54)',
};

function clamp(value, min, max) {
    warning_1(value >= min && value <= max, `Material-UI: the value provided ${value} is out of range [${min}, ${max}].`);
    if (value < min) {
        return min;
    }
    if (value > max) {
        return max;
    }
    return value;
}
function convertColorToString(color) {
    const { type, values } = color;
    if (type.indexOf('rgb') > -1) {
        // Only convert the first 3 values to int (i.e. not alpha)
        for (let i = 0; i < 3; i += 1) {
            values[i] = parseInt(values[i], 10);
        }
    }
    let colorString;
    if (type.indexOf('hsl') > -1) {
        colorString = `${color.type}(${values[0]}, ${values[1]}%, ${values[2]}%`;
    }
    else {
        colorString = `${color.type}(${values[0]}, ${values[1]}, ${values[2]}`;
    }
    if (values.length === 4) {
        colorString += `, ${color.values[3]})`;
    }
    else {
        colorString += ')';
    }
    return colorString;
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 *  @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 *  @returns {string} A CSS rgb color string
 */
function convertHexToRGB(color) {
    if (color.length === 4) {
        let extendedColor = '#';
        for (let i = 1; i < color.length; i += 1) {
            extendedColor += color.charAt(i) + color.charAt(i);
        }
        color = extendedColor;
    }
    const values = {
        r: parseInt(color.substr(1, 2), 16),
        g: parseInt(color.substr(3, 2), 16),
        b: parseInt(color.substr(5, 2), 16),
    };
    return `rgb(${values.r}, ${values.g}, ${values.b})`;
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {{type: string, values: number[]}} A MUI color object
 */
function decomposeColor(color) {
    if (color.charAt(0) === '#') {
        return decomposeColor(convertHexToRGB(color));
    }
    const marker = color.indexOf('(');
    const type = color.substring(0, marker);
    let values = color.substring(marker + 1, color.length - 1).split(',');
    values = values.map(value => parseFloat(value));
    return { type, values };
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */
function getContrastRatio(foreground, background) {
    const lumA = getLuminance(foreground);
    const lumB = getLuminance(background);
    return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */
function getLuminance(color) {
    const decomposedColor = decomposeColor(color);
    if (decomposedColor.type.indexOf('rgb') > -1) {
        const rgb = decomposedColor.values.map(val => {
            val /= 255; // normalized
            return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
        });
        // Truncate at 3 digits
        return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
    }
    else if (decomposedColor.type.indexOf('hsl') > -1) {
        return decomposedColor.values[2] / 100;
    }
    throw new Error(`Material-UI: unsupported \`${color}\` color.`);
}
/**
 * Darken or lighten a colour, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function fade(color, value) {
    color = decomposeColor(color);
    value = clamp(value, 0, 1);
    if (color.type === 'rgb' || color.type === 'hsl') {
        color.type += 'a';
    }
    color.values[3] = value;
    return convertColorToString(color);
}
/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

var __rest$3 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
const light = {
    text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.54)',
        disabled: 'rgba(0, 0, 0, 0.38)',
        hint: 'rgba(0, 0, 0, 0.38)',
        icon: 'rgba(0, 0, 0, 0.38)',
        divider: 'rgba(0, 0, 0, 0.12)',
        lightDivider: 'rgba(0, 0, 0, 0.075)',
    },
    input: {
        bottomLine: 'rgba(0, 0, 0, 0.42)',
        helperText: 'rgba(0, 0, 0, 0.54)',
        labelText: 'rgba(0, 0, 0, 0.54)',
        inputText: 'rgba(0, 0, 0, 0.87)',
        disabled: 'rgba(0, 0, 0, 0.42)',
    },
    action: {
        active: 'rgba(0, 0, 0, 0.54)',
        disabled: 'rgba(0, 0, 0, 0.26)',
    },
    background: {
        paper: common.white,
        default: grey[50],
        appBar: grey[100],
        contentFrame: grey[200],
        chip: grey[300],
        avatar: grey[400],
    },
    line: {
        stepper: grey[400],
    },
};
const dark = {
    text: {
        primary: 'rgba(255, 255, 255, 1)',
        secondary: 'rgba(255, 255, 255, 0.7)',
        disabled: 'rgba(255, 255, 255, 0.5)',
        hint: 'rgba(255, 255, 255, 0.5)',
        icon: 'rgba(255, 255, 255, 0.5)',
        divider: 'rgba(255, 255, 255, 0.12)',
        lightDivider: 'rgba(255, 255, 255, 0.075)',
    },
    input: {
        bottomLine: 'rgba(255, 255, 255, 0.7)',
        helperText: 'rgba(255, 255, 255, 0.7)',
        labelText: 'rgba(255, 255, 255, 0.7)',
        inputText: 'rgba(255, 255, 255, 1)',
        disabled: 'rgba(255, 255, 255, 0.5)',
    },
    action: {
        active: 'rgba(255, 255, 255, 1)',
        disabled: 'rgba(255, 255, 255, 0.3)',
    },
    background: {
        paper: grey[800],
        default: '#303030',
        appBar: grey[900],
        contentFrame: grey[900],
        chip: grey[700],
        avatar: grey[600],
    },
    line: {
        stepper: grey[600],
    },
};
function createPalette(palette) {
    const { primary = indigo, secondary = pink, error = red, type = 'light' } = palette, 
    // Same value used by material-components-web
    // https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L49
    other = __rest$3(palette, ["primary", "secondary", "error", "type"]);
    const contrastThreshold = 3.1;
    const shades = { dark, light };
    function getContrastText(background) {
        // Use the same logic as
        // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
        // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54
        const contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold
            ? dark.text.primary
            : light.text.primary;
        return contrastText;
    }
    const paletteOutput = deepmerge_1({
        common,
        type,
        primary,
        secondary,
        error,
        grey,
        shades,
        text: shades[type].text,
        input: shades[type].input,
        action: shades[type].action,
        background: shades[type].background,
        line: shades[type].line,
        contrastThreshold,
        getContrastText,
    }, other, {
        clone: false,
    });
    return paletteOutput;
}

function createMixins(breakpoints, spacing, mixins) {
    return Object.assign({ gutters: (styles) => {
            return Object.assign({ paddingLeft: spacing.unit * 2, paddingRight: spacing.unit * 2 }, styles, { [breakpoints.up('sm')]: Object.assign({ paddingLeft: spacing.unit * 3, paddingRight: spacing.unit * 3 }, styles[breakpoints.up('sm')]) });
        }, toolbar: {
            minHeight: 56,
            [`${breakpoints.up('xs')} and (orientation: landscape)`]: {
                minHeight: 48,
            },
            [breakpoints.up('sm')]: {
                minHeight: 64,
            },
        } }, mixins);
}

const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;
function createShadow(...px) {
    return [
        `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0, 0, 0, ${shadowKeyUmbraOpacity})`,
        `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0, 0, 0, ${shadowKeyPenumbraOpacity})`,
        `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0, 0, 0, ${shadowAmbientShadowOpacity})`,
    ].join(',');
}
const shadows = [
    'none',
    createShadow(0, 1, 3, 0, 0, 1, 1, 0, 0, 2, 1, -1),
    createShadow(0, 1, 5, 0, 0, 2, 2, 0, 0, 3, 1, -2),
    createShadow(0, 1, 8, 0, 0, 3, 4, 0, 0, 3, 3, -2),
    createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
];

var __rest$4 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
const easing = {
    // This is the most common easing curve.
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
};
// Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing
const duration = {
    shortest: 150,
    shorter: 200,
    short: 250,
    // most basic recommended timing
    standard: 300,
    // this is to be used in complex animations
    complex: 375,
    // recommended when something is entering screen
    enteringScreen: 225,
    // recommended when something is leaving screen
    leavingScreen: 195,
};
const formatMs$1 = (milliseconds) => `${Math.round(milliseconds)}ms`;


/**
 * @param {string|Array} props
 * @param {object} param
 * @param {string} param.prop
 * @param {number} param.duration
 * @param {string} param.easing
 * @param {number} param.delay
 */
var transitions = {
    easing,
    duration,
    create(props = ['all'], options = {}) {
        const { duration: durationOption = duration.standard, easing: easingOption = easing.easeInOut, delay = 0 } = options, other = __rest$4(options, ["duration", "easing", "delay"]);
        return (Array.isArray(props) ? props : [props])
            .map(animatedProp => `${animatedProp} ${formatMs$1(durationOption)} ${easingOption} ${formatMs$1(delay)}`)
            .join(',');
    },
    getAutoHeightDuration(height) {
        if (!height) {
            return 0;
        }
        const constant = height / 36;
        // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10
        return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
    },
};

// We need to centralize the zIndex definitions as they work
// like global values in the browser.
const zIndex = {
    mobileStepper: 1000,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
};

const spacing = {
    unit: 8
};

var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
function createTheme(options) {
    const { palette: paletteInput = {}, breakpoints: breakpointsInput = {}, mixins: mixinsInput = {}, typography: typographyInput = {}, shadows: shadowsInput } = options, other = __rest(options, ["palette", "breakpoints", "mixins", "typography", "shadows"]);
    console.log(options);
    // let shadows:Shadows = options['shadows']
    const palette = createPalette(paletteInput);
    const breakpoints = createBreakpoints(breakpointsInput);
    const muiTheme = Object.assign({ direction: 'ltr', palette, typography: createTypography(palette, typographyInput), mixins: createMixins(breakpoints, spacing, mixinsInput), breakpoints, shadows: shadowsInput || shadows }, deepmerge_1({
        transitions,
        spacing,
        zIndex,
    }, other));
    return muiTheme;
}

const formatMs = (milliseconds) => `${Math.round(milliseconds)}ms`;
const rippleColors = {
    default: '',
    primary: '',
    secondary: '',
    white: ''
};
const theme = createTheme(getTheme());
class ButtonStyle {
    constructor() {
        this.defaultStyle = {
            root: Object.assign({}, theme.typography.button, { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', position: 'relative', lineHeight: '1.4em', boxSizing: 'border-box', minWidth: 88, minHeight: 36, padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`, borderRadius: 2, color: theme.palette.text.primary, WebkitTapHighlightColor: theme.palette.common.transparent, backgroundColor: 'transparent', outline: 'none', border: 0, cursor: 'pointer', userSelect: 'none', verticalAlign: 'middle', appearance: 'none', textDecoration: 'none', '&::-moz-focus-inner': {
                    borderStyle: 'none',
                }, transition: `background-color ${formatMs(theme.transitions.duration.short)}, box-shadow ${formatMs(theme.transitions.duration.short)}`, '&:hover': {
                    textDecoration: 'none',
                    // Reset on mouse devices
                    backgroundColor: fade(theme.palette.text.primary, 0.12),
                    '@media (hover: none)': {
                        backgroundColor: 'transparent',
                    },
                    '&$disabled': {
                        backgroundColor: 'transparent',
                    },
                }, '&:active': {
                    outline: 'none'
                } }),
            disabled: {
                pointerEvents: 'none',
                cursor: 'default',
                backgroundColor: 'transparent',
                color: theme.palette.action.disabled,
            },
            dense: {
                padding: `${theme.spacing.unit - 1}px ${theme.spacing.unit}px`,
                minWidth: 64,
                minHeight: 32,
                fontSize: theme.typography.pxToRem(theme.typography.fontSize - 1),
            },
            label: {
                width: '100%',
                display: 'inherit',
                alignItems: 'inherit',
                justifyContent: 'inherit',
            },
            flatPrimary: {
                color: theme.palette.primary[500],
                '&:hover': {
                    backgroundColor: fade(theme.palette.primary[500], 0.12),
                    // Reset on mouse devices
                    '@media (hover: none)': {
                        backgroundColor: 'transparent',
                    },
                },
            },
            flatSecondary: {
                color: theme.palette.secondary['A200'],
                '&:hover': {
                    backgroundColor: fade(theme.palette.secondary['A200'], 0.12),
                    // Reset on mouse devices
                    '@media (hover: none)': {
                        backgroundColor: 'transparent',
                    },
                },
            },
            flatContrast: {
                color: theme.palette.getContrastText(theme.palette.primary[500]),
                '&:hover': {
                    backgroundColor: fade(theme.palette.getContrastText(theme.palette.primary[500]), 0.12),
                    // Reset on mouse devices
                    '@media (hover: none)': {
                        backgroundColor: 'transparent',
                    },
                },
            },
            colorInherit: {
                color: 'inherit',
            },
            stroked: {
                borderStyle: 'solid',
                borderColor: theme.palette.grey[300],
                borderWidth: '2px'
            },
            strokedPrimary: {
                borderStyle: 'solid',
                borderColor: theme.palette.primary[500],
                borderWidth: '2px'
            },
            strokedSecondary: {
                borderStyle: 'solid',
                borderColor: theme.palette.secondary['A200'],
                borderWidth: '2px'
            },
            strokedContrast: {
                borderStyle: 'solid',
                borderColor: fade(theme.palette.getContrastText(theme.palette.primary[500]), 0.12),
                borderWidth: '2px'
            },
            raised: {
                color: theme.palette.getContrastText(theme.palette.grey[300]),
                backgroundColor: theme.palette.grey[300],
                boxShadow: theme.shadows[2],
                '&$keyboardFocused': {
                    boxShadow: theme.shadows[6],
                },
                '&:active': {
                    boxShadow: theme.shadows[8],
                },
                '&$disabled': {
                    boxShadow: theme.shadows[0],
                    color: theme.palette.action.disabled,
                    backgroundColor: theme.palette.text.divider,
                },
                '&:hover': {
                    backgroundColor: theme.palette.grey.A100,
                    // Reset on mouse devices
                    '@media (hover: none)': {
                        backgroundColor: theme.palette.grey[300],
                    },
                    '&$disabled': {
                        backgroundColor: theme.palette.text.divider,
                        color: theme.palette.action.disabled,
                        // Reset on mouse devices
                        '@media (hover: none)': {
                            backgroundColor: theme.palette.grey[300],
                        },
                    },
                },
            },
            keyboardFocused: {},
            raisedPrimary: {
                color: theme.palette.getContrastText(theme.palette.primary[500]),
                backgroundColor: theme.palette.primary[500],
                '&:hover': {
                    backgroundColor: theme.palette.primary[700],
                    // Reset on mouse devices
                    '@media (hover: none)': {
                        backgroundColor: theme.palette.primary[500],
                    },
                },
            },
            raisedSecondary: {
                color: theme.palette.getContrastText(theme.palette.secondary['A200']),
                backgroundColor: theme.palette.secondary['A200'],
                '&:hover': {
                    backgroundColor: theme.palette.secondary['A400'],
                    // Reset on mouse devices
                    '@media (hover: none)': {
                        backgroundColor: theme.palette.secondary['A200'],
                    },
                },
            },
            raisedContrast: {
                color: theme.palette.getContrastText(theme.palette.primary[500]),
            },
            fab: {
                borderRadius: '50%',
                padding: 0,
                minWidth: 0,
                width: 56,
                height: 56,
                boxShadow: theme.shadows[6],
                '&:active': {
                    boxShadow: theme.shadows[12],
                },
            },
            mini: {
                width: 40,
                height: 40,
            },
        };
    }
    setup(style) {
        const mergedStyles = deepmerge_1.all([this.defaultStyle, style]);
        rippleColors.default = fade(theme.palette.text.primary, 0.30);
        rippleColors.primary = fade(theme.palette.primary[500], 0.30);
        rippleColors.secondary = fade(theme.palette.secondary['A200'], 0.30);
        rippleColors.white = fade('#ffffff', 0.50);
        this.jss = new SetupJss();
        this.jss.attachStyleSheet(mergedStyles);
    }
    getClassName(type) {
        return this.jss.getClassName(type);
    }
}

const touchMyRipple = () => {
    let mouseMove = false;
    const defaultSettings = {
        area: '',
        color: 'rgba(255, 255, 255, 0.4)',
        offsetEl: null,
        eventListener: 'click',
    };
    function onDrag(eventListener) {
        if (eventListener === 'touchend') {
            document.getElementsByTagName('body')[0].addEventListener('touchmove', () => {
                mouseMove = true;
            });
        }
    }
    function ripple(els, rippleColor, eventListener) {
        // for (let i = 0; i < els.length; i += 1) {
        const currentBtn = els;
        currentBtn.addEventListener(eventListener, function (e) {
            let PageX;
            let PageY;
            if (eventListener.match(/touch/) && eventListener.match(/touch/)[0].length > 0) {
                PageX = e.changedTouches[0].pageX;
                PageY = e.changedTouches[0].pageY;
            }
            else {
                PageX = e.x;
                PageY = e.y;
            }
            const el = this.getBoundingClientRect();
            const btnWidth = this.clientWidth;
            const rippleOffset = defaultSettings.offsetEl;
            const headerHeight = rippleOffset ? rippleOffset.clientHeight : 0;
            const btnOffsetTop = el.top + headerHeight;
            const btnOffsetLeft = el.left;
            const posMouseX = PageX;
            const posMouseY = PageY + headerHeight;
            const rippleX = posMouseX - btnOffsetLeft;
            const rippleY = posMouseY - btnOffsetTop;
            const baseCSS = `position: absolute;
                               width: ${btnWidth * 2}px;
                               height: ${btnWidth * 2}px;
                               border-radius: 50%;
                               transition: transform 700ms, opacity 700ms;
                               transition-timing-function: cubic-bezier(0.250, 0.460, 0.450, 0.940);
                               background: ${rippleColor};
                               background-position: center;
                               background-repeat: no-repeat;
                               background-size: 100%;
                               top: ${rippleY - btnWidth}px;
                               left: ${rippleX - btnWidth}px;
                               transform: scale(0);
                               pointer-events: none;`;
            // Prepare the dom
            const rippleEffect = document.createElement('span');
            rippleEffect.style.cssText = baseCSS;
            // Add some css for prevent errors
            this.style.overflow = 'hidden';
            if (window.getComputedStyle(this).position !== 'fixed' && window.getComputedStyle(this).position !== 'absolute') {
                this.style.position = 'relative';
            }
            if (mouseMove) {
                mouseMove = false;
                return;
            }
            this.appendChild(rippleEffect);
            // start animation
            setTimeout(() => {
                rippleEffect.style.cssText = `${baseCSS} transform: scale(1); opacity: 0;`;
            }, 50);
            setTimeout(() => {
                rippleEffect.remove();
            }, 700);
        });
        // }
    }
    function attachRippleToAttribute(area, rippleColor, eventListener) {
        const attributeEl = document.querySelectorAll(`${area} [data-animation='ripple']`);
        if (attributeEl.length > 0) {
            ripple(attributeEl, rippleColor, eventListener);
        }
        else {
            throw new Error('not found any element with data-animation="ripple"');
        }
    }
    function attachRippleToSelectors(selectorsEl, rippleColor, eventListener) {
        // let selectorsEl;
        /*   if (selectors) {
              selectorsEl = document.querySelectorAll(selectors);
          } else {
              throw new Error('You have to enter at least 1 selector');
          } */
        // if (selectorsEl.length > 0) {
        ripple(selectorsEl, rippleColor, eventListener);
        /*  } else {
             console.warn('No element found with this selector: ', selectors);
         } */
    }
    const tmripple = {
        init(data) {
            try {
                defaultSettings.area = (data && data.area)
                    ? data.area
                    : defaultSettings.area;
                defaultSettings.color = (data && data.color)
                    ? data.color
                    : defaultSettings.color;
                defaultSettings.offsetEl = (data && data.offsetEl)
                    ? this.setOffsetEl(data.offsetEl)
                    : defaultSettings.offsetEl;
                defaultSettings.eventListener = (data && data.eventListener)
                    ? data.eventListener
                    : defaultSettings.eventListener;
                onDrag(defaultSettings.eventListener);
                attachRippleToAttribute(defaultSettings.area, defaultSettings.color, defaultSettings.eventListener);
            }
            catch (e) {
                console.warn(e.message);
            }
        },
        attachToSelectors(data) {
            try {
                const rippleColor = data.color || defaultSettings.color;
                const eventListener = data.eventListener || defaultSettings.eventListener;
                attachRippleToSelectors(data.selectors, rippleColor, eventListener);
            }
            catch (e) {
                console.warn(e.message);
            }
        },
        setOffsetEl(el) {
            defaultSettings.offsetEl = document.querySelector(el);
        },
    };
    return tmripple;
};
var tmripple = touchMyRipple();
const tmripple$1 = touchMyRipple();

const buttonColor = {
    primary: 'Primary',
    secondary: 'Secondary',
    contrast: 'Contrast'
};

class MWCButton {
    constructor() {
        this.raised = false;
        this.unelevated = false;
        this.stroked = false;
        this.dense = false;
        this.compact = false;
        this.color = "default";
        this.backgroundcolor = "#ff0000";
        this.disabled = false;
        this.ripple = true;
        this.fab = false;
        this.mini = false;
    }
    componentWillLoad() {
        const buttonStyle = new ButtonStyle();
        let changeStyle = {};
        buttonStyle.setup(changeStyle);
        this.btnEl.disabled = this.disabled;
        /*  Object.getOwnPropertyNames(this).forEach((key) => {
             console.log(typeof this[key])
         }) */
        this.btnEl.className = buttonStyle.getClassName(this.getClassNames());
    }
    getClassNames() {
        let classNames = ['root'];
        if (this.disabled) {
            classNames.push('disabled');
        }
        if (this.raised) {
            classNames.push('raised');
            if (this.color !== 'default') {
                classNames.push(`raised${buttonColor[this.color]}`);
            }
        }
        if (!this.raised && !this.stroked && !this.unelevated) {
            if (this.color !== 'default') {
                classNames.push(`flat${buttonColor[this.color]}`);
            }
        }
        if (this.dense) {
            classNames.push('dense');
        }
        if (this.fab) {
            classNames.push('fab');
        }
        if (this.mini) {
            classNames.push('mini');
        }
        return classNames;
    }
    componentDidLoad() {
        if (this.ripple) {
            const rippleColor = (this.raised && (this.color === 'primary' || this.color === 'secondary')) ? rippleColors.white : rippleColors[this.color];
            tmripple.attachToSelectors({
                selectors: this.btnEl,
                color: rippleColor,
                eventListener: 'mousedown'
            });
        }
    }
    renderIcon() {
        if (this.icon) {
            return (h("i", { class: "material-icons mwc-icon" }, this.icon));
        }
        return null;
    }
    renderButton() {
        if (this.href) {
            return (h("a", { href: this.href },
                h("slot", null)));
        }
        return (h("slot", null));
        /* return (
             <button disabled={this.disabled} ref={(mwcButton) => { this.mwcButton = mwcButton; }}>
              {this.renderIcon()}
              <slot />
            </button>
        ) */
    }
    render() {
        return (h("slot", null));
    }
}

class MWCCard {
    constructor() {
        this.width = "auto";
        this.height = "auto";
        this.raised = false;
        this.radius = 4;
    }
    componentDidLoad() {
        /* let cardStyles = '';
         if(this.width){
             cardStyles = `width:${this.width}; `;
         }
         if(this.height){
             cardStyles = `${cardStyles}height:${this.height}; `;
         }
         if(cardStyles.length>0){
              this.mwcCard.setAttribute('style',cardStyles);
         }
         Array.from(this.cardEl.getElementsByTagName("button")).forEach((eachButton)=>{
             eachButton.className = `${eachButton.className} mdc-card__action`;
         }) */
    }
    getElevation() {
        return this.raised ? 8 : 2;
    }
    render() {
        return (h("mwc-paper", { width: this.width, height: this.height, elevation: this.getElevation(), radius: this.radius },
            h("slot", null)));
    }
}

class MWCCardActions {
    render() {
        return (h("section", { class: "mdc-card__actions" },
            h("slot", null)));
    }
}

const theme$2 = createTheme(getTheme());
class CardContentStyle {
    constructor() {
        this.defaultStyle = {
            root: {
                padding: theme$2.spacing.unit * 2,
                '&:last-child': {
                    paddingBottom: theme$2.spacing.unit * 3,
                },
            },
        };
    }
    setup(style) {
        const mergedStyles = deepmerge_1.all([this.defaultStyle, style]);
        this.jss = new SetupJss();
        this.jss.attachStyleSheet(mergedStyles);
    }
    getClassName(type) {
        return this.jss.getClassName(type);
    }
}

class MWCCardContent {
    componentWillLoad() {
        this.cardContentStyle = new CardContentStyle();
        let changeStyle = {};
        this.cardContentStyle.setup(changeStyle);
    }
    getClassNames() {
        let classNames = ['root'];
        return classNames;
    }
    render() {
        return (h("section", { class: this.cardContentStyle.getClassName(this.getClassNames()) },
            h("slot", null)));
    }
}

class MWCCardHeader {
    renderTitle() {
        if (this.title) {
            return (h("h1", { class: "mdc-card__title mdc-card__title--large" }, this.title));
        }
        return null;
    }
    renderSubTitle() {
        if (this.subtitle) {
            return (h("h2", { class: "mdc-card__subtitle" }, this.subtitle));
        }
        return null;
    }
    render() {
        return (h("section", { class: "mdc-card__primary" },
            this.renderTitle(),
            this.renderSubTitle(),
            h("slot", null)));
    }
}

const theme$3 = createTheme(getTheme());
class CardMediaStyle {
    constructor() {
        this.defaultStyle = {
            root: {
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            },
            rootMedia: {
                width: '100%',
            },
        };
    }
    setup(style) {
        const mergedStyles = deepmerge_1.all([this.defaultStyle, style]);
        this.jss = new SetupJss();
        this.jss.attachStyleSheet(mergedStyles);
    }
    getClassName(type) {
        return this.jss.getClassName(type);
    }
}

class MWCCardMedia {
    constructor() {
        this.mediaheight = 'auto';
    }
    componentWillLoad() {
        this.cardMediaStyle = new CardMediaStyle();
        let changeStyle = {
            rootMedia: {
                height: this.mediaheight
            }
        };
        this.cardMediaStyle.setup(changeStyle);
    }
    getClassNames() {
        let classNames = ['root', 'rootMedia'];
        return classNames;
    }
    getMediaClass() {
        let mediaClass = 'mdc-card__media-item';
        if (this.mediaheight) {
            let mediaheight = this.mediaheight;
            if (this.mediaheight === '1x') {
                mediaheight = '1dot5x';
            }
            mediaClass = `${mediaClass}  mdc-card__media-item--${mediaheight}`;
        }
        return mediaClass;
    }
    render() {
        return (h("img", { class: this.cardMediaStyle.getClassName(this.getClassNames()), src: this.src }));
    }
}

// @stencil/core

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @typedef {{
 *   noPrefix: string,
 *   webkitPrefix: string,
 *   styleProperty: string
 * }}
 */
/** @const {Object<string, !VendorPropertyMapType>} */
const eventTypeMap = {
  'animationstart': {
    noPrefix: 'animationstart',
    webkitPrefix: 'webkitAnimationStart',
    styleProperty: 'animation',
  },
  'animationend': {
    noPrefix: 'animationend',
    webkitPrefix: 'webkitAnimationEnd',
    styleProperty: 'animation',
  },
  'animationiteration': {
    noPrefix: 'animationiteration',
    webkitPrefix: 'webkitAnimationIteration',
    styleProperty: 'animation',
  },
  'transitionend': {
    noPrefix: 'transitionend',
    webkitPrefix: 'webkitTransitionEnd',
    styleProperty: 'transition',
  },
};

/** @const {Object<string, !VendorPropertyMapType>} */
const cssPropertyMap = {
  'animation': {
    noPrefix: 'animation',
    webkitPrefix: '-webkit-animation',
  },
  'transform': {
    noPrefix: 'transform',
    webkitPrefix: '-webkit-transform',
  },
  'transition': {
    noPrefix: 'transition',
    webkitPrefix: '-webkit-transition',
  },
};

/**
 * @param {!Object} windowObj
 * @return {boolean}
 */
function hasProperShape(windowObj) {
  return (windowObj['document'] !== undefined && typeof windowObj['document']['createElement'] === 'function');
}

/**
 * @param {string} eventType
 * @return {boolean}
 */
function eventFoundInMaps(eventType) {
  return (eventType in eventTypeMap || eventType in cssPropertyMap);
}

/**
 * @param {string} eventType
 * @param {!Object<string, !VendorPropertyMapType>} map
 * @param {!Element} el
 * @return {string}
 */
function getJavaScriptEventName(eventType, map, el) {
  return map[eventType].styleProperty in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
}

/**
 * Helper function to determine browser prefix for CSS3 animation events
 * and property names.
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getAnimationName(windowObj, eventType) {
  if (!hasProperShape(windowObj) || !eventFoundInMaps(eventType)) {
    return eventType;
  }

  const map = /** @type {!Object<string, !VendorPropertyMapType>} */ (
    eventType in eventTypeMap ? eventTypeMap : cssPropertyMap
  );
  const el = windowObj['document']['createElement']('div');
  let eventName = '';

  if (map === eventTypeMap) {
    eventName = getJavaScriptEventName(eventType, map, el);
  } else {
    eventName = map[eventType].noPrefix in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
  }

  return eventName;
}

// Public functions to access getAnimationName() for JavaScript events or CSS
// property names.

const transformStyleProperties = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'MSTransform'];

/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getCorrectEventName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getCorrectPropertyName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @template A
 */
class MDCFoundation {
  /** @return enum{cssClasses} */
  static get cssClasses() {
    // Classes extending MDCFoundation should implement this method to return an object which exports every
    // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
    return {};
  }

  /** @return enum{strings} */
  static get strings() {
    // Classes extending MDCFoundation should implement this method to return an object which exports all
    // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
    return {};
  }

  /** @return enum{numbers} */
  static get numbers() {
    // Classes extending MDCFoundation should implement this method to return an object which exports all
    // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
    return {};
  }

  /** @return {!Object} */
  static get defaultAdapter() {
    // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
    // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
    // validation.
    return {};
  }

  /**
   * @param {A=} adapter
   */
  constructor(adapter = {}) {
    /** @protected {!A} */
    this.adapter_ = adapter;
  }

  init() {
    // Subclasses should override this method to perform initialization routines (registering events, etc.)
  }

  destroy() {
    // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  }
}

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @template F
 */
class MDCComponent {
  /**
   * @param {!Element} root
   * @return {!MDCComponent}
   */
  static attachTo(root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new MDCFoundation());
  }

  /**
   * @param {!Element} root
   * @param {F=} foundation
   * @param {...?} args
   */
  constructor(root, foundation = undefined, ...args) {
    /** @protected {!Element} */
    this.root_ = root;
    this.initialize(...args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    /** @protected {!F} */
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  initialize(/* ...args */) {
    // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.
  }

  /**
   * @return {!F} foundation
   */
  getDefaultFoundation() {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' +
      'foundation class');
  }

  initialSyncWithDOM() {
    // Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  }

  destroy() {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation_.destroy();
  }

  /**
   * Wrapper method to add an event listener to the component's root element. This is most useful when
   * listening for custom events.
   * @param {string} evtType
   * @param {!Function} handler
   */
  listen(evtType, handler) {
    this.root_.addEventListener(evtType, handler);
  }

  /**
   * Wrapper method to remove an event listener to the component's root element. This is most useful when
   * unlistening for custom events.
   * @param {string} evtType
   * @param {!Function} handler
   */
  unlisten(evtType, handler) {
    this.root_.removeEventListener(evtType, handler);
  }

  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type,
   * with the given data.
   * @param {string} evtType
   * @param {!Object} evtData
   * @param {boolean=} shouldBubble
   */
  emit(evtType, evtData, shouldBubble = false) {
    let evt;
    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        detail: evtData,
        bubbles: shouldBubble,
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }

    this.root_.dispatchEvent(evt);
  }
}

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Ripple. Provides an interface for managing
 * - classes
 * - dom
 * - CSS variables
 * - position
 * - dimensions
 * - scroll position
 * - event handlers
 * - unbounded, active and disabled states
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/architecture.md
 *
 * @record
 */

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  BG_ACTIVE_FILL: 'mdc-ripple-upgraded--background-active-fill',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
};

const strings = {
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
};

const numbers = {
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6,
  DEACTIVATION_TIMEOUT_MS: 225, // Corresponds to $mdc-ripple-translate-duration (i.e. activation animation duration)
  FG_DEACTIVATION_MS: 150, // Corresponds to $mdc-ripple-fade-out-duration (i.e. deactivation animation duration)
};

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
 * @private {boolean|undefined}
 */
let supportsCssVariables_;

/**
 * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
 * @private {boolean|undefined}
 */
let supportsPassive_;

/**
 * @param {!Window} windowObj
 * @return {boolean}
 */
function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  const document = windowObj.document;
  const node = document.createElement('div');
  node.className = 'mdc-ripple-surface--test-edge-var-bug';
  document.body.appendChild(node);

  // The bug exists if ::before style ends up propagating to the parent element.
  // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
  // but Firefox is known to support CSS custom properties correctly.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  const computedStyle = windowObj.getComputedStyle(node);
  const hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
  node.remove();
  return hasPseudoVarBug;
}

/**
 * @param {!Window} windowObj
 * @param {boolean=} forceRefresh
 * @return {boolean|undefined}
 */

function supportsCssVariables(windowObj, forceRefresh = false) {
  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables_;
  }

  const supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  const explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  const weAreFeatureDetectingSafari10plus = (
    windowObj.CSS.supports('(--css-vars: yes)') &&
    windowObj.CSS.supports('color', '#00000000')
  );

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVariables_ = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVariables_ = false;
  }
  return supportsCssVariables_;
}

//
/**
 * Determine whether the current browser supports passive event listeners, and if so, use them.
 * @param {!Window=} globalObj
 * @param {boolean=} forceRefresh
 * @return {boolean|{passive: boolean}}
 */
function applyPassive(globalObj = window, forceRefresh = false) {
  if (supportsPassive_ === undefined || forceRefresh) {
    let isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, {get passive() {
        isSupported = true;
      }});
    } catch (e) { }

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? {passive: true} : false;
}

/**
 * @param {!Object} HTMLElementPrototype
 * @return {!Array<string>}
 */
function getMatchesProperty(HTMLElementPrototype) {
  return [
    'webkitMatchesSelector', 'msMatchesSelector', 'matches',
  ].filter((p) => p in HTMLElementPrototype).pop();
}

/**
 * @param {!Event} ev
 * @param {!{x: number, y: number}} pageOffset
 * @param {!ClientRect} clientRect
 * @return {!{x: number, y: number}}
 */
function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  const {x, y} = pageOffset;
  const documentX = x + clientRect.left;
  const documentY = y + clientRect.top;

  let normalizedX;
  let normalizedY;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchstart') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return {x: normalizedX, y: normalizedY};
}

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @enum {string}
 */
const DEACTIVATION_ACTIVATION_PAIRS = {
  mouseup: 'mousedown',
  pointerup: 'pointerdown',
  touchend: 'touchstart',
  keyup: 'keydown',
  blur: 'focus',
};

/**
 * @extends {MDCFoundation<!MDCRippleAdapter>}
 */
class MDCRippleFoundation extends MDCFoundation {
  static get cssClasses() {
    return cssClasses;
  }

  static get strings() {
    return strings;
  }

  static get numbers() {
    return numbers;
  }

  static get defaultAdapter() {
    return {
      browserSupportsCssVars: () => /* boolean - cached */ {},
      isUnbounded: () => /* boolean */ {},
      isSurfaceActive: () => /* boolean */ {},
      isSurfaceDisabled: () => /* boolean */ {},
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      registerInteractionHandler: (/* evtType: string, handler: EventListener */) => {},
      deregisterInteractionHandler: (/* evtType: string, handler: EventListener */) => {},
      registerResizeHandler: (/* handler: EventListener */) => {},
      deregisterResizeHandler: (/* handler: EventListener */) => {},
      updateCssVariable: (/* varName: string, value: string */) => {},
      computeBoundingRect: () => /* ClientRect */ {},
      getWindowPageOffset: () => /* {x: number, y: number} */ {},
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCRippleFoundation.defaultAdapter, adapter));

    /** @private {number} */
    this.layoutFrame_ = 0;

    /** @private {!ClientRect} */
    this.frame_ = /** @type {!ClientRect} */ ({width: 0, height: 0});

    /** @private {!ActivationStateType} */
    this.activationState_ = this.defaultActivationState_();

    /** @private {number} */
    this.xfDuration_ = 0;

    /** @private {number} */
    this.initialSize_ = 0;

    /** @private {number} */
    this.maxRadius_ = 0;

    /** @private {!Array<{ListenerInfoType}>} */
    this.listenerInfos_ = [
      {activate: 'touchstart', deactivate: 'touchend'},
      {activate: 'pointerdown', deactivate: 'pointerup'},
      {activate: 'mousedown', deactivate: 'mouseup'},
      {activate: 'keydown', deactivate: 'keyup'},
      {focus: 'focus', blur: 'blur'},
    ];

    /** @private {!ListenersType} */
    this.listeners_ = {
      activate: (e) => this.activate_(e),
      deactivate: (e) => this.deactivate_(e),
      focus: () => requestAnimationFrame(
        () => this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED)
      ),
      blur: () => requestAnimationFrame(
        () => this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED)
      ),
    };

    /** @private {!Function} */
    this.resizeHandler_ = () => this.layout();

    /** @private {!{left: number, top:number}} */
    this.unboundedCoords_ = {
      left: 0,
      top: 0,
    };

    /** @private {number} */
    this.fgScale_ = 0;

    /** @private {number} */
    this.activationTimer_ = 0;

    /** @private {number} */
    this.fgDeactivationRemovalTimer_ = 0;

    /** @private {boolean} */
    this.activationAnimationHasEnded_ = false;

    /** @private {!Function} */
    this.activationTimerCallback_ = () => {
      this.activationAnimationHasEnded_ = true;
      this.runDeactivationUXLogicIfReady_();
    };
  }

  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   * @return {boolean}
   * @private
   */
  isSupported_() {
    return this.adapter_.browserSupportsCssVars();
  }

  /**
   * @return {!ActivationStateType}
   */
  defaultActivationState_() {
    return {
      isActivated: false,
      hasDeactivationUXRun: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false,
      activationStartTime: 0,
      activationEvent: null,
      isProgrammatic: false,
    };
  }

  init() {
    if (!this.isSupported_()) {
      return;
    }
    this.addEventListeners_();

    const {ROOT, UNBOUNDED} = MDCRippleFoundation.cssClasses;
    requestAnimationFrame(() => {
      this.adapter_.addClass(ROOT);
      if (this.adapter_.isUnbounded()) {
        this.adapter_.addClass(UNBOUNDED);
      }
      this.layoutInternal_();
    });
  }

  /** @private */
  addEventListeners_() {
    this.listenerInfos_.forEach((info) => {
      Object.keys(info).forEach((k) => {
        this.adapter_.registerInteractionHandler(info[k], this.listeners_[k]);
      });
    });
    this.adapter_.registerResizeHandler(this.resizeHandler_);
  }

  /**
   * @param {Event} e
   * @private
   */
  activate_(e) {
    if (this.adapter_.isSurfaceDisabled()) {
      return;
    }

    const {activationState_: activationState} = this;
    if (activationState.isActivated) {
      return;
    }

    activationState.isActivated = true;
    activationState.isProgrammatic = e === null;
    activationState.activationEvent = e;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : (
      e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown'
    );
    activationState.activationStartTime = Date.now();

    requestAnimationFrame(() => {
      // This needs to be wrapped in an rAF call b/c web browsers
      // report active states inconsistently when they're called within
      // event handling code:
      // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
      // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
      activationState.wasElementMadeActive = (e && e.type === 'keydown') ? this.adapter_.isSurfaceActive() : true;
      if (activationState.wasElementMadeActive) {
        this.animateActivation_();
      } else {
        // Reset activation state immediately if element was not made active.
        this.activationState_ = this.defaultActivationState_();
      }
    });
  }

  /**
   * @param {?Event=} event Optional event containing position information.
   */
  activate(event = null) {
    this.activate_(event);
  }

  /** @private */
  animateActivation_() {
    const {VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END} = MDCRippleFoundation.strings;
    const {
      BG_ACTIVE_FILL,
      FG_DEACTIVATION,
      FG_ACTIVATION,
    } = MDCRippleFoundation.cssClasses;
    const {DEACTIVATION_TIMEOUT_MS} = MDCRippleFoundation.numbers;

    let translateStart = '';
    let translateEnd = '';

    if (!this.adapter_.isUnbounded()) {
      const {startPoint, endPoint} = this.getFgTranslationCoordinates_();
      translateStart = `${startPoint.x}px, ${startPoint.y}px`;
      translateEnd = `${endPoint.x}px, ${endPoint.y}px`;
    }

    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
    // Cancel any ongoing activation/deactivation animations
    clearTimeout(this.activationTimer_);
    clearTimeout(this.fgDeactivationRemovalTimer_);
    this.rmBoundedActivationClasses_();
    this.adapter_.removeClass(FG_DEACTIVATION);

    // Force layout in order to re-trigger the animation.
    this.adapter_.computeBoundingRect();
    this.adapter_.addClass(BG_ACTIVE_FILL);
    this.adapter_.addClass(FG_ACTIVATION);
    this.activationTimer_ = setTimeout(() => this.activationTimerCallback_(), DEACTIVATION_TIMEOUT_MS);
  }

  /**
   * @private
   * @return {{startPoint: PointType, endPoint: PointType}}
   */
  getFgTranslationCoordinates_() {
    const {activationState_: activationState} = this;
    const {activationEvent, wasActivatedByPointer} = activationState;

    let startPoint;
    if (wasActivatedByPointer) {
      startPoint = getNormalizedEventCoords(
        /** @type {!Event} */ (activationEvent),
        this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect()
      );
    } else {
      startPoint = {
        x: this.frame_.width / 2,
        y: this.frame_.height / 2,
      };
    }
    // Center the element around the start point.
    startPoint = {
      x: startPoint.x - (this.initialSize_ / 2),
      y: startPoint.y - (this.initialSize_ / 2),
    };

    const endPoint = {
      x: (this.frame_.width / 2) - (this.initialSize_ / 2),
      y: (this.frame_.height / 2) - (this.initialSize_ / 2),
    };

    return {startPoint, endPoint};
  }

  /** @private */
  runDeactivationUXLogicIfReady_() {
    const {FG_DEACTIVATION} = MDCRippleFoundation.cssClasses;
    const {hasDeactivationUXRun, isActivated} = this.activationState_;
    const activationHasEnded = hasDeactivationUXRun || !isActivated;
    if (activationHasEnded && this.activationAnimationHasEnded_) {
      this.rmBoundedActivationClasses_();
      this.adapter_.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer_ = setTimeout(() => {
        this.adapter_.removeClass(FG_DEACTIVATION);
      }, numbers.FG_DEACTIVATION_MS);
    }
  }

  /** @private */
  rmBoundedActivationClasses_() {
    const {BG_ACTIVE_FILL, FG_ACTIVATION} = MDCRippleFoundation.cssClasses;
    this.adapter_.removeClass(BG_ACTIVE_FILL);
    this.adapter_.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded_ = false;
    this.adapter_.computeBoundingRect();
  }

  /**
   * @param {Event} e
   * @private
   */
  deactivate_(e) {
    const {activationState_: activationState} = this;
    // This can happen in scenarios such as when you have a keyup event that blurs the element.
    if (!activationState.isActivated) {
      return;
    }
    // Programmatic deactivation.
    if (activationState.isProgrammatic) {
      const evtObject = null;
      const state = /** @type {!ActivationStateType} */ (Object.assign({}, activationState));
      requestAnimationFrame(() => this.animateDeactivation_(evtObject, state));
      this.activationState_ = this.defaultActivationState_();
      return;
    }

    const actualActivationType = DEACTIVATION_ACTIVATION_PAIRS[e.type];
    const expectedActivationType = activationState.activationEvent.type;
    // NOTE: Pointer events are tricky - https://patrickhlauke.github.io/touch/tests/results/
    // Essentially, what we need to do here is decouple the deactivation UX from the actual
    // deactivation state itself. This way, touch/pointer events in sequence do not trample one
    // another.
    const needsDeactivationUX = actualActivationType === expectedActivationType;
    let needsActualDeactivation = needsDeactivationUX;
    if (activationState.wasActivatedByPointer) {
      needsActualDeactivation = e.type === 'mouseup';
    }

    const state = /** @type {!ActivationStateType} */ (Object.assign({}, activationState));
    requestAnimationFrame(() => {
      if (needsDeactivationUX) {
        this.activationState_.hasDeactivationUXRun = true;
        this.animateDeactivation_(e, state);
      }

      if (needsActualDeactivation) {
        this.activationState_ = this.defaultActivationState_();
      }
    });
  }

  /**
   * @param {?Event=} event Optional event containing position information.
   */
  deactivate(event = null) {
    this.deactivate_(event);
  }

  /**
   * @param {Event} e
   * @param {!ActivationStateType} options
   * @private
   */
  animateDeactivation_(e, {wasActivatedByPointer, wasElementMadeActive}) {
    const {BG_FOCUSED} = MDCRippleFoundation.cssClasses;
    if (wasActivatedByPointer || wasElementMadeActive) {
      // Remove class left over by element being focused
      this.adapter_.removeClass(BG_FOCUSED);
      this.runDeactivationUXLogicIfReady_();
    }
  }

  destroy() {
    if (!this.isSupported_()) {
      return;
    }
    this.removeEventListeners_();

    const {ROOT, UNBOUNDED} = MDCRippleFoundation.cssClasses;
    requestAnimationFrame(() => {
      this.adapter_.removeClass(ROOT);
      this.adapter_.removeClass(UNBOUNDED);
      this.removeCssVars_();
    });
  }

  /** @private */
  removeEventListeners_() {
    this.listenerInfos_.forEach((info) => {
      Object.keys(info).forEach((k) => {
        this.adapter_.deregisterInteractionHandler(info[k], this.listeners_[k]);
      });
    });
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
  }

  /** @private */
  removeCssVars_() {
    const {strings: strings$$1} = MDCRippleFoundation;
    Object.keys(strings$$1).forEach((k) => {
      if (k.indexOf('VAR_') === 0) {
        this.adapter_.updateCssVariable(strings$$1[k], null);
      }
    });
  }

  layout() {
    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }
    this.layoutFrame_ = requestAnimationFrame(() => {
      this.layoutInternal_();
      this.layoutFrame_ = 0;
    });
  }

  /** @private */
  layoutInternal_() {
    this.frame_ = this.adapter_.computeBoundingRect();

    const maxDim = Math.max(this.frame_.height, this.frame_.width);
    const surfaceDiameter = Math.sqrt(Math.pow(this.frame_.width, 2) + Math.pow(this.frame_.height, 2));

    // 60% of the largest dimension of the surface
    this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;

    // Diameter of the surface + 10px
    this.maxRadius_ = surfaceDiameter + MDCRippleFoundation.numbers.PADDING;
    this.fgScale_ = this.maxRadius_ / this.initialSize_;
    this.xfDuration_ = 1000 * Math.sqrt(this.maxRadius_ / 1024);
    this.updateLayoutCssVars_();
  }

  /** @private */
  updateLayoutCssVars_() {
    const {
      VAR_FG_SIZE, VAR_LEFT, VAR_TOP, VAR_FG_SCALE,
    } = MDCRippleFoundation.strings;

    this.adapter_.updateCssVariable(VAR_FG_SIZE, `${this.initialSize_}px`);
    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

    if (this.adapter_.isUnbounded()) {
      this.unboundedCoords_ = {
        left: Math.round((this.frame_.width / 2) - (this.initialSize_ / 2)),
        top: Math.round((this.frame_.height / 2) - (this.initialSize_ / 2)),
      };

      this.adapter_.updateCssVariable(VAR_LEFT, `${this.unboundedCoords_.left}px`);
      this.adapter_.updateCssVariable(VAR_TOP, `${this.unboundedCoords_.top}px`);
    }
  }
}

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @extends MDCComponent<!MDCRippleFoundation>
 */
class MDCRipple extends MDCComponent {
  /** @param {...?} args */
  constructor(...args) {
    super(...args);

    /** @type {boolean} */
    this.disabled = false;

    /** @private {boolean} */
    this.unbounded_;
  }

  /**
   * @param {!Element} root
   * @param {{isUnbounded: (boolean|undefined)}=} options
   * @return {!MDCRipple}
   */
  static attachTo(root, {isUnbounded = undefined} = {}) {
    const ripple = new MDCRipple(root);
    // Only override unbounded behavior if option is explicitly specified
    if (isUnbounded !== undefined) {
      ripple.unbounded = /** @type {boolean} */ (isUnbounded);
    }
    return ripple;
  }

  /**
   * @param {!RippleCapableSurface} instance
   * @return {!MDCRippleAdapter}
   */
  static createAdapter(instance) {
    const MATCHES = getMatchesProperty(HTMLElement.prototype);

    return {
      browserSupportsCssVars: () => supportsCssVariables(window),
      isUnbounded: () => instance.unbounded,
      isSurfaceActive: () => instance.root_[MATCHES](':active'),
      isSurfaceDisabled: () => instance.disabled,
      addClass: (className) => instance.root_.classList.add(className),
      removeClass: (className) => instance.root_.classList.remove(className),
      registerInteractionHandler: (evtType, handler) =>
        instance.root_.addEventListener(evtType, handler, applyPassive()),
      deregisterInteractionHandler: (evtType, handler) =>
        instance.root_.removeEventListener(evtType, handler, applyPassive()),
      registerResizeHandler: (handler) => window.addEventListener('resize', handler),
      deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
      updateCssVariable: (varName, value) => instance.root_.style.setProperty(varName, value),
      computeBoundingRect: () => instance.root_.getBoundingClientRect(),
      getWindowPageOffset: () => ({x: window.pageXOffset, y: window.pageYOffset}),
    };
  }

  /** @return {boolean} */
  get unbounded() {
    return this.unbounded_;
  }

  /** @param {boolean} unbounded */
  set unbounded(unbounded) {
    const {UNBOUNDED} = MDCRippleFoundation.cssClasses;
    this.unbounded_ = Boolean(unbounded);
    if (this.unbounded_) {
      this.root_.classList.add(UNBOUNDED);
    } else {
      this.root_.classList.remove(UNBOUNDED);
    }
  }

  activate() {
    this.foundation_.activate();
  }

  deactivate() {
    this.foundation_.deactivate();
  }

  layout() {
    this.foundation_.layout();
  }

  /** @return {!MDCRippleFoundation} */
  getDefaultFoundation() {
    return new MDCRippleFoundation(MDCRipple.createAdapter(this));
  }

  initialSyncWithDOM() {
    this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
  }
}

/**
 * See Material Design spec for more details on when to use ripples.
 * https://material.io/guidelines/motion/choreography.html#choreography-creation
 * @record
 */
class RippleCapableSurface {}

/** @protected {!Element} */
RippleCapableSurface.prototype.root_;

/**
 * Whether or not the ripple bleeds out of the bounds of the element.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.unbounded;

/**
 * Whether or not the ripple is attached to a disabled component.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.disabled;

/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-unused-vars */

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-unused-vars */

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @const {string} */
const ROOT = 'mdc-checkbox';

/** @enum {string} */
const cssClasses$1 = {
  UPGRADED: 'mdc-checkbox--upgraded',
  CHECKED: 'mdc-checkbox--checked',
  INDETERMINATE: 'mdc-checkbox--indeterminate',
  DISABLED: 'mdc-checkbox--disabled',
  ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
  ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
  ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
  ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
  ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
  ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked',
};

/** @enum {string} */
const strings$1 = {
  NATIVE_CONTROL_SELECTOR: `.${ROOT}__native-control`,
  TRANSITION_STATE_INIT: 'init',
  TRANSITION_STATE_CHECKED: 'checked',
  TRANSITION_STATE_UNCHECKED: 'unchecked',
  TRANSITION_STATE_INDETERMINATE: 'indeterminate',
};

/** @enum {number} */
const numbers$1 = {
  ANIM_END_LATCH_MS: 100,
};

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-unused-vars */
/* eslint-enable no-unused-vars */
/** @const {!Array<string>} */
const CB_PROTO_PROPS = ['checked', 'indeterminate'];

/**
 * @extends {MDCFoundation<!MDCCheckboxAdapter>}
 */
class MDCCheckboxFoundation extends MDCFoundation {
  /** @return enum {cssClasses} */
  static get cssClasses() {
    return cssClasses$1;
  }

  /** @return enum {strings} */
  static get strings() {
    return strings$1;
  }

  /** @return enum {numbers} */
  static get numbers() {
    return numbers$1;
  }

  /** @return {!MDCCheckboxAdapter} */
  static get defaultAdapter() {
    return /** @type {!MDCCheckboxAdapter} */ ({
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      registerAnimationEndHandler: (/* handler: EventListener */) => {},
      deregisterAnimationEndHandler: (/* handler: EventListener */) => {},
      registerChangeHandler: (/* handler: EventListener */) => {},
      deregisterChangeHandler: (/* handler: EventListener */) => {},
      getNativeControl: () => /* !MDCSelectionControlState */ {},
      forceLayout: () => {},
      isAttachedToDOM: () => /* boolean */ {},
    });
  }

  constructor(adapter) {
    super(Object.assign(MDCCheckboxFoundation.defaultAdapter, adapter));

    /** @private {string} */
    this.currentCheckState_ = strings$1.TRANSITION_STATE_INIT;

    /** @private {string} */
    this.currentAnimationClass_ = '';

    /** @private {number} */
    this.animEndLatchTimer_ = 0;

    this.animEndHandler_ = /** @private {!EventListener} */ (() => {
      clearTimeout(this.animEndLatchTimer_);
      this.animEndLatchTimer_ = setTimeout(() => {
        this.adapter_.removeClass(this.currentAnimationClass_);
        this.adapter_.deregisterAnimationEndHandler(this.animEndHandler_);
      }, numbers$1.ANIM_END_LATCH_MS);
    });

    this.changeHandler_ = /** @private {!EventListener} */ (
      () => this.transitionCheckState_());
  }

  init() {
    this.currentCheckState_ = this.determineCheckState_(this.getNativeControl_());
    this.adapter_.addClass(cssClasses$1.UPGRADED);
    this.adapter_.registerChangeHandler(this.changeHandler_);
    this.installPropertyChangeHooks_();
  }

  destroy() {
    this.adapter_.deregisterChangeHandler(this.changeHandler_);
    this.uninstallPropertyChangeHooks_();
  }

  /** @return {boolean} */
  isChecked() {
    return this.getNativeControl_().checked;
  }

  /** @param {boolean} checked */
  setChecked(checked) {
    this.getNativeControl_().checked = checked;
  }

  /** @return {boolean} */
  isIndeterminate() {
    return this.getNativeControl_().indeterminate;
  }

  /** @param {boolean} indeterminate */
  setIndeterminate(indeterminate) {
    this.getNativeControl_().indeterminate = indeterminate;
  }

  /** @return {boolean} */
  isDisabled() {
    return this.getNativeControl_().disabled;
  }

  /** @param {boolean} disabled */
  setDisabled(disabled) {
    this.getNativeControl_().disabled = disabled;
    if (disabled) {
      this.adapter_.addClass(cssClasses$1.DISABLED);
    } else {
      this.adapter_.removeClass(cssClasses$1.DISABLED);
    }
  }

  /** @return {?string} */
  getValue() {
    return this.getNativeControl_().value;
  }

  /** @param {?string} value */
  setValue(value) {
    this.getNativeControl_().value = value;
  }

  /** @private */
  installPropertyChangeHooks_() {
    const nativeCb = this.getNativeControl_();
    const cbProto = Object.getPrototypeOf(nativeCb);

    CB_PROTO_PROPS.forEach((controlState) => {
      const desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
      // We have to check for this descriptor, since some browsers (Safari) don't support its return.
      // See: https://bugs.webkit.org/show_bug.cgi?id=49739
      if (validDescriptor(desc)) {
        const nativeCbDesc = /** @type {!ObjectPropertyDescriptor} */ ({
          get: desc.get,
          set: (state) => {
            desc.set.call(nativeCb, state);
            this.transitionCheckState_();
          },
          configurable: desc.configurable,
          enumerable: desc.enumerable,
        });
        Object.defineProperty(nativeCb, controlState, nativeCbDesc);
      }
    });
  }

  /** @private */
  uninstallPropertyChangeHooks_() {
    const nativeCb = this.getNativeControl_();
    const cbProto = Object.getPrototypeOf(nativeCb);

    CB_PROTO_PROPS.forEach((controlState) => {
      const desc = /** @type {!ObjectPropertyDescriptor} */ (
        Object.getOwnPropertyDescriptor(cbProto, controlState));
      if (validDescriptor(desc)) {
        Object.defineProperty(nativeCb, controlState, desc);
      }
    });
  }

  /** @private */
  transitionCheckState_() {
    const nativeCb = this.adapter_.getNativeControl();
    if (!nativeCb) {
      return;
    }
    const oldState = this.currentCheckState_;
    const newState = this.determineCheckState_(nativeCb);
    if (oldState === newState) {
      return;
    }

    // Check to ensure that there isn't a previously existing animation class, in case for example
    // the user interacted with the checkbox before the animation was finished.
    if (this.currentAnimationClass_.length > 0) {
      clearTimeout(this.animEndLatchTimer_);
      this.adapter_.forceLayout();
      this.adapter_.removeClass(this.currentAnimationClass_);
    }

    this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
    this.currentCheckState_ = newState;

    // Check for parentNode so that animations are only run when the element is attached
    // to the DOM.
    if (this.adapter_.isAttachedToDOM() && this.currentAnimationClass_.length > 0) {
      this.adapter_.addClass(this.currentAnimationClass_);
      this.adapter_.registerAnimationEndHandler(this.animEndHandler_);
    }
  }

  /**
   * @param {!MDCSelectionControlState} nativeCb
   * @return {string}
   * @private
   */
  determineCheckState_(nativeCb) {
    const {
      TRANSITION_STATE_INDETERMINATE,
      TRANSITION_STATE_CHECKED,
      TRANSITION_STATE_UNCHECKED,
    } = strings$1;

    if (nativeCb.indeterminate) {
      return TRANSITION_STATE_INDETERMINATE;
    }
    return nativeCb.checked ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
  }

  /**
   * @param {string} oldState
   * @param {string} newState
   * @return {string}
   */
  getTransitionAnimationClass_(oldState, newState) {
    const {
      TRANSITION_STATE_INIT,
      TRANSITION_STATE_CHECKED,
      TRANSITION_STATE_UNCHECKED,
    } = strings$1;

    const {
      ANIM_UNCHECKED_CHECKED,
      ANIM_UNCHECKED_INDETERMINATE,
      ANIM_CHECKED_UNCHECKED,
      ANIM_CHECKED_INDETERMINATE,
      ANIM_INDETERMINATE_CHECKED,
      ANIM_INDETERMINATE_UNCHECKED,
    } = MDCCheckboxFoundation.cssClasses;

    switch (oldState) {
    case TRANSITION_STATE_INIT:
      if (newState === TRANSITION_STATE_UNCHECKED) {
        return '';
      }
    // fallthrough
    case TRANSITION_STATE_UNCHECKED:
      return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;
    case TRANSITION_STATE_CHECKED:
      return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;
    // TRANSITION_STATE_INDETERMINATE
    default:
      return newState === TRANSITION_STATE_CHECKED ?
        ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
    }
  }

  /**
   * @return {!MDCSelectionControlState}
   * @private
   */
  getNativeControl_() {
    return this.adapter_.getNativeControl() || {
      checked: false,
      indeterminate: false,
      disabled: false,
      value: null,
    };
  }
}

/**
 * @param {ObjectPropertyDescriptor|undefined} inputPropDesc
 * @return {boolean}
 */
function validDescriptor(inputPropDesc) {
  return !!inputPropDesc && typeof inputPropDesc.set === 'function';
}

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-unused-vars */
/* eslint-enable no-unused-vars */
/**
 * @extends MDCComponent<!MDCCheckboxFoundation>
 * @implements {MDCSelectionControl}
 */
class MDCCheckbox extends MDCComponent {
  static attachTo(root) {
    return new MDCCheckbox(root);
  }

  /**
   * Returns the state of the native control element, or null if the native control element is not present.
   * @return {?MDCSelectionControlState}
   * @private
   */
  get nativeCb_() {
    const {NATIVE_CONTROL_SELECTOR} = MDCCheckboxFoundation.strings;
    const cbEl = /** @type {?MDCSelectionControlState} */ (
      this.root_.querySelector(NATIVE_CONTROL_SELECTOR));
    return cbEl;
  }

  constructor(...args) {
    super(...args);

    /** @private {!MDCRipple} */
    this.ripple_ = this.initRipple_();
  }

  /**
   * @return {!MDCRipple}
   * @private
   */
  initRipple_() {
    const MATCHES = getMatchesProperty(HTMLElement.prototype);
    const adapter = Object.assign(MDCRipple.createAdapter(this), {
      isUnbounded: () => true,
      isSurfaceActive: () => this.nativeCb_[MATCHES](':active'),
      registerInteractionHandler: (type, handler) => this.nativeCb_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.nativeCb_.removeEventListener(type, handler),
      computeBoundingRect: () => {
        const {left, top} = this.root_.getBoundingClientRect();
        const DIM = 40;
        return {
          top,
          left,
          right: left + DIM,
          bottom: top + DIM,
          width: DIM,
          height: DIM,
        };
      },
    });
    const foundation = new MDCRippleFoundation(adapter);
    return new MDCRipple(this.root_, foundation);
  }

  /** @return {!MDCCheckboxFoundation} */
  getDefaultFoundation() {
    return new MDCCheckboxFoundation({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      registerAnimationEndHandler:
        (handler) => this.root_.addEventListener(getCorrectEventName(window, 'animationend'), handler),
      deregisterAnimationEndHandler:
        (handler) => this.root_.removeEventListener(getCorrectEventName(window, 'animationend'), handler),
      registerChangeHandler: (handler) => this.nativeCb_.addEventListener('change', handler),
      deregisterChangeHandler: (handler) => this.nativeCb_.removeEventListener('change', handler),
      getNativeControl: () => this.nativeCb_,
      forceLayout: () => this.root_.offsetWidth,
      isAttachedToDOM: () => Boolean(this.root_.parentNode),
    });
  }

  /** @return {!MDCRipple} */
  get ripple() {
    return this.ripple_;
  }

  /** @return {boolean} */
  get checked() {
    return this.foundation_.isChecked();
  }

  /** @param {boolean} checked */
  set checked(checked) {
    this.foundation_.setChecked(checked);
  }

  /** @return {boolean} */
  get indeterminate() {
    return this.foundation_.isIndeterminate();
  }

  /** @param {boolean} indeterminate */
  set indeterminate(indeterminate) {
    this.foundation_.setIndeterminate(indeterminate);
  }

  /** @return {boolean} */
  get disabled() {
    return this.foundation_.isDisabled();
  }

  /** @param {boolean} disabled */
  set disabled(disabled) {
    this.foundation_.setDisabled(disabled);
  }

  /** @return {?string} */
  get value() {
    return this.foundation_.getValue();
  }

  /** @param {?string} value */
  set value(value) {
    this.foundation_.setValue(value);
  }

  destroy() {
    this.ripple_.destroy();
    super.destroy();
  }
}

class MWCCheckbox {
    constructor() {
        this.ripple = true;
        this.disabled = false;
        this.checked = false;
        this.indeterminate = false;
        this.alignlabel = 'left';
    }
    componentWillLoad() {
        if (this.checkcolor) {
            this.checkBoxEl.style.setProperty('--mdc-theme-secondary', `#${this.checkcolor}`);
        }
    }
    componentDidLoad() {
        if (this.ripple) {
            this.checkRipple = MDCCheckbox.attachTo(this.checkboxDiv);
        }
        if (this.indeterminate) {
            this.checkRipple.indeterminate = this.indeterminate;
        }
        if (this.formFieldDiv && this.alignlabel === 'right') {
            this.formFieldDiv.style.setProperty('flex-direction', 'row-reverse');
        }
    }
    getStyleNode() {
        var styleNode = document.createElement('style');
        styleNode.type = "text/css";
        var styleText = document.createTextNode(`.mdc-checkbox::before, .mdc-checkbox::after{
                    background-color: #${this.checkcolor}20 !important;
                }`);
        styleNode.appendChild(styleText);
        this.elStyleNode = styleNode;
        this.checkBoxEl.appendChild(this.elStyleNode);
    }
    onFocus() {
        if (this.checkcolor) {
            this.getStyleNode();
        }
    }
    onBlur() {
        if (this.checkcolor) {
            this.checkBoxEl.removeChild(this.elStyleNode);
        }
    }
    componentDidUnload() {
        if (this.ripple) {
            this.checkRipple.destroy();
        }
    }
    renderCheckbox() {
        return (h("div", { class: "mdc-checkbox", ref: (cbDiv) => { this.checkboxDiv = cbDiv; } },
            h("input", { type: "checkbox", id: "my-checkbox", ref: (input) => { this.inputComp = input; }, disabled: this.disabled, checked: this.checked, onFocus: (evt) => this.onFocus(), onBlur: (evt) => this.onBlur(), onChange: (evt) => this.change.emit(evt), class: "mdc-checkbox__native-control" }),
            h("div", { class: "mdc-checkbox__background" },
                h("svg", { class: "mdc-checkbox__checkmark", viewBox: "0 0 24 24" },
                    h("path", { class: "mdc-checkbox__checkmark__path", fill: "none", stroke: "white", d: "M1.73,12.91 8.1,19.28 22.79,4.59" })),
                h("div", { class: "mdc-checkbox__mixedmark" }))));
    }
    renderCheckboxWithLabel() {
        return (h("div", { class: "mdc-form-field", ref: (formFieldDiv) => { this.formFieldDiv = formFieldDiv; } },
            h("label", null, this.label),
            this.renderCheckbox()));
    }
    render() {
        if (this.label) {
            return this.renderCheckboxWithLabel();
        }
        return this.renderCheckbox();
    }
}

class MWCContainer {
    constructor() {
        this.backgroundcolor = "";
        this.flexdirection = "row";
        //row-reverse,column,column-reverse,row
        this.flexwrap = "nowrap";
        //wrap,wrap-reverse
        this.justifycontent = "flex-start";
        //flex-end,center,space-between,space-around,space-evenly
        this.alignitems = "flex-start";
        //flex-start,flex-end,center,baseline,stretch
        this.aligncontent = "flex-start";
    }
    //flex-start,flex-end,center,space-between,space-around,stretch
    componentWillLoad() {
        let containerStyle = `display : flex;`;
        if (this.height) {
            containerStyle = `${containerStyle} height:${this.height};`;
        }
        if (this.width) {
            containerStyle = `${containerStyle} width:${this.width};`;
        }
        if (this.flexdirection) {
            containerStyle = `${containerStyle} flex-direction:${this.flexdirection};`;
        }
        if (this.flexwrap) {
            containerStyle = `${containerStyle} flex-wrap:${this.flexwrap};`;
        }
        if (this.justifycontent) {
            containerStyle = `${containerStyle} justify-content:${this.justifycontent};`;
        }
        if (this.alignitems) {
            containerStyle = `${containerStyle} align-items:${this.alignitems};`;
        }
        if (this.aligncontent) {
            containerStyle = `${containerStyle} align-content:${this.aligncontent};`;
        }
        if (this.backgroundcolor) {
            containerStyle = `${containerStyle} background-color:${this.backgroundcolor};`;
        }
        this.containerEl.setAttribute('style', containerStyle);
    }
    render() {
        return (h("slot", null));
    }
}

class MWCContentForToolbar {
    componentWillLoad() {
        this.contentToolbarEl.className = this.getIconClassName();
    }
    getIconClassName() {
        let className = 'mdc-toolbar-fixed-adjust';
        return className;
    }
    render() {
        return (h("slot", null));
    }
}

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const cssClasses$2 = {
  ROOT: 'mdc-dialog',
  OPEN: 'mdc-dialog--open',
  ANIMATING: 'mdc-dialog--animating',
  BACKDROP: 'mdc-dialog__backdrop',
  SCROLL_LOCK: 'mdc-dialog-scroll-lock',
  ACCEPT_BTN: 'mdc-dialog__footer__button--accept',
  CANCEL_BTN: 'mdc-dialog__footer__button--cancel',
};

const strings$2 = {
  OPEN_DIALOG_SELECTOR: '.mdc-dialog--open',
  DIALOG_SURFACE_SELECTOR: '.mdc-dialog__surface',
  ACCEPT_SELECTOR: '.mdc-dialog__footer__button--accept',
  ACCEPT_EVENT: 'MDCDialog:accept',
  CANCEL_EVENT: 'MDCDialog:cancel',
};

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCDialogFoundation extends MDCFoundation {
  static get cssClasses() {
    return cssClasses$2;
  }

  static get strings() {
    return strings$2;
  }

  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      addBodyClass: (/* className: string */) => {},
      removeBodyClass: (/* className: string */) => {},
      eventTargetHasClass: (/* target: EventTarget, className: string */) => /* boolean */ false,
      registerInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      deregisterInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      registerSurfaceInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      deregisterSurfaceInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      registerDocumentKeydownHandler: (/* handler: EventListener */) => {},
      deregisterDocumentKeydownHandler: (/* handler: EventListener */) => {},
      registerTransitionEndHandler: (/* handler: EventListener */) => {},
      deregisterTransitionEndHandler: (/* handler: EventListener */) => {},
      notifyAccept: () => {},
      notifyCancel: () => {},
      trapFocusOnSurface: () => {},
      untrapFocusOnSurface: () => {},
      isDialog: (/* el: Element */) => /* boolean */ false,
      layoutFooterRipples: () => {},
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCDialogFoundation.defaultAdapter, adapter));
    this.isOpen_ = false;
    this.componentClickHandler_ = (evt) => {
      if (this.adapter_.eventTargetHasClass(evt.target, cssClasses$2.BACKDROP)) {
        this.cancel(true);
      }
    };
    this.dialogClickHandler_ = (evt) => this.handleDialogClick_(evt);
    this.documentKeydownHandler_ = (evt) => {
      if (evt.key && evt.key === 'Escape' || evt.keyCode === 27) {
        this.cancel(true);
      }
    };
    this.transitionEndHandler_ = (evt) => this.handleTransitionEnd_(evt);
  };

  destroy() {
    // Ensure that dialog is cleaned up when destroyed
    if (this.isOpen_) {
      this.adapter_.deregisterSurfaceInteractionHandler('click', this.dialogClickHandler_);
      this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
      this.adapter_.untrapFocusOnSurface();
      this.adapter_.deregisterTransitionEndHandler(this.transitionEndHandler_);
      this.adapter_.removeClass(MDCDialogFoundation.cssClasses.ANIMATING);
      this.adapter_.removeClass(MDCDialogFoundation.cssClasses.OPEN);
      this.enableScroll_();
    }
  }

  open() {
    this.isOpen_ = true;
    this.disableScroll_();
    this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_);
    this.adapter_.registerSurfaceInteractionHandler('click', this.dialogClickHandler_);
    this.adapter_.registerInteractionHandler('click', this.componentClickHandler_);
    this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
    this.adapter_.addClass(MDCDialogFoundation.cssClasses.ANIMATING);
    this.adapter_.addClass(MDCDialogFoundation.cssClasses.OPEN);
  }

  close() {
    this.isOpen_ = false;
    this.adapter_.deregisterSurfaceInteractionHandler('click', this.dialogClickHandler_);
    this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
    this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
    this.adapter_.untrapFocusOnSurface();
    this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
    this.adapter_.addClass(MDCDialogFoundation.cssClasses.ANIMATING);
    this.adapter_.removeClass(MDCDialogFoundation.cssClasses.OPEN);
  }

  isOpen() {
    return this.isOpen_;
  }

  accept(shouldNotify) {
    if (shouldNotify) {
      this.adapter_.notifyAccept();
    }

    this.close();
  }

  cancel(shouldNotify) {
    if (shouldNotify) {
      this.adapter_.notifyCancel();
    }

    this.close();
  }

  handleDialogClick_(evt) {
    const {target} = evt;
    if (this.adapter_.eventTargetHasClass(target, cssClasses$2.ACCEPT_BTN)) {
      this.accept(true);
    } else if (this.adapter_.eventTargetHasClass(target, cssClasses$2.CANCEL_BTN)) {
      this.cancel(true);
    }
  }

  handleTransitionEnd_(evt) {
    if (this.adapter_.isDialog(evt.target)) {
      this.adapter_.deregisterTransitionEndHandler(this.transitionEndHandler_);
      this.adapter_.removeClass(MDCDialogFoundation.cssClasses.ANIMATING);
      if (this.isOpen_) {
        this.adapter_.trapFocusOnSurface();
        this.adapter_.layoutFooterRipples();
      } else {
        this.enableScroll_();
      }
    }
  };

  disableScroll_() {
    this.adapter_.addBodyClass(cssClasses$2.SCROLL_LOCK);
  }

  enableScroll_() {
    this.adapter_.removeBodyClass(cssClasses$2.SCROLL_LOCK);
  }
}

var tabbable = function(el, options) {
  options = options || {};

  var elementDocument = el.ownerDocument || el;
  var basicTabbables = [];
  var orderedTabbables = [];

  // A node is "available" if
  // - it's computed style
  var isUnavailable = createIsUnavailable(elementDocument);

  var candidateSelectors = [
    'input',
    'select',
    'a[href]',
    'textarea',
    'button',
    '[tabindex]',
  ];

  var candidates = el.querySelectorAll(candidateSelectors.join(','));

  if (options.includeContainer) {
    var matches = Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

    if (
      candidateSelectors.some(function(candidateSelector) {
        return matches.call(el, candidateSelector);
      })
    ) {
      candidates = Array.prototype.slice.apply(candidates);
      candidates.unshift(el);
    }
  }

  var candidate, candidateIndex;
  for (var i = 0, l = candidates.length; i < l; i++) {
    candidate = candidates[i];
    candidateIndex = parseInt(candidate.getAttribute('tabindex'), 10) || candidate.tabIndex;

    if (
      candidateIndex < 0
      || (candidate.tagName === 'INPUT' && candidate.type === 'hidden')
      || candidate.disabled
      || isUnavailable(candidate, elementDocument)
    ) {
      continue;
    }

    if (candidateIndex === 0) {
      basicTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        index: i,
        tabIndex: candidateIndex,
        node: candidate,
      });
    }
  }

  var tabbableNodes = orderedTabbables
    .sort(function(a, b) {
      return a.tabIndex === b.tabIndex ? a.index - b.index : a.tabIndex - b.tabIndex;
    })
    .map(function(a) {
      return a.node
    });

  Array.prototype.push.apply(tabbableNodes, basicTabbables);

  return tabbableNodes;
};

function createIsUnavailable(elementDocument) {
  // Node cache must be refreshed on every check, in case
  // the content of the element has changed
  var isOffCache = [];

  // "off" means `display: none;`, as opposed to "hidden",
  // which means `visibility: hidden;`. getComputedStyle
  // accurately reflects visiblity in context but not
  // "off" state, so we need to recursively check parents.

  function isOff(node, nodeComputedStyle) {
    if (node === elementDocument.documentElement) return false;

    // Find the cached node (Array.prototype.find not available in IE9)
    for (var i = 0, length = isOffCache.length; i < length; i++) {
      if (isOffCache[i][0] === node) return isOffCache[i][1];
    }

    nodeComputedStyle = nodeComputedStyle || elementDocument.defaultView.getComputedStyle(node);

    var result = false;

    if (nodeComputedStyle.display === 'none') {
      result = true;
    } else if (node.parentNode) {
      result = isOff(node.parentNode);
    }

    isOffCache.push([node, result]);

    return result;
  }

  return function isUnavailable(node) {
    if (node === elementDocument.documentElement) return false;

    var computedStyle = elementDocument.defaultView.getComputedStyle(node);

    if (isOff(node, computedStyle)) return true;

    return computedStyle.visibility === 'hidden';
  }
}

var listeningFocusTrap = null;

function focusTrap(element, userOptions) {
  var tabbableNodes = [];
  var firstTabbableNode = null;
  var lastTabbableNode = null;
  var nodeFocusedBeforeActivation = null;
  var active = false;
  var paused = false;
  var tabEvent = null;

  var container = (typeof element === 'string')
    ? document.querySelector(element)
    : element;

  var config = userOptions || {};
  config.returnFocusOnDeactivate = (userOptions && userOptions.returnFocusOnDeactivate !== undefined)
    ? userOptions.returnFocusOnDeactivate
    : true;
  config.escapeDeactivates = (userOptions && userOptions.escapeDeactivates !== undefined)
    ? userOptions.escapeDeactivates
    : true;

  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause,
  };

  return trap;

  function activate(activateOptions) {
    if (active) return;

    var defaultedActivateOptions = {
      onActivate: (activateOptions && activateOptions.onActivate !== undefined)
        ? activateOptions.onActivate
        : config.onActivate,
    };

    active = true;
    paused = false;
    nodeFocusedBeforeActivation = document.activeElement;

    if (defaultedActivateOptions.onActivate) {
      defaultedActivateOptions.onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!active) return;

    var defaultedDeactivateOptions = {
      returnFocus: (deactivateOptions && deactivateOptions.returnFocus !== undefined)
        ? deactivateOptions.returnFocus
        : config.returnFocusOnDeactivate,
      onDeactivate: (deactivateOptions && deactivateOptions.onDeactivate !== undefined)
        ? deactivateOptions.onDeactivate
        : config.onDeactivate,
    };

    removeListeners();

    if (defaultedDeactivateOptions.onDeactivate) {
      defaultedDeactivateOptions.onDeactivate();
    }

    if (defaultedDeactivateOptions.returnFocus) {
      setTimeout(function () {
        tryFocus(nodeFocusedBeforeActivation);
      }, 0);
    }

    active = false;
    paused = false;
    return this;
  }

  function pause() {
    if (paused || !active) return;
    paused = true;
    removeListeners();
  }

  function unpause() {
    if (!paused || !active) return;
    paused = false;
    addListeners();
  }

  function addListeners() {
    if (!active) return;

    // There can be only one listening focus trap at a time
    if (listeningFocusTrap) {
      listeningFocusTrap.pause();
    }
    listeningFocusTrap = trap;

    updateTabbableNodes();
    tryFocus(firstFocusNode());
    document.addEventListener('focus', checkFocus, true);
    document.addEventListener('click', checkClick, true);
    document.addEventListener('mousedown', checkPointerDown, true);
    document.addEventListener('touchstart', checkPointerDown, true);
    document.addEventListener('keydown', checkKey, true);

    return trap;
  }

  function removeListeners() {
    if (!active || listeningFocusTrap !== trap) return;

    document.removeEventListener('focus', checkFocus, true);
    document.removeEventListener('click', checkClick, true);
    document.removeEventListener('mousedown', checkPointerDown, true);
    document.removeEventListener('touchstart', checkPointerDown, true);
    document.removeEventListener('keydown', checkKey, true);

    listeningFocusTrap = null;

    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;
    if (!optionValue) {
      return null;
    }
    if (typeof optionValue === 'string') {
      node = document.querySelector(optionValue);
      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }
    if (typeof optionValue === 'function') {
      node = optionValue();
      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }
    return node;
  }

  function firstFocusNode() {
    var node;
    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(document.activeElement)) {
      node = document.activeElement;
    } else {
      node = tabbableNodes[0] || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error('You can\'t have a focus-trap without at least one focusable element');
    }

    return node;
  }

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event
  function checkPointerDown(e) {
    if (config.clickOutsideDeactivates && !container.contains(e.target)) {
      deactivate({ returnFocus: false });
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function checkFocus(e) {
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    // Checking for a blur method here resolves a Firefox issue (#15)
    if (typeof e.target.blur === 'function') e.target.blur();

    if (tabEvent) {
      readjustFocus(tabEvent);
    }
  }

  function checkKey(e) {
    if (e.key === 'Tab' || e.keyCode === 9) {
      handleTab(e);
    }

    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      deactivate();
    }
  }

  function handleTab(e) {
    updateTabbableNodes();

    if (e.target.hasAttribute('tabindex') && Number(e.target.getAttribute('tabindex')) < 0) {
      return tabEvent = e;
    }

    e.preventDefault();
    var currentFocusIndex = tabbableNodes.indexOf(e.target);

    if (e.shiftKey) {
      if (e.target === firstTabbableNode || tabbableNodes.indexOf(e.target) === -1) {
        return tryFocus(lastTabbableNode);
      }
      return tryFocus(tabbableNodes[currentFocusIndex - 1]);
    }

    if (e.target === lastTabbableNode) return tryFocus(firstTabbableNode);

    tryFocus(tabbableNodes[currentFocusIndex + 1]);
  }

  function updateTabbableNodes() {
    tabbableNodes = tabbable(container);
    firstTabbableNode = tabbableNodes[0];
    lastTabbableNode = tabbableNodes[tabbableNodes.length - 1];
  }

  function readjustFocus(e) {
    if (e.shiftKey) return tryFocus(lastTabbableNode);

    tryFocus(firstTabbableNode);
  }
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function tryFocus(node) {
  if (!node || !node.focus) return;
  if (node === document.activeElement)  return;

  node.focus();
  if (node.tagName.toLowerCase() === 'input') {
    node.select();
  }
}

var focusTrap_1 = focusTrap;

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function createFocusTrapInstance(surfaceEl, acceptButtonEl, focusTrapFactory = focusTrap_1) {
  return focusTrapFactory(surfaceEl, {
    initialFocus: acceptButtonEl,
    clickOutsideDeactivates: true,
  });
}

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCDialog extends MDCComponent {
  static attachTo(root) {
    return new MDCDialog(root);
  }

  get open() {
    return this.foundation_.isOpen();
  }

  get acceptButton_() {
    return this.root_.querySelector(MDCDialogFoundation.strings.ACCEPT_SELECTOR);
  }

  get dialogSurface_() {
    return this.root_.querySelector(MDCDialogFoundation.strings.DIALOG_SURFACE_SELECTOR);
  }

  initialize() {
    this.focusTrap_ = createFocusTrapInstance(this.dialogSurface_, this.acceptButton_);
    this.footerBtnRipples_ = [];

    const footerBtns = this.root_.querySelectorAll('.mdc-dialog__footer__button');
    for (let i = 0, footerBtn; footerBtn = footerBtns[i]; i++) {
      this.footerBtnRipples_.push(new MDCRipple(footerBtn));
    }
  }

  destroy() {
    this.footerBtnRipples_.forEach((ripple) => ripple.destroy());
    super.destroy();
  }

  show() {
    this.foundation_.open();
  }

  close() {
    this.foundation_.close();
  }

  getDefaultFoundation() {
    return new MDCDialogFoundation({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      addBodyClass: (className) => document.body.classList.add(className),
      removeBodyClass: (className) => document.body.classList.remove(className),
      eventTargetHasClass: (target, className) => target.classList.contains(className),
      registerInteractionHandler: (evt, handler) => this.root_.addEventListener(evt, handler),
      deregisterInteractionHandler: (evt, handler) => this.root_.removeEventListener(evt, handler),
      registerSurfaceInteractionHandler: (evt, handler) => this.dialogSurface_.addEventListener(evt, handler),
      deregisterSurfaceInteractionHandler: (evt, handler) => this.dialogSurface_.removeEventListener(evt, handler),
      registerDocumentKeydownHandler: (handler) => document.addEventListener('keydown', handler),
      deregisterDocumentKeydownHandler: (handler) => document.removeEventListener('keydown', handler),
      registerTransitionEndHandler: (handler) => this.dialogSurface_.addEventListener('transitionend', handler),
      deregisterTransitionEndHandler: (handler) => this.dialogSurface_.removeEventListener('transitionend', handler),
      notifyAccept: () => this.emit(MDCDialogFoundation.strings.ACCEPT_EVENT),
      notifyCancel: () => this.emit(MDCDialogFoundation.strings.CANCEL_EVENT),
      trapFocusOnSurface: () => this.focusTrap_.activate(),
      untrapFocusOnSurface: () => this.focusTrap_.deactivate(),
      isDialog: (el) => el === this.dialogSurface_,
      layoutFooterRipples: () => this.footerBtnRipples_.forEach((ripple) => ripple.layout()),
    });
  }
}

class MWCDialog {
    show() {
        this.mdcDialog.show();
    }
    close() {
        this.mdcDialog.close();
    }
    componentDidLoad() {
        this.mdcDialog = MDCDialog.attachTo(this.dialogDiv);
        this.mdcDialog.listen('MDCDialog:accept', () => {
            this.accepted.emit();
        });
        this.mdcDialog.listen('MDCDialog:cancel', () => {
            this.canceled.emit();
        });
        let cardStyles = '';
        if (this.width) {
            cardStyles = `max-width:${this.width} !important; width:${this.width} !important; min-width:${this.width} !important;`;
        }
        if (this.height) {
            cardStyles = `${cardStyles}height:${this.height}; `;
        }
        if (cardStyles.length > 0) {
            this.dialogEl.getElementsByTagName("div")[0].setAttribute('style', cardStyles);
        }
    }
    componentDidUnload() {
        this.mdcDialog.destroy();
    }
    render() {
        return (h("aside", { ref: (dialogDiv) => { this.dialogDiv = dialogDiv; }, class: "mdc-dialog", role: "alertdialog", "aria-labelledby": "my-mdc-dialog-label", "aria-describedby": "my-mdc-dialog-description" },
            h("div", { class: "mdc-dialog__surface" },
                h("slot", null)),
            h("div", { class: "mdc-dialog__backdrop" })));
    }
}

class MWCDialogBody {
    render() {
        return (h("section", { class: "mdc-dialog__body" },
            h("slot", null)));
    }
}

class MWCDialogFooter {
    componentDidLoad() {
        Array.from(this.dialogFooterEl.children[0].children).forEach((item, index) => {
            item.children[0].classList.add('mdc-dialog__footer__button');
            if (item.getAttribute('type') == "accept") {
                item.children[0].classList.add('mdc-dialog__footer__button--accept');
            }
            if (item.getAttribute('type') == "cancel") {
                item.children[0].classList.add('mdc-dialog__footer__button--cancel');
            }
        });
    }
    render() {
        return (h("footer", { class: "mdc-dialog__footer" },
            h("slot", null)));
    }
}

class MWCDialogHeader {
    render() {
        return (h("header", { class: "mdc-dialog__header" },
            h("h2", { class: "mdc-dialog__header__title" },
                h("slot", null))));
    }
}

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const TAB_DATA = 'data-mdc-tabindex';
const TAB_DATA_HANDLED = 'data-mdc-tabindex-handled';

let storedTransformPropertyName_;
let supportsPassive_$1;

// Remap touch events to pointer events, if the browser doesn't support touch events.
function remapEvent(eventName, globalObj = window) {
  if (!('ontouchstart' in globalObj.document)) {
    switch (eventName) {
    case 'touchstart':
      return 'pointerdown';
    case 'touchmove':
      return 'pointermove';
    case 'touchend':
      return 'pointerup';
    default:
      return eventName;
    }
  }

  return eventName;
}

// Choose the correct transform property to use on the current browser.
function getTransformPropertyName(globalObj = window, forceRefresh = false) {
  if (storedTransformPropertyName_ === undefined || forceRefresh) {
    const el = globalObj.document.createElement('div');
    const transformPropertyName = ('transform' in el.style ? 'transform' : '-webkit-transform');
    storedTransformPropertyName_ = transformPropertyName;
  }

  return storedTransformPropertyName_;
}

// Determine whether the current browser supports CSS properties.
function supportsCssCustomProperties(globalObj = window) {
  if ('CSS' in globalObj) {
    return globalObj.CSS.supports('(--color: red)');
  }
  return false;
}

// Determine whether the current browser supports passive event listeners, and if so, use them.
function applyPassive$1(globalObj = window, forceRefresh = false) {
  if (supportsPassive_$1 === undefined || forceRefresh) {
    let isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, {get passive() {
        isSupported = true;
      }});
    } catch (e) { }

    supportsPassive_$1 = isSupported;
  }

  return supportsPassive_$1 ? {passive: true} : false;
}

// Save the tab state for an element.
function saveElementTabState(el) {
  if (el.hasAttribute('tabindex')) {
    el.setAttribute(TAB_DATA, el.getAttribute('tabindex'));
  }
  el.setAttribute(TAB_DATA_HANDLED, true);
}

// Restore the tab state for an element, if it was saved.
function restoreElementTabState(el) {
  // Only modify elements we've already handled, in case anything was dynamically added since we saved state.
  if (el.hasAttribute(TAB_DATA_HANDLED)) {
    if (el.hasAttribute(TAB_DATA)) {
      el.setAttribute('tabindex', el.getAttribute(TAB_DATA));
      el.removeAttribute(TAB_DATA);
    } else {
      el.removeAttribute('tabindex');
    }
    el.removeAttribute(TAB_DATA_HANDLED);
  }
}

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const FOCUSABLE_ELEMENTS =
  'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), ' +
  'button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]';

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCSlidableDrawerFoundation extends MDCFoundation {
  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      hasClass: (/* className: string */) => {},
      hasNecessaryDom: () => /* boolean */ false,
      registerInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      deregisterInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      registerDrawerInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      deregisterDrawerInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      registerTransitionEndHandler: (/* handler: EventListener */) => {},
      deregisterTransitionEndHandler: (/* handler: EventListener */) => {},
      registerDocumentKeydownHandler: (/* handler: EventListener */) => {},
      deregisterDocumentKeydownHandler: (/* handler: EventListener */) => {},
      setTranslateX: (/* value: number | null */) => {},
      getFocusableElements: () => /* NodeList */ {},
      saveElementTabState: (/* el: Element */) => {},
      restoreElementTabState: (/* el: Element */) => {},
      makeElementUntabbable: (/* el: Element */) => {},
      notifyOpen: () => {},
      notifyClose: () => {},
      isRtl: () => /* boolean */ false,
      getDrawerWidth: () => /* number */ 0,
    };
  }

  constructor(adapter, rootCssClass, animatingCssClass, openCssClass) {
    super(Object.assign(MDCSlidableDrawerFoundation.defaultAdapter, adapter));

    this.rootCssClass_ = rootCssClass;
    this.animatingCssClass_ = animatingCssClass;
    this.openCssClass_ = openCssClass;

    this.transitionEndHandler_ = (evt) => this.handleTransitionEnd_(evt);

    this.inert_ = false;

    this.componentTouchStartHandler_ = (evt) => this.handleTouchStart_(evt);
    this.componentTouchMoveHandler_ = (evt) => this.handleTouchMove_(evt);
    this.componentTouchEndHandler_ = (evt) => this.handleTouchEnd_(evt);
    this.documentKeydownHandler_ = (evt) => {
      if (evt.key && evt.key === 'Escape' || evt.keyCode === 27) {
        this.close();
      }
    };
  }

  init() {
    const ROOT = this.rootCssClass_;
    const OPEN = this.openCssClass_;

    if (!this.adapter_.hasClass(ROOT)) {
      throw new Error(`${ROOT} class required in root element.`);
    }

    if (!this.adapter_.hasNecessaryDom()) {
      throw new Error(`Required DOM nodes missing in ${ROOT} component.`);
    }

    if (this.adapter_.hasClass(OPEN)) {
      this.isOpen_ = true;
    } else {
      this.detabinate_();
      this.isOpen_ = false;
    }

    this.adapter_.registerDrawerInteractionHandler('touchstart', this.componentTouchStartHandler_);
    this.adapter_.registerInteractionHandler('touchmove', this.componentTouchMoveHandler_);
    this.adapter_.registerInteractionHandler('touchend', this.componentTouchEndHandler_);
  }

  destroy() {
    this.adapter_.deregisterDrawerInteractionHandler('touchstart', this.componentTouchStartHandler_);
    this.adapter_.deregisterInteractionHandler('touchmove', this.componentTouchMoveHandler_);
    this.adapter_.deregisterInteractionHandler('touchend', this.componentTouchEndHandler_);
    // Deregister the document keydown handler just in case the component is destroyed while the menu is open.
    this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
  }

  open() {
    this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
    this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_);
    this.adapter_.addClass(this.animatingCssClass_);
    this.adapter_.addClass(this.openCssClass_);
    this.retabinate_();
    // Debounce multiple calls
    if (!this.isOpen_) {
      this.adapter_.notifyOpen();
    }
    this.isOpen_ = true;
  }

  close() {
    this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
    this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
    this.adapter_.addClass(this.animatingCssClass_);
    this.adapter_.removeClass(this.openCssClass_);
    this.detabinate_();
    // Debounce multiple calls
    if (this.isOpen_) {
      this.adapter_.notifyClose();
    }
    this.isOpen_ = false;
  }

  isOpen() {
    return this.isOpen_;
  }

  /**
   *  Render all children of the drawer inert when it's closed.
   */
  detabinate_() {
    if (this.inert_) {
      return;
    }

    const elements = this.adapter_.getFocusableElements();
    if (elements) {
      for (let i = 0; i < elements.length; i++) {
        this.adapter_.saveElementTabState(elements[i]);
        this.adapter_.makeElementUntabbable(elements[i]);
      }
    }

    this.inert_ = true;
  }

  /**
   *  Make all children of the drawer tabbable again when it's open.
   */
  retabinate_() {
    if (!this.inert_) {
      return;
    }

    const elements = this.adapter_.getFocusableElements();
    if (elements) {
      for (let i = 0; i < elements.length; i++) {
        this.adapter_.restoreElementTabState(elements[i]);
      }
    }

    this.inert_ = false;
  }

  handleTouchStart_(evt) {
    if (!this.adapter_.hasClass(this.openCssClass_)) {
      return;
    }
    if (evt.pointerType && evt.pointerType !== 'touch') {
      return;
    }

    this.direction_ = this.adapter_.isRtl() ? -1 : 1;
    this.drawerWidth_ = this.adapter_.getDrawerWidth();
    this.startX_ = evt.touches ? evt.touches[0].pageX : evt.pageX;
    this.currentX_ = this.startX_;

    this.updateRaf_ = requestAnimationFrame(this.updateDrawer_.bind(this));
  }

  handleTouchMove_(evt) {
    if (evt.pointerType && evt.pointerType !== 'touch') {
      return;
    }

    this.currentX_ = evt.touches ? evt.touches[0].pageX : evt.pageX;
  }

  handleTouchEnd_(evt) {
    if (evt.pointerType && evt.pointerType !== 'touch') {
      return;
    }

    this.prepareForTouchEnd_();

    // Did the user close the drawer by more than 50%?
    if (Math.abs(this.newPosition_ / this.drawerWidth_) >= 0.5) {
      this.close();
    } else {
      // Triggering an open here means we'll get a nice animation back to the fully open state.
      this.open();
    }
  }

  prepareForTouchEnd_() {
    cancelAnimationFrame(this.updateRaf_);
    this.adapter_.setTranslateX(null);
  }

  updateDrawer_() {
    this.updateRaf_ = requestAnimationFrame(this.updateDrawer_.bind(this));
    this.adapter_.setTranslateX(this.newPosition_);
  }

  get newPosition_() {
    let newPos = null;

    if (this.direction_ === 1) {
      newPos = Math.min(0, this.currentX_ - this.startX_);
    } else {
      newPos = Math.max(0, this.currentX_ - this.startX_);
    }

    return newPos;
  }

  isRootTransitioningEventTarget_() {
    // Classes extending MDCSlidableDrawerFoundation should implement this method to return true or false
    // if the event target is the root event target currently transitioning.
    return false;
  }

  handleTransitionEnd_(evt) {
    if (this.isRootTransitioningEventTarget_(evt.target)) {
      this.adapter_.removeClass(this.animatingCssClass_);
      this.adapter_.deregisterTransitionEndHandler(this.transitionEndHandler_);
    }
  };
}

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const cssClasses$3 = {
  ROOT: 'mdc-temporary-drawer',
  OPEN: 'mdc-temporary-drawer--open',
  ANIMATING: 'mdc-temporary-drawer--animating',
  SCROLL_LOCK: 'mdc-drawer-scroll-lock',
};

const strings$3 = {
  DRAWER_SELECTOR: '.mdc-temporary-drawer__drawer',
  OPACITY_VAR_NAME: '--mdc-temporary-drawer-opacity',
  FOCUSABLE_ELEMENTS,
  OPEN_EVENT: 'MDCTemporaryDrawer:open',
  CLOSE_EVENT: 'MDCTemporaryDrawer:close',
};

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCTemporaryDrawerFoundation extends MDCSlidableDrawerFoundation {
  static get cssClasses() {
    return cssClasses$3;
  }

  static get strings() {
    return strings$3;
  }

  static get defaultAdapter() {
    return Object.assign(MDCSlidableDrawerFoundation.defaultAdapter, {
      addBodyClass: (/* className: string */) => {},
      removeBodyClass: (/* className: string */) => {},
      isDrawer: () => false,
      updateCssVariable: (/* value: string */) => {},
      eventTargetHasClass: (/* target: EventTarget, className: string */) => /* boolean */ false,
    });
  }

  constructor(adapter) {
    super(
      Object.assign(MDCTemporaryDrawerFoundation.defaultAdapter, adapter),
      MDCTemporaryDrawerFoundation.cssClasses.ROOT,
      MDCTemporaryDrawerFoundation.cssClasses.ANIMATING,
      MDCTemporaryDrawerFoundation.cssClasses.OPEN);

    this.componentClickHandler_ = (evt) => {
      if (this.adapter_.eventTargetHasClass(evt.target, cssClasses$3.ROOT)) {
        this.close(true);
      }
    };
  }

  init() {
    super.init();

    // Make browser aware of custom property being used in this element.
    // Workaround for certain types of hard-to-reproduce heisenbugs.
    this.adapter_.updateCssVariable(0);
    this.adapter_.registerInteractionHandler('click', this.componentClickHandler_);
  }

  destroy() {
    super.destroy();

    this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
    this.enableScroll_();
  }

  open() {
    this.disableScroll_();
    // Make sure custom property values are cleared before starting.
    this.adapter_.updateCssVariable('');

    super.open();
  }

  close() {
    // Make sure custom property values are cleared before making any changes.
    this.adapter_.updateCssVariable('');

    super.close();
  }

  prepareForTouchEnd_() {
    super.prepareForTouchEnd_();

    this.adapter_.updateCssVariable('');
  }

  updateDrawer_() {
    super.updateDrawer_();

    const newOpacity = Math.max(0, 1 + this.direction_ * (this.newPosition_ / this.drawerWidth_));
    this.adapter_.updateCssVariable(newOpacity);
  }

  isRootTransitioningEventTarget_(el) {
    return this.adapter_.isDrawer(el);
  }

  handleTransitionEnd_(evt) {
    super.handleTransitionEnd_(evt);
    if (!this.isOpen_) {
      this.enableScroll_();
    }
  };

  disableScroll_() {
    this.adapter_.addBodyClass(cssClasses$3.SCROLL_LOCK);
  }

  enableScroll_() {
    this.adapter_.removeBodyClass(cssClasses$3.SCROLL_LOCK);
  }
}

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCTemporaryDrawer extends MDCComponent {
  static attachTo(root) {
    return new MDCTemporaryDrawer(root);
  }

  get open() {
    return this.foundation_.isOpen();
  }

  set open(value) {
    if (value) {
      this.foundation_.open();
    } else {
      this.foundation_.close();
    }
  }

  /* Return the drawer element inside the component. */
  get drawer() {
    return this.root_.querySelector(MDCTemporaryDrawerFoundation.strings.DRAWER_SELECTOR);
  }

  getDefaultFoundation() {
    const {FOCUSABLE_ELEMENTS, OPACITY_VAR_NAME} = MDCTemporaryDrawerFoundation.strings;

    return new MDCTemporaryDrawerFoundation({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      hasClass: (className) => this.root_.classList.contains(className),
      addBodyClass: (className) => document.body.classList.add(className),
      removeBodyClass: (className) => document.body.classList.remove(className),
      eventTargetHasClass: (target, className) => target.classList.contains(className),
      hasNecessaryDom: () => Boolean(this.drawer),
      registerInteractionHandler: (evt, handler) =>
        this.root_.addEventListener(remapEvent(evt), handler, applyPassive$1()),
      deregisterInteractionHandler: (evt, handler) =>
        this.root_.removeEventListener(remapEvent(evt), handler, applyPassive$1()),
      registerDrawerInteractionHandler: (evt, handler) =>
        this.drawer.addEventListener(remapEvent(evt), handler),
      deregisterDrawerInteractionHandler: (evt, handler) =>
        this.drawer.removeEventListener(remapEvent(evt), handler),
      registerTransitionEndHandler: (handler) => this.drawer.addEventListener('transitionend', handler),
      deregisterTransitionEndHandler: (handler) => this.drawer.removeEventListener('transitionend', handler),
      registerDocumentKeydownHandler: (handler) => document.addEventListener('keydown', handler),
      deregisterDocumentKeydownHandler: (handler) => document.removeEventListener('keydown', handler),
      getDrawerWidth: () => this.drawer.offsetWidth,
      setTranslateX: (value) => this.drawer.style.setProperty(
        getTransformPropertyName(), value === null ? null : `translateX(${value}px)`),
      updateCssVariable: (value) => {
        if (supportsCssCustomProperties()) {
          this.root_.style.setProperty(OPACITY_VAR_NAME, value);
        }
      },
      getFocusableElements: () => this.drawer.querySelectorAll(FOCUSABLE_ELEMENTS),
      saveElementTabState: (el) => saveElementTabState(el),
      restoreElementTabState: (el) => restoreElementTabState(el),
      makeElementUntabbable: (el) => el.setAttribute('tabindex', -1),
      notifyOpen: () => this.emit(MDCTemporaryDrawerFoundation.strings.OPEN_EVENT),
      notifyClose: () => this.emit(MDCTemporaryDrawerFoundation.strings.CLOSE_EVENT),
      isRtl: () => getComputedStyle(this.root_).getPropertyValue('direction') === 'rtl',
      isDrawer: (el) => el === this.drawer,
    });
  }
}

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const cssClasses$4 = {
  ROOT: 'mdc-persistent-drawer',
  OPEN: 'mdc-persistent-drawer--open',
  ANIMATING: 'mdc-persistent-drawer--animating',
};

const strings$4 = {
  DRAWER_SELECTOR: '.mdc-persistent-drawer__drawer',
  FOCUSABLE_ELEMENTS,
  OPEN_EVENT: 'MDCPersistentDrawer:open',
  CLOSE_EVENT: 'MDCPersistentDrawer:close',
};

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCPersistentDrawerFoundation extends MDCSlidableDrawerFoundation {
  static get cssClasses() {
    return cssClasses$4;
  }

  static get strings() {
    return strings$4;
  }

  static get defaultAdapter() {
    return Object.assign(MDCSlidableDrawerFoundation.defaultAdapter, {
      isDrawer: () => false,
    });
  }

  constructor(adapter) {
    super(
      Object.assign(MDCPersistentDrawerFoundation.defaultAdapter, adapter),
      MDCPersistentDrawerFoundation.cssClasses.ROOT,
      MDCPersistentDrawerFoundation.cssClasses.ANIMATING,
      MDCPersistentDrawerFoundation.cssClasses.OPEN);
  }

  isRootTransitioningEventTarget_(el) {
    return this.adapter_.isDrawer(el);
  }
}

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCPersistentDrawer extends MDCComponent {
  static attachTo(root) {
    return new MDCPersistentDrawer(root);
  }

  get open() {
    return this.foundation_.isOpen();
  }

  set open(value) {
    if (value) {
      this.foundation_.open();
    } else {
      this.foundation_.close();
    }
  }

  // Return the drawer element inside the component.
  get drawer() {
    return this.root_.querySelector(MDCPersistentDrawerFoundation.strings.DRAWER_SELECTOR);
  }

  getDefaultFoundation() {
    const {FOCUSABLE_ELEMENTS} = MDCPersistentDrawerFoundation.strings;

    return new MDCPersistentDrawerFoundation({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      hasClass: (className) => this.root_.classList.contains(className),
      hasNecessaryDom: () => Boolean(this.drawer),
      registerInteractionHandler: (evt, handler) =>
        this.root_.addEventListener(remapEvent(evt), handler, applyPassive$1()),
      deregisterInteractionHandler: (evt, handler) =>
        this.root_.removeEventListener(remapEvent(evt), handler, applyPassive$1()),
      registerDrawerInteractionHandler: (evt, handler) =>
        this.drawer.addEventListener(remapEvent(evt), handler),
      deregisterDrawerInteractionHandler: (evt, handler) =>
        this.drawer.removeEventListener(remapEvent(evt), handler),
      registerTransitionEndHandler: (handler) =>
        this.root_.addEventListener('transitionend', handler),
      deregisterTransitionEndHandler: (handler) =>
        this.root_.removeEventListener('transitionend', handler),
      registerDocumentKeydownHandler: (handler) => document.addEventListener('keydown', handler),
      deregisterDocumentKeydownHandler: (handler) => document.removeEventListener('keydown', handler),
      getDrawerWidth: () => this.drawer.offsetWidth,
      setTranslateX: (value) => this.drawer.style.setProperty(
        getTransformPropertyName(), value === null ? null : `translateX(${value}px)`),
      getFocusableElements: () => this.drawer.querySelectorAll(FOCUSABLE_ELEMENTS),
      saveElementTabState: (el) => saveElementTabState(el),
      restoreElementTabState: (el) => restoreElementTabState(el),
      makeElementUntabbable: (el) => el.setAttribute('tabindex', -1),
      notifyOpen: () => this.emit(MDCPersistentDrawerFoundation.strings.OPEN_EVENT),
      notifyClose: () => this.emit(MDCPersistentDrawerFoundation.strings.CLOSE_EVENT),
      isRtl: () => getComputedStyle(this.root_).getPropertyValue('direction') === 'rtl',
      isDrawer: (el) => el === this.drawer,
    });
  }
}

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MWCDrawer {
    constructor() {
        this.type = 'persistent'; //permanent,temporary
        this.toolbarspacer = true;
        this.header = true;
    }
    open() {
        if (this.type !== 'permanent') {
            this.mdcDrawer.open = true;
        }
    }
    close() {
        if (this.type !== 'permanent') {
            this.mdcDrawer.open = false;
        }
    }
    componentDidLoad() {
        if (this.type === 'persistent') {
            this.mdcDrawer = MDCPersistentDrawer.attachTo(this.drawerDIV);
            this.mdcDrawer.listen('MDCPersistentDrawer:open', () => {
                this.ondraweropen.emit();
            });
            this.mdcDrawer.listen('MDCPersistentDrawer:close', () => {
                this.ondrawerclose.emit();
            });
        }
        else if (this.type === 'temporary') {
            this.mdcDrawer = MDCTemporaryDrawer.attachTo(this.drawerDIV);
            this.mdcDrawer.listen('MDCTemporaryDrawer:open', () => {
                this.ondraweropen.emit();
            });
            this.mdcDrawer.listen('MDCTemporaryDrawer:close', () => {
                this.ondrawerclose.emit();
            });
        }
    }
    componentDidUnload() {
        if (this.type !== 'permanent') {
            this.mdcDrawer.destroy();
        }
    }
    renderToolbarSpacer() {
        if (this.toolbarspacer) {
            return (h("div", { class: `mdc-${this.type}-drawer__toolbar-spacer` },
                h("slot", { name: "toolbarspacer" })));
        }
        return null;
    }
    renderHeader() {
        if (this.header && this.type !== 'permanent') {
            return (h("header", { class: `mdc-${this.type}-drawer__header` },
                h("div", { class: `mdc-${this.type}-drawer__header-content` },
                    h("slot", { name: "header" }))));
        }
        return null;
    }
    renderPermanentDrawer() {
        return (h("nav", { class: "mdc-permanent-drawer drawer-body" },
            this.renderToolbarSpacer(),
            h("div", { class: "mdc-permanent-drawer__content" },
                h("slot", null))));
    }
    renderOtherDrawers() {
        return (h("aside", { ref: (drawerDIV) => { this.drawerDIV = drawerDIV; }, class: `mdc-${this.type}-drawer drawer-body` },
            h("nav", { class: `mdc-${this.type}-drawer__drawer` },
                this.renderToolbarSpacer(),
                this.renderHeader(),
                h("nav", { class: `mdc-${this.type}-drawer__content` },
                    h("slot", null)))));
    }
    render() {
        if (this.type === 'permanent') {
            return this.renderPermanentDrawer();
        }
        return this.renderOtherDrawers();
    }
}

class MWCFab {
    constructor() {
        this.mini = false;
        this.ripple = true;
    }
    componentWillLoad() {
        if (this.color) {
            this.fabEl.style.setProperty('--mdc-theme-text-primary-on-secondary', this.color);
        }
        if (this.backgroundcolor) {
            this.fabEl.style.setProperty('--mdc-theme-secondary', this.backgroundcolor);
        }
    }
    componentDidLoad() {
        if (this.ripple) {
            this.buttonRipple = MDCRipple.attachTo(this.fab);
        }
    }
    componentDidUnload() {
        if (this.ripple) {
            this.buttonRipple.destroy();
        }
    }
    getFabClassName() {
        let className = 'mdc-fab material-icons';
        if (this.mini) {
            className = ` ${className} mdc-fab--mini`;
        }
        return className;
    }
    render() {
        return (h("button", { class: this.getFabClassName(), ref: (fab) => { this.fab = fab; } },
            h("span", { class: "mdc-fab__icon" }, this.icon)));
    }
}

class MWCGridList {
    /*
      1x1
      16x9
      2x3
      3x2
      4x3
      3x4
   */
    componentWillLoad() {
        if (this.tilewidth) {
            this.gridListEl.style.setProperty('--mdc-grid-list-tile-width', this.tilewidth);
        }
    }
    getGridListClassName() {
        let className = 'mdc-grid-list';
        if (this.aspectratio) {
            className = ` ${className} mdc-grid-list--tile-aspect-${this.aspectratio}`;
        }
        if (this.tiletitleposition === "top") {
            className = ` ${className} mdc-grid-list--header-caption`;
        }
        return className;
    }
    render() {
        return (h("div", { class: this.getGridListClassName() },
            h("ul", { class: "mdc-grid-list__tiles" },
                h("slot", null))));
    }
}

class MWCGridListTile {
    componentWillLoad() {
        if (this.titlebackgroundcolor) {
            this.gridListTileEl.style.setProperty('--mdc-theme-primary', `${this.titlebackgroundcolor}`);
        }
    }
    componentDidLoad() {
        this.tileTitle.style.setProperty('height', 'auto');
    }
    render() {
        return (h("li", { class: "mdc-grid-tile" },
            h("div", { class: "mdc-grid-tile__primary" },
                h("div", { class: "mdc-grid-tile__primary-content" },
                    h("slot", { name: "tile-content" }))),
            h("span", { class: "mdc-grid-tile__secondary", ref: (tileTitle) => { this.tileTitle = tileTitle; } },
                h("slot", { name: "tile-title" }))));
    }
}

/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Icon Toggle. Provides an interface for managing
 * - classes
 * - dom
 * - inner text
 * - event handlers
 * - event dispatch
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/architecture.md
 *
 * @record
 */

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
const cssClasses$5 = {
  ROOT: 'mdc-icon-toggle',
  DISABLED: 'mdc-icon-toggle--disabled',
};

/** @enum {string} */
const strings$5 = {
  DATA_TOGGLE_ON: 'data-toggle-on',
  DATA_TOGGLE_OFF: 'data-toggle-off',
  ARIA_PRESSED: 'aria-pressed',
  ARIA_DISABLED: 'aria-disabled',
  ARIA_LABEL: 'aria-label',
  CHANGE_EVENT: 'MDCIconToggle:change',
};

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-unused-vars */
/**
 * @extends {MDCFoundation<!MDCIconToggleAdapter>}
 */
class MDCIconToggleFoundation extends MDCFoundation {
  static get cssClasses() {
    return cssClasses$5;
  }

  static get strings() {
    return strings$5;
  }

  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      registerInteractionHandler: (/* type: string, handler: EventListener */) => {},
      deregisterInteractionHandler: (/* type: string, handler: EventListener */) => {},
      setText: (/* text: string */) => {},
      getTabIndex: () => /* number */ 0,
      setTabIndex: (/* tabIndex: number */) => {},
      getAttr: (/* name: string */) => /* string */ '',
      setAttr: (/* name: string, value: string */) => {},
      rmAttr: (/* name: string */) => {},
      notifyChange: (/* evtData: IconToggleEvent */) => {},
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCIconToggleFoundation.defaultAdapter, adapter));

    /** @private {boolean} */
    this.on_ = false;

    /** @private {boolean} */
    this.disabled_ = false;

    /** @private {number} */
    this.savedTabIndex_ = -1;

    /** @private {?IconToggleState} */
    this.toggleOnData_ = null;

    /** @private {?IconToggleState} */
    this.toggleOffData_ = null;

    this.clickHandler_ = /** @private {!EventListener} */ (
      () => this.toggleFromEvt_());

    /** @private {boolean} */
    this.isHandlingKeydown_ = false;

    this.keydownHandler_ = /** @private {!EventListener} */ ((/** @type {!KeyboardKey} */ evt) => {
      if (isSpace(evt)) {
        this.isHandlingKeydown_ = true;
        return evt.preventDefault();
      }
    });

    this.keyupHandler_ = /** @private {!EventListener} */ ((/** @type {!KeyboardKey} */ evt) => {
      if (isSpace(evt)) {
        this.isHandlingKeydown_ = false;
        this.toggleFromEvt_();
      }
    });
  }

  init() {
    this.refreshToggleData();
    this.savedTabIndex_ = this.adapter_.getTabIndex();
    this.adapter_.registerInteractionHandler('click', this.clickHandler_);
    this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.registerInteractionHandler('keyup', this.keyupHandler_);
  }

  refreshToggleData() {
    const {DATA_TOGGLE_ON, DATA_TOGGLE_OFF} = MDCIconToggleFoundation.strings;
    this.toggleOnData_ = this.parseJsonDataAttr_(DATA_TOGGLE_ON);
    this.toggleOffData_ = this.parseJsonDataAttr_(DATA_TOGGLE_OFF);
  }

  destroy() {
    this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
    this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.deregisterInteractionHandler('keyup', this.keyupHandler_);
  }

  /** @private */
  toggleFromEvt_() {
    this.toggle();
    const {on_: isOn} = this;
    this.adapter_.notifyChange(/** @type {!IconToggleEvent} */ ({isOn}));
  }

  /** @return {boolean} */
  isOn() {
    return this.on_;
  }

  /** @param {boolean=} isOn */
  toggle(isOn = !this.on_) {
    this.on_ = isOn;

    const {ARIA_LABEL, ARIA_PRESSED} = MDCIconToggleFoundation.strings;

    if (this.on_) {
      this.adapter_.setAttr(ARIA_PRESSED, 'true');
    } else {
      this.adapter_.setAttr(ARIA_PRESSED, 'false');
    }

    const {cssClass: classToRemove} =
        this.on_ ? this.toggleOffData_ : this.toggleOnData_;

    if (classToRemove) {
      this.adapter_.removeClass(classToRemove);
    }

    const {content, label, cssClass} = this.on_ ? this.toggleOnData_ : this.toggleOffData_;

    if (cssClass) {
      this.adapter_.addClass(cssClass);
    }
    if (content) {
      this.adapter_.setText(content);
    }
    if (label) {
      this.adapter_.setAttr(ARIA_LABEL, label);
    }
  }

  /**
   * @param {string} dataAttr
   * @return {!IconToggleState}
   */
  parseJsonDataAttr_(dataAttr) {
    const val = this.adapter_.getAttr(dataAttr);
    if (!val) {
      return {};
    }
    return /** @type {!IconToggleState} */ (JSON.parse(val));
  }

  /** @return {boolean} */
  isDisabled() {
    return this.disabled_;
  }

  /** @param {boolean} isDisabled */
  setDisabled(isDisabled) {
    this.disabled_ = isDisabled;

    const {DISABLED} = MDCIconToggleFoundation.cssClasses;
    const {ARIA_DISABLED} = MDCIconToggleFoundation.strings;

    if (this.disabled_) {
      this.savedTabIndex_ = this.adapter_.getTabIndex();
      this.adapter_.setTabIndex(-1);
      this.adapter_.setAttr(ARIA_DISABLED, 'true');
      this.adapter_.addClass(DISABLED);
    } else {
      this.adapter_.setTabIndex(this.savedTabIndex_);
      this.adapter_.rmAttr(ARIA_DISABLED);
      this.adapter_.removeClass(DISABLED);
    }
  }

  /** @return {boolean} */
  isKeyboardActivated() {
    return this.isHandlingKeydown_;
  }
}

/**
 * @param {!KeyboardKey} keyboardKey
 * @return {boolean}
 */
function isSpace(keyboardKey) {
  return keyboardKey.key === 'Space' || keyboardKey.keyCode === 32;
}


/** @record */
class IconToggleState {}

/**
 * The aria-label value of the icon toggle, or undefined if there is no aria-label.
 * @export {string|undefined}
 */
IconToggleState.prototype.label;

/**
 * The text for the icon toggle, or undefined if there is no text.
 * @export {string|undefined}
 */
IconToggleState.prototype.content;

/**
 * The CSS class to add to the icon toggle, or undefined if there is no CSS class.
 * @export {string|undefined}
 */
IconToggleState.prototype.cssClass;

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @extends {MDCComponent<!MDCIconToggleFoundation>}
 */
class MDCIconToggle extends MDCComponent {
  static attachTo(root) {
    return new MDCIconToggle(root);
  }

  constructor(...args) {
    super(...args);

    /** @private {!MDCRipple} */
    this.ripple_ = this.initRipple_();
  }

  /** @return {!Element} */
  get iconEl_() {
    const {'iconInnerSelector': sel} = this.root_.dataset;
    return sel ?
      /** @type {!Element} */ (this.root_.querySelector(sel)) : this.root_;
  }

  /**
   * @return {!MDCRipple}
   * @private
   */
  initRipple_() {
    const adapter = Object.assign(MDCRipple.createAdapter(this), {
      isUnbounded: () => true,
      isSurfaceActive: () => this.foundation_.isKeyboardActivated(),
      computeBoundingRect: () => {
        const dim = 48;
        const {left, top} = this.root_.getBoundingClientRect();
        return {
          left,
          top,
          width: dim,
          height: dim,
          right: left + dim,
          bottom: left + dim,
        };
      },
    });
    const foundation = new MDCRippleFoundation(adapter);
    return new MDCRipple(this.root_, foundation);
  }

  destroy() {
    this.ripple_.destroy();
    super.destroy();
  }

  /** @return {!MDCIconToggleFoundation} */
  getDefaultFoundation() {
    return new MDCIconToggleFoundation({
      addClass: (className) => this.iconEl_.classList.add(className),
      removeClass: (className) => this.iconEl_.classList.remove(className),
      registerInteractionHandler: (type, handler) => this.root_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.root_.removeEventListener(type, handler),
      setText: (text) => this.iconEl_.textContent = text,
      getTabIndex: () => /* number */ this.root_.tabIndex,
      setTabIndex: (tabIndex) => this.root_.tabIndex = tabIndex,
      getAttr: (name, value) => this.root_.getAttribute(name, value),
      setAttr: (name, value) => this.root_.setAttribute(name, value),
      rmAttr: (name) => this.root_.removeAttribute(name),
      notifyChange: (evtData) => this.emit(MDCIconToggleFoundation.strings.CHANGE_EVENT, evtData),
    });
  }

  initialSyncWithDOM() {
    this.on = this.root_.getAttribute(MDCIconToggleFoundation.strings.ARIA_PRESSED) === 'true';
    this.disabled = this.root_.getAttribute(MDCIconToggleFoundation.strings.ARIA_DISABLED) === 'true';
  }

  /** @return {!MDCRipple} */
  get ripple() {
    return this.ripple_;
  }

  /** @return {boolean} */
  get on() {
    return this.foundation_.isOn();
  }

  /** @param {boolean} isOn */
  set on(isOn) {
    this.foundation_.toggle(isOn);
  }

  /** @return {boolean} */
  get disabled() {
    return this.foundation_.isDisabled();
  }

  /** @param {boolean} isDisabled */
  set disabled(isDisabled) {
    this.foundation_.setDisabled(isDisabled);
  }

  refreshToggleData() {
    this.foundation_.refreshToggleData();
  }
}

class MWCIconToggle {
    constructor() {
        this.oniconlabel = ' ';
        this.officonlabel = ' ';
        this.ripple = true;
        this.disabled = false;
        this.toggleon = false;
    }
    componentWillLoad() {
        if (this.color) {
            this.iconToggleEl.style.setProperty('--mdc-theme-text-secondary-on-light', this.color);
        }
    }
    componentDidLoad() {
        if (this.ripple) {
            const me = this;
            this.mdcIconToggle = MDCIconToggle.attachTo(this.iconToggle);
            this.mdcIconToggle.listen('MDCIconToggle:change', ({ detail }) => {
                console.log(detail);
                me.oniconchange.emit(detail);
            });
        }
    }
    componentDidUnload() {
        if (this.ripple) {
            this.mdcIconToggle.destroy();
        }
    }
    getStyleNode() {
        var styleNode = document.createElement('style');
        styleNode.type = "text/css";
        var styleText = document.createTextNode(`.mdc-icon-toggle::before, .mdc-icon-toggle::after {
                    background-color: ${this.color}20 !important;
                }`);
        styleNode.appendChild(styleText);
        this.elStyleNode = styleNode;
        this.iconToggleEl.appendChild(this.elStyleNode);
    }
    onFocus() {
        if (this.color) {
            this.getStyleNode();
        }
    }
    onBlur() {
        if (this.color) {
            this.iconToggleEl.removeChild(this.elStyleNode);
        }
    }
    getToggleOn() {
        return `{ "content": "${this.onicon}"}`;
    }
    getToggleOff() {
        return `{ "content": "${this.officon}"}`;
    }
    getIconClassName() {
        let className = "mdc-icon-toggle material-icons";
        if (this.disabled) {
            className = `${className} mdc-icon-toggle--disabled`;
        }
        return className;
    }
    render() {
        return (h("i", { class: this.getIconClassName(), ref: (iconToggle) => { this.iconToggle = iconToggle; }, role: "button", tabindex: "-1", "aria-pressed": this.toggleon, "aria-disabled": this.disabled, onFocus: (evt) => this.onFocus(), onBlur: (evt) => this.onBlur(), "data-toggle-on": this.getToggleOn(), "data-toggle-off": this.getToggleOff() }, this.officon));
    }
}

const theme$4 = createTheme(getTheme());
class ListStyle {
    constructor() {
        this.defaultStyle = {
            root: {
                flex: '1 1 auto',
                listStyle: 'none',
                margin: 0,
                padding: 0,
                position: 'relative',
            },
            padding: {
                paddingTop: theme$4.spacing.unit,
                paddingBottom: theme$4.spacing.unit,
            },
            dense: {
                paddingTop: theme$4.spacing.unit / 2,
                paddingBottom: theme$4.spacing.unit / 2,
            },
            subheader: {
                paddingTop: 0,
            },
        };
    }
    setup(style) {
        const mergedStyles = deepmerge_1.all([this.defaultStyle, style]);
        this.jss = new SetupJss();
        this.jss.attachStyleSheet(mergedStyles);
    }
    getClassName(type) {
        return this.jss.getClassName(type);
    }
}

class MWCList {
    constructor() {
        this.borderlist = true;
        this.dense = false;
    }
    componentWillLoad() {
        this.listStyle = new ListStyle();
        let changeStyle = {};
        this.listStyle.setup(changeStyle);
    }
    getClassNames() {
        let classNames = ['root'];
        return classNames;
    }
    render() {
        return (h("ul", { class: this.listStyle.getClassName(this.getClassNames()) },
            h("slot", null)));
    }
}

class MWCListItem {
    constructor() {
        this.ripple = true;
        this.interactive = true;
    }
    componentWillLoad() {
        // if(this.tilewidth){
        // this.gridListEl.style.setProperty('--mdc-grid-list-tile-width', this.tilewidth);
        // }
    }
    componentDidLoad() {
        if (this.ripple) {
            this.listItemRipple = MDCRipple.attachTo(this.listItem);
            //  this.listItemRipple.unbounded = true
        }
    }
    componentDidUnload() {
        if (this.ripple) {
            this.listItemRipple.destroy();
        }
    }
    getListItemClassName() {
        let className = 'mdc-list-item';
        if (this.interactive) {
            className = ` ${className} mwc-list-item`;
        }
        return className;
    }
    render() {
        return (h("li", { class: this.getListItemClassName(), ref: (listItem) => { this.listItem = listItem; } },
            h("slot", null)));
    }
}

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @type {string|undefined} */
let storedTransformPropertyName_$1;

/**
 * Returns the name of the correct transform property to use on the current browser.
 * @param {!Window} globalObj
 * @param {boolean=} forceRefresh
 * @return {string}
 */
function getTransformPropertyName$1(globalObj, forceRefresh = false) {
  if (storedTransformPropertyName_$1 === undefined || forceRefresh) {
    const el = globalObj.document.createElement('div');
    const transformPropertyName = ('transform' in el.style ? 'transform' : 'webkitTransform');
    storedTransformPropertyName_$1 = transformPropertyName;
  }

  return storedTransformPropertyName_$1;
}

/**
 * Clamps a value between the minimum and the maximum, returning the clamped value.
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function clamp$1(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}


/**
 * Returns the easing value to apply at time t, for a given cubic bezier curve.
 * Control points P0 and P3 are assumed to be (0,0) and (1,1), respectively.
 * Parameters are as follows:
 * - time: The current time in the animation, scaled between 0 and 1.
 * - x1: The x value of control point P1.
 * - y1: The y value of control point P1.
 * - x2: The x value of control point P2.
 * - y2: The y value of control point P2.
 * @param {number} time
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 */
function bezierProgress(time, x1, y1, x2, y2) {
  return getBezierCoordinate_(solvePositionFromXValue_(time, x1, x2), y1, y2);
}

/**
 * Compute a single coordinate at a position point between 0 and 1.
 * c1 and c2 are the matching coordinate on control points P1 and P2, respectively.
 * Control points P0 and P3 are assumed to be (0,0) and (1,1), respectively.
 * Adapted from https://github.com/google/closure-library/blob/master/closure/goog/math/bezier.js.
 * @param {number} t
 * @param {number} c1
 * @param {number} c2
 * @return {number}
 */
function getBezierCoordinate_(t, c1, c2) {
  // Special case start and end.
  if (t === 0 || t === 1) {
    return t;
  }

  // Step one - from 4 points to 3
  let ic0 = t * c1;
  let ic1 = c1 + t * (c2 - c1);
  const ic2 = c2 + t * (1 - c2);

  // Step two - from 3 points to 2
  ic0 += t * (ic1 - ic0);
  ic1 += t * (ic2 - ic1);

  // Final step - last point
  return ic0 + t * (ic1 - ic0);
}

/**
 * Project a point onto the Bezier curve, from a given X. Calculates the position t along the curve.
 * Adapted from https://github.com/google/closure-library/blob/master/closure/goog/math/bezier.js.
 * @param {number} xVal
 * @param {number} x1
 * @param {number} x2
 * @return {number}
 */
function solvePositionFromXValue_(xVal, x1, x2) {
  const EPSILON = 1e-6;
  const MAX_ITERATIONS = 8;

  if (xVal <= 0) {
    return 0;
  } else if (xVal >= 1) {
    return 1;
  }

  // Initial estimate of t using linear interpolation.
  let t = xVal;

  // Try gradient descent to solve for t. If it works, it is very fast.
  let tMin = 0;
  let tMax = 1;
  let value = 0;
  for (let i = 0; i < MAX_ITERATIONS; i++) {
    value = getBezierCoordinate_(t, x1, x2);
    const derivative = (getBezierCoordinate_(t + EPSILON, x1, x2) - value) / EPSILON;
    if (Math.abs(value - xVal) < EPSILON) {
      return t;
    } else if (Math.abs(derivative) < EPSILON) {
      break;
    } else {
      if (value < xVal) {
        tMin = t;
      } else {
        tMax = t;
      }
      t -= (value - xVal) / derivative;
    }
  }

  // If the gradient descent got stuck in a local minimum, e.g. because
  // the derivative was close to 0, use a Dichotomy refinement instead.
  // We limit the number of interations to 8.
  for (let i = 0; Math.abs(value - xVal) > EPSILON && i < MAX_ITERATIONS; i++) {
    if (value < xVal) {
      tMin = t;
      t = (t + tMax) / 2;
    } else {
      tMax = t;
      t = (t + tMin) / 2;
    }
    value = getBezierCoordinate_(t, x1, x2);
  }
  return t;
}

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Simple Menu. Provides an interface for managing
 * - classes
 * - dom
 * - focus
 * - position
 * - dimensions
 * - event handlers
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/architecture.md
 *
 * @record
 */

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
const cssClasses$6 = {
  ROOT: 'mdc-simple-menu',
  OPEN: 'mdc-simple-menu--open',
  ANIMATING: 'mdc-simple-menu--animating',
  TOP_RIGHT: 'mdc-simple-menu--open-from-top-right',
  BOTTOM_LEFT: 'mdc-simple-menu--open-from-bottom-left',
  BOTTOM_RIGHT: 'mdc-simple-menu--open-from-bottom-right',
  LIST_ITEM: 'mdc-list-item',
};

/** @enum {string} */
const strings$6 = {
  ITEMS_SELECTOR: '.mdc-simple-menu__items',
  SELECTED_EVENT: 'MDCSimpleMenu:selected',
  CANCEL_EVENT: 'MDCSimpleMenu:cancel',
  ARIA_DISABLED_ATTR: 'aria-disabled',
};

/** @enum {number} */
const numbers$2 = {
  // Amount of time to wait before triggering a selected event on the menu. Note that this time
  // will most likely be bumped up once interactive lists are supported to allow for the ripple to
  // animate before closing the menu
  SELECTED_TRIGGER_DELAY: 50,
  // Total duration of the menu animation.
  TRANSITION_DURATION_MS: 300,
  // The menu starts its open animation with the X axis at this time value (0 - 1).
  TRANSITION_SCALE_ADJUSTMENT_X: 0.5,
  // The time value the menu waits until the animation starts on the Y axis (0 - 1).
  TRANSITION_SCALE_ADJUSTMENT_Y: 0.2,
  // The cubic bezier control points for the animation (cubic-bezier(0, 0, 0.2, 1)).
  TRANSITION_X1: 0,
  TRANSITION_Y1: 0,
  TRANSITION_X2: 0.2,
  TRANSITION_Y2: 1,
};

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @extends {MDCFoundation<!MDCSimpleMenuAdapter>}
 */
class MDCSimpleMenuFoundation extends MDCFoundation {
  /** @return enum{cssClasses} */
  static get cssClasses() {
    return cssClasses$6;
  }

  /** @return enum{strings} */
  static get strings() {
    return strings$6;
  }

  /** @return enum{numbers} */
  static get numbers() {
    return numbers$2;
  }

  /**
   * {@see MDCSimpleMenuAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCSimpleMenuAdapter}
   */
  static get defaultAdapter() {
    return /** @type {!MDCSimpleMenuAdapter} */ ({
      addClass: () => {},
      removeClass: () => {},
      hasClass: () => false,
      hasNecessaryDom: () => false,
      getAttributeForEventTarget: () => {},
      eventTargetHasClass: () => {},
      getInnerDimensions: () => ({}),
      hasAnchor: () => false,
      getAnchorDimensions: () => ({}),
      getWindowDimensions: () => ({}),
      setScale: () => {},
      setInnerScale: () => {},
      getNumberOfItems: () => 0,
      registerInteractionHandler: () => {},
      deregisterInteractionHandler: () => {},
      registerBodyClickHandler: () => {},
      deregisterBodyClickHandler: () => {},
      getYParamsForItemAtIndex: () => ({}),
      setTransitionDelayForItemAtIndex: () => {},
      getIndexForEventTarget: () => 0,
      notifySelected: () => {},
      notifyCancel: () => {},
      saveFocus: () => {},
      restoreFocus: () => {},
      isFocused: () => false,
      focus: () => {},
      getFocusedItemIndex: () => -1,
      focusItemAtIndex: () => {},
      isRtl: () => false,
      setTransformOrigin: () => {},
      setPosition: () => {},
      getAccurateTime: () => 0,
    });
  }

  /** @param {!MDCSimpleMenuAdapter} adapter */
  constructor(adapter) {
    super(Object.assign(MDCSimpleMenuFoundation.defaultAdapter, adapter));

    /** @private {function(!Event)} */
    this.clickHandler_ = (evt) => this.handlePossibleSelected_(evt);
    /** @private {function(!Event)} */
    this.keydownHandler_ = (evt) => this.handleKeyboardDown_(evt);
    /** @private {function(!Event)} */
    this.keyupHandler_ = (evt) => this.handleKeyboardUp_(evt);
    /** @private {function(!Event)} */
    this.documentClickHandler_ = (evt) => this.handleDocumentClick_(evt);
    /** @private {boolean} */
    this.isOpen_ = false;
    /** @private {number} */
    this.startScaleX_ = 0;
    /** @private {number} */
    this.startScaleY_ = 0;
    /** @private {number} */
    this.targetScale_ = 1;
    /** @private {number} */
    this.scaleX_ = 0;
    /** @private {number} */
    this.scaleY_ = 0;
    /** @private {boolean} */
    this.running_ = false;
    /** @private {number} */
    this.selectedTriggerTimerId_ = 0;
    /** @private {number} */
    this.animationRequestId_ = 0;
    /** @private {!{ width: number, height: number }} */
    this.dimensions_;
    /** @private {number} */
    this.startTime_;
    /** @private {number} */
    this.itemHeight_;
  }

  init() {
    const {ROOT, OPEN} = MDCSimpleMenuFoundation.cssClasses;

    if (!this.adapter_.hasClass(ROOT)) {
      throw new Error(`${ROOT} class required in root element.`);
    }

    if (!this.adapter_.hasNecessaryDom()) {
      throw new Error(`Required DOM nodes missing in ${ROOT} component.`);
    }

    if (this.adapter_.hasClass(OPEN)) {
      this.isOpen_ = true;
    }

    this.adapter_.registerInteractionHandler('click', this.clickHandler_);
    this.adapter_.registerInteractionHandler('keyup', this.keyupHandler_);
    this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
  }

  destroy() {
    clearTimeout(this.selectedTriggerTimerId_);
    // Cancel any currently running animations.
    cancelAnimationFrame(this.animationRequestId_);
    this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
    this.adapter_.deregisterInteractionHandler('keyup', this.keyupHandler_);
    this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.deregisterBodyClickHandler(this.documentClickHandler_);
  }

  /**
   * Calculates transition delays for individual menu items, so that they fade in one at a time.
   * @private
   */
  applyTransitionDelays_() {
    const {BOTTOM_LEFT, BOTTOM_RIGHT} = MDCSimpleMenuFoundation.cssClasses;
    const numItems = this.adapter_.getNumberOfItems();
    const {height} = this.dimensions_;
    const transitionDuration = MDCSimpleMenuFoundation.numbers.TRANSITION_DURATION_MS / 1000;
    const start = MDCSimpleMenuFoundation.numbers.TRANSITION_SCALE_ADJUSTMENT_Y;

    for (let index = 0; index < numItems; index++) {
      const {top: itemTop, height: itemHeight} = this.adapter_.getYParamsForItemAtIndex(index);
      this.itemHeight_ = itemHeight;
      let itemDelayFraction = itemTop / height;
      if (this.adapter_.hasClass(BOTTOM_LEFT) || this.adapter_.hasClass(BOTTOM_RIGHT)) {
        itemDelayFraction = ((height - itemTop - itemHeight) / height);
      }
      const itemDelay = (start + itemDelayFraction * (1 - start)) * transitionDuration;
      // Use toFixed() here to normalize CSS unit precision across browsers
      this.adapter_.setTransitionDelayForItemAtIndex(index, `${itemDelay.toFixed(3)}s`);
    }
  }

  /**
   * Removes transition delays from menu items.
   * @private
   */
  removeTransitionDelays_() {
    const numItems = this.adapter_.getNumberOfItems();
    for (let i = 0; i < numItems; i++) {
      this.adapter_.setTransitionDelayForItemAtIndex(i, null);
    }
  }

  /**
   * Animates menu opening or closing.
   * @private
   */
  animationLoop_() {
    const time = this.adapter_.getAccurateTime();
    const {TRANSITION_DURATION_MS, TRANSITION_X1, TRANSITION_Y1, TRANSITION_X2, TRANSITION_Y2,
      TRANSITION_SCALE_ADJUSTMENT_X, TRANSITION_SCALE_ADJUSTMENT_Y} = MDCSimpleMenuFoundation.numbers;
    const currentTime = clamp$1((time - this.startTime_) / TRANSITION_DURATION_MS);

    // Animate X axis very slowly, so that only the Y axis animation is visible during fade-out.
    let currentTimeX = clamp$1(
      (currentTime - TRANSITION_SCALE_ADJUSTMENT_X) / (1 - TRANSITION_SCALE_ADJUSTMENT_X)
    );
    // No time-shifting on the Y axis when closing.
    let currentTimeY = currentTime;

    let startScaleY = this.startScaleY_;
    if (this.targetScale_ === 1) {
      // Start with the menu at the height of a single item.
      if (this.itemHeight_) {
        startScaleY = Math.max(this.itemHeight_ / this.dimensions_.height, startScaleY);
      }
      // X axis moves faster, so time-shift forward.
      currentTimeX = clamp$1(currentTime + TRANSITION_SCALE_ADJUSTMENT_X);
      // Y axis moves slower, so time-shift backwards and adjust speed by the difference.
      currentTimeY = clamp$1(
        (currentTime - TRANSITION_SCALE_ADJUSTMENT_Y) / (1 - TRANSITION_SCALE_ADJUSTMENT_Y)
      );
    }

    // Apply cubic bezier easing independently to each axis.
    const easeX = bezierProgress(currentTimeX, TRANSITION_X1, TRANSITION_Y1, TRANSITION_X2, TRANSITION_Y2);
    const easeY = bezierProgress(currentTimeY, TRANSITION_X1, TRANSITION_Y1, TRANSITION_X2, TRANSITION_Y2);

    // Calculate the scales to apply to the outer container and inner container.
    this.scaleX_ = this.startScaleX_ + (this.targetScale_ - this.startScaleX_) * easeX;
    const invScaleX = 1 / (this.scaleX_ === 0 ? 1 : this.scaleX_);
    this.scaleY_ = startScaleY + (this.targetScale_ - startScaleY) * easeY;
    const invScaleY = 1 / (this.scaleY_ === 0 ? 1 : this.scaleY_);

    // Apply scales.
    this.adapter_.setScale(this.scaleX_, this.scaleY_);
    this.adapter_.setInnerScale(invScaleX, invScaleY);

    // Stop animation when we've covered the entire 0 - 1 range of time.
    if (currentTime < 1) {
      this.animationRequestId_ = requestAnimationFrame(() => this.animationLoop_());
    } else {
      this.animationRequestId_ = 0;
      this.running_ = false;
      this.adapter_.removeClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING);
    }
  }

  /**
   * Starts the open or close animation.
   * @private
   */
  animateMenu_() {
    this.startTime_ = this.adapter_.getAccurateTime();
    this.startScaleX_ = this.scaleX_;
    this.startScaleY_ = this.scaleY_;

    this.targetScale_ = this.isOpen_ ? 1 : 0;

    if (!this.running_) {
      this.running_ = true;
      this.animationRequestId_ = requestAnimationFrame(() => this.animationLoop_());
    }
  }

  /**
   * @param {?number} focusIndex
   * @private
   */
  focusOnOpen_(focusIndex) {
    if (focusIndex === null) {
      // First, try focusing the menu.
      this.adapter_.focus();
      // If that doesn't work, focus first item instead.
      if (!this.adapter_.isFocused()) {
        this.adapter_.focusItemAtIndex(0);
      }
    } else {
      this.adapter_.focusItemAtIndex(focusIndex);
    }
  }

  /**
   * Handle clicks and cancel the menu if not a list item
   * @param {!Event} evt
   * @private
   */
  handleDocumentClick_(evt) {
    let el = evt.target;

    while (el && el !== document.documentElement) {
      if (this.adapter_.eventTargetHasClass(el, cssClasses$6.LIST_ITEM)) {
        return;
      }
      el = el.parentNode;
    }

    this.adapter_.notifyCancel();
    this.close(evt);
  };

  /**
   * Handle keys that we want to repeat on hold (tab and arrows).
   * @param {!Event} evt
   * @return {boolean}
   * @private
   */
  handleKeyboardDown_(evt) {
    // Do nothing if Alt, Ctrl or Meta are pressed.
    if (evt.altKey || evt.ctrlKey || evt.metaKey) {
      return true;
    }

    const {keyCode, key, shiftKey} = evt;
    const isTab = key === 'Tab' || keyCode === 9;
    const isArrowUp = key === 'ArrowUp' || keyCode === 38;
    const isArrowDown = key === 'ArrowDown' || keyCode === 40;
    const isSpace = key === 'Space' || keyCode === 32;

    const focusedItemIndex = this.adapter_.getFocusedItemIndex();
    const lastItemIndex = this.adapter_.getNumberOfItems() - 1;

    if (shiftKey && isTab && focusedItemIndex === 0) {
      this.adapter_.focusItemAtIndex(lastItemIndex);
      evt.preventDefault();
      return false;
    }

    if (!shiftKey && isTab && focusedItemIndex === lastItemIndex) {
      this.adapter_.focusItemAtIndex(0);
      evt.preventDefault();
      return false;
    }

    // Ensure Arrow{Up,Down} and space do not cause inadvertent scrolling
    if (isArrowUp || isArrowDown || isSpace) {
      evt.preventDefault();
    }

    if (isArrowUp) {
      if (focusedItemIndex === 0 || this.adapter_.isFocused()) {
        this.adapter_.focusItemAtIndex(lastItemIndex);
      } else {
        this.adapter_.focusItemAtIndex(focusedItemIndex - 1);
      }
    } else if (isArrowDown) {
      if (focusedItemIndex === lastItemIndex || this.adapter_.isFocused()) {
        this.adapter_.focusItemAtIndex(0);
      } else {
        this.adapter_.focusItemAtIndex(focusedItemIndex + 1);
      }
    }

    return true;
  }

  /**
   * Handle keys that we don't want to repeat on hold (Enter, Space, Escape).
   * @param {!Event} evt
   * @return {boolean}
   * @private
   */
  handleKeyboardUp_(evt) {
    // Do nothing if Alt, Ctrl or Meta are pressed.
    if (evt.altKey || evt.ctrlKey || evt.metaKey) {
      return true;
    }

    const {keyCode, key} = evt;
    const isEnter = key === 'Enter' || keyCode === 13;
    const isSpace = key === 'Space' || keyCode === 32;
    const isEscape = key === 'Escape' || keyCode === 27;

    if (isEnter || isSpace) {
      this.handlePossibleSelected_(evt);
    }

    if (isEscape) {
      this.adapter_.notifyCancel();
      this.close();
    }

    return true;
  }

  /**
   * @param {!Event} evt
   * @private
   */
  handlePossibleSelected_(evt) {
    if (this.adapter_.getAttributeForEventTarget(evt.target, strings$6.ARIA_DISABLED_ATTR) === 'true') {
      return;
    }
    const targetIndex = this.adapter_.getIndexForEventTarget(evt.target);
    if (targetIndex < 0) {
      return;
    }
    // Debounce multiple selections
    if (this.selectedTriggerTimerId_) {
      return;
    }
    this.selectedTriggerTimerId_ = setTimeout(() => {
      this.selectedTriggerTimerId_ = 0;
      this.close();
      this.adapter_.notifySelected({index: targetIndex});
    }, numbers$2.SELECTED_TRIGGER_DELAY);
  }

  /** @private */
  autoPosition_() {
    if (!this.adapter_.hasAnchor()) {
      return;
    }

    // Defaults: open from the top left.
    let vertical = 'top';
    let horizontal = 'left';

    const anchor = this.adapter_.getAnchorDimensions();
    const windowDimensions = this.adapter_.getWindowDimensions();

    const topOverflow = anchor.top + this.dimensions_.height - windowDimensions.height;
    const bottomOverflow = this.dimensions_.height - anchor.bottom;
    const extendsBeyondTopBounds = topOverflow > 0;

    if (extendsBeyondTopBounds) {
      if (bottomOverflow < topOverflow) {
        vertical = 'bottom';
      }
    }

    const leftOverflow = anchor.left + this.dimensions_.width - windowDimensions.width;
    const rightOverflow = this.dimensions_.width - anchor.right;
    const extendsBeyondLeftBounds = leftOverflow > 0;
    const extendsBeyondRightBounds = rightOverflow > 0;

    if (this.adapter_.isRtl()) {
      // In RTL, we prefer to open from the right.
      horizontal = 'right';
      if (extendsBeyondRightBounds && leftOverflow < rightOverflow) {
        horizontal = 'left';
      }
    } else if (extendsBeyondLeftBounds && rightOverflow < leftOverflow) {
      horizontal = 'right';
    }

    const position = {
      [horizontal]: '0',
      [vertical]: '0',
    };

    this.adapter_.setTransformOrigin(`${vertical} ${horizontal}`);
    this.adapter_.setPosition(position);
  }


  /**
   * Open the menu.
   * @param {{focusIndex: ?number}=} options
   */
  open({focusIndex = null} = {}) {
    this.adapter_.saveFocus();
    this.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING);
    this.animationRequestId_ = requestAnimationFrame(() => {
      this.dimensions_ = this.adapter_.getInnerDimensions();
      this.applyTransitionDelays_();
      this.autoPosition_();
      this.animateMenu_();
      this.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.OPEN);
      this.focusOnOpen_(focusIndex);
      this.adapter_.registerBodyClickHandler(this.documentClickHandler_);
    });
    this.isOpen_ = true;
  }

  /**
   * Closes the menu.
   * @param {Event=} evt
   */
  close(evt = null) {
    const targetIsDisabled = evt ?
      this.adapter_.getAttributeForEventTarget(evt.target, strings$6.ARIA_DISABLED_ATTR) === 'true' :
      false;

    if (targetIsDisabled) {
      return;
    }

    this.adapter_.deregisterBodyClickHandler(this.documentClickHandler_);
    this.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING);
    requestAnimationFrame(() => {
      this.removeTransitionDelays_();
      this.animateMenu_();
      this.adapter_.removeClass(MDCSimpleMenuFoundation.cssClasses.OPEN);
    });
    this.isOpen_ = false;
    this.adapter_.restoreFocus();
  }

  /** @return {boolean} */
  isOpen() {
    return this.isOpen_;
  }
}

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @extends MDCComponent<!MDCSimpleMenuFoundation>
 */
class MDCSimpleMenu extends MDCComponent {
  /** @param {...?} args */
  constructor(...args) {
    super(...args);
    /** @private {!Element} */
    this.previousFocus_;
  }

  /**
   * @param {!Element} root
   * @return {!MDCSimpleMenu}
   */
  static attachTo(root) {
    return new MDCSimpleMenu(root);
  }

  /** @return {boolean} */
  get open() {
    return this.foundation_.isOpen();
  }

  /** @param {boolean} value */
  set open(value) {
    if (value) {
      this.foundation_.open();
    } else {
      this.foundation_.close();
    }
  }

  /** @param {{focusIndex: ?number}=} options */
  show({focusIndex = null} = {}) {
    this.foundation_.open({focusIndex: focusIndex});
  }

  hide() {
    this.foundation_.close();
  }

  /**
   * Return the item container element inside the component.
   * @return {?Element}
   */
  get itemsContainer_() {
    return this.root_.querySelector(MDCSimpleMenuFoundation.strings.ITEMS_SELECTOR);
  }

  /**
   * Return the items within the menu. Note that this only contains the set of elements within
   * the items container that are proper list items, and not supplemental / presentational DOM
   * elements.
   * @return {!Array<!Element>}
   */
  get items() {
    const {itemsContainer_: itemsContainer} = this;
    return [].slice.call(itemsContainer.querySelectorAll('.mdc-list-item[role]'));
  }

  /** @return {!MDCSimpleMenuFoundation} */
  getDefaultFoundation() {
    return new MDCSimpleMenuFoundation({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      hasClass: (className) => this.root_.classList.contains(className),
      hasNecessaryDom: () => Boolean(this.itemsContainer_),
      getAttributeForEventTarget: (target, attributeName) => target.getAttribute(attributeName),
      eventTargetHasClass: (target, className) => target.classList.contains(className),
      getInnerDimensions: () => {
        const {itemsContainer_: itemsContainer} = this;
        return {width: itemsContainer.offsetWidth, height: itemsContainer.offsetHeight};
      },
      hasAnchor: () => this.root_.parentElement && this.root_.parentElement.classList.contains('mdc-menu-anchor'),
      getAnchorDimensions: () => this.root_.parentElement.getBoundingClientRect(),
      getWindowDimensions: () => {
        return {width: window.innerWidth, height: window.innerHeight};
      },
      setScale: (x, y) => {
        this.root_.style[getTransformPropertyName$1(window)] = `scale(${x}, ${y})`;
      },
      setInnerScale: (x, y) => {
        this.itemsContainer_.style[getTransformPropertyName$1(window)] = `scale(${x}, ${y})`;
      },
      getNumberOfItems: () => this.items.length,
      registerInteractionHandler: (type, handler) => this.root_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.root_.removeEventListener(type, handler),
      registerBodyClickHandler: (handler) => document.body.addEventListener('click', handler),
      deregisterBodyClickHandler: (handler) => document.body.removeEventListener('click', handler),
      getYParamsForItemAtIndex: (index) => {
        const {offsetTop: top, offsetHeight: height} = this.items[index];
        return {top, height};
      },
      setTransitionDelayForItemAtIndex: (index, value) =>
        this.items[index].style.setProperty('transition-delay', value),
      getIndexForEventTarget: (target) => this.items.indexOf(target),
      notifySelected: (evtData) => this.emit(MDCSimpleMenuFoundation.strings.SELECTED_EVENT, {
        index: evtData.index,
        item: this.items[evtData.index],
      }),
      notifyCancel: () => this.emit(MDCSimpleMenuFoundation.strings.CANCEL_EVENT, {}),
      saveFocus: () => {
        this.previousFocus_ = document.activeElement;
      },
      restoreFocus: () => {
        if (this.previousFocus_) {
          this.previousFocus_.focus();
        }
      },
      isFocused: () => document.activeElement === this.root_,
      focus: () => this.root_.focus(),
      getFocusedItemIndex: () => this.items.indexOf(document.activeElement),
      focusItemAtIndex: (index) => this.items[index].focus(),
      isRtl: () => getComputedStyle(this.root_).getPropertyValue('direction') === 'rtl',
      setTransformOrigin: (origin) => {
        this.root_.style[`${getTransformPropertyName$1(window)}-origin`] = origin;
      },
      setPosition: (position) => {
        this.root_.style.left = 'left' in position ? position.left : null;
        this.root_.style.right = 'right' in position ? position.right : null;
        this.root_.style.top = 'top' in position ? position.top : null;
        this.root_.style.bottom = 'bottom' in position ? position.bottom : null;
      },
      getAccurateTime: () => window.performance.now(),
    });
  }
}

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MWCMenu {
    constructor() {
        this.open = false;
    }
    show(focusIndex) {
        if (focusIndex) {
            this.mdcMenuComponent.show({ focusIndex });
        }
        else {
            this.mdcMenuComponent.show();
        }
    }
    hide() {
        this.mdcMenuComponent.hide();
    }
    componentDidLoad() {
        this.mdcMenuComponent = MDCSimpleMenu.attachTo(this.mdcMenu);
        if (this.open) {
            this.mdcMenuComponent.open = true;
        }
        this.mdcMenu.addEventListener('MDCSimpleMenu:selected', (evt) => {
            this.selected.emit(evt);
        });
    }
    componentDidUnload() {
        this.mdcMenuComponent.destroy();
    }
    render() {
        return (h("div", { class: "mdc-simple-menu", tabindex: "-1", ref: (mdcMenu) => { this.mdcMenu = mdcMenu; } },
            h("ul", { class: "mdc-simple-menu__items mdc-list", role: "menu", "aria-hidden": "true" },
                h("slot", null))));
    }
}

class MWCMenuItem {
    constructor() {
        this.disabled = false;
        this.role = "menuitem"; //option
    }
    render() {
        return (h("li", { class: "mdc-list-item", role: this.role, tabindex: this.disabled ? -1 : 0, "aria-disabled": this.disabled },
            h("slot", null)));
    }
}

const theme$5 = createTheme(getTheme());
const shadows$2 = {};
theme$5.shadows.forEach((shadow, index) => {
    shadows$2[`shadow${index}`] = {
        boxShadow: shadow,
    };
});
class PaperStyle {
    constructor() {
        this.defaultStyle = Object.assign({ root: {
                backgroundColor: theme$5.palette.background.paper,
            }, rounded: {
                borderRadius: 2,
            } }, shadows$2);
    }
    setup(style) {
        const mergedStyles = deepmerge_1.all([this.defaultStyle, style]);
        this.jss = new SetupJss();
        this.jss.attachStyleSheet(mergedStyles);
    }
    getClassName(type) {
        return this.jss.getClassName(type);
    }
}

class MWCPaper {
    constructor() {
        this.width = 'auto';
        this.height = 'auto';
        this.elevation = 2;
        this.radius = 4;
    }
    componentWillLoad() {
        this.paperStyle = new PaperStyle();
        let changeStyle = {
            rounded: {
                borderRadius: this.radius,
                width: this.width,
                height: this.height,
            }
        };
        this.paperStyle.setup(changeStyle);
    }
    getClassNames() {
        let classNames = ['root', `shadow${this.elevation}`, 'rounded'];
        return classNames;
    }
    render() {
        return (h("div", { class: this.paperStyle.getClassName(this.getClassNames()) },
            h("slot", null)));
    }
}

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const cssClasses$7 = {
  CLOSED_CLASS: 'mdc-linear-progress--closed',
  INDETERMINATE_CLASS: 'mdc-linear-progress--indeterminate',
  REVERSED_CLASS: 'mdc-linear-progress--reversed',
};

const strings$7 = {
  PRIMARY_BAR_SELECTOR: '.mdc-linear-progress__primary-bar',
  BUFFER_SELECTOR: '.mdc-linear-progress__buffer',
};

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCLinearProgressFoundation extends MDCFoundation {
  static get cssClasses() {
    return cssClasses$7;
  }

  static get strings() {
    return strings$7;
  }

  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      getPrimaryBar: () => /* el: Element */ {},
      getBuffer: () => /* el: Element */ {},
      hasClass: (/* className: string */) => false,
      removeClass: (/* className: string */) => {},
      setStyle: (/* el: Element, styleProperty: string, value: number */) => {},
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCLinearProgressFoundation.defaultAdapter, adapter));
  }

  init() {
    this.determinate_ = !this.adapter_.hasClass(cssClasses$7.INDETERMINATE_CLASS);
    this.reverse_ = this.adapter_.hasClass(cssClasses$7.REVERSED_CLASS);
  }

  setDeterminate(isDeterminate) {
    this.determinate_ = isDeterminate;
    if (this.determinate_) {
      this.adapter_.removeClass(cssClasses$7.INDETERMINATE_CLASS);
    } else {
      this.adapter_.addClass(cssClasses$7.INDETERMINATE_CLASS);
      this.setScale_(this.adapter_.getPrimaryBar(), 1);
      this.setScale_(this.adapter_.getBuffer(), 1);
    }
  }

  setProgress(value) {
    if (this.determinate_) {
      this.setScale_(this.adapter_.getPrimaryBar(), value);
    }
  }

  setBuffer(value) {
    if (this.determinate_) {
      this.setScale_(this.adapter_.getBuffer(), value);
    }
  }

  setReverse(isReversed) {
    this.reverse_ = isReversed;
    if (this.reverse_) {
      this.adapter_.addClass(cssClasses$7.REVERSED_CLASS);
    } else {
      this.adapter_.removeClass(cssClasses$7.REVERSED_CLASS);
    }
  }

  open() {
    this.adapter_.removeClass(cssClasses$7.CLOSED_CLASS);
  }

  close() {
    this.adapter_.addClass(cssClasses$7.CLOSED_CLASS);
  }

  setScale_(el, scaleValue) {
    const value = 'scaleX(' + scaleValue + ')';
    transformStyleProperties.forEach((transformStyleProperty) => {
      this.adapter_.setStyle(el, transformStyleProperty, value);
    });
  }
}

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCLinearProgress extends MDCComponent {
  static attachTo(root) {
    return new MDCLinearProgress(root);
  }

  set determinate(value) {
    this.foundation_.setDeterminate(value);
  }

  set progress(value) {
    this.foundation_.setProgress(value);
  }

  set buffer(value) {
    this.foundation_.setBuffer(value);
  }

  set reverse(value) {
    this.foundation_.setReverse(value);
  }

  open() {
    this.foundation_.open();
  }

  close() {
    this.foundation_.close();
  }

  getDefaultFoundation() {
    return new MDCLinearProgressFoundation({
      addClass: (className) => this.root_.classList.add(className),
      getPrimaryBar: () => this.root_.querySelector(MDCLinearProgressFoundation.strings.PRIMARY_BAR_SELECTOR),
      getBuffer: () => this.root_.querySelector(MDCLinearProgressFoundation.strings.BUFFER_SELECTOR),
      hasClass: (className) => this.root_.classList.contains(className),
      removeClass: (className) => this.root_.classList.remove(className),
      setStyle: (el, styleProperty, value) => el.style[styleProperty] = value,
    });
  }
}

class MWCProgress {
    constructor() {
        this.show = true;
        this.type = 'indeterminate';
        this.reversed = false;
    }
    progress(value) {
        this.mdcProgress.progress = value;
    }
    buffer(value) {
        this.mdcProgress.buffer = value;
    }
    componentWillLoad() {
        if (this.progressbarcolor) {
            this.progressEl.style.setProperty('--mdc-theme-primary', this.progressbarcolor);
        }
    }
    componentDidLoad() {
        let progressStyle = '';
        let bufferStyle = '';
        if (this.progressbarcolor) {
            progressStyle = `background-color: ${this.progressbarcolor};`;
        }
        if (this.bufferbarcolor) {
            bufferStyle = `background-color: ${this.bufferbarcolor};`;
        }
        if (progressStyle.length > 0) {
            this.innerProgressBar.setAttribute('style', progressStyle);
        }
        if (bufferStyle.length > 0) {
            this.bufferProgressBar.setAttribute('style', bufferStyle);
        }
        this.mdcProgress = MDCLinearProgress.attachTo(this.progressBar);
        this.mdcProgress.progress = 0;
        this.mdcProgress.buffer = 0;
    }
    componentDidUnload() {
        this.mdcProgress.destroy();
    }
    getProgressClassName() {
        let className = "mdc-linear-progress";
        if (this.type === "indeterminate") {
            className = `${className} mdc-linear-progress--indeterminate`;
        }
        if (this.reversed) {
            className = ` ${className} mdc-linear-progress--reversed`;
        }
        if (!this.show) {
            className = ` ${className} mdc-linear-progress--closed`;
        }
        return className;
    }
    render() {
        return (h("div", { role: "progressbar", ref: (progressBar) => { this.progressBar = progressBar; }, class: this.getProgressClassName() },
            h("div", { class: "mdc-linear-progress__buffering-dots" }),
            h("div", { class: "mdc-linear-progress__buffer", ref: (bufferProgressBar) => { this.bufferProgressBar = bufferProgressBar; } }),
            h("div", { class: "mdc-linear-progress__bar mdc-linear-progress__primary-bar" },
                h("span", { class: "mdc-linear-progress__bar-inner", ref: (innerProgressBar) => { this.innerProgressBar = innerProgressBar; } })),
            h("div", { class: "mdc-linear-progress__bar mdc-linear-progress__secondary-bar" },
                h("span", { class: "mdc-linear-progress__bar-inner" }))));
    }
}

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-unused-vars */

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
const strings$8 = {
  NATIVE_CONTROL_SELECTOR: '.mdc-radio__native-control',
};

/** @enum {string} */
const cssClasses$8 = {
  ROOT: 'mdc-radio',
  DISABLED: 'mdc-radio--disabled',
};

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-unused-vars */
/* eslint-enable no-unused-vars */
/**
 * @extends {MDCFoundation<!MDCRadioAdapter>}
 */
class MDCRadioFoundation extends MDCFoundation {
  /** @return enum {cssClasses} */
  static get cssClasses() {
    return cssClasses$8;
  }

  /** @return enum {strings} */
  static get strings() {
    return strings$8;
  }

  /** @return {!MDCRadioAdapter} */
  static get defaultAdapter() {
    return /** @type {!MDCRadioAdapter} */ ({
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      getNativeControl: () => /* !MDCSelectionControlState */ {},
    });
  }

  /** @return {boolean} */
  isChecked() {
    return this.getNativeControl_().checked;
  }

  /** @param {boolean} checked */
  setChecked(checked) {
    this.getNativeControl_().checked = checked;
  }

  /** @return {boolean} */
  isDisabled() {
    return this.getNativeControl_().disabled;
  }

  /** @param {boolean} disabled */
  setDisabled(disabled) {
    const {DISABLED} = MDCRadioFoundation.cssClasses;
    this.getNativeControl_().disabled = disabled;
    if (disabled) {
      this.adapter_.addClass(DISABLED);
    } else {
      this.adapter_.removeClass(DISABLED);
    }
  }

  /** @return {?string} */
  getValue() {
    return this.getNativeControl_().value;
  }

  /** @param {?string} value */
  setValue(value) {
    this.getNativeControl_().value = value;
  }

  /**
   * @return {!MDCSelectionControlState}
   * @private
   */
  getNativeControl_() {
    return this.adapter_.getNativeControl() || {
      checked: false,
      disabled: false,
      value: null,
    };
  }
}

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-unused-vars */
/* eslint-enable no-unused-vars */
/**
 * @extends MDCComponent<!MDCRadioFoundation>
 * @implements {MDCSelectionControl}
 */
class MDCRadio extends MDCComponent {
  static attachTo(root) {
    return new MDCRadio(root);
  }

  /** @return {boolean} */
  get checked() {
    return this.foundation_.isChecked();
  }

  /** @param {boolean} checked */
  set checked(checked) {
    this.foundation_.setChecked(checked);
  }

  /** @return {boolean} */
  get disabled() {
    return this.foundation_.isDisabled();
  }

  /** @param {boolean} disabled */
  set disabled(disabled) {
    this.foundation_.setDisabled(disabled);
  }

  /** @return {?string} */
  get value() {
    return this.foundation_.getValue();
  }

  /** @param {?string} value */
  set value(value) {
    this.foundation_.setValue(value);
  }

  /** @return {!MDCRipple} */
  get ripple() {
    return this.ripple_;
  }

  constructor(...args) {
    super(...args);

    /** @private {!MDCRipple} */
    this.ripple_ = this.initRipple_();
  }

  /**
   * @return {!MDCRipple}
   * @private
   */
  initRipple_() {
    const adapter = Object.assign(MDCRipple.createAdapter(this), {
      isUnbounded: () => true,
      // Radio buttons technically go "active" whenever there is *any* keyboard interaction. This is not the
      // UI we desire.
      isSurfaceActive: () => false,
      registerInteractionHandler: (type, handler) => this.nativeControl_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.nativeControl_.removeEventListener(type, handler),
      computeBoundingRect: () => {
        const {left, top} = this.root_.getBoundingClientRect();
        const DIM = 40;
        return {
          top,
          left,
          right: left + DIM,
          bottom: top + DIM,
          width: DIM,
          height: DIM,
        };
      },
    });
    const foundation = new MDCRippleFoundation(adapter);
    return new MDCRipple(this.root_, foundation);
  }

  /**
   * Returns the state of the native control element, or null if the native control element is not present.
   * @return {?MDCSelectionControlState}
   * @private
   */
  get nativeControl_() {
    const {NATIVE_CONTROL_SELECTOR} = MDCRadioFoundation.strings;
    const el = /** @type {?MDCSelectionControlState} */ (
      this.root_.querySelector(NATIVE_CONTROL_SELECTOR));
    return el;
  }

  destroy() {
    this.ripple_.destroy();
    super.destroy();
  }

  /** @return {!MDCRadioFoundation} */
  getDefaultFoundation() {
    return new MDCRadioFoundation({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      getNativeControl: () => this.root_.querySelector(MDCRadioFoundation.strings.NATIVE_CONTROL_SELECTOR),
    });
  }
}

class MWCRadio {
    constructor() {
        this.borderlist = true;
        this.checked = false;
        this.dense = false;
        this.ripple = true;
    }
    componentWillLoad() {
        if (this.radiocolor) {
            this.radioEl.style.setProperty('--mdc-theme-secondary', this.radiocolor);
        }
    }
    componentDidLoad() {
        if (this.ripple) {
            this.radioRipple = MDCRadio.attachTo(this.mdcRadio);
            //  this.radioRipple.unbounded = true
        }
    }
    componentDidUnload() {
        if (this.ripple) {
            this.radioRipple.destroy();
        }
    }
    getListClassName() {
        let className = 'mdc-list';
        if (this.borderlist) {
            className = ` ${className} webmd-bordered-list`;
        }
        if (this.dense) {
            className = ` ${className} mdc-list--dense`;
        }
        return className;
    }
    getStyleNode() {
        var styleNode = document.createElement('style');
        styleNode.type = "text/css";
        var styleText = document.createTextNode(`.mdc-radio::before, .mdc-radio::after{
                    background-color: ${this.radiocolor}20 !important;
                }`);
        styleNode.appendChild(styleText);
        this.elStyleNode = styleNode;
        this.radioEl.appendChild(this.elStyleNode);
    }
    onFocus() {
        if (this.radiocolor) {
            this.getStyleNode();
        }
    }
    onBlur() {
        if (this.radiocolor) {
            this.radioEl.removeChild(this.elStyleNode);
        }
    }
    render() {
        return (h("div", { class: "mdc-radio", ref: (mdcRadio) => { this.mdcRadio = mdcRadio; } },
            h("input", { class: "mdc-radio__native-control", type: "radio", checked: this.checked, name: this.name, onFocus: (evt) => this.onFocus(), onBlur: (evt) => this.onBlur() }),
            h("div", { class: "mdc-radio__background" },
                h("div", { class: "mdc-radio__outer-circle" }),
                h("div", { class: "mdc-radio__inner-circle" }))));
    }
}

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cssClasses$9 = {
  BOTTOM_LINE: 'mdc-select__bottom-line',
  BOTTOM_LINE_ACTIVE: 'mdc-select__bottom-line--active',
  BOX: 'mdc-select--box',
  DISABLED: 'mdc-select--disabled',
  LABEL_FLOAT_ABOVE: 'mdc-select__label--float-above',
  OPEN: 'mdc-select--open',
  ROOT: 'mdc-select',
  SCROLL_LOCK: 'mdc-select-scroll-lock',
};

const strings$9 = {
  CHANGE_EVENT: 'MDCSelect:change',
  BOTTOM_LINE_SELECTOR: '.mdc-select__bottom-line',
  LABEL_SELECTOR: '.mdc-select__label',
  MENU_SELECTOR: '.mdc-select__menu',
  SURFACE_SELECTOR: '.mdc-select__surface',
  SELECTED_TEXT_SELECTOR: '.mdc-select__selected-text',
};

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const OPENER_KEYS = [
  {key: 'ArrowUp', keyCode: 38, forType: 'keydown'},
  {key: 'ArrowDown', keyCode: 40, forType: 'keydown'},
  {key: 'Space', keyCode: 32, forType: 'keyup'},
];

class MDCSelectFoundation extends MDCFoundation {
  static get cssClasses() {
    return cssClasses$9;
  }

  static get strings() {
    return strings$9;
  }

  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      addClassToLabel: (/* className: string */) => {},
      removeClassFromLabel: (/* className: string */) => {},
      addClassToBottomLine: (/* className: string */) => {},
      removeClassFromBottomLine: (/* className: string */) => {},
      setBottomLineAttr: (/* attr: string, value: string */) => {},
      addBodyClass: (/* className: string */) => {},
      removeBodyClass: (/* className: string */) => {},
      setAttr: (/* attr: string, value: string */) => {},
      rmAttr: (/* attr: string */) => {},
      computeBoundingRect: () => /* {left: number, top: number} */ ({left: 0, top: 0}),
      registerInteractionHandler: (/* type: string, handler: EventListener */) => {},
      deregisterInteractionHandler: (/* type: string, handler: EventListener */) => {},
      focus: () => {},
      makeTabbable: () => {},
      makeUntabbable: () => {},
      getComputedStyleValue: (/* propertyName: string */) => /* string */ '',
      setStyle: (/* propertyName: string, value: string */) => {},
      create2dRenderingContext: () => /* {font: string, measureText: (string) => {width: number}} */ ({
        font: '',
        measureText: () => ({width: 0}),
      }),
      setMenuElStyle: (/* propertyName: string, value: string */) => {},
      setMenuElAttr: (/* attr: string, value: string */) => {},
      rmMenuElAttr: (/* attr: string */) => {},
      getMenuElOffsetHeight: () => /* number */ 0,
      openMenu: (/* focusIndex: number */) => {},
      isMenuOpen: () => /* boolean */ false,
      setSelectedTextContent: (/* textContent: string */) => {},
      getNumberOfOptions: () => /* number */ 0,
      getTextForOptionAtIndex: (/* index: number */) => /* string */ '',
      getValueForOptionAtIndex: (/* index: number */) => /* string */ '',
      setAttrForOptionAtIndex: (/* index: number, attr: string, value: string */) => {},
      rmAttrForOptionAtIndex: (/* index: number, attr: string */) => {},
      getOffsetTopForOptionAtIndex: (/* index: number */) => /* number */ 0,
      registerMenuInteractionHandler: (/* type: string, handler: EventListener */) => {},
      deregisterMenuInteractionHandler: (/* type: string, handler: EventListener */) => {},
      notifyChange: () => {},
      getWindowInnerHeight: () => /* number */ 0,
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCSelectFoundation.defaultAdapter, adapter));
    this.ctx_ = null;
    this.selectedIndex_ = -1;
    this.disabled_ = false;
    this.isFocused_ = false;
    this.setPointerXOffset_ = (evt) => this.setBottomLineOrigin_(evt);
    this.displayHandler_ = (evt) => {
      evt.preventDefault();
      if (!this.adapter_.isMenuOpen()) {
        this.open_();
      }
    };
    this.displayViaKeyboardHandler_ = (evt) => this.handleDisplayViaKeyboard_(evt);
    this.selectionHandler_ = ({detail}) => {
      const {index} = detail;

      if (index !== this.selectedIndex_) {
        this.setSelectedIndex(index);
        this.adapter_.notifyChange();
      }
      this.close_();
    };
    this.cancelHandler_ = () => {
      this.close_();

      if (this.selectedIndex_ === -1) {
        this.adapter_.removeClassFromLabel(cssClasses$9.LABEL_FLOAT_ABOVE);
      }
    };
  }

  init() {
    this.ctx_ = this.adapter_.create2dRenderingContext();
    this.adapter_.registerInteractionHandler('click', this.displayHandler_);
    this.adapter_.registerInteractionHandler('keydown', this.displayViaKeyboardHandler_);
    this.adapter_.registerInteractionHandler('keyup', this.displayViaKeyboardHandler_);
    this.adapter_.registerMenuInteractionHandler(
      MDCSimpleMenuFoundation.strings.SELECTED_EVENT, this.selectionHandler_);
    this.adapter_.registerMenuInteractionHandler(
      MDCSimpleMenuFoundation.strings.CANCEL_EVENT, this.cancelHandler_);
    ['mousedown', 'touchstart'].forEach((evtType) => {
      this.adapter_.registerInteractionHandler(evtType, this.setPointerXOffset_);
    });
    this.resize();
  }

  destroy() {
    // Drop reference to context object to prevent potential leaks
    this.ctx_ = null;
    this.adapter_.deregisterInteractionHandler('click', this.displayHandler_);
    this.adapter_.deregisterInteractionHandler('keydown', this.displayViaKeyboardHandler_);
    this.adapter_.deregisterInteractionHandler('keyup', this.displayViaKeyboardHandler_);
    this.adapter_.deregisterMenuInteractionHandler(
      MDCSimpleMenuFoundation.strings.SELECTED_EVENT, this.selectionHandler_);
    this.adapter_.deregisterMenuInteractionHandler(
      MDCSimpleMenuFoundation.strings.CANCEL_EVENT, this.cancelHandler_);
    ['mousedown', 'touchstart'].forEach((evtType) => {
      this.adapter_.deregisterInteractionHandler(evtType, this.setPointerXOffset_);
    });
  }

  getValue() {
    return this.selectedIndex_ >= 0 ? this.adapter_.getValueForOptionAtIndex(this.selectedIndex_) : '';
  }

  getSelectedIndex() {
    return this.selectedIndex_;
  }

  setSelectedIndex(index) {
    const prevSelectedIndex = this.selectedIndex_;
    if (prevSelectedIndex >= 0) {
      this.adapter_.rmAttrForOptionAtIndex(this.selectedIndex_, 'aria-selected');
    }

    this.selectedIndex_ = index >= 0 && index < this.adapter_.getNumberOfOptions() ? index : -1;
    let selectedTextContent = '';
    if (this.selectedIndex_ >= 0) {
      selectedTextContent = this.adapter_.getTextForOptionAtIndex(this.selectedIndex_).trim();
      this.adapter_.setAttrForOptionAtIndex(this.selectedIndex_, 'aria-selected', 'true');
    }
    this.adapter_.setSelectedTextContent(selectedTextContent);
  }

  isDisabled() {
    return this.disabled_;
  }

  setDisabled(disabled) {
    const {DISABLED} = MDCSelectFoundation.cssClasses;
    this.disabled_ = disabled;
    if (this.disabled_) {
      this.adapter_.addClass(DISABLED);
      this.adapter_.setAttr('aria-disabled', 'true');
      this.adapter_.makeUntabbable();
    } else {
      this.adapter_.removeClass(DISABLED);
      this.adapter_.rmAttr('aria-disabled');
      this.adapter_.makeTabbable();
    }
  }

  resize() {
    const font = this.adapter_.getComputedStyleValue('font');
    const letterSpacing = parseFloat(this.adapter_.getComputedStyleValue('letter-spacing'));

    if (font) {
      this.ctx_.font = font;
    } else {
      const primaryFontFamily = this.adapter_.getComputedStyleValue('font-family').split(',')[0];
      const fontSize = this.adapter_.getComputedStyleValue('font-size');
      this.ctx_.font = `${fontSize} ${primaryFontFamily}`;
    }

    let maxTextLength = 0;

    for (let i = 0, l = this.adapter_.getNumberOfOptions(); i < l; i++) {
      const surfacePaddingRight = parseInt(this.adapter_.getComputedStyleValue('padding-right'), 10);
      const surfacePaddingLeft = parseInt(this.adapter_.getComputedStyleValue('padding-left'), 10);
      const selectBoxAddedPadding = surfacePaddingRight + surfacePaddingLeft;
      const txt = this.adapter_.getTextForOptionAtIndex(i).trim();
      const {width} = this.ctx_.measureText(txt);
      const addedSpace = letterSpacing * txt.length;

      maxTextLength =
        Math.max(maxTextLength, Math.ceil(width + addedSpace + selectBoxAddedPadding));
    }

    this.adapter_.setStyle('width', `${maxTextLength}px`);
  }

  open_() {
    this.disableScroll_();
    const {OPEN} = MDCSelectFoundation.cssClasses;
    const focusIndex = this.selectedIndex_ < 0 ? 0 : this.selectedIndex_;

    this.setMenuStylesForOpenAtIndex_(focusIndex);
    this.adapter_.addClassToLabel(cssClasses$9.LABEL_FLOAT_ABOVE);
    this.adapter_.addClassToBottomLine(cssClasses$9.BOTTOM_LINE_ACTIVE);
    this.adapter_.addClass(OPEN);
    this.adapter_.openMenu(focusIndex);
    this.isFocused_ = true;
  }

  setBottomLineOrigin_(evt) {
    const targetClientRect = evt.target.getBoundingClientRect();
    const evtCoords = {x: evt.clientX, y: evt.clientY};
    const normalizedX = evtCoords.x - targetClientRect.left;
    const attributeString =
      `transform-origin: ${normalizedX}px bottom`;

    this.adapter_.setBottomLineAttr('style', attributeString);
  }

  setMenuStylesForOpenAtIndex_(index) {
    const innerHeight = this.adapter_.getWindowInnerHeight();
    const {left, top} = this.adapter_.computeBoundingRect();

    this.adapter_.setMenuElAttr('aria-hidden', 'true');
    this.adapter_.setMenuElStyle('display', 'block');
    const menuHeight = this.adapter_.getMenuElOffsetHeight();
    const itemOffsetTop = this.adapter_.getOffsetTopForOptionAtIndex(index);
    this.adapter_.setMenuElStyle('display', '');
    this.adapter_.rmMenuElAttr('aria-hidden');

    let adjustedTop = top - itemOffsetTop;
    const overflowsTop = adjustedTop < 0;
    const overflowsBottom = adjustedTop + menuHeight > innerHeight;
    if (overflowsTop) {
      adjustedTop = 0;
    } else if (overflowsBottom) {
      adjustedTop = Math.max(0, innerHeight - menuHeight);
    }

    this.adapter_.setMenuElStyle('left', `${left}px`);
    this.adapter_.setMenuElStyle('top', `${adjustedTop}px`);
    this.adapter_.setMenuElStyle('transform-origin', `center ${itemOffsetTop}px`);
  }

  close_() {
    const {OPEN} = MDCSelectFoundation.cssClasses;
    this.adapter_.removeClass(OPEN);
    this.adapter_.removeClassFromBottomLine(cssClasses$9.BOTTOM_LINE_ACTIVE);
    this.adapter_.focus();
    this.enableScroll_();
  }

  handleDisplayViaKeyboard_(evt) {
    // We use a hard-coded 2 instead of Event.AT_TARGET to avoid having to reference a browser
    // global.
    const EVENT_PHASE_AT_TARGET = 2;
    if (evt.eventPhase !== EVENT_PHASE_AT_TARGET) {
      return;
    }

    // Prevent pressing space down from scrolling the page
    const isSpaceDown = evt.type === 'keydown' && (evt.key === 'Space' || evt.keyCode === 32);
    if (isSpaceDown) {
      evt.preventDefault();
    }

    const isOpenerKey = OPENER_KEYS.some(({key, keyCode, forType}) => {
      return evt.type === forType && (evt.key === key || evt.keyCode === keyCode);
    });

    if (isOpenerKey) {
      this.displayHandler_(evt);
    }
  }

  disableScroll_() {
    this.adapter_.addBodyClass(cssClasses$9.SCROLL_LOCK);
  }

  enableScroll_() {
    this.adapter_.removeBodyClass(cssClasses$9.SCROLL_LOCK);
  }
}

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCSelect extends MDCComponent {
  static attachTo(root) {
    return new MDCSelect(root);
  }

  get value() {
    return this.foundation_.getValue();
  }

  get options() {
    return this.menu_.items;
  }

  get selectedOptions() {
    return this.root_.querySelectorAll('[aria-selected]');
  }

  get selectedIndex() {
    return this.foundation_.getSelectedIndex();
  }

  set selectedIndex(selectedIndex) {
    this.foundation_.setSelectedIndex(selectedIndex);
  }

  get disabled() {
    return this.foundation_.isDisabled();
  }

  set disabled(disabled) {
    this.foundation_.setDisabled(disabled);
  }

  item(index) {
    return this.options[index] || null;
  }

  nameditem(key) {
    // NOTE: IE11 precludes us from using Array.prototype.find
    for (let i = 0, options = this.options, option; (option = options[i]); i++) {
      if (option.id === key || option.getAttribute('name') === key) {
        return option;
      }
    }
    return null;
  }

  initialize(menuFactory = (el) => new MDCSimpleMenu(el)) {
    this.surface_ = this.root_.querySelector(strings$9.SURFACE_SELECTOR);
    this.label_ = this.root_.querySelector(strings$9.LABEL_SELECTOR);
    this.bottomLine_ = this.root_.querySelector(strings$9.BOTTOM_LINE_SELECTOR);
    this.selectedText_ = this.root_.querySelector(strings$9.SELECTED_TEXT_SELECTOR);
    this.menuEl_ = this.root_.querySelector(strings$9.MENU_SELECTOR);
    this.menu_ = menuFactory(this.menuEl_);

    this.ripple = new MDCRipple(this.surface_);
  }

  getDefaultFoundation() {
    return new MDCSelectFoundation({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      addClassToLabel: (className) => this.label_.classList.add(className),
      removeClassFromLabel: (className) => this.label_.classList.remove(className),
      addClassToBottomLine: (className) => this.bottomLine_.classList.add(className),
      removeClassFromBottomLine: (className) => this.bottomLine_.classList.remove(className),
      setBottomLineAttr: (attr, value) => this.bottomLine_.setAttribute(attr, value),
      setAttr: (attr, value) => this.root_.setAttribute(attr, value),
      rmAttr: (attr, value) => this.root_.removeAttribute(attr, value),
      computeBoundingRect: () => this.surface_.getBoundingClientRect(),
      registerInteractionHandler: (type, handler) => this.root_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.root_.removeEventListener(type, handler),
      focus: () => this.root_.focus(),
      makeTabbable: () => {
        this.root_.tabIndex = 0;
      },
      makeUntabbable: () => {
        this.root_.tabIndex = -1;
      },
      getComputedStyleValue: (prop) => window.getComputedStyle(this.surface_).getPropertyValue(prop),
      setStyle: (propertyName, value) => this.surface_.style.setProperty(propertyName, value),
      create2dRenderingContext: () => document.createElement('canvas').getContext('2d'),
      setMenuElStyle: (propertyName, value) => this.menuEl_.style.setProperty(propertyName, value),
      setMenuElAttr: (attr, value) => this.menuEl_.setAttribute(attr, value),
      rmMenuElAttr: (attr) => this.menuEl_.removeAttribute(attr),
      getMenuElOffsetHeight: () => this.menuEl_.offsetHeight,
      openMenu: (focusIndex) => this.menu_.show({focusIndex}),
      isMenuOpen: () => this.menu_.open,
      setSelectedTextContent: (selectedTextContent) => {
        this.selectedText_.textContent = selectedTextContent;
      },
      getNumberOfOptions: () => this.options.length,
      getTextForOptionAtIndex: (index) => this.options[index].textContent,
      getValueForOptionAtIndex: (index) => this.options[index].id || this.options[index].textContent,
      setAttrForOptionAtIndex: (index, attr, value) => this.options[index].setAttribute(attr, value),
      rmAttrForOptionAtIndex: (index, attr) => this.options[index].removeAttribute(attr),
      getOffsetTopForOptionAtIndex: (index) => this.options[index].offsetTop,
      registerMenuInteractionHandler: (type, handler) => this.menu_.listen(type, handler),
      deregisterMenuInteractionHandler: (type, handler) => this.menu_.unlisten(type, handler),
      notifyChange: () => this.emit(MDCSelectFoundation.strings.CHANGE_EVENT, this),
      getWindowInnerHeight: () => window.innerHeight,
      addBodyClass: (className) => document.body.classList.add(className),
      removeBodyClass: (className) => document.body.classList.remove(className),
    });
  }

  initialSyncWithDOM() {
    const selectedOption = this.selectedOptions[0];
    const idx = selectedOption ? this.options.indexOf(selectedOption) : -1;
    if (idx >= 0) {
      this.selectedIndex = idx;
    }

    if (this.root_.getAttribute('aria-disabled') === 'true') {
      this.disabled = true;
    }
  }
}

class MWCSelect {
    constructor() {
        this.borderlist = true;
        this.checked = false;
        this.dense = false;
        this.ripple = true;
    }
    componentWillLoad() {
        
    }
    componentDidLoad() {
        this.mdcSelectComponent = MDCSelect.attachTo(this.mdcSelect);
        
    }
    componentDidUnload() {
        this.mdcSelectComponent.destroy();
        
    }
    getListClassName() {
        let className = 'mdc-list';
        if (this.borderlist) {
            className = ` ${className} webmd-bordered-list`;
        }
        if (this.dense) {
            className = ` ${className} mdc-list--dense`;
        }
        return className;
    }
    getStyleNode() {
        var styleNode = document.createElement('style');
        styleNode.type = "text/css";
        var styleText = document.createTextNode(`.mdc-radio::before, .mdc-radio::after{
                    background-color: ${this.radiocolor}20 !important;
                }`);
        styleNode.appendChild(styleText);
        this.elStyleNode = styleNode;
        //  this.radioEl.appendChild(this.elStyleNode);
    }
    onFocus() {
        if (this.radiocolor) {
            this.getStyleNode();
        }
    }
    onBlur() {
        
    }
    render() {
        return (h("div", { class: "mdc-select", role: "listbox", ref: (mdcSelect) => { this.mdcSelect = mdcSelect; } },
            h("div", { class: "mdc-select__surface mdc-ripple-upgraded", tabindex: "0" },
                h("div", { class: "mdc-seect__label" }, "Pick a Food Group"),
                h("div", { class: "mdc-select__selected-text" }),
                h("div", { class: "mdc-select__bottom-line" })),
            h("div", { class: "mdc-simple-menu mdc-select__menu" },
                h("ul", { class: "mdc-list mdc-simple-menu__items" },
                    h("slot", null)))));
    }
}

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const cssClasses$10 = {
  ACTIVE: 'mdc-slider--active',
  DISABLED: 'mdc-slider--disabled',
  DISCRETE: 'mdc-slider--discrete',
  FOCUS: 'mdc-slider--focus',
  IN_TRANSIT: 'mdc-slider--in-transit',
  IS_DISCRETE: 'mdc-slider--discrete',
  HAS_TRACK_MARKER: 'mdc-slider--display-markers',
};

const strings$10 = {
  TRACK_SELECTOR: '.mdc-slider__track',
  TRACK_MARKER_CONTAINER_SELECTOR: '.mdc-slider__track-marker-container',
  LAST_TRACK_MARKER_SELECTOR: '.mdc-slider__track-marker:last-child',
  THUMB_CONTAINER_SELECTOR: '.mdc-slider__thumb-container',
  PIN_VALUE_MARKER_SELECTOR: '.mdc-slider__pin-value-marker',
  ARIA_VALUEMIN: 'aria-valuemin',
  ARIA_VALUEMAX: 'aria-valuemax',
  ARIA_VALUENOW: 'aria-valuenow',
  ARIA_DISABLED: 'aria-disabled',
  STEP_DATA_ATTR: 'data-step',
  CHANGE_EVENT: 'MDCSlider:change',
  INPUT_EVENT: 'MDCSlider:input',
};

const numbers$3 = {
  PAGE_FACTOR: 4,
};

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 *you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const KEY_IDS = {
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  HOME: 'Home',
  END: 'End',
  PAGE_UP: 'PageUp',
  PAGE_DOWN: 'PageDown',
};

// Events that can constitute the user releasing drag on a slider
const UP_EVENTS = ['mouseup', 'pointerup', 'touchend'];

class MDCSliderFoundation extends MDCFoundation {
  static get cssClasses() {
    return cssClasses$10;
  }

  static get strings() {
    return strings$10;
  }

  static get numbers() {
    return numbers$3;
  }

  static get defaultAdapter() {
    return {
      hasClass: (/* className: string */) => /* boolean */ false,
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      getAttribute: (/* name: string */) => /* string|null */ null,
      setAttribute: (/* name: string, value: string */) => {},
      removeAttribute: (/* name: string */) => {},
      computeBoundingRect: () => /* ClientRect */ ({
        top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0,
      }),
      getTabIndex: () => /* number */ 0,
      registerInteractionHandler: (/* type: string, handler: EventListener */) => {},
      deregisterInteractionHandler: (/* type: string, handler: EventListener */) => {},
      registerThumbContainerInteractionHandler: (/* type: string, handler: EventListener */) => {},
      deregisterThumbContainerInteractionHandler: (/* type: string, handler: EventListener */) => {},
      registerBodyInteractionHandler: (/* type: string, handler: EventListener */) => {},
      deregisterBodyInteractionHandler: (/* type: string, handler: EventListener */) => {},
      registerResizeHandler: (/* handler: EventListener */) => {},
      deregisterResizeHandler: (/* handler: EventListener */) => {},
      notifyInput: () => {},
      notifyChange: () => {},
      setThumbContainerStyleProperty: (/* propertyName: string, value: string */) => {},
      setTrackStyleProperty: (/* propertyName: string, value: string */) => {},
      setMarkerValue: (/* value: number */) => {},
      appendTrackMarkers: (/* numMarkers: number */) => {},
      removeTrackMarkers: () => {},
      setLastTrackMarkersStyleProperty: (/* propertyName: string, value: string */) => {},
      isRTL: () => /* boolean */ false,
    };
  }

  constructor(adapter = {}) {
    super(Object.assign(MDCSliderFoundation.defaultAdapter, adapter));
    this.rect_ = null;
    // We set this to NaN since we want it to be a number, but we can't use '0' or '-1'
    // because those could be valid tabindices set by the client code.
    this.savedTabIndex_ = NaN;
    this.active_ = false;
    this.inTransit_ = false;
    this.isDiscrete_ = false;
    this.hasTrackMarker_ = false;
    this.handlingThumbTargetEvt_ = false;
    this.min_ = 0;
    this.max_ = 100;
    this.step_ = 0;
    this.value_ = 0;
    this.disabled_ = false;
    this.preventFocusState_ = false;
    this.updateUIFrame_ = 0;
    this.thumbContainerPointerHandler_ = () => {
      this.handlingThumbTargetEvt_ = true;
    };
    this.mousedownHandler_ = this.createDownHandler_('mousemove');
    this.pointerdownHandler_ = this.createDownHandler_('pointermove');
    this.touchstartHandler_ = this.createDownHandler_(
      'touchmove', ({targetTouches}) => targetTouches[0].pageX);
    this.keydownHandler_ = (evt) => this.handleKeydown_(evt);
    this.focusHandler_ = () => this.handleFocus_();
    this.blurHandler_ = () => this.handleBlur_();
    this.resizeHandler_ = () => this.layout();
  }

  init() {
    this.isDiscrete_ = this.adapter_.hasClass(cssClasses$10.IS_DISCRETE);
    this.hasTrackMarker_ = this.adapter_.hasClass(cssClasses$10.HAS_TRACK_MARKER);
    this.adapter_.registerInteractionHandler('mousedown', this.mousedownHandler_);
    this.adapter_.registerInteractionHandler('pointerdown', this.pointerdownHandler_);
    this.adapter_.registerInteractionHandler('touchstart', this.touchstartHandler_);
    this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
    ['mousedown', 'pointerdown', 'touchstart'].forEach((evtName) => {
      this.adapter_.registerThumbContainerInteractionHandler(evtName, this.thumbContainerPointerHandler_);
    });
    this.adapter_.registerResizeHandler(this.resizeHandler_);
    this.layout();
    // At last step, provide a reasonable default value to discrete slider
    if (this.isDiscrete_ && this.getStep() == 0) {
      this.step_ = 1;
    }
  }

  destroy() {
    this.adapter_.deregisterInteractionHandler('mousedown', this.mousedownHandler_);
    this.adapter_.deregisterInteractionHandler('pointerdown', this.pointerdownHandler_);
    this.adapter_.deregisterInteractionHandler('touchstart', this.touchstartHandler_);
    this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
    ['mousedown', 'pointerdown', 'touchstart'].forEach((evtName) => {
      this.adapter_.deregisterThumbContainerInteractionHandler(evtName, this.thumbContainerPointerHandler_);
    });
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
  }

  setupTrackMarker() {
    if (this.isDiscrete_ && this.hasTrackMarker_&& this.getStep() != 0) {
      const min = this.getMin();
      const max = this.getMax();
      const step = this.getStep();
      let numMarkers = (max - min) / step;

      // In case distance between max & min is indivisible to step,
      // we place the secondary to last marker proportionally at where thumb
      // could reach and place the last marker at max value
      const indivisible = Math.ceil(numMarkers) !== numMarkers;
      if (indivisible) {
        numMarkers = Math.ceil(numMarkers);
      }

      this.adapter_.removeTrackMarkers();
      this.adapter_.appendTrackMarkers(numMarkers);

      if (indivisible) {
        const lastStepRatio = (max - numMarkers * step) / step + 1;
        const flex = getCorrectPropertyName(window, 'flex');
        this.adapter_.setLastTrackMarkersStyleProperty(flex, lastStepRatio);
      }
    }
  }

  layout() {
    this.rect_ = this.adapter_.computeBoundingRect();
    this.updateUIForCurrentValue_();
  }

  getValue() {
    return this.value_;
  }

  setValue(value) {
    this.setValue_(value, false);
  }

  getMax() {
    return this.max_;
  }

  setMax(max) {
    if (max < this.min_) {
      throw new Error('Cannot set max to be less than the slider\'s minimum value');
    }
    this.max_ = max;
    this.setValue_(this.value_, false, true);
    this.adapter_.setAttribute(strings$10.ARIA_VALUEMAX, String(this.max_));
    this.setupTrackMarker();
  }

  getMin() {
    return this.min_;
  }

  setMin(min) {
    if (min > this.max_) {
      throw new Error('Cannot set min to be greater than the slider\'s maximum value');
    }
    this.min_ = min;
    this.setValue_(this.value_, false, true);
    this.adapter_.setAttribute(strings$10.ARIA_VALUEMIN, String(this.min_));
    this.setupTrackMarker();
  }

  getStep() {
    return this.step_;
  }

  setStep(step) {
    if (step < 0) {
      throw new Error('Step cannot be set to a negative number');
    }
    if (this.isDiscrete_ && (typeof(step) !== 'number' || step < 1)) {
      step = 1;
    }
    this.step_ = step;
    this.setValue_(this.value_, false, true);
    this.setupTrackMarker();
  }

  isDisabled() {
    return this.disabled_;
  }

  setDisabled(disabled) {
    this.disabled_ = disabled;
    this.toggleClass_(cssClasses$10.DISABLED, this.disabled_);
    if (this.disabled_) {
      this.savedTabIndex_ = this.adapter_.getTabIndex();
      this.adapter_.setAttribute(strings$10.ARIA_DISABLED, 'true');
      this.adapter_.removeAttribute('tabindex');
    } else {
      this.adapter_.removeAttribute(strings$10.ARIA_DISABLED);
      if (!isNaN(this.savedTabIndex_)) {
        this.adapter_.setAttribute('tabindex', String(this.savedTabIndex_));
      }
    }
  }

  createDownHandler_(moveEvt, getPageX = ({pageX}) => pageX) {
    const moveHandler = (evt) => {
      evt.preventDefault();
      this.setValueFromEvt_(evt, getPageX);
    };

    // Note: upHandler is [de]registered on ALL potential pointer-related release event types, since some browsers
    // do not always fire these consistently in pairs.
    // (See https://github.com/material-components/material-components-web/issues/1192)
    const upHandler = () => {
      this.setActive_(false);
      this.adapter_.deregisterBodyInteractionHandler(moveEvt, moveHandler);
      UP_EVENTS.forEach((type) => this.adapter_.deregisterBodyInteractionHandler(type, upHandler));
      this.adapter_.notifyChange();
    };

    const downHandler = (evt) => {
      if (this.disabled_) {
        return;
      }

      this.preventFocusState_ = true;
      this.setInTransit_(!this.handlingThumbTargetEvt_);
      this.handlingThumbTargetEvt_ = false;

      this.setActive_(true);

      this.adapter_.registerBodyInteractionHandler(moveEvt, moveHandler);
      UP_EVENTS.forEach((type) => this.adapter_.registerBodyInteractionHandler(type, upHandler));
      this.setValueFromEvt_(evt, getPageX);
    };

    return downHandler;
  }

  setValueFromEvt_(evt, getPageX) {
    const pageX = getPageX(evt);
    const value = this.computeValueFromPageX_(pageX);
    this.setValue_(value, true);
  }

  computeValueFromPageX_(pageX) {
    const {max_: max, min_: min} = this;
    const xPos = pageX - this.rect_.left;
    let pctComplete = xPos / this.rect_.width;
    if (this.adapter_.isRTL()) {
      pctComplete = 1 - pctComplete;
    }
    // Fit the percentage complete between the range [min,max]
    // by remapping from [0, 1] to [min, min+(max-min)].
    return min + pctComplete * (max - min);
  }

  handleKeydown_(evt) {
    const keyId = this.getKeyId_(evt);
    const value = this.getValueForKeyId_(keyId);
    if (isNaN(value)) {
      return;
    }

    // Prevent page from scrolling due to key presses that would normally scroll the page
    evt.preventDefault();
    this.adapter_.addClass(cssClasses$10.FOCUS);
    this.setValue_(value, true);
    this.adapter_.notifyChange();
  }

  getKeyId_(kbdEvt) {
    if (kbdEvt.key === KEY_IDS.ARROW_LEFT || kbdEvt.keyCode === 37) {
      return KEY_IDS.ARROW_LEFT;
    }
    if (kbdEvt.key === KEY_IDS.ARROW_RIGHT || kbdEvt.keyCode === 39) {
      return KEY_IDS.ARROW_RIGHT;
    }
    if (kbdEvt.key === KEY_IDS.ARROW_UP || kbdEvt.keyCode === 38) {
      return KEY_IDS.ARROW_UP;
    }
    if (kbdEvt.key === KEY_IDS.ARROW_DOWN || kbdEvt.keyCode === 40) {
      return KEY_IDS.ARROW_DOWN;
    }
    if (kbdEvt.key === KEY_IDS.HOME || kbdEvt.keyCode === 36) {
      return KEY_IDS.HOME;
    }
    if (kbdEvt.key === KEY_IDS.END || kbdEvt.keyCode === 35) {
      return KEY_IDS.END;
    }
    if (kbdEvt.key === KEY_IDS.PAGE_UP || kbdEvt.keyCode === 33) {
      return KEY_IDS.PAGE_UP;
    }
    if (kbdEvt.key === KEY_IDS.PAGE_DOWN || kbdEvt.keyCode === 34) {
      return KEY_IDS.PAGE_DOWN;
    }

    return '';
  }

  getValueForKeyId_(keyId) {
    const {max_: max, min_: min, step_: step} = this;
    let delta = step || (max - min) / 100;
    const valueNeedsToBeFlipped = this.adapter_.isRTL() && (
      keyId === KEY_IDS.ARROW_LEFT || keyId === KEY_IDS.ARROW_RIGHT
    );
    if (valueNeedsToBeFlipped) {
      delta = -delta;
    }

    switch (keyId) {
    case KEY_IDS.ARROW_LEFT:
    case KEY_IDS.ARROW_DOWN:
      return this.value_ - delta;
    case KEY_IDS.ARROW_RIGHT:
    case KEY_IDS.ARROW_UP:
      return this.value_ + delta;
    case KEY_IDS.HOME:
      return this.min_;
    case KEY_IDS.END:
      return this.max_;
    case KEY_IDS.PAGE_UP:
      return this.value_ + delta * numbers$3.PAGE_FACTOR;
    case KEY_IDS.PAGE_DOWN:
      return this.value_ - delta * numbers$3.PAGE_FACTOR;
    default:
      return NaN;
    }
  }

  handleFocus_() {
    if (this.preventFocusState_) {
      return;
    }
    this.adapter_.addClass(cssClasses$10.FOCUS);
  }

  handleBlur_() {
    this.preventFocusState_ = false;
    this.adapter_.removeClass(cssClasses$10.FOCUS);
  }

  setValue_(value, shouldFireInput, force = false) {
    if (value === this.value_ && !force) {
      return;
    }

    const {min_: min, max_: max} = this;
    const valueSetToBoundary = value === min || value === max;
    if (this.step_ && !valueSetToBoundary) {
      value = this.quantize_(value);
    }
    if (value < min) {
      value = min;
    } else if (value > max) {
      value = max;
    }
    this.value_ = value;
    this.adapter_.setAttribute(strings$10.ARIA_VALUENOW, String(this.value_));
    this.updateUIForCurrentValue_();

    if (shouldFireInput) {
      this.adapter_.notifyInput();
      if (this.isDiscrete_) {
        this.adapter_.setMarkerValue(value);
      }
    }
  }

  quantize_(value) {
    const numSteps = Math.round(value / this.step_);
    const quantizedVal = numSteps * this.step_;
    return quantizedVal;
  }

  updateUIForCurrentValue_() {
    const {max_: max, min_: min, value_: value} = this;
    const pctComplete = (value - min) / (max - min);
    let translatePx = pctComplete * this.rect_.width;
    if (this.adapter_.isRTL()) {
      translatePx = this.rect_.width - translatePx;
    }

    const transformProp = getCorrectPropertyName(window, 'transform');
    const transitionendEvtName = getCorrectEventName(window, 'transitionend');

    if (this.inTransit_) {
      const onTransitionEnd = () => {
        this.setInTransit_(false);
        this.adapter_.deregisterThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd);
      };
      this.adapter_.registerThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd);
    }

    this.updateUIFrame_ = requestAnimationFrame(() => {
      // NOTE(traviskaufman): It would be nice to use calc() here,
      // but IE cannot handle calcs in transforms correctly.
      // See: https://goo.gl/NC2itk
      // Also note that the -50% offset is used to center the slider thumb.
      this.adapter_.setThumbContainerStyleProperty(transformProp, `translateX(${translatePx}px) translateX(-50%)`);
      this.adapter_.setTrackStyleProperty(transformProp, `scaleX(${pctComplete})`);
    });
  }

  setActive_(active) {
    this.active_ = active;
    this.toggleClass_(cssClasses$10.ACTIVE, this.active_);
  }

  setInTransit_(inTransit) {
    this.inTransit_ = inTransit;
    this.toggleClass_(cssClasses$10.IN_TRANSIT, this.inTransit_);
  }

  toggleClass_(className, shouldBePresent) {
    if (shouldBePresent) {
      this.adapter_.addClass(className);
    } else {
      this.adapter_.removeClass(className);
    }
  }
}

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCSlider extends MDCComponent {
  static attachTo(root) {
    return new MDCSlider(root);
  }

  get value() {
    return this.foundation_.getValue();
  }

  set value(value) {
    this.foundation_.setValue(value);
  }

  get min() {
    return this.foundation_.getMin();
  }

  set min(min) {
    this.foundation_.setMin(min);
  }

  get max() {
    return this.foundation_.getMax();
  }

  set max(max) {
    this.foundation_.setMax(max);
  }

  get step() {
    return this.foundation_.getStep();
  }

  set step(step) {
    this.foundation_.setStep(step);
  }

  get disabled() {
    return this.foundation_.isDisabled();
  }

  set disabled(disabled) {
    this.foundation_.setDisabled(disabled);
  }

  initialize() {
    this.thumbContainer_ = this.root_.querySelector(strings$10.THUMB_CONTAINER_SELECTOR);
    this.track_ = this.root_.querySelector(strings$10.TRACK_SELECTOR);
    this.pinValueMarker_ = this.root_.querySelector(strings$10.PIN_VALUE_MARKER_SELECTOR);
    this.trackMarkerContainer_ = this.root_.querySelector(strings$10.TRACK_MARKER_CONTAINER_SELECTOR);
  }

  getDefaultFoundation() {
    return new MDCSliderFoundation({
      hasClass: (className) => this.root_.classList.contains(className),
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      getAttribute: (name) => this.root_.getAttribute(name),
      setAttribute: (name, value) => this.root_.setAttribute(name, value),
      removeAttribute: (name) => this.root_.removeAttribute(name),
      computeBoundingRect: () => this.root_.getBoundingClientRect(),
      getTabIndex: () => this.root_.tabIndex,
      registerInteractionHandler: (type, handler) => {
        this.root_.addEventListener(type, handler);
      },
      deregisterInteractionHandler: (type, handler) => {
        this.root_.removeEventListener(type, handler);
      },
      registerThumbContainerInteractionHandler: (type, handler) => {
        this.thumbContainer_.addEventListener(type, handler);
      },
      deregisterThumbContainerInteractionHandler: (type, handler) => {
        this.thumbContainer_.removeEventListener(type, handler);
      },
      registerBodyInteractionHandler: (type, handler) => {
        document.body.addEventListener(type, handler);
      },
      deregisterBodyInteractionHandler: (type, handler) => {
        document.body.removeEventListener(type, handler);
      },
      registerResizeHandler: (handler) => {
        window.addEventListener('resize', handler);
      },
      deregisterResizeHandler: (handler) => {
        window.removeEventListener('resize', handler);
      },
      notifyInput: () => {
        this.emit(strings$10.INPUT_EVENT, this);
      },
      notifyChange: () => {
        this.emit(strings$10.CHANGE_EVENT, this);
      },
      setThumbContainerStyleProperty: (propertyName, value) => {
        this.thumbContainer_.style.setProperty(propertyName, value);
      },
      setTrackStyleProperty: (propertyName, value) => {
        this.track_.style.setProperty(propertyName, value);
      },
      setMarkerValue: (value) => {
        this.pinValueMarker_.innerText = value;
      },
      appendTrackMarkers: (numMarkers) => {
        const frag = document.createDocumentFragment();
        for (let i = 0; i < numMarkers; i++) {
          const marker = document.createElement('div');
          marker.classList.add('mdc-slider__track-marker');
          frag.appendChild(marker);
        }
        this.trackMarkerContainer_.appendChild(frag);
      },
      removeTrackMarkers: () => {
        while (this.trackMarkerContainer_.firstChild) {
          this.trackMarkerContainer_.removeChild(this.trackMarkerContainer_.firstChild);
        }
      },
      setLastTrackMarkersStyleProperty: (propertyName, value) => {
        // We remove and append new nodes, thus, the last track marker must be dynamically found.
        const lastTrackMarker = this.root_.querySelector(strings$10.LAST_TRACK_MARKER_SELECTOR);
        lastTrackMarker.style.setProperty(propertyName, value);
      },
      isRTL: () => getComputedStyle(this.root_).direction === 'rtl',
    });
  }

  initialSyncWithDOM() {
    const origValueNow = parseFloat(this.root_.getAttribute(strings$10.ARIA_VALUENOW));
    this.min = parseFloat(this.root_.getAttribute(strings$10.ARIA_VALUEMIN)) || this.min;
    this.max = parseFloat(this.root_.getAttribute(strings$10.ARIA_VALUEMAX)) || this.max;
    this.step = parseFloat(this.root_.getAttribute(strings$10.STEP_DATA_ATTR)) || this.step;
    this.value = origValueNow || this.value;
    this.disabled = (
      this.root_.hasAttribute(strings$10.ARIA_DISABLED) &&
      this.root_.getAttribute(strings$10.ARIA_DISABLED) !== 'false'
    );
    this.foundation_.setupTrackMarker();
  }

  layout() {
    this.foundation_.layout();
  }

  stepUp(amount = (this.step || 1)) {
    this.value += amount;
  }

  stepDown(amount = (this.step || 1)) {
    this.value -= amount;
  }
}

class MWCSlider {
    constructor() {
        this.value = 50;
        this.min = 0;
        this.max = 100;
        this.step = 0;
        this.disabled = false;
        this.discrete = false;
        this.slidercolor = "#000000";
    }
    stepup(amount = 1) {
        this.mdcSlider.stepUp(amount);
    }
    stepdown(amount = 1) {
        this.mdcSlider.stepDown(amount);
    }
    getStyleNode() {
        var styleNode = document.createElement('style');
        styleNode.type = "text/css";
        var styleText = document.createTextNode(`.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-container{
                    background-color: ${this.slidercolor}20 !important;
                }`);
        styleNode.appendChild(styleText);
        this.elStyleNode = styleNode;
        this.sliderEl.appendChild(this.elStyleNode);
    }
    componentWillLoad() {
        if (this.slidercolor) {
            this.sliderEl.style.setProperty('--mdc-theme-secondary', this.slidercolor);
        }
    }
    componentDidLoad() {
        this.mdcSlider = MDCSlider.attachTo(this.mdcSlider);
        this.mdcSlider.listen('MDCSlider:change', () => {
            this.change.emit(this.mdcSlider.value);
        });
        this.mdcSlider.listen('MDCSlider:input', () => {
            this.inputchange.emit(this.mdcSlider.value);
        });
        this.getStyleNode();
    }
    componentDidUnload() {
        this.mdcSlider.destroy();
        this.sliderEl.removeChild(this.elStyleNode);
    }
    // Todo Discrete  // mdc-slider--display-markers
    getGridListClassName() {
        let className = 'mdc-grid-list';
        if (this.discrete) {
            className = ` ${className} mdc-grid-list--tile-aspect-${this.discrete}`;
        }
        return className;
    }
    render() {
        return (h("div", { class: "mdc-slider mdc-slider--discrete", tabindex: "0", role: "slider", ref: (mdcSlider) => { this.mdcSlider = mdcSlider; }, "aria-valuemin": this.min, "aria-valuemax": this.max, "aria-valuenow": this.value, "data-step": this.step, "aria-label": "Select Value" },
            h("div", { class: "mdc-slider__track-container" },
                h("div", { class: "mdc-slider__track" })),
            h("div", { class: "mdc-slider__thumb-container" },
                h("div", { class: "mdc-slider__pin" },
                    h("span", { class: "mdc-slider__pin-value-marker" })),
                h("svg", { class: "mdc-slider__thumb", width: "21", height: "21" },
                    h("circle", { cx: "10.5", cy: "10.5", r: "7.875" })),
                h("div", { class: "mdc-slider__focus-ring" }))));
    }
}

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cssClasses$11 = {
  ROOT: 'mdc-snackbar',
  TEXT: 'mdc-snackbar__text',
  ACTION_WRAPPER: 'mdc-snackbar__action-wrapper',
  ACTION_BUTTON: 'mdc-snackbar__action-button',
  ACTIVE: 'mdc-snackbar--active',
  MULTILINE: 'mdc-snackbar--multiline',
  ACTION_ON_BOTTOM: 'mdc-snackbar--action-on-bottom',
};

const strings$11 = {
  TEXT_SELECTOR: '.mdc-snackbar__text',
  ACTION_WRAPPER_SELECTOR: '.mdc-snackbar__action-wrapper',
  ACTION_BUTTON_SELECTOR: '.mdc-snackbar__action-button',
};

const numbers$4 = {
  MESSAGE_TIMEOUT: 2750,
};

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCSnackbarFoundation extends MDCFoundation {
  static get cssClasses() {
    return cssClasses$11;
  }

  static get strings() {
    return strings$11;
  }

  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      setAriaHidden: () => {},
      unsetAriaHidden: () => {},
      setActionAriaHidden: () => {},
      unsetActionAriaHidden: () => {},
      setActionText: (/* actionText: string */) => {},
      setMessageText: (/* message: string */) => {},
      setFocus: () => {},
      visibilityIsHidden: () => /* boolean */ false,
      registerCapturedBlurHandler: (/* handler: EventListener */) => {},
      deregisterCapturedBlurHandler: (/* handler: EventListener */) => {},
      registerVisibilityChangeHandler: (/* handler: EventListener */) => {},
      deregisterVisibilityChangeHandler: (/* handler: EventListener */) => {},
      registerCapturedInteractionHandler: (/* evtType: string, handler: EventListener */) => {},
      deregisterCapturedInteractionHandler: (/* evtType: string, handler: EventListener */) => {},
      registerActionClickHandler: (/* handler: EventListener */) => {},
      deregisterActionClickHandler: (/* handler: EventListener */) => {},
      registerTransitionEndHandler: (/* handler: EventListener */) => {},
      deregisterTransitionEndHandler: (/* handler: EventListener */) => {},
    };
  }

  get active() {
    return this.active_;
  }

  constructor(adapter) {
    super(Object.assign(MDCSnackbarFoundation.defaultAdapter, adapter));

    this.active_ = false;
    this.actionWasClicked_ = false;
    this.dismissOnAction_ = true;
    this.firstFocus_ = true;
    this.pointerDownRecognized_ = false;
    this.snackbarHasFocus_ = false;
    this.snackbarData_ = null;
    this.queue_ = [];
    this.actionClickHandler_ = () => {
      this.actionWasClicked_ = true;
      this.invokeAction_();
    };
    this.visibilitychangeHandler_ = () => {
      clearTimeout(this.timeoutId_);
      this.snackbarHasFocus_ = true;

      if (!this.adapter_.visibilityIsHidden()) {
        setTimeout(this.cleanup_.bind(this), this.snackbarData_.timeout || numbers$4.MESSAGE_TIMEOUT);
      }
    };
    this.interactionHandler_ = (evt) => {
      if (evt.type == 'touchstart' || evt.type == 'mousedown') {
        this.pointerDownRecognized_ = true;
      }
      this.handlePossibleTabKeyboardFocus_(evt);

      if (evt.type == 'focus') {
        this.pointerDownRecognized_ = false;
      }
    };
    this.blurHandler_ = () => {
      clearTimeout(this.timeoutId_);
      this.snackbarHasFocus_ = false;
      this.timeoutId_ = setTimeout(this.cleanup_.bind(this), this.snackbarData_.timeout || numbers$4.MESSAGE_TIMEOUT);
    };
  }

  init() {
    this.adapter_.registerActionClickHandler(this.actionClickHandler_);
    this.adapter_.setAriaHidden();
    this.adapter_.setActionAriaHidden();
  }

  destroy() {
    this.adapter_.deregisterActionClickHandler(this.actionClickHandler_);
    this.adapter_.deregisterCapturedBlurHandler(this.blurHandler_);
    this.adapter_.deregisterVisibilityChangeHandler(this.visibilitychangeHandler_);
    ['touchstart', 'mousedown', 'focus'].forEach((evtType) => {
      this.adapter_.deregisterCapturedInteractionHandler(evtType, this.interactionHandler_);
    });
  }

  dismissesOnAction() {
    return this.dismissOnAction_;
  }

  setDismissOnAction(dismissOnAction) {
    this.dismissOnAction_ = !!dismissOnAction;
  }

  show(data) {
    if (!data) {
      throw new Error(
        'Please provide a data object with at least a message to display.');
    }
    if (!data.message) {
      throw new Error('Please provide a message to be displayed.');
    }
    if (data.actionHandler && !data.actionText) {
      throw new Error('Please provide action text with the handler.');
    }
    if (this.active) {
      this.queue_.push(data);
      return;
    }
    clearTimeout(this.timeoutId_);
    this.snackbarData_ = data;
    this.firstFocus_ = true;
    this.adapter_.registerVisibilityChangeHandler(this.visibilitychangeHandler_);
    this.adapter_.registerCapturedBlurHandler(this.blurHandler_);
    ['touchstart', 'mousedown', 'focus'].forEach((evtType) => {
      this.adapter_.registerCapturedInteractionHandler(evtType, this.interactionHandler_);
    });

    const {ACTIVE, MULTILINE, ACTION_ON_BOTTOM} = cssClasses$11;

    this.adapter_.setMessageText(this.snackbarData_.message);

    if (this.snackbarData_.multiline) {
      this.adapter_.addClass(MULTILINE);
      if (this.snackbarData_.actionOnBottom) {
        this.adapter_.addClass(ACTION_ON_BOTTOM);
      }
    }

    if (this.snackbarData_.actionHandler) {
      this.adapter_.setActionText(this.snackbarData_.actionText);
      this.actionHandler_ = this.snackbarData_.actionHandler;
      this.setActionHidden_(false);
    } else {
      this.setActionHidden_(true);
      this.actionHandler_ = null;
      this.adapter_.setActionText(null);
    }

    this.active_ = true;
    this.adapter_.addClass(ACTIVE);
    this.adapter_.unsetAriaHidden();

    this.timeoutId_ = setTimeout(this.cleanup_.bind(this), this.snackbarData_.timeout || numbers$4.MESSAGE_TIMEOUT);
  }

  handlePossibleTabKeyboardFocus_() {
    const hijackFocus =
      this.firstFocus_ && !this.pointerDownRecognized_;

    if (hijackFocus) {
      this.setFocusOnAction_();
    }

    this.firstFocus_ = false;
  }

  setFocusOnAction_() {
    this.adapter_.setFocus();
    this.snackbarHasFocus_ = true;
    this.firstFocus_ = false;
  }

  invokeAction_() {
    try {
      if (!this.actionHandler_) {
        return;
      }

      this.actionHandler_();
    } finally {
      if (this.dismissOnAction_) {
        this.cleanup_();
      }
    }
  }

  cleanup_() {
    const allowDismissal = !this.snackbarHasFocus_ || this.actionWasClicked_;

    if (allowDismissal) {
      const {ACTIVE, MULTILINE, ACTION_ON_BOTTOM} = cssClasses$11;

      this.adapter_.removeClass(ACTIVE);

      const handler = () => {
        clearTimeout(this.timeoutId_);
        this.adapter_.deregisterTransitionEndHandler(handler);
        this.adapter_.removeClass(MULTILINE);
        this.adapter_.removeClass(ACTION_ON_BOTTOM);
        this.setActionHidden_(true);
        this.adapter_.setAriaHidden();
        this.active_ = false;
        this.snackbarHasFocus_ = false;
        this.showNext_();
      };

      this.adapter_.registerTransitionEndHandler(handler);
    }
  }

  showNext_() {
    if (!this.queue_.length) {
      return;
    }
    this.show(this.queue_.shift());
  }

  setActionHidden_(isHidden) {
    if (isHidden) {
      this.adapter_.setActionAriaHidden();
    } else {
      this.adapter_.unsetActionAriaHidden();
    }
  }
}

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCSnackbar extends MDCComponent {
  static attachTo(root) {
    return new MDCSnackbar(root);
  }

  show(data) {
    this.foundation_.show(data);
  }

  getDefaultFoundation() {
    const {
      TEXT_SELECTOR,
      ACTION_BUTTON_SELECTOR,
    } = MDCSnackbarFoundation.strings;
    const getText = () => this.root_.querySelector(TEXT_SELECTOR);
    const getActionButton = () => this.root_.querySelector(ACTION_BUTTON_SELECTOR);

    /* eslint brace-style: "off" */
    return new MDCSnackbarFoundation({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      setAriaHidden: () => this.root_.setAttribute('aria-hidden', 'true'),
      unsetAriaHidden: () => this.root_.removeAttribute('aria-hidden'),
      setActionAriaHidden: () => getActionButton().setAttribute('aria-hidden', 'true'),
      unsetActionAriaHidden: () => getActionButton().removeAttribute('aria-hidden'),
      setActionText: (text) => { getActionButton().textContent = text; },
      setMessageText: (text) => { getText().textContent = text; },
      setFocus: () => getActionButton().focus(),
      visibilityIsHidden: () => document.hidden,
      registerCapturedBlurHandler: (handler) => getActionButton().addEventListener('blur', handler, true),
      deregisterCapturedBlurHandler: (handler) => getActionButton().removeEventListener('blur', handler, true),
      registerVisibilityChangeHandler: (handler) => document.addEventListener('visibilitychange', handler),
      deregisterVisibilityChangeHandler: (handler) => document.removeEventListener('visibilitychange', handler),
      registerCapturedInteractionHandler: (evt, handler) =>
        document.body.addEventListener(evt, handler, true),
      deregisterCapturedInteractionHandler: (evt, handler) =>
        document.body.removeEventListener(evt, handler, true),
      registerActionClickHandler: (handler) => getActionButton().addEventListener('click', handler),
      deregisterActionClickHandler: (handler) => getActionButton().removeEventListener('click', handler),
      registerTransitionEndHandler:
        (handler) => this.root_.addEventListener(getCorrectEventName(window, 'transitionend'), handler),
      deregisterTransitionEndHandler:
        (handler) => this.root_.removeEventListener(getCorrectEventName(window, 'transitionend'), handler),
    });
  }

  get dismissesOnAction() {
    return this.foundation_.dismissesOnAction();
  }

  set dismissesOnAction(dismissesOnAction) {
    this.foundation_.setDismissOnAction(dismissesOnAction);
  }
}

class MWCSnackbar {
    constructor() {
        this.message = '';
        this.timeout = 1000;
        this.actiontext = '';
        this.multiline = false;
        this.actiononbutton = false;
        this.dismissesonaction = true;
        this.backgroundcolor = "#000000";
        this.actioncolor = "#ff0ff0";
        this.messagecolor = "#ffffff";
    }
    show() {
        const dataObj = {
            message: this.message,
            actionText: this.actiontext,
            multiline: this.multiline,
            timeout: this.timeout,
            actionOnBottom: this.multiline && this.actiononbutton,
            actionHandler: () => {
                this.actionhandler.emit();
            }
        };
        this.mdcSnackComponent.show(dataObj);
    }
    getStyleNode() {
        var styleNode = document.createElement('style');
        styleNode.type = "text/css";
        let bgClass;
        if (this.backgroundcolor) {
            bgClass = `.webmd-snackbar{
                    background-color: ${this.backgroundcolor} !important;
                }`;
        }
        if (this.messagecolor) {
            bgClass = `${bgClass} .mdc-snackbar__text{
                 color: ${this.messagecolor} !important
            }`;
        }
        var styleText = document.createTextNode(bgClass);
        styleNode.appendChild(styleText);
        this.elStyleNode = styleNode;
        this.snackBarEl.appendChild(this.elStyleNode);
    }
    componentWillLoad() {
        if (this.actioncolor) {
            this.snackBarEl.style.setProperty('--mdc-theme-secondary', this.actioncolor);
        }
    }
    componentDidLoad() {
        this.mdcSnackComponent = MDCSnackbar.attachTo(this.mdcSnackBar);
        this.mdcSnackComponent.dismissesOnAction = this.dismissesonaction;
        if (this.backgroundcolor || this.messagecolor) {
            this.getStyleNode();
        }
    }
    componentDidUnload() {
        if (this.backgroundcolor || this.messagecolor) {
            this.snackBarEl.removeChild(this.elStyleNode);
        }
    }
    render() {
        return (h("div", { class: "mdc-snackbar webmd-snackbar", "aria-live": "assertive", "aria-atomic": "true", "aria-hidden": "true", ref: (mdcSnackBar) => { this.mdcSnackBar = mdcSnackBar; } },
            h("div", { class: "mdc-snackbar__text" }),
            h("div", { class: "mdc-snackbar__action-wrapper" },
                h("button", { type: "button", class: "mdc-snackbar__action-button" }))));
    }
}

class MWCSwitch {
    constructor() {
        this.checked = false;
        this.switchcolor = '';
        this.label = 'on/off';
        this.labelposition = 'right';
        this.disabled = false;
    }
    componentWillLoad() {
        if (this.switchcolor) {
            this.switchEl.style.setProperty('--mdc-theme-secondary', this.switchcolor);
        }
    }
    renderLabel() {
        if (this.label) {
            return h("label", { htmlFor: "basic-switch", class: "mdc-switch-label" }, this.label);
        }
        return null;
    }
    getDivClassName() {
        let className = '';
        if (this.labelposition == "left") {
            className = "mdc-switch-reverse";
        }
        else {
            className = "mdc-switch";
        }
        return className;
    }
    getSwitchClassName() {
        let className = 'mdc-switch';
        if (this.disabled) {
            className = `${className} mdc-switch--disabled`;
        }
        return className;
    }
    render() {
        return (h("div", { class: this.getDivClassName() },
            h("div", { class: this.getSwitchClassName(), ref: (mdcSwitch) => { this.mdcSwitch = mdcSwitch; } },
                h("input", { type: "checkbox", checked: this.checked, disabled: this.disabled, class: "mdc-switch__native-control" }),
                h("div", { class: "mdc-switch__background" },
                    h("div", { class: "mdc-switch__knob" }))),
            this.renderLabel()));
    }
}

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const cssClasses$12 = {
  ACTIVE: 'mdc-tab--active',
};

const strings$12 = {
  SELECTED_EVENT: 'MDCTab:selected',
};

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCTabFoundation extends MDCFoundation {
  static get cssClasses() {
    return cssClasses$12;
  }

  static get strings() {
    return strings$12;
  }

  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      registerInteractionHandler: (/* type: string, handler: EventListener */) => {},
      deregisterInteractionHandler: (/* type: string, handler: EventListener */) => {},
      getOffsetWidth: () => /* number */ 0,
      getOffsetLeft: () => /* number */ 0,
      notifySelected: () => {},
    };
  }

  constructor(adapter = {}) {
    super(Object.assign(MDCTabFoundation.defaultAdapter, adapter));

    this.computedWidth_ = 0;
    this.computedLeft_ = 0;
    this.isActive_ = false;
    this.preventDefaultOnClick_ = false;

    this.clickHandler_ = (evt) => {
      if (this.preventDefaultOnClick_) {
        evt.preventDefault();
      }
      this.adapter_.notifySelected();
    };

    this.keydownHandler_ = (evt) => {
      if (evt.key && evt.key === 'Enter' || evt.keyCode === 13) {
        this.adapter_.notifySelected();
      }
    };
  }

  init() {
    this.adapter_.registerInteractionHandler('click', this.clickHandler_);
    this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
  }

  destroy() {
    this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
    this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
  }

  getComputedWidth() {
    return this.computedWidth_;
  }

  getComputedLeft() {
    return this.computedLeft_;
  }

  isActive() {
    return this.isActive_;
  }

  setActive(isActive) {
    this.isActive_ = isActive;
    if (this.isActive_) {
      this.adapter_.addClass(cssClasses$12.ACTIVE);
    } else {
      this.adapter_.removeClass(cssClasses$12.ACTIVE);
    }
  }

  preventsDefaultOnClick() {
    return this.preventDefaultOnClick_;
  }

  setPreventDefaultOnClick(preventDefaultOnClick) {
    this.preventDefaultOnClick_ = preventDefaultOnClick;
  }

  measureSelf() {
    this.computedWidth_ = this.adapter_.getOffsetWidth();
    this.computedLeft_ = this.adapter_.getOffsetLeft();
  }
}

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCTab extends MDCComponent {
  static attachTo(root) {
    return new MDCTab(root);
  }

  get computedWidth() {
    return this.foundation_.getComputedWidth();
  }

  get computedLeft() {
    return this.foundation_.getComputedLeft();
  }

  get isActive() {
    return this.foundation_.isActive();
  }

  set isActive(isActive) {
    this.foundation_.setActive(isActive);
  }

  get preventDefaultOnClick() {
    return this.foundation_.preventsDefaultOnClick();
  }

  set preventDefaultOnClick(preventDefaultOnClick) {
    this.foundation_.setPreventDefaultOnClick(preventDefaultOnClick);
  }

  constructor(...args) {
    super(...args);

    this.ripple_ = MDCRipple.attachTo(this.root_);
  }

  destroy() {
    this.ripple_.destroy();
    super.destroy();
  }

  getDefaultFoundation() {
    return new MDCTabFoundation({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      registerInteractionHandler: (type, handler) => this.root_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.root_.removeEventListener(type, handler),
      getOffsetWidth: () => this.root_.offsetWidth,
      getOffsetLeft: () => this.root_.offsetLeft,
      notifySelected: () => this.emit(MDCTabFoundation.strings.SELECTED_EVENT, {tab: this}, true),
    });
  }

  initialSyncWithDOM() {
    this.isActive = this.root_.classList.contains(cssClasses$12.ACTIVE);
  }

  measureSelf() {
    this.foundation_.measureSelf();
  }
}

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const cssClasses$13 = {
  UPGRADED: 'mdc-tab-bar-upgraded',
};

const strings$13 = {
  TAB_SELECTOR: '.mdc-tab',
  INDICATOR_SELECTOR: '.mdc-tab-bar__indicator',
  CHANGE_EVENT: 'MDCTabBar:change',
};

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCTabBarFoundation extends MDCFoundation {
  static get cssClasses() {
    return cssClasses$13;
  }

  static get strings() {
    return strings$13;
  }

  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      bindOnMDCTabSelectedEvent: () => {},
      unbindOnMDCTabSelectedEvent: () => {},
      registerResizeHandler: (/* handler: EventListener */) => {},
      deregisterResizeHandler: (/* handler: EventListener */) => {},
      getOffsetWidth: () => /* number */ 0,
      setStyleForIndicator: (/* propertyName: string, value: string */) => {},
      getOffsetWidthForIndicator: () => /* number */ 0,
      notifyChange: (/* evtData: {activeTabIndex: number} */) => {},
      getNumberOfTabs: () => /* number */ 0,
      isTabActiveAtIndex: (/* index: number */) => /* boolean */ false,
      setTabActiveAtIndex: (/* index: number, isActive: true */) => {},
      isDefaultPreventedOnClickForTabAtIndex: (/* index: number */) => /* boolean */ false,
      setPreventDefaultOnClickForTabAtIndex: (/* index: number, preventDefaultOnClick: boolean */) => {},
      measureTabAtIndex: (/* index: number */) => {},
      getComputedWidthForTabAtIndex: (/* index: number */) => /* number */ 0,
      getComputedLeftForTabAtIndex: (/* index: number */) => /* number */ 0,
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCTabBarFoundation.defaultAdapter, adapter));

    this.isIndicatorShown_ = false;
    this.computedWidth_ = 0;
    this.computedLeft_ = 0;
    this.activeTabIndex_ = 0;
    this.layoutFrame_ = 0;
    this.resizeHandler_ = () => this.layout();
  }

  init() {
    this.adapter_.addClass(cssClasses$13.UPGRADED);
    this.adapter_.bindOnMDCTabSelectedEvent();
    this.adapter_.registerResizeHandler(this.resizeHandler_);
    const activeTabIndex = this.findActiveTabIndex_();
    if (activeTabIndex >= 0) {
      this.activeTabIndex_ = activeTabIndex;
    }
    this.layout();
  }

  destroy() {
    this.adapter_.removeClass(cssClasses$13.UPGRADED);
    this.adapter_.unbindOnMDCTabSelectedEvent();
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
  }

  layoutInternal_() {
    this.forEachTabIndex_((index) => this.adapter_.measureTabAtIndex(index));
    this.computedWidth_ = this.adapter_.getOffsetWidth();
    this.layoutIndicator_();
  }

  layoutIndicator_() {
    const isIndicatorFirstRender = !this.isIndicatorShown_;

    // Ensure that indicator appears in the right position immediately for correct first render.
    if (isIndicatorFirstRender) {
      this.adapter_.setStyleForIndicator('transition', 'none');
    }

    const translateAmtForActiveTabLeft = this.adapter_.getComputedLeftForTabAtIndex(this.activeTabIndex_);
    const scaleAmtForActiveTabWidth =
      this.adapter_.getComputedWidthForTabAtIndex(this.activeTabIndex_) / this.adapter_.getOffsetWidth();

    const transformValue = `translateX(${translateAmtForActiveTabLeft}px) scale(${scaleAmtForActiveTabWidth}, 1)`;
    this.adapter_.setStyleForIndicator(getCorrectPropertyName(window, 'transform'), transformValue);

    if (isIndicatorFirstRender) {
      // Force layout so that transform styles to take effect.
      this.adapter_.getOffsetWidthForIndicator();
      this.adapter_.setStyleForIndicator('transition', '');
      this.adapter_.setStyleForIndicator('visibility', 'visible');
      this.isIndicatorShown_ = true;
    }
  }

  findActiveTabIndex_() {
    let activeTabIndex = -1;
    this.forEachTabIndex_((index) => {
      if (this.adapter_.isTabActiveAtIndex(index)) {
        activeTabIndex = index;
        return true;
      }
    });
    return activeTabIndex;
  }

  forEachTabIndex_(iterator) {
    const numTabs = this.adapter_.getNumberOfTabs();
    for (let index = 0; index < numTabs; index++) {
      const shouldBreak = iterator(index);
      if (shouldBreak) {
        break;
      }
    }
  }

  layout() {
    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }

    this.layoutFrame_ = requestAnimationFrame(() => {
      this.layoutInternal_();
      this.layoutFrame_ = 0;
    });
  }

  switchToTabAtIndex(index, shouldNotify) {
    if (index === this.activeTabIndex_) {
      return;
    }

    if (index < 0 || index >= this.adapter_.getNumberOfTabs()) {
      throw new Error(`Out of bounds index specified for tab: ${index}`);
    }

    const prevActiveTabIndex = this.activeTabIndex_;
    this.activeTabIndex_ = index;
    requestAnimationFrame(() => {
      if (prevActiveTabIndex >= 0) {
        this.adapter_.setTabActiveAtIndex(prevActiveTabIndex, false);
      }
      this.adapter_.setTabActiveAtIndex(this.activeTabIndex_, true);
      this.layoutIndicator_();
      if (shouldNotify) {
        this.adapter_.notifyChange({activeTabIndex: this.activeTabIndex_});
      }
    });
  }

  getActiveTabIndex() {
    return this.findActiveTabIndex_();
  }
}

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCTabBar extends MDCComponent {
  static attachTo(root) {
    return new MDCTabBar(root);
  }

  get tabs() {
    return this.tabs_;
  }

  get activeTab() {
    const activeIndex = this.foundation_.getActiveTabIndex();
    return this.tabs[activeIndex];
  }

  set activeTab(tab) {
    this.setActiveTab_(tab, false);
  }

  get activeTabIndex() {
    return this.foundation_.getActiveTabIndex();
  }

  set activeTabIndex(index) {
    this.setActiveTabIndex_(index, false);
  }

  initialize(tabFactory = (el) => new MDCTab(el)) {
    this.indicator_ = this.root_.querySelector(MDCTabBarFoundation.strings.INDICATOR_SELECTOR);
    this.tabs_ = this.gatherTabs_(tabFactory);
    this.tabSelectedHandler_ = ({detail}) => {
      const {tab} = detail;
      this.setActiveTab_(tab, true);
    };
  }

  getDefaultFoundation() {
    return new MDCTabBarFoundation({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      bindOnMDCTabSelectedEvent: () => this.listen(
        MDCTabFoundation.strings.SELECTED_EVENT, this.tabSelectedHandler_),
      unbindOnMDCTabSelectedEvent: () => this.unlisten(
        MDCTabFoundation.strings.SELECTED_EVENT, this.tabSelectedHandler_),
      registerResizeHandler: (handler) => window.addEventListener('resize', handler),
      deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
      getOffsetWidth: () => this.root_.offsetWidth,
      setStyleForIndicator: (propertyName, value) => this.indicator_.style.setProperty(propertyName, value),
      getOffsetWidthForIndicator: () => this.indicator_.offsetWidth,
      notifyChange: (evtData) => this.emit(MDCTabBarFoundation.strings.CHANGE_EVENT, evtData),
      getNumberOfTabs: () => this.tabs.length,
      isTabActiveAtIndex: (index) => this.tabs[index].isActive,
      setTabActiveAtIndex: (index, isActive) => {
        this.tabs[index].isActive = isActive;
      },
      isDefaultPreventedOnClickForTabAtIndex: (index) => this.tabs[index].preventDefaultOnClick,
      setPreventDefaultOnClickForTabAtIndex: (index, preventDefaultOnClick) => {
        this.tabs[index].preventDefaultOnClick = preventDefaultOnClick;
      },
      measureTabAtIndex: (index) => this.tabs[index].measureSelf(),
      getComputedWidthForTabAtIndex: (index) => this.tabs[index].computedWidth,
      getComputedLeftForTabAtIndex: (index) => this.tabs[index].computedLeft,
    });
  }

  gatherTabs_(tabFactory) {
    const tabElements = [].slice.call(this.root_.querySelectorAll(MDCTabBarFoundation.strings.TAB_SELECTOR));
    return tabElements.map((el) => tabFactory(el));
  }

  setActiveTabIndex_(activeTabIndex, notifyChange) {
    this.foundation_.switchToTabAtIndex(activeTabIndex, notifyChange);
  }

  layout() {
    this.foundation_.layout();
  }

  setActiveTab_(activeTab, notifyChange) {
    const indexOfTab = this.tabs.indexOf(activeTab);
    if (indexOfTab < 0) {
      throw new Error('Invalid tab component given as activeTab: Tab not found within this component\'s tab list');
    }
    this.setActiveTabIndex_(indexOfTab, notifyChange);
  }
}

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const cssClasses$14 = {
  INDICATOR_FORWARD: 'mdc-tab-bar-scroller__indicator--forward',
  INDICATOR_BACK: 'mdc-tab-bar-scroller__indicator--back',
  INDICATOR_ENABLED: 'mdc-tab-bar-scroller__indicator--enabled',
  TAB: 'mdc-tab',
};

const strings$14 = {
  FRAME_SELECTOR: '.mdc-tab-bar-scroller__scroll-frame',
  TABS_SELECTOR: '.mdc-tab-bar-scroller__scroll-frame__tabs',
  TAB_SELECTOR: '.mdc-tab',
  INDICATOR_FORWARD_SELECTOR: '.mdc-tab-bar-scroller__indicator--forward',
  INDICATOR_BACK_SELECTOR: '.mdc-tab-bar-scroller__indicator--back',
};

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


class MDCTabBarScrollerFoundation extends MDCFoundation {
  static get cssClasses() {
    return cssClasses$14;
  }

  static get strings() {
    return strings$14;
  }

  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      eventTargetHasClass: (/* target: EventTarget, className: string */) => /* boolean */ false,
      addClassToForwardIndicator: (/* className: string */) => {},
      removeClassFromForwardIndicator: (/* className: string */) => {},
      addClassToBackIndicator: (/* className: string */) => {},
      removeClassFromBackIndicator: (/* className: string */) => {},
      isRTL: () => /* boolean */ false,
      registerBackIndicatorClickHandler: (/* handler: EventListener */) => {},
      deregisterBackIndicatorClickHandler: (/* handler: EventListener */) => {},
      registerForwardIndicatorClickHandler: (/* handler: EventListener */) => {},
      deregisterForwardIndicatorClickHandler: (/* handler: EventListener */) => {},
      registerCapturedInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      deregisterCapturedInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      registerWindowResizeHandler: (/* handler: EventListener */) => {},
      deregisterWindowResizeHandler: (/* handler: EventListener */) => {},
      getNumberOfTabs: () => /* number */ 0,
      getComputedWidthForTabAtIndex: () => /* number */ 0,
      getComputedLeftForTabAtIndex: () => /* number */ 0,
      getOffsetWidthForScrollFrame: () => /* number */ 0,
      getScrollLeftForScrollFrame: () => /* number */ 0,
      setScrollLeftForScrollFrame: (/* scrollLeftAmount: number */) => {},
      getOffsetWidthForTabBar: () => /* number */ 0,
      setTransformStyleForTabBar: (/* value: string */) => {},
      getOffsetLeftForEventTarget: (/* target: EventTarget */) => /* number */ 0,
      getOffsetWidthForEventTarget: (/* target: EventTarget */) => /* number */ 0,
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCTabBarScrollerFoundation.defaultAdapter, adapter));

    this.pointerDownRecognized_ = false;
    this.currentTranslateOffset_ = 0;
    this.focusedTarget_ = null;
    this.layoutFrame_ = 0;
    this.scrollFrameScrollLeft_ = 0;
    this.forwardIndicatorClickHandler_ = (evt) => this.scrollForward(evt);
    this.backIndicatorClickHandler_ = (evt) => this.scrollBack(evt);
    this.resizeHandler_ = () => this.layout();
    this.interactionHandler_ = (evt) => {
      if (evt.type == 'touchstart' || evt.type == 'mousedown') {
        this.pointerDownRecognized_ = true;
      }
      this.handlePossibleTabKeyboardFocus_(evt);

      if (evt.type == 'focus') {
        this.pointerDownRecognized_ = false;
      }
    };
  }

  init() {
    this.adapter_.registerBackIndicatorClickHandler(this.backIndicatorClickHandler_);
    this.adapter_.registerForwardIndicatorClickHandler(this.forwardIndicatorClickHandler_);
    this.adapter_.registerWindowResizeHandler(this.resizeHandler_);
    ['touchstart', 'mousedown', 'focus'].forEach((evtType) => {
      this.adapter_.registerCapturedInteractionHandler(evtType, this.interactionHandler_);
    });
    this.layout();
  }

  destroy() {
    this.adapter_.deregisterBackIndicatorClickHandler(this.backIndicatorClickHandler_);
    this.adapter_.deregisterForwardIndicatorClickHandler(this.forwardIndicatorClickHandler_);
    this.adapter_.deregisterWindowResizeHandler(this.resizeHandler_);
    ['touchstart', 'mousedown', 'focus'].forEach((evtType) => {
      this.adapter_.deregisterCapturedInteractionHandler(evtType, this.interactionHandler_);
    });
  }

  scrollBack(evt = null) {
    if (evt) {
      evt.preventDefault();
    }

    let tabWidthAccumulator = 0;
    let scrollTargetIndex = 0;

    for (let i = this.adapter_.getNumberOfTabs() - 1; i > 0; i--) {
      const tabOffsetLeft = this.adapter_.getComputedLeftForTabAtIndex(i);
      const tabBarWidthLessTabOffsetLeft = this.adapter_.getOffsetWidthForTabBar() - tabOffsetLeft;

      let tabIsNotOccluded = tabOffsetLeft > this.currentTranslateOffset_;
      if (this.isRTL_()) {
        tabIsNotOccluded = tabBarWidthLessTabOffsetLeft > this.currentTranslateOffset_;
      }

      if (tabIsNotOccluded) {
        continue;
      }

      tabWidthAccumulator += this.adapter_.getComputedWidthForTabAtIndex(i);

      const scrollTargetDetermined = tabWidthAccumulator > this.adapter_.getOffsetWidthForScrollFrame();
      if (scrollTargetDetermined) {
        scrollTargetIndex = this.isRTL_() ? i + 1 : i;
        break;
      }
    }

    this.scrollToTabAtIndex(scrollTargetIndex);
  }

  scrollForward(evt = null) {
    if (evt) {
      evt.preventDefault();
    }

    const scrollFrameOffsetWidth = this.adapter_.getOffsetWidthForScrollFrame() + this.currentTranslateOffset_;
    let scrollTargetIndex = 0;

    for (let i = 0; i < this.adapter_.getNumberOfTabs(); i++) {
      const tabOffsetLeftAndWidth =
        this.adapter_.getComputedLeftForTabAtIndex(i) + this.adapter_.getComputedWidthForTabAtIndex(i);
      let scrollTargetDetermined = tabOffsetLeftAndWidth > scrollFrameOffsetWidth;

      if (this.isRTL_()) {
        const frameOffsetAndTabWidth =
          scrollFrameOffsetWidth - this.adapter_.getComputedWidthForTabAtIndex(i);
        const tabOffsetLeftAndWidth =
          this.adapter_.getComputedLeftForTabAtIndex(i) + this.adapter_.getComputedWidthForTabAtIndex(i);
        const tabRightOffset =
          this.adapter_.getOffsetWidthForTabBar() - tabOffsetLeftAndWidth;

        scrollTargetDetermined = tabRightOffset > frameOffsetAndTabWidth;
      }

      if (scrollTargetDetermined) {
        scrollTargetIndex = i;
        break;
      }
    }

    this.scrollToTabAtIndex(scrollTargetIndex);
  }

  layout() {
    cancelAnimationFrame(this.layoutFrame_);
    this.scrollFrameScrollLeft_ = this.adapter_.getScrollLeftForScrollFrame();
    this.layoutFrame_ = requestAnimationFrame(() => this.layout_());
  }

  isRTL_() {
    return this.adapter_.isRTL();
  }

  handlePossibleTabKeyboardFocus_(evt) {
    if (!this.adapter_.eventTargetHasClass(evt.target, cssClasses$14.TAB) || this.pointerDownRecognized_) {
      return;
    }

    const resetAmt = this.isRTL_() ? this.scrollFrameScrollLeft_ : 0;
    this.adapter_.setScrollLeftForScrollFrame(resetAmt);

    this.focusedTarget_ = evt.target;
    const scrollFrameWidth = this.adapter_.getOffsetWidthForScrollFrame();
    const tabBarWidth = this.adapter_.getOffsetWidthForTabBar();
    const leftEdge = this.adapter_.getOffsetLeftForEventTarget(this.focusedTarget_);
    const rightEdge = leftEdge + this.adapter_.getOffsetWidthForEventTarget(this.focusedTarget_);

    let shouldScrollBack = rightEdge <= this.currentTranslateOffset_;
    let shouldScrollForward = rightEdge > this.currentTranslateOffset_ + scrollFrameWidth;

    if (this.isRTL_()) {
      const normalizedLeftOffset = tabBarWidth - leftEdge;
      shouldScrollBack = leftEdge >= tabBarWidth - this.currentTranslateOffset_;
      shouldScrollForward = normalizedLeftOffset > scrollFrameWidth + this.currentTranslateOffset_;
    }

    if (shouldScrollForward) {
      this.scrollForward();
    } else if (shouldScrollBack) {
      this.scrollBack();
    }

    this.pointerDownRecognized_ = false;
  }

  layout_() {
    const frameWidth = this.adapter_.getOffsetWidthForScrollFrame();
    const isOverflowing = this.adapter_.getOffsetWidthForTabBar() > frameWidth;

    if (!isOverflowing) {
      this.currentTranslateOffset_ = 0;
    }

    this.shiftFrame_();
    this.updateIndicatorEnabledStates_();
  }

  scrollToTabAtIndex(index) {
    const scrollTargetOffsetLeft = this.adapter_.getComputedLeftForTabAtIndex(index);
    const scrollTargetOffsetWidth = this.adapter_.getComputedWidthForTabAtIndex(index);

    this.currentTranslateOffset_ =
      this.normalizeForRTL_(scrollTargetOffsetLeft, scrollTargetOffsetWidth);

    requestAnimationFrame(() => this.shiftFrame_());
  }

  normalizeForRTL_(left, width) {
    return this.isRTL_() ? this.adapter_.getOffsetWidthForTabBar() - (left + width) : left;
  }

  shiftFrame_() {
    const shiftAmount = this.isRTL_() ?
      this.currentTranslateOffset_ : -this.currentTranslateOffset_;

    this.adapter_.setTransformStyleForTabBar(`translateX(${shiftAmount}px)`);
    this.updateIndicatorEnabledStates_();
  }

  updateIndicatorEnabledStates_() {
    const {INDICATOR_ENABLED} = cssClasses$14;
    if (this.currentTranslateOffset_ === 0) {
      this.adapter_.removeClassFromBackIndicator(INDICATOR_ENABLED);
    } else {
      this.adapter_.addClassToBackIndicator(INDICATOR_ENABLED);
    }

    const remainingTabBarWidth = this.adapter_.getOffsetWidthForTabBar() - this.currentTranslateOffset_;
    if (remainingTabBarWidth > this.adapter_.getOffsetWidthForScrollFrame()) {
      this.adapter_.addClassToForwardIndicator(INDICATOR_ENABLED);
    } else {
      this.adapter_.removeClassFromForwardIndicator(INDICATOR_ENABLED);
    }
  }
}

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCTabBarScroller extends MDCComponent {
  static attachTo(root) {
    return new MDCTabBarScroller(root);
  }

  get tabBar() {
    return this.tabBar_;
  }

  initialize(tabBarFactory = (root) => new MDCTabBar(root)) {
    this.scrollFrame_ = this.root_.querySelector(MDCTabBarScrollerFoundation.strings.FRAME_SELECTOR);
    this.tabBarEl_ = this.root_.querySelector(MDCTabBarScrollerFoundation.strings.TABS_SELECTOR);
    this.forwardIndicator_ = this.root_.querySelector(MDCTabBarScrollerFoundation.strings.INDICATOR_FORWARD_SELECTOR);
    this.backIndicator_ = this.root_.querySelector(MDCTabBarScrollerFoundation.strings.INDICATOR_BACK_SELECTOR);
    this.tabBar_ = tabBarFactory(this.tabBarEl_);
  }

  getDefaultFoundation() {
    return new MDCTabBarScrollerFoundation({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      eventTargetHasClass: (target, className) => target.classList.contains(className),
      addClassToForwardIndicator: (className) => this.forwardIndicator_.classList.add(className),
      removeClassFromForwardIndicator: (className) => this.forwardIndicator_.classList.remove(className),
      addClassToBackIndicator: (className) => this.backIndicator_.classList.add(className),
      removeClassFromBackIndicator: (className) => this.backIndicator_.classList.remove(className),
      isRTL: () =>
        getComputedStyle(this.root_).getPropertyValue('direction') === 'rtl',
      registerBackIndicatorClickHandler: (handler) =>
        this.backIndicator_.addEventListener('click', handler),
      deregisterBackIndicatorClickHandler: (handler) =>
        this.backIndicator_.removeEventListener('click', handler),
      registerForwardIndicatorClickHandler: (handler) =>
        this.forwardIndicator_.addEventListener('click', handler),
      deregisterForwardIndicatorClickHandler: (handler) =>
        this.forwardIndicator_.removeEventListener('click', handler),
      registerCapturedInteractionHandler: (evt, handler) =>
        this.root_.addEventListener(evt, handler, true),
      deregisterCapturedInteractionHandler: (evt, handler) =>
        this.root_.removeEventListener(evt, handler, true),
      registerWindowResizeHandler: (handler) =>
        window.addEventListener('resize', handler),
      deregisterWindowResizeHandler: (handler) =>
        window.removeEventListener('resize', handler),
      getNumberOfTabs: () => this.tabBar.tabs.length,
      getComputedWidthForTabAtIndex: (index) => this.tabBar.tabs[index].computedWidth,
      getComputedLeftForTabAtIndex: (index) => this.tabBar.tabs[index].computedLeft,
      getOffsetWidthForScrollFrame: () => this.scrollFrame_.offsetWidth,
      getScrollLeftForScrollFrame: () => this.scrollFrame_.scrollLeft,
      setScrollLeftForScrollFrame: (scrollLeftAmount) => this.scrollFrame_.scrollLeft = scrollLeftAmount,
      getOffsetWidthForTabBar: () => this.tabBarEl_.offsetWidth,
      setTransformStyleForTabBar: (value) => {
        this.tabBarEl_.style.setProperty(getCorrectPropertyName(window, 'transform'), value);
      },
      getOffsetLeftForEventTarget: (target) => target.offsetLeft,
      getOffsetWidthForEventTarget: (target) => target.offsetWidth,
    });
  }

  layout() {
    this.foundation_.layout();
  }
}

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MWCTabbar {
    constructor() {
        this.activeindex = 0;
        this.scroller = false;
        this.tabs = [
            { label: 'Recents', icon: 'phone' },
            { label: 'Favorites', icon: 'favorite' },
            { label: 'Nearby', icon: 'person_pin' }
        ];
        this.iconTabBar = false;
        this.textTabBar = false;
    }
    componentWillLoad() {
        if (this.tabs[0].icon) {
            this.iconTabBar = true;
        }
        if (this.tabs[0].label) {
            this.textTabBar = true;
        }
    }
    componentDidLoad() {
        if (this.scroller) {
            this.mdcTabBarComponent = MDCTabBarScroller.attachTo(this.mdcTabBarScroller);
        }
        else {
            this.mdcTabBarComponent = MDCTabBar.attachTo(this.mdcTabBar);
        }
        this.mdcTabBarComponent.listen('MDCTabBar:change', ({ detail: tabs }) => {
            this.change.emit(tabs);
        });
    }
    getTabBarClassName() {
        let className = 'mdc-tab-bar';
        if (this.iconTabBar) {
            className = `${className} mdc-tab-bar--icons-with-text`;
        }
        if (this.scroller) {
            className = `${className} mdc-tab-bar-scroller__scroll-frame__tabs`;
        }
        return className;
    }
    getTabClassName(index) {
        let className = 'mdc-tab';
        if (this.iconTabBar && this.textTabBar) {
            className = `${className} mdc-tab--with-icon-and-text`;
        }
        else if (this.iconTabBar) {
            className = `${className} mdc-tab-bar--icon-tab-bar`;
        }
        if (index === this.activeindex) {
            className = `${className} mdc-tab--active`;
        }
        return className;
    }
    renderText(tab) {
        if (this.iconTabBar) {
            return (h("span", { class: "mdc-tab__icon-text" }, tab.label));
        }
        return tab.label;
    }
    renderIcon(tab) {
        if (this.iconTabBar) {
            return (h("i", { class: "material-icons mdc-tab__icon", "aria-hidden": "true" }, tab.icon));
        }
        return null;
    }
    renderNavigation() {
        return (h("nav", { class: this.getTabBarClassName(), ref: (mdcTabBar) => { this.mdcTabBar = mdcTabBar; } },
            this.tabs.map((tab, index) => {
                return (h("a", { class: this.getTabClassName(index) },
                    this.renderIcon(tab),
                    this.renderText(tab)));
            }),
            h("span", { class: "mdc-tab-bar__indicator" })));
    }
    renderScrollerNavigation() {
        if (this.scroller) {
            return (h("div", { class: "mdc-tab-bar-scroller", ref: (mdcTabBarScroller) => { this.mdcTabBarScroller = mdcTabBarScroller; } },
                h("div", { class: "mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--back" },
                    h("a", { class: "mdc-tab-bar-scroller__indicator__inner material-icons", href: "#", "aria-label": "scroll back button" }, "navigate_before")),
                h("div", { class: "mdc-tab-bar-scroller__scroll-frame" }, this.renderNavigation()),
                h("div", { class: "mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--forward" },
                    h("a", { class: "mdc-tab-bar-scroller__indicator__inner material-icons", href: "#", "aria-label": "scroll forward button" }, "navigate_next"))));
        }
        return this.renderNavigation();
    }
    render() {
        return this.renderScrollerNavigation();
    }
}

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
const strings$15 = {
  ARIA_CONTROLS: 'aria-controls',
  INPUT_SELECTOR: '.mdc-text-field__input',
  LABEL_SELECTOR: '.mdc-text-field__label',
  ICON_SELECTOR: '.mdc-text-field__icon',
  ICON_EVENT: 'MDCTextField:icon',
  BOTTOM_LINE_SELECTOR: '.mdc-text-field__bottom-line',
};

/** @enum {string} */
const cssClasses$15 = {
  ROOT: 'mdc-text-field',
  UPGRADED: 'mdc-text-field--upgraded',
  DISABLED: 'mdc-text-field--disabled',
  FOCUSED: 'mdc-text-field--focused',
  INVALID: 'mdc-text-field--invalid',
  LABEL_FLOAT_ABOVE: 'mdc-text-field__label--float-above',
  LABEL_SHAKE: 'mdc-text-field__label--shake',
  BOX: 'mdc-text-field--box',
  TEXT_FIELD_ICON: 'mdc-text-field__icon',
  TEXTAREA: 'mdc-text-field--textarea',
};

/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC TextField Bottom Line.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the TextField bottom line into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */

/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
const strings$16 = {
  ANIMATION_END_EVENT: 'MDCTextFieldBottomLine:animation-end',
};

/** @enum {string} */
const cssClasses$16 = {
  BOTTOM_LINE_ACTIVE: 'mdc-text-field__bottom-line--active',
};

/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @extends {MDCFoundation<!MDCTextFieldBottomLineAdapter>}
 * @final
 */
class MDCTextFieldBottomLineFoundation extends MDCFoundation {
  /** @return enum {string} */
  static get cssClasses() {
    return cssClasses$16;
  }

  /** @return enum {string} */
  static get strings() {
    return strings$16;
  }

  /**
   * {@see MDCTextFieldBottomLineAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCTextFieldBottomLineAdapter}
   */
  static get defaultAdapter() {
    return /** @type {!MDCTextFieldBottomLineAdapter} */ ({
      addClass: () => {},
      removeClass: () => {},
      setAttr: () => {},
      registerEventHandler: () => {},
      deregisterEventHandler: () => {},
      notifyAnimationEnd: () => {},
    });
  }

  /**
   * @param {!MDCTextFieldBottomLineAdapter=} adapter
   */
  constructor(adapter = /** @type {!MDCTextFieldBottomLineAdapter} */ ({})) {
    super(Object.assign(MDCTextFieldBottomLineFoundation.defaultAdapter, adapter));

    /** @private {function(!Event): undefined} */
    this.transitionEndHandler_ = (evt) => this.handleTransitionEnd(evt);
  }

  init() {
    this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
  }

  destroy() {
    this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
  }

  /**
   * Activates the bottom line
   */
  activate() {
    this.adapter_.addClass(cssClasses$16.BOTTOM_LINE_ACTIVE);
  }

  /**
   * Sets the transform origin given a user's click location.
   * @param {!Event} evt
   */
  setTransformOrigin(evt) {
    const targetClientRect = evt.target.getBoundingClientRect();
    const evtCoords = {x: evt.clientX, y: evt.clientY};
    const normalizedX = evtCoords.x - targetClientRect.left;
    const attributeString =
      `transform-origin: ${normalizedX}px center`;

    this.adapter_.setAttr('style', attributeString);
  }

  /**
   * Deactivates the bottom line
   */
  deactivate() {
    this.adapter_.removeClass(cssClasses$16.BOTTOM_LINE_ACTIVE);
  }

  /**
   * Handles a transition end event
   * @param {!Event} evt
   */
  handleTransitionEnd(evt) {
    // Wait for the bottom line to be either transparent or opaque
    // before emitting the animation end event
    if (evt.propertyName === 'opacity') {
      this.adapter_.notifyAnimationEnd();
    }
  }
}

/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Text Field Helper Text.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the TextField helper text into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
const strings$17 = {
  ARIA_HIDDEN: 'aria-hidden',
  ROLE: 'role',
};

/** @enum {string} */
const cssClasses$17 = {
  HELPER_TEXT_PERSISTENT: 'mdc-text-field-helper-text--persistent',
  HELPER_TEXT_VALIDATION_MSG: 'mdc-text-field-helper-text--validation-msg',
};

/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @extends {MDCFoundation<!MDCTextFieldHelperTextAdapter>}
 * @final
 */
class MDCTextFieldHelperTextFoundation extends MDCFoundation {
  /** @return enum {string} */
  static get cssClasses() {
    return cssClasses$17;
  }

  /** @return enum {string} */
  static get strings() {
    return strings$17;
  }

  /**
   * {@see MDCTextFieldHelperTextAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCTextFieldHelperTextAdapter}
   */
  static get defaultAdapter() {
    return /** @type {!MDCTextFieldHelperTextAdapter} */ ({
      addClass: () => {},
      removeClass: () => {},
      hasClass: () => {},
      setAttr: () => {},
      removeAttr: () => {},
      setContent: () => {},
    });
  }

  /**
   * @param {!MDCTextFieldHelperTextAdapter=} adapter
   */
  constructor(adapter = /** @type {!MDCTextFieldHelperTextAdapter} */ ({})) {
    super(Object.assign(MDCTextFieldHelperTextFoundation.defaultAdapter, adapter));
  }

  /**
   * Sets the content of the helper text field.
   * @param {string} content
   */
  setContent(content) {
    this.adapter_.setContent(content);
  }

  /** Makes the helper text visible to the screen reader. */
  showToScreenReader() {
    this.adapter_.removeAttr(strings$17.ARIA_HIDDEN);
  }

  /**
   * Sets the validity of the helper text based on the input validity.
   * @param {boolean} inputIsValid
   */
  setValidity(inputIsValid) {
    const helperTextIsPersistent = this.adapter_.hasClass(cssClasses$17.HELPER_TEXT_PERSISTENT);
    const helperTextIsValidationMsg = this.adapter_.hasClass(cssClasses$17.HELPER_TEXT_VALIDATION_MSG);
    const validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;

    if (validationMsgNeedsDisplay) {
      this.adapter_.setAttr(strings$17.ROLE, 'alert');
    } else {
      this.adapter_.removeAttr(strings$17.ROLE);
    }

    if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
      this.hide_();
    }
  }

  /**
   * Hides the help text from screen readers.
   * @private
   */
  hide_() {
    this.adapter_.setAttr(strings$17.ARIA_HIDDEN, 'true');
  }
}

/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-unused-vars */

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// eslint-disable-next-line no-unused-vars
/**
 * @extends {MDCFoundation<!MDCTextFieldAdapter>}
 * @final
 */
class MDCTextFieldFoundation extends MDCFoundation {
  /** @return enum {string} */
  static get cssClasses() {
    return cssClasses$15;
  }

  /** @return enum {string} */
  static get strings() {
    return strings$15;
  }

  /**
   * {@see MDCTextFieldAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCTextFieldAdapter}
   */
  static get defaultAdapter() {
    return /** @type {!MDCTextFieldAdapter} */ ({
      addClass: () => {},
      removeClass: () => {},
      addClassToLabel: () => {},
      removeClassFromLabel: () => {},
      setIconAttr: () => {},
      eventTargetHasClass: () => {},
      registerTextFieldInteractionHandler: () => {},
      deregisterTextFieldInteractionHandler: () => {},
      notifyIconAction: () => {},
      registerInputInteractionHandler: () => {},
      deregisterInputInteractionHandler: () => {},
      registerBottomLineEventHandler: () => {},
      deregisterBottomLineEventHandler: () => {},
      getNativeInput: () => {},
    });
  }

  /**
   * @param {!MDCTextFieldAdapter=} adapter
   * @param {!FoundationMapType=} foundationMap Map from subcomponent names to their subfoundations.
   */
  constructor(adapter = /** @type {!MDCTextFieldAdapter} */ ({}),
    foundationMap = /** @type {!FoundationMapType} */ ({})) {
    super(Object.assign(MDCTextFieldFoundation.defaultAdapter, adapter));

    /** @type {!MDCTextFieldBottomLineFoundation|undefined} */
    this.bottomLine_ = foundationMap.bottomLine;
    /** @type {!MDCTextFieldHelperTextFoundation|undefined} */
    this.helperText_ = foundationMap.helperText;

    /** @private {boolean} */
    this.isFocused_ = false;
    /** @private {boolean} */
    this.receivedUserInput_ = false;
    /** @private {boolean} */
    this.useCustomValidityChecking_ = false;
    /** @private {function(): undefined} */
    this.inputFocusHandler_ = () => this.activateFocus();
    /** @private {function(): undefined} */
    this.inputBlurHandler_ = () => this.deactivateFocus();
    /** @private {function(): undefined} */
    this.inputInputHandler_ = () => this.autoCompleteFocus();
    /** @private {function(!Event): undefined} */
    this.setPointerXOffset_ = (evt) => this.setBottomLineTransformOrigin(evt);
    /** @private {function(!Event): undefined} */
    this.textFieldInteractionHandler_ = (evt) => this.handleTextFieldInteraction(evt);
    /** @private {function(!Event): undefined} */
    this.bottomLineAnimationEndHandler_ = () => this.handleBottomLineAnimationEnd();
  }

  init() {
    this.adapter_.addClass(MDCTextFieldFoundation.cssClasses.UPGRADED);
    // Ensure label does not collide with any pre-filled value.
    if (this.getNativeInput_().value) {
      this.adapter_.addClassToLabel(MDCTextFieldFoundation.cssClasses.LABEL_FLOAT_ABOVE);
    }

    this.adapter_.registerInputInteractionHandler('focus', this.inputFocusHandler_);
    this.adapter_.registerInputInteractionHandler('blur', this.inputBlurHandler_);
    this.adapter_.registerInputInteractionHandler('input', this.inputInputHandler_);
    ['mousedown', 'touchstart'].forEach((evtType) => {
      this.adapter_.registerInputInteractionHandler(evtType, this.setPointerXOffset_);
    });
    ['click', 'keydown'].forEach((evtType) => {
      this.adapter_.registerTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler_);
    });
    this.adapter_.registerBottomLineEventHandler(
      MDCTextFieldBottomLineFoundation.strings.ANIMATION_END_EVENT, this.bottomLineAnimationEndHandler_);
  }

  destroy() {
    this.adapter_.removeClass(MDCTextFieldFoundation.cssClasses.UPGRADED);
    this.adapter_.deregisterInputInteractionHandler('focus', this.inputFocusHandler_);
    this.adapter_.deregisterInputInteractionHandler('blur', this.inputBlurHandler_);
    this.adapter_.deregisterInputInteractionHandler('input', this.inputInputHandler_);
    ['mousedown', 'touchstart'].forEach((evtType) => {
      this.adapter_.deregisterInputInteractionHandler(evtType, this.setPointerXOffset_);
    });
    ['click', 'keydown'].forEach((evtType) => {
      this.adapter_.deregisterTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler_);
    });
    this.adapter_.deregisterBottomLineEventHandler(
      MDCTextFieldBottomLineFoundation.strings.ANIMATION_END_EVENT, this.bottomLineAnimationEndHandler_);
  }

  /**
   * Handles all user interactions with the Text Field.
   * @param {!Event} evt
   */
  handleTextFieldInteraction(evt) {
    if (this.adapter_.getNativeInput().disabled) {
      return;
    }

    this.receivedUserInput_ = true;

    const {target, type} = evt;
    const {TEXT_FIELD_ICON} = MDCTextFieldFoundation.cssClasses;
    const targetIsIcon = this.adapter_.eventTargetHasClass(target, TEXT_FIELD_ICON);
    const eventTriggersNotification = type === 'click' || evt.key === 'Enter' || evt.keyCode === 13;

    if (targetIsIcon && eventTriggersNotification) {
      this.adapter_.notifyIconAction();
    }
  }

  /**
   * Activates the text field focus state.
   */
  activateFocus() {
    const {FOCUSED, LABEL_FLOAT_ABOVE, LABEL_SHAKE} = MDCTextFieldFoundation.cssClasses;
    this.adapter_.addClass(FOCUSED);
    if (this.bottomLine_) {
      this.bottomLine_.activate();
    }
    this.adapter_.addClassToLabel(LABEL_FLOAT_ABOVE);
    this.adapter_.removeClassFromLabel(LABEL_SHAKE);
    if (this.helperText_) {
      this.helperText_.showToScreenReader();
    }
    this.isFocused_ = true;
  }

  /**
   * Sets the bottom line's transform origin, so that the bottom line activate
   * animation will animate out from the user's click location.
   * @param {!Event} evt
   */
  setBottomLineTransformOrigin(evt) {
    if (this.bottomLine_) {
      this.bottomLine_.setTransformOrigin(evt);
    }
  }

  /**
   * Activates the Text Field's focus state in cases when the input value
   * changes without user input (e.g. programatically).
   */
  autoCompleteFocus() {
    if (!this.receivedUserInput_) {
      this.activateFocus();
    }
  }

  /**
   * Handles when bottom line animation ends, performing actions that must wait
   * for animations to finish.
   */
  handleBottomLineAnimationEnd() {
    // We need to wait for the bottom line to be entirely transparent
    // before removing the class. If we do not, we see the line start to
    // scale down before disappearing
    if (!this.isFocused_ && this.bottomLine_) {
      this.bottomLine_.deactivate();
    }
  }

  /**
   * Deactives the Text Field's focus state.
   */
  deactivateFocus() {
    const {FOCUSED, LABEL_FLOAT_ABOVE, LABEL_SHAKE} = MDCTextFieldFoundation.cssClasses;
    const input = this.getNativeInput_();

    this.isFocused_ = false;
    this.adapter_.removeClass(FOCUSED);
    this.adapter_.removeClassFromLabel(LABEL_SHAKE);

    if (!input.value && !this.isBadInput_()) {
      this.adapter_.removeClassFromLabel(LABEL_FLOAT_ABOVE);
      this.receivedUserInput_ = false;
    }

    if (!this.useCustomValidityChecking_) {
      this.changeValidity_(input.checkValidity());
    }
  }

  /**
   * Updates the Text Field's valid state based on the supplied validity.
   * @param {boolean} isValid
   * @private
   */
  changeValidity_(isValid) {
    const {INVALID, LABEL_SHAKE} = MDCTextFieldFoundation.cssClasses;
    if (isValid) {
      this.adapter_.removeClass(INVALID);
    } else {
      this.adapter_.addClassToLabel(LABEL_SHAKE);
      this.adapter_.addClass(INVALID);
    }
    if (this.helperText_) {
      this.helperText_.setValidity(isValid);
    }
  }

  /**
   * @return {boolean} True if the Text Field input fails validity checks.
   * @private
   */
  isBadInput_() {
    const input = this.getNativeInput_();
    return input.validity ? input.validity.badInput : input.badInput;
  }

  /**
   * @return {boolean} True if the Text Field is disabled.
   */
  isDisabled() {
    return this.getNativeInput_().disabled;
  }

  /**
   * @param {boolean} disabled Sets the text-field disabled or enabled.
   */
  setDisabled(disabled) {
    const {DISABLED, INVALID} = MDCTextFieldFoundation.cssClasses;
    this.getNativeInput_().disabled = disabled;
    if (disabled) {
      this.adapter_.addClass(DISABLED);
      this.adapter_.removeClass(INVALID);
      this.adapter_.setIconAttr('tabindex', '-1');
    } else {
      this.adapter_.removeClass(DISABLED);
      this.adapter_.setIconAttr('tabindex', '0');
    }
  }

  /**
   * @param {string} content Sets the content of the helper text.
   */
  setHelperTextContent(content) {
    if (this.helperText_) {
      this.helperText_.setContent(content);
    }
  }

  /**
   * @return {!Element|!NativeInputType} The native text input from the
   * host environment, or a dummy if none exists.
   * @private
   */
  getNativeInput_() {
    return this.adapter_.getNativeInput() ||
    /** @type {!NativeInputType} */ ({
      checkValidity: () => true,
      value: '',
      disabled: false,
      badInput: false,
    });
  }

  /**
   * @param {boolean} isValid Sets the validity state of the Text Field.
   */
  setValid(isValid) {
    this.useCustomValidityChecking_ = true;
    this.changeValidity_(isValid);
  }
}

/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @extends {MDCComponent<!MDCTextFieldBottomLineFoundation>}
 * @final
 */
class MDCTextFieldBottomLine extends MDCComponent {
  /**
   * @param {!Element} root
   * @return {!MDCTextFieldBottomLine}
   */
  static attachTo(root) {
    return new MDCTextFieldBottomLine(root);
  }

  /**
   * @return {!MDCTextFieldBottomLineFoundation}
   */
  get foundation() {
    return this.foundation_;
  }

  /**
   * @return {!MDCTextFieldBottomLineFoundation}
   */
  getDefaultFoundation() {
    return new MDCTextFieldBottomLineFoundation(/** @type {!MDCTextFieldBottomLineAdapter} */ (Object.assign({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      setAttr: (attr, value) => this.root_.setAttribute(attr, value),
      registerEventHandler: (evtType, handler) => this.root_.addEventListener(evtType, handler),
      deregisterEventHandler: (evtType, handler) => this.root_.removeEventListener(evtType, handler),
      notifyAnimationEnd: () => {
        this.emit(MDCTextFieldBottomLineFoundation.strings.ANIMATION_END_EVENT, {});
      },
    })));
  }
}

/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @extends {MDCComponent<!MDCTextFieldHelperTextFoundation>}
 * @final
 */
class MDCTextFieldHelperText extends MDCComponent {
  /**
   * @param {!Element} root
   * @return {!MDCTextFieldHelperText}
   */
  static attachTo(root) {
    return new MDCTextFieldHelperText(root);
  }

  /**
   * @return {!MDCTextFieldHelperTextFoundation}
   */
  get foundation() {
    return this.foundation_;
  }

  /**
   * @return {!MDCTextFieldHelperTextFoundation}
   */
  getDefaultFoundation() {
    return new MDCTextFieldHelperTextFoundation(/** @type {!MDCTextFieldHelperTextAdapter} */ (Object.assign({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      hasClass: (className) => this.root_.classList.contains(className),
      setAttr: (attr, value) => this.root_.setAttribute(attr, value),
      removeAttr: (attr) => this.root_.removeAttribute(attr),
      setContent: (content) => {
        this.root_.textContent = content;
      },
    })));
  }
}

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-unused-vars */
/* eslint-enable no-unused-vars */

/**
 * @extends {MDCComponent<!MDCTextFieldFoundation>}
 * @final
 */
class MDCTextField extends MDCComponent {
  /**
   * @param {...?} args
   */
  constructor(...args) {
    super(...args);
    /** @private {?Element} */
    this.input_;
    /** @private {?Element} */
    this.label_;
    /** @type {?MDCRipple} */
    this.ripple;
    /** @private {?MDCTextFieldBottomLine} */
    this.bottomLine_;
    /** @private {?MDCTextFieldHelperText} */
    this.helperText_;
    /** @private {?Element} */
    this.icon_;
  }

  /**
   * @param {!Element} root
   * @return {!MDCTextField}
   */
  static attachTo(root) {
    return new MDCTextField(root);
  }

  /**
   * @param {(function(!Element): !MDCRipple)=} rippleFactory A function which
   * creates a new MDCRipple.
   * @param {(function(!Element): !MDCTextFieldBottomLine)=} bottomLineFactory A function which
   * creates a new MDCTextFieldBottomLine.
   */
  initialize(
    rippleFactory = (el, foundation) => new MDCRipple(el, foundation),
    bottomLineFactory = (el) => new MDCTextFieldBottomLine(el)) {
    this.input_ = this.root_.querySelector(strings$15.INPUT_SELECTOR);
    this.label_ = this.root_.querySelector(strings$15.LABEL_SELECTOR);
    this.ripple = null;
    if (this.root_.classList.contains(cssClasses$15.BOX)) {
      const MATCHES = getMatchesProperty(HTMLElement.prototype);
      const adapter = Object.assign(MDCRipple.createAdapter(this), {
        isSurfaceActive: () => this.input_[MATCHES](':active'),
        registerInteractionHandler: (type, handler) => this.input_.addEventListener(type, handler),
        deregisterInteractionHandler: (type, handler) => this.input_.removeEventListener(type, handler),
      });
      const foundation = new MDCRippleFoundation(adapter);
      this.ripple = rippleFactory(this.root_, foundation);
    }
    if (!this.root_.classList.contains(cssClasses$15.TEXTAREA)) {
      const bottomLineElement = this.root_.querySelector(strings$15.BOTTOM_LINE_SELECTOR);
      if (bottomLineElement) {
        this.bottomLine_ = bottomLineFactory(bottomLineElement);
      }
    }
    if (this.input_.hasAttribute(strings$15.ARIA_CONTROLS)) {
      const helperTextElement = document.getElementById(this.input_.getAttribute(strings$15.ARIA_CONTROLS));
      if (helperTextElement) {
        this.helperText_ = new MDCTextFieldHelperText(helperTextElement);
      }
    }
    if (!this.root_.classList.contains(cssClasses$15.TEXT_FIELD_ICON)) {
      this.icon_ = this.root_.querySelector(strings$15.ICON_SELECTOR);
    }
  }

  destroy() {
    if (this.ripple) {
      this.ripple.destroy();
    }
    if (this.bottomLine_) {
      this.bottomLine_.destroy();
    }
    if (this.helperText_) {
      this.helperText_.destroy();
    }
    super.destroy();
  }

  /**
   * Initiliazes the Text Field's internal state based on the environment's
   * state.
   */
  initialSyncWithDom() {
    this.disabled = this.input_.disabled;
  }

  /**
   * @return {boolean} True if the Text Field is disabled.
   */
  get disabled() {
    return this.foundation_.isDisabled();
  }

  /**
   * @param {boolean} disabled Sets the Text Field disabled or enabled.
   */
  set disabled(disabled) {
    this.foundation_.setDisabled(disabled);
  }

  /**
   * @param {boolean} valid Sets the Text Field valid or invalid.
   */
  set valid(valid) {
    this.foundation_.setValid(valid);
  }

  /**
   * Sets the helper text element content.
   * @param {string} content
   */
  set helperTextContent(content) {
    this.foundation_.setHelperTextContent(content);
  }

  /**
   * @return {!MDCTextFieldFoundation}
   */
  getDefaultFoundation() {
    return new MDCTextFieldFoundation(
      /** @type {!MDCTextFieldAdapter} */ (Object.assign({
        addClass: (className) => this.root_.classList.add(className),
        removeClass: (className) => this.root_.classList.remove(className),
        addClassToLabel: (className) => {
          const label = this.label_;
          if (label) {
            label.classList.add(className);
          }
        },
        removeClassFromLabel: (className) => {
          const label = this.label_;
          if (label) {
            label.classList.remove(className);
          }
        },
        eventTargetHasClass: (target, className) => target.classList.contains(className),
        registerTextFieldInteractionHandler: (evtType, handler) => this.root_.addEventListener(evtType, handler),
        deregisterTextFieldInteractionHandler: (evtType, handler) => this.root_.removeEventListener(evtType, handler),
        notifyIconAction: () => this.emit(MDCTextFieldFoundation.strings.ICON_EVENT, {}),
        registerBottomLineEventHandler: (evtType, handler) => {
          if (this.bottomLine_) {
            this.bottomLine_.listen(evtType, handler);
          }
        },
        deregisterBottomLineEventHandler: (evtType, handler) => {
          if (this.bottomLine_) {
            this.bottomLine_.unlisten(evtType, handler);
          }
        },
      },
      this.getInputAdapterMethods_(),
      this.getIconAdapterMethods_())),
      this.getFoundationMap_());
  }

  /**
   * @return {!{
   *   setIconAttr: function(string, string): undefined,
   * }}
   */
  getIconAdapterMethods_() {
    return {
      setIconAttr: (name, value) => {
        if (this.icon_) {
          this.icon_.setAttribute(name, value);
        }
      },
    };
  }

  /**
   * @return {!{
   *   registerInputInteractionHandler: function(string, function()): undefined,
   *   deregisterInputInteractionHandler: function(string, function()): undefined,
   *   getNativeInput: function(): ?Element,
   * }}
   */
  getInputAdapterMethods_() {
    return {
      registerInputInteractionHandler: (evtType, handler) => this.input_.addEventListener(evtType, handler),
      deregisterInputInteractionHandler: (evtType, handler) => this.input_.removeEventListener(evtType, handler),
      getNativeInput: () => this.input_,
    };
  }

  /**
   * Returns a map of all subcomponents to subfoundations.
   * @return {!FoundationMapType}
   */
  getFoundationMap_() {
    return {
      bottomLine: this.bottomLine_ ? this.bottomLine_.foundation : undefined,
      helperText: this.helperText_ ? this.helperText_.foundation : undefined,
    };
  }
}

class MWCTextfield {
    constructor() {
        // TODO - styling
        this.type = 'text'; //password
        this.required = false;
        this.minlength = 0;
        this.label = 'Password';
        this.value = '';
        this.labelposition = 'right';
        this.helpertext = '';
        this.disabled = false;
        this.showbox = false;
        this.fullwidth = false;
        this.textarea = false;
        this.outlined = true;
        this.dense = false;
        this.focused = true;
        this.icon = '';
        this.iconposition = 'leading'; //trailing
    }
    componentWillLoad() {
        //  if(this.switchcolor){
        // this.switchEl.style.setProperty('--mdc-theme-secondary',this.switchcolor);
        // }
    }
    componentDidLoad() {
        this.mdcTextfieldComponent = MDCTextField.attachTo(this.mdcTextfield);
    }
    renderLabel() {
        if (this.label) {
            return h("label", { htmlFor: "basic-switch", class: "mdc-switch-label" }, this.label);
        }
        return null;
    }
    getDivClassName() {
        let className = '';
        if (this.labelposition == "left") {
            className = "mdc-switch-reverse";
        }
        else {
            className = "mdc-switch";
        }
        return className;
    }
    getTextfieldClassName() {
        let className = 'mdc-text-field mdc-text-field--upgraded';
        if (this.showbox) {
            className = `${className} mdc-text-field--box`;
        }
        if (this.fullwidth) {
            className = `${className} mdc-text-field--fullwidth`;
        }
        if (this.textarea) {
            className = `${className} mdc-text-field--textarea`;
        }
        if (this.disabled) {
            className = `${className}  mdc-text-field--disabled`;
        }
        if (this.outlined) {
            className = `${className}  mdc-text-field--outlined`;
        }
        if (this.dense) {
            className = `${className}  mdc-text-field--dense`;
        }
        if (this.focused) {
            className = `${className}  mdc-text-field--focused`;
        }
        if (this.icon && this.iconposition === "leading") {
            className = `${className} mdc-text-field--with-leading-icon`;
        }
        if (this.icon && this.iconposition === "trailing") {
            className = `${className} mdc-text-field--with-trailing-icon`;
        }
        return className;
    }
    renderInputOrTextarea() {
        if (this.textarea) {
            return (h("textarea", { class: "mdc-text-field__input" }));
        }
        return (h("input", { type: this.type, class: "mdc-text-field__input", required: this.required, minlength: this.minlength, value: this.value, disabled: this.disabled }));
    }
    renderOutlined() {
        if (this.outlined) {
            return (h("div", null,
                h("div", { class: "mdc-text-field__outline" },
                    h("svg", null,
                        h("path", { class: "mdc-text-field__outline-path" }))),
                h("div", { class: "mdc-text-field__idle-outline" })));
        }
    }
    renderHelperText() {
        if (this.helpertext) {
            return (h("p", { id: "my-text-field-helper-text", class: "mdc-text-field-helper-text mdc-text-field-helper-text--persistent mdc-text-field-helper-text--validation-msg", "aria-hidden": "true" }, this.helpertext));
        }
        return null;
    }
    renderIcon() {
        if (this.icon) {
            return (h("i", { class: "material-icons mdc-text-field__icon", tabindex: "0" }, this.icon));
        }
        return null;
    }
    render() {
        return (h("div", null,
            h("div", { class: this.getTextfieldClassName(), ref: (mdcTextfield) => { this.mdcTextfield = mdcTextfield; } },
                this.renderIcon(),
                this.renderInputOrTextarea(),
                h("label", { class: "mdc-text-field__label mdc-text-field__label--float-above", htmlfor: "pre-filled" }, this.label),
                h("div", { class: "mdc-text-field__bottom-line" })),
            this.renderHelperText()));
    }
}

class MWCTheme {
    /*
    {
        "primary" : "#8BC34A",
        "primary-light": '#DCEDC8',
        "primary-dark": '#689F38',
        "secondary": '#7C4DFF',
        "secondary-light": '#757575',
        "secondary-dark": '#212121',
        "background": '#BDBDBD'
    };
     */
    constructor() {
        this.theme = {};
        this.fonts = [];
        this.icons = [];
        this.fontsAndIcons = ['https://fonts.googleapis.com/css?family=Roboto:300,400,500', 'https://fonts.googleapis.com/icon?family=Material+Icons'];
        setTheme(theme$1);
    }
    setLinkNode(fontUrl) {
        var linkNode = document.createElement('link');
        linkNode.type = "text/css";
        linkNode.rel = "stylesheet";
        linkNode.href = fontUrl;
        document.head.appendChild(linkNode);
    }
    componentWillLoad() {
        const urls = [...this.fonts, ...this.fontsAndIcons, ...this.icons];
        urls.forEach((font) => {
            this.setLinkNode(font);
        });
        //  if(this.theme){
        //   Object.keys(this.theme).forEach((key)=>{
        //       this.themeEl.style.setProperty(`--mdc-theme-${key}`,this.theme[key]);
        //   })
        //  }
        //   console.log(getTheme())
    }
    render() {
        return (h("slot", null));
    }
}

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const cssClasses$18 = {
  FIXED: 'mdc-toolbar--fixed',
  FIXED_LASTROW: 'mdc-toolbar--fixed-lastrow-only',
  FIXED_AT_LAST_ROW: 'mdc-toolbar--fixed-at-last-row',
  TOOLBAR_ROW_FLEXIBLE: 'mdc-toolbar--flexible',
  FLEXIBLE_DEFAULT_BEHAVIOR: 'mdc-toolbar--flexible-default-behavior',
  FLEXIBLE_MAX: 'mdc-toolbar--flexible-space-maximized',
  FLEXIBLE_MIN: 'mdc-toolbar--flexible-space-minimized',
};

const strings$18 = {
  TITLE_SELECTOR: '.mdc-toolbar__title',
  FIRST_ROW_SELECTOR: '.mdc-toolbar__row:first-child',
  CHANGE_EVENT: 'MDCToolbar:change',
};

const numbers$5 = {
  MAX_TITLE_SIZE: 2.125,
  MIN_TITLE_SIZE: 1.25,
  TOOLBAR_ROW_HEIGHT: 64,
  TOOLBAR_ROW_MOBILE_HEIGHT: 56,
  TOOLBAR_MOBILE_BREAKPOINT: 600,
};

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class MDCToolbarFoundation extends MDCFoundation {
  static get cssClasses() {
    return cssClasses$18;
  }

  static get strings() {
    return strings$18;
  }

  static get numbers() {
    return numbers$5;
  }

  static get defaultAdapter() {
    return {
      hasClass: (/* className: string */) => /* boolean */ false,
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      registerScrollHandler: (/* handler: EventListener */) => {},
      deregisterScrollHandler: (/* handler: EventListener */) => {},
      registerResizeHandler: (/* handler: EventListener */) => {},
      deregisterResizeHandler: (/* handler: EventListener */) => {},
      getViewportWidth: () => /* number */ 0,
      getViewportScrollY: () => /* number */ 0,
      getOffsetHeight: () => /* number */ 0,
      getFirstRowElementOffsetHeight: () => /* number */ 0,
      notifyChange: (/* evtData: {flexibleExpansionRatio: number} */) => {},
      setStyle: (/* property: string, value: string */) => {},
      setStyleForTitleElement: (/* property: string, value: string */) => {},
      setStyleForFlexibleRowElement: (/* property: string, value: string */) => {},
      setStyleForFixedAdjustElement: (/* property: string, value: string */) => {},
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCToolbarFoundation.defaultAdapter, adapter));
    this.resizeHandler_ = () => this.checkRowHeight_();
    this.scrollHandler_ = () => this.updateToolbarStyles_();
    this.checkRowHeightFrame_ = 0;
    this.scrollFrame_ = 0;
    this.executedLastChange_ = false;

    this.calculations_ = {
      toolbarRowHeight: 0,
      // Calculated Height ratio. We use ratio to calculate corresponding heights in resize event.
      toolbarRatio: 0, // The ratio of toolbar height to row height
      flexibleExpansionRatio: 0, // The ratio of flexible space height to row height
      maxTranslateYRatio: 0, // The ratio of max toolbar move up distance to row height
      scrollThresholdRatio: 0, // The ratio of max scrollTop that we should listen to to row height
      // Derived Heights based on the above key ratios.
      toolbarHeight: 0,
      flexibleExpansionHeight: 0, // Flexible row minus toolbar height (derived)
      maxTranslateYDistance: 0, // When toolbar only fix last row (derived)
      scrollThreshold: 0,
    };
    // Toolbar fixed behavior
    // If toolbar is fixed
    this.fixed_ = false;
    // If fixed is targeted only at the last row
    this.fixedLastrow_ = false;
    // Toolbar flexible behavior
    // If the first row is flexible
    this.hasFlexibleRow_ = false;
    // If use the default behavior
    this.useFlexDefaultBehavior_ = false;
  }

  init() {
    this.fixed_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.FIXED);
    this.fixedLastrow_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.FIXED_LASTROW) & this.fixed_;
    this.hasFlexibleRow_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.TOOLBAR_ROW_FLEXIBLE);
    if (this.hasFlexibleRow_) {
      this.useFlexDefaultBehavior_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_DEFAULT_BEHAVIOR);
    }
    this.initKeyRatio_();
    this.setKeyHeights_();
    this.adapter_.registerResizeHandler(this.resizeHandler_);
    this.adapter_.registerScrollHandler(this.scrollHandler_);
  }

  destroy() {
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    this.adapter_.deregisterScrollHandler(this.scrollHandler_);
  }

  updateAdjustElementStyles() {
    if (this.fixed_) {
      this.adapter_.setStyleForFixedAdjustElement('margin-top', `${this.calculations_.toolbarHeight}px`);
    }
  }

  getFlexibleExpansionRatio_(scrollTop) {
    // To prevent division by zero when there is no flexibleExpansionHeight
    const delta = 0.0001;
    return Math.max(0, 1 - scrollTop / (this.calculations_.flexibleExpansionHeight + delta));
  }

  checkRowHeight_() {
    cancelAnimationFrame(this.checkRowHeightFrame_);
    this.checkRowHeightFrame_ = requestAnimationFrame(() => this.setKeyHeights_());
  }

  setKeyHeights_() {
    const newToolbarRowHeight = this.getRowHeight_();
    if (newToolbarRowHeight !== this.calculations_.toolbarRowHeight) {
      this.calculations_.toolbarRowHeight = newToolbarRowHeight;
      this.calculations_.toolbarHeight = this.calculations_.toolbarRatio * this.calculations_.toolbarRowHeight;
      this.calculations_.flexibleExpansionHeight =
        this.calculations_.flexibleExpansionRatio * this.calculations_.toolbarRowHeight;
      this.calculations_.maxTranslateYDistance =
        this.calculations_.maxTranslateYRatio * this.calculations_.toolbarRowHeight;
      this.calculations_.scrollThreshold =
        this.calculations_.scrollThresholdRatio * this.calculations_.toolbarRowHeight;
      this.updateAdjustElementStyles();
      this.updateToolbarStyles_();
    }
  }

  updateToolbarStyles_() {
    cancelAnimationFrame(this.scrollFrame_);
    this.scrollFrame_ = requestAnimationFrame(() => {
      const scrollTop = this.adapter_.getViewportScrollY();
      const hasScrolledOutOfThreshold = this.scrolledOutOfThreshold_(scrollTop);

      if (hasScrolledOutOfThreshold && this.executedLastChange_) {
        return;
      }

      const flexibleExpansionRatio = this.getFlexibleExpansionRatio_(scrollTop);

      this.updateToolbarFlexibleState_(flexibleExpansionRatio);
      if (this.fixedLastrow_) {
        this.updateToolbarFixedState_(scrollTop);
      }
      if (this.hasFlexibleRow_) {
        this.updateFlexibleRowElementStyles_(flexibleExpansionRatio);
      }
      this.executedLastChange_ = hasScrolledOutOfThreshold;
      this.adapter_.notifyChange({flexibleExpansionRatio: flexibleExpansionRatio});
    });
  }

  scrolledOutOfThreshold_(scrollTop) {
    return scrollTop > this.calculations_.scrollThreshold;
  }

  initKeyRatio_() {
    const toolbarRowHeight = this.getRowHeight_();
    const firstRowMaxRatio = this.adapter_.getFirstRowElementOffsetHeight() / toolbarRowHeight;
    this.calculations_.toolbarRatio = this.adapter_.getOffsetHeight() / toolbarRowHeight;
    this.calculations_.flexibleExpansionRatio = firstRowMaxRatio - 1;
    this.calculations_.maxTranslateYRatio =
      this.fixedLastrow_ ? this.calculations_.toolbarRatio - firstRowMaxRatio : 0;
    this.calculations_.scrollThresholdRatio =
      (this.fixedLastrow_ ? this.calculations_.toolbarRatio : firstRowMaxRatio) - 1;
  }

  getRowHeight_() {
    const breakpoint = MDCToolbarFoundation.numbers.TOOLBAR_MOBILE_BREAKPOINT;
    return this.adapter_.getViewportWidth() < breakpoint ?
      MDCToolbarFoundation.numbers.TOOLBAR_ROW_MOBILE_HEIGHT : MDCToolbarFoundation.numbers.TOOLBAR_ROW_HEIGHT;
  }

  updateToolbarFlexibleState_(flexibleExpansionRatio) {
    this.adapter_.removeClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MAX);
    this.adapter_.removeClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MIN);
    if (flexibleExpansionRatio === 1) {
      this.adapter_.addClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MAX);
    } else if (flexibleExpansionRatio === 0) {
      this.adapter_.addClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MIN);
    }
  }

  updateToolbarFixedState_(scrollTop) {
    const translateDistance = Math.max(0, Math.min(
      scrollTop - this.calculations_.flexibleExpansionHeight,
      this.calculations_.maxTranslateYDistance));
    this.adapter_.setStyle('transform', `translateY(${-translateDistance}px)`);

    if (translateDistance === this.calculations_.maxTranslateYDistance) {
      this.adapter_.addClass(MDCToolbarFoundation.cssClasses.FIXED_AT_LAST_ROW);
    } else {
      this.adapter_.removeClass(MDCToolbarFoundation.cssClasses.FIXED_AT_LAST_ROW);
    }
  }

  updateFlexibleRowElementStyles_(flexibleExpansionRatio) {
    if (this.fixed_) {
      const height = this.calculations_.flexibleExpansionHeight * flexibleExpansionRatio;
      this.adapter_.setStyleForFlexibleRowElement('height',
        `${height + this.calculations_.toolbarRowHeight}px`);
    }
    if (this.useFlexDefaultBehavior_) {
      this.updateElementStylesDefaultBehavior_(flexibleExpansionRatio);
    }
  }

  updateElementStylesDefaultBehavior_(flexibleExpansionRatio) {
    const maxTitleSize = MDCToolbarFoundation.numbers.MAX_TITLE_SIZE;
    const minTitleSize = MDCToolbarFoundation.numbers.MIN_TITLE_SIZE;
    const currentTitleSize = (maxTitleSize - minTitleSize) * flexibleExpansionRatio + minTitleSize;

    this.adapter_.setStyleForTitleElement('font-size', `${currentTitleSize}rem`);
  }
}

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

let supportsPassive_$2;

// Determine whether the current browser supports passive event listeners, and if so, use them.
function applyPassive$2(globalObj = window, forceRefresh = false) {
  if (supportsPassive_$2 === undefined || forceRefresh) {
    let isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, {get passive() {
        isSupported = true;
      }});
    } catch (e) { }

    supportsPassive_$2 = isSupported;
  }

  return supportsPassive_$2 ? {passive: true} : false;
}

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCToolbar extends MDCComponent {
  static attachTo(root) {
    return new MDCToolbar(root);
  }

  get firstRowElement_() {
    return this.root_.querySelector(MDCToolbarFoundation.strings.FIRST_ROW_SELECTOR);
  }

  get titleElement_() {
    return this.root_.querySelector(MDCToolbarFoundation.strings.TITLE_SELECTOR);
  }

  set fixedAdjustElement(fixedAdjustElement) {
    this.fixedAdjustElement_ = fixedAdjustElement;
    this.foundation_.updateAdjustElementStyles();
  }

  get fixedAdjustElement() {
    return this.fixedAdjustElement_;
  }

  getDefaultFoundation() {
    return new MDCToolbarFoundation({
      hasClass: (className) => this.root_.classList.contains(className),
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      registerScrollHandler: (handler) => window.addEventListener('scroll', handler, applyPassive$2()),
      deregisterScrollHandler: (handler) => window.removeEventListener('scroll', handler, applyPassive$2()),
      registerResizeHandler: (handler) => window.addEventListener('resize', handler),
      deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
      getViewportWidth: () => window.innerWidth,
      getViewportScrollY: () => window.pageYOffset,
      getOffsetHeight: () => this.root_.offsetHeight,
      getFirstRowElementOffsetHeight: () => this.firstRowElement_.offsetHeight,
      notifyChange: (evtData) => this.emit(MDCToolbarFoundation.strings.CHANGE_EVENT, evtData),
      setStyle: (property, value) => this.root_.style.setProperty(property, value),
      setStyleForTitleElement: (property, value) => this.titleElement_.style.setProperty(property, value),
      setStyleForFlexibleRowElement: (property, value) => this.firstRowElement_.style.setProperty(property, value),
      setStyleForFixedAdjustElement: (property, value) => {
        if (this.fixedAdjustElement) {
          this.fixedAdjustElement.style.setProperty(property, value);
        }
      },
    });
  }
}

class MWCToolbar {
    componentWillLoad() {
        this.toolbarEl.className = this.getToolBarClassName();
    }
    componentDidLoad() {
        this.toolbarComponent = MDCToolbar.attachTo(this.toolbarEl);
    }
    getToolBarClassName() {
        let className = 'mdc-toolbar';
        if (this.type !== undefined) {
            className = `${className} mdc-toolbar--fixed`;
        }
        return className;
    }
    render() {
        return (h("div", { class: "mdc-toolbar__row" },
            h("slot", null)));
    }
}

class MWCToolbarIcon {
    componentWillLoad() {
        this.toolbarIconEl.className = this.getIconClassName();
    }
    getIconClassName() {
        let className = 'mdc-toolbar__menu-icon material-icons mwc-menu-icon';
        return className;
    }
    render() {
        return (h("slot", null));
    }
}

class MWCToolbarSection {
    componentWillLoad() {
        this.toolbarSectionEl.className = this.getSectionClassName();
    }
    getSectionClassName() {
        let className = 'mdc-toolbar__section';
        if (this.align === "start") {
            className = `${className} mdc-toolbar__section--align-start`;
        }
        else if (this.align === "end") {
            className = `${className} mdc-toolbar__section--align-end`;
        }
        return className;
    }
    render() {
        return (h("slot", null));
    }
}

class MWCToolbarTitle {
    componentWillLoad() {
        this.toolbarTitleEl.className = 'mdc-toolbar__title';
    }
    render() {
        return (h("slot", null));
    }
}

const typography = getTheme()['typography'];
class TypographyStyle {
    constructor() {
        this.defaultStyle = {
            root: {
                display: 'block',
                margin: 0,
            },
            display4: typography['display4'],
            display3: typography['display3'],
            display2: typography['display2'],
            display1: typography['display1'],
            headline: typography['headline'],
            title: typography['title'],
            subheading: typography['subheading'],
            body2: typography['body2'],
            body1: typography['body1'],
            caption: typography['caption'],
            button: typography['button'],
            alignleft: {
                textAlign: 'left',
            },
            aligncenter: {
                textAlign: 'center',
            },
            alignright: {
                textAlign: 'right',
            },
            alignjustify: {
                textAlign: 'justify',
            },
            nowrap: {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
            },
            gutterbottom: {
                marginBottom: '0.35em',
            },
        };
    }
    setup(style) {
        const mergedStyles = deepmerge_1.all([this.defaultStyle, style]);
        this.jss = new SetupJss();
        this.jss.attachStyleSheet(mergedStyles);
    }
    getClassName(type) {
        return this.jss.getClassName(type);
    }
}

class MWCTypography {
    constructor() {
        this.type = "display1";
        this.display = 'block';
        this.align = 'left';
        this.nowrap = false;
        this.gutterbottom = false;
    }
    componentWillLoad() {
        const typeStyle = new TypographyStyle();
        let changeStyle = {
            root: {
                display: this.display
            }
        };
        if (this.color) {
            changeStyle[this.type] = { 'color': this.color };
        }
        if (this.styles) {
            if (changeStyle[this.type]) {
                changeStyle[this.type] = deepmerge_1.all([changeStyle[this.type], this.styles]);
            }
            else {
                changeStyle[this.type] = this.styles;
            }
        }
        typeStyle.setup(changeStyle);
        let classNames = [];
        classNames.push('root');
        classNames.push(this.type);
        classNames.push(`align${this.align}`);
        if (this.nowrap) {
            classNames.push('nowrap');
        }
        if (this.gutterbottom) {
            classNames.push('gutterbottom');
        }
        this.typographyEl.className = typeStyle.getClassName(classNames);
    }
    render() {
        return (h("slot", null));
    }
}

class MWCViewport {
    constructor() {
        this.backgroundcolor = "";
    }
    componentWillLoad() {
        let viewportStyle = `
        height : 100vh;
        width  : 100vw;
        display : block;
        overflow: hidden;
      `;
        if (this.backgroundcolor) {
            viewportStyle = `${viewportStyle} background-color : ${this.backgroundcolor}`;
        }
        this.viewportEl.setAttribute('style', viewportStyle);
    }
    render() {
        return (h("slot", null));
    }
}

exports['mwc-button'] = MWCButton;
exports['mwc-card'] = MWCCard;
exports['mwc-card-actions'] = MWCCardActions;
exports['mwc-card-content'] = MWCCardContent;
exports['mwc-card-header'] = MWCCardHeader;
exports['mwc-card-media'] = MWCCardMedia;
exports['mwc-checkbox'] = MWCCheckbox;
exports['mwc-container'] = MWCContainer;
exports['mwc-content-for-toolbar'] = MWCContentForToolbar;
exports['mwc-dialog'] = MWCDialog;
exports['mwc-dialog-body'] = MWCDialogBody;
exports['mwc-dialog-footer'] = MWCDialogFooter;
exports['mwc-dialog-header'] = MWCDialogHeader;
exports['mwc-drawer'] = MWCDrawer;
exports['mwc-fab'] = MWCFab;
exports['mwc-grid-list'] = MWCGridList;
exports['mwc-grid-list-tile'] = MWCGridListTile;
exports['mwc-icon-toggle'] = MWCIconToggle;
exports['mwc-list'] = MWCList;
exports['mwc-list-item'] = MWCListItem;
exports['mwc-menu'] = MWCMenu;
exports['mwc-menu-item'] = MWCMenuItem;
exports['mwc-paper'] = MWCPaper;
exports['mwc-progress'] = MWCProgress;
exports['mwc-radio'] = MWCRadio;
exports['mwc-select'] = MWCSelect;
exports['mwc-slider'] = MWCSlider;
exports['mwc-snackbar'] = MWCSnackbar;
exports['mwc-switch'] = MWCSwitch;
exports['mwc-tabbar'] = MWCTabbar;
exports['mwc-textfield'] = MWCTextfield;
exports['mwc-theme'] = MWCTheme;
exports['mwc-toolbar'] = MWCToolbar;
exports['mwc-toolbar-icon'] = MWCToolbarIcon;
exports['mwc-toolbar-section'] = MWCToolbarSection;
exports['mwc-toolbar-title'] = MWCToolbarTitle;
exports['mwc-typography'] = MWCTypography;
exports['mwc-viewport'] = MWCViewport;
},


/***************** mwc-button *****************/
[
/** mwc-button: tag **/
"mwc-button",

/** mwc-button: members **/
[
  [ "backgroundcolor", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "btnEl", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "compact", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "dense", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "disabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "fab", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "href", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "icon", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "mini", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "raised", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "ripple", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "stroked", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "unelevated", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ]
],

/** mwc-button: host **/
{}

],

/***************** mwc-card *****************/
[
/** mwc-card: tag **/
"mwc-card",

/** mwc-card: members **/
[
  [ "cardEl", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "height", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "radius", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "raised", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "width", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** mwc-card: host **/
{}

],

/***************** mwc-card-actions *****************/
[
/** mwc-card-actions: tag **/
"mwc-card-actions",

/** mwc-card-actions: members **/
0 /* no members */,

/** mwc-card-actions: host **/
{}

],

/***************** mwc-card-content *****************/
[
/** mwc-card-content: tag **/
"mwc-card-content",

/** mwc-card-content: members **/
0 /* no members */,

/** mwc-card-content: host **/
{}

],

/***************** mwc-card-header *****************/
[
/** mwc-card-header: tag **/
"mwc-card-header",

/** mwc-card-header: members **/
[
  [ "subtitle", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "title", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** mwc-card-header: host **/
{}

],

/***************** mwc-card-media *****************/
[
/** mwc-card-media: tag **/
"mwc-card-media",

/** mwc-card-media: members **/
[
  [ "mediaheight", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "src", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** mwc-card-media: host **/
{}

],

/***************** mwc-checkbox *****************/
[
/** mwc-checkbox: tag **/
"mwc-checkbox",

/** mwc-checkbox: members **/
[
  [ "alignlabel", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "checkBoxEl", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "checkcolor", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "checked", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "disabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "indeterminate", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "label", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "name", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "ripple", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "value", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** mwc-checkbox: host **/
{},

/** mwc-checkbox: events **/
[
  [
    /*****  mwc-checkbox change ***** /
    /* event name ***/ "change"
  ]
]

],

/***************** mwc-container *****************/
[
/** mwc-container: tag **/
"mwc-container",

/** mwc-container: members **/
[
  [ "aligncontent", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "alignitems", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "backgroundcolor", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "containerEl", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "flexdirection", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "flexwrap", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "height", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "justifycontent", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "width", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** mwc-container: host **/
{}

],

/***************** mwc-content-for-toolbar *****************/
[
/** mwc-content-for-toolbar: tag **/
"mwc-content-for-toolbar",

/** mwc-content-for-toolbar: members **/
[
  [ "contentToolbarEl", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** mwc-content-for-toolbar: host **/
{}

],

/***************** mwc-dialog *****************/
[
/** mwc-dialog: tag **/
"mwc-dialog",

/** mwc-dialog: members **/
[
  [ "close", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "dialogEl", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "height", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "show", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "width", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** mwc-dialog: host **/
{},

/** mwc-dialog: events **/
[
  [
    /*****  mwc-dialog accepted ***** /
    /* event name ***/ "accepted"
  ],
  [
    /*****  mwc-dialog canceled ***** /
    /* event name ***/ "canceled"
  ]
]

],

/***************** mwc-dialog-body *****************/
[
/** mwc-dialog-body: tag **/
"mwc-dialog-body",

/** mwc-dialog-body: members **/
0 /* no members */,

/** mwc-dialog-body: host **/
{}

],

/***************** mwc-dialog-footer *****************/
[
/** mwc-dialog-footer: tag **/
"mwc-dialog-footer",

/** mwc-dialog-footer: members **/
[
  [ "dialogFooterEl", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** mwc-dialog-footer: host **/
{}

],

/***************** mwc-dialog-header *****************/
[
/** mwc-dialog-header: tag **/
"mwc-dialog-header",

/** mwc-dialog-header: members **/
0 /* no members */,

/** mwc-dialog-header: host **/
{}

],

/***************** mwc-drawer *****************/
[
/** mwc-drawer: tag **/
"mwc-drawer",

/** mwc-drawer: members **/
[
  [ "close", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "drawerEl", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "header", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "open", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "toolbarspacer", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "type", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ]
],

/** mwc-drawer: host **/
{},

/** mwc-drawer: events **/
[
  [
    /*****  mwc-drawer ondraweropen ***** /
    /* event name ***/ "ondraweropen"
  ],
  [
    /*****  mwc-drawer ondrawerclose ***** /
    /* event name ***/ "ondrawerclose"
  ]
]

],

/***************** mwc-fab *****************/
[
/** mwc-fab: tag **/
"mwc-fab",

/** mwc-fab: members **/
[
  [ "backgroundcolor", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "fabEl", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "icon", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "mini", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "ripple", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ]
],

/** mwc-fab: host **/
{}

],

/***************** mwc-grid-list *****************/
[
/** mwc-grid-list: tag **/
"mwc-grid-list",

/** mwc-grid-list: members **/
[
  [ "aspectratio", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "gridListEl", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "tiletitleposition", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "tilewidth", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** mwc-grid-list: host **/
{}

],

/***************** mwc-grid-list-tile *****************/
[
/** mwc-grid-list-tile: tag **/
"mwc-grid-list-tile",

/** mwc-grid-list-tile: members **/
[
  [ "gridListTileEl", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "titlebackgroundcolor", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** mwc-grid-list-tile: host **/
{}

],

/***************** mwc-icon-toggle *****************/
[
/** mwc-icon-toggle: tag **/
"mwc-icon-toggle",

/** mwc-icon-toggle: members **/
[
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "disabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "iconToggleEl", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "officon", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "officonlabel", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "onicon", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "oniconlabel", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "ripple", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "toggleon", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ]
],

/** mwc-icon-toggle: host **/
{},

/** mwc-icon-toggle: events **/
[
  [
    /*****  mwc-icon-toggle oniconchange ***** /
    /* event name ***/ "oniconchange"
  ]
]

],

/***************** mwc-list *****************/
[
/** mwc-list: tag **/
"mwc-list",

/** mwc-list: members **/
[
  [ "borderlist", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "dense", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "listEl", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** mwc-list: host **/
{}

],

/***************** mwc-list-item *****************/
[
/** mwc-list-item: tag **/
"mwc-list-item",

/** mwc-list-item: members **/
[
  [ "interactive", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "listItemEl", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "ripple", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ]
],

/** mwc-list-item: host **/
{}

],

/***************** mwc-menu *****************/
[
/** mwc-menu: tag **/
"mwc-menu",

/** mwc-menu: members **/
[
  [ "hide", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "menuEl", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "open", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "show", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** mwc-menu: host **/
{},

/** mwc-menu: events **/
[
  [
    /*****  mwc-menu selected ***** /
    /* event name ***/ "selected"
  ]
]

],

/***************** mwc-menu-item *****************/
[
/** mwc-menu-item: tag **/
"mwc-menu-item",

/** mwc-menu-item: members **/
[
  [ "disabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "role", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** mwc-menu-item: host **/
{}

],

/***************** mwc-paper *****************/
[
/** mwc-paper: tag **/
"mwc-paper",

/** mwc-paper: members **/
[
  [ "elevation", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "height", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "radius", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "width", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** mwc-paper: host **/
{}

],

/***************** mwc-progress *****************/
[
/** mwc-progress: tag **/
"mwc-progress",

/** mwc-progress: members **/
[
  [ "buffer", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "bufferbarcolor", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "height", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "progress", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "progressbarcolor", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "progressEl", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "reversed", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "show", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "type", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "width", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** mwc-progress: host **/
{}

],

/***************** mwc-radio *****************/
[
/** mwc-radio: tag **/
"mwc-radio",

/** mwc-radio: members **/
[
  [ "borderlist", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "checked", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "dense", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "name", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "radiocolor", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "radioEl", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "ripple", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ]
],

/** mwc-radio: host **/
{}

],

/***************** mwc-select *****************/
[
/** mwc-select: tag **/
"mwc-select",

/** mwc-select: members **/
[
  [ "borderlist", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "checked", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "dense", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "name", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "radiocolor", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "ripple", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "selectEl", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** mwc-select: host **/
{}

],

/***************** mwc-slider *****************/
[
/** mwc-slider: tag **/
"mwc-slider",

/** mwc-slider: members **/
[
  [ "disabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "discrete", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "max", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "min", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "slidercolor", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "sliderEl", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "step", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "stepdown", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "stepup", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "value", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ]
],

/** mwc-slider: host **/
{},

/** mwc-slider: events **/
[
  [
    /*****  mwc-slider change ***** /
    /* event name ***/ "change"
  ],
  [
    /*****  mwc-slider inputchange ***** /
    /* event name ***/ "inputchange"
  ]
]

],

/***************** mwc-snackbar *****************/
[
/** mwc-snackbar: tag **/
"mwc-snackbar",

/** mwc-snackbar: members **/
[
  [ "actioncolor", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "actiononbutton", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "actiontext", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "backgroundcolor", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "dismissesonaction", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "message", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "messagecolor", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "multiline", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "show", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "snackBarEl", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "timeout", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ]
],

/** mwc-snackbar: host **/
{},

/** mwc-snackbar: events **/
[
  [
    /*****  mwc-snackbar actionhandler ***** /
    /* event name ***/ "actionhandler"
  ],
  [
    /*****  mwc-snackbar selected ***** /
    /* event name ***/ "selected"
  ]
]

],

/***************** mwc-switch *****************/
[
/** mwc-switch: tag **/
"mwc-switch",

/** mwc-switch: members **/
[
  [ "checked", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "disabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "label", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "labelposition", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "switchcolor", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "switchEl", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** mwc-switch: host **/
{},

/** mwc-switch: events **/
[
  [
    /*****  mwc-switch selected ***** /
    /* event name ***/ "selected"
  ]
]

],

/***************** mwc-tabbar *****************/
[
/** mwc-tabbar: tag **/
"mwc-tabbar",

/** mwc-tabbar: members **/
[
  [ "activeindex", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "scroller", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "tabBarEl", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "tabs", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ]
],

/** mwc-tabbar: host **/
{},

/** mwc-tabbar: events **/
[
  [
    /*****  mwc-tabbar change ***** /
    /* event name ***/ "change"
  ]
]

],

/***************** mwc-textfield *****************/
[
/** mwc-textfield: tag **/
"mwc-textfield",

/** mwc-textfield: members **/
[
  [ "dense", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "disabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "focused", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "fullwidth", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "helpertext", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "icon", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "iconposition", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "label", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "labelposition", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "minlength", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "outlined", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "required", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "showbox", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "switchEl", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "textarea", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "type", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "value", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** mwc-textfield: host **/
{},

/** mwc-textfield: events **/
[
  [
    /*****  mwc-textfield selected ***** /
    /* event name ***/ "selected"
  ]
]

],

/***************** mwc-theme *****************/
[
/** mwc-theme: tag **/
"mwc-theme",

/** mwc-theme: members **/
[
  [ "fonts", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "icons", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "theme", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "themeEl", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** mwc-theme: host **/
{}

],

/***************** mwc-toolbar *****************/
[
/** mwc-toolbar: tag **/
"mwc-toolbar",

/** mwc-toolbar: members **/
[
  [ "toolbarEl", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "type", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** mwc-toolbar: host **/
{}

],

/***************** mwc-toolbar-icon *****************/
[
/** mwc-toolbar-icon: tag **/
"mwc-toolbar-icon",

/** mwc-toolbar-icon: members **/
[
  [ "toolbarIconEl", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** mwc-toolbar-icon: host **/
{}

],

/***************** mwc-toolbar-section *****************/
[
/** mwc-toolbar-section: tag **/
"mwc-toolbar-section",

/** mwc-toolbar-section: members **/
[
  [ "align", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "toolbarSectionEl", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** mwc-toolbar-section: host **/
{}

],

/***************** mwc-toolbar-title *****************/
[
/** mwc-toolbar-title: tag **/
"mwc-toolbar-title",

/** mwc-toolbar-title: members **/
[
  [ "toolbarTitleEl", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** mwc-toolbar-title: host **/
{}

],

/***************** mwc-typography *****************/
[
/** mwc-typography: tag **/
"mwc-typography",

/** mwc-typography: members **/
[
  [ "align", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "display", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "gutterbottom", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "nowrap", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "styles", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "type", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "typographyEl", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** mwc-typography: host **/
{}

],

/***************** mwc-viewport *****************/
[
/** mwc-viewport: tag **/
"mwc-viewport",

/** mwc-viewport: members **/
[
  [ "backgroundcolor", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "viewportEl", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** mwc-viewport: host **/
{}

]
);
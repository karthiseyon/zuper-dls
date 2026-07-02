/* @ds-bundle: {"format":3,"namespace":"ZuperDesignSystem_4b4e77","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/data-display/Eyebrow.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"DispatchBoard","sourcePath":"components/product/DispatchBoard.jsx"},{"name":"JobCosting","sourcePath":"components/product/JobCosting.jsx"},{"name":"MobileJob","sourcePath":"components/product/MobileJob.jsx"},{"name":"QuoteEstimate","sourcePath":"components/product/QuoteEstimate.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"7be38ef22a40","components/buttons/Button.jsx":"ab53fe5a7a83","components/buttons/IconButton.jsx":"b0dac4df8dfe","components/data-display/Avatar.jsx":"d353b6f55f0b","components/data-display/Badge.jsx":"b6c3e03b6738","components/data-display/Card.jsx":"4a35d5c88424","components/data-display/Eyebrow.jsx":"72961da947a7","components/data-display/Tag.jsx":"3bc356e5ab0b","components/forms/Checkbox.jsx":"e79dffebc09d","components/forms/Input.jsx":"05caa56f1888","components/forms/Select.jsx":"26221b0d1332","components/forms/Switch.jsx":"01f2f7f625ba","components/navigation/Tabs.jsx":"89a52e42f4ff","components/product/DispatchBoard.jsx":"4b4041c39d06","components/product/JobCosting.jsx":"0499f051bd27","components/product/MobileJob.jsx":"be0aff826dd4","components/product/QuoteEstimate.jsx":"a4471b71822f","ui_kits/sense/sense.jsx":"a08bac419884","ui_kits/website/home.jsx":"f32d3e923532","ui_kits/website/parts.jsx":"5ce018f3ab6d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ZuperDesignSystem_4b4e77 = window.ZuperDesignSystem_4b4e77 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
/**
 * Zuper logomark — the official 4-parallelogram "Z" mark, inlined as SVG so it
 * stays crisp at any size and recolors via `tone`. Geometry from the brand
 * Zuper logomark.svg. For the full horizontal/vertical lockup (mark + ZUPER
 * wordmark), use the PNG/SVG files in assets/logos/ directly.
 */
function Logo({
  tone = 'color',
  size = 36,
  style = {}
}) {
  const tones = {
    color: ['#FD5000', '#3A3A3C'],
    // orange top, charcoal bottom
    ink: ['#191919', '#191919'],
    gray: ['#6B7280', '#6B7280'],
    white: ['#FFFFFF', '#FFFFFF'],
    inverted: ['#FD5000', '#FFFFFF'] // orange mark on dark grounds
  };
  const [top, bottom] = tones[tone] || tones.color;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 500 500",
    style: style,
    role: "img",
    "aria-label": "Zuper"
  }, /*#__PURE__*/React.createElement("polygon", {
    fill: top,
    points: "316.8,180.5 433.5,181.1 371.1,277.2 254,277.2"
  }), /*#__PURE__*/React.createElement("polygon", {
    fill: top,
    points: "229.9,71 387.5,71.2 317.5,180.5 157.6,181.1"
  }), /*#__PURE__*/React.createElement("polygon", {
    fill: bottom,
    points: "130.3,222.2 247,222.8 184.6,318.9 67.5,318.9"
  }), /*#__PURE__*/React.createElement("polygon", {
    fill: bottom,
    points: "184.7,318.9 342.3,319.1 270.3,428.4 112.4,429"
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Zuper Button — the one primary action per view is orange.
 * Variants: primary (orange), secondary (orange outline on white),
 * black (on orange/photo grounds), whiteOutline (on orange/dark grounds), ghost.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  disabled = false,
  fullWidth = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: 13,
      padding: '8px 16px',
      radius: 8,
      gap: 6
    },
    md: {
      fontSize: 14,
      padding: '10px 22px',
      radius: 8,
      gap: 8
    },
    lg: {
      fontSize: 16,
      padding: '14px 28px',
      radius: 10,
      gap: 8
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: '#fff',
      border: '2px solid var(--color-primary)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '2px solid var(--color-primary)'
    },
    black: {
      background: 'var(--color-ink)',
      color: '#fff',
      border: '2px solid var(--color-ink)'
    },
    whiteOutline: {
      background: 'transparent',
      color: '#fff',
      border: '2px solid rgba(255,255,255,0.7)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '2px solid transparent'
    }
  };
  const v = variants[variant] || variants.primary;
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: s.fontSize,
    lineHeight: 1,
    padding: s.padding,
    borderRadius: s.radius,
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--duration-base) var(--ease-standard), transform var(--duration-fast) var(--ease-standard), box-shadow var(--duration-base)',
    whiteSpace: 'nowrap',
    ...v,
    ...style
  };
  const onEnter = e => {
    if (disabled) return;
    if (variant === 'primary') e.currentTarget.style.background = 'var(--color-primary-hover)', e.currentTarget.style.borderColor = 'var(--color-primary-hover)';else if (variant === 'secondary') e.currentTarget.style.background = 'var(--surface-hover)';else if (variant === 'black') e.currentTarget.style.background = '#000';else if (variant === 'whiteOutline') e.currentTarget.style.background = 'rgba(255,255,255,0.12)';else e.currentTarget.style.background = 'var(--surface-warm)';
  };
  const onLeave = e => {
    if (disabled) return;
    e.currentTarget.style.background = v.background;
    e.currentTarget.style.borderColor = (v.border || '').split(' ').slice(2).join(' ') || 'transparent';
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = 'translateY(1px)';
  };
  const onUp = e => {
    if (!disabled) e.currentTarget.style.transform = 'none';
  };
  const onFocus = e => {
    e.currentTarget.style.boxShadow = 'var(--focus-ring)';
  };
  const onBlur = e => {
    e.currentTarget.style.boxShadow = 'none';
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: e => {
      onLeave(e);
      onUp(e);
    },
    onMouseDown: onDown,
    onMouseUp: onUp,
    onFocus: onFocus,
    onBlur: onBlur
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Zuper IconButton — square, outline-icon-only control.
 * Pass a single-weight outline icon (SVG with stroke:currentColor, fill:none) as children.
 */
function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  ariaLabel,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const d = dims[size] || dims.md;
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: '#fff',
      border: '1px solid var(--color-primary)'
    },
    outline: {
      background: 'var(--surface-white)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid transparent'
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--duration-base) var(--ease-standard)',
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (!disabled && variant === 'ghost') e.currentTarget.style.background = 'var(--surface-warm)';
    },
    onMouseLeave: e => {
      if (!disabled) e.currentTarget.style.background = v.background;
    },
    onFocus: e => {
      e.currentTarget.style.boxShadow = 'var(--focus-ring)';
    },
    onBlur: e => {
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
/** Zuper Avatar — initials on a warm tint, or an image. */
function Avatar({
  name = '',
  src,
  size = 40,
  style = {}
}) {
  const initials = name.split(' ').map(p => p[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: 'var(--surface-banner)',
      color: 'var(--color-primary-press)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: size * 0.4,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
/**
 * Zuper Badge — status pill using semantic colors (never brand orange).
 * tone: success | warning | error | neutral | info
 */
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  style = {}
}) {
  const tones = {
    success: {
      bg: 'var(--status-success-bg)',
      fg: 'var(--status-success-fg)'
    },
    warning: {
      bg: 'var(--status-warning-bg)',
      fg: 'var(--status-warning-fg)'
    },
    error: {
      bg: 'var(--status-error-bg)',
      fg: 'var(--status-error-fg)'
    },
    info: {
      bg: '#E8F0FE',
      fg: '#1A56DB'
    },
    neutral: {
      bg: 'var(--gray-50)',
      fg: 'var(--gray-500)'
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 600,
      padding: '4px 10px',
      borderRadius: 999,
      background: t.bg,
      color: t.fg,
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: t.fg
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Zuper Card — white surface, 1px border, soft shadow, 14px radius.
 * `peach` uses the warm product-card ground; `dark` for Zuper Sense.
 */
function Card({
  children,
  variant = 'default',
  padding = 24,
  hoverable = false,
  style = {},
  ...rest
}) {
  const variants = {
    default: {
      background: 'var(--surface-white)',
      border: '1px solid var(--border-card)',
      color: 'var(--text-primary)'
    },
    peach: {
      background: 'var(--surface-peach)',
      border: '1px solid transparent',
      color: 'var(--text-primary)'
    },
    dark: {
      background: '#141417',
      border: '1px solid #27272A',
      color: '#FAFAFA'
    }
  };
  const v = variants[variant] || variants.default;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-card)',
      padding,
      boxShadow: 'var(--shadow-card)',
      transition: 'transform var(--duration-base) var(--ease-out), box-shadow var(--duration-base)',
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (hoverable) {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-float)';
      }
    },
    onMouseLeave: e => {
      if (hoverable) {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = 'var(--shadow-card)';
      }
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Eyebrow.jsx
try { (() => {
/** Zuper Eyebrow — uppercase Geist Mono label, orange by default. */
function Eyebrow({
  children,
  color = 'var(--color-primary)',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
/** Zuper Tag — neutral filter/category chip, optionally removable. */
function Tag({
  children,
  onRemove,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 500,
      padding: '5px 10px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-white)',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-strong)',
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      display: 'inline-flex',
      border: 0,
      background: 'none',
      padding: 0,
      cursor: 'pointer',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Zuper Checkbox — orange when checked, line check glyph. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style = {}
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-primary)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    style: {
      width: 20,
      height: 20,
      borderRadius: 6,
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: on ? 'var(--color-primary)' : 'var(--surface-white)',
      border: `2px solid ${on ? 'var(--color-primary)' : 'var(--border-strong)'}`,
      transition: 'background var(--duration-base), border-color var(--duration-base)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), label && /*#__PURE__*/React.createElement("span", {
    onClick: toggle
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Zuper text Input — white field, 1px border, orange focus ring.
 * Optional label, hint and error state.
 */
function Input({
  label,
  hint,
  error,
  iconLeft = null,
  size = 'md',
  style = {},
  id,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const pad = size === 'sm' ? '8px 12px' : '11px 14px';
  const fieldId = id || (label ? 'in-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  const borderColor = error ? 'var(--status-error-fg)' : focused ? 'var(--color-primary)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      color: 'var(--text-muted)',
      display: 'inline-flex'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-primary)',
      padding: iconLeft ? '11px 14px 11px 40px' : pad,
      background: 'var(--surface-white)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      boxShadow: focused && !error ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--duration-base), box-shadow var(--duration-base)'
    },
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--status-error-fg)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Zuper Select — native select styled with a line chevron. */
function Select({
  label,
  options = [],
  hint,
  style = {},
  id,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const fieldId = id || (label ? 'sel-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      appearance: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-primary)',
      padding: '11px 38px 11px 14px',
      background: 'var(--surface-white)',
      border: `1px solid ${focused ? 'var(--color-primary)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      boxShadow: focused ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--duration-base), box-shadow var(--duration-base)',
      cursor: 'pointer'
    },
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lbl = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lbl);
  })), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--text-muted)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** Zuper Switch — pill toggle, orange when on. */
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style = {}
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-primary)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": on,
    onClick: toggle,
    style: {
      width: 40,
      height: 24,
      borderRadius: 999,
      flexShrink: 0,
      position: 'relative',
      background: on ? 'var(--color-primary)' : 'var(--border-strong)',
      transition: 'background var(--duration-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 19 : 3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: '0 1px 2px rgba(0,0,0,.25)',
      transition: 'left var(--duration-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Zuper Tabs — underline style, orange active indicator. */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style = {}
}) {
  const isControlled = value !== undefined;
  const first = defaultValue ?? (tabs[0] && (typeof tabs[0] === 'string' ? tabs[0] : tabs[0].value));
  const [internal, setInternal] = React.useState(first);
  const active = isControlled ? value : internal;
  const select = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-divider)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, tabs.map(t => {
    const val = typeof t === 'string' ? t : t.value;
    const lbl = typeof t === 'string' ? t : t.label;
    const on = val === active;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(val),
      style: {
        border: 0,
        background: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        fontWeight: 600,
        padding: '10px 14px',
        marginBottom: -1,
        color: on ? 'var(--text-primary)' : 'var(--text-muted)',
        borderBottom: `2px solid ${on ? 'var(--color-primary)' : 'transparent'}`,
        transition: 'color var(--duration-base), border-color var(--duration-base)'
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.color = 'var(--text-secondary)';
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.color = 'var(--text-muted)';
      }
    }, lbl);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/product/DispatchBoard.jsx
try { (() => {
/**
 * Zuper dispatch board — recreated product screen for use in creatives.
 * Wrapped in a mac-style window; floats as a rounded shadowed card.
 */
function DispatchBoard({
  style = {}
}) {
  const jobs = [{
    t: '8:00',
    n: 'Tear-off — 14 Maple Ave',
    who: 'Crew A',
    bg: 'var(--status-success-bg)',
    fg: 'var(--status-success-fg)',
    s: 'Completed'
  }, {
    t: '9:30',
    n: 'Roof inspection — Summit Plaza',
    who: 'M. Reyes',
    bg: '#E8F0FE',
    fg: '#1A56DB',
    s: 'En route'
  }, {
    t: '11:00',
    n: 'Leak repair — 9 Oak Court',
    who: 'Crew B',
    bg: 'var(--status-warning-bg)',
    fg: 'var(--status-warning-fg)',
    s: 'Scheduled'
  }, {
    t: '13:30',
    n: 'Gutter install — 220 Pine St',
    who: 'Crew A',
    bg: 'var(--status-warning-bg)',
    fg: 'var(--status-warning-fg)',
    s: 'Scheduled'
  }, {
    t: '15:00',
    n: 'Estimate — 5 Birch Ln',
    who: 'Unassigned',
    bg: 'var(--gray-50)',
    fg: 'var(--gray-500)',
    s: 'Unassigned'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-float)',
      overflow: 'hidden',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '13px 18px',
      borderBottom: '1px solid var(--border-divider)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: '#FF5F57'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: '#FEBC2E'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: '#28C840'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 12,
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "Dispatch board \xB7 Today"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "Tue, Jun 25")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12
    }
  }, jobs.map(j => /*#__PURE__*/React.createElement("div", {
    key: j.n,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '13px 14px',
      borderRadius: 10,
      marginBottom: 6,
      border: '1px solid var(--border-card)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      color: 'var(--text-muted)',
      width: 46
    }
  }, j.t), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, j.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, j.who)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      padding: '5px 12px',
      borderRadius: 999,
      background: j.bg,
      color: j.fg
    }
  }, j.s)))));
}
Object.assign(__ds_scope, { DispatchBoard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/DispatchBoard.jsx", error: String((e && e.message) || e) }); }

// components/product/JobCosting.jsx
try { (() => {
/**
 * Zuper job-costing dashboard — KPI tiles + margin bars for creatives.
 */
function JobCosting({
  style = {}
}) {
  const kpis = [['Revenue booked', '$48.2k'], ['Avg margin', '34%'], ['Jobs this week', '12']];
  const bars = [{
    n: 'Tear-off — Maple Ave',
    m: 48
  }, {
    n: 'Inspection — Summit',
    m: 36
  }, {
    n: 'Repair — Oak Court',
    m: 22
  }, {
    n: 'Install — Pine St',
    m: 41
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-float)',
      overflow: 'hidden',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '13px 18px',
      borderBottom: '1px solid var(--border-divider)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: '#FF5F57'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: '#FEBC2E'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: '#28C840'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 12,
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "Job costing & profitability")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 12,
      marginBottom: 18
    }
  }, kpis.map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      border: '1px solid var(--border-card)',
      borderRadius: 12,
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      color: 'var(--text-muted)',
      marginBottom: 8
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 24,
      letterSpacing: '-.02em'
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, bars.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.n,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 190,
      fontSize: 13,
      color: 'var(--text-secondary)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, b.n), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 10,
      background: 'var(--gray-50)',
      borderRadius: 999,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      height: '100%',
      width: b.m + '%',
      background: b.m < 30 ? 'var(--status-warning-fg)' : 'var(--color-primary)',
      borderRadius: 999
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      fontWeight: 600,
      color: b.m < 30 ? 'var(--status-warning-fg)' : 'var(--text-primary)'
    }
  }, b.m, "%"))))));
}
Object.assign(__ds_scope, { JobCosting });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/JobCosting.jsx", error: String((e && e.message) || e) }); }

// components/product/MobileJob.jsx
try { (() => {
/**
 * Zuper mobile app — field job view inside a phone frame, for creatives.
 */
function MobileJob({
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 300,
      background: '#fff',
      borderRadius: 36,
      boxShadow: 'var(--shadow-float)',
      border: '8px solid #191919',
      overflow: 'hidden',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gradient-brand)',
      color: '#fff',
      padding: '16px 18px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      opacity: .9
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", null, "Zuper")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '.12em',
      opacity: .85,
      marginTop: 16
    }
  }, "Current job"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 22,
      letterSpacing: '-.02em',
      marginTop: 4
    }
  }, "Leak repair"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      opacity: .92,
      marginTop: 2
    }
  }, "9 Oak Court \xB7 11:00 AM")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: 'center',
      background: 'var(--surface-banner)',
      color: 'var(--color-primary-press)',
      fontWeight: 600,
      fontSize: 13,
      padding: '9px 0',
      borderRadius: 8
    }
  }, "Navigate"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: 'center',
      background: 'var(--surface-warm)',
      color: 'var(--text-secondary)',
      fontWeight: 600,
      fontSize: 13,
      padding: '9px 0',
      borderRadius: 8
    }
  }, "Call")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      color: 'var(--text-muted)',
      margin: '4px 0 10px'
    }
  }, "Checklist"), [['Inspect flashing', true], ['Photo before', true], ['Seal &amp; replace', false], ['Photo after', false]].map(([t, done], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 6,
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: done ? 'var(--color-primary)' : '#fff',
      border: done ? '2px solid var(--color-primary)' : '2px solid var(--border-strong)'
    }
  }, done && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: done ? 'var(--text-muted)' : 'var(--text-primary)',
      textDecoration: done ? 'line-through' : 'none'
    },
    dangerouslySetInnerHTML: {
      __html: t
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-primary)',
      color: '#fff',
      textAlign: 'center',
      fontWeight: 600,
      fontSize: 15,
      padding: '13px 0',
      borderRadius: 10,
      marginTop: 14
    }
  }, "Complete job")));
}
Object.assign(__ds_scope, { MobileJob });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/MobileJob.jsx", error: String((e && e.message) || e) }); }

// components/product/QuoteEstimate.jsx
try { (() => {
/**
 * Zuper Intelligent Quoting — good/better/best estimate screen for creatives.
 */
function QuoteEstimate({
  style = {}
}) {
  const tiers = [{
    name: 'Good',
    price: '$11,400',
    sub: '3-tab shingles · 25-yr',
    active: false
  }, {
    name: 'Better',
    price: '$16,250',
    sub: 'Architectural · 30-yr',
    active: false
  }, {
    name: 'Best',
    price: '$23,800',
    sub: 'Premium · lifetime',
    active: true
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-float)',
      overflow: 'hidden',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '13px 18px',
      borderBottom: '1px solid var(--border-divider)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: '#FF5F57'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: '#FEBC2E'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: '#28C840'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 12,
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "Estimate \xB7 14 Maple Ave")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginBottom: 14
    }
  }, "Pick a package to send"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 12
    }
  }, tiers.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.name,
    style: {
      border: t.active ? '2px solid var(--color-primary)' : '1px solid var(--border-card)',
      borderRadius: 12,
      padding: 16,
      position: 'relative',
      background: t.active ? 'var(--surface-hover)' : '#fff'
    }
  }, t.active && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -10,
      right: 12,
      background: 'var(--color-primary)',
      color: '#fff',
      fontSize: 10,
      fontWeight: 700,
      fontFamily: 'var(--font-mono)',
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      padding: '3px 8px',
      borderRadius: 999
    }
  }, "Recommended"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      marginBottom: 6,
      color: t.active ? 'var(--color-primary-press)' : 'var(--text-primary)'
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 26,
      letterSpacing: '-.02em'
    }
  }, t.price), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, t.sub)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "Gross margin ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--status-success-fg)'
    }
  }, "42%")), /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--color-primary)',
      color: '#fff',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      padding: '10px 20px',
      borderRadius: 8
    }
  }, "Send estimate"))));
}
Object.assign(__ds_scope, { QuoteEstimate });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/QuoteEstimate.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sense/sense.jsx
try { (() => {
/* Zuper Sense — AI command center (dark). Self-contained screen parts. */

const SIco = ({
  size = 20,
  sw = 1.7,
  children
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: sw,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, children);
const NavGrid = p => /*#__PURE__*/React.createElement(SIco, p, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "3",
  width: "7",
  height: "7",
  rx: "1.5"
}), /*#__PURE__*/React.createElement("rect", {
  x: "14",
  y: "3",
  width: "7",
  height: "7",
  rx: "1.5"
}), /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "14",
  width: "7",
  height: "7",
  rx: "1.5"
}), /*#__PURE__*/React.createElement("rect", {
  x: "14",
  y: "14",
  width: "7",
  height: "7",
  rx: "1.5"
}));
const NavCal = p => /*#__PURE__*/React.createElement(SIco, p, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "5",
  width: "18",
  height: "16",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 9h18M8 3v4M16 3v4"
}));
const NavMap = p => /*#__PURE__*/React.createElement(SIco, p, /*#__PURE__*/React.createElement("path", {
  d: "M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 4v14M15 6v14"
}));
const NavFile = p => /*#__PURE__*/React.createElement(SIco, p, /*#__PURE__*/React.createElement("path", {
  d: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 3v5h5"
}));
const NavChart = p => /*#__PURE__*/React.createElement(SIco, p, /*#__PURE__*/React.createElement("path", {
  d: "M4 20V10M10 20V4M16 20v-7M22 20H2"
}));
const NavSpark = p => /*#__PURE__*/React.createElement(SIco, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"
}));
const NavSearch = p => /*#__PURE__*/React.createElement(SIco, p, /*#__PURE__*/React.createElement("circle", {
  cx: "11",
  cy: "11",
  r: "7"
}), /*#__PURE__*/React.createElement("path", {
  d: "m21 21-4.3-4.3"
}));
const NavBell = p => /*#__PURE__*/React.createElement(SIco, p, /*#__PURE__*/React.createElement("path", {
  d: "M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"
}));
function SenseSidebar({
  active,
  setActive
}) {
  const items = [['Overview', NavGrid], ['Dispatch', NavMap], ['Schedule', NavCal], ['Jobs', NavFile], ['Insights', NavChart]];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 232,
      background: '#0E0E11',
      borderRight: '1px solid #27272A',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/zuper-horizontal-white.png",
    alt: "Zuper",
    style: {
      height: 24,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: '.12em',
      color: '#FF8B5A',
      border: '1px solid #3F3F46',
      borderRadius: 5,
      padding: '2px 6px'
    }
  }, "Sense")), /*#__PURE__*/React.createElement("nav", {
    style: {
      padding: '8px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, items.map(([label, I]) => {
    const on = label === active;
    return /*#__PURE__*/React.createElement("button", {
      key: label,
      onClick: () => setActive(label),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 12px',
        borderRadius: 9,
        border: 0,
        cursor: 'pointer',
        textAlign: 'left',
        background: on ? '#1C1C21' : 'transparent',
        color: on ? '#FAFAFA' : '#A1A1AA',
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        fontWeight: on ? 600 : 500
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: on ? '#FF8B5A' : '#71717A',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(I, null)), label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: 16,
      borderTop: '1px solid #27272A',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: '#FF8B5A',
      color: '#191919',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontFamily: 'var(--font-display)',
      fontSize: 13
    }
  }, "MT"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: '#FAFAFA'
    }
  }, "Maya Torres"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#71717A'
    }
  }, "Dispatcher"))));
}
function SenseTopbar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 60,
      borderBottom: '1px solid #27272A',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 24px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: '#141417',
      border: '1px solid #27272A',
      borderRadius: 9,
      padding: '8px 12px',
      width: 320,
      color: '#71717A'
    }
  }, /*#__PURE__*/React.createElement(NavSearch, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, "Ask Sense or search jobs\u2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      color: '#A1A1AA'
    }
  }, /*#__PURE__*/React.createElement(NavBell, {
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      background: 'rgba(255,139,90,.14)',
      color: '#FF8B5A',
      borderRadius: 999,
      padding: '6px 12px',
      fontSize: 13,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(NavSpark, {
    size: 15
  }), "Sense active")));
}
function SenseDashboard() {
  const insights = [{
    t: 'Reroute Crew B',
    d: 'Two jobs on the east side can be swapped to save 41 min of drive time.',
    tag: 'Routing'
  }, {
    t: '3 jobs at risk',
    d: 'Materials not confirmed for tomorrow\u2019s tear-offs. Nudge suppliers?',
    tag: 'Risk'
  }, {
    t: 'Margin alert',
    d: 'Job #4192 trending 12% under estimate — labor overrun on day 2.',
    tag: 'Profitability'
  }];
  const board = [{
    t: '8:00',
    n: 'Tear-off — 14 Maple Ave',
    who: 'Crew A',
    tone: 'success',
    s: 'Completed'
  }, {
    t: '9:30',
    n: 'Roof inspection — Summit Plaza',
    who: 'M. Reyes',
    tone: 'info',
    s: 'En route'
  }, {
    t: '11:00',
    n: 'Leak repair — 9 Oak Court',
    who: 'Crew B',
    tone: 'warning',
    s: 'Scheduled'
  }, {
    t: '13:30',
    n: 'Gutter install — 220 Pine St',
    who: 'Crew A',
    tone: 'warning',
    s: 'Scheduled'
  }, {
    t: '15:00',
    n: 'Estimate — 5 Birch Ln',
    who: 'M. Torres',
    tone: 'neutral',
    s: 'Unassigned'
  }];
  const toneColor = {
    success: ['#103D26', '#4ADE80'],
    info: ['#13294B', '#60A5FA'],
    warning: ['#3A2A0A', '#FBBF24'],
    neutral: ['#27272A', '#A1A1AA']
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      color: '#FAFAFA',
      margin: 0,
      letterSpacing: '-.02em'
    }
  }, "Good morning, Maya"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#A1A1AA',
      fontSize: 14,
      margin: '6px 0 0'
    }
  }, "12 jobs scheduled today \xB7 3 crews active \xB7 Sense found 3 things worth your attention.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16,
      marginBottom: 22
    }
  }, [['On-time today', '92%', '#4ADE80'], ['Jobs completed', '7 / 12', '#FAFAFA'], ['Revenue booked', '$48.2k', '#FAFAFA'], ['Avg margin', '34%', '#FF8B5A']].map(([l, v, c]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      background: '#141417',
      border: '1px solid #27272A',
      borderRadius: 'var(--radius-card)',
      padding: '16px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#71717A',
      marginBottom: 8,
      fontFamily: 'var(--font-mono)',
      textTransform: 'uppercase',
      letterSpacing: '.06em'
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 28,
      color: c,
      letterSpacing: '-.02em'
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#141417',
      border: '1px solid #27272A',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px',
      borderBottom: '1px solid #27272A',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: '#FAFAFA'
    }
  }, "Today\u2019s board"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: '#71717A'
    }
  }, "Tue, Jun 25")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 10
    }
  }, board.map(j => {
    const [bg, fg] = toneColor[j.tone];
    return /*#__PURE__*/React.createElement("div", {
      key: j.n,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '12px',
        borderRadius: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: '#71717A',
        width: 42
      }
    }, j.t), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 14,
        color: '#FAFAFA'
      }
    }, j.n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: '#71717A'
      }
    }, j.who)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        padding: '4px 10px',
        borderRadius: 999,
        background: bg,
        color: fg
      }
    }, j.s));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(180deg,#1A130F,#141417)',
      border: '1px solid #3A2A1F',
      borderRadius: 'var(--radius-card)',
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 14,
      color: '#FF8B5A'
    }
  }, /*#__PURE__*/React.createElement(NavSpark, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16
    }
  }, "Sense insights")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, insights.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.t,
    style: {
      background: '#141417',
      border: '1px solid #27272A',
      borderRadius: 12,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: '#FAFAFA'
    }
  }, it.t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      color: '#FF8B5A'
    }
  }, it.tag)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 10px',
      fontSize: 13,
      lineHeight: 1.5,
      color: '#A1A1AA'
    }
  }, it.d), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      border: 0,
      borderRadius: 8,
      padding: '7px 14px',
      fontSize: 13,
      fontWeight: 600,
      background: '#FD5000',
      color: '#fff',
      cursor: 'pointer'
    }
  }, "Apply"), /*#__PURE__*/React.createElement("button", {
    style: {
      border: '1px solid #3F3F46',
      borderRadius: 8,
      padding: '7px 14px',
      fontSize: 13,
      fontWeight: 600,
      background: 'transparent',
      color: '#A1A1AA',
      cursor: 'pointer'
    }
  }, "Dismiss"))))))));
}
function SenseApp() {
  const [active, setActive] = React.useState('Overview');
  return /*#__PURE__*/React.createElement("div", {
    className: "zuper-sense",
    style: {
      display: 'flex',
      height: '100vh',
      background: '#09090B',
      color: '#FAFAFA',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(SenseSidebar, {
    active: active,
    setActive: setActive
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(SenseTopbar, null), /*#__PURE__*/React.createElement(SenseDashboard, null)));
}
Object.assign(window, {
  SenseApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sense/sense.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/home.jsx
try { (() => {
/* Zuper website — home page sections */

function Hero() {
  const {
    Button
  } = window.ZuperDesignSystem_4b4e77;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--gradient-brand)',
      color: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '84px 32px 0',
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 84
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      color: 'rgba(255,255,255,.85)',
      marginBottom: 18
    }
  }, "The AI OS for field service"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 56,
      lineHeight: 1.04,
      letterSpacing: '-.03em',
      margin: 0,
      textWrap: 'balance'
    }
  }, "Run service from first call to final invoice"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.55,
      color: 'rgba(255,255,255,.92)',
      maxWidth: 460,
      margin: '20px 0 28px'
    }
  }, "Schedule the right tech, win the quote on-site, and get paid faster \u2014 with AI handling the busywork in the background."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "black",
    size: "lg"
  }, "Test drive Zuper"), /*#__PURE__*/React.createElement(Button, {
    variant: "whiteOutline",
    size: "lg"
  }, "Watch the tour")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      fontSize: 13,
      color: 'rgba(255,255,255,.8)'
    }
  }, "Trusted by roofing, HVAC, plumbing & solar crews nationwide.")), /*#__PURE__*/React.createElement(ProductScreenshot, null)));
}

/* Clean HTML mock of a product screen, floating as a rounded shadowed card */
function ProductScreenshot() {
  const {
    Badge
  } = window.ZuperDesignSystem_4b4e77;
  const jobs = [{
    t: '8:00',
    n: 'Tear-off — 14 Maple Ave',
    who: 'Crew A',
    tone: 'success',
    s: 'Completed'
  }, {
    t: '10:30',
    n: 'Inspection — Summit Plaza',
    who: 'M. Torres',
    tone: 'info',
    s: 'En route'
  }, {
    t: '13:00',
    n: 'Repair — 9 Oak Court',
    who: 'Crew B',
    tone: 'warning',
    s: 'Scheduled'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'end',
      transform: 'translateY(24px)',
      background: '#fff',
      borderRadius: '16px 16px 0 0',
      boxShadow: 'var(--shadow-float)',
      overflow: 'hidden',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '12px 16px',
      borderBottom: '1px solid var(--border-divider)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: '#FF5F57'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: '#FEBC2E'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: '#28C840'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 12,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "Today \xB7 Dispatch board")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, jobs.map(j => /*#__PURE__*/React.createElement("div", {
    key: j.n,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '12px 12px',
      borderRadius: 10,
      marginBottom: 8,
      border: '1px solid var(--border-card)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-muted)',
      width: 42
    }
  }, j.t), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, j.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, j.who)), /*#__PURE__*/React.createElement(Badge, {
    tone: j.tone,
    dot: true
  }, j.s)))));
}
function ProductGrid() {
  const {
    Eyebrow
  } = window.ZuperDesignSystem_4b4e77;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "One platform"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 38,
      letterSpacing: '-.02em',
      margin: '12px 0 0',
      textWrap: 'balance'
    }
  }, "Everything between the call and the cash")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20
    }
  }, window.PRODUCTS.map(p => {
    const I = p.icon;
    return /*#__PURE__*/React.createElement("div", {
      key: p.name,
      className: "zcard",
      style: {
        background: 'var(--surface-white)',
        border: '1px solid var(--border-card)',
        borderRadius: 'var(--radius-card)',
        padding: 24,
        boxShadow: 'var(--shadow-card)',
        transition: 'transform .2s, box-shadow .2s'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        borderRadius: 12,
        background: 'var(--surface-banner)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-primary)',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(I, null)), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 17,
        margin: '0 0 6px',
        letterSpacing: '-.01em'
      }
    }, p.name), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14,
        color: 'var(--text-secondary)',
        lineHeight: 1.5
      }
    }, p.desc));
  })));
}
function Industries() {
  const {
    Eyebrow
  } = window.ZuperDesignSystem_4b4e77;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-warm)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '80px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Built for your trade"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 32,
      letterSpacing: '-.02em',
      margin: '12px 0 0'
    }
  }, "Tuned to how your crews actually work"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)',
      gap: 16
    }
  }, window.INDUSTRIES.map(ind => {
    const I = ind.icon;
    return /*#__PURE__*/React.createElement("div", {
      key: ind.name,
      style: {
        background: '#fff',
        border: '1px solid var(--border-card)',
        borderRadius: 'var(--radius-md)',
        padding: '22px 12px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        borderRadius: 12,
        background: 'var(--icon-tile)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-primary)',
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(I, null)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 14
      }
    }, ind.name));
  }))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mini-humans/carrying-gear.gif",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 64,
      bottom: 0,
      height: 78,
      width: 'auto',
      display: 'block'
    }
  }));
}
function FeatureDark() {
  const {
    Button,
    Eyebrow
  } = window.ZuperDesignSystem_4b4e77;
  const stats = [['28%', 'less drive time'], ['1 in 3', 'quotes won on-site'], ['2 days', 'faster to invoice']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-charcoal)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '88px 32px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "#FF8B5A"
  }, "Zuper Sense"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 36,
      letterSpacing: '-.02em',
      margin: '14px 0 16px',
      textWrap: 'balance'
    }
  }, "AI that dispatches, summarizes, and spots the margin"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,.8)',
      maxWidth: 440,
      margin: '0 0 28px'
    }
  }, "Sense reads every job, routes the nearest qualified tech, and flags the work that's quietly losing you money \u2014 before the week is over."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "See Zuper Sense")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, stats.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 16,
      padding: '20px 24px',
      background: '#1C1C21',
      border: '1px solid #27272A',
      borderRadius: 'var(--radius-card)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 36,
      color: '#FF8B5A',
      letterSpacing: '-.02em'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'rgba(255,255,255,.8)'
    }
  }, l))))));
}
function CTA() {
  const {
    Button
  } = window.ZuperDesignSystem_4b4e77;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: '0 auto',
      padding: '96px 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 44,
      letterSpacing: '-.03em',
      margin: 0,
      textWrap: 'balance'
    }
  }, "Ready to run a tighter operation?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--text-secondary)',
      margin: '16px 0 28px'
    }
  }, "Set up in a day. No rip-and-replace. Cancel anytime."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Book a demo"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "See pricing"))));
}
Object.assign(window, {
  Hero,
  ProductGrid,
  Industries,
  FeatureDark,
  CTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/parts.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Zuper website — shared chrome: icons, header (with mega-menu), footer */

// ---- Inline single-weight outline icons (stroke:currentColor, fill:none) ----
const Ico = ({
  d,
  size = 22,
  sw = 1.7,
  children
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: sw,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, d ? /*#__PURE__*/React.createElement("path", {
  d: d
}) : children);
const IconChevron = p => /*#__PURE__*/React.createElement(Ico, _extends({}, p, {
  d: "m6 9 6 6 6-6",
  size: 16
}));
const IconArrow = p => /*#__PURE__*/React.createElement(Ico, _extends({}, p, {
  d: "M5 12h14M13 6l6 6-6 6",
  size: 18
}));
const IconRoof = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("path", {
  d: "M3 11 12 4l9 7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 10v10h14V10"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 20v-6h6v6"
}));
const IconBolt = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("path", {
  d: "M13 2 4 14h7l-1 8 9-12h-7l1-8Z"
}));
const IconWrench = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("path", {
  d: "M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 1 5.4-5.4l-2.7 2.7-2-2 2.7-2.7Z"
}));
const IconDrop = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"
}));
const IconSun = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"
}));
const IconShield = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 3 5 6v6c0 4 3 7 7 8 4-1 7-4 7-8V6l-7-3Z"
}));
const IconCalendar = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "5",
  width: "18",
  height: "16",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 9h18M8 3v4M16 3v4"
}));
const IconDollar = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 2v20M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
}));
const IconSpark = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"
}));
const IconFile = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("path", {
  d: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 3v5h5M9 13h6M9 17h6"
}));
const IconMenu = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("path", {
  d: "M4 6h16M4 12h16M4 18h16"
}));
const IconClose = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("path", {
  d: "M18 6 6 18M6 6l12 12"
}));
const PRODUCTS = [{
  icon: IconCalendar,
  name: 'Scheduling & Dispatch',
  desc: 'Drag-and-drop board, smart routing'
}, {
  icon: IconFile,
  name: 'Intelligent Quoting',
  desc: 'Branded estimates, sent on-site'
}, {
  icon: IconDollar,
  name: 'Job Costing & Profitability',
  desc: 'See margin on every job'
}, {
  icon: IconSpark,
  name: 'Zuper Sense (AI)',
  desc: 'Auto-dispatch, summaries, insights'
}];
const INDUSTRIES = [{
  icon: IconRoof,
  name: 'Roofing'
}, {
  icon: IconWrench,
  name: 'HVAC'
}, {
  icon: IconDrop,
  name: 'Plumbing'
}, {
  icon: IconBolt,
  name: 'Electrical'
}, {
  icon: IconSun,
  name: 'Solar'
}, {
  icon: IconShield,
  name: 'Security'
}];
function Wordmark({
  variant = 'light',
  height = 30
}) {
  const src = variant === 'white' ? '../../assets/logos/zuper-horizontal-white.png' : '../../assets/logos/zuper-horizontal.png';
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Zuper",
    style: {
      height,
      width: 'auto',
      display: 'block'
    }
  });
}
function Header({
  onToggleMenu,
  menuOpen
}) {
  const {
    Button
  } = window.ZuperDesignSystem_4b4e77;
  const link = {
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    fontWeight: 500,
    color: 'var(--text-secondary)',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'rgba(255,255,255,.9)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-divider)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 32px',
      height: 68,
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 26,
      alignItems: 'center',
      marginLeft: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...link,
      color: menuOpen ? 'var(--color-primary)' : link.color
    },
    onClick: onToggleMenu
  }, "Products ", /*#__PURE__*/React.createElement(IconChevron, null)), /*#__PURE__*/React.createElement("span", {
    style: link
  }, "Industries"), /*#__PURE__*/React.createElement("span", {
    style: link
  }, "Pricing"), /*#__PURE__*/React.createElement("span", {
    style: link
  }, "Resources")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "md"
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md"
  }, "Book a demo"))), menuOpen && /*#__PURE__*/React.createElement(MegaMenu, null));
}
function MegaMenu() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-divider)',
      background: 'var(--surface-white)',
      boxShadow: 'var(--shadow-float)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '24px 32px',
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 12
    }
  }, PRODUCTS.map(p => {
    const I = p.icon;
    return /*#__PURE__*/React.createElement("div", {
      key: p.name,
      className: "zmega",
      style: {
        display: 'flex',
        gap: 14,
        padding: 14,
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-peach)',
        cursor: 'pointer',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        borderRadius: 10,
        background: '#fff',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-primary)',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(I, null)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontFamily: 'var(--font-display)',
        fontSize: 15,
        color: 'var(--text-primary)'
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-secondary)'
      }
    }, p.desc)), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--color-primary)'
      }
    }, /*#__PURE__*/React.createElement(IconArrow, null)));
  })));
}
function Footer() {
  const cols = [['Product', ['Scheduling', 'Quoting', 'Job costing', 'Zuper Sense', 'Mobile app']], ['Industries', ['Roofing', 'HVAC', 'Plumbing', 'Electrical', 'Solar']], ['Company', ['About', 'Customers', 'Careers', 'Contact']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--gradient-brand)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '56px 32px 40px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wordmark, {
    variant: "white",
    height: 30
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      maxWidth: 240,
      lineHeight: 1.55,
      color: 'rgba(255,255,255,.9)',
      fontSize: 14
    }
  }, "The AI operating system for field service \u2014 from first call to final invoice.")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      color: 'rgba(255,255,255,.75)',
      marginBottom: 14
    }
  }, h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontSize: 14,
      color: 'rgba(255,255,255,.95)',
      cursor: 'pointer'
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,.25)',
      maxWidth: 1200,
      margin: '0 auto',
      padding: '18px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      color: 'rgba(255,255,255,.85)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Zuper, Inc."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", null, "Privacy"), /*#__PURE__*/React.createElement("span", null, "Terms"), /*#__PURE__*/React.createElement("span", null, "Security"))));
}
Object.assign(window, {
  Ico,
  IconChevron,
  IconArrow,
  IconArrow,
  IconSpark,
  IconMenu,
  IconClose,
  PRODUCTS,
  INDUSTRIES,
  Wordmark,
  Header,
  MegaMenu,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.DispatchBoard = __ds_scope.DispatchBoard;

__ds_ns.JobCosting = __ds_scope.JobCosting;

__ds_ns.MobileJob = __ds_scope.MobileJob;

__ds_ns.QuoteEstimate = __ds_scope.QuoteEstimate;

})();

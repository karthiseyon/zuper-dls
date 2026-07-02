import * as React from 'react';

/**
 * Zuper logomark (the official 4-parallelogram "Z"), inline SVG, recolorable.
 * For the full lockup (mark + ZUPER wordmark) use the assets in assets/logos/.
 * @startingPoint section="Brand" subtitle="Recolorable logomark + lockup tones" viewport="700x200"
 */
export interface LogoProps {
  /** Color treatment. `color` = orange + charcoal; `inverted` = orange on dark. */
  tone?: 'color' | 'ink' | 'gray' | 'white' | 'inverted';
  /** Square size in px. */
  size?: number;
  style?: React.CSSProperties;
}
export function Logo(props: LogoProps): JSX.Element;

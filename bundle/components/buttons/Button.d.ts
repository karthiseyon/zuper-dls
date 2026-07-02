import * as React from 'react';

/**
 * Zuper primary button. Use exactly one orange `primary` action per view;
 * on orange or photo grounds use `black` or `whiteOutline` instead.
 *
 * @dsCard buttons
 * @startingPoint section="Buttons" subtitle="Primary, secondary & on-ground variants" viewport="700x180"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. One orange primary per view. */
  variant?: 'primary' | 'secondary' | 'black' | 'whiteOutline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button(props: ButtonProps): JSX.Element;

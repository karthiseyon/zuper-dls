import * as React from 'react';

/**
 * Single-line text field with optional label, hint, error and leading line-icon.
 * @startingPoint section="Forms" subtitle="Inputs, select, checkbox & switch" viewport="700x320"
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  hint?: string;
  error?: string;
  iconLeft?: React.ReactNode;
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}
export function Input(props: InputProps): JSX.Element;

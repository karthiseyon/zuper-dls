import * as React from 'react';

export interface SelectOption { value: string; label: string; }
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'style'> {
  label?: string;
  options: (string | SelectOption)[];
  hint?: string;
  style?: React.CSSProperties;
}
export function Select(props: SelectProps): JSX.Element;

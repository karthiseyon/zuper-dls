import * as React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  tone?: 'success' | 'warning' | 'error' | 'info' | 'neutral';
  dot?: boolean;
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;

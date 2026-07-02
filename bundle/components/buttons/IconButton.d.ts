import * as React from 'react';

/**
 * Square icon-only button. Children must be a single-weight outline icon
 * (stroke:currentColor) from the Zuper outline set — never a filled icon or emoji.
 */
export interface IconButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  ariaLabel?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function IconButton(props: IconButtonProps): JSX.Element;

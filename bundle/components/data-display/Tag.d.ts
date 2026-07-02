import * as React from 'react';

export interface TagProps {
  children: React.ReactNode;
  onRemove?: () => void;
  style?: React.CSSProperties;
}
export function Tag(props: TagProps): JSX.Element;

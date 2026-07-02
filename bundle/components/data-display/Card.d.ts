import * as React from 'react';

/**
 * Content surface — white with soft shadow by default.
 * @startingPoint section="Cards" subtitle="Default, peach & dark surfaces" viewport="700x260"
 */
export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'peach' | 'dark';
  padding?: number;
  hoverable?: boolean;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;

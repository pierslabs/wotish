import { JSX } from 'react';

export interface CardProps {
  text: string;
  icon: JSX.Element;
  title: string;
  path: string;
  key?: string;
}

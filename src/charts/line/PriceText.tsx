import * as React from 'react';
import { ReText } from 'react-native-redash';
import type { TextProps as RNTextProps } from 'react-native';
import type Animated from 'react-native-reanimated';

import { useLineChartPrice } from './usePrice';

export type LineChartPriceTextProps = {
  format?: any;
  precision?: number;
  variant?: 'formatted' | 'value';
  style?: Animated.AnimateProps<RNTextProps>['style'];
};

export function LineChartPriceText({
  format,
  precision = 2,
  variant = 'formatted',
  ...props
}: LineChartPriceTextProps) {
  const price = useLineChartPrice({ format, precision });
  return <ReText text={price[variant]} {...props} />;
}

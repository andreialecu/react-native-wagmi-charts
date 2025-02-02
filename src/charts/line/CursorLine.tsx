import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import Svg, { Line as SVGLine, LineProps } from 'react-native-svg';

import { LineChartDimensionsContext } from './Chart';
import { LineChartCursor } from './Cursor';
import { useLineChart } from './useLineChart';

type LineChartCursorLineProps = {
  children?: React.ReactNode;
  color?: string;
  lineProps?: Partial<LineProps>;
};

export const LineChartCursorLine = ({
  children,
  color = 'gray',
  lineProps = {},
}: LineChartCursorLineProps) => {
  const { height } = React.useContext(LineChartDimensionsContext);
  const { currentX, isActive } = useLineChart();

  const vertical = useAnimatedStyle(() => ({
    opacity: isActive.value ? 1 : 0,
    height: '100%',
    transform: [{ translateX: currentX.value }],
  }));

  return (
    <LineChartCursor type="line">
      <Animated.View style={vertical}>
        <Svg style={StyleSheet.absoluteFill}>
          <SVGLine
            x1={0}
            y1={0}
            x2={0}
            y2={height}
            strokeWidth={2}
            stroke={color}
            strokeDasharray="3 3"
            {...lineProps}
          />
        </Svg>
      </Animated.View>
      {children}
    </LineChartCursor>
  );
};

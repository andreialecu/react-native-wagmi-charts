import * as React from 'react';
import { Box, Button, Flex, Heading, Text, Stack } from 'bumbag-native';
import { CandlestickChart } from 'react-native-wagmi-charts';

import mockData from './data/candlestick-data.json';
import mockData2 from './data/candlestick-data2.json';

import * as haptics from 'expo-haptics';

function invokeHaptic(value: number) {
  if (value !== 0) {
    haptics.impactAsync(haptics.ImpactFeedbackStyle.Light);
  }
}

export default function App() {
  const [data, setData] = React.useState<any>(mockData);

  return (
    <>
      <Heading.H5 paddingX="major-2" marginBottom="major-2">
        Candlestick Chart 🕯
      </Heading.H5>
      <CandlestickChart.Provider data={data}>
        <CandlestickChart>
          <CandlestickChart.Candles />
          <CandlestickChart.Crosshair onCurrentXChange={invokeHaptic}>
            <CandlestickChart.Tooltip />
          </CandlestickChart.Crosshair>
        </CandlestickChart>
        <Heading.H6>Load Data</Heading.H6>
        <Box marginTop="major-2">
          <Flex flexWrap={'wrap'}>
            <Button onPress={() => setData(mockData)}>candlestick-data</Button>
            <Button onPress={() => setData(mockData2)}>
              candlestick-data2
            </Button>
          </Flex>
        </Box>
        <Stack padding="major-2" spacing="major-1">
          <Heading.H6>PriceText</Heading.H6>
          <Box>
            <Text fontWeight="500">Formatted: </Text>
            <Flex>
              <Box flex="1">
                <Text fontSize="100">Current</Text>
                <CandlestickChart.PriceText />
              </Box>
              <Box flex="1">
                <Text fontSize="100">Open</Text>
                <CandlestickChart.PriceText type="open" />
              </Box>
              <Box flex="1">
                <Text fontSize="100">High</Text>
                <CandlestickChart.PriceText type="high" />
              </Box>
              <Box flex="1">
                <Text fontSize="100">Low</Text>
                <CandlestickChart.PriceText type="low" />
              </Box>
              <Box flex="1">
                <Text fontSize="100">Close</Text>
                <CandlestickChart.PriceText type="close" />
              </Box>
            </Flex>
          </Box>
          <Box>
            <Text fontWeight="500">Value: </Text>
            <Flex>
              <Box flex="1">
                <Text fontSize="100">Current</Text>
                <CandlestickChart.PriceText variant="value" />
              </Box>
              <Box flex="1">
                <Text fontSize="100">Open</Text>
                <CandlestickChart.PriceText type="open" variant="value" />
              </Box>
              <Box flex="1">
                <Text fontSize="100">High</Text>
                <CandlestickChart.PriceText type="high" variant="value" />
              </Box>
              <Box flex="1">
                <Text fontSize="100">Low</Text>
                <CandlestickChart.PriceText type="low" variant="value" />
              </Box>
              <Box flex="1">
                <Text fontSize="100">Close</Text>
                <CandlestickChart.PriceText type="close" variant="value" />
              </Box>
            </Flex>
          </Box>
          <Box>
            <Text fontWeight="500">Custom format: </Text>
            <Flex>
              <Box flex="1">
                <Text fontSize="100">Current</Text>
                <CandlestickChart.PriceText
                  format={(d: any) => {
                    'worklet';
                    return `$${d.formatted} AUD`;
                  }}
                />
              </Box>
              <Box flex="1">
                <Text fontSize="100">Open</Text>
                <CandlestickChart.PriceText
                  type="open"
                  format={(d: any) => {
                    'worklet';
                    return `$${d.formatted} AUD`;
                  }}
                />
              </Box>
              <Box flex="1">
                <Text fontSize="100">Close</Text>
                <CandlestickChart.PriceText
                  type="close"
                  format={(d: any) => {
                    'worklet';
                    return `$${d.formatted} AUD`;
                  }}
                />
              </Box>
            </Flex>
          </Box>
        </Stack>
        <Stack padding="major-2" spacing="minor-1">
          <Heading.H6>DatetimeText</Heading.H6>
          <Flex>
            <Text fontWeight="500">Formatted: </Text>
            <CandlestickChart.DatetimeText />
          </Flex>
          <Flex>
            <Text fontWeight="500">Float: </Text>
            <CandlestickChart.DatetimeText variant="value" />
          </Flex>
          <Flex>
            <Text fontWeight="500">Custom format: </Text>
            <CandlestickChart.DatetimeText
              locale="en-AU"
              options={{
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
              }}
            />
          </Flex>
        </Stack>
      </CandlestickChart.Provider>
    </>
  );
}

import React from 'react';
import AppDetailsDay from './appDetailsDay';
import { render, screen } from '@testing-library/react';

const testIds = {
  date: 'date',
  maxTemp: 'max-temp',
  maxWindSpeed: 'max-wind',
  minTemp: 'min-temp',
  sunrise: 'sunrise',
  sunset: 'sunset',
  symbol: 'symbol',
  symbolPhrase: 'phrase',
  confidence: 'confidence'
};

const props = {
  date: '22-12-04',
  maxTemp: 1,
  maxWindSpeed: 2,
  minTemp: -1,
  sunrise: '12:00:00',
  sunset: '00:00:00',
  symbol: 'd400',
  symbolPhrase: 'good',
  confidence: 'g'
};

describe('AppDetailsDay', () => {
  it('First test - data output check', () => {
    render(
      <AppDetailsDay
        date={props.date}
        maxTemp={props.maxTemp}
        maxWindSpeed={props.maxWindSpeed}
        minTemp={props.minTemp}
        sunrise={props.sunrise}
        sunset={props.sunset}
        symbol={props.symbol}
        symbolPhrase={props.symbolPhrase}
        confidence={props.confidence}
      />
    );
    const dateEl = screen.getByTestId(testIds.date);
    const confidenceEl = screen.getByTestId(testIds.confidence);
    const symbol = screen.getByTestId(testIds.symbol);
    const maxTemp = screen.getByTestId(testIds.maxTemp);
    const minTemp = screen.getByTestId(testIds.minTemp);
    const maxWind = screen.getByTestId(testIds.maxWindSpeed);
    const sunrise = screen.getByTestId(testIds.sunrise);
    const sunset = screen.getByTestId(testIds.sunset);

    expect(dateEl).not.toBe('today');
    expect(confidenceEl.getAttribute('src')).toBe('./images/g.png');
    expect(confidenceEl.getAttribute('alt')).toBe('Confidence - g');
    expect(symbol.getAttribute('src')).toBe('./images/d400.png');
    expect(symbol.getAttribute('alt')).toBe('good');
    expect(maxTemp).toBeDefined();
    expect(minTemp).toBeDefined();
    expect(maxWind).toBeDefined();
    expect(sunrise).toBeDefined();
    expect(sunset).toBeDefined();
  });
});

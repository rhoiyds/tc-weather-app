import React, {} from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { Weather } from './Weather';
import configureStore from 'redux-mock-store'

const middlewares = []
const mockStore = configureStore(middlewares)

test('Humidity should be displayed with the value from the store', () => {

  // Initialize mockstore with data that should have humidity 66
  const initialState = {
    weather: {
      temperature: 7,
      humidity: 66,
      windSpeed: 4,
      icon: '01n',
      city: 'Yuzawa',
      condition: 'Clear'
    },
    cities: {
      all: []
    }
  }

  const store = mockStore(initialState)

  const { getByText } = render(
    <Provider store={store}>
      <Weather />
    </Provider>
  );
  expect(getByText(/66/i)).toBeInTheDocument();
});

test('City name should be displayed with the value from the store', () => {

  // Initialize mockstore with a city name 'Yuzawa'
  const initialState = {
    weather: {
      temperature: 7,
      humidity: 66,
      windSpeed: 4,
      icon: '01n',
      city: 'Yuzawa',
      condition: 'Clear'
    },
    cities: {
      all: []
    }
  }

  const store = mockStore(initialState)

  const { getByText } = render(
    <Provider store={store}>
      <Weather />
    </Provider>
  );
  expect(getByText(/Yuzawa/i)).toBeInTheDocument();
});

test('Flag icon should depict slow wind in small wind values', () => {

  // Initialize mockstore with data for small wind speeds
  const initialState = {
    weather: {
      temperature: 7,
      humidity: 66,
      windSpeed: 4,
      icon: '01n',
      city: 'Yuzawa',
      condition: 'Clear'
    },
    cities: {
      all: []
    }
  }

  const store = mockStore(initialState)

  render(
    <Provider store={store}>
      <Weather />
    </Provider>
  );

  const icon = screen.getByLabelText('flag-icon')
  expect(icon.classList.contains('wi-small-craft-advisory')).toBe(true)
});

test('Flag icon should gale wind in high wind values', () => {

  // Initialize mockstore with data for high wind speeds
  const initialState = {
    weather: {
      temperature: 7,
      humidity: 66,
      windSpeed: 55,
      icon: '01n',
      city: 'Yuzawa',
      condition: 'Clear'
    },
    cities: {
      all: []
    }
  }

  const store = mockStore(initialState)

  render(
    <Provider store={store}>
      <Weather />
    </Provider>
  );

  const icon = screen.getByLabelText('flag-icon')
  expect(icon.classList.contains('wi-gale-warning')).toBe(true)
});

test('Correct image will be displayed from remote host', () => {

  // Initialize mockstore with an image code for retrieving images from the remote host
  const initialState = {
    weather: {
      temperature: 7,
      humidity: 66,
      windSpeed: 4,
      icon: '01n',
      city: 'Yuzawa',
      condition: 'Clear'
    },
    cities: {
      all: []
    }
  }

  const store = mockStore(initialState)

  render(
    <Provider store={store}>
      <Weather />
    </Provider>
  );

  const weatherImage = screen.getByRole('img');
  expect(weatherImage).toHaveAttribute('src', 'https://openweathermap.org/img/wn/01n@4x.png');
});


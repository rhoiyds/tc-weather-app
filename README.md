# TC Weather App
Roy Porter's implementation of a programming competency test designed for proving basic knowledge in ReactJS and front end web technologies.

https://tc-weather-app.vercel.app/

https://tc-weather-app.vercel.app?city=Naha,Sapporo,Tokyo

### Functional requirements

- [x] Detect the current city using geolocation
- [x] Display the city name, current weather icon, temperature, humidity and wind speed
- [x] The background colour changes based on the temperature
- [x] Loads a specific city using the query string ‘?city=Tokyo’
- [x] Caches the API data and refresh it after 5m
- [x] Responsive design. It should work well in all devices (desktop/tablet/mobile)

### Tech stack

- [x] Cross-browser compatible back to Internet Explorer 11
- [x] Use the latest versions of TypeScript, ESLint, prettier, babel, webpack, Emotion, React (with Hooks, FC) and xState/Redux
- [x] Use data from OpenWeatherMap (or anywhere else) and axios for API requests
- [x] Use icons from WeatherIcons library or anywhere else
- [x] Use the League Gothic font or any other you prefer
- [x] Add some unit tests
- [x] Use a Git repository
- [x] Deploy using Netlify/Vercel/Amplify

### Tech stack

- [ ] High scores in Google Lighthouse Audit
- [ ] Use SSR with Razzle
- [x] Loads comma separated cities in the query string and rotates them after 5s
- [x] Use more sophisticated animated/video backgrounds depending on the weather conditions

### Notes

<details>
  <summary>Cache nightmares</summary>
  <p>
Encountered a bug in the library Axios Cache Adapter which meant Axios was not using the cache, even though I explicity set it to. Problem was eventually resolved after searching for a solution on the GitHub repo's known issues.
  </p>
</details>
<details>
  <summary>Responsive layout</summary>
  <p>
Used basic Flexbox layout principles to create a stretchy interface. If an alternative design was supplied for desktop, maybe media queries would be appropriate.
  </p>
</details>
<details>
  <summary>xState or Redux?</summary>
  <p>
Used Redux for my state management solution, as it's something I have familiarity with. If I were to redo the project, I would implement 'Thunk middleware' for completing HTTP requests amidst actions. My own promise-based solution caused more trouble for me in the long run.
  </p>
</details>
<details>
  <summary>Why is the main weather icon different?</summary>
  <p>
Used icons from the provided icon library, however I chose to use the main image provided by the OpenWeatherMaps API because they looked quite stylish and gave more variety (snow, mist, even hurricanes - very cool!)
  </p>
</details>
<details>
  <summary>Extension task - Comma separated list</summary>
  <p>
    I added the cities from the URL parameters (using Query String library) and the currently viewed city to the Redux store. Every 5 seconds I dispatch a Redux action to make the next city in the list the current city, which would trigger an action to retrieve data from the API, update the store, and hence the view.
  </p>
</details>
<details>
  <summary>Extension task - Animated background</summary>
  <p>
    I utilised Particles.JS, a javascript library for simulating particles. I hand-crafted some particle simulations resembling weather effects using Particle.js's online generation tool, and fed the configurations into the ReactJS compatible library React TSParticles.
  </p>
</details>

___

### Bootstrapping details

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


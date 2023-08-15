# React weather application

## Installation

NPM is strongly recommended instead of yarn

```
npm install
npm start
```

### Subject

This weather app is based on your location.

### Technologies

1. React
2. Redux
3. Router
4. Form
5. Formik + yup
6. Type checking: TS, prop-types, flow.

### Full description

The weather API used is: https://developer.foreca.com/#Forecasts. Note that this API **NOT** is public. The challenge was to create a
front-end for this API. The app doesn't have any login buttons to authenticate to the weather API. It is silent to the user. We needed to create the following parts (each page has a layout with a header, footer, and
navigation bar):

1. Home page with the weather for your current location for today and 12 days ahead.
2. Search page (drop down list of cities when entering more than 3 characters), where user can find weather for all cities of the world (all available cities).
3. Page with detailed information about the weather for three days about the selected (in the list from the previous paragraph) city.
4. An information page where the user can see some information about the service.
5. Feedback page with a form for feedback on your site.
   Implemented a mechanism to send the form and save it in the localStorage.
6. Implemented a dark/light mode for the application. There is a switch that changes the current view and remembers the selection in localStorage.

### P.S.

You need an API key #Forecast to use the application.

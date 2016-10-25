import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import LicenseEdit from './LicenseEdit'
import DocumentSection from './DocumentSection'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => (
  <MuiThemeProvider>
    <DocumentSection
      header="Licences"
      subHeader="Generate a custom open-source license for your project"
      endContent={
        <div>
          <div className="file-area">
            <LicenseEdit/>
          </div>
          <a href="https://opensource.org/licenses/alphabetical">
            More licenses available at OpenSource.org
          </a>
        </div>
      }
      />
  </MuiThemeProvider>
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

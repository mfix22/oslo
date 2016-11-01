import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

require('../sass/index.sass')
import LicenseEdit from './LicenseEdit'
import DocumentSection from './DocumentSection'
import reducer from './reducer'

const store = createStore(reducer)

const licenseDocs = [
  { filter : 'MIT', title : 'MIT'},
  { filter : 'ISC', title : 'ISC'},
  { filter : 'GNU', title : 'GNU (v3.0)'},
]

const equityDocs = [
  { title : "YC SAFE", link : "https://www.ycombinator.com/documents/"}
]

const App = () => (
  <div>
    <DocumentSection
      header="Licences"
      subHeader="Generate a custom open-source license for your project"
      cards={licenseDocs}
      endContent={
        <div>
          <LicenseEdit/>
          <a href="https://opensource.org/licenses/alphabetical">
            More licenses available at OpenSource.org
          </a>
        </div>
      }
    />
    <DocumentSection
      header="Equity Financing"
      subHeader="Use open source equity fundraising documents"
      cards={equityDocs}
    />
  </div>
);


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);

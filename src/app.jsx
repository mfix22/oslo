import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LicenseEdit from './LicenseEdit'
import MIT_License from 'to-string!../assets/documents/MIT_LICENSE.md'

import DocumentSection from './DocumentSection'

const App = () => (
  <MuiThemeProvider>
    <DocumentSection
      header="Licences"
      subHeader="Generate a custom open-source license for your project"
      endContent={
        <div>
          <div className="file-area">
            <LicenseEdit
              license={MIT_License}
            />
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
  <App />,
  document.getElementById('app')
);

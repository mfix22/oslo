import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LicenseEdit from './LicenseEdit'
import ContentEditable from './ContentEditable'
import FilterCard from './FilterCard'

const MIT_License = require('to-string!../assets/documents/MIT_LICENSE.md')


const App = () => (
  <MuiThemeProvider>
    <div className="grid">
      <FilterCard
        filter="MIT"
        title="MIT"
      />
      <FilterCard
        filter="MIT"
        title="MIT"
      />
      <FilterCard
        filter="MIT"
        title="MIT"
      />
      <div className="file-area">
        <LicenseEdit
          text={<ContentEditable text={MIT_License}/>}
          />
      </div>
      <a href="https://opensource.org/licenses/alphabetical">
        More licenses available at OpenSource.org
      </a>
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

import MIT_License from 'to-string!../assets/documents/MIT_LICENSE.md'
import ISC_License from 'to-string!../assets/documents/ISC_LICENSE.md'
import GNU_License from 'to-string!../assets/documents/GNU_LICENSE.md'

const initialState = {
  text : '',
  file_type_md : true,
}

const getTextFromFilter = (filter) => {
  const licenseMap = {
    'MIT' : MIT_License,
    'ISC' : ISC_License,
    'GNU' : GNU_License,
  }
  return licenseMap[filter]
}

const reducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'FILTER_LICENSE':
      return Object.assign({}, state, {
        text : getTextFromFilter(action.filter),
      });
    case 'TOGGLE_USE_MD':
      // if (state.id !== action.id) {
      //   return state
      // }
      return Object.assign({}, state, {
        file_type_md : !(state.file_type_md)
      });
    default: return state;
  }
}

export default reducer

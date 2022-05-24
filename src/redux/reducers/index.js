import { combineReducers } from 'redux';

// import bostonDeliveryReducers from '../../app/boston_delivery/redux/reducers/index'
// import bostonOfficerReducers from '../../app/boston_officer/redux/reducers/index'
import crmReducers from '../../app/crm/redux/reducers/index'



const allReducers = combineReducers({
    ...crmReducers,
    // ...bostonOfficerReducers,
    // ...bostonOfficerReducers,

});

export default allReducers;
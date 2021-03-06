import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'; // passando o reducer do redux-form para formReducer
import { reducer as toastrReducer } from 'react-redux-toastr';

import dashboardReducer from "../dashboard/dashboardReducer";
import TabReducer from "../common/tab/TabReducer";
import BillingCycleReducer from "../billingCycle/billingCycleReducer";
import authReducer from "../auth/authReducer";

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: authReducer
})

export default rootReducer
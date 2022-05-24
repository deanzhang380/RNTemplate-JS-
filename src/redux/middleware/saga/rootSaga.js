import { spawn, all, call} from 'redux-saga/effects';

// import watchBostonDelivery  from '../../../app/boston_delivery/redux/middleware/saga';
import watchCrm from '../../../app/crm/redux/middleware/saga';
// import watchBostonOfficer  from '../../../app/boston_officer/redux/middleware/saga';

export default  function* rootSaga () {
    const sagas = [
        // ...watchBostonDelivery,
        // ...watchBostonOfficer,
        ...watchCrm,
    ];
    
    yield all(sagas.map(saga =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      }))
    );
  }
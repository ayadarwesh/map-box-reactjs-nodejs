import { put, takeLatest, all } from 'redux-saga/effects';
import {login,users,polygons} from "../../services";

function* loginReq(action:any) {
    const data:{status:string,message:string}= yield login(action);
    let res :string | boolean = data.status;
    if(res  === 'success'){
       res = true;
       localStorage.setItem('user',action.payload.email);
    }else{
        res=false;
        alert(data.message);
    }
    yield put({ type: "LOGIN_RECEIVED", payload:res  });
}

function* usersReq() {
    const data:{users:[]} = yield users();
    yield put({ type: "USERS_RECEIVED", payload: data.users });
}

function* polygonsReq() {
    const data :{polygons:[]}= yield polygons();
    yield put({ type: "POLYGONS_RECEIVED", payload: data.polygons });
}
function* actionUsersWatcher() {
    yield takeLatest('GET_USERS', usersReq)
}
function* actionPolygonsWatcher() {
    yield takeLatest('GET_POLYGONS', polygonsReq)
}
function* actionLoginWatcher() {
    yield takeLatest('GET_LOGIN', loginReq)
}
export default function* rootSaga() {
    yield all([
        actionUsersWatcher(),
        actionPolygonsWatcher(),
        actionLoginWatcher()
    ]);
}

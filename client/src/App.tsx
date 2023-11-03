import React from 'react';
import {Route, Routes} from 'react-router-dom'
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "./redux/actions";
import Layout from './layouts/Layout';
import Page404 from "./pages/404";
import Login from "./pages/Login";
import Users from "./pages/Users";
import MapBox from "./pages/MapBox";

function App() {
    const dispatch = useDispatch();
    const isAuth = useSelector((state:any) => state.auth.isAuth)
    const user = useSelector((state:any) => state.auth.user)


    React.useEffect(() => {
        let user = localStorage.getItem('user')!;
        user && dispatch(setUser(user));
    },[]);

    React.useEffect(() => {
        if (isAuth) {
            dispatch(setUser(user));
        }
    }, [isAuth]);

    return (<Routes>
            <Route path="/" element={<Login/>}/>
            <Route
                path='/login'
                element={<Layout><Login/></Layout>}
            />
        {(isAuth || user) &&
            <React.Fragment>
        <Route
            path='/users'
            element={<Layout><Users/></Layout>}
        />
            <Route
            path='/map'
            element={<Layout><MapBox/></Layout>}
            />
            </React.Fragment>
        }
        <Route path="*" element={<Layout><Page404/></Layout>}/>
        </Routes>);
}

export default App;

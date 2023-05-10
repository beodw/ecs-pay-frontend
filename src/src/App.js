import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Layout from './components/layout/Layout';
import Login from './views/pages/login/Login';
import Otp from './views/pages/otp/Otp';
import 'react-data-grid/lib/styles.css';
import './App.css';
import {setFrontendConfig} from './redux/app/appSlice';
import {setBaseApi} from './utils';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {GetFrontendConfig} from './api/app.service';
import {Loader} from './components/Loader/_component';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	const [configLoaded, setConfigLoaded] = useState(false);
	const appState = useSelector((state) => state.app);
	const userStore = useSelector((state) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		document.body.style.overflow = appState.loading ? 'hidden' : 'auto';
	}, [appState?.loading]);

	useEffect(() => {
		GetFrontendConfig().then((res) => {
			dispatch(setFrontendConfig(res.data));
			document.title = res.data.appName;
			setBaseApi(res.data.apiBaseUrl);
			setConfigLoaded(true);
		});

		return () => {};
	}, []);

	return (
		<Router>
			{appState.loading ? (
				<div className='absolute inset-0 flex justify-center bg-gray-50 bg-opacity-70 items-center z-30'>
					<Loader />
				</div>
			) : null}
			{configLoaded ? (
				<Routes>
					{userStore.user == undefined ? (
						<>
							<Route exact path='*' name='Login Page' element={<Login />} />
							<Route exact path='/otp' name='Otp Page' element={<Otp />} />
						</>
					) : (
						<Route path='*' name='Home' element={<Layout />} />
					)}
				</Routes>
			) : null}
		</Router>
	);
}

export default App;

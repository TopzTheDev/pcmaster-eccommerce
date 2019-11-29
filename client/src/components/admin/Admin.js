import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Product from './pages/Product';
import SignInPage from './auth/SignInPage';
import { SnackbarProvider } from 'notistack';

import ToastNotif from './toast-notif/ToastNotif';
const Admin = () => {
	useEffect(() => {}, []);
	return (
		<Fragment>
			<Navbar />

			<SnackbarProvider>
				<Switch>
					<Route path='/admin/product' component={Product} />
					<Route path='/admin/sign-in' component={SignInPage}/>
				</Switch>
				<ToastNotif />
			</SnackbarProvider>
		</Fragment>
	);
};

export default Admin;

import store from '../store';

const authRoutes = ['Login', 'Register', 'ForgotPassword'];

export default (to, from, next) => {
  if (authRoutes.includes(to.name)) {
    if (store.state.isAuth) next({ name: 'Home' });
    else next();
  } else if (!store.state.isAuth) next({ name: 'Login' });
  else next();
};

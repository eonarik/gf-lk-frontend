import Login from '../views/Login';
import Register from '../views/Register';
import ForgotPassword from '../views/ForgotPassword';
import Home from '../views/Home';
import OrdersHistory from '../views/OrdersHistory';
import Favourites from '../views/Favourites';
import MySales from '../views/MySales';
import Subscription from '../views/Subscription';

export default [
  {
    path: '/lk',
    redirect: '/lk/home',
  },
  {
    path: '/lk/login',
    component: Login,
    name: 'Login',
    props: { pagetitle: 'Вход' },
  },
  {
    path: '/lk/register',
    component: Register,
    name: 'Register',
    props: { pagetitle: 'Регистрация' },
  },
  {
    path: '/lk/forgot-password',
    component: ForgotPassword,
    name: 'ForgotPassword',
    props: { pagetitle: 'Восстановление пароля' },
  },
  {
    path: '/lk/home',
    component: Home,
    name: 'Home',
    props: { pagetitle: 'Персональные данные' },
  },
  {
    path: '/lk/orders-history',
    component: OrdersHistory,
    name: 'OrdersHistory',
    props: { pagetitle: 'История заказов' },
  },
  {
    path: '/lk/favourites',
    component: Favourites,
    name: 'Favourites',
    props: { pagetitle: 'Избранное' },
  },
  {
    path: '/lk/my-sales',
    component: MySales,
    name: 'MySales',
    props: { pagetitle: 'Мои скидки' },
  },
  {
    path: '/lk/subscription',
    component: Subscription,
    name: 'Subscription',
    props: { pagetitle: 'Абонемент' },
  },
];

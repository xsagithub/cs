import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import RendererWrapper0 from '/Users/xsa/project/network-frontend/src/pages/.umi/LocaleWrapper.jsx';
import { routerRedux, dynamic as _dvaDynamic } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    exact: true,
    _title: 'network',
    _title_default: 'network',
  },
  {
    path: '/user',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__User" */ '../../layouts/User'),
        })
      : require('../../layouts/User').default,
    routes: [
      {
        path: '/user/login',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__user__models__forgetPassword.js' */ '/Users/xsa/project/network-frontend/src/pages/user/models/forgetPassword.js').then(
                  m => {
                    return { namespace: 'forgetPassword', ...m.default };
                  },
                ),
                import(/* webpackChunkName: 'p__user__models__index.js' */ '/Users/xsa/project/network-frontend/src/pages/user/models/index.js').then(
                  m => {
                    return { namespace: 'index', ...m.default };
                  },
                ),
                import(/* webpackChunkName: 'p__user__models__login.js' */ '/Users/xsa/project/network-frontend/src/pages/user/models/login.js').then(
                  m => {
                    return { namespace: 'login', ...m.default };
                  },
                ),
                import(/* webpackChunkName: 'p__user__models__register.js' */ '/Users/xsa/project/network-frontend/src/pages/user/models/register.js').then(
                  m => {
                    return { namespace: 'register', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__user__login" */ '../user/login'),
            })
          : require('../user/login').default,
        exact: true,
        _title: 'network',
        _title_default: 'network',
      },
      {
        path: '/user/login/admin',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__user__models__forgetPassword.js' */ '/Users/xsa/project/network-frontend/src/pages/user/models/forgetPassword.js').then(
                  m => {
                    return { namespace: 'forgetPassword', ...m.default };
                  },
                ),
                import(/* webpackChunkName: 'p__user__models__index.js' */ '/Users/xsa/project/network-frontend/src/pages/user/models/index.js').then(
                  m => {
                    return { namespace: 'index', ...m.default };
                  },
                ),
                import(/* webpackChunkName: 'p__user__models__login.js' */ '/Users/xsa/project/network-frontend/src/pages/user/models/login.js').then(
                  m => {
                    return { namespace: 'login', ...m.default };
                  },
                ),
                import(/* webpackChunkName: 'p__user__models__register.js' */ '/Users/xsa/project/network-frontend/src/pages/user/models/register.js').then(
                  m => {
                    return { namespace: 'register', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__user__login" */ '../user/login'),
            })
          : require('../user/login').default,
        ignore: true,
        exact: true,
        _title: 'network',
        _title_default: 'network',
      },
      {
        path: '/user/register',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__user__models__forgetPassword.js' */ '/Users/xsa/project/network-frontend/src/pages/user/models/forgetPassword.js').then(
                  m => {
                    return { namespace: 'forgetPassword', ...m.default };
                  },
                ),
                import(/* webpackChunkName: 'p__user__models__index.js' */ '/Users/xsa/project/network-frontend/src/pages/user/models/index.js').then(
                  m => {
                    return { namespace: 'index', ...m.default };
                  },
                ),
                import(/* webpackChunkName: 'p__user__models__login.js' */ '/Users/xsa/project/network-frontend/src/pages/user/models/login.js').then(
                  m => {
                    return { namespace: 'login', ...m.default };
                  },
                ),
                import(/* webpackChunkName: 'p__user__models__register.js' */ '/Users/xsa/project/network-frontend/src/pages/user/models/register.js').then(
                  m => {
                    return { namespace: 'register', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__user__register" */ '../user/register'),
            })
          : require('../user/register').default,
        exact: true,
        _title: 'network',
        _title_default: 'network',
      },
      {
        path: '/user/forgetPassword',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__user__models__forgetPassword.js' */ '/Users/xsa/project/network-frontend/src/pages/user/models/forgetPassword.js').then(
                  m => {
                    return { namespace: 'forgetPassword', ...m.default };
                  },
                ),
                import(/* webpackChunkName: 'p__user__models__index.js' */ '/Users/xsa/project/network-frontend/src/pages/user/models/index.js').then(
                  m => {
                    return { namespace: 'index', ...m.default };
                  },
                ),
                import(/* webpackChunkName: 'p__user__models__login.js' */ '/Users/xsa/project/network-frontend/src/pages/user/models/login.js').then(
                  m => {
                    return { namespace: 'login', ...m.default };
                  },
                ),
                import(/* webpackChunkName: 'p__user__models__register.js' */ '/Users/xsa/project/network-frontend/src/pages/user/models/register.js').then(
                  m => {
                    return { namespace: 'register', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__user__forgetPassword" */ '../user/forgetPassword'),
            })
          : require('../user/forgetPassword').default,
        exact: true,
        _title: 'network',
        _title_default: 'network',
      },
      {
        component: () =>
          React.createElement(
            require('/Users/xsa/project/network-frontend/node_modules/_umi-build-dev@1.10.13@umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
        _title: 'network',
        _title_default: 'network',
      },
    ],
    _title: 'network',
    _title_default: 'network',
  },
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__Baisc" */ '../../layouts/Baisc'),
        })
      : require('../../layouts/Baisc').default,
    isHistory: true,
    Routes: [require('../authorization.js').default],
    routes: [
      {
        path: '/dashboard',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__dashboard__model.js' */ '/Users/xsa/project/network-frontend/src/pages/dashboard/model.js').then(
                  m => {
                    return { namespace: 'model', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__dashboard__index" */ '../dashboard/index'),
            })
          : require('../dashboard/index').default,
        title: 'Dashboard',
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Dashboard',
        _title_default: 'network',
      },
      {
        path: '/reports/summary',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__reports__list" */ '../reports/list'),
            })
          : require('../reports/list').default,
        title: 'Summary Report',
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Summary Report',
        _title_default: 'network',
      },
      {
        path: '/reports/bouns',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__reports__list" */ '../reports/list'),
            })
          : require('../reports/list').default,
        title: 'Order Report',
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Order Report',
        _title_default: 'network',
      },
      {
        path: '/reports/order',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__reports__list" */ '../reports/list'),
            })
          : require('../reports/list').default,
        title: 'Bouns Report',
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Bouns Report',
        _title_default: 'network',
      },
      {
        path: '/postbacks',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__postbacks__postbacks" */ '../postbacks/postbacks'),
            })
          : require('../postbacks/postbacks').default,
        title: 'Postbacks',
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Postbacks',
        _title_default: 'network',
      },
      {
        path: '/postbacks/gPostback',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__postbacks__globalPostback" */ '../postbacks/globalPostback'),
            })
          : require('../postbacks/globalPostback').default,
        title: 'Global Postback',
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Global Postback',
        _title_default: 'network',
      },
      {
        path: '/affiliates',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__affiliate__models__list.js' */ '/Users/xsa/project/network-frontend/src/pages/affiliate/models/list.js').then(
                  m => {
                    return { namespace: 'list', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__affiliate__list" */ '../affiliate/list'),
            })
          : require('../affiliate/list').default,
        title: 'Affiliates',
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Affiliates',
        _title_default: 'network',
      },
      {
        path: '/affiliates/add',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__affiliate__models__list.js' */ '/Users/xsa/project/network-frontend/src/pages/affiliate/models/list.js').then(
                  m => {
                    return { namespace: 'list', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__affiliate__add" */ '../affiliate/add'),
            })
          : require('../affiliate/add').default,
        title: 'Add Affiliate',
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Add Affiliate',
        _title_default: 'network',
      },
      {
        path: '/affiliates/edit',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__affiliate__models__list.js' */ '/Users/xsa/project/network-frontend/src/pages/affiliate/models/list.js').then(
                  m => {
                    return { namespace: 'list', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__affiliate__edit" */ '../affiliate/edit'),
            })
          : require('../affiliate/edit').default,
        title: 'Edit Affiliate',
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Edit Affiliate',
        _title_default: 'network',
      },
      {
        path: '/domain',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__domain__models__list.js' */ '/Users/xsa/project/network-frontend/src/pages/domain/models/list.js').then(
                  m => {
                    return { namespace: 'list', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__domain__list" */ '../domain/list'),
            })
          : require('../domain/list').default,
        title: 'Affiliates',
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Affiliates',
        _title_default: 'network',
      },
      {
        path: '/offer/:offer_id',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__offer__models__detail.js' */ '/Users/xsa/project/network-frontend/src/pages/offer/models/detail.js').then(
                  m => {
                    return { namespace: 'detail', ...m.default };
                  },
                ),
                import(/* webpackChunkName: 'p__offer__models__list.js' */ '/Users/xsa/project/network-frontend/src/pages/offer/models/list.js').then(
                  m => {
                    return { namespace: 'list', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__offer__detail" */ '../offer/detail'),
            })
          : require('../offer/detail').default,
        title: 'Offer detail',
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Offer detail',
        _title_default: 'network',
      },
      {
        path: '/offer/add',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__offer__models__detail.js' */ '/Users/xsa/project/network-frontend/src/pages/offer/models/detail.js').then(
                  m => {
                    return { namespace: 'detail', ...m.default };
                  },
                ),
                import(/* webpackChunkName: 'p__offer__models__list.js' */ '/Users/xsa/project/network-frontend/src/pages/offer/models/list.js').then(
                  m => {
                    return { namespace: 'list', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__offer__add" */ '../offer/add'),
            })
          : require('../offer/add').default,
        title: 'Offers Add',
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Offers Add',
        _title_default: 'network',
      },
      {
        path: '/offers/creatives',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__offer__models__detail.js' */ '/Users/xsa/project/network-frontend/src/pages/offer/models/detail.js').then(
                  m => {
                    return { namespace: 'detail', ...m.default };
                  },
                ),
                import(/* webpackChunkName: 'p__offer__models__list.js' */ '/Users/xsa/project/network-frontend/src/pages/offer/models/list.js').then(
                  m => {
                    return { namespace: 'list', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__offer__list" */ '../offer/list'),
            })
          : require('../offer/list').default,
        title: 'Offers Creatives',
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Offers Creatives',
        _title_default: 'network',
      },
      {
        path: '/offers/list',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__offer__models__detail.js' */ '/Users/xsa/project/network-frontend/src/pages/offer/models/detail.js').then(
                  m => {
                    return { namespace: 'detail', ...m.default };
                  },
                ),
                import(/* webpackChunkName: 'p__offer__models__list.js' */ '/Users/xsa/project/network-frontend/src/pages/offer/models/list.js').then(
                  m => {
                    return { namespace: 'list', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__offer__list" */ '../offer/list'),
            })
          : require('../offer/list').default,
        title: 'Offers List',
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Offers List',
        _title_default: 'network',
      },
      {
        path: '/offers',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__offer__models__detail.js' */ '/Users/xsa/project/network-frontend/src/pages/offer/models/detail.js').then(
                  m => {
                    return { namespace: 'detail', ...m.default };
                  },
                ),
                import(/* webpackChunkName: 'p__offer__models__list.js' */ '/Users/xsa/project/network-frontend/src/pages/offer/models/list.js').then(
                  m => {
                    return { namespace: 'list', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__offer__list" */ '../offer/list'),
            })
          : require('../offer/list').default,
        title: 'Offers',
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Offers',
        _title_default: 'network',
      },
      {
        path: '/payouts',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__payouts__models__list.js' */ '/Users/xsa/project/network-frontend/src/pages/payouts/models/list.js').then(
                  m => {
                    return { namespace: 'list', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__payouts__list" */ '../payouts/list'),
            })
          : require('../payouts/list').default,
        title: 'Payouts',
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Payouts',
        _title_default: 'network',
      },
      {
        path: '/account',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__account__models__index.js' */ '/Users/xsa/project/network-frontend/src/pages/account/models/index.js').then(
                  m => {
                    return { namespace: 'index', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__account__detail" */ '../account/detail'),
            })
          : require('../account/detail').default,
        title: 'User Detail',
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'User Detail',
        _title_default: 'network',
      },
      {
        path: '/account/billing',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__account__models__index.js' */ '/Users/xsa/project/network-frontend/src/pages/account/models/index.js').then(
                  m => {
                    return { namespace: 'index', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__account__billing" */ '../account/billing'),
            })
          : require('../account/billing').default,
        title: 'User Billing',
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'User Billing',
        _title_default: 'network',
      },
      {
        path: '/member',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__member__models__list.js' */ '/Users/xsa/project/network-frontend/src/pages/member/models/list.js').then(
                  m => {
                    return { namespace: 'list', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__member" */ '../member'),
            })
          : require('../member').default,
        title: 'System Users',
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'System Users',
        _title_default: 'network',
      },
      {
        path: '/member/add',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__member__models__list.js' */ '/Users/xsa/project/network-frontend/src/pages/member/models/list.js').then(
                  m => {
                    return { namespace: 'list', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__member__add" */ '../member/add'),
            })
          : require('../member/add').default,
        title: 'Add User',
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Add User',
        _title_default: 'network',
      },
      {
        path: '/member/edit/:id',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__member__models__list.js' */ '/Users/xsa/project/network-frontend/src/pages/member/models/list.js').then(
                  m => {
                    return { namespace: 'list', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__member__add" */ '../member/add'),
            })
          : require('../member/add').default,
        title: 'Edit User',
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Edit User',
        _title_default: 'network',
      },
      {
        path: '/billing',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__billing__model.js' */ '/Users/xsa/project/network-frontend/src/pages/billing/model.js').then(
                  m => {
                    return { namespace: 'model', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__billing" */ '../billing'),
            })
          : require('../billing').default,
        title: 'Billing',
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'Billing',
        _title_default: 'network',
      },
      {
        path: '/test',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__test__index" */ '../test/index.js'),
            })
          : require('../test/index.js').default,
        title: '测试页面',
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: '测试页面',
        _title_default: 'network',
      },
      {
        component: () =>
          React.createElement(
            require('/Users/xsa/project/network-frontend/node_modules/_umi-build-dev@1.10.13@umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
        _title: 'network',
        _title_default: 'network',
      },
    ],
    _title: 'network',
    _title_default: 'network',
  },
  {
    component: () =>
      React.createElement(
        require('/Users/xsa/project/network-frontend/node_modules/_umi-build-dev@1.10.13@umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
    _title: 'network',
    _title_default: 'network',
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
history.listen(routeChangeHandler);
routeChangeHandler(history.location);

export { routes };

export default function RouterWrapper(props = {}) {
  return (
    <RendererWrapper0>
      <Router history={history}>{renderRoutes(routes, props)}</Router>
    </RendererWrapper0>
  );
}

import AuthMenuView from './testing_views/AuthMenuView.vue'
import BrowserVersionAlertView from './testing_views/BrowserVersionAlertView.vue'
import Home from './views/Home.vue'
import LoaderView from './testing_views/LoaderView.vue'
import LoadingScreenView from './testing_views/LoadingScreenView.vue'
import LoginView from './testing_views/LoginView.vue'
import MobileDeviceAlertView from './testing_views/MobileDeviceAlertView.vue'
import NotificationPanelView from './testing_views/NotificationPanelView.vue'
import ProductSelectorView from './testing_views/ProductSelectorView.vue'
import SignIn from './testing_views/SigninView.vue'
import SignoutView from './testing_views/SignoutView.vue'
import SystemBannerView from './testing_views/SystemBannerView.vue'
import Vue from 'vue'
import { createRouter, createWebHistory, Router } from 'vue-router'

export function createVueRouter (): Router {
  const router = createRouter({
    history: createWebHistory(sessionStorage.getItem('VUE_ROUTER_BASE') || ''),
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/AuthMenu',
        name: 'Auth Menu',
        component: AuthMenuView
      },
      {
        path: '/BrowserVersionAlert',
        name: 'Browser Version Alert',
        component: BrowserVersionAlertView
      },
      {
        path: '/LoadingScreen',
        name: 'Loading Screen',
        component: LoadingScreenView
      },
      {
        path: '/Loader',
        name: 'Loader',
        component: LoaderView
      },
      {
        path: '/Login',
        name: 'Login',
        component: LoginView
      },
      {
        path: '/MobileDeviceAlert',
        name: 'Mobile Device Alert',
        component: MobileDeviceAlertView
      },
      {
        path: '/NotificationPanel',
        name: 'Notification Panel',
        component: NotificationPanelView
      },
      {
        path: '/ProductSelector',
        name: 'Product Selector',
        component: ProductSelectorView
      },
      {
        path: '/SignIn',
        name: 'Sign In',
        component: SignIn
      },
      {
        path: '/SignOut',
        name: 'Sign Out',
        component: SignoutView
      },
      {
        path: '/SystemBanner',
        name: 'System Banner',
        component: SystemBannerView
      },
    ]
  })
  return router
}

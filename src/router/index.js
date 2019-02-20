import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'
import discovery from '@/components/discovery'
import invite from '@/components/invite'
import mine from '@/components/mine'

import login from '@/components/login'
import category from '@/components/category'
import product from '@/components/product'
import categoryList from '@/components/categoryList'
import topicpage from '@/components/topicpage'
import discoveryList from '@/components/discoveryList'
import search from '@/components/search'
import cart from '@/components/cart'
import member from '@/components/member'
import coupon from '@/components/coupon'
import order from '@/components/order'
import account from '@/components/account'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      redirect: '/index'
    } ,{
      path: '/index',
      name: 'index',
      component: index
    }, {
      path: '/discovery',
      name: 'discovery',
      component: discovery
    }, {
      path: '/invite',
      name: 'invite',
      component: invite
    }, {
      path: '/mine',
      name: 'mine',
      component: mine
    }, {
      path: '/login',
      name: 'login',
      component: login
    }, {
      path: '/category',
      name: 'category',
      component: category
    }, {
      path: '/product',
      name: 'product',
      component: product
    }, {
      path: '/categoryList',
      name: 'categoryList',
      component: categoryList
    }, {
      path: '/topicpage',
      name: 'topicpage',
      component: topicpage
    }, {
      path: '/discoveryList',
      name: 'discoveryList',
      component: discoveryList
    }, {
      path: '/search/:keyword',
      name: 'search',
      component: search
    }, {
      path: '/cart',
      name: 'cart',
      component: cart
    }, {
      path: '/member',
      name: 'member',
      component: member
    }, {
      path: '/coupon',
      name: 'coupon',
      component: coupon
    }, {
      path: '/order',
      name: 'order',
      component: order
    }, {
      path: '/account',
      name: 'account',
      component: account
    }
    
  ]
})

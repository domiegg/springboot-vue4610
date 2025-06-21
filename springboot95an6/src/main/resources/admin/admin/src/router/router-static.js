import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import zhenliaofangan from '@/views/modules/zhenliaofangan/list'
    import news from '@/views/modules/news/list'
    import jiankangdangan from '@/views/modules/jiankangdangan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import binglixinxi from '@/views/modules/binglixinxi/list'
    import yuyueyisheng from '@/views/modules/yuyueyisheng/list'
    import jiuzhenxinxi from '@/views/modules/jiuzhenxinxi/list'
    import feiyongxinxi from '@/views/modules/feiyongxinxi/list'
    import yisheng from '@/views/modules/yisheng/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/zhenliaofangan',
        name: '诊疗方案',
        component: zhenliaofangan
      }
      ,{
	path: '/news',
        name: '公告资讯',
        component: news
      }
      ,{
	path: '/jiankangdangan',
        name: '健康档案',
        component: jiankangdangan
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/binglixinxi',
        name: '病历信息',
        component: binglixinxi
      }
      ,{
	path: '/yuyueyisheng',
        name: '预约医生',
        component: yuyueyisheng
      }
      ,{
	path: '/jiuzhenxinxi',
        name: '就诊信息',
        component: jiuzhenxinxi
      }
      ,{
	path: '/feiyongxinxi',
        name: '费用信息',
        component: feiyongxinxi
      }
      ,{
	path: '/yisheng',
        name: '医生',
        component: yisheng
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;

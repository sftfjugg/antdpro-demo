﻿export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
  },
  // {
  //   path: '/welcome',
  //   name: 'welcome',
  //   icon: 'smile',
  //   component: './Welcome',
  // },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   component: './Admin',
  //   hideInMenu: true,
  //   routes: [
  //     {
  //       path: '/admin/sub-page',
  //       name: 'sub-page',
  //       icon: 'smile',
  //       component: './Welcome',
  //     },
  //   ],
  // },
  {
    path: '/',
    component: './commonLayout',
    flatMenu: true,
    routes: [
      {
        path: '/',
        redirect: '/welcome',
      },
      {
        path: '/welcome',
        name: 'welcome',
        icon: 'smile',
        component: './Welcome',
      },
      {
        name: '全局数据流',
        icon: 'profile',
        path: '/data',
        routes: [
          {
            name: 'dva数据',
            icon: 'table',
            path: '/data/dva',
            // access: 'user',
            component: './dataManage/project',
          },
          {
            name: 'initial数据',
            icon: 'table',
            path: '/data/initialstate',
            component: './dataManage/initialstate',
          },
          {
            name: 'useModel数据',
            icon: 'table',
            path: '/data/useModel',
            component: './dataManage/useModel',
          },
        ],
      },
      {
        path: '/table',
        name: 'table',
        icon: 'table',
        routes: [
          {
            name: 'protable表格',
            icon: 'table',
            path: '/table/proTable',
            routes: [
              {
                path: '/table/proTable',
                redirect: '/table/proTable/spanTable',
              },
              {
                name: 'search搜索属性',
                icon: 'table',
                path: '/table/proTable/search',
                component: './proTable/search',
              },
            ],
          },
          {
            name: '常用表格',
            icon: 'table',
            path: '/table/baseTable',
            routes: [
              {
                name: '表格合并',
                icon: 'table',
                path: '/table/baseTable/spanTable',
                component: './Table/spanTable',
              },
              {
                name: 'select表格',
                icon: 'table',
                path: '/table/baseTable/select',
                component: './Table/selectTable',
              },
              {
                name: 'select表格合并',
                icon: 'table',
                path: '/table/baseTable/selectspan',
                component: './Table/selectSpanTable',
              },
              {
                name: 'tree树形表格',
                icon: 'table',
                path: '/table/baseTable/treetable',
                component: './Table/treeTable',
              },
            ],
          },
          {
            name: '可编辑表格',
            icon: 'table',
            path: '/table/editProTable',
            routes: [
              {
                path: '/table/editProTable',
                redirect: '/table/editProTable/data',
              },
              {
                name: '可编辑表格',
                icon: 'table',
                path: '/table/editProTable/data',
                component: './editTable/editProTable',
              },
              {
                name: 'formitem验证表格',
                icon: 'table',
                path: '/table/editProTable/validate',
                component: './editTable/validateTable',
              },
              {
                name: '自定义编辑表格',
                icon: 'table',
                path: '/table/editProTable/custom',
                component: './editTable/customTable',
              },
            ],
          },
        ],
      },
      {
        path: '/editor',
        name: '富文本编辑',
        icon: 'BarsOutlined',
        routes: [
          {
            name: '新增',
            icon: 'table',
            path: '/editor/add',
            component: './editor/add',
          },
          {
            name: '列表',
            icon: 'table',
            path: '/editor/list',
            component: './editor/list',
          },
        ],
      },
      {
        name: '产品列表',
        icon: 'BarsOutlined',
        path: '/product/list',
        component: './product/list',
      },
      {
        name: 'Form表单',
        icon: 'form',
        path: '/form',
        routes: [
          {
            path: '/form',
            redirect: '/form/add',
          },
          {
            name: 'form表单',
            icon: 'table',
            path: '/form/add',
            component: './product/addProduct',
          },
          {
            name: 'debonceselect',
            icon: 'table',
            path: '/form/debonceselect',
            component: './form/debounce',
          },
          {
            name: 'upload上传',
            icon: 'table',
            path: '/form/upload',
            component: './form/upload',
          },
        ],
      },
      {
        name: '流程管理',
        icon: 'RetweetOutlined',
        path: '/flowManage',
        routes: [
          {
            path: '/flowManage',
            redirect: '/flowManage/add',
          },
          {
            name: '新增流程',
            icon: 'table',
            path: '/flowManage/add',
            component: './flowManage/add',
          },
          {
            name: '流程列表',
            icon: 'table',
            path: '/flowManage/list',
            component: './flowManage/list',
          },
        ],
      },
      {
        name: 'echarts图表',
        icon: 'PicLeftOutlined',
        path: '/echarts',
        routes: [
          {
            name: '地图',
            icon: 'DotChartOutlined',
            path: '/echarts/map',
            routes: [
              {
                path: '/echarts/map',
                redirect: '/echarts/map/region',
              },
              {
                name: '行政区域地图',
                icon: 'table',
                path: '/echarts/map/region',
                component: './echarts/map/region',
              },
              {
                name: '涟漪地图',
                icon: 'table',
                path: '/echarts/map/effectScatter',
                component: './echarts/map/effectScatter',
              },
            ],
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  // {
  //   path: '/',
  //   redirect: '/welcome',
  // },
  {
    component: './404',
  },
];

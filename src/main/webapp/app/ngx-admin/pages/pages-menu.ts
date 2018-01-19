import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    /*{
      title: 'Dashboard',
      icon: 'nb-home',
      link: '/pages/dashboard',
      home: true,
    },
    {
      title: 'FEATURES',
      group: true,
    },
    {
      title: 'UI Features',
      icon: 'nb-keypad',
      link: '/pages/ui-features',
      children: [
        {
          title: 'Buttons',
          link: '/pages/ui-features/buttons',
        },
        {
          title: 'Grid',
          link: '/pages/ui-features/grid',
        },
        {
          title: 'Icons',
          link: '/pages/ui-features/icons',
        },
        {
          title: 'Modals',
          link: '/pages/ui-features/modals',
        },
        {
          title: 'Typography',
          link: '/pages/ui-features/typography',
        },
        {
          title: 'Animated Searches',
          link: '/pages/ui-features/search-fields',
        },
        {
          title: 'Tabs',
          link: '/pages/ui-features/tabs',
        },
      ],
    },
    {
      title: 'Forms',
      icon: 'nb-compose',
      children: [
        {
          title: 'Form Inputs',
            icon: 'nb-compose',
            children: [
                {
                    title: '子菜单',
                    link: '/pages/forms/example/son'
                },]
        },
        {
          title: 'Form Layouts',
          link: '/pages/forms/layouts',
        },
      ],
    },
    {
      title: 'Components',
      icon: 'nb-gear',
      children: [
        {
          title: 'Tree',
          link: '/pages/components/tree',
        }, {
          title: 'Notifications',
          link: '/pages/components/notifications',
        },
      ],
    },
    {
      title: 'Maps',
      icon: 'nb-location',
      children: [
        {
          title: 'Google Maps',
          link: '/pages/maps/gmaps',
        },
        {
          title: 'Leaflet Maps',
          link: '/pages/maps/leaflet',
        },
        {
          title: 'Bubble Maps',
          link: '/pages/maps/bubble',
        },
      ],
    },
    {
      title: 'Charts',
      icon: 'nb-bar-chart',
      children: [
        {
          title: 'Echarts',
          link: '/pages/charts/echarts',
        },
        {
          title: 'Charts.js',
          link: '/pages/charts/chartjs',
        },
        {
          title: 'D3',
          link: '/pages/charts/d3',
        },
      ],
    },
    {
      title: 'Editors',
      icon: 'nb-title',
      children: [
        {
          title: 'TinyMCE',
          link: '/pages/editors/tinymce',
        },
        {
          title: 'CKEditor',
          link: '/pages/editors/ckeditor',
        },
      ],
    },
    {
      title: 'Tables',
      icon: 'nb-tables',
      children: [
        {
          title: 'Smart Table',
          link: '/pages/tables/smart-table',
        },
      ],
    },
  */
    {
        title: '报表分析',
        icon: 'nb-bar-chart',
        children: [
            {
                title: 'Echarts',
                link: '/pages/charts/echarts',
            },
            {
                title: 'Charts.js',
                link: '/pages/charts/chartjs',
            },
            {
                title: 'D3',
                link: '/pages/charts/d3',
            },
        ],
    },
    {
        title: '组织架构',
        icon: 'nb-tables',
        children: [
            {
                title: '公司',
                link: '/pages/ou/company',

            },
            {
                title: '组织',
                link: '/pages/ou/organization',
            },
            {
                title: '组织2',
                link: '/pages/ou/orgtree',
            },
        ],
    },

    {
        title: '设备管理',
        icon: 'nb-tables',
        children: [
            {
                title: '设备分类信息',
                link: '/pages/mi/MeterCategoryInfo',
            },
            {
                title: '设备信息',
                link: '/pages/mi/MeterInfo',
            },
            {
                title: '设备状态',
                link: '/pages/mi/MeterStatus',
            },
            {
                title: '多路开关信息',
                link: '/pages/mi/multiwaySwitchInfo',
            },
            {
                title: '多路开关状态',
                link: '/pages/mi/MultiwaySwitch',
            },
        ],

    },
    {
        title: '报警服务',
        icon: 'nb-tables',
        children: [
            {
                title: '报警服务规则',
                link: '/pages/arc/AlarmRule',
            },
            {
                title: '设备规则',
                link: '/pages/arc/MeterRule',
            },
            {
                title: '规则属性',
                link: '/pages/arc/RuleAttributes',
            },

        ],
    },
    {
        title: '通知服务',
        icon: 'nb-tables',
        children: [
            {
                title: '消息模板',
                link: '/pages/nfs/message-template',
            },
        ],
    },
   /* {
        title: '资源管理',
        icon: 'nb-tables',
        children: [
            {
                title: '资源管理',
                link: '/pages/resource/Resource',
            },
        ],
    },*/


    {
        title: '字典工程',
        icon: 'nb-tables',
        children: [
            {
                title: '字典',
                link: '/pages/dict/dictionary',
            },

            {
                title: '字典分类',
                link: '/pages/dict/DictionaryClassify',
            },
        ],
    },
    {
        title: '地区地点',
        icon: 'nb-tables',
        children: [
            {
                title: '地址',
                link: '/pages/loc/address',
            },

            {
                title: '地区',
                link: '/pages/loc/area',
            },
        ],
    },
    {
        title: '信息点采集',
        icon: 'nb-tables',
        children: [
            {
                title: '信息点采集',
                link: '/pages/cpi/comPoint',
            },

            {
                title: '信息点采集状态',
                link: '/pages/cpi/ComPointStatus',
            },
        ],
    },

    {
        title: '实体',
        icon: 'nb-tables',
        children: [
            {
                title: '公司',
                link: '/pages/company',
            },

        ],
    },

];

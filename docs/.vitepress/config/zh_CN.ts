import {LocaleSpecificConfig, DefaultTheme} from "vitepress"
import {demoUrl, editLinkPattern} from './common'

export const zhCNConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    themeConfig: {
        nav: [
            {text: '首页', link: '/zh_CN/'},
            {text: '手册', link: '/zh_CN/guide/about'},
            {text: '演示', link: demoUrl}
        ],

        editLink: {
            text: '编辑此页',
            pattern: editLinkPattern
        },

        sidebar: {
            '/zh_CN/guide/': [
                {
                    text: '介绍',
                    collapsed: false,
                    items: [
                        {text: '何为 Nginx UI?', link: '/zh_CN/guide/about'},
                        {text: '即刻开始', link: '/zh_CN/guide/getting-started'},
                        {text: 'Nginx 代理示例', link: '/zh_CN/guide/nginx-proxy-example'},
                        {text: '贡献代码', link: '/zh_CN/guide/contributing'},
                        {text: '开源协议', link: '/zh_CN/guide/license'}
                    ]
                },
                {
                    text: '配置',
                    collapsed: false,
                    items: [
                        {text: '服务端', link: '/zh_CN/guide/config-server'},
                        {text: 'Nginx 日志', link: '/zh_CN/guide/config-nginx-log'},
                        {text: 'Open AI', link: '/zh_CN/guide/config-openai'}
                    ]
                }
            ]
        },

        docFooter: {
            prev: '上一页',
            next: '下一页',
        },
        returnToTopLabel: '返回顶部',
        outlineTitle: '导航栏',
        darkModeSwitchLabel: '外观',
        sidebarMenuLabel: '归档',
        lastUpdatedText: '更新于',

        search: {
            provider: 'local',
            options: {
                locales: {
                    zh_CN: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换',
                                    closeText: '关闭'
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

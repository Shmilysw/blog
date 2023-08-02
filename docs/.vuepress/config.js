module.exports = {
    head: [
        // [
        //     "link",
        //     {
        //         rel: "stylesheet",
        //         href:
        //             "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css",
        //     },
        // ], //katex
        // [
        //     "script",
        //     {
        //         language: "javascript",
        //         type: "text/javascript",
        //         src:
        //             "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js",
        //     },
        // ],
        [
            "meta",
            {
                name: "viewport",
                content: "width=device-width,initial-scale=1,user-scalable=no",
            },
        ],
        ["meta", { property: "og:url", content: "https://Shmilysw.github.io" }],
        ["meta", { property: "og:site_name", content: "Shmilysw's blog" }],
        ["meta", { property: "og:description", content: "Shmilysw's blog" }],
        ["meta", { property: "og:title", content: "Shmilysw's blog" }],
        ["link", { rel: "manifest", href: "/manifest.json" }],
        ["meta", { name: "theme-color", content: "#222222" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        [
            "meta",
            { name: "apple-mobile-web-app-status-bar-style", content: "black" },
        ],
        ["link", { rel: "apple-touch-icon", href: "/icons/favicon.png" }],
        [
            "link",
            {
                rel: "mask-icon",
                href: "/icons/favicon.png",
                color: "#3eaf7c",
            },
        ],
        [
            "meta",
            {
                name: "msapplication-TileImage",
                content: "/icons/favicon.png",
            },
        ],
        ["meta", { name: "msapplication-TileColor", content: "#000000" }],
    ],
    title: "Shmilysw",
    logo: "/public/favicon.ico", //好不容易扣出来的四叶草，拿来用用，哈哈！

    markdown: {
        //markdown扩展
        lineNumbers: false, // 代码行号应该关闭，要不然手机查看很费劲，但是从来不再手机上面看hhh
        extendMarkdown: (md) => {
            md.set({
                html: true,
            });
            md.set({
                breaks: true, //去除markdown中的两空格换行
            });
            md.use(require("markdown-it-deflist")); // ~汉字列表
            md.use(require("markdown-it-task-lists")); //todo渲染
            md.use(require("markdown-it-mark")); //高亮
            md.use(require("markdown-it-imsize")); //自定义图片的大小
            md.use(require("markdown-it-vuepress-code-snippet-enhanced")); //代码块文件引入
        },
    },

    plugins: [
        // [
        //     "@vuepress/pwa",
        //     {
        //         serviceWorker: true,
        //         updatePopup: true,
        //     },
        // ],

        ['meting', {
            meting: {
                auto: "https://music.163.com/#/playlist?id=8382183209",
                server: 'netease',
                type: 'playlist',
                mid: '8382183209',
            }, // 不配置该项的话不会出现全局播放器
            aplayer: {
                lrcType: 3,
            },
        },],
        ["@maginapp/vuepress-plugin-katex"],
        ["demo-code"],
        ["pangu"],
        ["go-top"],
        ["reading-progress"],
        ["flowchart"],
        [
            "zooming",
            {
                selector: ".content :not(a) > img",
            },
        ],
        ["img-lazy"],
        ["code-switcher"], //多语言选项卡,学习后自定义一个简化后使用
        // ['cursor-effects'], // 鼠标点击特效
        [
            "vuepress-plugin-container",
            {
                type: "note",
                before: (info) =>
                    `<div class="note"><p class="title">${info}</p>`,
                after: "</div>",
            },
        ],
        [
            "vuepress-plugin-container",
            {
                //添加 details 容器
                type: "showmore",
                before: (info) =>
                    `<details class="showmore">${info ? `<summary>${info}</summary>` : ""
                    }\n`,
                after: () => "</details>\n",
            },
        ],
        [
            "vuepress-plugin-container",
            {
                //添加居中容器
                type: "center",
                before: (info) => `<div class="customer-container-center">`,
                after: "</div>",
            },
        ],
        [
            "vuepress-plugin-container",
            {
                //添加居右容器
                type: "right",
                defaultTitle: "",
            },
        ],
    ],


    theme: "meteorlxy",
    themeConfig: {
        //主题配置项
        markdown: {
            enableAll: true,
        },
        locales: {
            "/": {
                lang: "en-US",
            },
        }, //US
        lastUpdated: true, //最后更新时间
        lang: Object.assign(
            require("vuepress-theme-meteorlxy/lib/langs/en-US"),
            {
                home: `Shmilysw.github.io`,
            }
        ), //自定义部分文字
        pagination: {
            perPage: 10,
        }, //每页文章数量smoothScroll: true,
        nav: [ // exact 主页面
            {
                text: "Home",
                link: "/",
                exact: true,
            },
            {
                text: "Posts",
                link: "/posts/",
                exact: false,
            },
            {
                text: "About",
                link: "/about/",
                exact: false,
            },
            {
                text: "Github",
                link: "https://github.com/Shmilysw",
                exact: false,
            },
            {
                text: "Algorithm",
                link: "https://shmilysw.github.io/algorithm",
                exact: false,
            },
            // {
            //     text: "notef",
            //     link: "https://notef.vercel.app/",
            //     exact: false,
            // },
            // {
            //     text: "wikif",
            //     link: "https://wikif.vercel.app/",
            //     exact: false,
            // },
        ], //navbar导航栏
        personalInfo: {
            nickname: "shi'wei",
            description: "Happy Coding<br />Happy Life",
            // description: '<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=80% height=52 src="//music.163.com/outchain/player?type=2&id=1297742167&auto=0&height=32"></iframe>',
            email: "shmilysw2002@163.com",
            location: "Tai'Zhou, Zhe'Jiang, China",
            organization: "Tai'Zhou University",
            // avatar: "https://cdn.acwing.com/media/article/image/2022/11/26/101476_52a1364c6d-1.jpg",
            // https://cdn.acwing.com/media/user/profile/photo/120382_lg_2ec963416b.jpg
            avatar: "https://cdn.acwing.com/media/user/profile/photo/120382_lg_2ec963416b.jpg",
            sns: {
                // github: {
                //     account: "Shmilysw",
                //     link: "https://github.com/Shmilysw",
                // },
                // twitter: {
                //     account: 'Shmilysw171858',
                //     link: 'https://twitter.com/Shmilysw171858',
                //     // https://www.bilibili.com/
                // },
                // weibo: {
                //     account: 'Shmilysw',
                //     link: 'https://m.weibo.cn/',
                // },
                // zhihu: {
                //     account: "Shmilysw",
                //     link: "https://www.zhihu.com/people/shmilysw",
                // },
                // csdn: {
                //     account: 'Shmilysw',
                //     link: 'https://blog.csdn.net/Shmilysw?spm=1010.2135.3001.5343',
                // },
            },
        }, //个人信息
        header: {
            background: {
                useGeo: false,
                // url: "https://cdn.acwing.com/media/article/image/2023/07/06/120382_9cde90631b-wallhaven-zyxvqy_1920x1080.png",
                // url: "https://cdn.acwing.com/media/article/image/2023/07/06/120382_4d4e1fd21b-wallhaven-ex9gwo_1920x1080.png",
                url: "https://cdn.acwing.com/media/article/image/2023/07/06/120382_347c122f1b-wallhaven-6d5r5x_1920x1080.png",
                // url: "https://cdn.acwing.com/media/article/image/2023/07/06/120382_0ca1d2711b-home_picture.png",
                // url: "https://cdn.acwing.com/media/article/image/2023/07/06/120382_9f486d441b-wallhaven-1k9289_1920x1080.png",
                // url: "https://s2.loli.net/2022/02/16/pa8cMOXlbjYABTI.png",
                // url: "https://cdn.acwing.com/media/article/image/2023/04/26/120382_bd66bcfce4-background00.png",
                // url: "https://cdn.acwing.com/media/article/image/2021/07/10/101476_991fc8bee1-head002.jpg",
            },
            showTitle: true,
        }, //header设置
        footer: {
            poweredBy: false,
            poweredByTheme: false,
        }, //fotter
        infoCard: {
            headerBackground: {
                // url: "https://s2.loli.net/2022/02/16/asudXzCNnkgRHep.jpg",
                url: "https://cdn.acwing.com/media/article/image/2023/04/26/120382_b639cb7ce4-background9.png",
                // url: "https://cdn.acwing.com/media/article/image/2021/07/10/101476_991fc8bee1-head002.jpg",
                useGeo: true,
            },
        },
        comments: false, // 懒得开了 自己的博客自己看 算了，不用看啦~ // valine
        // comments: {   
        //     platform: "github",
        //     owner: "shmilysw",
        //     repo: "shmilysw",
        //     clientId: "3x53oDaIrkpqWOqFyJMyV0Vd-gzGzoHsz",
        //     clientSecret: "4UzNn5XdsqeziLEbRbxVXDep",
        //     prefix: "[Comments] ",
        //     labels: ["comments"],
        // }, //vssue配置
        // // Service Worker 的配置
        // serviceWorker: {
        //     serviceWorker: false,
        //     updatePopup: false,
        // },
    },
};

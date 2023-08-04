/*
 * @FilePath: \vue2.7_template-master\src\router\useRouter.js
 * @Author: zhangxin
 * @Date: 2022-11-30 10:18:11
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-08-04 10:14:19
 * @Description:
 */
import { defineRouter } from "./defineRouter";
import { defineMeta } from "@/router/meta";
export const routes = [
    // {
    //     name: "login",
    //     path: "/login",
    //     meta: defineMeta(),
    //     component: () => import("@/layout/login/login.vue"),
    // },
    {
        name: "singleLogin",
        path: "/singleLogin",
        meta: defineMeta(),
        component: () => import("@/layout/loginsso/loginsso.vue"),
    },
    {
        name: "debug",
        path: "/debug",
        meta: defineMeta(),
        component: () => import("@/pages/Debug/debug.vue"),
    },
    {
        name: "layout",
        path: "/",
        redirect: "/home",
        meta: defineMeta({ level: 0 }),
        component: () => import("@/layout/Home.vue"),
        children: [
            {
                "path": "/home",
                "name": "home",
                "redirect": "/test1",
                "meta": {
                    "title": "首页",
                    "hidden": "true"
                },
                "component": () => import("@/layout/main-layout/main-layout.vue"),
                "children": [
                    {
                        "path": "/test1",
                        "name": "test1",
                        "meta": {
                            "title": "测试1",
                            "hidden": "true"
                        },
                        "component": () => import("@/pages/test/test.vue")
                    }
                ]
            },
            {
                "path": "/test",
                "name": "test",
                "meta": {
                    "title": "测试",
                    "hidden": "true"
                },
                "component": () => import("@/pages/test/test.vue")
            },
            {
                "path": "/home2",
                "name": "home2",
                "meta": {
                    "title": "home2",
                    "hidden": "true"
                },
                "component": () => import("@/pages/home/home.vue")
            }
        ]
    },
    {
        name: "404",
        path: "/404",
        meta: defineMeta({ title: "404" }),
        component: () => import("@/pages/NotPage/not-page.vue"),
    },
    {
        path: "*",
        redirect: "/404",
    },
];
const router = defineRouter(routes);

export function useRouter() {
    return router.core;
}

export function useRoute() {
    return router.core.currentRoute;
}

export const resetRoute = router.reset;

export default router;

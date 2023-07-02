import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import DeclarativeRendering from "../views/DeclarativeRendering.vue";
import EventListener from "../views/EventListener.vue";
import FormBinding from "../views/FormBinding.vue";
import ConditionalRendering from "../views/ConditionalRendering.vue";
import ListRendering from "../views/ListRendering.vue";
import CalculationProperty from "../views/CalculationProperty.vue";
import Lifecycle from "../views/Lifecycle.vue";
import Watcher from "../views/Watcher.vue";
import Props from "../views/PropsParentComponent.vue";
import Event from "../views/EventParentComponent.vue";
import Slot from "../views/SlotParentComponent.vue";
import Api from "../views/Api.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    // 宣言的レンダリング
    {
      path: "/declarative_rendering",
      name: "declarative_rendering",
      component: DeclarativeRendering,
    },
    // イベントリスナー
    {
      path: "/event_listener",
      name: "event_listener",
      component: EventListener,
    },
    // フォームバインディング
    {
      path: "/form_binding",
      name: "form_binding",
      component: FormBinding,
    },
    // 条件付きレンダリング
    {
      path: "/conditional_rendering",
      name: "conditional_rendering",
      component: ConditionalRendering,
    },
    // リストレンダリング
    {
      path: "/list_rendering",
      name: "list_rendering",
      component: ListRendering,
    },
    // 算出プロパティー
    {
      path: "/calculation_property",
      name: "calculation_property",
      component: CalculationProperty,
    },
    // ライフサイクルとテンプレート参照
    {
      path: "/lifecycle",
      name: "lifecycle",
      component: Lifecycle,
    },
    // ウォッチャー
    {
      path: "/watcher",
      name: "watcher",
      component: Watcher,
    },

    // コンポーネント
    // props
    {
      path: "/props",
      name: "props",
      component: Props,
    },
    // イベントの発行
    {
      path: "/event",
      name: "event",
      component: Event,
    },
    // スロット
    {
      path: "/slot",
      name: "slot",
      component: Slot,
    },
    // API
    {
      path: "/api",
      name: "api",
      component: Api,
    },
  ],
});

export default router;

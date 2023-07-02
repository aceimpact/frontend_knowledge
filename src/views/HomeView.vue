<template>
  <div>
    <div class="text-3xl font-bold">目次</div>

    <div class="mt-4 border-2 border-gray-200 rounded">
      <ul class="p-4 text-xl">
        <li class="py-2">
          <RouterLink to="/declarative_rendering"> 2.宣言的レンダリング&3.属性バインディング </RouterLink>
        </li>
        <li class="py-2">
          <RouterLink to="/event_listener">4.イベントリスナー</RouterLink>
        </li>
        <li class="py-2">
          <RouterLink to="/form_binding">5.フォームバインディング</RouterLink>
        </li>
        <li class="py-2">
          <RouterLink to="/conditional_rendering">6.条件付きレンダリング</RouterLink>
        </li>
        <li class="py-2">
          <RouterLink to="/list_rendering">7.リストレンダリング</RouterLink>
        </li>
        <li class="py-2">
          <RouterLink to="/calculation_property">8.算出プロパティー</RouterLink>
        </li>

        <li class="py-2">
          <RouterLink to="/lifecycle">9.ライフサイクルとテンプレート参照</RouterLink>
        </li>
        <li class="py-2">
          <RouterLink to="/watcher">10.ウォッチャー</RouterLink>
        </li>
        <li class="py-2">
          <RouterLink to="/props">11.コンポーネント&12.props</RouterLink>
        </li>
        <li class="py-2">
          <RouterLink to="/event">13.イベントの発行</RouterLink>
        </li>
        <li class="py-2">
          <RouterLink to="/slot">14.スロット</RouterLink>
        </li>
        <li class="py-2">
          <RouterLink to="/api">15.API通信</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

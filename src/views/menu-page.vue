<template>
  <div class="Menu">
    <!-- <a-menu>
      <a-menu-item>11111</a-menu-item>
      <a-menu-item>22222</a-menu-item>
      <a-submenu>
        <div slot="title">33333</div>
        <a-menu-item>33333-1</a-menu-item>
        <a-submenu>
          <div slot="title">33333-2</div>
          <a-menu-item>33333-2-1</a-menu-item>
          <a-menu-item>33333-2-2</a-menu-item>
        </a-submenu>
      </a-submenu>
    </a-menu> -->
    <a-menu>
      <template v-for="(item, index) in list">
        <a-menu-item v-if="!item.children" :key="`menu_item_${index}`">{{ item.title }}</a-menu-item>
        <re-submenu v-else :key="`menu_item_${index}`" :parent="item" :index="index"></re-submenu>
      </template>
    </a-menu>
  </div>
</template>
<script>
import menuComponents from "_c/menu";
import ReSubmenu from "./re-submenu"
const { AMenu, AMenuItem, ASubmenu } = menuComponents;
export default {
  name: "menu_page",
  components: {
    AMenu,
    AMenuItem,
    ASubmenu,
    ReSubmenu
  },
  data () {
    return{
      list: [
        {
          title: '11111'
        },
        {
          title: '22222'
        },
        {
          title: '33333',
          children: [
            {
              title: '33333-1'
            },
            {
              title: '33333-2',
              children: [
                {
                  title: '33333-2-1'
                },
                {
                  title: '33333-2-2'
                }
              ]
            },
          ]
        },
      ]
    }
  }
};
</script>

<style>
.Menu {
  width: 300px;
  height: 500px;
}
</style>


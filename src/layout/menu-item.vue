<script setup>
import { useMenu } from '@/hooks/useMenu.js';
const menu = useMenu();
const props = defineProps({
    cell: {
        type: Object,
        default: {}
    }
})
</script>

<template>
    <el-submenu :key="props.cell.name" :index="props.cell.name">
        <template slot="title">
            <i :class="menu.getIcon(props.cell)"></i>
            <span>{{ menu.getTitle(props.cell) }}</span>
        </template>

        <template v-for="item in props.cell.children">
            <ytxd-menu-item v-if="menu.renderSubmenu(item)" :key="item.name" :cell="item"></ytxd-menu-item>

            <el-menu-item v-else-if="menu.renderMenu(item)" :key="item.name" :index="item.name">
                <i :class="menu.getIcon(item)"></i>
                <span>{{ menu.getTitle(item) }}</span>
            </el-menu-item>
        </template>
    </el-submenu>
</template>

<style scoped lang='scss'>
</style>

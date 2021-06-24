<template>
    <div class="container">
        <router-view></router-view>
        <Dashboard/>
    </div>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue';
export default {
    name: 'DashboardView',
    components: {
        Dashboard,
    }
}
</script>
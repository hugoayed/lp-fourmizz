<template>
    <div class="container">
        <router-view></router-view>
        <h1>t'es dans la vue</h1>
        <FormLogin />
        
    </div>
    
</template>

<script>

    import FormLogin from '@/components/FormLogin.vue';

    export default {
        name: 'Login',
        components: {
            FormLogin,
        }
    }
</script>

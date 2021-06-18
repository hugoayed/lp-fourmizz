<template>
    <div class="container">
        <router-view></router-view>
        <h1 class="mt-4">Inscrivez-vous</h1>
        <FormSignUp />
        
    </div>
    
</template>

<script>

    import FormSignUp from '@/components/FormSignUp.vue';

    export default {
        name: 'SignUp',
        components: {
            FormSignUp,
        }
    }
</script>

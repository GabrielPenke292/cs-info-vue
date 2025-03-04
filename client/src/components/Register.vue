<template>
    <div>
        <h1>Cadastro de usuário</h1>
        <input 
            type="email"
            name="email"
            v-model="email"
            placeholder="Digite seu email"/>
        <br>
        <input 
            type="password"
            name="password"
            v-model="password"
            placeholder="Digite sua senha"/>
        <br>
        <button @click="register">
            Cadastrar
        </button>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
    data(){
        return{
            email: 'teste@teste.com',
            password: '123456'
        }
    },
    methods: {
        async register(){
            const response = await AuthenticationService.register({
                email: this.email,
                password: this.password
            })
            console.log(response.data)
        }
    }
}
</script>

<style scoped>

</style>
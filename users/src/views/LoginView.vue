<template>
    <div>
        <h2>Login</h2>
        <hr/>

        <div class="columns  is-centered">
            <div class="column is-half">
                <div v-if="error != undefined">
                    <div class="notification is-danger">
                        <p>{{ error }}</p>
                    </div>
                </div>
                <p>E-mail</p>
                <input type="email" placeholder="email@email.com" class="input" v-model="email">
                <p>Password</p>
                <input type="password" placeholder="******" class="input" v-model="password">
                <hr/>
                <button class="button is-success" @click="login">Login</button><br><br>
                <p>Não tem uma conta?</p><br>
                <button class="button is-success" @click="register">Register</button>
            </div>
        </div>
        
    </div> 
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            password: '',
            email: '',
            error: undefined
        }
    },
    methods:{
        login(){
            axios.post("http://localhost:8686/login",{
                password :this.password,
                email : this.email
            }).then(res =>{
                console.log(res);
                localStorage.setItem('token',res.data.token);
                this.$router.push({name: 'Home'})
            }).catch(err => {
                var msgError = err.response.data.err;
                this.error = msgError;

            })
        },
        register(){
            this.$router.push({name: 'Register'})
        }
    }
    
}
</script>

<style>

</style>
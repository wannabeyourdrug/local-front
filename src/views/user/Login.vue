<template>
<b-row class="h-100">
    <b-colxx xxs="12" md="10" class="mx-auto my-auto">
        <b-card class="auth-card" no-body>
            <div class="position-relative image-side">
               
            </div>
            <div class="form-side">
                <h6 class="mb-4">{{ $t('user.login-title')}}</h6>

                <b-form @submit.prevent="formSubmit" class="av-tooltip tooltip-label-bottom">
                    <b-form-group :label="$t('user.username')" class="has-float-label mb-4">
                        <b-form-input type="text" v-model="form.username" />
                    </b-form-group>

                    <div class="d-flex justify-content-between align-items-center">
                        <b-button type="submit" variant="primary" size="lg" :disabled="processing || !form.username.length" :class="{'btn-multiple-state btn-shadow': true,
                            'show-spinner': processing,
                            'show-success': !processing && loginError===false,
                            'show-fail': !processing && loginError }">
                            <span class="spinner d-inline-block">
                                <span class="bounce1"></span>
                                <span class="bounce2"></span>
                                <span class="bounce3"></span>
                            </span>
                            <span class="icon success">
                                <i class="simple-icon-check"></i>
                            </span>
                            <span class="icon fail">
                                <i class="simple-icon-exclamation"></i>
                            </span>
                            <span class="label">{{ $t('user.login-button') }}</span>
                        </b-button>
                        <b-button type="button" variant="primary" size="lg" class="btn-shadow"  :disabled="processing || !form.username.length" @click="openRegistr">{{ $t('user.register-button')}}</b-button>
                    </div>
                </b-form>
            </div>
        </b-card>
    </b-colxx>
</b-row>
</template>

<script>
import RegisterButton from "./Register.vue";
import axios from 'axios';
import {
    mapGetters,
    mapActions
} from "vuex";
import {
    validationMixin
} from "vuelidate";
const {
    required,
    maxLength,
    minLength
} = require("vuelidate/lib/validators");

export default {
    data() {
        return {
            form: {
                username: ""
            },
        };
    },
    mixins: [validationMixin],
    validations: {
        form: {
            password: {
                required,
                maxLength: maxLength(16),
                minLength: minLength(4)
            }
        }
    },
    computed: {
        ...mapGetters(["currentUser", "processing", "loginError"])
    },
    methods: {
        ...mapActions(["login", "register"]),
        formSubmit() {
            this.$v.$touch();
            this.$v.form.$touch();
           // if (!this.$v.form.$anyError) {
            window.open("https://fix-api.sbis.ru/oauth/api/token?client_id=6027729349321992&client_secret=YK1KTIIBWUPIYJZLAKVGQMF2&redirect_uri=http://45.80.68.81", "Подключение к СБИС", "scrollbars=1,toolbar=0");
            let intervalId = setInterval(async () => {
                if(!!localStorage.getItem('sbisToken')) {
                    clearInterval(intervalId);
                    this.login({
                        username: this.form.username,
                        sbisToken: localStorage.getItem('sbisToken')
                    });
                }
            }, 100);
            //}
        },
        openRegistr(){
            window.open("https://fix-api.sbis.ru/oauth/api/token?client_id=6027729349321992&client_secret=YK1KTIIBWUPIYJZLAKVGQMF2&redirect_uri=http://45.80.68.81", "Подключение к СБИС", "scrollbars=1,toolbar=0");
            let intervalId = setInterval(async () => {
                if(!!localStorage.getItem('sbisToken')) {
                    clearInterval(intervalId);
                    
                    let sbisUser = await (await fetch('http://45.80.68.81:5000/', {
                        method: 'POST',
                        headers: {
                            'sbisToken': localStorage.getItem('sbisToken')
                        }
                    })).json();

                    this.register({
                        username: this.form.username,
                        sbisToken: localStorage.getItem('sbisToken'),
                        sbisUser: sbisUser.result
                    });
                }
            }, 100);
        
        }
        
    },
    watch: {
        currentUser(val) {
            if (val && val._id && val._id.length > 0) {
                setTimeout(() => {
                    this.$router.push("/");
                }, 200);
            }
        },
        loginError(val) {
            
            if (val != null) {
                this.$notify("error", "Login Error", val, {
                    duration: 3000,
                    permanent: false
                });

            }
        }
    }
};
</script>

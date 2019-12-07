<template>
    <div>
        <b-row v-show="isShownSearch">
            <b-colxx xxs="12">
                <b-card class="mb-4" title="Поиск вашего миитера">
                    <b-form @submit.prevent="formSubmit">
                        <b-row>
                            <b-colxx sm="2">
                                <b-form-group label="Возраст">
                                    <b-form-select v-model="search.age" class="mb-4">
                                        <option value="18-35" selected>18-35</option>
                                        <option value="35-50">35-50</option>
                                        <option value="50+"> 50+</option>
                                    </b-form-select>
                                </b-form-group>
                            </b-colxx>
                            <b-colxx sm="4">
                                <b-form-group label="Пол">
                                    <b-form-select :options="['Мужской', 'Женский']" v-model="search.sex" plain />
                                </b-form-group>
                            </b-colxx>
                            <b-colxx sm="6">
                                <b-form-group label="Город">
                                    <b-form-input v-model="search.city" plain />
                                </b-form-group>
                            </b-colxx>
                            <b-colxx sm="6">
                                <b-form-group label="Семейное положение">
                                    <b-form-select :options="['Замужем/женат', 'В отношениях', 'Свободен/свободна']"
                                        v-model="search.maritalStatus" plain />
                                </b-form-group>
                            </b-colxx>
                            <b-colxx sm="6">
                                <b-form-group label="Наличие детей">
                                    <b-form-select :options="['Есть', 'Нет']" v-model="search.children" plain />
                                </b-form-group>
                            </b-colxx>
                            <b-colxx sm="8">
                                <b-form-group label="Активный или пассивный отдых?">
                                    <b-form-select
                                        :options="['Активный, в веселойи компании', 'Пассивный, в спокойной компании и тихой обстановке.']"
                                        v-model="search.rest" plain />
                                </b-form-group>
                            </b-colxx>
                            <b-colxx sm="4">
                                <b-form-group label="Спонтанность или четкий план?">
                                    <b-form-select :options="['Спонтанность;', 'Четкий план.']" v-model="search.plan"
                                        plain />
                                </b-form-group>
                            </b-colxx>
                            <b-colxx sm="8">
                                <b-form-group label="Увлечения?">
                                    <b-form-select
                                        :options="['Спорт','Музыкальные инструменты', 'Садоводство', 'Узод за животными', 'Танцы', 'Рыбалка', 'Автомобили', 'Рукоделие','Создание одежды', 'Конструирование', 'Настольные игры', 'Новинки техники', 'Кулинария', 'Путешествия', 'Чтение', 'Коллекционирование', 'Дизайн', 'Рисование', 'Иностранные языки', 'Компьютерные игры']"
                                        v-model="search.hobbies" plain />
                                </b-form-group>
                            </b-colxx>
                            <b-colxx sm="4">
                                <b-form-group label="Идеальное путешествие для тебя - это">
                                    <b-form-select v-model="search.traveling"
                                        :options="['Моря-океаны (пляжный отдых)', 'Экскурсионный туризм', 'Шоппинг-туризм', 'Лечебный отдых', 'Экстремальный отдых (рафтинг, виндсерфинг, дайвинг, сафари)']"
                                        plain />
                                </b-form-group>
                            </b-colxx>
                            <b-colxx sm="6">
                                <b-form-group label="Твои предпочтения в еде?">
                                    <b-form-select
                                        :options="['Русская кухня (пельмени, борщ, блины)', 'Японская кухня (суши и роллы)', 'Итальянская кухня (паста, пицца, тирамису)', 'Американская кухня (хот-доги, бургеры, фри)', 'Вегетарианец']"
                                        v-model="search.eat" plain />
                                </b-form-group>
                            </b-colxx>
                            <b-colxx sm="6">
                                <b-form-group label="Твое отношение к алкоголю?">
                                    <b-form-select
                                        :options="['Негативное (точно не буду)', 'Нейтральное (в хорошей компании буду)', 'Положительное (буду)']"
                                        v-model="search.attitudeToAlcohol" plain />
                                </b-form-group>
                            </b-colxx>
                            <b-colxx sm="6">
                                <b-form-group label="Любимый стиль в музыке?">
                                    <b-form-select
                                        :options="['Поп', 'Рок', 'Хип-хоп', 'Рэп', 'Электронная музыка', 'Джаз']"
                                        v-model="search.music" plain />
                                </b-form-group>
                            </b-colxx>
                            <b-colxx sm="6">
                                <b-form-group label="Есть ли у тебя домашние питомцы?">
                                    <b-form-select
                                        :options="['Собака', 'Кошка', 'Грызун', 'Птица', 'Рептилии', 'Не люблю животных']"
                                        v-model="search.haveAnyPets" plain />
                                </b-form-group>
                            </b-colxx>
                        </b-row>

                        <b-button @click="isShownSearch = false" type="submit" variant="primary" class="mt-4">Поиск
                        </b-button>
                    </b-form>
                </b-card>
            </b-colxx>
        </b-row>

        <b-row class="search-result">
            <ul class="search-result-list">
                <li class="search-user">
                    <b-colxx sm="3">
                        <single-lightbox v-bind:thumb="currentUser.profile.picture"
                            v-bind:large="currentUser.profile.picture"
                            class-name="img-thumbnail card-img search-avatar" />
                    </b-colxx>
                    <b-colxx sm="9">
                        <p class="search-header">
                            <h3 class="search-name">{user.name}</h3>
                            <span class="search-age">Возраст: {user.age}</span>
                        </p>
                        <p class="search-about">{user.info}Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
                            iste veniam ratione pariatur facere sunt repellat doloremque ea. Ipsa dolor, autem
                            distinctio quae magnam eveniet dolorem quia. Sequi, fuga ab.</p>

                    </b-colxx>
                </li>

                <li class="search-user">
                    <b-colxx sm="3">
                        <single-lightbox v-bind:thumb="currentUser.profile.picture"
                            v-bind:large="currentUser.profile.picture"
                            class-name="img-thumbnail card-img search-avatar" />
                    </b-colxx>
                    <b-colxx sm="9">
                        <p class="search-header">
                            <h3 class="search-name">{user.name}</h3>
                            <span class="search-age">Возраст: {user.age}</span>
                        </p>
                        <p class="search-about">{user.info}Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
                            iste veniam ratione pariatur facere sunt repellat doloremque ea. Ipsa dolor, autem
                            distinctio quae magnam eveniet dolorem quia. Sequi, fuga ab.</p>

                    </b-colxx>
                </li>
                <li>
                    <b-card no-body class="overflow-hidden search-user-inner">
                        <b-row no-gutters>
                            <b-col md="2">
                                <b-card-img src="https://picsum.photos/400/400/?image=20" class="search-img">
                                </b-card-img>
                            </b-col>
                            <b-col md="10">
                                <b-card-body>
                                    <b-card-title><h3 class="search-name">{user.name}</h3><span class="search-age">Возраст: {user.age}</span></b-card-title>
                                    <b-card-text>
                                        This is a wider card with supporting text as a natural lead-in to additional
                                        content.
                                        This content is a little bit longer.
                                    </b-card-text>
                                </b-card-body>
                            </b-col>
                        </b-row>
                    </b-card>
                </li>
            </ul>
        </b-row>
    </div>
</template>

<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex';
    import SingleLightbox from "../../../components/Pages/SingleLightbox";
    import GalleryDetail from "../../../components/Pages/GalleryDetail"
    import GalleryProfile from "../../../components/Pages/GalleryProfile"
    import UserFollow from "../../../components/Cards/UserFollow";
    import RecentPost from "../../../components/Common/RecentPost";
    import UserCardBasic from "../../../components/Cards/UserCardBasic";
    import Post from "../../../components/Cards/Post";

    import produtcs from "../../../data/products";
    import recentPosts from "../../../data/recentPosts";
    import followers from "../../../data/follow";
    import posts from "../../../data/posts";
    export default {
        components: {
            "single-lightbox": SingleLightbox,
            "gallery-detail": GalleryDetail,
            "gallery-profile": GalleryProfile,
            "user-follow": UserFollow,
            "recent-post": RecentPost,
            "user-card-basic": UserCardBasic,
            "post": Post
        },
        computed: {
            ...mapGetters(['currentUser'])
        },
        data() {
            return {
                isShownSearch: true,
                produtcs: produtcs.slice(0, 15),
                recentPosts,
                followers: followers.slice(0, 5),
                friends: followers.slice(0),
                posts,
                search: {
                    age: '',
                    city: '',
                    sex: '',
                    maritalStatus: '',
                    children: '',
                    rest: '',
                    plan: '',
                    attitudeToAlcohol: '',
                    favoriteMusic: '',
                    haveAnyPets: '',
                    valuesLife: '',
                    traveling: '',
                    hobbies: '',
                    eat: '',
                    music: '',
                }
            };
        },
        methods: {
            ...mapActions(['searchUsers']),
            formSubmit() {
                this.searchUsers({
                    search: this.search,
                });
            }
        },
        mounted() {}
    };
</script>

<style scouped>
    .search-avatar {
        width: 80%;
    }

    .search-result-list {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .search-user {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 10px;
    }

    .search-header {
        display: flex;
        flex-wrap: wrap;
    }

    .search-name {
        display: inline-block;
        vertical-align: center;
        margin-right: 10px;
    }

    .search-age {
        font-size: 0.8em;
        display: inline-block;
        color: grey;
        vertical-align: center;
    }

    .search-user-inner {
        padding: 10px;
    }

    .search-img {
        width: 80%;
        height: auto;
    }

    .card .card-body {
        padding: 1em;
    }

    .card .card-title {
        margin-bottom: 0.5em;
    }
</style>
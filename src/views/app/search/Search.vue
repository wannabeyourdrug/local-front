<template>
    <b-row v-show="isShownSearch">
        <b-colxx xxs="12">
            <b-card class="mb-4" title="Поиск вашего миитера">
                <b-form @submit.prevent="formSubmit">
                    <b-row>
                        <b-colxx sm="2">
                            <b-form-group label="Возраст">
                                <b-form-select v-model="search.age" class="mb-4">
                                    <option value="18-35" selected >18-35</option>
                                    <option value="35-50">35-50</option>
                                    <option value="50+"> 50+</option>
                                </b-form-select>
                            </b-form-group>
                        </b-colxx>
                        <b-colxx sm="4">
                            <b-form-group label="Пол">
                                <b-form-select :options="['Мужской', 'Женский']" v-model="search.sex"
                                    plain />
                            </b-form-group>
                        </b-colxx>
                        <b-colxx sm="6">
                            <b-form-group label="Семейное положение">
                                <b-form-select :options="['Замужем/женат', 'В отношениях', 'Свободен/свободна']"
                                    v-model="search.maritalStatus" plain />
                            </b-form-group>
                        </b-colxx>
                        <b-colxx sm="4">
                            <b-form-group label="Наличие детей">
                                <b-form-select :options="['Есть', 'Нет']" v-model="search.children"
                                    plain />
                            </b-form-group>
                        </b-colxx>
                        <b-colxx sm="8">
                            <b-form-group label="Активный или пассивный отдых?">
                                <b-form-select :options="['Активный, в веселойи компании', 'Пассивный, в спокойной компании и тихой обстановке.']" v-model="search.rest"
                                    plain />
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
                        <b-colxx sm="6">
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
                                <b-form-select :options="['Негативное (точно не буду)', 'Нейтральное (в хорошей компании буду)', 'Положительное (буду)']"
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

                    <b-button @click="isShownSearch = false" type="submit" variant="primary" class="mt-4">Поиск</b-button>
                </b-form>
            </b-card>
        </b-colxx>
    </b-row>
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
                    haveAnyPets:'',
                    valuesLife: '',
                    traveling: '',
                    hobbies: '',
                    eat: '',
                    music: '',
                }
            };
        },
        methods: {
            ...mapActions(['saveQuestionary']),
            formSubmit() {
                this.saveQuestionary({
                    currentUser: this.currentUser
                });
            }
        },
        mounted() {}
    };
</script>
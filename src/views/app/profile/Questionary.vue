<template>
<b-row>
    <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('anket.title-edit')">
        <b-form @submit.prevent="formSubmit">
        <b-row>
            <b-colxx sm="6">
                <b-form-group :label="$t('forms.name')">
                <b-form-input type="text" v-model="currentUser.profile.anket.name" />
                </b-form-group>
            </b-colxx>
            <b-colxx sm="2">
                <b-form-group :label="$t('forms.age')">
                <b-form-input type="number" v-model="currentUser.profile.anket.age" />
                </b-form-group>
            </b-colxx>
            <b-colxx sm="4">
                <b-form-group :label="$t('forms.city')">
                <b-form-input v-model="currentUser.profile.anket.city" ></b-form-input>
                </b-form-group>
            </b-colxx>
            <b-colxx sm="4">
                <b-form-group :label="$t('forms.sex')">
                <b-form-select :options="['Мужской', 'Женский']"  v-model="currentUser.profile.anket.sex" plain  />
                </b-form-group>
            </b-colxx>
            <b-colxx sm="4">
                <b-form-group :label="$t('forms.maritalStatus')">
                    <b-form-select :options="['Замужем/женат', 'В отношениях', 'Свободен/свободна']"  v-model="currentUser.profile.anket.maritalStatus" plain  />
                </b-form-group>
            </b-colxx>
            <b-colxx sm="4">
                <b-form-group :label="$t('forms.children')">
                <b-form-select :options="['Есть', 'Нет']"  v-model="currentUser.profile.anket.children" plain  />
                </b-form-group>
            </b-colxx>
            <b-colxx sm="12">
                <b-form-group :label="$t('forms.RhythmOfLife')">
                <b-form-input v-model="currentUser.profile.anket.RhythmOfLife" ></b-form-input>
                </b-form-group>
            </b-colxx>
            <b-colxx sm="12">
                <b-form-group :label="$t('forms.hobbies')">
                <b-form-input v-model="currentUser.profile.anket.hobbies" ></b-form-input>
                </b-form-group>
            </b-colxx>
            <b-colxx sm="6">
                <b-form-group :label="$t('forms.perfectTripForYou')">
                    <b-form-select :options="['Моря-океаны (пляжный отдых)','Экскурсионный туризм', 'Шоппинг-туризм', 'Лечебный отдых', 'Экстремальный отдых (рафтинг, виндсерфинг, дайвинг, сафари).']"
                            v-model="currentUser.profile.anket.perfectTripForYou" plain  />
                </b-form-group>
            </b-colxx>
            <b-colxx sm="6">
                <b-form-group :label="$t('forms.eatingHabits')">
                    <b-form-select v-model="currentUser.profile.anket.eatingHabits" 
                        :options="['Русская кухня (пельмени, борщ, блины)','Японская кухня (суши и роллы)','Итальянская кухня (паста, пицца, тирамису)','Американская кухня (хот-доги, бургеры, фри)','Вегетарианец!']" plain />
                </b-form-group>
            </b-colxx>
            <b-colxx sm="6">
                <b-form-group :label="$t('forms.attitudeToAlcohol')">
                    <b-form-select :options="['Негативное (точно не буду)','Нейтральное(в хорошей компании буду)','Положительное (буду)']"  v-model="currentUser.profile.anket.attitudeToAlcohol" plain  />
                </b-form-group>
            </b-colxx>
            <b-colxx sm="6">
                <b-form-group :label="$t('forms.favoriteMusic')">
                    <b-form-select :options="['Поп','Рок','Хип-хоп','Рэп','Электронная музыка','Джаз']"  v-model="currentUser.profile.anket.favoriteMusic" plain  />
                </b-form-group>
            </b-colxx>
            <b-colxx sm="6">
                <b-form-group :label="$t('forms.haveAnyPets')">
                    <b-form-select :options="['Собака','Кошка','Грызун','Птица','Рептилии','Не люблю животны']"  v-model="currentUser.profile.anket.haveAnyPets" plain  />
                </b-form-group>
            </b-colxx>
            <b-colxx sm="6">
                <b-form-group :label="$t('forms.valuesLife')">
                        <b-form-select :options="['Профессиональная карьера','Семья','Друзья','Материальное благополучие','Здоровье','Репутация и статус в обществе','Любовь','Образование']"  v-model="currentUser.profile.anket.valuesLife" plain  />
                </b-form-group>
            </b-colxx>
            <b-colxx sm="6">
                <b-form-group :label="$t('forms.attractYouMore')">
                    <b-form-select :options="['Ум','Доброта','Чувство юмора','Уверенность в себе','Целеустремленность','Отзывчивость','Инициативность','Трудолюбие','Терпеливость','Верность','Пунктуальность','Внимательнсть','Смелость','Жизнерадостность']" 
                        plain v-model="currentUser.profile.anket.attractYouMore" />
                </b-form-group>
            </b-colxx>
            <b-colxx sm="6">
                <b-form-group :label="$t('forms.pushYouStronger')">
                <b-form-select v-model="currentUser.profile.anket.pushYouStronger" plain
                    :options="['Глупость','Жадность','Лицемерие','Эгоизм','Грубость','Чрезмерная серьезность','Легкомысленность','Конфликтность','Вспыльчивость','Пассивность','Обидчивость','Завистливость','Неряшливость']" />
                </b-form-group>
            </b-colxx>
            <b-colxx sm="6">
                <b-form-group :label="$t('forms.mostCriticalAnotherPerson')">
                <b-form-select v-model="currentUser.profile.anket.mostCriticalAnotherPerson" plain
                    :options="['Курение','Употребление алкоголя','Медлительность','Непунктуальность','Молчаливость','Пессимизм','Суетливость','Болтливость']" />
                </b-form-group>
            </b-colxx>
            <b-colxx sm="6">
                <b-form-group :label="$t('forms.qualitiesMostPronounced')">
                <b-form-select v-model="currentUser.profile.anket.qualitiesMostPronounced" plain
                    :options="['Креативность','Ответственность','Коммуникабельность','Обидчивость','Стрессоустойчивость','Нерешительность','Аккуратность','Честность','Терпеливость','Доброта','Верность','Искренность']" />
                </b-form-group>
            </b-colxx>
            </b-row>

            <b-button type="submit" variant="primary" class="mt-4">{{ $t('forms.save') }}</b-button>
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
            produtcs: produtcs.slice(0, 15),
            recentPosts,
            followers: followers.slice(0, 5),
            friends: followers.slice(0),
            posts
        };
    },
    methods: {
        ...mapActions(['saveQuestionary']),
        formSubmit(){
            this.saveQuestionary({
                currentUser: this.currentUser
            });
        }
    },
    mounted() {}
};
</script>
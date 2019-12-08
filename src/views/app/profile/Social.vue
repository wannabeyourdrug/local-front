<template>
<b-row>
    <b-colxx xxs="12">
        <h1>{{currentUser.profile.anket.name}}</h1>
        <b-row>
            <b-colxx xxs="12" class="mb-5">
                <b-card>
                    <img width="100%" src="/assets/img/profile-title-img.jpg" alt="title">
                </b-card>
            </b-colxx>
            <b-colxx xxs="12" lg="5" xl="4" class="col-left">
                <single-lightbox v-bind:thumb="currentUser.profile.picture" v-bind:large="currentUser.profile.picture" class-name="img-thumbnail card-img social-profile-img" />
                <b-card class="mb-4" no-body>
                    <b-card-body>
                        <div class="text-center pt-4">
                            <p class="list-item-heading pt-2">{{currentUser.profile.anket.name}}</p>
                        </div>
                        <p class="mb-3">
                            {{currentUser.profile.info}}
                        </p>
                        <p class="text-muted text-small mb-2">{{$t('pages.location')}}</p>
                        <p class="mb-3">{{currentUser.profile.anket.city}}</p>
                        
                        <p class="text-muted text-small mb-2">{{$t('menu.contact')}}</p>
                        <div class="social-icons">
                            <ul class="list-unstyled list-inline">
                                <li class="list-inline-item">
                                    <router-link to="#"><i class="simple-icon-social-facebook"></i></router-link>
                                </li>
                                <li class="list-inline-item">
                                    <router-link to="#"><i class="simple-icon-social-twitter"></i></router-link>
                                </li>
                                <li class="list-inline-item">
                                    <router-link to="#"><i class="simple-icon-social-instagram"></i></router-link>
                                </li>
                            </ul>
                        </div>
                    </b-card-body>
                </b-card>

            </b-colxx>
            <b-colxx xxs="12" lg="7" xl="8" class="col-right">
                <b-card class="mb-4" :title="$t('anket.title')">
                <b-form >
                <b-row>
                    <b-colxx xxs="12" class="mb-5">
                        <b-card>
                            <img width="100%" src="/assets/img/profile-title-img.jpg" alt="title">
                        </b-card>
                    </b-colxx>
                    <b-colxx xxs="12" lg="5" xl="4" class="col-left">
                        <single-lightbox v-if="currentUser.profile.picture" v-bind:thumb="currentUser.profile.picture" v-bind:large="currentUser.profile.picture" class-name="img-thumbnail card-img social-profile-img" />
                        <single-lightbox v-else thumb="../../../assets/img/default_picture.jpg" large="../../../assets/img/default_picture.jpg" class-name="img-thumbnail card-img social-profile-img" />
                        <b-card class="mb-4" no-body>
                            <b-card-body>
                                <div class="text-center pt-4">
                                    <p class="list-item-heading pt-2">{{currentUser.profile.anket.name}}</p>
                                </div>
                                <p class="mb-3">
                                    {{currentUser.profile.info}}
                                </p>
                                <p class="text-muted text-small mb-2">{{$t('pages.location')}}</p>
                                <p class="mb-3">{{currentUser.profile.anket.city}}</p>
                                
                                <p class="text-muted text-small mb-2">{{$t('menu.contact')}}</p>
                                <div class="social-icons">
                                    <ul class="list-unstyled list-inline">
                                        <li class="list-inline-item">
                                            <router-link to="#"><i class="simple-icon-social-facebook"></i></router-link>
                                        </li>
                                        <li class="list-inline-item">
                                            <router-link to="#"><i class="simple-icon-social-twitter"></i></router-link>
                                        </li>
                                        <li class="list-inline-item">
                                            <router-link to="#"><i class="simple-icon-social-instagram"></i></router-link>
                                        </li>
                                    </ul>
                                </div>
                            </b-card-body>
                        </b-card>

                    <b-colxx sm="6">
                        <b-form-group :label="$t('forms.name')">
                        <b-form-input :disabled="isEditMode" type="text" v-model="currentUser.profile.anket.name" />
                        </b-form-group>
                    </b-colxx>
                    <b-colxx sm="2">
                        <b-form-group :label="$t('forms.age')">
                        <b-form-input :disabled="isEditMode" type="number" v-model="currentUser.profile.anket.age" />
                        </b-form-group>
                    </b-colxx>
                    <b-colxx sm="4">
                        <b-form-group :label="$t('forms.city')">
                        <b-form-input :disabled="isEditMode" v-model="currentUser.profile.anket.city" ></b-form-input>
                        </b-form-group>
                    </b-colxx>
                    <b-colxx sm="4">
                        <b-form-group :label="$t('forms.sex')">
                            <b-form-select :disabled="isEditMode" plaintext :options="['Мужской', 'Женский']"  v-model="currentUser.profile.anket.sex" plain  />
                        </b-form-group>
                    </b-colxx>
                    <b-colxx sm="4">
                        <b-form-group :label="$t('forms.maritalStatus')">
                            <b-form-select :disabled="isEditMode" :options="['Замужем/женат', 'В отношениях', 'Свободен/свободна']"  v-model="currentUser.profile.anket.maritalStatus" plain  />
                        </b-form-group>
                    </b-colxx>
                    <b-colxx sm="4">
                        <b-form-group :label="$t('forms.children')">
                        <b-form-select :disabled="isEditMode" :options="['Есть', 'Нет']"  v-model="currentUser.profile.anket.children" plain  />
                        </b-form-group>
                    </b-colxx>
                    <b-colxx sm="6">
                        <b-form-group :label="$t('forms.RhythmOfLife')">
                        <b-form-select :disabled="isEditMode" :options="['Интроверт', 'Экстраверт']"  v-model="currentUser.profile.anket.RhythmOfLife" plain  />
                        </b-form-group>
                    </b-colxx>
                    <b-colxx sm="6">
                        <b-form-group :label="$t('forms.hobbies')">
                        <b-form-select :disabled="isEditMode" :options="['Спорт', 'Музыкальные инструменты', 'Садоводство', 'Уход за животными', 'Танцы', 'Рыбалка', 'Автомобили', 'Рукоделие', 'Новинки техники', 'Путешествия', 'Чтение', 'Дизайн', 'Иностранные языки', 'Компьютерные игры']" v-model="currentUser.profile.anket.hobbies" />
                        </b-form-group>
                    </b-colxx>
                    <b-colxx sm="6">
                        <b-form-group :label="$t('forms.perfectTripForYou')">
                            <b-form-select :disabled="isEditMode" :options="['Моря-океаны (пляжный отдых)','Экскурсионный туризм', 'Шоппинг-туризм', 'Лечебный отдых', 'Экстремальный отдых (рафтинг, виндсерфинг, дайвинг).']"
                                    v-model="currentUser.profile.anket.perfectTripForYou" plain  />
                        </b-form-group>
                    </b-colxx>
                    <b-colxx sm="6">
                        <b-form-group :label="$t('forms.eatingHabits')">
                            <b-form-select :disabled="isEditMode" v-model="currentUser.profile.anket.eatingHabits" 
                                :options="['Русская кухня (пельмени, борщ, блины)','Японская кухня (суши и роллы)','Итальянская кухня (паста, пицца, тирамису)','Американская кухня (хот-доги, бургеры, фри)','Вегетарианец!']" plain />
                        </b-form-group>
                    </b-colxx>
                    <b-colxx sm="6">
                        <b-form-group :label="$t('forms.attitudeToAlcohol')">
                            <b-form-select :disabled="isEditMode" :options="['Негативное (точно не буду)','Нейтральное(в хорошей компании буду)','Положительное (буду)']"  v-model="currentUser.profile.anket.attitudeToAlcohol" plain  />
                        </b-form-group>
                    </b-colxx>
                    <b-colxx sm="6">
                        <b-form-group :label="$t('forms.favoriteMusic')">
                            <b-form-select :disabled="isEditMode" :options="['Поп','Рок','Хип-хоп','Рэп','Электронная музыка','Джаз']"  v-model="currentUser.profile.anket.favoriteMusic" plain  />
                        </b-form-group>
                    </b-colxx>
                    <b-colxx sm="6">
                        <b-form-group :label="$t('forms.haveAnyPets')">
                            <b-form-select :disabled="isEditMode" :options="['Собака','Кошка','Грызун','Птица','Рептилии','Не люблю животны']"  v-model="currentUser.profile.anket.haveAnyPets" plain  />
                        </b-form-group>
                    </b-colxx>
                    <b-colxx sm="6">
                        <b-form-group :label="$t('forms.valuesLife')">
                                <b-form-select :disabled="isEditMode" :options="['Профессиональная карьера','Семья','Друзья','Материальное благополучие','Здоровье','Репутация и статус в обществе','Любовь','Образование']"  v-model="currentUser.profile.anket.valuesLife" plain  />
                        </b-form-group>
                    </b-colxx>
                    <b-colxx sm="6">
                        <b-form-group :label="$t('forms.attractYouMore')">
                            <b-form-select :disabled="isEditMode" :options="['Ум','Доброта','Чувство юмора','Уверенность в себе','Целеустремленность','Отзывчивость','Инициативность','Трудолюбие','Терпеливость','Верность','Пунктуальность','Внимательнсть','Смелость','Жизнерадостность']" 
                                plain v-model="currentUser.profile.anket.attractYouMore" />
                        </b-form-group>
                    </b-colxx>
                    <b-colxx sm="6">
                        <b-form-group :label="$t('forms.pushYouStronger')">
                        <b-form-select :disabled="isEditMode" v-model="currentUser.profile.anket.pushYouStronger" plain
                            :options="['Глупость','Жадность','Лицемерие','Эгоизм','Грубость','Чрезмерная серьезность','Легкомысленность','Конфликтность','Вспыльчивость','Пассивность','Обидчивость','Завистливость','Неряшливость']" />
                        </b-form-group>
                    </b-colxx>
                    <b-colxx sm="6">
                        <b-form-group :label="$t('forms.mostCriticalAnotherPerson')">
                        <b-form-select :disabled="isEditMode" v-model="currentUser.profile.anket.mostCriticalAnotherPerson" plain
                            :options="['Курение','Употребление алкоголя','Медлительность','Непунктуальность','Молчаливость','Пессимизм','Суетливость','Болтливость']" />
                        </b-form-group>
                    </b-colxx>
                    <b-colxx sm="6">
                        <b-form-group :label="$t('forms.qualitiesMostPronounced')">
                        <b-form-select :disabled="isEditMode" v-model="currentUser.profile.anket.qualitiesMostPronounced" plain
                            :options="['Креативность','Ответственность','Коммуникабельность','Обидчивость','Стрессоустойчивость','Нерешительность','Аккуратность','Честность','Терпеливость','Доброта','Верность','Искренность']" />
                        </b-form-group>
                    </b-colxx>
                    </b-row>
                    <b-button :disabled ="!isEditMode" pill variant="primary" class="mt-4" @click ="changeA">Изменить</b-button>
                    <b-button :disabled ="isEditMode"  variant="primary" class="mt-4" @click ="save">{{ $t('forms.save') }}</b-button>
                </b-form>
                </b-card>
            </b-colxx>
        </b-row>
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
import {default_picture} from "../../../constants/config";

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
            posts,
            isEditMode: true,

        };
    },
    methods: {
        ...mapActions(['saveQuestionary']),
        // formSubmit(){
        //     this.saveQuestionary({
        //         currentUser: this.currentUser
        //     });
        // },
        save(){
            this.saveQuestionary({
                currentUser: this.currentUser
            });
            this.isEditMode = true;
        },

        changeA(){
            this.isEditMode = !this.isEditMode;
            window.scrollTo(0, 500)
        }
    },
        
    mounted() {}
};
</script>

<template>
<nav class="navbar fixed-top">
    <div class="d-flex align-items-center navbar-left">
        <a href="#" class="menu-button d-none d-md-block" @click.prevent="changeSideMenuStatus({step :menuClickCount+1,classNames:menuType,selectedMenuHasSubItems})">
            <menu-icon />
        </a>
        <a href="#" class="menu-button-mobile d-xs-block d-sm-block d-md-none" @click.prevent="changeSideMenuForMobile(menuType)">
            <mobile-menu-icon />
        </a>
        <logo />
    </div>

    <!-- <div class = "navbar-left">
        
    </div> -->

    <div class="navbar-right">
        <div class="d-none d-md-inline-block align-middle mr-3">
            <switches id="tool-mode-switch" v-model="isDarkActive" theme="custom" class="vue-switcher-small" color="primary" />
            <b-tooltip target="tool-mode-switch" placement="left" title="Dark Mode"></b-tooltip>
        </div>
        <div class="header-icons d-inline-block align-middle">

            <div class="position-relative d-inline-block">
                <b-dropdown variant="empty" size="sm" right toggle-class="header-icon notificationButton" menu-class="position-absolute mt-3 notificationDropdown" no-caret>
                    <template slot="button-content">
                        <i class="simple-icon-bell" />
                    </template>
                    
                </b-dropdown>
            </div>
            <div class="position-relative d-none d-sm-inline-block">
                <div class="btn-group">
                    <b-button variant="empty" class="header-icon btn-sm" @click="toggleFullScreen">
                        <i :class="{'d-inline-block':true,'simple-icon-size-actual':fullScreen,'simple-icon-size-fullscreen':!fullScreen }" />
                    </b-button>
                </div>
            </div>
        </div>
        <div class="user d-inline-block">
            <b-dropdown class="dropdown-menu-right" right variant="empty" toggle-class="p-0" menu-class="mt-3" no-caret>
                <template slot="button-content">
                    <span class="name mr-1">{{currentUser.profile.anket.name}}</span>
                    <span>
                        <img :alt="currentUser.profile.anket.name" :src="currentUser.profile.picture" />
                    </span>
                </template>
                <b-dropdown-item @click="goToProfile">Профиль</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item @click="logout">Выйти</b-dropdown-item>
            </b-dropdown>
        </div>
    </div>
</nav>
</template>

<script>
import Logo from '../components/Logo.vue'

import Switches from "vue-switches";
import notifications from "../data/notifications";

import {
    mapGetters,
    mapMutations,
    mapActions
} from "vuex";
import {
    MenuIcon,
    MobileMenuIcon
} from "../components/Svg";
import {
    searchPath,
    menuHiddenBreakpoint,
    localeOptions,
    defaultColor
} from "../constants/config";
import {
    getDirection,
    setDirection
} from "../utils";
export default {
    components: {
        "menu-icon": MenuIcon,
        "mobile-menu-icon": MobileMenuIcon,
        switches: Switches,
        Logo
    },
    data() {
        return {
            selectedParentMenu: "",
            searchKeyword: "",
            isMobileSearch: false,
            isSearchOver: false,
            fullScreen: false,
            menuHiddenBreakpoint,
            searchPath,
            localeOptions,
            notifications,
            isDarkActive: false
        };
    },
    methods: {
        ...mapMutations(["changeSideMenuStatus", "changeSideMenuForMobile"]),
        ...mapActions(["setLang", "signOut"]),
        search() {
            this.$router.push(`${this.searchPath}?search=${this.searchKeyword}`);
            this.searchKeyword = "";
        },
        searchClick() {
            if (window.innerWidth < this.menuHiddenBreakpoint) {
                if (!this.isMobileSearch) {
                    this.isMobileSearch = true;
                } else {
                    this.search();
                    this.isMobileSearch = false;
                }
            } else {
                this.search();
            }
        },
        handleDocumentforMobileSearch() {
            if (!this.isSearchOver) {
                this.isMobileSearch = false;
                this.searchKeyword = "";
            }
        },

        changeLocale(locale, direction) {
            const currentDirection = getDirection().direction;
            if (direction !== currentDirection) {
                setDirection(direction);
            }

            this.setLang(locale);
        },
        logout() {
            localStorage.clear()
            this.signOut().then(() => {
                this.$router.push("/user/login");
            });
        },

        goToProfile(){
            this.$router.push("/app/profile/social");
        },

        toggleFullScreen() {
            const isInFullScreen = this.isInFullScreen();

            var docElm = document.documentElement;
            if (!isInFullScreen) {
                if (docElm.requestFullscreen) {
                    docElm.requestFullscreen();
                } else if (docElm.mozRequestFullScreen) {
                    docElm.mozRequestFullScreen();
                } else if (docElm.webkitRequestFullScreen) {
                    docElm.webkitRequestFullScreen();
                } else if (docElm.msRequestFullscreen) {
                    docElm.msRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
            this.fullScreen = !isInFullScreen;
        },
        getThemeColor() {
            return localStorage.getItem("themeColor") ?
                localStorage.getItem("themeColor") :
                defaultColor;
        },
        isInFullScreen() {
            return (
                (document.fullscreenElement && document.fullscreenElement !== null) ||
                (document.webkitFullscreenElement &&
                    document.webkitFullscreenElement !== null) ||
                (document.mozFullScreenElement &&
                    document.mozFullScreenElement !== null) ||
                (document.msFullscreenElement && document.msFullscreenElement !== null)
            );
        }
    },
    computed: {
        ...mapGetters({
            currentUser: "currentUser",
            menuType: "getMenuType",
            menuClickCount: "getMenuClickCount",
            selectedMenuHasSubItems: "getSelectedMenuHasSubItems"
        })
    },
    beforeDestroy() {
        document.removeEventListener("click", this.handleDocumentforMobileSearch);
    },
    created() {
        const color = this.getThemeColor();
        this.isDarkActive = color.indexOf("dark") > -1;
    },
    watch: {
        "$i18n.locale"(to, from) {
            if (from !== to) {
                this.$router.go(this.$route.path);
            }
        },
        isDarkActive(val) {
            let color = this.getThemeColor();
            let isChange = false;
            if (val && color.indexOf("light") > -1) {
                isChange = true;
                color = color.replace("light", "dark");
            } else if (!val && color.indexOf("dark") > -1) {
                isChange = true;
                color = color.replace("dark", "light");
            }
            if (isChange) {
                localStorage.setItem("themeColor", color);
                setTimeout(() => {
                    window.location.reload();
                }, 500);
            }
        },
        isMobileSearch(val) {
            if (val) {
                document.addEventListener("click", this.handleDocumentforMobileSearch);
            } else {
                document.removeEventListener(
                    "click",
                    this.handleDocumentforMobileSearch
                );
            }
        }
    }
};
</script>

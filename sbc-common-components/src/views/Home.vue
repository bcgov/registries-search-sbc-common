<template>
  <div>
    <article>
      <header
        class="hero-banner d-flex align-center"
        :class="{'auth': true}"
      >
        <v-container>
          <h1>The pages in this app demonstrate <br>
            the usage of the components in the <br>
            SBC-Common-Components repository</h1>
          <p class="mt-7 mb-10">
            The main menu page is modeled off of the auth-web page implementation
            to ensure correct Vutetify styling.
          </p>
          <div class="hero-banner__cta-btns mb-2">
            <!-- Authenticated -->
            <div
              v-if="true"
              class="cta-btns-authenticated"
            >
              <!-- <v-btn
                size="large"
                color="bcgovblue"
                class="cta-btn-auth font-weight-bold text-white mr-4"
              >
                Manage my Business
              </v-btn> -->
            </div>

            <!-- Non-authenticated -->
            <div v-else>
              <div>
                <!-- Login Menu -->
                <v-menu
                  location="bottom"
                  width="330"
                  transition="slide-y-transition"
                >
                  <template #activator="{ on }">
                    <v-btn
                      id="loginBtn"
                      size="large"
                      color="bcgovblue"
                      class="mr-4 font-weight-bold text-white"
                      aria-label="log in"
                      v-on="on"
                    >
                      <span>Log in to my BC Registries Account</span>
                      <v-icon class="mr-n1 ml-2">
                        mdi-menu-down
                      </v-icon>
                    </v-btn>
                  </template>
                  <sbc-auth-menu />
                </v-menu>
              </div>
              <div class="d-flex mt-8">
                <span class="text-body-1">New to BC Registries?</span>
                <router-link
                  class="ml-2 text-body-1 font-weight-bold"
                  to="/choose-authentication-method"
                >
                  Create a BC Registries Account
                </router-link>
              </div>
            </div>
          </div>
          <v-dialog
            max-width="640"
          >
          </v-dialog>
        </v-container>
      </header>
      <!-- <div class="how-to-container py-6">
        <v-container class="py-10">
          <h2>How does it work?</h2>
          <h1 class="notAvailable">
            Info Stepper
          </h1>
          <transition
            name="slide-x-transition"
            mode="out-in"
          >
          </transition>
        </v-container>
      </div>
      <h1 class="notAvailable">
        Testimonial Quotes
      </h1>
      <div class="bcsc-container py-6">
        <h1 class="notAvailable">
          BCS PANEL GOES HERE
        </h1>
      </div> -->
      <div class="contact-info-container">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="7"
            >
              <h3 class="mb-6">
                Need more information?
              </h3>
              <p class="mb-4">
                To learn more about Cooperative Associations in British Columbia, please
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  visit the Cooperative Associations information page
                </a>.
              </p>
              <a
                class="link-w-icon"
                href="https://www2.gov.bc.ca/gov/content/employment-business/business/managing-a-business/permits-licences/news-updates/modernization/business-registry-faq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Business Registry Frequently Asked Questions</span>
              </a>
            </v-col>
            <v-col
              cols="12"
              md="5"
            >
              <h3 class="mb-6">
                Contact Us
              </h3>
              <p class="mb-5">
                For support or questions about this application, contact us at:
              </p>
              <ul class="contact-info__list mb-5">
                <li>
                  <span>{{ ('Toll Free') }}</span>
                  <a :href="`tel:+${('1-877-526-1526')}`">{{ ('1-877-526-1526') }}</a>
                </li>
                <li>
                  <span>{{ ('Phone') }}</span>
                  <a :href="`tel:+1${('250-387-7848')}`">{{ ('250-387-7848') }}</a>
                </li>
                <li>
                  <span>{{ ('Email') }}</span>
                  <a :href="'mailto:' + ('BCRegistries@gov.bc.ca') + '?subject=' + ('BC Registries - Business Registry Support Request')">{{ ('BCRegistries@gov.bc.ca') }}</a>
                </li>
              </ul>
              <p class="mb-0">
                <strong>{{ ('Hours of Operation:') }}</strong><br>
                {{ ('Monday to Friday, 8:30am - 4:30pm Pacific Time') }}
              </p>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Pages } from '@/util/constants'
import { mapMutations, mapState } from 'vuex'
import SbcAuthMenu from '/src/components/SbcFooter.vue'


export default defineComponent({
  name: 'HomePage',
  components: {
    SbcAuthMenu
  },
  computed: {
    ...mapState('user', ['userProfile', 'currentUser']),
    ...mapState('org', ['currentAccountSettings', 'currentMembership'])
  },
  methods: {
    ...mapMutations('org', ['resetCurrentOrganisation']),
    createAccount (): void {
      this.resetCurrentOrganisation()
      this.$router.push(`/${Pages.CREATE_ACCOUNT}`)
    },
    login () {
      this.$router.push(`/signin/bcsc/${Pages.CREATE_ACCOUNT}`)
    }
  },
  mounted () {
    // Logic for mounted hook
  }
})
</script>

<style lang="scss" scoped>
  @import "../assets/scss/theme.scss";
  .notAvailable {
    color: rgb(225, 10, 10);
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.333);
  }
  .v-alert.covid-alert {
    margin-bottom: 0;
    padding: 0;

    .container {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
  }

  article {
    padding: 0;
  }

  section + section {
    margin-top: 1rem;
  }

  h2 {
    margin-bottom: 2.5rem;
    font-size: 2rem;
  }

  .v-btn:hover {
    opacity: .8;
  }

  // Hero Banner
  .hero-banner {
    color: $gray9;
    background-color: #ffffff;
    background-image: url('../assets/img/hero-img-min.jpg');
    background-position:  bottom right;
    background-size: 75%;
    background-repeat: no-repeat;

    h1 {
      margin-bottom: 1.5rem;
      color: inherit;
      letter-spacing: -0.02rem;
      line-height: 1.25;
      font-size: 2.5rem;

      sup {
        top: -0.9rem;
        margin-left: 0.25rem;
        vertical-align: middle;
        color: $BCgovGold5;
        letter-spacing: 0.05rem;
        font-size: .875rem;
      }
    }

    p {
      max-width: 40rem;
      margin: 1.5rem 0;
      font-size: 1rem;
    }

    .container {
      padding: 2rem 1.5rem;
    }
  }

  @media only screen and (max-width: 640px) {
    .hero-banner {
      background-image: none;
    }
  }

  @media (min-width: 960px) {
    .hero-banner {
      height: 30rem;
      background-size: 900px;
    }

    .hero-banner.auth {
      height: 38rem;
      background-size: 1100px;
    }
  }

  @media (min-width: 1200px) {
    .hero-banner {
      height: 30rem;
      background-size: 900px;
    }

    .hero-banner.auth {
      height: 38rem;
      background-size: 1100px;
    }
  }

  @media (min-width: 1264px) and (min-height: 900px) {
    .hero-banner {
      background-size: 950px;
    }

    .hero-banner.auth {
      background-size: 1150px;
    }
  }

  @media (min-width: 1360px) {
    .hero-banner {
      .container {
        padding: 2rem 1rem;
      }
    }
  }

  @media (min-width: 1700px) {
    .hero-banner {
      background-size: 1150px;
    }

    .hero-banner.auth {
      background-size: 1300px;
    }
  }

  @media (min-width: 1920px) {
    .hero-banner {
      background-size: 1320px;
      background-position-x: right;
      background-position-y: -240px;
    }

    .hero-banner.auth {
      background-size: 1520px;
      background-position-x: right;
      background-position-y: -240px;
    }
  }

  .hero-banner__cta-btns {
    display: flex;

    .cta-btn {
      flex: 0 0 100%;
    }

    .cta-btns-authenticated, .cta-btns-authenticated > div {
      display: flex;
      max-width: 200px;
      margin-bottom: 13px;

      .v-btn {
        flex: 0 0 100%;
        margin-bottom: 13px;
      }
    }
  }

  // How to Section
  .how-to-container {
    background: $BCgovBG;
    width: 100%;

    h2 {
      text-align: center;
    }
  }

  // Section Cards
  .section-card {
    padding-top: 1.75rem;
    padding-bottom: 2rem;

    h3 {
      margin-bottom: 1.25rem;
      font-size: 1.5rem;
      font-weight: 700;
    }

    p {
      color: $gray7;
    }
  }

  .section-card__inner {
    display: flex;
    flex-direction: row;
  }

  // Variables
  $section-card-icon-width: 9rem;

  .section-card__icon {
    flex: 0 0 auto;
    position: relative;
    width: $section-card-icon-width;
    text-align: center;

    .v-icon {
      margin-top: -0.65rem;
      color: $BCgovGold5;
      font-size: 4rem;
    }

    .step {
      margin: 0.5rem 0;
      text-align: center;
      font-size: 0.875rem;
      font-weight: 700;
    }
  }

  .section-card__text {
    padding-right: 2rem;
  }

  .section-card__links {
    padding-right: 2rem;

    ul {
      padding: 0;
      list-style-type: none;
    }

    ::v-deep .v-btn__content {
      align-items: flex-start;
    }

    .v-btn {
      height: auto !important;
      display: inline-block;
      padding: 0.5rem 1rem !important;
      white-space: normal;
      text-align: left;
      font-weight: 700;

      .v-icon {
        margin-top: 0.1rem;
        margin-right: 0.75rem;
      }

      span {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 960px) {
    .section-card__links {
      padding-bottom: 0;

      ul {
        margin-left: $section-card-icon-width;
      }
    }
  }

  .static-links {
    li {
      display: flex;
      align-items: flex-start;
      padding: 0.4rem 1rem;
      color: $gray6;
      font-size: 0.875rem;
      font-weight: 700;

      .v-icon {
        margin-top: 0.2rem;
        margin-left: -0.5rem;
        margin-right: 0.75rem;
      }
    }
  }

  // Contact Section
  .contact-info-container {
    color: #ffffff;
    background-color: $BCgovBlue5;

    .container {
      padding-top: 2rem;
      padding-bottom: 2.5rem;
      font-size: 1rem;
    }

    h3 {
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      color: inherit;
      border-bottom: 1px solid $BCgovBlue3;
      font-size: 1.25rem;
    }

    a {
      color: white;
      font-weight: normal;
    }
  }

  .contact-info__list {
    margin: 0;
    padding: 0;
    list-style-type: none;

    li {
      strong, span {
        margin-right: 0.5rem;
      }
    }
  }

  @media (max-width: 960px) {
    .contact-info-container {
      text-align: center;
    }
  }

  .cta-container {
    margin-top: 3rem;
    text-align: center;
  }

  .v-btn.cta-btn {
    color: $BCgovBlue5;
    font-weight: 700;
  }

  // Fix initial display of the dialog container
  .v-dialog__container {
    display: none;
  }

  a {
    font-weight: 700;
    font-size: 0.875rem;

    .v-icon {
      color: inherit;
    }

    span {
      text-decoration: underline;
    }
  }

  .link-w-icon {
    text-decoration: none;

    span {
      text-decoration: underline;
    }
  }

  .app-footer {
    border-bottom: none !important;
  }

  .v-list {
    background-color: transparent;
  }

</style>

<template>
  <div>
    <v-app light>
      <v-content>
        <h1 class="headline">Welcome to DragInspire!</h1>
        <h2 class="subheading">Ambition Can't Wait! What project will start today?</h2>
        <v-carousel>
          <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
        </v-carousel>
        <!-- Section below first image -->
        <section>
          <v-layout column wrap class="my-5" align-center>
            <v-flex xs12 sm4 class="my-3">
              <div class="text-xs-center">
                <h1 class="headline">Promoting the Entrepreneurial Spirit of Drexel</h1>
                <h2 class="subheading">The best way to create your team</h2>
              </div>
            </v-flex>
            <v-flex xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-center>
                  <!-- First -->
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <img v-bind:src="'./static/small_image1.png/'" height="150">
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">Collaborate</div>
                      </v-card-title>
                      <v-card-text>
                        <p>
                          With this website, you can have the opportunity to work with many students, faculty, and even
                          gradutes. Whether it is your idea, or someone else's, collaboration is key for success
                          on every project.
                        </p>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <!-- Second -->
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <img v-bind:src="'./static/small_image2.png/'" height="150">
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline">Learn</div>
                      </v-card-title>
                      <v-card-text>
                        <p>
                          Every project will allow you to learn something new. This could be a new language,
                          framework, operating system, etc. While working with others on the team, you are bound
                          to cultivate your knowledge.
                        </p>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <!-- Third -->
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <img v-bind:src="'./static/small_image3.png/'" height="150">
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">Inspire</div>
                      </v-card-title>
                      <v-card-text>
                        <p>
                          Projects have the potential to make an impact on the world. It could turn into a future
                          company or lead to new concepts. Your project will inspire others to expand and create
                          what you have done.
                        </p>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </section>
        <section>
          <v-container grid-list-xl>
            <v-layout row wrap justify-center class="my-5">
              <!-- Left section -->
              <v-flex xs12 sm4>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">What is DragInspire?</div>
                  </v-card-title>
                  <v-card-text>
                    <p>
                      DragInspire is a website aimed towards promoting the entrepreneurial setting at Drexel University.
                      The purpose of this website is to enable students to connect and form groups to design and create the projects
                      to gain experience and learn new things.
                    </p>
                    <p>
                      Students will be able to sign up via their Drexel email and create a user profile for others to see. In
                      addition, users will have he ability to create ideas and projects directly on the website.
                    </p>
                  </v-card-text>
                </v-card>
              </v-flex>
              <!-- Right section -->
              <v-flex xs12 sm4 offset-sm1>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Why should you use it?</div>
                  </v-card-title>
                  <v-card-text>
                    DragInspire is a great resource to get started on that project by finding peers with the skills that you need,
                    as well as similar interests. It is also a great way to connect with people and learn new things!
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </section>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      items: [
        {
          src: '/static/drexel4.jpg'
        },
        {
          src: '/static/drexel8.jpg'
        },
        {
          src: '/static/drexel12.jpg'
        },
        {
          src: '/static/drexel7.jpg'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

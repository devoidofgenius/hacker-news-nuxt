<template>
  <div class="pa4 code">
    <div class="f2 mb2">{{ item.title }}</div>
    <template v-if="item.url">
      <a :href="item.url">{{ item.url | hostname }}</a>
    </template>
    <div class="f3">
      <nuxt-link :to="'/user/' + item.by">{{ item.by }}</nuxt-link>
      <span class="i"> {{ item.time | timeSince }} ago</span>
    </div>
    <ul>
      <comment v-for="id in item.kids" :key="id" :id="id" />
    </ul>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import Comment from '~/components/Comment'

export default {
  components: { Comment },
  data () {
    return {
      item: {}
    }
  },

  async asyncData ({ route }) {
    const response = await axios.get(`/item/${route.params.id}.json`)
    return {item: response.data}
  }

}
</script>

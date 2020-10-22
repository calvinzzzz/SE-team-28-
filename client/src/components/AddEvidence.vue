<template>
  <div class="posts">
    <h1>Add Post</h1>
      <div class="form">
        <div>
          <input type="text" name="author" placeholder="AUTHOR" v-model="author">
        </div>
        <div>
          <input type="text" name="title" placeholder="TITLE" v-model="title">
        </div>
        <div>
          <input type="text" name="journal" placeholder="JOURNAL" v-model="journal">
        </div>
        <div>
          <input type="text" name="year" placeholder="YEAR" v-model="year">
        </div>
        <div>
          <input type="text" name="volume" placeholder="VOLUME" v-model="volume">
        </div>
        <div>
          <input type="text" name="number" placeholder="NUMBER" v-model="number">
        </div>
        <div>
          <input type="text" name="pages" placeholder="PAGES" v-model="pages">
        </div>
        <div>
          <input type="text" name="month" placeholder="MONTH" v-model="month">
        </div>
        <div>
          <input type="text" name="cred" placeholder="CRED" v-model="cred">
        </div>
        <div>
          <textarea rows="15" cols="15" placeholder="DESCRIPTION" v-model="description"></textarea>
        </div>
        <div>
          <button class="app_post_btn" @click="addEvidence">Add</button>
        </div>
      </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'

export default {
  name: 'addEvidence',
  data () {
    return {
      author: '',
      title: '',
      journal: '',
      year: '',
      volume: '',
      number: '',
      pages: '',
      month: '',
      cred: ''
    }
  },
  methods: {
    async addEvidence () {
      await PostsService.addEvidence({
        author: this.author,
        title: this.title,
        journal: this.journal,
        year: this.year,
        volume: this.number,
        pages: this.pages,
        month: this.month,
        cred: this.cred
      })
      this.$swal(
        'Great!',
        `Your evidence has been added!`,
        'success'
      )
      this.$router.push({ name: 'Evidences' })
    }
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>


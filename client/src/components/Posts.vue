<template>
  <div class="posts">
    <h1>Evidence</h1>
    <div v-if="evidences.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'addevidence' }" class="">Add Evidence</router-link>
      </div>
      <table>
        <tr>
          <td>Author</td>
          <td width="550">Title</td>
          <td>Journal</td>
          <td>Year</td>
          <td>Volume</td>
          <td>Number</td>
          <td>Pages</td>
          <td>Month</td>
          <td>Crediblity</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-for="evidence in evidences">
          <td>{{ evidence.author }}</td>
          <td>{{ evidence.title }}</td>
          <td>{{ evidence.journal }}</td>
          <td>{{ evidence.year }}</td>
          <td>{{ evidence.volume }}</td>
          <td>{{ evidence.number }}</td>
          <td>{{ evidence.pages }}</td>
          <td>{{ evidence.month }}</td>
          <td>{{ evidence.cred }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'editpost', params: { id: evidence._id } }">Edit</router-link> |
            <a href="#" @click="deletePost(evidence._id)">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      There are no posts.. Lets add one now <br /><br />
      <router-link v-bind:to="{ name: 'addevidence' }" class="add_post_link">Add Evidence</router-link>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'evidences',
  data () {
    return {
      evidences: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.evidences = response.data.evidences
    },
    async deletePost (id) {
      const $this = this
      $this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function () {
        PostsService.deletePost(id)
        $this.$router.go({
          path: '/'
        })
      })
    }
  }
}
</script>
<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>

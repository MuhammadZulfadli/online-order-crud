<template>
  <div class = "container">
  <h1 class="text-center">Customer Data</h1>
  <form @submit.prevent="save" class="my-4 form-inline">
    <input placeholder = "id" type="hidden" v-model="form.id">
    <input placeholder = "Full Name" types="text" v-model="form.full_name" class="form-control mr-4">
    <input placeholder = "Username" types="text" v-model="form.username" class="form-control mr-4">
    <input placeholder = "Email" types="text" v-model="form.email" class="form-control mr-4">
    <input placeholder = "No. HP" types="text" v-model="form.phone_number" class="form-control mr-4">
    <button class="btn btn-success" types ="submit" v-show="!updateSubmit">Add</button>
    <button class="btn btn-success" types ="button" v-show="updateSubmit" @click="update(form)">Update</button>
  </form>
  <br>
    <table class="table table-striped">
      <thead>
        <tr >
          <th scope="col">Full Name</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">No. HP</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
        <tbody>
          <tr v-for="customer in customer" :key="customer.id">
            <td>{{customer.full_name}}</td>
            <td>{{customer.username}}</td>
            <td>{{customer.email}}</td>
            <td>{{customer.phone_number}}</td>
            <button class="btn btn-danger" @click="edit(customer)">Edit</button> || <button class="btn btn-warning" @click="del(customer)">Delete</button>
          </tr>
        </tbody>
      </table>
      </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      form: {
        id: '',
        full_name: '',
        username: '',
        email: '',
        phone_number: ''
      },
      customer: [],
      updateSubmit: false,
      cancelUpdate: false
    }
  },

  mounted () {
    this.load()
  },
  methods: {
    async load () {
      const response = await axios.get('http://localhost:3000/customer')
      this.customer = response.data
    },

    async save () {
      try {
        const response = await axios.post('http://localhost:3000/customer', this.form)
        this.load()
        this.customer = response.data
        this.full_name = ''
        this.username = ''
        this.email = ''
        this.phone_number = ''
      } catch (e) {
        console.log(e)
      }
    },
    edit (customer) {
      this.updateSubmit = true
      this.form.id = customer.id
      this.form.full_name = customer.full_name
      this.form.username = customer.username
      this.form.email = customer.email
      this.form.phone_number = customer.phone_number
    },
    async update (form) {
      try {
        const response = await axios.put('http://localhost:3000/customer/' + form.id, {full_name: this.form.full_name, username: this.form.username, email: this.form.email, phone_number: this.form.phone_number})
        this.load()
        this.form.id = ''
        this.form.full_name = ''
        this.form.username = ''
        this.form.email = ''
        this.form.phone_number = ''
        this.updateSubmit = false
        this.customer = response.data
      } catch (e) {
        console.log(e)
      }
    },
    async del (customer) {
      const response = await axios.delete(`http://localhost:3000/customer/${customer.id}`)
      this.customer = response.data
      this.load()
      let index = this.customer.indexOf(customer)
      this.customer.splice(index, 1)
    }
  }
}
</script>

<template>
  <div class = "container">
  <h1 class="text-center">Driver Data</h1>
  <form @submit.prevent="save" class="my-4 form-inline">
    <input placeholder = "id" type="hidden" v-model="form.id">
    <input placeholder = "Full Name" types="text" v-model="form.full_name" class="form-control mr-4">
    <input placeholder = "No. HP" types="text" v-model="form.phone_number" class="form-control mr-4">
    <button class="btn btn-success" types ="submit" v-show="!updateSubmit">Add</button>
    <button class="btn btn-success" types ="button" v-show="updateSubmit" @click="update(form)">Update</button>
  </form>
  <br>
    <table class="table table-striped">
      <thead>
        <tr >
          <th scope="col">Full Name</th>
          <th scope="col">No. HP</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
        <tbody>
          <tr v-for="driver in driver" :key="driver.id">
            <td>{{driver.full_name}}</td>
            <td>{{driver.phone_number}}</td>
            <button class="btn btn-danger" @click="edit(driver)">Edit</button> || <button class="btn btn-warning" @click="remove(driver)">Delete</button>
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
        phone_number: ''
      },
      driver: [],
      updateSubmit: false
    }
  },

  mounted () {
    this.load()
  },
  methods: {
    async load () {
      const response = await axios.get('http://localhost:3000/driver')
      this.driver = response.data
    },

    async save () {
      try {
        const response = await axios.post('http://localhost:3000/driver', this.form)
        this.load()
        this.driver = response.data
        this.full_name = ''
        this.phone_number = ''
      } catch (e) {
        console.log(e)
      }
    },
    edit (driver) {
      this.updateSubmit = true
      this.form.id = driver.id
      this.form.full_name = driver.full_name
      this.form.phone_number = driver.phone_number
    },
    async update (form) {
      try {
        const response = await axios.put('http://localhost:3000/driver/' + form.id, {full_name: this.form.full_name, phone_number: this.form.phone_number})
        this.load()
        this.form.id = ''
        this.form.full_name = ''
        this.form.phone_number = ''
        this.updateSubmit = false
        this.driver = response.data
      } catch (e) {
        console.log(e)
      }
    },
    async remove (driver) {
      const response = await axios.delete(`http://localhost:3000/driver/${driver.id}`)
      this.driver = response.data
      this.load()
      let index = this.driver.indexOf(driver)
      this.driver.splice(index, 1)
    }
  }
}
</script>

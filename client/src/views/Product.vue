<template>
  <div class = "container">
  <h1 class="text-center">Product Data</h1>
  <form @submit.prevent="save" class="my-4 form-inline">
    <input placeholder = "id" type="hidden" v-model="form.id">
    <input placeholder = "Product Name" types="text" v-model="form.name" class="form-control mr-4">
    <input placeholder = "Price" types="text" v-model="form.price" class="form-control mr-4">
    <button class="btn btn-success" types ="submit" v-show="!updateSubmit">Add</button>
    <button class="btn btn-success" types ="button" v-show="updateSubmit" @click="update(form)">Update</button>
  </form>
  <br>
    <table class="table table-striped">
      <thead>
        <tr >
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
        <tbody>
          <tr v-for="products in product" :key="products.id">
            <td>{{products.name}}</td>
            <td>{{products.price}}</td>
            <button class="btn btn-danger" @click="edit(products)">Edit</button> || <button class="btn btn-warning" @click="del(products)">Delete</button>
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
        name: '',
        price: ''
      },
      product: '',
      updateSubmit: false
    }
  },

  mounted () {
    this.load()
  },
  methods: {
    async load () {
      const response = await axios.get('http://localhost:3000/product')
      this.product = response.data
    },

    async save () {
      try {
        const response = await axios.post('http://localhost:3000/product', this.form)
        this.load()
        this.product = response.data
        this.name = ''
        this.price = ''
      } catch (e) {
        console.log(e)
      }
    },
    edit (products) {
      this.updateSubmit = true
      this.form.id = products.id
      this.form.name = products.name
      this.form.price = products.price
    },
    async update (form) {
      try {
        const response = await axios.put('http://localhost:3000/product/' + form.id, {name: this.form.name, price: this.form.price})
        this.load()
        this.form.id = ''
        this.form.name = ''
        this.form.price = ''
        this.updateSubmit = false
        this.product = response.data
      } catch (e) {
        console.log(e)
      }
    },
    async del (products) {
      const response = await axios.delete(`http://localhost:3000/product/${products.id}`)
      this.product = response.data
      this.load()
      let index = this.product.indexOf(products)
      this.product.splice(index, 1)
    }
  }

}
</script>

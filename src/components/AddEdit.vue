<template>
  <div>
    <div id="add-edit-form">
      <table>
        <tbody>
        <tr>
          <td>Name</td>
          <td><input type="text" v-model="dataItemLocal.name"/></td>
        </tr>
        <tr>
          <td>Surname</td>
          <td><input type="text" v-model="dataItemLocal.surname"/></td>
        </tr>
        <tr>
          <td>Phone</td>
          <td><input type="text" v-model="dataItemLocal.phone"/></td>
        </tr>
        <tr>
          <td>Email</td>
          <td><input type="text" v-model="dataItemLocal.email"/></td>
        </tr>
        </tbody>
      </table>
      <router-link v-if="addNew" :to="{name: 'main', params: {addDataItem: dataItemLocal}}">
        <button>Add user</button>
      </router-link>
      <router-link v-else :to="{name: 'main', params: {editDataItem: dataItemLocal, editDataIndex: dataIndex}}">
        <button>Ok</button>
      </router-link>
      <router-link to="/">
        <button>Cancel</button>
      </router-link>
    </div>
    <div id="import-json">
      <textarea v-model="jsonData" placeholder="введите JSON"></textarea>
      <router-link :to="{name: 'main', params: {importJsonData: jsonData}}">
        <button>Import JSON</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataItemLocal: this.dataItem,
      jsonData: ''
    }
  },
  props: {
    dataItem: Object,
    dataIndex: Number,
    addNew: {
      type: Boolean,
      default: false
    }
  },
  created () {
    if (this.addNew) {
      this.dataItemLocal = {
        name: '',
        surname: '',
        phone: '',
        email: ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #add-edit-form {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
  }
  table { /* Параметры таблицы */
    margin: 20px auto 0px;
    border: 2px solid #308090;
    border-radius: 3px;
    background-color: #fff;
  }
  h1, h2 {
    font-weight: normal;
  }

  td {
    padding: 10px 10px;
    margin: 3px;
    width: 200px;
    cursor: pointer;
    background-color: #e5e8d6;
  }
  input {
    min-width: 120px;
  }

  td:first-child {
    width: 120px;
    text-align: right;
  }
  #import-json {
    margin: 50px auto;
    text-align: center;
    width: 400px;
  }
  #import-json textarea {
    width: 100%;
    min-height: 200px;
  }
</style>

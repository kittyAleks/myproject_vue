<template>
  <div id="app">
    <router-link :to="{name: 'add', params: {addNew: true}}">
      <button>Add user</button>
    </router-link>
    <DataTable ref="dataTable" :dataList="dataItems" v-on:selectItem="onSelectItem"/>
    <button @click="deleteItem()" :disabled="selectedIndex==-1">Delete</button>
    <router-link :to="{name: 'edit', params: {dataItem: dataItems[selectedIndex], dataIndex: selectedIndex}}">
      <button :disabled="selectedIndex==-1">Edit</button>
    </router-link>
  </div>
</template>

<script>
/* eslint-disable no-multiple-empty-lines,spaced-comment */
import DataTable from './DataTable.vue'

export default {
  name: 'main',
  components: {
    DataTable
  },
  data () {
    return {
      dataItems: [],
      selectedIndex: -1
    }
  },
  props: [
    'editDataItem',
    'editDataIndex',
    'addDataItem',
    'importJsonData'
  ],
  mounted () {
    // init data
    if (localStorage.dataItems) {
      this.dataItems = JSON.parse(localStorage.dataItems)
    } else {
      this.initDefaultData()
    }
    this.processInputData()
  },
  watch: {
    dataItems (dataItems) {
      localStorage.dataItems = JSON.stringify(dataItems)
    }
  },
  methods: {
    deleteItem () {
      if (this.selectedIndex >= 0 && this.selectedIndex < this.dataItems.length) {
        this.dataItems.splice(this.selectedIndex, 1)
        this.$refs.dataTable.selectItem(-1)
      }
    },
    onSelectItem (index) {
      this.selectedIndex = index
    },

    processInputData () {
      // edit data item
      if (typeof this.editDataIndex !== 'undefined' && typeof this.editDataItem !== 'undefined') {
        this.dataItems[this.editDataIndex] = this.editDataItem
        this.$refs.dataTable.selectItem(this.editDataIndex)
      }
      // add data item
      if (typeof this.addDataItem !== 'undefined') {
        this.dataItems.push(this.addDataItem)
        this.$refs.dataTable.selectItem(this.dataItems.length - 1)
      }
      // import JSON
      if (typeof this.importJsonData !== 'undefined') {
        this.importJSON(this.importJsonData)
      }
    },
    importJSON (json) {
      try {
        let newData = JSON.parse(json)
        this.dataItems.push(...newData)
      } catch (e) {}
    },

    initDefaultData () {
      this.dataItems = [
        {
          name: 'Sasha',
          surname: 'Kirillova',
          phone: '09974096',
          email: 'kurullova@gmail.com'
        },
        {
          name: 'Dan',
          surname: 'Morhuniuk',
          phone: '067145',
          email: 'DanMor@ukr.net'
        },
        {
          name: 'Anton',
          surname: 'Gorachih',
          phone: '067158',
          email: 'harachih@mail.ru'
        },
        {
          name: 'Mila',
          surname: 'Kirillova',
          phone: '066066',
          email: 'mkirillova@microsoft.com'
        }
      ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
  }

  table { /* Параметры таблицы */
    width: 630px;
    margin: auto;
    border: 2px solid #308090;
    border-radius: 3px;
    background-color: #fff;
  }

  th { /* Общие параметры заголовка и строк */
    min-width: 30px;
    padding: 10px 10px;
  }

  th { /* Параметры заголовка */
    background-color: #308090;
    color: #ffffff;
    cursor: pointer;
    user-select: none;
  }
</style>

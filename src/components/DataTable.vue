<template>
  <table>
    <thead> <!-- Заголовок таблицы -->
      <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>Phone</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index) in dataList" :key="index"
          v-bind:class="{selected: index === selectedIndex}"
          v-on:click="selectItem(index)"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.surname }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.email }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'data-table',
  data: function () {
    return {
      selectedIndex: -1
    }
  },
  props: {
    dataList: Array
  },
  methods: {
    selectItem (index) {
      this.selectedIndex = index
      this.$emit('selectItem', this.selectedIndex)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  th, td {
    padding: 5px;
    margin: 3px;
    min-width: 170px;
  }

  th {
    background-color: #bfc1a5;
  }

  td {
    cursor: pointer;
    background-color: #e5e8d6;
  }
  .selected td {
    background-color: #c8cbb9;
  }

</style>

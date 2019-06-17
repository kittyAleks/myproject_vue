<template>
  <router-view/>
</template>

<style>
  button {
    padding: 8px 0px;
    border: 2px solid #ddd;
    color: #333;
    background-color: rgba(250, 231, 210, 0.91);
    border-radius: 3px;
    font-size: 14px;
    cursor: pointer;
    margin: 20px;
    width: 120px;
  }

  button:disabled,
  button[disabled]{
    color: #aaa;
    background-color: rgba(246, 227, 201, 0.11);
  }
</style>

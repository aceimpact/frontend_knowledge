<template>
  <div class="text-3xl">API通信</div>

  <div class="mt-4">
    <section class="alert alert-primary">
      <h1 class="text-2xl font-bold">{{ data.title }}</h1>
      <p>{{ data.message }}</p>

      <div>
        <input type="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm p-2.5" v-model="data.id" />
        <button
          class="bg-green-500 hover:bg-green-400 text-white rounded px-4 py-2 ml-3"
          @click="doClick"
          :disabled="isLoading"
        >
          Click
        </button>
      </div>

      <table class="table-auto border-collapse border mt-4">
        <tbody class="text-start">
          <tr>
            <th class="border w-48">User ID</th>
            <td class="border p-2">{{ data.json_data ? data.json_data.userId : "-" }}</td>
          </tr>
          <tr>
            <th class="border">ID</th>
            <td class="border p-2">{{ data.json_data ? data.json_data.id : "-" }}</td>
          </tr>
          <tr>
            <th class="border">Title</th>
            <td class="border p-2">{{ data.json_data ? data.json_data.title : "-" }}</td>
          </tr>
          <tr>
            <th class="border">Body</th>
            <td class="border p-2">{{ data.json_data ? data.json_data.body : "-" }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import axios from "axios";

// JSONPlaceholderというWebサービスを利用
const url = "https://jsonplaceholder.typicode.com/posts/";
let isLoading = false;

const data = reactive({
  title: "Axios",
  message: "This is axios sample.",
  id: 0,
  json_data: null,
});

const doClick = () => {
  isLoading = true;

  axios.get(url + data.id).then((result) => {
    data.json_data = result.data;
  });

  isLoading = false;
};
</script>

<script setup lang="ts">
  import { getCurrentInstance, computed } from 'vue';
  
  const PROPS = defineProps<{
    data: string,
    isloading: boolean,
    errormessage: string
  }>();

  const INSTANCE = getCurrentInstance();

</script>

<template>
  <div v-if="isloading" class="loading">
      Fetching Data...
  </div>
  <div v-else-if="errormessage" class="error-message">
      Oh no! {{ errormessage }}
  </div>
  <div v-else class="job-feed">
    <div v-for="item in JSON.parse(data)" :key="item.id">
      <div class="job-item flex">
        <div>
          <h2>{{item.title}}</h2>
        </div>
        <div>
          <h3>{{item.employerName}}</h3>
        </div>
        <div>
          Type: {{item.type}}
        </div>
        <div>
          Category: {{item.category}}
        </div>
        <div>
          Location: {{item.location}}
        </div>
        <div>
          <h3>Description:</h3>
          <p>{{item.description}}</p>
        </div>
        <div>
          {{item.updateTimestamp}}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .job-feed {
    padding: 1rem;
    background: white;
    text-align: center;
  }
  .job-item {
    width: 84%;
    padding: 1rem;
    margin: 1rem;
    text-align: left;
    border: solid 1px lightgrey;
    border-radius: 0.5rem;
  }
</style>

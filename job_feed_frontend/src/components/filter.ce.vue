<script setup lang="ts">
  import { getCurrentInstance, computed } from 'vue';
  import { FilterInterface } from '../interfaces/filter.interface';

  const PROPS = defineProps<{
    title: string,
    filters: string | FilterInterface[]
  }>();

  const EMIT = defineEmits([
    'doFilter'
  ]);

  const INSTANCE = getCurrentInstance();

  const parsedFilters = computed(() => {
    if (typeof PROPS.filters === 'string') {
      try {
        return JSON.parse(PROPS.filters) as FilterInterface[];
      } catch {
        return []
      }
    }
  });

  const sendFilter = (filterGroup:string, selection: string) => {
    const PAYLOAD = { filterGroup, selection };

    //EMIT('doFilter',PAYLOAD);

    const EVENT = new CustomEvent('doFilter', {
      detail: PAYLOAD,
      bubbles: true,
      composed: true
    });


    INSTANCE?.vnode.el?.dispatchEvent(EVENT);
    
  }
</script>

<template>

  <div class="filter flex flex-col w-full md:h-full">
    <div class="w-full">{{ title }}</div>
    <div class="w-full" v-for="item in parsedFilters" :key="item.title">
      <div class="w-full">{{ item.title }}</div>
      <div class="w-full">
        <select class="w-full" @change="sendFilter(item.title, $event.target.value)">
          <option value="">All</option>
          <option v-for="subItem in item.items" :key="subItem" :value="subItem">{{ subItem }}</option>
        </select>
      </div>
    </div>
  </div>

</template>

<style scoped>
  .send-button-container {
    text-align: center;
  }
  .send-button {
    width: 5rem;
    height: 2rem;
  }
  .filter {
    background-color: #ededed;
    padding: 1rem;
    height: 100%;
  }

  .filter div {
    padding-bottom: 0.3rem;
  }

  .filter select {
    width: 100%;
  }
</style>

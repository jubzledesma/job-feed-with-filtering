<script setup lang="ts">
  import { getCurrentInstance, computed, ref, watch, watchEffect, useAttrs } from 'vue';

  const attrs = useAttrs();
  
  const PROPS = defineProps<{
    limit: number,
    page: number,
    total: number,
    totalpages: number
  }>();

  const sanitizedItems = computed(() => Number(PROPS.limit)); 

  var modelLimit = ref(PROPS.limit);
  var modelPage =ref(PROPS.page);

  
  watch(() => PROPS.limit, (newVal) => {
    modelLimit = newVal;
  },{ immediate: true });
 
  const EMIT = defineEmits([
    'doChangeLimit',
    'doChangePage',
  ]);

  const INSTANCE = getCurrentInstance();

  const changeNumOfItems = (numOfItems: number) => {
   
    const PAYLOAD = { numOfItems };

    const EVENT = new CustomEvent('doChangeLimit',{
      detail: PAYLOAD,
      bubbles: true,
      composed: true
    });

    INSTANCE?.vnode.el?.dispatchEvent(EVENT);
  }

  const changePagenum = (amount:number) => {
    const CURRENT_PAGE = PROPS.page;
    const TARGET_PAGE = CURRENT_PAGE + amount;
    const PAYLOAD = { amount: TARGET_PAGE };
    
    const EVENT = new CustomEvent('doChangePage',{
      detail: PAYLOAD,
      bubbles: true,
      composed: true
    });

    INSTANCE?.vnode.el?.dispatchEvent(EVENT);
  }

</script>

<template>

  <div class="pagination">
    # of Items
    <select :value="modelLimit" @change="changeNumOfItems($event.target.value)">
      <option value=10>10</option>
      <option value=25>25</option>
      <option value=50>50</option>
      <option value=100>100</option>
      <option value=200>200</option>
    </select>
    <span class="spacer">&nbsp;&nbsp;</span>
    <span v-if="page > 1"><button @click="changePagenum(-1)">Prev</button></span>
    Page # {{page}} of {{totalpages}}
      <span v-if="page < totalpages"><button @click="changePagenum(1)">Next</button></span>
  </div>

</template>

<style scoped>
  .pagination {
    height: 100%;
    text-align: right;
    padding: 0.7rem;
    font-size: 0.8rem;
  }
  .spacer {
    width: 5rem;
  }
</style>

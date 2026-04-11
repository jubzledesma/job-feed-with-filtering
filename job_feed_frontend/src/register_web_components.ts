import { defineCustomElement } from 'vue';
import Pagination from './components/pagination.ce.vue';
import Navigation from './components/navigation.ce.vue';
import Filter from './components/filter.ce.vue';
import JobFeedTable from './job_feed/components/job_feed_table.ce.vue';

const PAGINATION = defineCustomElement(Pagination);
const NAVIGATION = defineCustomElement(Navigation);
const FILTER = defineCustomElement(Filter);
const JOB_FEED_TABLE = defineCustomElement(JobFeedTable);

customElements.define('app-pagination', PAGINATION);
customElements.define('app-navigation', NAVIGATION);
customElements.define('app-filter', FILTER);
customElements.define('app-job-feed-table', JOB_FEED_TABLE);

import BasicExample from './BasicExample.vue';
import DelayExample from './DelayExample.vue';
import RejectExample from './RejectExample.vue';
import ValidatorExample from './ValidatorExample.vue';

// Register Examples.
export default (Vue) => {
    Vue.component('basic-example', BasicExample);
    Vue.component('delay-example', DelayExample);
    Vue.component('reject-example', RejectExample);
    Vue.component('validator-example', ValidatorExample);
};

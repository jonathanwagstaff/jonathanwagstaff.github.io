import {createApp} from "vue";

const app = createApp({

    setup() {
        clicked = false;
        return{
            clicked
        }
    }
})
app.mount("#app");
// Keelan Matthews 21549967
const state = {
    messages: ['Hey, it is Keelan'],
    users: ['Keelan'],
    timestamps: ['12:59']
}

const mutations = {
    ADD_MESSAGE (state,payload){
        let message = payload;
        let d = new Date();
        let timestamp = d.getHours() + ":" + d.getMinutes();
        state.messages.push(message);
        state.timestamps.push(timestamp);
    },
    ADD_USER (state,payload){
        let user = payload;
        state.users.push(user);
    }
}

const actions = {
    addMessage (context,payload) {
        context.commit('ADD_MESSAGE',payload);
    },
    addUser (context,payload) {
        context.commit('ADD_USER',payload);
    }
}

const getters = {
    getUsers: state => state.users,
    getTimestamps: state => state.timestamps,
    getMessages: state => state.messages
}

const store = Vuex.createStore({
    state,
    mutations,
    actions,
    getters
})

const inputComp = {
    template: '<input v-model="user" type="text" id="user-input" placeholder="enter user"/><input v-model="input" type="text" id="message-input" /><span @click="send" id="send-button">&#9654;</span>',
    data(){
        return {
            input: '',
            user: ''
        }
    },
    methods:{
        send(){
            if (this.user != '' && this.input != '') {
                this.$store.dispatch('addMessage', this.input);
                this.$store.dispatch('addUser', this.user);
                this.input = "";
            }
            else
                alert('Please enter a user and message');
            
        }
    }
}

const app = Vue.createApp({
    computed:{
        messages(){
            return this.$store.getters.getMessages;
        },
        timestamps(){
            return this.$store.getters.getTimestamps;
        },
        users(){
            return this.$store.getters.getUsers;
        }
    },
    components:{
        'input-message': inputComp
    }
});

app.use(store);
app.mount('#app');
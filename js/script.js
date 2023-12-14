
const { createApp } = Vue;

createApp({
  data() {
    return {
        albumList: [],
        apiUrl: 'server.php',
       
    };
  },
  created() {
    axios.get(this.apiUrl).then((resp) => {
        this.albumList = resp.data;
    })
    

  },
  methods: {
   
  },
}).mount("#app");

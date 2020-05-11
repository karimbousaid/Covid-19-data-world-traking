var app= new Vue ({
    el:'#app',
    data: {
        dataGeneral: {},
        next:0,
        Previous:20
    },
    methods: {
      getData:function() {
        axios.get('https://api.covid19api.com/summary')
          .then(response => {
             this.dataGeneral=response.data;
             console.log(response.data)
            })
          .catch(error => {
            console.log(error);
          })
      },
    },
    computed: {
       limetedData() {
         return this.dataGeneral.Countries=this.dataGeneral.Countries.slice(this.next,this.Previous);
       }
     },
   created:function() {
     this.getData();
   }
});
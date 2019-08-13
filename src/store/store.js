import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({

    state:
    {
        Soapproduct : "Soap Products",
        products:
        [
            {name:'lifeboy',price:25},
            {name:'lux',price:50},
            {name:'medimix',price:40},
            {name:'santoor',price:70},
            {name:'duv',price:100},
        ]
    },
    getters:
    {
        calculate(state)
        {
            let calculatee = state.products.map(product=>{
                return {
                    name: "**"+ product.name +"**",
                    price: product.price/2
                }
            })
            return calculatee;

        },
        gnames(state)
        {
            let statename = state.products.map(product=>{
                return{
                    name : "We all are coders " + product.name + " and we word hard"
                }
            })
            return statename;
        }
        
    },
    mutations:
        {

            Reduce(state,payload)
            {
                var stateprice = state.products.forEach(product => {
                    
                     product.price -= payload; 

                });
            return stateprice;
            },
            jsalsh:(context,str)=>
            {
               let dataofprompt =  prompt("what is your good name?",str);
               if(dataofprompt != "")
               {
                   alert(dataofprompt);
               }
            }
            
        },
        actions:
        {
            Reduce:(context,payload) =>
            {
                setTimeout(function(){
                    context.commit('Reduce',payload);
                },3000);
            }


            
            
        }
})

// Reduce()
//       {
//         return this.$store.state.products.forEach(product => {
          
//           product.price -= 1;

//         });
//       }
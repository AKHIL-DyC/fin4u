"use client"
import { create } from "zustand";
import axios from "axios";

const showStore = create((set) => ({
  graphData:[],
  fetchData: async (id) => {
    try {

      const [graphRes,dataRes] = await Promise.all([
        axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=365`
        ),
       
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true `),
      ])
      
    

      const graphData = graphRes.data.prices.map(price =>  {
        const [timestamp,p]=price;
        const date = new Date(timestamp).toLocaleDateString("en-in")
        return{
          
            Date:date,
            Price:p,
           
          
        };


      });
      set({graphData});
    } catch (error) {
      console.error("Error fetching data:", error);
     
    }
  },
}));

export default showStore;

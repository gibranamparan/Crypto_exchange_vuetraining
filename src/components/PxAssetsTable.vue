<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th></th>
        <th>
          <span>Ranking</span>
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block"></td>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100"
        v-for="c in cryptos" :key="c.id">
        <td>
          <img class="w-10 h-10" :src="getIconURI(c)" :alt = "c.name" />
        </td>
        <td><b>#{{c.rank}}</b></td>
        <td>
          <router-link :to="{name:'coin-detail',params:{id:c.id}}">{{c.name}}</router-link>
        </td>
        <td>{{c.priceUsd | dollar}}</td>
        <td>{{c.marketCapUsd | dollar}}</td>
        <td :class="c.changePercent24Hr > 0 ? 'text-green-600' : 'text-red-600'">
          {{c.changePercent24Hr | percent}}
        </td>
        <td class="hidden sm:block"></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import api from "@/api"

export default {
  name: "PxAssetsTable",

  props: {
    assets: {
      type: Array,
      default: () => []
    }
  },
  data(){
    return {
      cryptos: [],
    }
  },
  methods:{
    getIconURI(crypto){
      let uri = `https://static.coincap.io/assets/icons/${crypto.symbol.toLowerCase()}@2x.png`;
      return uri;
    },
    getData(){
      api.getCryptos().then(data => {
        this.cryptos = data;
      })
    }
  },
  created(){
    this.getData();
  },
  mounted(){
    // setInterval(this.getData, 1000);
  },
};
</script>

<style scoped>
.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>

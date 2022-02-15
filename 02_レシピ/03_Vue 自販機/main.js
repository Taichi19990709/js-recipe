Vue.createApp({
  data() {
    return {
      inputElement:"0",
      // moneyInMachine:parseInt(this.inputElement),
      moneyInMachine:0,
      otsuriMoney:0,
      Mydrinks:[],
      Drinks:{coke:10,tea:7,coffee:12},
      wallet:0,
    }
  },
  methods: {
    buyCoke:function(){
      this.moneyInMachine=Number(this.inputElement)
      this.inputElement=String(this.moneyInMachine-120)
      this.moneyInMachine=Number(this.inputElement)
      this.Mydrinks.push("コーラ")
      this.Drinks.coke = this.Drinks.coke - 1
    },
    buyTea:function(){
      this.moneyInMachine=Number(this.inputElement)
      this.inputElement=String(this.moneyInMachine-150)
      this.moneyInMachine=Number(this.inputElement)
      this.Mydrinks.push("お茶")
      this.Drinks.tea = this.Drinks.tea - 1
    },
    buyCoffee:function(){
      this.moneyInMachine=Number(this.inputElement)
      this.inputElement=String(this.moneyInMachine-110)
      this.moneyInMachine=Number(this.inputElement)
      this.Mydrinks.push("コーヒ―")
      this.Drinks.coffee = this.Drinks.coffee - 1
    },
    otsuri:function(){
      this.otsuriMoney = this.moneyInMachine
      this.moneyInMachine = 0
      this.inputElement = "0"
    },
    getMoney:function(){
      this.wallet = this.otsuriMoney
      this.otsuriMoney = 0
    }
  }
}).mount("#app")

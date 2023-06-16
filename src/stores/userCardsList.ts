import { defineStore } from "pinia";
import { Post } from "@/api/getCardsList/interfacies";

export const userStoreCardsList = defineStore({
  id: "userCards",
  state: () => ({
    list: [] as Post[]
  }),
  actions: {
    getItem(item:Post) {
      if (!this.list.find( (el: Post) => el.id === item.id)) {
        this.pushItem(item)
      } else {
        this.removeItem(item)
      }
    },
    pushItem(item:Post) {
      this.list.push(item)
      this.refreshStorage()
    },
    removeItem(item:Post){
      this.list = this.list.filter(el => el !== item)
      this.refreshStorage()
    },
    getAllCards(){
      const itemsList = localStorage.getItem('userItems')
      if (itemsList) {
        this.list = [...(JSON.parse(itemsList))]
        this.refreshStorage()
      } else {
        this.list = []
        this.refreshStorage()
      }
    },
    refreshStorage() {
      if(this.list.length === 1) {
        localStorage.removeItem('userItems')
        localStorage.setItem('userItems', JSON.stringify([ ...this.list]))
      }
      localStorage.removeItem('userItems')
      localStorage.setItem('userItems', JSON.stringify(this.list))
    }
  },
});
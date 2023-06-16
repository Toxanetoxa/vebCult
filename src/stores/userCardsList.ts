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
    },
    removeItem(item:Post){
      this.list = this.list.filter(el => el !== item)
    },
    getAllCards(){
      const itemsList = localStorage.getItem('usersItems')
      if (itemsList) {
        this.list = JSON.parse(itemsList)
      } else {
        this.list = []
        console.log('Users items not found in local storage');
      }
    }
  },
});
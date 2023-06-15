import { defineStore } from "pinia";
import { Post } from "@/api/getCardsList/interfacies";

export const userStoreCardsList = defineStore({
  id: "userCards",
  state: () => ({
    list: [] as Post[]
  }),
  getters: {
    itemLength: (state) => {
      return state.list.length;
    }
  },
  actions: {
    getItem(context, item) {
      // добавление объекта в массив
      if (context.state.list.find(el => el.id === item.id)) {
        context.commit("addItem", item);
      } else {
        context.commit("removeItem", item);
      }
    }
  },
  mutations: {
    addItem(state, item: Post) {
      state.list.push(item);
    },
    removeItem(state, item: Post) {
      const index = state.list.findIndex(el => el.id === item.id);
      if (index !== -1) {
        state.list.splice(index, 1);
      }
    }
  },
});
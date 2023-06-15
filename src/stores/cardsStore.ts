import { defineStore } from 'pinia'
import { Post } from '@/api/getCardsList/interfacies'
import { getCardsList} from "@/api/getCardsList/getCardsList";

export const cardsListStore = defineStore({
  id: 'cards',
  state: () => ({
    list: [] as Post[],
  }),
  getters: {
    itemLength: (state) => {
      return state.list.length
    }
  },
  actions: {
    addItem(context, item) {
      // добавление объекта в массив
      if(!this.list.find(el => el.id === item.id)) {
        return context.state.items.push(item);
      }
      console.log('Ошибка, картина уже в корзине');
    },
    removeItem(context, index) {
      // удаление объекта из массива по индексу
      if(this.list.find(el => el.id === item.id)) {
        context.state.items.splice(index, 1);
      }
      console.log('Ошибка, данной картины нет в корзине')
    },
    async fetchCards() {
      const fetchItems = new getCardsList()
      await fetchItems.loadPosts()
      console.log(fetchItems.data.list)
      this.list = fetchItems.data.list
    }
  }
})
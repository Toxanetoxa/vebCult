import { defineStore } from "pinia";
export const headerSearch = defineStore({
  id: "headerSearch",
  state:()=>({
    searchValue: '',
    isSearch: false
  }),
  actions: {
    setSearchValue(value:string){
      this.searchValue = value
      this.setIsSearch()
    },
    setIsSearch(){
      this.isSearch = !!this.searchValue.length
    }
  }
})
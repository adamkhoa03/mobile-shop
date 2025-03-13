import { defineStore } from 'pinia';

export const useSnackBarStore  = defineStore('snackBarStore', {
  state: () => ({
    color: 'success',
    text: 'Thông báo',
    isActive: false
  }),
  actions: {
    SET_TEXT(text: string) {
      this.text = text;
    },
    SET_COLOR(color: string) {
      this.color = color;
    },
    SET_ACTIVE(active: boolean) {
      this.isActive = active;
    }
  }
});

import { useSnackBarStore } from '@/stores/snackBar';

export function showSnackbar(message: string, color: string = 'primary') {
  const snackBarStore = useSnackBarStore();

  snackBarStore.SET_TEXT(message);
  snackBarStore.SET_COLOR(color);
  snackBarStore.SET_ACTIVE(true);
}
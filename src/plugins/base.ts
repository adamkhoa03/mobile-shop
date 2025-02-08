// import { defineAsyncComponent } from 'vue';
// import app from '@/App.vue';

// Sử dụng import.meta.glob để tự động import tất cả các file trong thư mục @/components/base
const components = import.meta.glob('@/components/base/**/*.vue');

// for (const path in components) {
//   const componentName = path.split('/').pop()?.replace(/\.vue$/, '');
//
// }
for (const path in components) {
  console.log(path.split('/'));
}

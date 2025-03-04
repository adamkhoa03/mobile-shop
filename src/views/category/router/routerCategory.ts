import routerPath from '@/views/category/router/routePath.ts'
import routerName from '@/views/category/router/routerName.ts'
import listCategory from '@/views/category/list/listCategory.vue'

const routerCategory = [
  {
    name: routerName.LIST,
    path: routerPath.LIST,
    component: listCategory
  }
]

export default routerCategory
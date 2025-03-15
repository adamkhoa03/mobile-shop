const headers = [
  { title: 'Tên sản phẩm', align: 'start', key: 'name', minWidth: '150px', width: '150px', sortable: true },
  { title: 'Mã sản phẩm', align: 'start', key: 'code', minWidth: '150px', width: '150px', sortable: false },
  { title: 'Mô tả', align: 'start', key: 'description', minWidth: '300px', width: '300px', sortable: false },
  { title: 'Danh mục', align: 'start', key: 'category', minWidth: '150px', width: '150px', sortable: true },
  { title: 'Giá', align: 'start', key: 'price', minWidth: '150px', width: '150px', sortable: true },
  { title: 'Số lượng', align: 'start', key: 'quantity', minWidth: '100px', width: '100px', sortable: true },
  { title: 'Thao tác', align: 'end', key: 'action', minWidth: '100px', width: '100px', sortable: false }
] as const;

export { headers };

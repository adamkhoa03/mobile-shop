const headers = [
  { title: 'Thương hiệu', align: 'start', key: 'brand', maxWidth: '20%', sortable: true },
  { title: 'Mô tả', align: 'start', key: 'description', sortable: false },
  { title: 'Trạng thái', align: 'start', key: 'status', sortable: true },
  { title: 'Thao tác', align: 'end', key: 'action', sortable: false }
] as const; // Readonly



export { headers };

const headers = [
  { title: 'Thương hiệu', align: 'start', key: 'brand', width: '250px', sortable: true },
  { title: 'Mã', align: 'start', key: 'code', width: '100px', sortable: false },
  { title: 'Mô tả', align: 'start', key: 'description', width: '250px', sortable: false },
  { title: 'Trạng thái', align: 'start', key: 'status', width: '30px', sortable: true },
  { title: 'Thao tác', align: 'end', key: 'action', width: '30px', sortable: false }
] as const; // Readonly

export { headers };

const headers = [
  { title: 'Thương hiệu', align: 'start', key: 'brand', maxWidth: '20%', sortable: true },
  { title: 'Mô tả', align: 'start', key: 'description', sortable: false },
  { title: 'Trạng thái', align: 'start', key: 'status', sortable: true },
  { title: 'Thao tác', align: 'end', key: 'action', sortable: false }
] as const; // Readonly
const phones = [
  {
    id: 1,
    brand: 'Apple',
    description: 'Hãng điện thoại cao cấp, nổi bật với iPhone và hệ sinh thái iOS.',
    action: ['delete', 'edit'],
    status: 1
  },
  {
    id: 2,
    brand: 'Samsung',
    description: 'Thương hiệu Hàn Quốc với dòng Galaxy đa dạng từ phổ thông đến cao cấp.',
    action: ['delete', 'edit'],
    status: 1
  },
  {
    id: 3,
    brand: 'Xiaomi',
    description: 'Nhà sản xuất Trung Quốc, nổi bật với cấu hình mạnh và giá rẻ.',
    action: ['delete', 'edit'],
    status: 0
  },
  {
    id: 4,
    brand: 'Oppo',
    description: 'Chuyên về điện thoại chụp ảnh đẹp, thiết kế thời trang.',
    action: ['delete', 'edit'],
    status: 1
  },
  {
    id: 5,
    brand: 'Vivo',
    description: 'Thương hiệu tập trung vào công nghệ camera và âm thanh.',
    action: ['delete', 'edit'],
    status: 0
  },
  {
    id: 6,
    brand: 'OnePlus',
    description: 'Hãng smartphone cao cấp với hiệu năng mạnh mẽ và OxygenOS.',
    action: ['delete', 'edit'],
    status: 1
  },
  {
    id: 7,
    brand: 'Realme',
    description: 'Thương hiệu con của Oppo, hướng đến phân khúc giá rẻ và trung cấp.',
    action: ['delete', 'edit'],
    status: 1
  },
  {
    id: 8,
    brand: 'Sony',
    description: 'Hãng Nhật Bản nổi tiếng với dòng Xperia và công nghệ màn hình cao cấp.',
    action: ['delete', 'edit'],
    status: 0
  },
  {
    id: 9,
    brand: 'Google',
    description: 'Nhà sản xuất Pixel với trải nghiệm Android thuần khiết.',
    action: ['delete', 'edit'],
    status: 1
  },
  {
    id: 10,
    brand: 'Asus',
    description: 'Chuyên điện thoại gaming như ROG Phone với hiệu năng mạnh.',
    action: ['delete', 'edit'],
    status: 0
  }
];



export { headers, phones };

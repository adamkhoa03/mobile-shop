import { useForm } from 'vee-validate';
import { string, object, number } from 'yup';
import { toTypedSchema } from '@vee-validate/yup';
import { useI18n } from 'vue-i18n';

const headers = [
  {
    title: 'Tên sản phẩm',
    align: 'start',
    key: 'name',
    minWidth: '150px',
    width: '150px',
    nowrap: true,
    sortable: true
  },
  {
    title: 'Mã sản phẩm',
    align: 'start',
    key: 'code',
    minWidth: '150px',
    width: '150px',
    nowrap: true,
    sortable: false
  },
  {
    title: 'Mô tả',
    align: 'start',
    key: 'description',
    minWidth: '300px',
    width: '300px',
    nowrap: true,
    sortable: false
  },
  {
    title: 'Danh mục',
    align: 'start',
    key: 'category',
    minWidth: '150px',
    width: '150px',
    nowrap: true,
    sortable: true
  },
  { title: 'Giá', align: 'start', key: 'price', minWidth: '150px', width: '150px', nowrap: true, sortable: true },
  {
    title: 'Số lượng',
    align: 'start',
    key: 'quantity',
    minWidth: '100px',
    width: '100px',
    nowrap: true,
    sortable: true
  },
  { title: 'Thao tác', align: 'end', key: 'action', minWidth: '100px', width: '100px', nowrap: true, sortable: false }
] as const;

interface phoneItem {
  name: string;
  code: string;
  description: string | null;
  price: number;
  quantity: number;
  category: {
    brand: string;
    id: number;
  };
}

export function form() {
  const { t } = useI18n();
  const schema = object({
    name: string().required().label(t('phones.deviceName')).default(''),
    code: string().required().label(t('phones.code')).default(''),
    description: string().nullable().label(t('phones.description')).default(''),
    price: number().required().label(t('phones.price')).typeError('Vui lòng nhập giá trị hợp lệ').default(0),
    category: object({
      brand: string().required(),
      id: number().required()
    })
      .required()
      .label(t('phones.category'))
      .default(null),
    quantity: number().required().label(t('phones.quantity')).typeError('Vui lòng nhập giá trị hợp lệ').default(0)
  });
  const { errors, defineField, handleSubmit, resetForm, setValues, setFieldTouched } = useForm({
    validationSchema: toTypedSchema(schema)
  });

  const [name, nameAttr] = defineField('name');
  const [code, codeAttr] = defineField('code');
  const [description, descriptionAttr] = defineField('description');
  const [price, priceAttr] = defineField('price');
  const [quantity, quantityAttr] = defineField('quantity');
  const [category, categoryAttr] = defineField('category');

  return {
    t,
    errors,
    handleSubmit,
    resetForm,
    setValues,
    name,
    nameAttr,
    code,
    codeAttr,
    description,
    descriptionAttr,
    price,
    priceAttr,
    quantity,
    quantityAttr,
    category,
    categoryAttr,
    setFieldTouched
  };
}

export { headers, type phoneItem };

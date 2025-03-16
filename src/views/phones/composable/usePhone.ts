import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

const listCategoryStatus = [
  { value: 1, title: 'Hoạt động' },
  { value: 0, title: 'Không hoạt động' }
];

export function usePhone() {
  const { t } = useI18n();
  const dialog = ref(false);

  const dataCreateSearchAdvance = [
    {
      ref: 'name',
      label: 'Tên thiết bị',
      type: 'textField',
      value: null
    },
    {
      ref: 'category_id',
      label: t('category.categoryName'),
      type: 'autocomplete',
      items: [],
      value: 'id',
      title: 'brand',
      returnObject: false
    },
    {
      ref: 'status',
      label: t('status'),
      type: 'select',
      items: listCategoryStatus,
      value: 'value'
    },
    {
      ref: 'code',
      label: t('code'),
      type: 'textField',
      value: null
    }
  ];

  return {
    t,
    dialog,
    dataCreateSearchAdvance
  };
}

import { ref } from 'vue';
import { useForm } from 'vee-validate';
import { object, string, number } from 'yup';
import { toTypedSchema } from '@vee-validate/yup';
import { useI18n } from 'vue-i18n';

export function useCategoryForm() {
  const { t } = useI18n();
  //Create schema and default value
  const schema = object({
    name: string().required().default('').label(t('category.categoryName')),
    status: number().required().default(1).label(t('category.categoryStatus')),
    description: string().required().default('').label(t('category.description'))
  });
  const { errors, defineField, handleSubmit, resetForm, setValues } = useForm({
    validationSchema: toTypedSchema(schema)
  });

  //Defined and binding field
  const [name, categoryNameAttr] = defineField('name');
  const [status, categoryStatusAttr] = defineField('status');
  const [description, categoryDescriptionAttr] = defineField('description');

  const dialog = ref(false);

  const listCategoryStatus = ref([
    { value: 1, title: 'Hoạt động' },
    { value: 0, title: 'Không hoạt động' }
  ]);
  return {
    t,
    errors,
    handleSubmit,
    resetForm,
    setValues,
    dialog,
    listCategoryStatus,
    name,
    categoryNameAttr,
    status,
    categoryStatusAttr,
    description,
    categoryDescriptionAttr,

  };
}

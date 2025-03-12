import { BaseServices } from '@/services/baseServices.ts';
import apis from '@/views/category/services/apis.ts';

export class CategoryServices extends BaseServices {
  static async getCategories() {
    try {
      const response = await this.request().get(apis.LIST_CATEGORY);
      return this.handleSuccess(response);
    } catch (error) {
      this.handleError(error);
    }
  }
}

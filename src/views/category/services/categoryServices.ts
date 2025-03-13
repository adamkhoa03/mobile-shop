import { BaseServices } from '@/services/baseServices.ts';
import apis from '@/views/category/services/apis.ts';
import { formatQuery, type paramSearchInterface } from '@/services/utils.ts';

export class CategoryServices extends BaseServices {
  static async getCategories(searchParams: paramSearchInterface) {
    try {
      const response = await this.request().get(`${apis.LIST_CATEGORY}?${formatQuery(searchParams)}`);
      return this.handleSuccess(response);
    } catch (error) {
      this.handleError(error);
    }
  }

  static async getDetail(id: number) {
    try {
      const response = await this.request().get(`${apis.DETAIL_CATEGORY}/${id}`);
      return this.handleSuccess(response);
    } catch (error) {
      this.handleError(error);
    }
  }

  static async updateCategory(id: number, data: Record<string, unknown>) {
    try {
      const response = await this.request().put(`${apis.UPDATE_CATEGORY}/${id}`, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  static async deleteCategory(id: number) {
    try {
      const response = await this.request().delete(`${apis.DELETE_CATEGORY}/${id}`);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }
}

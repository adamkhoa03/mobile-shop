import { BaseServices } from '@/services/baseServices.ts';
import apis from '@/views/category/services/apis.ts';
import { formatQuery, type paramSearchInterface } from '@/services/utils.ts';
import { type categoryItem } from '@/views/category/types/apis.ts';

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
      return this.handleSuccess(response);
    } catch (error) {
      this.handleError(error);
    }
  }

  static async deleteCategory(id: number) {
    try {
      const response = await this.request().delete(`${apis.DELETE_CATEGORY}/${id}`);
      return this.handleSuccess(response);
    } catch (error) {
      this.handleError(error);
    }
  }

  static async createCategory(data: categoryItem) {
    try {
      const response = await this.request().post(apis.CREATE_CATEGORY, data);
      return this.handleSuccess(response);
    } catch (error) {
      this.handleError(error);
    }
  }

  static async quickSearch(data: paramSearchInterface) {
    try {
      const response = await this.request().get(`${apis.QUICK_SEARCH}?${formatQuery(data)}`);
      return this.handleSuccess(response);
    } catch (error) {
      this.handleError(error);
    }
  }

  static async searchAdvance(data: paramSearchInterface) {
    try {
      const response = await this.request().get(`${apis.QUICK_SEARCH}?${formatQuery(data)}`);
      return this.handleSuccess(response);
    } catch (error) {
      this.handleError(error);
    }
  }
}

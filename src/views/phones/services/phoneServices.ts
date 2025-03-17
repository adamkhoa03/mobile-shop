import api from '@/views/phones/services/api.ts';
import { BaseServices } from '@/services/baseServices.ts';
import { type phoneItem } from '@/views/phones/composable/useFormPhone.ts';
import { formatQuery, type paramSearchInterface } from '@/services/utils.ts';

export class phoneServices extends BaseServices {
  static async getListPhones(searchParams: paramSearchInterface) {
    try {
      const response = await this.request().get(`${api.LIST_PHONES}?${formatQuery(searchParams)}`);
      return this.handleSuccess(response);
    } catch (error) {
      this.handleError(error);
    }
  }

  static async getDetail(id: number) {
    try {
      const response = await this.request().get(`${api.DETAIL_PHONE}/${id}`);
      return this.handleSuccess(response);
    } catch (error) {
      this.handleError(error);
    }
  }

  static async updatePhone(categoryID: number, id: number, data: phoneItem) {
    try {
      const response = await this.request().put(`categories/${categoryID}${api.UPDATE_PHONE}/${id}`, data);
      return this.handleSuccess(response);
    } catch (error) {
      this.handleError(error);
    }
  }

  static async deletePhone(categoryID: number, id: number) {
    try {
      const response = await this.request().delete(`categories/${categoryID}${api.DELETE_PHONE}/${id}`);
      return this.handleSuccess(response);
    } catch (error) {
      this.handleError(error);
    }
  }

  static async createPhone(categoryID: number, data: phoneItem) {
    try {
      const response = await this.request().post(`categories/${categoryID}${api.CREATE_PHONE}`, data);
      return this.handleSuccess(response);
    } catch (error) {
      this.handleError(error);
    }
  }

  static async quickSearch(data: paramSearchInterface) {
    try {
      const response = await this.request().get(`${api.QUICK_SEARCH}?${formatQuery(data)}`);
      return this.handleSuccess(response);
    } catch (error) {
      this.handleError(error);
    }
  }

  static async searchAdvance(data: paramSearchInterface) {
    try {
      const response = await this.request().get(`${api.QUICK_SEARCH}?${formatQuery(data)}`);
      return this.handleSuccess(response);
    } catch (error) {
      this.handleError(error);
    }
  }
}

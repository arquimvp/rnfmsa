import {FMSAApiConfig} from './fmsa-config';
import {HttpClient} from './http-client';

export class FmsaApi extends HttpClient {
  static classInstance?: FmsaApi;

  private constructor() {
    super(FMSAApiConfig());
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new FmsaApi();
    }

    return this.classInstance;
  }

  async getRequest(path: string) {
    return this.instance.get(path);
  }
}

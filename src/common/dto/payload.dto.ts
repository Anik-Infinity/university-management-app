export class PayLoadDTO {
  public statusCode: number;
  public message?: string;
  public data?: any;

  constructor(
    private response: { statusCode: number; message: string; data: any },
  ) {
    this.statusCode = response.statusCode;
    this.message = response.message || 'Data';
    this.data = response.data || {};
  }
}

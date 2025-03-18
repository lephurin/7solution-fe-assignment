interface IProducts {
  type: string;
  name: string;
}

interface IProductsResponse {
  code: string;
  message: string;
  data: IProducts[];
}

interface Item {
  name: string;
  price: number;
  qty: number;
  total: number;
}

interface ItemCreate {
  name: string;
  price: number;
  qty: number;
}

export interface Example {
  id: string;
  status: string;
  items: Item[];
  createdAt: string;
  updatedAt: boolean;
}

export interface ExampleCreate {
  items: ItemCreate[];
}

export interface ExampleUpdate {
  status?: string;
}

export interface ExampleListParams {
  status?: string;
}

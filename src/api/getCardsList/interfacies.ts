// Типы данных ответов от сервера
export interface ApiResponse<T> {
  data: Data,
}

export interface HttpResponse {
  data: ApiResponse<Data> | ApiError
}

export interface ApiError {
  message: string;
  data:  ApiResponse<Data>
}

export interface Post {
  id: number,
  img: string,
  title: string,
  description: string,
  price: object | null,
  is_sales: boolean
}

export interface Data {
  status: Boolean,
  title: String,
  list: Post[]
}
// APIからデータを取得する関数でのジェネリクスの使い方

const API_URL = "https://jsonplaceholder.typicode.com";

type ApiResponseType<T> = {
  data: T;
  status: number;
  message?: string;
};

type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
};

export async function fetchUser(
  userId: number
): Promise<ApiResponseType<User>> {
  const res = await fetch(`${API_URL}/users/${userId}`);
  const data = await res.json();
  return {
    data,
    status: res.status,
    message: res.statusText,
  };
}

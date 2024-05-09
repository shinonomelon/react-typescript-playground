// Type Alias と Interface の違い
type User = {
  name: string;
  age: number;
};

// Type Alias は Intersection Type が使える
export type AdminUser = {
  role: string;
} & User;

export const user1: AdminUser = {
  name: "Taro",
  age: 30,
  role: "admin",
};

user1.name;

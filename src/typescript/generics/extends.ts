export type User = {
  name: string;
  age: number;
};

type AdminUser = User & {
  role: "admin";
};

type NormalUser = User & {
  role: "normal";
};

const f = <T extends User>(arg: T): string => arg.name;

f({ name: "aaa", age: 123 });

type U<T> = T extends { role: "admin" } ? "admin" : "nomal";

export type A = U<AdminUser>; // admin
export type B = U<NormalUser>; // normal

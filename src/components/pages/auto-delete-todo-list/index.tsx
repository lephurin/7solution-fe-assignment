"use client";

import { useGetProductsQuery } from "@/services";
import Link from "next/link";
import { TodoListSection } from "./section/todo-list-section";

export const AutoDeleteTodoListPage = () => {
  const { data } = useGetProductsQuery();

  const products = data?.data || [];

  return (
    <div className="relative flex justify-center w-full mx-auto min-h-screen h-screen bg-slate-400">
      <div className="max-w-4xl w-full p-12 flex flex-col items-center gap-y-6">
        <div className="flex flex-col text-center">
          <h1 className="text-2xl font-bold mb-2">Auto Delete Todo List</h1>
          <p className="text-md">
            stacks: NextJS, TailwindCSS, ShadcnUI, RTKQuery(Redux), AWS
          </p>
          <p className="text-md">
            develop by&nbsp;
            <Link
              href="https://phurin.vercel.app"
              target="_blank"
              className="underline text-blue-900 hover:text-blue-400"
            >
              Phurin
            </Link>
          </p>
        </div>
        <TodoListSection data={products} />
      </div>
    </div>
  );
};

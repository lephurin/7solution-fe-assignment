"use client";

import { useEffect } from "react";
import { useGetProductsQuery } from "@/services";
import Link from "next/link";
import { TodoListSection } from "./section/todo-list-section";

export const AutoDeleteTodoListPage = () => {
  const { data, error, isLoading } = useGetProductsQuery();

  const products = data?.data || [];

  return (
    <div className="relative flex justify-center w-full mx-auto min-h-screen h-screen bg-slate-400">
      <div className="max-w-4xl w-full p-12 flex flex-col items-center gap-y-6">
        <div className="flex flex-col text-center">
          <h1 className="text-2xl font-bold">Auto Delete Todo List</h1>
          <p className="text-lg">
            Applicant:&nbsp;
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

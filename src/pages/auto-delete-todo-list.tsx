"use client";

import { useEffect } from "react";
import { useGetProductsQuery } from "@/services";
// import { ListColumn } from "@/components/ListColumn";

export const AutoDeleteTodoListPage = () => {
  const { data, error, isLoading } = useGetProductsQuery();

  const products = data?.data || [];

  useEffect(() => {
    console.log("data: ", data);
  }, [data]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Auto Delete Todo List</h1>
      {/* <ListColumn
        title="test"
        items={[
          {
            type: "Fruit",
            name: "Apple",
          },
        ]}
      /> */}
    </div>
  );
};

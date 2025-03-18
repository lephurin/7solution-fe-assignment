import { mockProductList } from "@/mocks";
import { NextResponse } from "next/server";

export const GET = () => {
  const response = mockProductList;
  return NextResponse.json(response);
};

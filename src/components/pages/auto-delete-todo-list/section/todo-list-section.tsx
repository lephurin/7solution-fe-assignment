import { ListColumn } from "@/components/containers/list-column";
import { Button } from "@/components/ui/button";
import { FC, useEffect, useState } from "react";

interface ITodoListSectionProps {
  data: IProducts[];
}

export const TodoListSection: FC<ITodoListSectionProps> = ({ data }) => {
  const timeout: number = 5000;

  const [products, setProducts] = useState<IProducts[]>([]);
  const [fruits, setFruits] = useState<IProducts[]>([]);
  const [vegetables, setVegetables] = useState<IProducts[]>([]);

  useEffect(() => {
    if (data?.length) setProducts(data);
  }, [data]);

  const handleClickProductAvailable = (product: IProducts) => {
    setProducts((prevState) =>
      prevState.filter((item) => item.name !== product.name)
    );

    if (product.type === "Fruit") {
      setFruits((prevState) => [...prevState, product]);
      setTimeout(() => {
        setFruits((prevState) =>
          prevState.filter((item) => item.name !== product.name)
        );
        setProducts((prevProducts) => [...prevProducts, product]);
      }, timeout);
    }

    if (product.type === "Vegetable") {
      setVegetables((prevState) => [...prevState, product]);
      setTimeout(() => {
        setVegetables((prevState) =>
          prevState.filter((item) => item.name !== product.name)
        );
        setProducts((prevProducts) => [...prevProducts, product]);
      }, timeout);
    }
  };

  const handleClickProductUnavailable = (product: IProducts) => {
    setProducts((prevState) => [...prevState, product]);

    if (product.type === "Fruit")
      setFruits((prevState) =>
        prevState.filter((item) => item.name !== product.name)
      );
    if (product.type === "Vegetable")
      setVegetables((prevState) =>
        prevState.filter((item) => item.name !== product.name)
      );
  };

  return (
    <div className="w-full h-full flex justify-between gap-x-8">
      <div className="w-full flex flex-col items-center gap-y-2">
        {products.map((product, index) => (
          <Button
            key={`${product.name}-${index}`}
            className="w-full"
            variant="secondary"
            size="lg"
            onClick={() => handleClickProductAvailable(product)}
          >
            {product.name}
          </Button>
        ))}
      </div>
      <ListColumn
        type="Fruit"
        items={fruits}
        onClick={handleClickProductUnavailable}
      />
      <ListColumn
        type="Vegetable"
        items={vegetables}
        onClick={handleClickProductUnavailable}
      />
    </div>
  );
};

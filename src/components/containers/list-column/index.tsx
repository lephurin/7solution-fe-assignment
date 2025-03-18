import { FC } from "react";
import { Button } from "../../ui/button";

interface IListColumnProps {
  type: string;
  items: IProducts[];
  onClick: (product: IProducts) => void;
}

export const ListColumn: FC<IListColumnProps> = ({
  type,
  items,
  onClick: handleClick,
}) => {
  return (
    <div className="w-full flex flex-col">
      <div className="bg-slate-800 px-4 py-2 rounded-t-xl">
        <p className="text-lg font-medium text-slate-50 text-center">{type}</p>
      </div>
      <div className=" bg-slate-300 px-4 py-2 rounded-b-xl h-full flex flex-col gap-y-2">
        {items.map((item, index) => (
          <Button
            key={`${item.name}-${index}`}
            className="w-full"
            variant="secondary"
            size="lg"
            onClick={() => handleClick(item)}
          >
            {item.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

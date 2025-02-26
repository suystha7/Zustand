import { CircleX, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useShallow } from "zustand/react/shallow";
import { useStore } from "@/store/store";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ChangeQtyButtons } from "./ChangeQtyButton";

export function Cart() {
  const { reset, products, removeProduct, total, address } = useStore(
    useShallow((state) => ({
      reset: state.reset,
      products: state.products,
      removeProduct: state.removeProduct,
      total: state.total,
      address: state.address,
    }))
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary" size="icon">
          <ShoppingCart />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="overflow-y-scroll space-y-2 w-96">
        <div className="flex gap-2 text-lg items-center justify-between">
          <h1>Cart:</h1>
          <Button variant="destructive" onClick={reset} size="icon">
            <CircleX />
          </Button>
        </div>
        <div className="space-y-2">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between gap-2">
                <CardTitle>{product.title}</CardTitle>
                <Button
                  variant="destructive"
                  onClick={() => removeProduct(product.id)}
                  size="icon"
                >
                  <Trash2 />
                </Button>
              </CardHeader>
              <CardContent>${product.price}</CardContent>
              <CardFooter>
                <ChangeQtyButtons productId={product.id} />
              </CardFooter>
            </Card>
          ))}
        </div>
        <p>Total: ${total}</p>
        <p>Address: {address}</p>
      </PopoverContent>
    </Popover>
  );
}

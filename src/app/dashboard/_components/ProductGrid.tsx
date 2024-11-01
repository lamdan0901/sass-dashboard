import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
// import { AddToSiteProductModalContent } from "./AddToSiteProductModalContent"
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { DeleteProductAlertDialogContent } from "@/app/dashboard/_components/DeleteProductAlertDialogContent";
import { AddToSiteProductModalContent } from "@/app/dashboard/_components/AddToSiteProductModalContent";
// import { DeleteProductAlertDialogContent } from "./DeleteProductAlertDialogContent"

type TProduct = {
  id: string;
  name: string;
  url: string;
  description?: string | null;
};

export function ProductGrid({ products }: { products: TProduct[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export function ProductCard({ id, name, url, description }: TProduct) {
  const productEditLink = `/dashboard/products/${id}/edit`;
  return (
    <Card>
      <CardHeader>
        <div className="flex gap-2 justify-between items-end">
          <CardTitle>
            <Link href={productEditLink}>{name}</Link>
          </CardTitle>
          <Dialog>
            <AlertDialog>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="size-8 p-0">
                    <div className="sr-only">Action Menu</div>
                    <DotsHorizontalIcon className="size-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href={productEditLink}>Edit</Link>
                  </DropdownMenuItem>
                  <DialogTrigger asChild>
                    <DropdownMenuItem>Add To Site</DropdownMenuItem>
                  </DialogTrigger>
                  <DropdownMenuSeparator />
                  <AlertDialogTrigger asChild>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </AlertDialogTrigger>
                </DropdownMenuContent>
              </DropdownMenu>
              <DeleteProductAlertDialogContent id={id} />
            </AlertDialog>
            <AddToSiteProductModalContent id={id} />
          </Dialog>
        </div>

        <CardDescription>{url}</CardDescription>
      </CardHeader>

      {description && <CardContent>{description}</CardContent>}
    </Card>
  );
}

// "use client";

// import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
// import Link from "next/link";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { useDeleteProductMutation } from "@/apiRequest/product";
// import EditProductForm from "@/app/product/edit-product";
// import { ProductSchemaType } from "@/schemaValidations/product.schema";
// import { toast } from "@/components/ui/toast"; // Sửa import

// export function CreateProduct() {
//   return (
//     <Link
//       href="/products/create"
//       className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
//     >
//       <span className="hidden md:block">Tạo sản phẩm</span>{" "}
//       <PlusIcon className="h-5 md:ml-4" />
//     </Link>
//   );
// }

// export function UpdateProduct({ product }: { product: ProductSchemaType }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogTrigger asChild>
//         <Button
//           variant="outline"
//           className="rounded-md border p-2 hover:bg-gray-100"
//         >
//           <PencilIcon className="w-5" />
//         </Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>Chỉnh sửa sản phẩm</DialogTitle>
//         </DialogHeader>
//         <EditProductForm product={product} onClose={() => setOpen(false)} />
//       </DialogContent>
//     </Dialog>
//   );
// }

// export function DeleteProduct({ id }: { id: number }) {
//   const deleteProductMutation = useDeleteProductMutation();

//   const handleDelete = async () => {
//     try {
//       await deleteProductMutation.mutateAsync(id);
//       toast({
//         title: "Thành công",
//         description: "Xóa sản phẩm thành công",
//       });
//     } catch (error) {
//       const errorMessage =
//         error instanceof Error ? error.message : "Lỗi khi xóa sản phẩm";
//       toast({
//         title: "Lỗi",
//         description: errorMessage,
//         variant: "destructive",
//       });
//     }
//   };

//   return (
//     <Button
//       variant="outline"
//       onClick={handleDelete}
//       className="rounded-md border p-2 hover:bg-gray-100"
//       disabled={deleteProductMutation.isPending}
//     >
//       <span className="sr-only">Xóa</span>
//       <TrashIcon className="w-5" />
//     </Button>
//   );
// }

"use client";

import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDeleteProductMutation } from "@/apiRequest/product";
import EditProductForm from "@/app/product/edit-product";
import { ProductSchemaType } from "@/schemaValidations/product.schema";
import toast from "react-hot-toast";

export function CreateProduct() {
  return (
    <Link
      href="/products/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Tạo sản phẩm</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateProduct({ product }: { product: ProductSchemaType }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="rounded-md border p-2 hover:bg-gray-100"
        >
          <PencilIcon className="w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Chỉnh sửa sản phẩm</DialogTitle>
        </DialogHeader>
        <EditProductForm product={product} onClose={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}

export function DeleteProduct({ id }: { id: number }) {
  const deleteProductMutation = useDeleteProductMutation();

  const handleDelete = async () => {
    try {
      await deleteProductMutation.mutateAsync(id);
      toast.success("Xóa sản phẩm thành công!");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Lỗi khi xóa sản phẩm";
      toast.error(errorMessage);
    }
  };

  return (
    <Button
      variant="outline"
      onClick={handleDelete}
      className="rounded-md border p-2 hover:bg-gray-100"
      disabled={deleteProductMutation.isPending}
    >
      <span className="sr-only">Xóa</span>
      <TrashIcon className="w-5" />
    </Button>
  );
}

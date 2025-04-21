// "use client";

// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { updateProduct } from "@/apiRequest/product";
// import {
//   UpdateProductBodySchema,
//   UpdateProductBodyType,
//   ProductResultSchemaType,
//   GetProductsResponseType,
// } from "@/schemaValidations/product.schema";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// interface EditProductFormProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   product: GetProductsResponseType[number];
// }

// const EditProductForm: React.FC<EditProductFormProps> = ({
//   open,
//   onOpenChange,
//   product,
// }) => {
//   const queryClient = useQueryClient();

//   // Khởi tạo form với react-hook-form và zod
//   const form = useForm<UpdateProductBodyType>({
//     resolver: zodResolver(UpdateProductBodySchema),
//     defaultValues: {
//       productName: product.productName,
//       unitPrice: product.unitPrice,
//       quantilyStock: product.quantilyStock,
//       categoryId: product.categoryId,
//       supplierId: product.supplierId,
//     },
//   });

//   // Mutation để cập nhật sản phẩm
//   const updateMutation = useMutation<
//     ProductResultSchemaType,
//     Error,
//     { id: number; body: UpdateProductBodyType }
//   >({
//     mutationFn: ({ id, body }) => updateProduct(id, body),
//     onSuccess: (result) => {
//       if (result.isSuccess) {
//         queryClient.invalidateQueries({ queryKey: ["products"] });
//         onOpenChange(false); // Đóng modal
//         form.reset();
//       } else {
//         alert(result.errorMessage || "Cập nhật sản phẩm thất bại!");
//       }
//     },
//     onError: (error) => {
//       alert(error.message || "Cập nhật sản phẩm thất bại!");
//     },
//   });

//   // Xử lý submit form
//   const onSubmit = (values: UpdateProductBodyType) => {
//     updateMutation.mutate({ id: product.id, body: values });
//   };

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Chỉnh sửa sản phẩm</DialogTitle>
//         </DialogHeader>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//             <FormField
//               control={form.control}
//               name="productName"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Tên sản phẩm</FormLabel>
//                   <FormControl>
//                     <Input {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="unitPrice"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Giá sản phẩm</FormLabel>
//                   <FormControl>
//                     <Input
//                       type="number"
//                       {...field}
//                       onChange={(e) => field.onChange(Number(e.target.value))}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="quantilyStock"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Số lượng tồn kho</FormLabel>
//                   <FormControl>
//                     <Input
//                       type="number"
//                       {...field}
//                       onChange={(e) => field.onChange(Number(e.target.value))}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="categoryId"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>ID danh mục</FormLabel>
//                   <FormControl>
//                     <Input
//                       type="number"
//                       {...field}
//                       onChange={(e) => field.onChange(Number(e.target.value))}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="supplierId"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>ID nhà cung cấp</FormLabel>
//                   <FormControl>
//                     <Input
//                       type="number"
//                       {...field}
//                       onChange={(e) => field.onChange(Number(e.target.value))}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <div className="flex justify-end gap-2">
//               <Button
//                 type="button"
//                 variant="outline"
//                 onClick={() => onOpenChange(false)}
//               >
//                 Hủy
//               </Button>
//               <Button type="submit" disabled={updateMutation.isPending}>
//                 {updateMutation.isPending ? "Đang lưu..." : "Lưu"}
//               </Button>
//             </div>
//           </form>
//         </Form>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default EditProductForm;

"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Định nghĩa interface cho props
interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
}

interface EditUserFormProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  user: User | null;
  formData: {
    email: string;
    firstName: string;
    lastName: string;
    avatar: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
}

const EditUserForm: React.FC<EditUserFormProps> = ({
  isOpen,
  onOpenChange,
  user,
  formData,
  onInputChange,
  onSave,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Chỉnh sửa người dùng</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              value={formData.email}
              onChange={onInputChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="firstName" className="text-right">
              First Name
            </Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={onInputChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="lastName" className="text-right">
              Last Name
            </Label>
            <Input
              id="lastName"
              name="lastname"
              value={formData.lastName}
              onChange={onInputChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="avatar" className="text-right">
              Avatar URL
            </Label>
            <Input
              id="avatar"
              name="avatar"
              value={formData.avatar}
              onChange={onInputChange}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Hủy
          </Button>
          <Button onClick={onSave}>Lưu</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditUserForm;
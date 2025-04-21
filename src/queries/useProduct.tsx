// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import productApiRequest from "@/apiRequest/product";
// import {
//   CreateProductBodyType,
//   UpdateProductBodyType,
//   ProductResultSchemaType,
// } from "@/schemaValidations/product.schema";

// // Hook để tạo sản phẩm
// export const useCreateProductMutation = () => {
//   const queryClient = useQueryClient();
//   return useMutation<ProductResultSchemaType, Error, CreateProductBodyType>({
//     mutationFn: productApiRequest.createProduct,
//     onSuccess: () => {
     
//       queryClient.invalidateQueries({ queryKey: ["products"] });
//     },
//   });
// };

// // Hook để cập nhật sản phẩm
// export const useUpdateProductMutation = () => {
//   const queryClient = useQueryClient();
//   return useMutation<
//     ProductResultSchemaType,
//     Error,
//     { id: number; body: UpdateProductBodyType }
//   >({
//     mutationFn: ({ id, body }) => productApiRequest.updateProduct(id, body),
//     onSuccess: () => {
      
//       queryClient.invalidateQueries({ queryKey: ["products"] });
//     },
//   });
// };

// // Hook để xóa sản phẩm
// export const useDeleteProductMutation = () => {
//   const queryClient = useQueryClient();
//   return useMutation<ProductResultSchemaType, Error, number>({
//     mutationFn: productApiRequest.deleteProduct,
//     onSuccess: () => {
    
//       queryClient.invalidateQueries({ queryKey: ["products"] });
//     },
//   });
// };

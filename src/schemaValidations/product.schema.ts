import { z } from "zod";

export const ProductSchema = z.object({
  id: z.number().int().positive(),
  productName: z.string().min(1, "Tên sản phẩm không được để trống"),
  unitPrice: z.number().positive("Giá sản phẩm phải lớn hơn 0"),
  quantilyStock: z.number().int().nonnegative("Số lượng tồn kho không được âm"),
  categoryId: z.number().int().positive("ID danh mục phải là số nguyên dương"),
  supplierId: z
    .number()
    .int()
    .positive("ID nhà cung cấp phải là số nguyên dương"),
});

export const CreateProductBodySchema = z.object({
  productName: z.string().min(1, "Tên sản phẩm không được để trống"),
  unitPrice: z.number().positive("Giá sản phẩm phải lớn hơn 0"),
  quantilyStock: z.number().int().nonnegative("Số lượng tồn kho không được âm"),
  categoryId: z.number().int().positive("ID danh mục phải là số nguyên dương"),
  supplierId: z
    .number()
    .int()
    .positive("ID nhà cung cấp phải là số nguyên dương"),
});

export const UpdateProductBodySchema = z.object({
  productName: z.string().min(1, "Tên sản phẩm không được để trống").optional(),
  unitPrice: z.number().positive("Giá sản phẩm phải lớn hơn 0").optional(),
  quantilyStock: z
    .number()
    .int()
    .nonnegative("Số lượng tồn kho không được âm")
    .optional(),
  categoryId: z
    .number()
    .int()
    .positive("ID danh mục phải là số nguyên dương")
    .optional(),
  supplierId: z
    .number()
    .int()
    .positive("ID nhà cung cấp phải là số nguyên dương")
    .optional(),
});

export const DeleteProductBodySchema = z.object({
  id: z.number().int().positive("ID sản phẩm phải là số nguyên dương"),
});

export const ProductResultSchema = z.object({
  isSuccess: z.boolean(),
  data: ProductSchema.nullable(),
  errorMessage: z.string().nullable(),
});

export const GetProductsResponseSchema = z.array(
  z.object({
    id: z.number().int().positive(),
    productName: z.string(),
    unitPrice: z.number().positive(),
    quantilyStock: z.number().int().nonnegative(),
    categoryId: z.number().int().positive(),
    supplierId: z.number().int().positive(),
  })
);

export type GetProductsResponseType = z.infer<typeof GetProductsResponseSchema>;

export type ProductSchemaType = z.infer<typeof ProductSchema>;
export type CreateProductBodyType = z.infer<typeof CreateProductBodySchema>;
export type UpdateProductBodyType = z.infer<typeof UpdateProductBodySchema>;
export type DeleteProductBodyType = z.infer<typeof DeleteProductBodySchema>;
export type ProductResultSchemaType = z.infer<typeof ProductResultSchema>;

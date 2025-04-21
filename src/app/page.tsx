// import General from "@/components/Cards/General";

// import Calendar from "@/components/Cards/Calendar";
// import Lines from "@/components/Cards/Lines";
// import { TableDemo } from "@/components/Cards/Table";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// export default function Home() {
//   return (
//     <div className="grid gap-[32px]">
//       <div className="grid grid-cols-2 gap-[32px]">
//         <General />
//         <div className="grid gap-[32px]">
//           <Calendar />
//           <Calendar />
//         </div>
//       </div>
//       <div className="grid grid-cols-2 gap-[32px] h-[300px] overflow-hidden">
//         <Lines />
//         <Card className="p-[32px] overflow-y-scroll w-full shadow-lg transition-shadow duration-300 hover:shadow-2xl">
//           <TableDemo />
//         </Card>
//       </div>
//     </div>
//   );
// }

// import { getAllProducts } from "@/apiRequest/product";
// import { GetProductsResponseType } from "@/schemaValidations/product.schema";
// import ProductTable from "@/app/product/product-table";

// export default async function ProductPage() {
//   let products: GetProductsResponseType = [];
//   let error: string | null = null;

//   try {
//     products = await getAllProducts();
//   } catch (err) {
//     error =
//       err instanceof Error ? err.message : "Không thể tải danh sách sản phẩm";
//   }

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h2>
//       {error ? (
//         <p className="text-red-500">{error}</p>
//       ) : (
//         <ProductTable initialData={products} />
//       )}
//     </div>
//   );
// }

// "use client";

// import { getProducts } from "@/apis/productService";

// import { useEffect } from "react";

// export default function PageHome() {
//   useEffect(() => {
//     getProducts();
//   }, []);
//   return <h1>page home</h1>;
// }

import ListUser from "@/app/product/product-table";

export default function Page() {
  return <ListUser />;
}

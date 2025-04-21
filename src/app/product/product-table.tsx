// // "use client";

// // import React, { useState } from "react";
// // import { useQuery } from "@tanstack/react-query";
// // import { useDeleteProductMutation } from "@/apiRequest/product";
// // import { GetProductsResponseType } from "@/schemaValidations/product.schema";
// // import {
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableHead,
// //   TableHeader,
// //   TableRow,
// // } from "@/components/ui/table";
// // import { Button } from "@/components/ui/button";
// // import { Edit, Trash2 } from "lucide-react";
// // import EditProductForm from "./edit-product";

// // interface ProductTableProps {
// //   initialData: GetProductsResponseType;
// // }

// // const ProductTable: React.FC<ProductTableProps> = ({ initialData }) => {
// //   const [openEditModal, setOpenEditModal] = useState(false);
// //   const [selectedProduct, setSelectedProduct] = useState<
// //     GetProductsResponseType[number] | null
// //   >(null);

// //   const { data } = useQuery<GetProductsResponseType>({
// //     queryKey: ["products"],
// //     queryFn: async () => {
// //       const { getAllProducts } = await import("@/apiRequest/product");
// //       return getAllProducts();
// //     },
// //     initialData,
// //   });

// //   // Xử lý xóa sản phẩm
// //   const deleteMutation = useDeleteProductMutation();

// //   const handleDelete = (id: number) => {
// //     if (confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
// //       deleteMutation.mutate(id);
// //     }
// //   };

// //   const handleEdit = (product: GetProductsResponseType[number]) => {
// //     setSelectedProduct(product);
// //     setOpenEditModal(true);
// //   };

// //   return (
// //     <>
// //       <Table>
// //         <TableHeader>
// //           <TableRow>
// //             <TableHead>ID</TableHead>
// //             <TableHead>Tên sản phẩm</TableHead>
// //             <TableHead>Giá (VND)</TableHead>
// //             <TableHead>Số lượng tồn kho</TableHead>
// //             <TableHead>ID danh mục</TableHead>
// //             <TableHead>ID nhà cung cấp</TableHead>
// //             <TableHead>Hành động</TableHead>
// //           </TableRow>
// //         </TableHeader>
// //         <TableBody>
// //           {data.map((product) => (
// //             <TableRow key={product.id}>
// //               <TableCell>{product.id}</TableCell>
// //               <TableCell>{product.productName}</TableCell>
// //               <TableCell>{product.unitPrice}</TableCell>
// //               <TableCell>{product.quantilyStock}</TableCell>
// //               <TableCell>{product.categoryId}</TableCell>
// //               <TableCell>{product.supplierId}</TableCell>
// //               <TableCell>
// //                 <div className="flex gap-2">
// //                   <Button
// //                     variant="ghost"
// //                     size="icon"
// //                     onClick={() => handleEdit(product)}
// //                     title="Sửa"
// //                   >
// //                     <Edit className="h-4 w-4" />
// //                   </Button>
// //                   <Button
// //                     variant="ghost"
// //                     size="icon"
// //                     onClick={() => handleDelete(product.id)}
// //                     title="Xóa"
// //                     disabled={
// //                       deleteMutation.isPending &&
// //                       deleteMutation.variables === product.id
// //                     }
// //                   >
// //                     <Trash2 className="h-4 w-4" />
// //                   </Button>
// //                 </div>
// //               </TableCell>
// //             </TableRow>
// //           ))}
// //         </TableBody>
// //       </Table>

// //       {selectedProduct && (
// //         <EditProductForm
// //           open={openEditModal}
// //           onOpenChange={setOpenEditModal}
// //           product={selectedProduct}
// //         />
// //       )}
// //     </>
// //   );
// // };

// // export default ProductTable;

"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import EditUserForm from "./edit-product";

// Định nghĩa interface cho dữ liệu người dùng
interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
}

const ListUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    avatar: "",
  });

  // lấy sdanh sách ng dùng từ api
  useEffect(() => {
    axios
      .get("http://localhost:8080/user/all")
      .then((res) => {
        console.log(">>> check res: ", res);
        const userData = res.data || []; 
        if (Array.isArray(userData)) {
          setUsers(userData);
        } else {
          console.error(">>> Data is not an array: ", userData);
          setUsers([]);
        }
      })
      .catch((error) => {
        console.error(">>> Error fetching users: ", error);
        setUsers([]); 
      });
  }, []);

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setFormData({
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      avatar: user.avatar,
    });
    setIsEditModalOpen(true);
  };

  // xu li thaay doi trong form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // sự kiện lưu

  const handleSave = async () => {
    if (selectedUser) {
      try {
        // Gọi API PUT để cập nhật người dùng
        const response = await axios.put(
          `http://localhost:8080/user/update/${selectedUser.id}`,
          formData
        );
        console.log(">>> Update response: ", response.data);


        setUsers(
          users.map((user) =>
            user.id === selectedUser.id ? { ...user, ...formData } : user
          )
        );
        setIsEditModalOpen(false);
        setSelectedUser(null);
      } catch (error) {
        console.error(">>> Error updating user: ", error);
      }
    }
  };

  // sự kiện xóa
  const handleDelete = async (id: number) => {
    try {
     
      const response = await axios.delete(
        `http://localhost:8080/user/delete/${id}`
      );
      console.log(">>> Delete response: ", response.data);

 
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error(">>> Error deleting user: ", error);
    }
  };
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Danh sách người dùng</h1>
      {users.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>

              <TableHead>First Name</TableHead>
              <TableHead>Last Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Avatar</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>

                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Image
                    src={`/${user.avatar}`}
                    alt={`${user.firstName} avatar`}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  {/* {user.avatar} */}
                </TableCell>

                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(user)}
                    >
                      Sửa
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(user.id)}
                    >
                      Xóa
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p>Loading...</p>
      )}
      <EditUserForm
        isOpen={isEditModalOpen}
        onOpenChange={setIsEditModalOpen}
        user={selectedUser}
        formData={formData}
        onInputChange={handleInputChange}
        onSave={handleSave}
      />
    </div>
  );
};

export default ListUser;

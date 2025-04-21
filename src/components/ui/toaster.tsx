// "use client";

// import * as React from "react";
// import { useToast } from "@/components/hooks/use-toast"; // Ensure this path is correct
// import {
//   Toast,
//   ToastClose,
//   ToastDescription,
//   ToastTitle,
//   ToastViewport,
//   ToastProvider as ToastUIProvider, // Renamed to avoid conflict
// } from "@/components/ui/toast";

// // Define the props type for clarity
// interface ToastProps {
//   id: string;
//   title?: React.ReactNode;
//   description?: React.ReactNode;
//   action?: React.ReactElement;
//   variant?: "default" | "destructive";
// }

// export function Toaster() {
//   const { toasts } = useToast();

//   return (
//     <ToastUIProvider>
//       {toasts.map(({ id, title, description, action, variant }: ToastProps) => (
//         <Toast key={id} variant={variant}>
//           <div className="grid gap-1">
//             {title && <ToastTitle>{title}</ToastTitle>}
//             {description && <ToastDescription>{description}</ToastDescription>}
//           </div>
//           {action}
//           <ToastClose />
//         </Toast>
//       ))}
//       <ToastViewport />
//     </ToastUIProvider>
//   );
// }

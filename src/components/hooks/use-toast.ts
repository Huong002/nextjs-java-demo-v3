// "use client";

// import * as React from "react";

// // Define the Toast type
// type Toast = {
//   id: string;
//   title?: React.ReactNode;
//   description?: React.ReactNode;
//   action?: React.ReactElement;
//   variant?: "default" | "destructive";
// };

// // Define the context type
// interface ToastContextType {
//   toast: (props: Omit<Toast, "id">) => void;
//   dismiss: (id: string) => void;
//   clearAll: () => void;
//   toasts: Toast[];
// }

// // Create the context with proper typing and initial value
// const ToastContext = React.createContext<ToastContextType | undefined>(
//   undefined
// );

// // Custom hook to use the toast context
// export function useToast() {
//   const context = React.useContext(ToastContext);
//   if (!context) {
//     throw new Error("useToast must be used within a ToastProvider");
//   }
//   return context;
// }

// // ToastProvider component to manage toast state
// export function ToastProvider({ children }: { children: React.ReactNode }) {
//   const [toasts, setToasts] = React.useState<Toast[]>([]);

//   const toast = React.useCallback(
//     ({
//       title,
//       description,
//       action,
//       variant = "default",
//     }: Omit<Toast, "id">) => {
//       const id = Math.random().toString(36).substring(2, 9);
//       setToasts((prev) => [
//         ...prev,
//         { id, title, description, action, variant },
//       ]);
//     },
//     []
//   );

//   const dismiss = React.useCallback((id: string) => {
//     setToasts((prev) => prev.filter((t) => t.id !== id));
//   }, []);

//   const clearAll = React.useCallback(() => {
//     setToasts([]);
//   }, []);

//   const value = React.useMemo(
//     () => ({ toasts, toast, dismiss, clearAll }),
//     [toasts, toast, dismiss, clearAll]
//   );

//   return (
//     <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
//   );
// }

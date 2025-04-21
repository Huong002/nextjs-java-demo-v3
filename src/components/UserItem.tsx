"use client";
export default function UserItem() {
  return (
    <div className="flex items-center justify-between gap-2 border rounded-[8px] p-2">
      <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700] flex items-center justify-center">
        <img
          src="avatar.jpg"
          alt="User Avatar"
          className="rounded-full w-20 h-20 object-cover"
        />
      </div>
      <div className="grow">
        <p className="text-[16px] font-bold">Trần Phước Hưỡng</p>
        <p className="text-[12px] text-neutral-500">psymint002@gmail.com</p>
      </div>
    </div>
  );
}

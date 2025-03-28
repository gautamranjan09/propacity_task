import React, { useContext } from "react";
import myContext from "../context/myContext";
import alertIcon from "../assets/alert.svg";

const DeleteModal = () => {
  const { isDeleteModalOpen, closeDeleteModal, handleDelete, itemToDelete } = useContext(myContext);

  if (!isDeleteModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={closeDeleteModal}>
      <div onClick={(e) => e.stopPropagation()} className="flex flex-col gap-2 bg-[#FFFFFF] rounded-xl w-[400px]  p-6 shadow-[0_8px_8px_-4px_#10182808,0_20px_24px_-4px_#10182814]">
        <div className="">
          <img src={alertIcon} alt="Alert Icon" className="w-16 h-16" />
        </div>

        <div className="font-inter mb-6">
          <p className="text-lg font-medium text-[#101828] mb-2">Caution!</p>
          <p className="text-[#667085] text-sm font-normal">
            Are you sure you want to Delete <span className="font-bold">{itemToDelete?.name || itemToDelete?.title || "this item"}</span>?
          </p>
        </div>

        <div className="flex space-x-3 font-inter">
          <button onClick={closeDeleteModal} className="flex-1 basis-0 shadow-sm text-base font-medium leading-6 px-[18px] py-[10px] bg-[#FFFFFF] text-[#344054] rounded-lg border border-[#DEDEDE] hover:bg-gray-200 transition-colors">
            Cancel
          </button>
          <button onClick={handleDelete} className="flex-1 basis-0 px-[18px] py-[10px] bg-[#FC5A5A] border border-[#FC5A5A] shadow-sm text-base font-medium leading-6 text-[#FFFFFF] rounded-lg hover:bg-red-600 transition-colors">
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;

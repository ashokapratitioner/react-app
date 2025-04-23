import { forwardRef, useImperativeHandle, useRef } from "react";

const Dialog = forwardRef(({ children }: any, ref: any) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      dialogRef.current?.showModal();
    },
    close: () => {
      dialogRef.current?.close();
    },
  }));

  return (
    <dialog ref={dialogRef}>
      {children}
    </dialog>
  );
});

export default Dialog;

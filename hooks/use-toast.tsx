import { toast } from "sonner";
import ToastAlert from "@/components/toast/toast-alert";

type ToastType = "success" | "error" | "warning";

interface ToastOptions {
  description?: string;
  type?: ToastType;
  duration?: number;
  dateTime?: Date;
}

const useToast = () => {
  const addToast = (options: ToastOptions = {}, close: boolean = true) => {
    toast.custom(
      (t) => (
        <ToastAlert
          type={options.type || "success"}
          description={options.description || ""}
          dateTime={options.dateTime ?? new Date()}
          onClose={close ? () => toast.dismiss(t) : undefined}
        />
      ),
      {
        duration: options.duration ?? 3000,
      }
    );
  };

  return { addToast };
};

export default useToast;

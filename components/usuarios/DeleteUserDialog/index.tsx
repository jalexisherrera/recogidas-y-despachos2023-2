import { Dialog } from "@/components/ui/Dialog";
import { Dispatch, SetStateAction, useState } from "react";
import axios from "axios";
import { Spinner } from "@/components/ui/Spinner";
import { toast } from "react-toastify";
import { API_SERVICES } from "@/service";
import { mutate } from "swr";

interface DeleteUserDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  user: any;
}

const DeleteUserDialog = ({ open, setOpen, user }: DeleteUserDialogProps) => {
  const [loading, setLoading] = useState(false);

  const deleteUser = async () => {
    setLoading(true);
    try {
      await axios.request({
        method: 'DELETE',
        url: `${API_SERVICES.users}/${user.id}`,
      });
      await mutate(API_SERVICES.users);
      toast.success("Usuario eliminado correctamente");
    } catch (error) {
      console.log(error);
      toast.error("Error eliminando el usuario");
    }
    setLoading(false);
    setOpen(false);
  };

  return (
    <Dialog
      title="Eliminar usuario"
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center">
          <span>Esta Acción no se puede revertir.</span>
          <span>¿Está seguro qde querer eliminar el usuario?</span>
        </div>
        <div className="flex gap-3">
          <button
            disabled={loading}
            type="button"
            onClick={deleteUser}
            className="primary"
          >
            {loading ? <Spinner /> : <span>Continuar</span>}
          </button>
          <button
            disabled={loading}
            type="button"
            onClick={() => {
              setOpen(false);
            }}
            className="secundary"
          >
            Cancelar
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export { DeleteUserDialog };

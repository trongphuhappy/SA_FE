import {
    closeUpdateAvatarProfileDialog,
    openUpdateAvatarProfileDialog,
} from "@/hooks/use-state-slice";
import { useAppDispatch, useAppSelector } from "@/hooks/use-store";

export default function useUpdateAvatarDialog() {
    const dispatch = useAppDispatch();
    
    const updateAvatarProfileDialogState = useAppSelector(
    (state) => state.stateSlice.updateAvatarProfileDialog
    );

    const onOpenUpdateAvatarProfile = () => {
    dispatch(openUpdateAvatarProfileDialog());
    };

    const onCloseUpdateAvatarProfile = () => {
    dispatch(closeUpdateAvatarProfileDialog());
    };

    return {
    avatarOpen: updateAvatarProfileDialogState.open,
    onOpenUpdateAvatarProfile,
    onCloseUpdateAvatarProfile,
    };
}
"use client";



import { deleteFacility } from "@/lib/action";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";


const DeleteFacilityModal = ({ facility }) => {
    return (
        <AlertDialog>
            <Button variant='outline' className={'rounded-none text-red-500 border-red-500'}><TrashBin />Cancel</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-sm">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Are sure cancel facility permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{facility.name}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button onClick={async  () => deleteFacility(facility)} slot="close" variant="danger">
                                Delete facility
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default DeleteFacilityModal;
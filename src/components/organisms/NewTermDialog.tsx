import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Toaster } from "../ui/toaster";
import NewTermForm from "../molecules/NewTermForm";

const NewTermDialog = () => {
  const { data: sessionData } = useSession();

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default">Add a new term</Button>
        </DialogTrigger>

        {/*! SHOULD BE REPLACED WITH SHADCN-FORM AT SOME POINT */}
        {sessionData ? (
          <DialogContent className="">
            <DialogHeader>
              <DialogTitle>Add a new term</DialogTitle>
              <DialogDescription>
                Add a new term by filling out the form below. Some fields are
                required.
              </DialogDescription>
            </DialogHeader>
            <NewTermForm />
            {/* <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter> */}
          </DialogContent>
        ) : (
          <DialogContent className="">
            <DialogHeader>
              <DialogTitle>Please log in</DialogTitle>
              <DialogDescription>
                You have to be logged in and approved by an admin to access this
                functionality.
              </DialogDescription>
            </DialogHeader>
            <Button
              variant={"secondary"}
              onClick={sessionData ? () => void signOut() : () => void signIn()}
            >
              Sign in
            </Button>
          </DialogContent>
        )}
      </Dialog>
      <Toaster />
    </div>
  );
};

export default NewTermDialog;

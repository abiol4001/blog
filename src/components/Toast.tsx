"use client"

import { toast } from "./ui/use-toast";


type Props = {
    message: string
}

// const notify = () => toast('Here is your toast.');

const Toast = () => {
    return toast({description: "Test"})
};
export default Toast
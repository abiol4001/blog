"use client"

import toast from "react-hot-toast";

type Props = {
    message: string
}

// const notify = () => toast('Here is your toast.');

const Toast = ({message}: Props) => {
    return toast(message)
};
export default Toast
"use client";

import { BsChevronLeft } from "react-icons/bs";
import Link from "next/link";

const handleBack = () => {
    window.history.back();
}

const BackHistory = () => {
    return (
        <div className="text-left text-sm gap-1">
            <span className="blue"><BsChevronLeft size={10} /></span>
            <Link href="" onClick={handleBack}><span className="blue">Back</span></Link>
        </div>
    )
}

export default BackHistory
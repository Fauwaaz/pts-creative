"use client";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Link from "next/link";

const handleBack = () => {
    window.history.back();
}

const handleForward = () => {
    window.history.forward();
}

const BackHistory = () => {
    return (
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <div className="text-sm gap-1">
                <span className="blue"><BsChevronLeft size={10} /></span>
                <Link href="" onClick={handleBack}><span className="blue">Back</span></Link>
            </div>
            <div className="text-sm gap-1">
                <Link href="" onClick={handleForward}><span className="blue">Forward</span></Link>
                <span className="blue"><BsChevronRight size={10} /></span>
            </div>
        </div>
    )
}

export default BackHistory
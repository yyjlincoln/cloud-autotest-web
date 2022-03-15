import React from "react"

interface HelloWorldProps {
    isRed?: boolean
}

export const HelloWorld: React.FC<HelloWorldProps> = (props) => {
    const { isRed } = props;
    return (
        <>
            <div className={`${isRed === true ? "text-red-800" : ""}`}>Hello world!</div>
        </>
    )
}
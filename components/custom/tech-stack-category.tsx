import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

type TechStackCategoryProps = {
    title: string
}

export default function TechStackCategory({ title }: TechStackCategoryProps) {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold -my-2">{title}</h2>
            <div className="flex gap-4">
            <Avatar className="w-[48px] h-[48px]">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="w-[48px] h-[48px]">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="w-[48px] h-[48px]">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="w-[48px] h-[48px]">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="w-[48px] h-[48px]">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    </div>
  )
}

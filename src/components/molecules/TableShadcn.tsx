import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface TableProps {
    id: string;
    title: string;
    columns: string[];
    data: (string | React.ReactNode | { colSpan: number; content: React.ReactNode })[][];
    actions?: React.ReactNode;
    link?: string;
    icon?: string;
}

const TableShadcn: React.FC<TableProps> = ({ id, title, columns, data, actions, link, icon }) => {
    return (
        <div id={id}>
            <Table className="mt-4">
                <TableCaption>{title}</TableCaption>
                <TableHeader>
                    <TableRow className="bg-headerBgColor">{title &&
                        <TableCell colSpan={columns.length} className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                            {title}
                        </TableCell>}
                        {actions && (
                            <TableCell className="text-right">
                                {link ? (
                                    <Link href={link}>
                                        <button className="icon-button">
                                            <Image src={icon || ''} alt="Icon" className="icon w-5" />
                                        </button>
                                    </Link>
                                ) : (
                                    <button className="icon-button">
                                        <Image src={icon || ''} alt="Icon" className="icon w-5" />
                                    </button>
                                )}
                            </TableCell>
                        )}
                    </TableRow>
                    <TableRow>
                        {columns.map((col, idx) => (
                            <TableHead key={idx}>{col}</TableHead>

                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {row.map((cell, cellIndex) => {
                                if (cell === null) {
                                    return
                                }
                                if (typeof cell === 'object' && 'colSpan' in cell && 'content' in cell) {
                                    return (
                                        <TableCell key={cellIndex} colSpan={cell.colSpan} className="px-4 py-2 overflow-hidden text-left">
                                            {cell.content}
                                        </TableCell>
                                    );
                                }
                                return (
                                    <TableCell key={cellIndex} className="px-4 py-2 overflow-hidden text-left">
                                        {cell}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default TableShadcn;

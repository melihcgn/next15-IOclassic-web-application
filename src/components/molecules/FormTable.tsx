import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { NamedTextarea } from '../atoms/NamedTextarea';
interface TableProps {
    id: string;
    title: string;
    columns: string[];
    data: (string | React.ReactNode | { colSpan: number; content: React.ReactNode })[][];
    actions?: React.ReactNode;
    link?: string;
    icon?: IconType; // Update to accept a React component for the icon
    showHeader?: boolean; // New prop to indicate whether to show the header row
    altTable?: React.ReactNode; // New prop to pass the RadioGroupBar
    backgroundColor?: string;
}

const FormTable: React.FC<TableProps> = ({ id, title, columns, data, actions, link, icon: Icon, showHeader = true, altTable, backgroundColor = "bg-headerBgColor" }) => {
    return (
        <div id={id}>
            <table className="min-w-full border divide-y divide-gray-200 mt-4 ml-4 table-fixed">
                {altTable && <div>{altTable}</div>}
                <thead className={backgroundColor}>
                    <tr>
                        {title && (
                            <th colSpan={columns.length} className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                {title}
                            </th>
                        )}
                        {actions && (
                            <th className="text-right pr-2">
                                {link ? (
                                    <Link href={link}>
                                        <button className="icon-button">
                                            {Icon && <Icon className="icon w-5" />}
                                        </button>
                                    </Link>
                                ) : (
                                    <button className="icon-button">
                                        {Icon && <Icon className="icon w-5" />}
                                    </button>
                                )}
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr className='flex flex-row' key={rowIndex}>
                            {row.map((cell, cellIndex) => {
                                if (cell === null) {
                                    return null;
                                }
                                if (typeof cell === 'object' && 'colSpan' in cell && 'content' in cell) {
                                    return (
                                        <td key={cellIndex} colSpan={cell.colSpan} className="px-4 py-2 overflow-hidden text-left">
                                            {cell.content}sdfsdf
                                        </td>
                                    );
                                }
                                return (
                                    <td key={cellIndex} className="px-4 py-2 overflow-hidden text-left w-full">
                                    <NamedTextarea label={cell} placeholder="write something.."></NamedTextarea>
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FormTable;

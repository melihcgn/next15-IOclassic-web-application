import React from 'react';
import InputWithLabel from '../atoms/InputWithLabel';
import SelectList from '../atoms/SelectList';
import { DatePickerDemo } from '../atoms/Datepicker';
import Sidebar from '../molecules/Sidebar';
import RadioGroupBar from '../molecules/RadioGroupBar';
import PDtable from '../molecules/PDtable';
import tempImg from '../../../public/default_profile_picture.jpg'
import Image from 'next/image';
const PersonalDetails = () => {

    const genders = [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "empty", label: "Empty" }
    ];

    const homeReg = [
        { value: "australia", label: "Australia" },
        { value: "canada", label: "Canada" },
        { value: "staging-australia", label: "Staging-Australia" },
        { value: "new zealand", label: "New Zealand" },
        { value: "australia partners", label: "Australia Partners" },
    ];

    const activeReg = [
        { value: "australia", label: "Australia" },
        { value: "canada", label: "Canada" },
        { value: "staging-australia", label: "Staging-Australia" },
        { value: "new zealand", label: "New Zealand" },
        { value: "australia partners", label: "Australia Partners" },
    ];

    const options = [
        { value: "option-one", label: "All Offers, Discounts, News and Health Subjects" },
        { value: "option-two", label: "Only Health Subjects" },
        { value: "option-three", label: "None" },
    ];

    const items = [
        {
            id: "phone",
            label: "Phone",
        },
        {
            id: "email",
            label: "Email",
        },
        {
            id: "sms",
            label: "Sms",
        }
    ];

    return (
        <div id="addPersonalDetails" className="m-4 w-full flex flex-col">
            <header id="personalDetails" className="bg-headerBgColor flex justify-between px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Personal Details
            </header>
            <div className='w-full flex flex-row'>
                <div id='data' className="w-4/5 table-fixed">
                    <section id='PersonalInformation' className='font-bold m-2'>
                        <h1>
                            Personal Information
                        </h1>
                        <div className="w-4/5">
                            <div className="w-full flex flex-row overflow-auto p-4 space-x-4">
                                <InputWithLabel label="First Name"></InputWithLabel>
                                <InputWithLabel label="Last Name"></InputWithLabel>
                                <InputWithLabel label="Email"></InputWithLabel>
                            </div>
                            <div className="w-full flex flex-row overflow-auto p-4 space-x-4">
                                <InputWithLabel label="Mobile"></InputWithLabel>
                                <InputWithLabel label="Phone"></InputWithLabel>
                                <SelectList selectItems={genders} selectLabel="Choose your gender" label="Gender"></SelectList>
                            </div>
                            <div className="w-full flex flex-row overflow-auto p-4 space-x-4">
                                <DatePickerDemo></DatePickerDemo>
                                <InputWithLabel label="Username"></InputWithLabel>
                                <DatePickerDemo></DatePickerDemo>

                            </div>
                            <div className="w-full flex flex-row overflow-auto p-4 space-x-4">
                                <InputWithLabel label="Occupation"></InputWithLabel>
                                <InputWithLabel label="Hobbies"></InputWithLabel>
                            </div>
                            <div className="w-full p-4 flex flex-row justify-between">
                                <RadioGroupBar options={options} />
                                <Sidebar items={items} ></Sidebar>
                            </div>
                        </div>
                    </section>
                    <section id='Region' className='font-bold m-2'>
                        <h1>
                            Region
                        </h1>
                        <div className="w-full">
                            <div className="w-full flex flex-col justify-center items-start overflow-auto p-4 space-y-4">
                                <SelectList selectItems={homeReg} selectLabel="Pick One" label="Home Region"></SelectList>
                                <SelectList selectItems={activeReg} selectLabel="Pick One" label="Active Region"></SelectList>
                            </div>

                        </div>
                    </section>
                    <section id='Address' className='font-bold m-2'>
                        <h1>
                            Address
                        </h1>
                        <div className="w-full flex flex-col">
                            <div className="w-full flex flex-row justify-start items-center overflow-auto space-x-4">
                                <PDtable title="Physical" explanation="Revutskoho Street 30/1, Apt. 5 30/1 , Kyiv , Kyiv , 02068 , Kyiv , UA"></PDtable>
                                <PDtable title="Shipping" explanation="Revutskoho Street Shipping , Kyiv , Kyiv , 02068 , Kyiv , UA"></PDtable>
                            </div>
                            <div className="w-full justify-center items-start overflow-auto space-y-4">
                                <PDtable title="Home" explanation="54 Church St , St Catharines , St Catharines , L2R 7K2 , Ontario , CA"></PDtable>
                            </div>
                        </div>
                    </section>
                </div>
                <div id='image' className='max-w-1/5 overflow-hidden table-fixed'>
                    <div className="">
                        <Image
                            src={tempImg}
                            width={250}
                            height={250}
                            alt="Picture of the author"
                            className='rounded-full p-4'
                        />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default PersonalDetails;

import React from 'react';
import CustomTextBox from './CustomTextBox';
import CustomCheckbox from './CustomCheckbox';
import CustomRadio from './CustomRadio';
import CustomSelect from './CustomSelect';
import CustomDate from './CustomDate';
import CustomEmail from './CustomEmail';
import CustomButton from './CustomButton';
import CustomInputColor from './CustomInputColor';
import CustomInputFile from './CustomInputFile';
import CustomInputImage from './CustomInputImage';
import CustomInputRange from './CustomInputRange';
import CustomInputSearch from './CustomInputSearch';
import CustomInputUrl from './CustomInputUrl';
import CustomInputNumber from './CustomInputNumber';
import CustomInputPhoneNumber from './CustomInputPhoneNumber';
import { useDispatch } from 'react-redux';
import { selectStyles } from '@/redux/styleSlice';

interface CustomInputProps {
      name: string;
      type:
            | 'text'
            | 'email'
            | 'date'
            | 'fieldArray'
            | 'password'
            | 'checkbox'
            | 'radio'
            | 'select';
      options?: { desc: string; value: any }[];
      label: string;
      style?: any;
      placeholder?: string;
      array?: boolean;
      item: any;
}

const CustomInput = ({ ...item }) => {
      switch (item.type) {
            case 'number':
                  return <CustomInputNumber {...item} />;
            case 'tel':
                  return <CustomInputPhoneNumber {...item} />;
            case 'email':
                  return <CustomEmail {...item} />;
            case 'password':
                  return <CustomTextBox {...item} />;

            case 'date':
                  return <CustomDate {...item} />;
            case 'datetime-local':
                  return <CustomDate {...item} />;
            case 'month':
                  return <CustomDate {...item} />;
            case 'week':
                  return <CustomDate {...item} />;
            case 'time':
                  return <CustomDate {...item} />;

            case 'checkbox':
                  return <CustomCheckbox {...item} />;
            case 'radio':
                  return <CustomRadio {...item} />;

            case 'select':
                  return <CustomSelect {...item} />;

            case 'submit':
                  return <CustomButton {...item} />;
            case 'reset':
                  return <CustomButton {...item} />;

            case 'color':
                  return <CustomInputColor {...item} />;

            case 'file':
                  return <CustomInputFile {...item} />;

            case 'image':
                  return <CustomInputImage {...item} />;

            case 'range':
                  return <CustomInputRange {...item} />;

            case 'search':
                  return <CustomInputSearch {...item} />;

            case 'url':
                  return <CustomInputUrl {...item} />;

            default:
                  return <CustomTextBox {...item} />;
            // return <CustomButton {...item} />;
      }
};

export default CustomInput;

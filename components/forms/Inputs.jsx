import * as React from 'react';
import tw from "twin.macro";
import { Formik } from "formik";
import * as Yup from "yup";

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;

export const FormInput = (props) => (
  <React.Fragment>
    <Input
      touched={props.touched}
      errors={props.errors}
      style={{ borderColor: props.errors[props.name] && props.touched[props.name] ? 'red' : '#f7fafc' }}
      type={props.type}
      id={props.name}
      placeholder={props.placeholder}
      value={props.values[props.name]}
      onChange={props.handleChange}
      onBlur={props.handleBlur}
    />
    {props.errors[props.name] && props.touched[props.name] && (
      <div style={{ fontSize: '12px', color: 'red', padding: '4px' }}>{props.errors[props.name]}</div>
    )}
  </React.Fragment>
);
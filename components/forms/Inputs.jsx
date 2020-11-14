import * as React from 'react';
import tw from "twin.macro";

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white my-3 first:my-3`;
const InputArea = tw.textarea`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white my-3 first:my-3`;
const SelectElement = tw.select`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white my-3 first:my-3`;
const OptionElement = tw.option``;
const UploadLabel = tw.label`w-1/2 px-8 py-4 rounded-lg font-medium bg-primary-900 border border-primary-900 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const Label = tw.label`text-sm font-semibold`;

export const FormInput = (props) => (
  <React.Fragment>
    <Label>{props.label}</Label>
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

export const TextArea = (props) => (
  <React.Fragment>
    <Label>{props.label}</Label>
    <InputArea
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

export const Select = (props) => (
  <React.Fragment>
    <Label>{props.label}</Label>
    <SelectElement
      touched={props.touched}
      errors={props.errors}
      style={{ borderColor: props.errors[props.name] && props.touched[props.name] ? 'red' : '#f7fafc' }}
      id={props.name}
      placeholder={props.placeholder}
      value={props.values[props.name]}
      onChange={props.handleChange}
      onBlur={props.handleBlur}
    >
      {props.children}
    </SelectElement>
    {props.errors[props.name] && props.touched[props.name] && (
      <div style={{ fontSize: '12px', color: 'red', padding: '4px' }}>{props.errors[props.name]}</div>
    )}
  </React.Fragment>
);

export const Option = (props) => (
  <OptionElement value={props.value}>
    {props.children}
  </OptionElement>
)

export const Upload = (props) => (
  <React.Fragment>
    <Label>{props.label}</Label>
    <Input
      type="file" id="uploaad"
      name="upload"
      touched={props.touched}
      errors={props.errors}
      style={{ borderColor: props.errors[props.name] && props.touched[props.name] ? 'red' : '#f7fafc' }}
      placeholder={props.placeholder}
      onChange={props.handleChange}
      onBlur={props.handleBlur}
      accept={props.allow}
    />
    {
      props.errors[props.name] && props.touched[props.name] && (
      <div style={{ fontSize: '12px', color: 'red', padding: '4px' }}>
        {props.errors[props.name]}
      </div>
    )}
  </React.Fragment>
)
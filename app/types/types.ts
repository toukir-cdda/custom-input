/** @format */

export type InputProps = {
    name: string;
    value: string | number | boolean;
    placeholder?: string;
    label?: string;
    type: "text" | "radio-group" | "email" | "password" | "select" | "checkbox";
    typeValue?: "string" | "boolean";
    options?: Opt[];
    validations?: Validation[];
}

export type Opt = {
    value: string | number;
    desc: string;
}

export type Validation = {
    type: "required" | "isEmail" | "minLength" | "isTrue";
    value?: string | number | boolean;
    message: string;
}

export type FormStyle = {
    width: number;
    input_view: string;
    options?: string;
};

export type FormOption = {
    value: string;
    desc?: string;
};

export type FormField = {
    [key: string]: any;
    field_step?: string[];
    type: string | undefined;
    typeValue?: string;
    array?: boolean;
    name?: string | any;
    description?: string;
    placeholder?: string;
    label?: string;
    hidden?: boolean;
    pattern?: string;
    suffix?: string;
    prefix?: string;
    style?: {
        width: number;
        input_view: string;
        options?: string;
    };
    default?: any;
    options?: { value: string; desc: string }[];
    owner?: FormField[];
    validations?: {
        type: string;
        value?: boolean | number | string | RegExp;
        message: string;
    }[];
    value?: any;
};


export type StyleField = {
    id: string;
    className: string;
    desktop: React.CSSProperties;
    tablet: React.CSSProperties;
    mobile: React.CSSProperties;
};


export type ValidateForm = {
    [key: string]: any;
    form_name: string;
    form_type: string;
    db_name: string;
    collection_name: string;
    description: string;
    stepper: boolean;
    styles: StyleField;
    join?: FormField[];
};


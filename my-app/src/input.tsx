import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Checkbox, Input, Radio, TextField} from "@material-ui/core";

interface renderTextFieldProps {
    label: any,
    input: any,
    meta: any
}

let ContactForm: any = (props: any) => {
    const {handleSubmit, pristine, reset, submitting} = props;

    const renderTextField = ({
                                 label,
                                 input,
                                 meta: {touched, invalid, error},
                                 ...custom
                             }: renderTextFieldProps) => (
        <TextField
            label={label}
            placeholder={label}
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            {...custom}
        />
    )

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <div>
                    <Field
                        name="firstName"
                        component={renderTextField}
                        type="text"
                        placeholder="First Name"
                    />
                </div>
            </div>
            <div>
                <label>Last Name</label>
                <div>
                    <Field
                        name="lastName"
                        component={Input}
                        type="text"
                        placeholder="Last Name"
                    />
                </div>
            </div>
            <div>
                <label>Email</label>
                <div>
                    <Field
                        name="email"
                        component={Input}
                        type="email"
                        placeholder="Email"
                    />
                </div>
            </div>
            <div>
                <label>Sex</label>
                <div>
                    <label>
                        <Field name="sex" component={Radio} value="male"/>
                        {' '}
                        Male
                    </label>
                    <label>
                        <Field name="sex" component={Radio} value="female"/>
                        {' '}
                        Female
                    </label>
                </div>
            </div>
            <div>
                <label>Favorite Color</label>
                <div>
                    <Field name="favoriteColor" component="select">
                        <option/>
                        <option value="ff0000">Red</option>
                        <option value="00ff00">Green</option>
                        <option value="0000ff">Blue</option>
                    </Field>
                </div>
            </div>
            <div style={{display: "flex", alignItems: "center"}}>
                <label htmlFor="employed">Employed</label>
                <div>
                    <Field
                        name="employed"
                        id="employed"
                        component={Checkbox}
                    />
                </div>
            </div>
            <div>
                <label>Notes</label>
                <div>
                    <Field name="notes" component={TextField}/>
                </div>
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: "simple"
})(ContactForm);

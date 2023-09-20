'use client';
import { Formik, Form, useFormik } from 'formik';
import { useEffect } from 'react';
import CustomInput from './components/CustomInput';
import { join_forms } from './data/join_data';
import setFormikPropsValue from '../utils/setFormikPropsValue';
import { useSelector, useDispatch } from 'react-redux';
import EditStyle from './components/EditStyle';
import CustomForm from './components/form-component/CustomForm';
import { jss } from 'react-jss';
import { selectStyles } from '@/redux/styleSlice';
import { setFormData } from '@/redux/formSlice';

const Home = () => {
      const dispatch = useDispatch();
      const { field_style } = useSelector((state) => state?.inputStyle);
      const { form } = useSelector((state) => state?.formData);

      const sheet = jss
            .createStyleSheet({
                  imageContainer: {
                        backgroundColor: 'gray',
                        padding: '15px',
                  },
                  image: {
                        width: '400px',
                        mixBlendMode: 'color-dodge',
                  },
            })
            .attach();

      const { initialValues, validationSchema } = setFormikPropsValue(
            form?.join
      );
      useEffect(() => {
            //set json value on redux store
            dispatch(setFormData(join_forms));
      }, []);
      return (
            <div
                  style={{
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        background: 'black',
                        opacity: '0.8',
                  }}
            >
                  <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                              console.log(values);
                        }}
                  >
                        {({ errors, touched, setValues }) => {
                              useEffect(() => {
                                    setValues(initialValues);
                              }, [form]);
                              return (
                                    <Form
                                          style={{
                                                height: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '10px',
                                                width: '30%',
                                                padding: '10px',
                                                border: '1px solid white',
                                                borderRadius: '10px',
                                                overflowY: 'auto',
                                          }}
                                    >
                                          <div
                                                style={{
                                                      display: 'flex',
                                                      flexDirection: 'column',
                                                }}
                                          >
                                                {form?.join?.map(
                                                      (item, index) => {
                                                            return (
                                                                  <CustomInput
                                                                        key={
                                                                              index
                                                                        }
                                                                        {...item}
                                                                  />
                                                            );
                                                      }
                                                )}
                                          </div>
                                          <button
                                                style={{
                                                      backgroundColor:
                                                            'skyblue',
                                                      color: 'white',
                                                      fontWeight: 'bolder',
                                                      textShadow:
                                                            '2px 2px #ff0000',
                                                      borderRadius: '7px',
                                                }}
                                                type="submit"
                                          >
                                                Submit
                                          </button>
                                    </Form>
                              );
                        }}
                  </Formik>

                  <div className={sheet.classes.imageContainer}>
                        <img
                              className={sheet.classes.image}
                              src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2117&q=80"
                              alt=""
                        />
                  </div>

                  <div
                        style={{
                              height: '100%',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '10px',
                              width: '30%',
                              padding: '10px',
                              overflowY: 'auto',
                        }}
                  >
                        {Object.keys(field_style).length !== 0 && (
                              <CustomForm />
                        )}
                  </div>
            </div>
      );
};

export default Home;

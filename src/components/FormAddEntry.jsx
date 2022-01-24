import React, { useCallback, useContext } from "react"
import AppContext from "./AppContext"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"

const FormAddEntry = () => {
  const { addDatas } = useContext(AppContext)

  const AddEntrySchema = Yup.object().shape({
    amount: Yup.number()
      .typeError("Write a number please")
      .test(
        "amount = 0",
        "Amount must not be one of the following values: 0",
        (amount) => amount != 0
      )
      .required("Required"),
    description: Yup.string().required("Description is a required field"),
  })

  const handleFormSubmit = useCallback(
    (value, { resetForm }) => {
      addDatas({
        value: Number(value.amount),
        description: value.description,
      })
      resetForm()

      return true
    },
    [addDatas]
  )

  return (
    <Formik
      validationSchema={AddEntrySchema}
      initialValues={{
        amount: 0,
        description: "",
      }}
      onSubmit={handleFormSubmit}
    >
      {({ errors, touched }) => (
        <Form className="bg-gray-100 w-1/2 m-auto p-52 flex flex-col">
          <Field
            className={`${errors.amount && touched.amount ? "mb-0" : "mb-20"} p-2 border-2 border-blue-500`}
            id="amount"
            name="amount"
            placeholder="Add MONEY"
          ></Field>
          {touched.amount && errors.amount && <div className="mb-20 text-red-500">{errors.amount}</div>}

          <Field
            className={`${errors.description && touched.description ? "mb-0" : "mb-20"} p-2 border-2 border-blue-500`}
            as="textarea"
            id="description"
            name="description"
            placeholder="Add description"
          ></Field>
          {touched.description && errors.description && (
            <div className="mb-20 text-red-500">{errors.description}</div>
          )}

          <button type="submit" className="border-2 bg-slate-700 text-white">ADD</button>
        </Form>
      )}
    </Formik>
  )
}

export default FormAddEntry

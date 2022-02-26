import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { currenyList, QuoteFormModel, QuoteFormProps } from "../../models/constants";
import { ErrorMessage } from "@hookform/error-message";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import "../../assets/styles/ofx.css";
import CurrencyInput from "react-currency-input-field";

export const QuoteForm: FC<QuoteFormProps> = ({ handleGetQuote }) => {
  const { register, handleSubmit, formState: { errors }, control } = useForm<QuoteFormModel>({
    mode: "all",
    reValidateMode: "onBlur"
  });


  const onSubmit: (data: QuoteFormModel) => void = (data: QuoteFormModel) => handleGetQuote(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container-md m-2">
        <div className="m-4 p-4">
          <div className="row mb-2">
            <div className="col-6">
              <label className="form-label text-left justify-content-start">
                First name
                <small className="text-danger"> *</small>
              </label>
              <input id="firstName"
                placeholder="First Name"
                className="form-control form-control-lg"
                type="text"
                {...register("firstName", { required: "First Name is a required field." })} />
              <ErrorMessage
                errors={errors}
                name="firstName"
                render={({ message }) => <span className="text-danger">{message}</span>}
              />
            </div>
            <div className="col-6">
              <label className="form-label">
                Last name
                <small className="text-danger"> *</small></label>
              <input placeholder="Last Name" className="form-control form-control-lg"
                type="text" {...register("lastName", { required: "Last Name is a required field." })} />
              <ErrorMessage
                errors={errors}
                name="lastName"
                render={({ message }) => <span className="text-danger">{message}</span>}
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col">
              <label className="form-label">
                Email
              </label>
              <input placeholder="Email" className="form-control form-control-lg" type="email"  {...register("email")} />
            </div>
          </div>


          <div className="row mb-2">
            <div className="col">
              <label className="form-label">
                Telephone / Mobile
              </label>

              <Controller
                name="phoneNumber"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <PhoneInput
                    country={'au'}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />

            </div>
          </div>
        </div>
        <div className="m-4 p-4" style={{ backgroundColor: "#FBFBFB" }}>
          <div className="row mb-2">
            <div className="col-6">
              <label className="form-label">
                From Currency
                <small className="text-danger">*</small>
              </label>
              <select className="form-select" defaultValue={"AUD"} {...register("fromCurrency", { required: "This is a required field." })}>
                {currenyList.map(c => <option key={c.id} value={c.id} >{`${c.label} - ${c.id}`}</option>)}
              </select>
            </div>

            <div className="col-6">
              <label className="form-label">
                To Currency
                <small className="text-danger"> *</small>
              </label>
              <select className="form-select" defaultValue={"USD"} {...register("toCurrency", { required: "This is a required field." })}>
                {currenyList.map(c => <option key={c.id} value={c.id} >{`${c.label} - ${c.id}`}</option>)}
              </select>
            </div>
          </div>

          <div className="row mb-2">
            <div className="col">
              <label className="form-label">
                Amount
                <small className="text-danger"> *</small>
              </label>

              <Controller
                name="amount"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <CurrencyInput
                    className="form-control form-control-lg"
                    id="amount"
                    name="amount"
                    placeholder="Please enter a number"
                    defaultValue={value}
                    decimalsLimit={2}
                    onValueChange={onChange}
                  />
                )}
              />
              {errors.amount && errors.amount.type === "required" && (
                <span className="text-danger">Amount is a required field.</span>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-center m-4">
            <button className="btn btn-primary btn-rounded" type="submit">GET QUOTE</button>
          </div>
        </div>
      </div>
    </form>
  );
}

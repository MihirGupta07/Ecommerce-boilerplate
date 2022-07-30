import React, { useEffect, useState } from "react";
import { Button, Col, FormFeedback, Input, Row } from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";

const LoginScreen = ({ toggleTab }) => {
  const defaultValues = {
    email: "",
    password: "",
  };
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });
  const onSubmit = (data) => {
    const payload = {};
    payload.email = data.email;
    payload.password = data.password;

    fetch(
      "https://my-json-server.typicode.com/mihirgupta07/KryptoAssessment/users/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )
      .then((response) => response.json())
      .catch((response) => toast.error(response))
      .then(() => (window.location = "/products"));
  };
  return (
    <div>
      <h2 className="mx-4 mb-4">Login</h2>
      <Row className="m-3">
        <Col>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Please enter a valid email !",
              },
            }}
            render={({ field }) => (
              <Input
                placeholder="Enter email"
                invalid={errors.email && true}
                {...field}
              />
            )}
          />
          {errors && errors.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
        </Col>
      </Row>
      <Row className="m-3">
        <Col>
          <Controller
            id="password"
            name="password"
            rules={{
              required: "Please enter your password",
            }}
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                placeholder="Enter Password"
                {...field}
                invalid={errors.password && true}
              ></Input>
            )}
          />
          {errors.password ? (
            <FormFeedback> {errors.password.message} </FormFeedback>
          ) : null}
        </Col>
      </Row>
      <Row className="m-3">
        <Col>
          <Button color="link" className="p-0" outline>
            <small onClick={() => toggleTab("2")} className="text-primary">
              New User? Create an Account
            </small>
          </Button>
        </Col>
        <Col>
          <Button
            color="primary"
            className="px-3"
            style={{ width: "100%", borderRadius: "500px" }}
            onClick={handleSubmit(onSubmit)}
          >
            Login
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default LoginScreen;

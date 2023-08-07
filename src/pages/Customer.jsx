import React from "react";
import { useSelector } from "react-redux";
import Layout from "../Layout";
import { useTestingQuery } from "../services/api/authApi";

const Customer = () => {
  const token = useSelector((state) => state.auth.token);
  // console.log(token)
  const { data, error } = useTestingQuery(token);
  console.log(data, error);

  return <Layout>Customer</Layout>;
};

export default Customer;

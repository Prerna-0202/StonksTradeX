"use client";
import axios from "axios";
import { useQuery } from "react-query";

const useRequest = (function_name, queries = {}) => {
  const requestData = async () => {
  const searchQuery = new URLSearchParams(queries);
  var request;
    if (!function_name) {
      return {
        success: false,
        message: "function name not defined",
      };
    }
    try {
      if (searchQuery.toString()) {
        request = await axios(`https://www.alphavantage.co/query?function=${function_name}&${searchQuery.toString()}&apikey=demo`);
      }
      else {
        request = await axios(`https://www.alphavantage.co/query?function=${function_name}&apikey=demo`);
      }

      if (request.data) {
        return request.data;
      } else {
        return {
          success: false,
          message: "something went wrong while fetching data!",
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  };

  const fetchData = useQuery([function_name, queries], requestData);
  return { ...fetchData };
};

export default useRequest;

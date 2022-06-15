import axios, { AxiosError, AxiosResponse } from "axios";

export const get = (path: string, opts = {}) => {
  opts = Object.assign({}, opts, {
    method: "GET",
    data: { ...opts },
  });

  return request(path, opts);
};

export const post = (path: string, opts = {}) => {
  opts = Object.assign({}, opts, {
    method: "POST",
    data: { ...opts },
  });

  return request(path, opts);
};

const request = async (path: string, opts = {}) => {
  let options = Object.assign(
    {},
    {
      url: `/api/${path}`,
    },
    opts
  );

  return axios(options)
    .then(handleResponse)
    .catch((e: AxiosError) => {
      throw handleError(e);
    });
};

const handleError = (error: any) => {
  const errs = error & error.response ? error.response.data : error;
  return errs;
};

const handleResponse = (response: AxiosResponse) => {
  const { status, data } = response;

  if (status < 200 && status > 200) {
    handleError(response);
  }

  return data;
};

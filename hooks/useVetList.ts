import React, { useEffect, useState } from "react";
import * as ClinicAPI from "../services/index";

export const useVetList = () => {
  const [list, setList] = useState([{}]);

  useEffect(() => {
    const getVetList = () => {
      ClinicAPI.get("getClinics").then(
        (res) => {
          setList(res.clinics);
        },
        (error) => {
          console.error(error);
        }
      );
    };

    getVetList();
  }, []);

  return list;
};

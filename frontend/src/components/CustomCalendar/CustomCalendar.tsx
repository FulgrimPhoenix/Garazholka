import React, { useState } from "react";
import { createDate } from "../../utils/helpers/date/createDate";
import { createMonth } from "../../utils/helpers/date/createMonth";
import { createYear } from "../../utils/helpers/date/createYear";

const CustomCalendar = () => {
  console.log("date", createYear().createYearMonthes());

  return <h1>test</h1>;
};

export default CustomCalendar;

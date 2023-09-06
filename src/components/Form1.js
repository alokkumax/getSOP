import React, { useEffect, useState } from "react";
import img1 from "../../src/images/img1.png";
import { BsArrowRight } from "react-icons/bs";

export default function Form1(props) {
  const empty = () => {};
  // const setForm2 = props.setForm2
  const { setForm2, email, emailAction, name, nameAction, age, ageAction,institute,instituteAction,level,levelAction, course, courseAction } = props;
  return (
    <div className="mx-5">
      <div className="container py-5 ">
        <div className="row align-items-start g-lg-5">
          <div className="col-lg-5 text-center text-lg-start">
            <img
              src={img1}
              className=" vector d-block mx-lg-auto img-fluid "
              alt="Bootstrap Themes"
              width="490"
              height="300"
              loading="lazy"
            />
          </div>
          <div className="col-md-8 mx-auto w-50 col-lg-5 formF">
            <h2 className="px-5 pt-5 text-start">
              Step 1 : Personal Information
            </h2>
            <form className="p-4 p-md-5">
              <div className="form-floating mb-3">
                <input
                  value={name}
                  onChange={nameAction}
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Alok Kumar"
                  required
                />
                <label htmlFor="floatingInput">Full Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={email}
                  onChange={emailAction}
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  required
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={age}
                  onChange={ageAction}
                  type="number"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="number"
                  required
                />
                <label htmlFor="floatingPassword">Age</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={institute}
                  onChange={instituteAction}
                  type="text"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="number"
                  required
                />
                <label htmlFor="floatingPassword">Institute</label>
              </div>
              <div className="mb-3">
                <select
                  className="form-select p-3"
                  value={level}
                  onChange={
                    levelAction
                  }
                  aria-label="Default select example"
                >
                  <option selected>Select</option>
                  <option value="1">10th</option>
                  <option value="2">12th</option>
                  <option value="3">B.Tech</option>
                  <option value="3">M.Tech</option>
                </select>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={course}
                  onChange={
                    courseAction
                  }
                  type="text"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="number"
                  required
                />
                <label htmlFor="floatingPassword">What did you Study?</label>
              </div>
              <button
                className="w-auto btn btn-lg buttonNext"
                type="submit"
                onClick={
                  email != "" && name != "" && age != "" && institute != "" && level != "" && course != ""  ? setForm2 : empty
                }
              >
                <span>Continue</span>
                <BsArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

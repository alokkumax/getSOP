import React, { useState } from "react";
import img3 from "../../src/images/img3.png";
import { BsArrowRight } from "react-icons/bs";

export default function Form3(props) {
  const empty = () => {};

  const {
    setForm0,
    list,
    listAction,
    speak,
    speakAction,
    read,
    readAction,
    write,
    writeAction,
    gic,
    gicAction,
    howmuchGic,
    howmuchGicAction,
  } = props;

  return (
    <div className="mx-5">
      <div className="container py-5 mt-5 ">
        <div className="row align-items-start g-lg-5">
          <div className="col-lg-5 text-lg-start ">
            <img
              src={img3}
              className="vector d-block mx-lg-auto img-fluid "
              alt="Bootstrap Themes"
              width="490"
              height="300"
              loading="lazy"
            />
          </div>
          <div className="col-md-8 mx-auto w-50 py-5 col-lg-5">
            <h2 className="px-5 pt-5 text-start">
              Step 3 : Overall Information
            </h2>
            <form className="p-4 p-md-5">
              <label className="Ques mb-2">
                How much you would give yourself a score out of 10.
              </label>
              <label className="sample mb-1">Example: English 9/10</label>
              <br />
              <label className="Ques mb-2">English Scores - Listening</label>
              <div className="form-floating mb-3">
                <input
                  value={list}
                  onChange={listAction}
                  type="number"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Alok Kumar"
                  required
                />
                <label htmlFor="floatingInput" className="place">
                  Your answer
                </label>
              </div>

              <label className="Ques mb-1">English Scores - Speaking</label>
              <div className="form-floating mb-3">
                <input
                  value={speak}
                  onChange={speakAction}
                  type="number"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  required
                />
                <label htmlFor="floatingInput" className="place">
                  Your answer
                </label>
              </div>

              <label className="Ques mb-1">English Scores - Reading</label>
              <div className="form-floating mb-3">
                <input
                  value={read}
                  onChange={readAction}
                  type="number"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="number"
                  required
                />
                <label htmlFor="floatingPassword" className="place">
                  Your answer
                </label>
              </div>

              <label className="Ques mb-1">English Scores - Writing</label>
              <div className="form-floating mb-3">
                <input
                  value={write}
                  onChange={writeAction}
                  type="number"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="number"
                  required
                />
                <label htmlFor="floatingPassword" className="place">
                  Your answer
                </label>
              </div>

              <label className="Ques mb-1">
                Did you do a GIC?{" "}
                <label className="sample">
                  Guaranteed Investment Certificate
                </label>
              </label>
              <div className="mb-3">
                <select
                  class="form-select p-3"
                  value={gic}
                  onChange={gicAction}
                  aria-label="Default select example"
                >
                  <option selected>Select</option>
                  <option value="1">YES</option>
                  <option value="1">NO</option>
                </select>
              </div>

              <label className="Ques mb-1">
                How much did you pay towards GIC?
              </label>
              <div className="form-floating mb-3">
                <input
                  value={howmuchGic}
                  onChange={howmuchGicAction}
                  type="text"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="number"
                  required
                />
                <label htmlFor="floatingPassword" className="place">
                  Your answer
                </label>
              </div>

              <button
                className="w-auto btn btn-lg buttonNext"
                type="submit"
                onClick={
                  list != "" &&
                  speak != "" &&
                  read != "" &&
                  write != "" &&
                  gic != "" &&
                  howmuchGic != ""
                    ? setForm0
                    : empty
                }
              >
                <span>Generate SOP</span>
                <BsArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

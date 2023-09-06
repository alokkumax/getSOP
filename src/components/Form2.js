import React, { useState } from "react";
import img2 from "../../src/images/img2.png";
import { BsArrowRight } from 'react-icons/bs';

export default function Form2(props) {
  const empty=()=>{

  }
  const { setForm3, exp, expAction, canada, canadaAction, prog, progAction,country,countryAction,goal,goalAction,tut,tutAction, howmuch, howmuchAction } = props;





  return (
    <div className="mx-5">
      <div className="container py-3 ">
        <div className="row align-items-start g-lg-5">
          <div className="col-lg-5 py-5 text-lg-start ">
            <img
              src={img2}
              className="vector d-block mx-lg-auto img-fluid "
              alt="Bootstrap Themes"
              width="490"
              height="300"
              loading="lazy"
            />
          </div>
          <div className="col-md-8 mx-auto w-50 formF col-lg-5">
              <h2 className="px-5 pt-5 text-start">Step 2 : General Information</h2>
              <form className="p-4 p-md-5">
              <label className="Ques mb-2">
                Do you have any relavent work experience?
              </label>
              <label className="sample mb-1">
                  Sample Answer: I worked as a Sales Manager at Effizient Immigration Inc from Jan 2022 till Feb 2023. In this role, I managed sales operations, reaching out to leads, lead the outreach program, ensured meeting monthly targets.
              </label>
              <div className="form-floating mb-3">
                <textarea
                  value={exp}
                  onChange={expAction}
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Alok Kumar"
                  required
                />
                <label htmlFor="floatingInput" className="place">Your answer</label>
              </div>
              <label className="Ques mb-1">
              What institute did you get admitted to in Canada?
              </label>
              <div className="form-floating mb-3">
                <input
                  value={canada}
                  onChange={canadaAction}
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  required
                />
                <label htmlFor="floatingInput" className="place">Your answer</label>
              </div>
              <label className="Ques mb-1">
              What is your program of study in Canada?              
              </label>
              <div className="form-floating mb-3">
                <input
                  value={prog}
                  onChange={progAction}
                  type="text"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="number"
                  required
                />
                <label htmlFor="floatingPassword" className="place">Your answer</label>
              </div>

              <label className="Ques mb-1">
              Which country are you applying from?
              </label>
              <div className="form-floating mb-3">
                <input
                  value={country}
                  onChange={countryAction}
                  type="text"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="number"
                  required
                />
                <label htmlFor="floatingPassword" className="place">Your answer</label>
              </div>

              <label className="Ques mb-1">
              What are your future goals?
              </label>
              <div className="form-floating mb-3">
                <input
                  value={goal}
                  onChange={goalAction}
                  type="text"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="number"
                  required
                />
                <label htmlFor="floatingPassword" className="place">Your answer</label>
              </div>

              <label className="Ques mb-1">
              Did you pay your first year tuition?
              </label>
              <div className="mb-3">
              <select className="form-select p-3" value={tut} onChange={tutAction} aria-label="Default select example">
                <option selected>Select</option>
                <option value="1">YES</option>
                <option value="1">NO</option>
              </select>
              </div>

              <label className="Ques mb-1">
              How much tuition fee did you pay?
              </label>
              <div className="form-floating mb-3">
                <input
                  value={howmuch}
                  onChange={howmuchAction}
                  type="text"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="number"
                  required
                />
                <label htmlFor="floatingPassword" className="place">Your answer</label>
              </div>
             
              <button className="w-auto btn btn-lg buttonNext" type="submit" onClick={exp!="" && canada!="" && prog!="" &&country!="" &&goal!="" && tut!="" && howmuch!=""?setForm3:empty}>
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

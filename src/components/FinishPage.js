import React, { useRef } from "react";
import bluetick from "../../src/images/finish.png";
import { useEffect, useState } from "react";
// import { dataRef } from './firebase';

export default function FinishPage(props) {
  const {email, name, age,institute,level, course, 
     exp, canada, prog,country,goal,tut, howmuch,
     list,
     speak,
     read,
     write,
     gic,
     howmuchGic,
  } = props;

  return (
    <div className="p-5 ">
      <h1 className="text-center fw-bold mb-5">Statement of Purpose</h1>
     
      <p>
        From
        <br />
        {name} <br />
        {country} <br />
        {email} <br />
      </p>
      <p>
        To
        <br />
        Visa Officer <br />
        High Commission of Canada
        <br />
        Subject: Statement of Purpose for studying in Canada
        <br />
      </p>

      <p>Dear Sir/Madam,</p>
      <p>
        {" "}
        I would like to take this opportunity to introduce myself as {name}, a passionate individual with a strong background in {course}. I have recently completed my {level} in {course} from {institute}. During my academic
        journey, {exp}
      </p>
      <p>
        {" "}
        {}
        To further enhance my skills and knowledge in software engineering, I am
        seeking to pursue a program of study in Canada. While I have not yet
        finalized the specific program or education institution, I am confident
        that Canada offers excellent opportunities for academic and professional
        growth in the field of software engineering.
      </p>
      <p>
        Canada is renowned for its high-quality education system and its
        commitment to innovation and research. The interdisciplinary approach to
        education in Canadian institutions is particularly appealing to me, as
        it will provide me with a comprehensive understanding of various
        concepts related to software engineering. Additionally, the opportunity
        to study and work with highly experienced faculty members and access
        state-of-the-art facilities will greatly contribute to my academic
        pursuits.{" "}
      </p>
      <p>
        Moreover, studying in Canada will expose me to a diverse and
        multicultural environment. Interacting with students from different
        backgrounds and cultures will not only broaden my horizons but also
        enhance my communication and interpersonal skills. These skills are
        crucial for a software engineer, as collaboration and effective
        communication are essential in the industry.
      </p>
      <p>
        In terms of my future goals, {goal}
      </p>
      <p>
        I have also taken the IELTS test and achieved an overall score of {speak},
        with individual scores of {list} in listening, {read} in reading, {write} in writing,
        and 8 in speaking. This demonstrates my proficiency in the English
        language, which will enable me to excel in my chosen program of study in
        Canada.
      </p>

      {
        gic==="YES"?
          <p>In terms of finances, I have already paid 50,000 RS towards the first
            year's tuition fees, and I have also made arrangements for a Guaranteed
            Investment Certificate (GIC) to cover my living expenses for the first
            year. Additionally, my family is providing financial support for my
            education in Canada.</p> : 
          <p>
            Dear Madam/Sir, if granted the opportunity to study in Canada, I assure
            you that I will comply with all the rules and regulations set by the
            Canadian government, local authorities, and the educational institution.
            I am confident that my academic background, passion for software
            engineering, and financial stability make me a suitable candidate for a
            study visa to Canada.
          </p>
        }
        
      
      <p>
        I kindly request you to consider my application and process my visa
        application as soon as possible. I am grateful for your time and
        consideration.
      </p>

      <p>
        Sincerely,
        <br />
        {name}
      </p>
      <div className="d-flex justify-content-center m-5">
      <button className="btn buttonNext ">Copy SOP</button>

      </div>
    </div>
  );
}

import React from "react";
// import phone from "./photos/download-removebg-preview.png";
import girl from "./photos/girlimg.jpeg";
// import contact from "./photos/contact.png";
// import msg from "./photos/msg.webp";
// import cap from "./photos/cap.png";
import nearbut from "./photos/down.jpeg";
import trophy from "./photos/images12345.png";
import AdditinalInfo from "./AdditinalInfo";
import Demo from "./Demo";

const FirstView = () => {
  return (
    <div>
      <div className="main">
        <div className="box">
          <div className="toatalbox">
            <div className="boxinner">
              <div className="headline">
                <img src={girl} className="girl" />
                <div className="profileDiv">
                  <span className="name">Charlotte Rosalie</span>
                  <span className="postal">EDU-IND 66444081</span>
                </div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQChb8FC_nrj63beIDsyq-ZYwevHl1sO50-uA&usqp=CAU"
                  className="edit"
                />
              </div>
              <div className="vertical">
                <div className="phone">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQmSKTFNAF9dmQw9ymyT0PU4o09RhA16coNkFMxv988dXc-RhEx8au2trz9G_U7oSN6U&usqp=CAU"
                    className="phoneicon"
                  />
                  <p className="maill">+91 75108 27929</p>
                </div>
                <div className="phone">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOqIEkOFxBQEEnnQ6G43cATxOdl12wgzkY8s3ndA9wR4oGMaEkXNE5ZS1z_KgJkaHhSM&usqp=CAU"
                    className="msg"
                  />
                  <p className="maill">myemail@rihannasinger.com</p>
                </div>
                <div className="phone">
                  <img
                    src="data:image/png;base64,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"
                    className="cap"
                  />
                  <p className="maill">
                    Msc business with international management
                  </p>
                </div>
              </div>
              <div className="buttton">
                <button className="addresume">Add your rest document</button>
                <img src={nearbut} className="nearbut" />
              </div>
            </div>
            <div className="boxinner">
              <div className="headline">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLIbLTGKz4waJGU2vkbhQkRavjf2OdeY7Eo4l8yFnggdF3fX1bUF4FEUP13o34ioSCm-M&usqp=CAU"
                  className="girl"
                />
                <div className="profileDiv">
                  <span className="name">Rosalie Due</span>
                  <span className="postal">EDU-IND 66444081</span>
                </div>
                <button className="newbut">New</button>
              </div>
              <div className="vertical">
                <div className="phone">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQmSKTFNAF9dmQw9ymyT0PU4o09RhA16coNkFMxv988dXc-RhEx8au2trz9G_U7oSN6U&usqp=CAU"
                    className="phoneicon"
                  />
                  <p className="maill">+91 75108 27929</p>
                </div>
                <div className="phone">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOqIEkOFxBQEEnnQ6G43cATxOdl12wgzkY8s3ndA9wR4oGMaEkXNE5ZS1z_KgJkaHhSM&usqp=CAU"
                    className="msg"
                  />
                  <p className="maill">haris.karat@googlemail.com</p>
                </div>
                <div className="phone">
                  <img
                    src="data:image/png;base64,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"
                    className="cap"
                  />
                  <p className="maill">
                    Master of business Administration in global business
                  </p>
                </div>
              </div>
              <div className="buttton">
                <button className="addresume">Applied</button>
              </div>
            </div>
            <div className="boxinner">
              <div className="headline">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLIbLTGKz4waJGU2vkbhQkRavjf2OdeY7Eo4l8yFnggdF3fX1bUF4FEUP13o34ioSCm-M&usqp=CAU"
                  className="girl"
                />
                <div className="profileDiv">
                  <span className="name">Thomas paul</span>
                  <span className="postal">EDU-IND 66444081</span>
                </div>
                <button className="newbut">New</button>
              </div>
              <div className="vertical">
                <div className="phone">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQmSKTFNAF9dmQw9ymyT0PU4o09RhA16coNkFMxv988dXc-RhEx8au2trz9G_U7oSN6U&usqp=CAU"
                    className="phoneicon"
                  />
                  <p className="maill">+91 75108 27929</p>
                </div>
                <div className="phone">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOqIEkOFxBQEEnnQ6G43cATxOdl12wgzkY8s3ndA9wR4oGMaEkXNE5ZS1z_KgJkaHhSM&usqp=CAU"
                    className="msg"
                  />
                  <p className="maill">myemail@miamatrina.com</p>
                </div>
                <div className="phone">
                  <img
                    src="data:image/png;base64,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"
                    className="cap"
                  />
                  <p className="maill">Master of business Administration</p>
                </div>
              </div>
              <div className="buttton">
                <button className="addresume">Verified</button>
                <img src={nearbut} className="nearbut" />
              </div>
            </div>
          </div>
        </div>

        <div className="course">
          <div className="ccouse">
            <span className="coursetext">Course Creation</span>
            <button className="step">Step 2 of 4</button>
          </div>
          <div className="draftcros">
            <button className="draft">Save as Draft</button>
            <img
              src="data:image/png;base64,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"
              className="cross"
            />
          </div>
        </div>
        <div className="logos">
          <div className="doc">
            <div className="imagbac">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToVxImnmISSlpCg62yARv7gpOzANbQedAyMw&usqp=CAU"
                className="document"
              />
            </div>
            <p className="additiontexting">basic Information</p>
          </div>
          <span className="line"></span>
          <div className="doc">
            <div className="imagbac">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPikoGv8LpdeVXQHgbv1x-3jCMkr1K-2MrDNrccdnJXBtT9iEhlugHgiVWU_BXzdrBvRw&usqp=CAU"
                className="document"
              />
            </div>
            <p className="additiontexting">Additional Information</p>
          </div>
          <div className="line"></div>

          <div className="doc">
            <div className="imagbac">
              <img
                src={trophy}
                className="document12"
              />
            </div>
            <p className="additiontexting">Eligibility&Syllabus</p>
          </div>
          <div className="line"></div>

          <div className="doc">
            <div className="imagbac">
              <img
                src="https://cdn-icons-png.flaticon.com/512/10071/10071144.png"
                className="document12"
              />
            </div>
            <p className="additiontexting">Fee&Scholarship</p>
          </div>
        </div>
      </div>
      <AdditinalInfo/>
    </div>

  );
};

export default FirstView;
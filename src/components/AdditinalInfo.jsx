// 


import React from "react";
import { Link } from "react-router-dom";

// import deleting from './photos/delete (3).png'

const AdditinalInfo = () => {
  return (
    <div>
      <div className="mainadd">
        <div>
          <span className="head1">Additional Information</span>
        </div>
        <div className="li-row1">
          <div className="firstli">
            <div className="admn">
              <h6 className="admission">Admission</h6>
              <select className="select1" name="" id="">
                <option value="">select admission</option>
              </select>
            </div>
          </div>
          <div className="firstli">
            <div className="admn">
              <h6 className="admission">Service</h6>
              <select className="select1" name="" id="">
                <option value="">select Service</option>
              </select>
            </div>
          </div>
        </div>
        <div className="li-row1">
          <div className="firstli">
            <h6 className="admission">Course affiliation</h6>
            <div className="selectdiv">
              <select className="select" name="" id="">
                <option value="">select Course affiliation</option>
              </select>
              <button className="plus">+</button>
            </div>
          </div>
          <div className="firstli">
            <h6 className="admission">Entrance Required</h6>
            <div className="selectdiv">
              <select className="select" name="" id="">
                <option value="">select Entrance</option>
              </select>
              <button className="plus">+</button>
            </div>
          </div>
        </div>
        <div className="li-row1">
          <div className="firstli">
            <h6 className="admission">Document Required</h6>
            <div className="selectdiv">
              <select className="select" name="" id="">
                <option value="">select Document</option>
              </select>
              <button className="plus">+</button>
            </div>
          </div>
          <div className="firstli">
            <h6 className="admission">Specialization</h6>
            <div className="selectdiv">
              <select className="select" name="" id="">
                <option value="">select Specialization</option>
              </select>
              <button className="plus">+</button>
            </div>
          </div>
        </div>
        <div className="dottedline">
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          - - - - - - - - - - - - - - - - - - - - - - - - 
        </div>
        <div className="intake">
          <h3>Intakes</h3>
          <div className="inhead">
            <span className="inn">Intakes</span>
            <span className="inn">Duration</span>
          </div>
          <center>
            <div className="li-row1new">
              <div className="firstliinn">
                <button className="but">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/color-bold-style/21/56-512.png"
                    className="delete"
                  />
                </button>

                <select className="intakeselect" name="" id="">
                  <option value="">september</option>
                  <option value="">january</option>
                  <option value="">february</option>
                  <option value="">march</option>
                  <option value="">april</option>
                  <option value="">may</option>
                  <option value="">june</option>
                  <option value="">july</option>
                  <option value="">augest</option>
                  <option value="">october</option>
                  <option value="">november</option>
                  <option value="">december</option>
                </select>
              </div>
              <div className=" firstliin">
                <div className="allinbox">
                  <select className="intakeselect" name="" id="">
                    <option value="">1 year</option>
                  </select>
                  <button className="plus">+</button>
                  <button className="but">
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/color-bold-style/21/56-512.png"
                      className="delete"
                    />
                  </button>
                </div>

                <div className="allinbox">
                  <select className="intakeselect" name="" id="">
                    <option value="">2 year</option>
                  </select>
                  <button className="plus">+</button>
                  <button className="but">
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/color-bold-style/21/56-512.png"
                      className="delete"
                    />
                  </button>
                </div>
              </div>
            </div>
          </center>
        </div>
        <br />
        <button className="addrow">+ Add row</button>
        <br />{" "}
        <div className="dottedline">
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          - - - - - - - - - - - - - - - - - - - - - - - - 
        </div>
        <center>
          <div className="coursetag">
            <h6 className="admission">Course Tag</h6>
            <button className="addrow1">+New Course Tag</button>
          </div>
        </center>
        <div className="bothtagdesc">
          <div className="admn">
            <span className="inn">Tag</span>
            <select className="select1" name="" id="">
              <option value="">select tag</option>
            </select>{" "}
            <br />
            <button className="addrow">+ Add row</button>
          </div>
          <div>
            <span className="inn">Description</span>
            <div className="allinbox">
              <input
                className="selecting"
                placeholder="Enter Description"
                type="text"
              />
              <button className="but">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/color-bold-style/21/56-512.png"
                  className="delete"
                />
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="prenext">
          <div className="pos">
            <Link>
              <button className="prebtn">prev</button>
            </Link>
            <Link  to={"/demo"}>
              <button className="next">next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditinalInfo;
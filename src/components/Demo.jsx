import React from "react";
import logoun from "./photos/logowich.png";
import classroom from "./photos/classroom.png";
import reply from "./photos/reply.png";
import Demotwo from "./Demotwo";
// import roshanimg from "./photos/roshanimg.png";

const Demo = () => {
  return (
    <div>
      <div className="maincont">
        <div className="mainaddnew">
          <div className="imgtext">
            <img src={logoun} className="logoun" />
            <h5 className="headuni">University of Greenwich</h5>
          </div>
          <p className="headuni1">Dear Students!</p>
          <p className="headuni1">
            Now,Canada is The third country in the world authorize a covid-19
            vaccine.Approval for covid-19 vaccine given on December 9,2020
            <br />
            Additionally canada has given the green light t0 covid-19
            vaccine.Also ,as per the canadian government,Health Canada
            authorized the <br />
            pfizer-Bio-ntech covid-19 mrna vaccine for use for the covid-19
            pandemic.
            <br />
          </p>

          <center>
            <img src={classroom} className="classroom" />{" "}
          </center>
          <div className="commentlogo">
            <img src={logoun} className="logoun" />
            <div className="comments">
              <h5 className="textpara">Add a Comment....</h5>
              <p className="textpara1">Post</p>
            </div>
          </div>
          <p className="viewcomment">View 5 more comments</p>
          <div className="imgtext">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              className="logoun1"
            />
            <div className="comments1">
              <h5 className="textpara">Roshan Karthik</h5>
              <p className="textpara1">
                please apply for Msc accounting and Finance with placement at
                angila ruskin university for the september 2021 intake
              </p>
            </div>
          </div>
          <div className="reply">
            <img src={reply} className="replyarrow" />
            <p>3 Replies.Reply</p>
          </div>
          <div className="greenwichmain">
            <img src={logoun} className="logoun2" />
            <div className="comments1">
              <h6 className="textpara">Greenwich University</h6>
              <p className="textpara1">
                Exactly amina! small steps are so important
              </p>
            </div>
          </div>

          <div className="roshan-sub1">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              className="logoun3"
            />
            <div className="comments1">
              <h6 className="textpara">Roshan Karthik</h6>
              <p className="textpara1">
                Defenitly Aller Due one day at the time!I love it
              </p>
            </div>
          </div>

          <div className="greenwichmain-sub1">
            <img src={logoun} className="logoun2" />
            <div className="comments1">
              <h6 className="textpara">Greenwich University</h6>
              <p className="textpara1">Well said,so glad it to resonated</p>
            </div>
          </div>
          <div className="greeninput">
            <img src={logoun} className="logoun2" />
            <input
              className="inputreply"
              placeholder="Add a Reply"
              type="text"
            />
          </div>
          <div className="roshanmain-last">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              className="logoun1"
            />
            <div className="comments2">
              <h6 className="textpara">Roshan Karthik</h6>
              <p className="textpara1">
                Everything that needs to be accomplished requires time and
                effort
              </p>
            </div>
          </div>
          <div className="reply">
            <img src={reply} className="replyarrow" />
            <p>2 Replies.Reply</p>
          </div>
          <h5 className="viewcomment">Add a comment</h5>
        </div>
      </div>
      <Demotwo/>
    </div>
  );
};

export default Demo;
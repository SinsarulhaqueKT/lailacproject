import React from "react";
import nearbut from "./photos/lastlogo.png";
// import haris from './photos/haris.png'
// import jenifer from './photos/jenifer.png'
// import molly from './photos/molly.png'
// import john from './photos/john.png'
// import danny from './photos/danny.png'

const Demotwo = () => {
  return (
    <div className="maincont">
      <div className="mainaddnew">
        <div className="edumbus1">
          <img src={nearbut} className="nearbut-new" />
          <div className="edumbuscomment">
            <div className="dumtext">
              <h4 className="textpara">Edumpus</h4>
              <p className="textpara1">Commented on your post</p>
            </div>
            <p className="textpara1"> Now</p>
          </div>
        </div>
        <div className="edumbus1">
          <img src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="nearbut-new1" />
          <div className="edumbuscomment">
            <div className="dumtext">
              <h4 className="textpara">Haris Web design</h4>
              <p className="textpara1">
                Apllied new syllabus course as sample text like this ui
              </p>
            </div>
            <p className="textpara1"> 3 Mins ago</p>
          </div>
        </div>{" "}
        <div className="edumbus">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="nearbut-new1" />
          <div className="edumbuscomment">
            <div className="dumtext">
              <h4 className="textpara">Jenifer Lopez</h4>
              <p className="textpara1">
                Applied science and technology courses
              </p>
            </div>
            <p className="textpara1"> 1 Huor ago</p>
          </div>
        </div>
        <div className="edumbus">
          <img src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className="nearbut-new1" />
          <div className="edumbuscomment">
            <div className="dumtext">
              <h4 className="textpara">Molly morgan</h4>
              <p className="textpara1">Replied your comment</p>
            </div>
            <p className="textpara1"> 1 day ago</p>
          </div>
        </div>
        <div className="edumbus">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className="nearbut-new1" />
          <div className="edumbuscomment">
            <div className="dumtext">
              <h4 className="textpara">John Due</h4>
              <p className="textpara1">
                Applied science and technology courses
              </p>
            </div>
            <p className="textpara1"> 1 weak ago</p>
          </div>
        </div>{" "}
        <div className="edumbus">
          <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className="nearbut-new1" />
          <div className="edumbuscomment">
            <div className="dumtext">
              <h4 className="textpara">Dannny miles</h4>
              <p className="textpara1">Commented on your photo</p>
            </div>
            <p className="textpara1"> 1 Mon ago</p>
          </div>
        </div>{" "}
        <div className="edumbus">
          <img src={nearbut} className="nearbut-new1" />
          <div className="edumbuscomment">
            <div className="dumtext">
              <h4 className="textpara">Edumpus</h4>
              <p className="textpara1">Approved your blog post</p>
            </div>
            <p className="textpara1"> 14 Jan 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demotwo;
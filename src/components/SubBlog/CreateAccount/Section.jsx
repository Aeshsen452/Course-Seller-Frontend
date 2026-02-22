import CreateAccountImage from "../../../assets/images/BlogBanner1.png";
import accOne from "../../../assets/images/createaccimage1.png";
import acctwo from "../../../assets/images/createimg2.png";
import accthree from "../../../assets/images/createaccimage3.png";
import accfour from "../../../assets/images/createacc4.png";
import accfive from "../../../assets/images/createacc-5.png";
import accsix from "../../../assets/images/createacc6.png";
const Section = () => {
  return (
    <div className=" p-10 flex flex-col gap-y-10 ">
      <h1 className="text-2xl font-bold mb-5">How to Create an Account</h1>
      <span>By Mark | How to </span>

      <div className=" relative flex justify-center items-center">
        <img
          src={CreateAccountImage}
          className=" object-cover w-[80%] h-96"
        ></img>
      </div>
      <div className="gap-y-10">
        <a href="https://lms.kitehawk.net/">
          Go to 
          <span className="font-bold"> https://lms.kitehawk.net/ </span>{" "}
        </a>
        <h1>Click on “Learn Online“</h1>
        <h1 className="mt-5 text-xl">
          Scroll down to CLICK HERE FOR PROGRAM 1
        </h1>

        <div className=" relative flex my-5 items-center">
          <img src={accOne} className=" object-cover w-[80%] h-96"></img>
        </div>

        <label>
          See:      Is this your first time here? <br />
          Click on “Create new account“.
        </label>

        <div className=" relative flex my-5 items-center">
          <img src={acctwo} className=" object-cover w-[80%] h-96"></img>
        </div>
        <p>
          Complete the information required for the new account i.e. Username,
          password and personal details. Click on “Create my new account“.
        </p>

        <div className=" relative flex my-5 items-center">
          <img src={accthree} className=" object-cover w-[80%] h-96"></img>
        </div>

        <p>
          You need to create your Student Profile: <br />
          To Complete the new account information you will need:
          <br />
          FIRST NAME
          <br />
          LAST NAME
          <br />
          EMAIL ADDRESS work or private email address
          <br />
          PASSWORD   Your choice  (Not your coupon code!!)
          <br />
          Click on the checkbox:  I have read and agree to the Terms of Service
          and Customer Privacy Policy.
          <br />
          Then click SIGN UP
          <br />
          You will then be prompted to Complete Your Purchase
          <br />
        </p>

        <div className=" relative flex my-5 items-center">
          <img src={accfour} className=" object-cover w-[80%] h-96"></img>
        </div>
        <p>
          <span className="font-bold">
            {" "}
            You are asked if you:       Have a coupon?{" "}
          </span>{" "}
              <br />
          If you have a coupon code ENTER COUPON code:   ???????   <br />
          This is provided by Mark Nevill
          <br />
          Then click APPLY
          <br />
          The total price will adjust depending on your coupon amount.
          <br />
          Then enter your credit card/payment information if applicable
          <br />
          <span className="font-bold">Click Enroll Now </span>
          <br />
          <span className="font-bold">
            You are now enrolled in this course. {" "}
          </span>
          <br />
          Once in the student dashboard, you open your course.
          <br />
        </p>

        <div className=" relative flex my-5 items-center">
          <img src={accfive} className=" object-cover w-[80%] h-96"></img>
        </div>

        <p>
          You will see   How to use the program on the left hand side.  I
          recommend you <br />
          watch this video.
          <br />
          To access Program 1:
          <br />
          On the Left hand side is a panel:
          <br />
          <span className="font-bold"> “ Kitehawk Learning Program 1 “ </span>
          <br />
          Click on this panel and the Program will appear.
          <br />
          A new screen will appear.
          <br />
          Then click <span className="font-bold">START </span> 
          <br />
        </p>

        <div className=" relative flex my-5 items-center">
          <img src={accsix} className=" object-cover w-[80%] h-96"></img>
        </div>

        <p className="font-bold">
          The Menu will appear and disappear by clicking on the three horizontal
          bars (the hamburger) in the top left-hand corner. Please phone Mark
           0419 903 424 if you have any problems.
        </p>
      </div>
    </div>
  );
};

export default Section;

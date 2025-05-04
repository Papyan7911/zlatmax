// function Private() {
//     return (
//         <>
//         <section class="wrapper">
//             <h2>Registration</h2>
//             <form action="#">
//                 <div class="input-box">
//                     <input type="text" placeholder="Enter your name" required>
//                 </div>
//                 <div class="input-box">
//                     <input type="text" placeholder="Enter your email" required>
//                 </div>
//                 <div class="input-box">
//                     <input type="password" placeholder="Create password" required>
//                 </div>
//                 <div class="input-box">
//                     <input type="password" placeholder="Confirm password" required>
//                 </div>
//                 <div class="policy">
//                     <input type="checkbox">
//                         <h3>I accept all terms & condition</h3>
//                 </div>
//                 <div class="input-box button">
//                     <input type="Submit" value="Register Now">
//                 </div>
//                 <div class="text">
//                     <h3>Already have an account? <a href="#">Login now</a></h3>
//                 </div>
//             </form>
//         </section>
//         </>
//     );
// }


// export default Private;

import './Private.css'

function Private() {
    return (
      <section className="registration">
        <h2>Registration</h2>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Enter your name"  />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Enter your email"  />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Create password"  />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Confirm password"  />
          </div>
          <div className="policy">
            <input type="checkbox"  />
            <span>I accept all terms & conditions</span>
          </div>
          <div className="input-box button">
            <input type="submit" value="Register Now" />
          </div>
          <div className="text">
            <h3>
              Already have an account? <a href="#">Login now</a>
            </h3>
          </div>
        </form>
      </section>
    );
  }
  

//   required 
  export default Private;
  
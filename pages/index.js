export default function Home() {
  return (
    <>
      {/* Animated Background */}
      <div className="lines">
        {/* Lines */}
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>

        {/* Dots */}
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>

      {/* Content */}
      <div className="container">
        <h1>Solvdd Technology Solutions</h1>
        <p>Solving tomorrow, today!</p>
        <a href="mailto:contactus@solvdd.com">Contact Us</a>
      </div>
    </>
  );
}

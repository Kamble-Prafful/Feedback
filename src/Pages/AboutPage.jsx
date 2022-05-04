import Card from "../Shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About Page</h1>
        <p>This a React app to leave feedback to the product or service</p>
        <p>Version: 1.0.3</p>

        <Link to="/" style={{ textDecoration: "none" }}>
          Back to Home
        </Link>
      </div>
    </Card>
  );
}

export default AboutPage;

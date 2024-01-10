import { useFetcher } from "react-router-dom";
import classes from "./NewsletterSignup.module.css";

function NewsletterSignup() {

  const fetch = useFetcher()

  return (
    <form method="post" className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </form>
  );
}

export default NewsletterSignup;

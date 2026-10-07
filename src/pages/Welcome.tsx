import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound.tsx";

// Private client onboarding pages live as static files in /public/welcome/<name>.html.
// This route lets clients use the clean link /welcome/<name>.
const Welcome = () => {
  const { name } = useParams();
  const valid = !!name && /^[a-z0-9-]+$/i.test(name);

  useEffect(() => {
    if (valid && name) window.location.replace(`/welcome/${name.toLowerCase()}.html`);
  }, [name, valid]);

  return valid ? null : <NotFound />;
};

export default Welcome;

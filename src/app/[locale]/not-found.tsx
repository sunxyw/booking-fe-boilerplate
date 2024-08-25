import notFoundImage from "@/assets/error/not_found.svg";
import { Link } from "@/components/Link";
import {
  UserFriendlyError,
  UserFriendlyErrorControl,
} from "@/components/UserFriendlyError";

export default function NotFoundPage() {
  return (
    <UserFriendlyError
      title="Something is not right..."
      message="Page you are trying to open does not exist. You may have mistyped the address, or the page has been moved to another URL. If you think this is an error contact support."
      image={notFoundImage}
      control={
        <UserFriendlyErrorControl component={Link} href="/">
          Go back to home page
        </UserFriendlyErrorControl>
      }
    />
  );
}

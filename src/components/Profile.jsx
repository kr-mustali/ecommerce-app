import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";

const Profile = () => {
  const { user, getAccessTokenSilently, isAuthenticated, isLoading } =
    useAuth0();
  getAccessTokenSilently()
    .then((token) => {
      console.log(user);
      console.log(token);
    })
    .catch((error) => {
      console.error("Error getting access token:", error);
    });
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="d-flex align-items-center">
        <img
          src={user.picture}
          alt={user.name}
          className="rounded-circle"
          style={{ width: "40px", height: "40px", marginRight: "10px" }}
        />
        <div>
          <h6 className="mb-0">{user.name}</h6>
          <p className="text-muted">{user.email}</p>
          <LogoutButton />
        </div>
      </div>
    )
  );
};

export default Profile;

import { useLogin } from "../hooks/useLogin";
const ProfilePage = () => {
  const username = useLogin();

  return (
    <>
      <p>username:{username}</p>
    </>
  );
};

export default ProfilePage;

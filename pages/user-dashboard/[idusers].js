import { useRouter } from "next/router";

export default function UserDashboard() {
  const router = useRouter();
  console.log("user id = ", router.query.idusers);
  return (
    <div>This is user's dashboard page for user {router.query.idusers} </div>
  );
}

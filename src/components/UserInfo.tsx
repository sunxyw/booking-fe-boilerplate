import { cookies } from 'next/headers';

export default function UserInfo() {
  const value = cookies().get('user')?.value;
  if (!value) {
    return (
      <div>
        <h1>User Info</h1>
        <p>No user info found</p>
      </div>
    );
  }

  return (
    <div>
      <h1>User Info</h1>
      <p>User: {value}</p>
    </div>
  );
}

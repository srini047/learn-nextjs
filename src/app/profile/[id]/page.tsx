export default function UserProfile({params}: any) {
    return (
      <div>
        <h1>Profile of user <span className="text-4xl">{params.id}</span></h1>
      </div>
    );
  }
  
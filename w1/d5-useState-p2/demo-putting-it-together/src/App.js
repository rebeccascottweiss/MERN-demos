import logo from "./logo.svg";
import "./App.css";

import ProfilePreview from "./components/ProfilePreview";

function App() {
  const profileDataFromDb = [
    {
      username: "Beard Lover",
      thumbnailUrl: "https://images-cdn.9gag.com/photo/aOKgZpR_460s.jpg",
      likeCount: 3,
      bio: "This is my bio.",
    },
    {
      username: "Queen",
      thumbnailUrl:
        "https://www.biography.com/.image/t_share/MTE1ODA0OTcxNjIzMzUxODIx/queen-elizabeth-ii-9286165-1-402.jpg",
      likeCount: 1,
      bio: "You are my peasant",
    },
    {
      username: "Nice guy",
      thumbnailUrl:
        "https://m.media-amazon.com/images/I/91VIl9sAfRL._SS500_.jpg",
      likeCount: 0,
      bio: "'Nice guy.'",
    },
  ];

  return (
    <div className="App" style={{ width: "60%", margin: "0 auto" }}>
      {profileDataFromDb.map((profileData, i) => {
        return <ProfilePreview key={i} data={profileData} />;
      })}
    </div>
  );
}

export default App;

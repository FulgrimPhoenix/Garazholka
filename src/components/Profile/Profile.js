import "./Profile.css";

export function Profile({profileData}) {
  return (
    <section className="profile">
      <div className="profile__photo-container">
        <img
          className="profile__photo"
          src={profileData.avatar}
          alt="Аватар_пользователя"
        />
      </div>
      <div className="profile__about-me">
        <h2 className="profile__name">{profileData.name}</h2>
        <p className="profile__my-description">{profileData.aboutMe}</p>
      </div>
    </section>
  );
}

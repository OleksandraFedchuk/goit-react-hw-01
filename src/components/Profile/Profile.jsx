import css from "./Profile.module.css";

export default function Profile({ username, tag, location, avatar, status }) {
  return (
    <div className={css.item}>
      <div>
        <img className={css.img} src={avatar} alt="User Avatar" />
        <p className={css.name}>{username}</p>
        <p className={css.common}>@{tag}</p>
        <p className={css.common}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.li}>
          <span className={css.text}>Followers</span>
          <span>{status.followers}</span>
        </li>
        <li className={css.li}>
          <span className={css.text}>Views</span>
          <span>{status.views}</span>
        </li>
        <li className={css.li}>
          <span className={css.text}>Likes</span>
          <span>{status.likes}</span>
        </li>
      </ul>
    </div>
  );
}

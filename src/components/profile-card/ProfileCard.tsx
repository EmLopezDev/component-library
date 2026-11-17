import "./ProfileCard.css";

export type ProfileCardProps = {
    id: number;
    name: string;
    role: string;
    company: string;
    avatar: string;
    description: string;
};

const ProfileCard = ({ name, role, company, avatar, description }: ProfileCardProps) => {
    return (
        <article className="profile__card">
            <div className="profile__content">
                <img
                    className="profile__content__image"
                    src={avatar}
                    alt=""
                />
                <div className="profile__content__meta">
                    <span className="profile__content__name">{name}</span>
                    <span className="profile__content__role">
                        {role} @ {company}
                    </span>
                </div>
                <p className="profile__content__body">{description}</p>
            </div>
            <div className="profile__contact">
                <button className="profile__contact__button">Contact me</button>
                <ul className="profile__contact__social">
                    <li className="icon">🥳</li>
                    <li className="icon">🥳</li>
                    <li className="icon">🥳</li>
                    <li className="icon">🥳</li>
                </ul>
            </div>
        </article>
    );
};

export default ProfileCard;

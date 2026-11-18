import Icon from "../icon/Icon";
import { type IconName } from "../icon/IconMap";
import "./ProfileCard.css";

type SocialMedia = {
    github?: string;
    instagram?: string;
    linkedin?: string;
    x?: string;
};

export type ProfileCardProps = {
    id: number;
    name: string;
    role: string;
    company: string;
    avatar: string;
    description: string;
    email: string;
    socialMedia: SocialMedia;
};

const IconLink = ({ link, icon }: { link: string; icon: IconName }) => {
    return (
        <li>
            <a
                href={link}
                target="_blank"
            >
                <Icon
                    name={icon}
                    color="blue"
                />
            </a>
        </li>
    );
};

const ProfileCard = ({
    name,
    role,
    company,
    avatar,
    description,
    email,
    socialMedia,
}: ProfileCardProps) => {
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
                <a
                    href={`mailto:${email}`}
                    className="profile__contact__button"
                >
                    Contact me
                </a>
                <ul className="profile__contact__social">
                    {Object.entries(socialMedia).map(([key, value]) => {
                        return (
                            <IconLink
                                link={value}
                                icon={key as IconName}
                            />
                        );
                    })}
                </ul>
            </div>
        </article>
    );
};

export default ProfileCard;
